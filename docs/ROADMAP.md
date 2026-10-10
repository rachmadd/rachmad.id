# Roadmap

Work one phase at a time. After each phase: run `pnpm lint`, `pnpm typecheck`, `pnpm build`, then report (what was built, differences from the design and why, placeholders in use, what you need) and wait for approval.

Every phase must leave `main` deployable.

## Phase 0: Scaffold and tooling

- Create the Next.js app in the repo root (App Router, TypeScript strict, Tailwind v4, ESLint, `src/` directory, import alias `@/*`). Keep the existing `docs/`, `design/`, `CLAUDE.md`, `README.md`, `.github/`, `lighthouserc.json`.
- Set `packageManager` in `package.json` (pnpm) so CI can pick the version. Add `lint`, `typecheck`, `build`, `start`, `dev` scripts.
- Add `motion` and `next-intl`. Nothing else.
- Create `docs/DECISIONS.md`. Add `.gitignore`, `.nvmrc` or `engines` for Node LTS.
- Add security headers in `next.config.ts`.

**Done when:** `pnpm dev` shows a blank page, all four scripts pass, CI workflow passes on a PR.

## Phase 1: Foundation

- Tokens in `globals.css` (DESIGN.md section 2, adjusted to the design export). Fonts via `next/font` per the export.
- next-intl routing: `/en`, `/id`, root redirect, `setRequestLocale`, empty `en.json` and `id.json` wired up, `<html lang>`.
- Layout: sticky pill nav with section links and the EN | ID toggle (a real link), bottom vignette, footer shell.
- UI primitives: `Pill`, `Button`, `SectionTitle`, `Reveal` (fade plus 8 to 12px translate, once, reduced-motion aware).
- Global focus styles, container, section spacing.

**Done when:** empty section shells scroll correctly in both locales, nav scroll-spy works, the toggle keeps the user on the equivalent page, vignette never blocks clicks, reduced motion disables the reveal.

## Phase 2: Intro, Skills, Contact

- Intro with avatar placeholder, name `h1`, primary title, role pills, description, Contact and Download CV buttons (CV file chosen by locale, with fallback).
- Skills from `src/content/skills.ts`.
- Contact section with labeled pill links from `site.ts`, footer with domain and year.
- All copy from the placeholder text in CONTENT.md.

**Done when:** the top and bottom of the page match the design in both locales at 390 and 1440 widths. Indonesian text does not break the layout.

## Phase 3: Experience timeline

- `lib/timeline-geometry.ts`: S-curve path generator (node count, width, amplitude), unit-tested for node ordering and no overlap with text areas.
- `TimelineCurve`, `TimelineNode`: decorative SVG, HTML nodes positioned from measured path points, scroll-driven progress path, entries revealed once.
- Content from `companies.ts`; project counts computed from project data (zero projects shows no link).
- Placeholder logos.
- The "N projects →" link scrolls to `#projects` and brightens that company's cards (the cards arrive in Phase 4; stub the hook).
- No-JS and reduced-motion fallbacks.

**Done when:** the curve matches the design on desktop and mobile, text never overlaps the line, resizing recalculates positions, keyboard and screen reader order is chronological, and the fully drawn curve shows under reduced motion.

## Phase 4: Projects gallery

- Content files for all 11 projects with placeholder copy and the real slugs, tiers, companies and media types from CONTENT.md.
- `ProjectMedia` (shared 16:10 frame) with `image`, `carousel`, `scroll`, `concept` variants. Video starts on intersection and pauses off-screen; poster only under reduced motion.
- `ProjectCard` and the two-tier gallery layout. Whole card is one link. Hover behavior from DESIGN.md.
- Placeholder screenshots and concept posters per ASSETS.md.

**Done when:** all 11 cards render in both locales, the gallery matches the design on desktop, tablet and mobile, carousels pause on hover and focus, videos never autoplay off-screen, and tag overflow in Indonesian is handled.

## Phase 5: Project pages and modal

- Full page route `/[locale]/projects/[slug]` using `ProjectContent`, with previous and next links.
- Feature-section pattern that scales to 8+ features (build Quickbill Platform with 8 placeholder features to prove it).
- Intercepting route modal on top of the home page using the native `<dialog>`.
- `generateStaticParams` for every locale and slug.

**Done when:** all behaviors in ARCHITECTURE.md section 4 hold: click opens the modal and keeps scroll position, refresh shows the full page, Esc, close button, backdrop and back all close the modal, focus returns to the card, and the modal and page show identical content.

## Phase 6: SEO

- Metadata, canonical, hreflang, Open Graph and Twitter tags per page and locale.
- `opengraph-image.tsx` per locale.
- JSON-LD (Person, WebSite) on home.
- `sitemap.ts`, `robots.ts`, preview `noindex` handling.
- 404 page.

**Done when:** the SEO checklist in SEO.md section 9 passes locally, JSON-LD validates, and `curl` of the built pages shows the expected `<title>`, canonical and `hreflang` tags.

## Phase 7: Polish and QA

- Accessibility pass: keyboard, focus order, contrast, landmarks, headings, alt text, axe (browser extension or `@axe-core/playwright`) with zero serious issues.
- Responsive pass at 320, 390, 768, 1024, 1440, 1920 in both locales.
- Performance pass against the targets in SEO.md section 8. Fix regressions rather than relaxing thresholds.
- Reduced-motion pass.
- Cross-browser smoke test: Chrome, Safari (WebKit), Firefox.

**Done when:** Lighthouse thresholds pass on home and one project page in both locales, and a written QA note lists the browsers and widths checked.

## Phase 8: CI and deployment

- Verify `.github/workflows/ci.yml` and `lighthouserc.json` work against the real project; adjust URLs and thresholds only for real reasons and log them in DECISIONS.md.
- Connect Vercel, set `NEXT_PUBLIC_SITE_URL`, confirm preview deployments and `noindex` on previews.
- Document the branch protection rule steps for Rachmad (he applies them in GitHub settings).
- Domain steps are manual; give Rachmad the exact list from DEPLOYMENT.md section 3.

**Done when:** a test PR shows green CI and a preview URL, and `main` deploys to production on merge.

## Phase 9: Real content swap and launch

- Add `scripts/check-content.ts` and a `check:content` script that fails if any `placeholder: true` remains, any card `summary` exceeds 140 characters in either locale, or any referenced asset file is missing.
- Rachmad supplies real copy, logos, avatar, screenshots, CV files, contact links and the final concept videos. The agent swaps them in, optimizes images, and reruns QA.
- Run the pre-launch checklist in DEPLOYMENT.md section 6.

**Done when:** `pnpm check:content` passes and the checklist is complete.

## Later, only if asked

Dynamic OG images per project, a writing section, a case-study deep dive for Quickbill Platform, simple privacy-friendly analytics.
