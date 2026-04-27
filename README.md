# Requirements Navigator

Requirements Navigator helps people answer one practical question before they begin a real-life process:

> Know exactly what you need before you start.

The app organizes process guides for government IDs, job applications, school enrollment, banking, business permits, renewals, immigration, and other paperwork-heavy workflows. Each guide can include eligibility, required documents, steps, fees, timelines, mistakes, tips, FAQ, official sources, and review status.

## Stack

- Next.js App Router with TypeScript
- Tailwind CSS v4
- shadcn/ui-style local components
- Supabase Auth and Postgres
- Zod validation
- Vitest and Testing Library
- Playwright e2e tests

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Required:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-or-publishable-key
```

Optional:

```bash
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
E2E_AUTH_EMAIL=admin@example.com
E2E_AUTH_PASSWORD=your-test-password
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3000
```

Use either `NEXT_PUBLIC_SUPABASE_ANON_KEY` or `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Keep `SUPABASE_SERVICE_ROLE_KEY` server-only.

## Scripts

```bash
npm run dev
npm run lint
npm run test
npm run test:e2e
npm run build
npm run check
```

Install Playwright browsers once before e2e tests:

```bash
npx playwright install chromium
```

Authenticated e2e tests run only when Supabase env plus `E2E_AUTH_EMAIL` and `E2E_AUTH_PASSWORD` are set.

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Enable Email auth.
4. Add `http://localhost:3000` and your production domain to Site URL and redirect URLs.
5. Add Supabase env vars to `.env.local`.
6. Sign up through `/auth/sign-up`.
7. Promote your first admin:

```sql
update public.users
set role = 'admin'
where email = 'admin@example.com';
```

8. Visit `/admin` to create or publish process guides.

## Data Model

Core Supabase entities:

- `users`: public user profile linked to `auth.users`
- `user_settings`: user preferences
- `process_guides`: structured guide content
- `saved_guides`: user-saved guide workspaces
- `checklist_progress`: completed document and step items

Guide content uses normal columns for filterable fields such as slug, category, country, region, city, tags, publication status, and review status. Nested content such as eligibility, documents, steps, fees, FAQ, and sources is stored as JSONB.

Publication status controls visibility: `draft`, `review`, `published`, `archived`.

Review status communicates content trust: `draft`, `reviewed`, `outdated`.

## App Structure

- `src/app`: App Router pages and route-level loading/error states
- `src/components/ui`: local UI primitives
- `src/components/process`: process guide, checklist, source, and trust components
- `src/components/dashboard`: saved guide dashboard components
- `src/components/admin`: lightweight CMS components
- `src/lib/actions`: server actions for auth, admin, saved guides, and progress
- `src/lib/data`: static seed guide data
- `src/lib/process`: guide formatting, filtering, and mapping helpers
- `src/lib/supabase`: browser, server, service-role, and middleware clients
- `src/lib/validations`: Zod schemas
- `tests/unit`: pure logic tests
- `tests/components`: component tests
- `tests/e2e`: Playwright launch flows

## Admin CMS

Admin routes live under `/admin` and require an authenticated user whose profile role is `admin`.

Admins can:

- Create process guides
- Edit existing guides
- Save drafts
- Publish or unpublish guides
- Mark guides as reviewed, draft, or outdated
- Edit official source links
- Update last reviewed dates
- Manage category, region, and tags

The CMS intentionally uses simple structured JSON textareas for nested guide content. This keeps the MVP practical while preserving a clear path to richer repeatable field editors later.

## Deployment On Vercel

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Set the framework preset to Next.js.
4. Add production environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` or `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` if you want server-side seed fallback behavior
5. Set Supabase Auth Site URL to your Vercel production URL.
6. Add Vercel preview and production URLs to Supabase redirect URLs.
7. Deploy a preview and run smoke tests.
8. Promote the first admin user in production Supabase.
9. Publish initial guides from `/admin`.

## Launch Checks

Before launching:

- Run `npm run lint`.
- Run `npm run test`.
- Run `npm run build`.
- Run `npm run test:e2e`.
- Complete `docs/pre-launch-checklist.md`.
- Review `docs/next-features.md` for the post-MVP roadmap.

## Known Launch Notes

- Authenticated Playwright tests require a real Supabase test account.
- Public guide pages fall back to static seed content when Supabase is unavailable.
- Legal pages are placeholders and should be reviewed before production use.
- Guide content is preparation support. Users should verify final details with official sources.
