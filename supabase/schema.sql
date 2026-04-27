create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_settings (
  user_id uuid primary key references public.users(id) on delete cascade,
  default_country_code text,
  email_reminders boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.users
  add column if not exists role text not null default 'user'
  check (role in ('user', 'admin'));

create table if not exists public.process_guides (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  country_code text not null,
  country_name text not null,
  region text,
  city text,
  summary text not null,
  audience text not null,
  eligibility jsonb not null default '[]'::jsonb,
  required_documents jsonb not null default '[]'::jsonb,
  instructions jsonb not null default '[]'::jsonb,
  fees jsonb not null default '[]'::jsonb,
  estimated_processing_time jsonb not null,
  common_mistakes jsonb not null default '[]'::jsonb,
  tips jsonb not null default '[]'::jsonb,
  faq jsonb not null default '[]'::jsonb,
  official_source_links jsonb not null default '[]'::jsonb,
  last_reviewed_date date not null,
  review_status text not null default 'draft' check (review_status in ('draft', 'reviewed', 'outdated')),
  difficulty text not null default 'Medium' check (difficulty in ('Low', 'Medium', 'High')),
  tags text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft', 'review', 'published', 'archived')),
  published boolean generated always as (status = 'published') stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.saved_guides (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  guide_id uuid not null references public.process_guides(id) on delete cascade,
  status text not null default 'Not started' check (status in ('Not started', 'In progress', 'Completed')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, guide_id)
);

alter table public.process_guides
  add column if not exists review_status text not null default 'draft'
  check (review_status in ('draft', 'reviewed', 'outdated'));

create table if not exists public.checklist_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  saved_guide_id uuid not null references public.saved_guides(id) on delete cascade,
  item_id text not null,
  item_type text not null check (item_type in ('document', 'step')),
  completed boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, saved_guide_id, item_id)
);

create index if not exists process_guides_published_idx
  on public.process_guides (status, country_code, category);

create index if not exists process_guides_location_idx
  on public.process_guides (country_code, region, city);

create index if not exists process_guides_tags_idx
  on public.process_guides using gin (tags);

create index if not exists process_guides_required_documents_idx
  on public.process_guides using gin (required_documents);

create index if not exists saved_guides_user_idx
  on public.saved_guides (user_id, updated_at desc);

create index if not exists checklist_progress_saved_guide_idx
  on public.checklist_progress (saved_guide_id, completed);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  )
  on conflict (id) do update
    set email = excluded.email,
        full_name = excluded.full_name,
        updated_at = now();

  insert into public.user_settings (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.users
    where id = auth.uid()
      and role = 'admin'
  );
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

drop trigger if exists set_users_updated_at on public.users;
create trigger set_users_updated_at
  before update on public.users
  for each row
  execute function public.set_updated_at();

drop trigger if exists set_user_settings_updated_at on public.user_settings;
create trigger set_user_settings_updated_at
  before update on public.user_settings
  for each row
  execute function public.set_updated_at();

drop trigger if exists set_process_guides_updated_at on public.process_guides;
create trigger set_process_guides_updated_at
  before update on public.process_guides
  for each row
  execute function public.set_updated_at();

drop trigger if exists set_saved_guides_updated_at on public.saved_guides;
create trigger set_saved_guides_updated_at
  before update on public.saved_guides
  for each row
  execute function public.set_updated_at();

drop trigger if exists set_checklist_progress_updated_at on public.checklist_progress;
create trigger set_checklist_progress_updated_at
  before update on public.checklist_progress
  for each row
  execute function public.set_updated_at();

alter table public.users enable row level security;
alter table public.user_settings enable row level security;
alter table public.process_guides enable row level security;
alter table public.saved_guides enable row level security;
alter table public.checklist_progress enable row level security;

create policy "Users can read their profile"
  on public.users
  for select
  using (auth.uid() = id);

create policy "Admins can read all profiles"
  on public.users
  for select
  using (public.is_admin());

create policy "Admins can update profiles"
  on public.users
  for update
  using (public.is_admin())
  with check (public.is_admin());

create policy "Users can read their settings"
  on public.user_settings
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their settings"
  on public.user_settings
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their settings"
  on public.user_settings
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Published guides are readable"
  on public.process_guides
  for select
  using (status = 'published');

create policy "Admins can read all guides"
  on public.process_guides
  for select
  using (public.is_admin());

create policy "Admins can create guides"
  on public.process_guides
  for insert
  with check (public.is_admin());

create policy "Admins can update guides"
  on public.process_guides
  for update
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can delete guides"
  on public.process_guides
  for delete
  using (public.is_admin());

create policy "Users can read their saved guides"
  on public.saved_guides
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their saved guides"
  on public.saved_guides
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their saved guides"
  on public.saved_guides
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their saved guides"
  on public.saved_guides
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their checklist progress"
  on public.checklist_progress
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their checklist progress"
  on public.checklist_progress
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their checklist progress"
  on public.checklist_progress
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their checklist progress"
  on public.checklist_progress
  for delete
  using (auth.uid() = user_id);
