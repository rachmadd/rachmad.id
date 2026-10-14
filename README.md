# rachmad.id

Personal portfolio of Rachmad Syaefullah, a senior frontend engineer based in Jakarta, live at [rachmad.id](https://rachmad.id).

A single-page, English-only site with a dark theme (and an optional light theme). It covers an intro, an experience timeline, a project gallery, skills and contact links. Each project also has its own page and opens as a modal from the gallery.

## Stack

- [Next.js](https://nextjs.org) (App Router), React, TypeScript (strict)
- Tailwind CSS v4
- [motion](https://motion.dev) for scroll and UI animation
- pnpm, Node 24 (see `.nvmrc`)
- Deployed to Vercel, with Vercel Analytics

## Getting started

```bash
pnpm install
pnpm dev          # local dev server on http://localhost:3000
```

| Script | Purpose |
|---|---|
| `pnpm dev` | Development server |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm test` | Unit tests (Node test runner) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm media:scan` / `media:process` / `media:validate` | Project media pipeline (see [MEDIA.md](MEDIA.md)) |

The media scripts use `sharp` and `ffmpeg`. CI runs lint, typecheck, media validation, tests and build on every push and pull request (`.github/workflows/ci.yml`).

## Project structure

```
src/
  app/          routes, metadata, sitemap, robots, OG image
  components/   layout, sections, timeline, projects, ui
  content/      site copy, companies, projects, skills
  data/         generated project media manifest
  lib/          helpers (site URL, date format, timeline geometry)
public/         static assets, project media, CV, llms.txt
scripts/        media pipeline and IndexNow submission
```

Site copy, companies and projects live in `src/content/`. To add or edit a project, change its file in `src/content/projects/`.

## IndexNow (optional, manual)

`scripts/indexnow.mjs` submits every URL in the production sitemap to IndexNow (picked up by Bing, Yandex and others) so changes get crawled sooner. It is not run automatically.

```bash
node scripts/indexnow.mjs
```

The key file it points at is `public/caf6466d6c085df983f03194e18205a5.txt` and must match the key embedded in the script. If you rotate the key (generate one at https://www.bing.com/indexnow), update both together.
