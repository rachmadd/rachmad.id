# Architecture

## 1. Goals that drive the decisions

- SEO and link previews matter, so pages are pre-rendered HTML, not a client-rendered SPA.
- English only — see `docs/DECISIONS.md` for why the original bilingual (EN/ID) plan was reversed.
- Every project has a shareable URL; gallery clicks navigate straight to it.
- Hosting is Vercel Hobby, so no backend, database or paid features.
- Maintainable by one frontend engineer: few dependencies, typed content, no CMS.

## 2. Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | Next.js, App Router, latest stable | SSG, metadata API, Rachmad's strongest stack |
| Language | TypeScript, `strict: true` | Typed content catches missing translations at build time |
| Styling | Tailwind CSS v4, tokens in CSS (`@theme`) | Fast, token-driven, matches the design system |
| Animation | `motion` (the package formerly called framer-motion) | `useScroll`, `whileInView`, `useReducedMotion` cover everything needed |
| Fonts | `next/font` (self-hosted) | No layout shift, no third-party request |
| Images | `next/image` for screenshots and logos | Responsive sizes, modern formats, lazy loading |
| Package manager | pnpm | Fast, strict |
| Hosting | Vercel Hobby, GitHub integration | Preview per PR, zero config |
| CI | GitHub Actions | Quality gate (lint, types, test, build) |

Do not add: a UI kit, a CMS, an icon library, an analytics SDK, a state library, or an MDX pipeline. If you think one is needed, record the reason in `docs/DECISIONS.md` and ask first.

Check each package's installed version and read its current docs before using an API. Next.js in particular has changed its conventions between major versions (for example the middleware/proxy file and the async `params` handling).

## 3. Rendering strategy

- Everything is statically generated at build time. No runtime data fetching.
- Do **not** use `output: 'export'`. Vercel serves the SSG output natively, and keeping the default output avoids known limits around intercepting routes and image optimization.
- `generateStaticParams` returns every project `slug`.
- Client components are limited to: timeline scroll animation, reveal wrappers, concept-card video control, nav scroll-spy, theme toggle.

## 4. Routes

```
/                              -> home (all five sections)
/projects/[slug]               -> full project page
/sitemap.xml, /robots.txt      -> generated
/opengraph-image               -> generated OG image (see SEO.md)
```

No middleware, no locale routing, no locale cookie.

### Project pages

Gallery clicks navigate directly to `/projects/[slug]`, a normal full page (`app/projects/[slug]/page.tsx`). There is no modal — an earlier version intercepted this route into a dialog over the gallery, but that added complexity (focus-trap/scroll-lock edge cases, a second render path for the same content) for no benefit once the full page already covers every case, so it was removed. `ProjectContent` has one output shape, used only here.

## 5. Folder structure

```
.
├── CLAUDE.md
├── README.md
├── design/                         exported designs (read-only reference)
├── docs/
├── public/
│   ├── avatar.webp
│   ├── cv/
│   │   └── Rachmad-CV-en.pdf
│   ├── logos/                      one file per company (see ASSETS.md)
│   └── media/
│       ├── projects/<slug>/        screenshots, loops
│       └── concepts/<slug>.{webm,mp4,jpg}   concept-card videos + poster
├── src/
│   ├── app/
│   │   ├── layout.tsx               html lang, fonts, nav, vignette
│   │   ├── page.tsx                 home
│   │   ├── projects/[slug]/page.tsx
│   │   ├── opengraph-image.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── globals.css              Tailwind import + @theme tokens
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/                 Nav, ThemeToggle, Vignette, Footer
│   │   ├── sections/               Intro, Experience, Projects, Skills, Contact
│   │   ├── timeline/               TimelineCurve, TimelineNode
│   │   ├── projects/               ProjectCard, ProjectMedia, ConceptVideo, ProjectContent
│   │   └── ui/                     Pill, Button, SectionTitle, Reveal
│   ├── content/
│   │   ├── schema.ts               types (see CONTENT.md)
│   │   ├── site.ts                 domain, handles, nav, contact links
│   │   ├── companies.ts            company data
│   │   ├── projects/<slug>.ts      one file per project
│   │   └── skills.ts
│   └── lib/
│       ├── seo.ts                  metadata + JSON-LD builders
│       └── timeline-geometry.ts    S-curve path + node positions
├── next.config.ts
└── .github/workflows/ci.yml
```

## 6. Content model

One kind of text: **content** (intro copy, companies, projects, skills) lives in typed TypeScript under `src/content/`, plain `string`/`string[]` fields. UI chrome text (nav labels, button text, section titles) is hardcoded directly in the component that renders it — there's no separate message-catalog layer, since there's only one language to maintain.

No database, no MDX. Project pages are built from a structured list of feature blocks (see `docs/CONTENT.md`) so that long projects like Quickbill Platform stay consistent.

## 7. The S-shaped timeline

Specified in `docs/DESIGN.md` section 6. Technical approach:

- One decorative SVG (`aria-hidden`) holding two stacked paths: a muted full path and a red progress path.
- The path is generated by `lib/timeline-geometry.ts` from the node count, container width and an amplitude value (smaller on mobile). It uses cubic Bézier segments so the line sweeps left, then right, then left, with no straight corners.
- Node positions are measured from the path (`getPointAtLength`) after layout and on resize (`ResizeObserver`), then used to position the HTML nodes. Logos and text stay real HTML, not SVG.
- Progress uses `useScroll` on the timeline container, mapped to the progress path's `pathLength`.
- Content is a real `<ol>` in chronological order (newest first). The SVG adds nothing for screen readers.
- With reduced motion, the progress path is fully drawn and entries are visible with no transition.
- If measuring fails (no JS), fall back to a plain vertical list. The page must still be readable.

## 8. Media handling

Per project, one of four media types (set in the content file):

| `media.type` | Renders |
|---|---|
| `image` | One `next/image`, 16:10 frame |
| `carousel` | 3 to 5 images, crossfade every ~4s, pauses on hover and focus, first image only under reduced motion |
| `scroll` | Muted looping `<video>` of a full-page screenshot scrolling (WebM + MP4), poster image |
| `concept` | Muted looping `<video>` exported from Claude Design (WebM + MP4), poster image |

Rules for video: `muted`, `loop`, `playsInline`, `preload="none"` with a poster, started only when in view (IntersectionObserver) and paused when off-screen. Under reduced motion, show the poster only. Keep each loop under roughly 1.5 MB.

All media frames share one wrapper (`ProjectMedia`) so every card has the same aspect ratio, radius and border.

## 9. Performance guardrails

- First-load JS for the home route stays lean (soft target: about 150 KB gzipped). Run `next build` and watch the route size table.
- Only the timeline, reveal wrapper and video control are client code. Do not make whole sections client components just to use one hook; extract a small client child instead.
- The LCP element is the name/headline text, not an image. Avatar is small and gets `priority`.
- Images below the fold are lazy. Every `next/image` has explicit dimensions or `fill` with a sized parent, so layout shift stays near zero.
- Fonts: at most two families, subset, `display: swap` via `next/font`.

## 10. Security and privacy

- No third-party scripts. No cookies at all.
- Set security headers in `next.config.ts` (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` or CSP `frame-ancestors`, `Permissions-Policy`). Keep the CSP simple, since there are no third-party embeds.
- Email shown as a `mailto:` link. Do not render the address in structured data twice if avoidable.

## 11. Decisions log

Keep `docs/DECISIONS.md` as a short running list: date, decision, reason. Create it in Phase 0.
