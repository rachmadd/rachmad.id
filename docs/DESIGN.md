# Design

The exported designs in `design/` are the visual source of truth. This file holds the rules and the fallback tokens. If the export disagrees with a value here, follow the export and log it in `docs/DECISIONS.md`.

## 1. Direction

Clean, simple, minimal. Centered layout with very wide empty space between sections (dark-theme "white space"). Calm and modern, nothing decorative. Not a startup landing page and not a magazine layout.

## 2. Tokens (fallback values)

Define as Tailwind v4 theme variables in `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-bg: #0b0b0d;            /* page background, neutral near-black, no blue tint */
  --color-surface: #151518;       /* cards, nav pill, modal */
  --color-media-fill: #1b1b1f;    /* screenshot/media placeholder frame fill */
  --color-border: rgb(255 255 255 / 0.08);
  --color-border-strong: rgb(255 255 255 / 0.22);   /* card/row hover; outline buttons go further, to .34 */
  --color-fg: #edf2f4;            /* primary text (Platinum) */
  --color-muted: #8d99ae;         /* secondary text (Lavender Grey) */
  --color-accent: #ef233c;        /* Strawberry Red */
  --color-accent-hover: #d90429;  /* Flag Red */

  --radius-card: 1.5rem;          /* 24px */
  --radius-media: 1rem;           /* 16px */
  --radius-pill: 9999px;

  --container-content: 47.5rem;   /* ~760px content column */
}
```

Border note: the export's base border opacity is `.08` on cards, hero frames and feature blocks; nav, pills and contact rows use a touch more, `.09`. Treat `.08` as the default and `.09` as a component-level nuance, not a second token (KISS). Hover/active strength also varies by component: card and contact-row borders go to `.22`, outline buttons (Download CV, project-page nav) go further, to `.34`.

Spacing between sections: at least 160px on desktop, 96px on mobile (direction 1a — see below).

Typography: the export is not a single finished choice. It shows **two parallel directions** sharing one layout skeleton:

| | Direction 1a (fallback, chosen below) | Direction 1b |
|---|---|---|
| Sans / mono | Geist / Geist Mono | Instrument Sans / JetBrains Mono |
| Rhythm | 8pt | 12pt |
| Section gap (desktop / mobile) | 160 / 96px | 224 / 120px |
| Section titles | plain | numbered eyebrows (01–04) |
| Name / display (desktop / mobile) | 56 / 40px, 500, −2.5% tracking | 76 / 46px, 500, −3% tracking |
| Section title (h2) | 30 / 24px | 40 / 30px |
| Card / feature title (h3) | 22 / 19px | 24 / 20px |
| Title line (role, modal subtitle) | 20 / 18px | 22 / 19px |
| Body | 17 / 16px, line-height 1.6 | 18 / 16px, line-height 1.6 |
| Small / tags | 15 · 13.5 · 12.5px | 15 · 13.5 · 12.5px |
| Meta (mono) | 12–13px | 12–13px |

Neither direction is marked "chosen" in the export. **Resolved 2026-10-11: Rachmad confirmed direction 1a** (Geist / Geist Mono, 8pt rhythm, plain titles) — logged in `docs/DECISIONS.md`. Use `next/font` to load Geist and Geist Mono; do not fall back to Inter by default. The 1b column above is kept for reference only and is not being built.

## 3. Color rules

- Red is for non-text or large elements only: timeline path and nodes, link underlines, focus rings, the travelling dot in concept animations, small highlights.
- Body text is `fg`. Meta text (dates, labels, captions) is `muted`.
- Never use blue or indigo tinted surfaces.
- Borders are the translucent white token, not a solid grey.
- Focus ring: 2px `accent` with **3px** offset on every interactive element (export value — DESIGN.md previously said 2px offset; see `docs/DECISIONS.md`). Never remove outlines without replacing them.

## 4. Layout rules

- One centered column, max width `--container-content` for text sections.
- Section titles are **centered**. Body copy, descriptions and lists are **left-aligned** inside the column.
- The project gallery may be wider than the text column. Follow the export for its max width.
- Mobile gutter is 20 to 24px. No horizontal scrolling at any width from 320px.

## 5. Shape rules

Everything is rounded. Cards 24px, media 16px, buttons and tags are pills, avatar is a circle, the nav is a pill container, modal 24px. `<video>` and `<img>` get the media radius with `overflow: hidden` on the frame.

