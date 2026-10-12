# QA note — Phase 7

Checked against a production build (`pnpm build && pnpm start`) with `NEXT_PUBLIC_SITE_URL` and `VERCEL_ENV` set to match the test origin, using Chrome DevTools (the only browser-automation tooling available in this environment).

## Lighthouse (mobile preset)

| Page | Accessibility | Best Practices | SEO | Agentic Browsing |
|---|---|---|---|---|
| `/en` | 100 | 100 | 100 | 100 |
| `/en/projects/quickbill-platform` | 100 | 100 | 100 | 100 |
| `/id` | 100 | 100 | 100 | 100 |
| `/id/projects/quickbill-platform` | 100 | 100 | 100 | 100 |

Lighthouse's Accessibility category runs axe-core's ruleset under the hood, so this doubles as the axe pass the roadmap calls for — zero violations across all four pages. `@axe-core/playwright` was not installed separately for this pass (not an existing project dependency; flag if a standalone axe report is wanted later).

One real finding from this pass, fixed: the home page's `<Footer>` was nested inside the Contact `<section>`, which strips its implicit `contentinfo` landmark role per the HTML spec (a `<footer>` only gets that role when it isn't a descendant of a sectioning element). Moved it to render as a sibling after `<Contact/>` in `page.tsx` (matching how the project page already rendered it) — confirmed post-fix via `document.querySelector('footer').parentElement` reporting `MAIN`, and Lighthouse stayed at 100/100/100/100 after the change.

## Performance (Core Web Vitals, via a Chrome DevTools performance trace)

Measured on `/en`, CPU throttled 4x, network throttled to "Fast 4G" (the closest available preset to a real mobile condition the tool exposes; true Lighthouse Performance scoring and real network round-trip to an edge aren't available in this tool — `lighthouse_audit` here explicitly excludes the Performance category):

- LCP: 313 ms (target: under 2.0 s) — breakdown: 2 ms TTFB, 310 ms render delay.
- CLS: 0.00 (target: under 0.05).
- No render-blocking requests of consequence; ~14.4 kB of estimated legacy-JS transform overhead flagged by the trace's own insight (not investigated further — small, and not a regression target for this phase).

These numbers reflect the current all-placeholder-media state (no real screenshots exist yet — see `docs/ASSETS.md`). Re-check after Phase 9 swaps in real images, since image weight is the main performance risk for a site like this.

## Responsive pass

Full visual check (screenshots, no overflow/clipping) at:

- **320px** — EN home (hero, project gallery card stacking) and ID home (hero, to catch any UI-chrome string overflow).
- **1280px** — EN home, EN project detail page (`quickbill-platform`), gallery grid, Skills' longest group (17 items).
- **1920px** — EN home (content stays centered in its max-width container, doesn't stretch edge-to-edge).

**390, 768, 1024, 1440 were not independently screenshotted.** The layout uses standard Tailwind min-width breakpoints with no custom logic between the tested bounds, so these are treated as safe interpolations rather than separately verified — flagging this explicitly rather than claiming a full 6-width check per the roadmap's literal list.

## Reduced motion

Verified by code review, not live OS-level emulation:

- `Reveal` (`src/components/ui/Reveal.tsx`): when `useReducedMotion()` is true, renders a plain `<div>` with no animation at all (not just a shorter transition).
- `TimelineCurve.tsx`: swaps the scroll-driven `scrollYProgress` for a static `useMotionValue(1)` when reduced motion is on, so the curve renders fully drawn — already verified live in Phase 3 (see `docs/DECISIONS.md`).
- `useConceptPlayback.ts` (concept-card animations): `playing` is gated on `!reducedMotion`, so the three concept animations stay static under reduced motion.
- No-JS fallback (separate from reduced-motion, verified in Phase 3): a `<noscript>` block forces all `[data-reveal]` elements to `opacity:1` with no transform.

Live verification attempt: tried forcing `prefers-reduced-motion: reduce` via a `matchMedia` monkey-patch injected before page load. `window.matchMedia(...).matches` reported `true` correctly, but Motion's internal `useReducedMotion()` hook didn't pick up the patched value — likely because Motion captures its own `matchMedia` reference before the patch can intercept it, a limitation of this testing technique rather than evidence of a bug (the code path itself is correct by inspection, and this is the same hook already confirmed working live in Phase 3 for the timeline). Recommend one manual check — toggle "Reduce motion" in OS settings and reload — before launch, since this environment has no way to drive Chrome's native `Emulation.setEmulatedMedia` CDP command for this specific media feature.

## Cross-browser

Only Chrome was tested (the only browser this environment's automation tooling drives). Safari (WebKit) and Firefox were **not** independently verified. Known risk areas worth a manual pass before launch:

- Native `<dialog>` + `showModal()` (the project modal) — well-supported in modern Safari/Firefox, but worth confirming the exact focus-trap/Esc/backdrop behavior matches Chrome's.
- `backdrop-filter`/`color-mix()` usage, if any, in the design tokens.
- `prefers-reduced-motion` handling (see above).

Recommend a quick manual smoke test (open the home page, a project page, and the modal) in Safari and Firefox before Phase 8 deployment, or a BrowserStack pass if available.
