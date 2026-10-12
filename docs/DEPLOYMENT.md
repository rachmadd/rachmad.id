# Deployment

Target: Vercel Hobby, source on GitHub, domain `rachmad.id`.

## 1. How CI/CD is split

- **Vercel's GitHub integration deploys.** Every push to `main` deploys to production; every pull request gets a preview URL. No deploy tokens in GitHub, no custom deploy script.
- **GitHub Actions is the quality gate.** It runs lint, typecheck, test and build on every PR and on `main` (`.github/workflows/ci.yml`).
- **Branch protection on `main`** requires the `quality` job to pass before merge, so a broken PR cannot reach production.

Why not deploy from Actions with the Vercel CLI: it needs three secrets (`VERCEL_TOKEN`, org and project IDs), duplicates what the integration already does, and loses Vercel's PR comments. If Rachmad later wants "deploy only after CI passes" at the cost of that setup, the alternative is to disable Vercel's automatic Git deploys and add a workflow job that runs `vercel pull`, `vercel build --prod` and `vercel deploy --prebuilt --prod`. Do not set this up unless asked.

## 2. One-time setup

1. Create the GitHub repository (private or public) and push this folder as the root.
2. In Vercel: Add New Project, import the repo. Framework preset: Next.js. Package manager: pnpm (detected from `pnpm-lock.yaml` and the `packageManager` field).
3. Environment variables (Production and Preview): `NEXT_PUBLIC_SITE_URL=https://rachmad.id`. Nothing else is required.
4. Production branch: `main`.
5. In GitHub: Settings, Branches, add a rule for `main`: require a pull request, require status check `quality`, require branches to be up to date.
6. Confirm a preview deployment works from a test PR before attaching the domain.

## 3. Domain

1. Buy `rachmad.id` from an Indonesian-accredited registrar (`.id` is registered through registrars approved by PANDI; some require identity verification, so allow extra time).
2. In Vercel: Project, Settings, Domains, add `rachmad.id` and `www.rachmad.id`.
3. Set DNS at the registrar to exactly the records Vercel displays for the domain (an A record for the apex and a CNAME for `www`; use the values Vercel shows, not values remembered from elsewhere). Alternatively, point the registrar's nameservers to Vercel and let Vercel manage DNS.
4. Make `rachmad.id` the primary domain and redirect `www.rachmad.id` to it (permanent redirect). HTTPS is issued automatically.
5. Wait for Vercel to show a valid configuration before announcing the URL.
6. Add a DNS TXT record for Google Search Console verification, then submit the sitemap (see SEO.md section 7).

Email on the domain (`hello@rachmad.id` or similar) is optional and separate. If wanted, use the registrar's email forwarding or a mail provider; do not publish an address that is not receiving mail yet.

## 4. Environments

| Environment | URL | Indexing |
|---|---|---|
| Production | `https://rachmad.id` | indexed |
| Preview | `*.vercel.app` | `noindex` (header, robots and metadata, see SEO.md section 5) |
| Local | `http://localhost:3000` | n/a |

## 5. Release flow

1. Branch from `main`, work, push, open a PR.
2. CI runs; Vercel posts a preview URL. Check both locales on the preview, on a phone if possible.
3. Merge when green. Vercel deploys to production automatically.
4. Rollback: Vercel dashboard, Deployments, promote the previous deployment (instant, no rebuild).

## 6. Pre-launch checklist

- `pnpm check:content` passes (no `placeholder: true` left).
- Real logos, avatar, CV files and contact links are in place.
- Screenshots reviewed for private or confidential data.
- Lighthouse and SEO checklists in SEO.md pass on production.
- `robots.txt` and `sitemap.xml` on `rachmad.id` look right; preview deployments are `noindex`.
- Link previews checked on LinkedIn and WhatsApp.
- Domain redirects: `http` to `https`, `www` to apex, `/` to `/en` or `/id`.

## 7. Hobby plan notes

- Vercel Hobby is meant for personal, non-commercial projects, which fits a personal portfolio. If the site starts to carry paid client work or ads, re-check the terms.
- Hobby has usage limits (bandwidth, image optimization, build minutes). A static portfolio sits far below them, but keep videos small and check the usage page after launch.
- Limits and terms change, so read Vercel's current pricing and fair-use pages when setting up.
