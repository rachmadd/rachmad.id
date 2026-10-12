# CLAUDE.md

Entry point for any coding agent working on **rachmad.id**, the personal portfolio of Rachmad (Senior Software Engineer, Jakarta). Read this file first, then the docs listed below.

## What we are building

A single-page, bilingual (English / Indonesian), dark-theme portfolio. Static-first, SEO-friendly, subtle scroll animation, fully responsive. The only goal is to get Rachmad hired: a recruiter should know who he is, what he built and how to reach him within 30 seconds.

Sections, top to bottom: Intro, Experience (S-shaped timeline), Projects (card gallery, two tiers), Skills, Contact. Each project also has its own page (and opens as a modal from the gallery).

## Read order

1. `docs/ARCHITECTURE.md`: stack, routes, folder layout, data flow, key technical decisions
2. `docs/DESIGN.md`: tokens, layout rules, component specs, motion rules
3. `design/README.md`: where the exported designs live and how they relate to DESIGN.md
4. `docs/CONTENT.md`: content schema, every company and project, voice rules
5. `docs/ASSETS.md`: which files exist, which are placeholders
6. `docs/SEO.md`: metadata, structured data, performance targets
7. `docs/DEPLOYMENT.md`: Vercel, GitHub Actions, domain
8. `docs/ROADMAP.md`: phases and acceptance criteria. Work phase by phase.

## Source-of-truth order

When documents disagree, the higher one wins:

1. The exported design in `design/` (visual decisions: spacing, type, curve shape, card layout)
2. `docs/DESIGN.md` (rules and tokens, used where the export is silent)
3. `docs/ARCHITECTURE.md` and the rest

If the design export and DESIGN.md conflict on a visual detail, follow the export and note the difference in `docs/DECISIONS.md` (create it if missing).

## Non-negotiable rules

- **Dark by default, with an optional light theme.** A theme toggle sits next to the language switcher. First visit follows the OS/browser `prefers-color-scheme`; once the visitor toggles manually, that choice is remembered (`localStorage`) and wins over the system preference on return visits. Light-mode token values live in `src/app/globals.css` under `:root[data-theme="light"]`; any new hardcoded `rgba(255,255,255,…)` overlay color should use `rgba(var(--overlay-rgb),…)` instead so it flips with the theme. See `docs/DECISIONS.md` for why this reverses the project's original dark-only decision.
- **One accent color** (red). It is used for non-text elements only: timeline path and nodes, link underlines, focus rings, the travelling dot in diagrams, small highlights. Never for body text or small labels.
- **Everything is rounded.** No sharp corners on cards, media, buttons, tags, inputs, frames, videos. Tags and buttons are pills.
- **No gradients, glows, blurred blobs, glassmorphism or emoji decoration.** The single exception is the fixed bottom vignette.
- **Motion is subtle.** Fade plus 8-12px upward translate, once. No tilt, bounce, parallax, custom cursor or scale above 1.02. Everything respects `prefers-reduced-motion`.
- **Layout:** centered column, centered section titles, left-aligned body text and descriptions.
- **Both locales ship together.** No hard-coded user-facing strings in components. Every string lives in the content layer or the UI message files, in EN and ID.
- **No invented facts.** Project copy, metrics and dates come from `docs/CONTENT.md` or the user. If something is missing, use a clearly marked placeholder (see CONTENT.md) and list it in your report. Never make up numbers, client names or technical claims.
- **No real bank internals.** The Maybank project is shown only as a generic architecture diagram. No real screens, hostnames or internal names.

## Stack (summary)

Next.js (App Router, latest stable), React, TypeScript (strict), Tailwind CSS v4, `motion` for animation, `next-intl` for routing and messages, pnpm. Deployed to Vercel Hobby from GitHub. Details and reasons in `docs/ARCHITECTURE.md`. Check installed versions and read the installed packages' docs before using an API. Do not rely on memory for Next.js, next-intl or Tailwind v4 specifics.

## Commands

```bash
pnpm install
pnpm dev          # local dev server
pnpm lint         # eslint
pnpm typecheck    # tsc --noEmit
pnpm build        # production build (must pass with zero warnings you introduced)
pnpm start        # serve the production build
```

Add scripts with exactly these names in `package.json`. CI calls them.

## Working agreements

- Work through `docs/ROADMAP.md` in order. Finish a phase, run lint, typecheck and build, then report before starting the next one.
- Small, focused commits. Conventional commit messages (`feat:`, `fix:`, `chore:`, `docs:`).
- Prefer server components. Add `"use client"` only where needed (animation, scroll hooks, the modal, the language toggle).
- Keep dependencies few. Ask before adding anything not named in ARCHITECTURE.md.
- Accessibility is part of done: semantic landmarks, one `h1` per page, visible focus, 44px touch targets, alt text, sensible heading order.
- Decorative SVG and video are `aria-hidden` or have empty alt. Real content must also exist as text in the DOM.
- When you hit a decision the docs do not cover, choose the simpler option, record it in `docs/DECISIONS.md`, and mention it in your phase report.

## Out of scope

Blog, CMS, auth, database, analytics beyond Vercel's built-in options, a contact form backend (contact is links plus mailto), light theme, any AI chat feature.
