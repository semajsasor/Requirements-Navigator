# Pre-Launch Checklist

## Product Readiness

- Confirm every published guide has official source links.
- Confirm every published guide has a current last reviewed date.
- Mark stale guides as `outdated` instead of silently leaving them published.
- Replace placeholder Privacy and Terms pages with reviewed legal text.
- Review all disclaimer language for accuracy and tone.

## Supabase

- Run `supabase/schema.sql` in the production Supabase project.
- Enable Email auth and configure Site URL plus redirect URLs.
- Promote the first admin user with the SQL shown in `README.md`.
- Verify row-level security policies are enabled on all public tables.
- Seed or create initial `process_guides` content.
- Confirm `SUPABASE_SERVICE_ROLE_KEY` is only set in server-side environments.

## QA

- Run `npm run lint`.
- Run `npm run test`.
- Run `npm run build`.
- Run `npx playwright install chromium` once on CI or the test machine.
- Run `npm run test:e2e`.
- Run authenticated e2e tests with `E2E_AUTH_EMAIL` and `E2E_AUTH_PASSWORD`.
- Check mobile layouts for Home, Explore, Process Detail, Dashboard, and Admin.

## Deployment

- Add all required environment variables in Vercel.
- Deploy a preview branch and smoke-test auth callbacks.
- Confirm `/dashboard` and `/admin` redirect unauthenticated users.
- Confirm admins can draft, publish, unpublish, and mark guides outdated.
- Confirm normal users cannot access `/admin`.
- Confirm saved guide progress persists after sign out/sign in.

## Monitoring

- Enable Vercel runtime logs and error alerts.
- Track failed Supabase auth and database requests.
- Add analytics only after privacy policy updates.
