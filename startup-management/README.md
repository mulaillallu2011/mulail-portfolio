# Startup Management

Next.js application source supplied by the project owner, including `app/`, `lib/`, public assets, the authentication proxy, and build configuration. The portfolio at the repository root is a separate application.

**Live preview unavailable: a working app deployment has not yet been verified.**

## Run locally

Use Node.js 22 or newer. From this directory, run `npm ci`. Create a local, untracked `.env.local` containing your own Supabase project settings:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

Run `npm run dev`, or `npm run build` followed by `npm start` for a production server. Never commit `.env.local`, database passwords, service-role keys, or other secrets. The public browser key requires correctly configured database access policies.

## Database requirements

The supplied files do not include database migrations or access policies. The app references `profiles`, `products`, `inventory_movements`, `suppliers`, `purchases`, `sales`, `students`, `courses`, `batches`, `batch_students`, `payments`, and `company_settings`. It also calls the database functions `adjust_inventory`, `create_purchase`, `create_sale`, and `record_student_payment`.

Use the matching database schema, functions, authentication configuration, and row-level security policies from the original project. Do not assume that creating empty tables is sufficient. The dashboard requires a signed-in user with an admin profile. The supplied login offers a User option pointing to `/user`, but that route was not supplied.

## Deployment

This app uses server-side authentication, cookies, and a proxy. It cannot run as part of the portfolio's static GitHub Pages export. Deploy it as a separate Next.js project on a server-capable host, using `startup-management` as its root directory. Configure the two environment variables in the host's settings and configure Supabase for that deployment. The existing portfolio's root directory and Pages workflow must remain unchanged.

After the deployed app and authentication have been verified, set project `03`'s `previewUrl` in the portfolio's `app/data.ts` to the verified HTTPS address.

## Validation performed

- App lint, TypeScript checks, and production build passed using dummy Supabase settings, without loading the original `.env.local` or contacting the real database.
- The local production login screen rendered, and signed-out access to `/dashboard` redirected to `/login`.
- Authenticated workflows, database functions, access policies, and live deployment remain unverified.
- The supplied dependency installation reported eight high-severity audit findings; dependency remediation remains outstanding before production readiness can be claimed.
- Removed unsupported props from the supplied `MobileNav` usage to resolve a TypeScript build error, and set the app's bundler root to this directory for independent builds inside the portfolio repository.