The export's token sheet also lists a "tile" radius at 20px, but no live component in `Portfolio.dc.html` or `Project Page.dc.html` actually uses it — every real card, article and modal in the templates is 24px. Treat 20px as unused/reserved rather than adding a third radius token (YAGNI); logged in `docs/DECISIONS.md`.

## 6. Components

### Nav
Sticky, minimal, pill-shaped surface container: `top: 16px`, `z-index: 30`, 6px padding, solid surface (no blur). Links: Experience, Projects, Skills, Contact, plus an `EN | ID` toggle — link row 38px tall, `0 16px` padding, 14px font. Language toggle buttons are 28px tall on desktop, 40px tall / 44px min-width on mobile. Active section is highlighted via scroll-spy (accent underline, not a filled background). On mobile it collapses to a compact bar (brand mark + language toggle + a 46px "Menu" trigger); the menu opens a rounded sheet with 52px-min-height rows. Check Indonesian labels do not wrap badly.

### Bottom vignette
A gradient from transparent to `--color-bg` over exactly **140px**. In the export this is implemented as a `position: sticky; bottom: 0; margin-top: -140px` element nested at the end of the page's root div (not a viewport-fixed overlay) — same visual result, different technique; see `docs/DECISIONS.md`. `z-index: 20`, above content, below the nav (30) and modal (50), `pointer-events: none`. This is the only gradient allowed anywhere. Footers carry 140px of bottom padding so content clears the fade at full scroll. Keep it `aria-hidden`.

### Intro
Centered: circular avatar (104px desktop / 88px mobile, 1a), name "Rachmad" as the `h1` (56 / 40px), primary title "Senior Software Engineer" (20 / 18px "title line" size), a muted mono meta line ("Jakarta, Indonesia · 7 years", 13px), then a centered row of pill tags (Frontend Engineer, UI Engineer, AI Engineer, Full Stack Engineer; 34px tall, 13.5px). Below, a 2 to 3 sentence description, left-aligned in the column (44 / 36px top margin). Two actions: "Contact" and "Download CV" as pill buttons, 48px min-height, `0 26px` padding. No hero imagery.

### Experience: S-shaped timeline
- A single smooth S-curve running down the page, built from cubic Bézier segments with a vertical tangent at every node (control-point offset = 0.55 × row height) — this is what makes it read as one continuous sinusoid rather than a zigzag of straight segments.
- Desktop: nodes alternate at `center ± 170px`, one row every 200px; text sits on the outer side of each apex (right-aligned on the left side, left-aligned on the right) so it never meets the path.
- Mobile: a 46px-wide lane (`x 24–70px`), one row every 150px; all text sits in a single column starting past the lane.
- Node size: 56px circle (desktop) / 44px (mobile); inner logo chip 34px (desktop) / 28px (mobile) at 10px corner radius.
- Thin muted stroke (30% opacity, 1.5px) for the full path; accent stroke (2px, round linecap) for the progress, drawn up to **60% of viewport height** as the user scrolls. Nodes flip their border to accent as the line passes them.
- Each company is a node on the curve with a round logo. Text (company name, role, dates) sits beside the node on the open side of the curve so it never overlaps the path.
- Each entry shows only: logo, company, role, dates. No bullets, no tags.
- Where the company has projects, show a small text link ("4 projects →") that scrolls to `#projects` and briefly brightens that company's cards (no filtering).
- Logos: grayscale by default, full color on hover and focus.
- Newest first: Quickbill at the top, vOffice at the bottom.

### Projects: card gallery
Two tiers:

- Featured: larger cards, 2 columns on desktop, 1 on mobile.
- Other work: smaller cards, 3 columns on desktop, 1 on mobile (2 on tablet if the export shows it).

Every card: 24px radius, 10px inner padding, media frame at 16:10 with 16px radius, then title, one-sentence description (max 140 characters, left-aligned), 3 to 5 pill skill tags (28px tall, 12.5px), small company + year meta row (mono, muted). Hover: media scales to 1.02 over `.6s cubic-bezier(.2,.7,.2,1)`, border moves from `.08` to `.22`. The whole card is one link (a single focusable element). Click opens the modal; see ARCHITECTURE.md section 4.

