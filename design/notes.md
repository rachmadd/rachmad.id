Chosen direction: **1a** (Geist / Geist Mono, 8pt rhythm, plain titles) — confirmed by Rachmad 2026-10-11. The export itself did not mark either direction as chosen; see `docs/DESIGN.md` section 2 and `docs/DECISIONS.md` #7 for the 1a/1b comparison. 1b is kept for reference only.

Fonts: 1a — Geist (heading/body), Geist Mono (meta labels). 1b — Instrument Sans (heading/body), JetBrains Mono (meta labels). No separate serif/display family in either direction.

Final frames: `Portfolio.dc.html` (both directions, desktop 1440 + mobile 390, EN and ID), `Project Page.dc.html` (Quickbill Platform, desktop + mobile), the project modal (desktop 1440×900 + mobile 390×844), and the three concept-card canvas animations (`ConceptEmbeddedPayment`, `ConceptMultiplayer`, `ConceptMicroFrontend`). All are canvas-animation files (`.dc.html`), not static image frames — see `design/export/`.

Rough frames (guidance only): none provided separately — the export is a single `Overview.dc.html` canvas embedding live `dc-import` previews of every screen at both directions/widths, rather than separate "chosen" vs "rejected" static frames. There is no `design/frames/direction-rejected/` equivalent to ignore.

Differences from docs/DESIGN.md that the export wins on: border opacity scale (.08 default, not .09), new `--color-media-fill` token, focus-ring offset (3px, not 2px), exact reveal-motion timing (10px / .7s ease, not a range), bottom-vignette implementation (sticky-in-flow, not viewport-fixed), and all of the exact component numbers (nav, timeline curve geometry, card hover values, concept-loop durations) now written into `docs/DESIGN.md`. Full list in `docs/DECISIONS.md`.

Things I dislike in the export and want changed: direction (1a/1b) and the slug/company-label conflicts are resolved — see below. Still open, not yet reviewed with Rachmad: the Skills section's chip set, which drops Flutter/Dart (implying no mobile work) and adds several items not in `docs/CONTENT.md`'s draft list — see `docs/DECISIONS.md` #8.