Media types are `image`, `carousel`, `scroll`, `concept` (ARCHITECTURE.md section 8). Carousels crossfade every **3.4s** (`.9s` opacity transition) and pause on hover; dot indicators are 6px tall, 5px wide when inactive and 14px wide when active. Concept cards must look like the same family as screenshot cards: same frame, border, radius and caption layout.

### Project page and modal
Centered title, then role / company / year, overview, key features (each with a screenshot or diagram, text left-aligned), tech stack, outcome or learnings, previous and next project links. The hero/feature media frame is 16:10 at 16px radius, max-width 1040px. A row of feature-index chips only appears once a project has **more than 4** features; the first 3 features render full-width/stacked, any remaining ones drop into a 2-column grid. The feature section pattern must scale to 8 or more features (Quickbill Platform; the export's own data has 9). The modal shows the same content inside a rounded surface (max-width 880px, backdrop `rgba(11,11,13,.9)`) with a close button (44px tall, `0 18px` padding, 999px radius, `.14` border); the full page shows it in the normal layout. Prev/next controls use the same 44px button sizing.

### Skills
Centered title. Four groups as plain label + pill-group rows (36px row gap, 24px vertical padding, top-bordered dividers): Frontend, Languages, Backend and Data, Tooling. The export has **no separate Mobile group** — React Native is folded into Frontend instead. Its exact chip set differs from the draft list in `docs/CONTENT.md` (adds items like NestJS, Redis, GraphQL, Jest, Playwright, Figma, Sentry; drops Flutter/Dart entirely) — flagged in `docs/DECISIONS.md` as a content question for Rachmad, not resolved here. No progress bars, percentages, star ratings or logo walls.

### Contact
Centered title, one short line, then labeled pill links for email, LinkedIn, Instagram, GitHub, and a "Download CV" pill button. Footer shows "rachmad.id" and the current year (computed at build time).

## 7. Concept-card videos

Produced in Claude Design, exported as seamless 4 to 6 second loops (WebM and MP4, plus a poster JPG of the best static frame). Style: rounded nodes on `surface`, thin `muted` connectors, short mono labels, one accent dot travelling along the connectors.

| File base name | Loop length | Static frame (reduced motion) | Shows |
|---|---|---|---|
| `quickbill-embedded-payment` | 6.0s | 4.3s | A partner app window with an Invoice menu, a Pay button, a payment iframe opening inside the window, details filled in, payment success state |
| `accelbyte-multiplayer-service` | 5.0s | 2.3s | Game client, matchmaking service, game session, plus a real-time log stream feeding a small web console panel (six log lines cycle in, one every 0.83s, so the loop closes exactly) |
| `maybank-digital-branch` | 6.0s | 3.3s | A micro-frontend shell containing separate modules (Teller, Account Opening, Deposit, International Transfer, Manager Authorization), each tied to its own service; a transaction routes to Manager Authorization and returns approved. Generic only |

These durations and static-frame timestamps come from the canvas animations in `design/export/Concept*.dc.html` (built in Claude Design canvas, not yet exported video). When real WebM/MP4 loops are produced, match these beats. Until then, use poster-style placeholder images and leave the video element wired so dropping in files requires no code change.

## 8. Motion

- Sections, timeline entries and cards: opacity 0 to 1 and `translateY` **10px** to 0, **0.7s ease**, **once**, triggered 40px inside the viewport (`viewport: { once: true }`). (Export value — DESIGN.md previously gave a range of 8–12px / 0.4–0.6s ease-out; see `docs/DECISIONS.md`.)
- Timeline progress path draws with scroll, up to 60% of viewport height.
- Hover: underline or color shift only; media scale capped at 1.02. No tilt, bounce, parallax or custom cursor.
- Modal opens without motion; Esc or a backdrop click closes it.
- `prefers-reduced-motion: reduce`: no reveals, no scroll-driven drawing (the path is fully drawn), carousels hold their first slide, page-scroll media stays static, concept loops show their static frame (see table above), and smooth scrolling is turned off.

## 9. Responsive and accessibility checklist

- Test at 320, 390, 768, 1024, 1440 and 1920 widths, both locales.
- Touch targets at least 44px.
- Contrast: body text and muted text meet WCAG AA against `bg` and `surface`.
- Keyboard: tab order follows visual order, the modal traps focus and restores it on close, the nav is operable with the keyboard.
- Every image has meaningful `alt`, decorative ones have `alt=""`.
- One `h1` (the name). Section titles are `h2`, card titles `h3`.
