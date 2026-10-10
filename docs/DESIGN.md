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
  --color-border: rgb(255 255 255 / 0.09);
  --color-border-strong: rgb(255 255 255 / 0.18);   /* hover */
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

Spacing between sections: at least 160px on desktop, 96px on mobile.

Typography: the pairing is chosen in the design export. Use `next/font` to load it. At most two families (one sans, optionally one mono for small meta labels). Do not fall back to Inter by default.

## 3. Color rules

- Red is for non-text or large elements only: timeline path and nodes, link underlines, focus rings, the travelling dot in concept animations, small highlights.
- Body text is `fg`. Meta text (dates, labels, captions) is `muted`.
- Never use blue or indigo tinted surfaces.
- Borders are the translucent white token, not a solid grey.
- Focus ring: 2px `accent` with 2px offset on every interactive element. Never remove outlines without replacing them.

## 4. Layout rules

- One centered column, max width `--container-content` for text sections.
- Section titles are **centered**. Body copy, descriptions and lists are **left-aligned** inside the column.
- The project gallery may be wider than the text column. Follow the export for its max width.
- Mobile gutter is 20 to 24px. No horizontal scrolling at any width from 320px.

## 5. Shape rules

Everything is rounded. Cards 24px, media 16px, buttons and tags are pills, avatar is a circle, the nav is a pill container, modal 24px. `<video>` and `<img>` get the media radius with `overflow: hidden` on the frame.

## 6. Components

### Nav
Sticky, minimal, pill-shaped surface container. Links: Experience, Projects, Skills, Contact, plus an `EN | ID` toggle. Active section is highlighted via scroll-spy (accent underline, not a filled background). On mobile it collapses to a compact bar; check Indonesian labels do not wrap badly.

### Bottom vignette
A fixed overlay at the bottom of the viewport on every page: a gradient from transparent to `--color-bg` over about 140px (`position: fixed; inset-inline: 0; bottom: 0; pointer-events: none`). It sits above page content and below the nav and modal. This is the only gradient allowed anywhere. Keep it `aria-hidden`.

### Intro
Centered: small circular avatar, name "Rachmad", primary title "Senior Software Engineer", then a centered row of pill tags (Frontend Engineer, UI Engineer, AI Engineer, Full Stack Engineer). Below, a 2 to 3 sentence description, left-aligned in the column. Two actions: "Contact" and "Download CV" as pill buttons. No hero imagery. The name is the `h1`.

### Experience: S-shaped timeline
- A single smooth S-curve running down the page: it sweeps left, then right, then left, in gentle wide curves. A continuous snaking line, not a zigzag with straight segments.
- Thin muted stroke for the full path, accent stroke for the progress that draws on scroll.
- Each company is a node on the curve with a round logo. Text (company name, role, dates) sits beside the node on the open side of the curve so it never overlaps the path.
- Each entry shows only: logo, company, role, dates. No bullets, no tags.
- Where the company has projects, show a small text link ("4 projects →") that scrolls to `#projects` and briefly brightens that company's cards (no filtering).
- Logos: grayscale by default, full color on hover and focus.
- Mobile: same S-curve with shallower sweeps. Text stays beside the node and never overlaps the path. See the mobile frame in the export.
- Newest first: Quickbill at the top, vOffice at the bottom.

### Projects: card gallery
Two tiers:

- Featured: larger cards, 2 columns on desktop, 1 on mobile.
- Other work: smaller cards, 3 columns on desktop, 1 on mobile (2 on tablet if the export shows it).

Every card: rounded media frame at 16:10, then title, one-sentence description (max 140 characters, left-aligned), 3 to 5 pill skill tags, small company label. Hover: media shifts slightly (scale at most 1.02), border moves from `border` to `border-strong`. The whole card is one link (a single focusable element). Click opens the modal; see ARCHITECTURE.md section 4.

Media types are `image`, `carousel`, `scroll`, `concept` (ARCHITECTURE.md section 8). Concept cards must look like the same family as screenshot cards: same frame, border, radius and caption layout.

### Project page and modal
Centered title, then role / company / year, overview, key features (each with a screenshot or diagram, text left-aligned), tech stack, outcome or learnings, previous and next project links. The feature section pattern must scale to 8 or more features (Quickbill Platform). The modal shows the same content inside a rounded surface with a close button; the full page shows it in the normal layout.

### Skills
Centered title. Groups (Frontend, Languages, Backend and Data, Tooling, plus Mobile if the export has it) as plain text rows or compact pill groups. No progress bars, percentages, star ratings or logo walls.

### Contact
Centered title, one short line, then labeled pill links for email, LinkedIn, Instagram, GitHub, and a "Download CV" pill button. Footer shows "rachmad.id" and the current year (computed at build time).

## 7. Concept-card videos

Produced in Claude Design, exported as seamless 4 to 6 second loops (WebM and MP4, plus a poster JPG of the best static frame). Style: rounded nodes on `surface`, thin `muted` connectors, short mono labels, one accent dot travelling along the connectors.

| File base name | Shows |
|---|---|
| `quickbill-embedded-payment` | A partner app window with an Invoice menu, a Pay button, a payment iframe opening inside the window, details filled in, payment success state |
| `accelbyte-multiplayer-service` | Game client, matchmaking service, game session, plus a real-time log stream feeding a small web console panel |
| `maybank-digital-branch` | A micro-frontend shell containing separate modules (Teller, Account Opening, Deposit, International Transfer, Manager Authorization), each tied to its own service; a transaction routes to Manager Authorization and returns approved. Generic only |

Until the real exports arrive, use poster-style placeholder images and leave the video element wired so dropping in files requires no code change.

## 8. Motion

- Sections and timeline entries: opacity 0 to 1 and `translateY` 8 to 12px to 0, 0.4 to 0.6s, ease-out, **once** (`viewport: { once: true }`).
- Timeline progress path draws with scroll.
- Link hover: underline or color shift only.
- No tilt, bounce, parallax, custom cursor, or looping decoration outside the concept videos.
- `prefers-reduced-motion: reduce`: no transitions, no scroll-driven drawing (the path is fully drawn), carousels hold their first image, videos show the poster.

## 9. Responsive and accessibility checklist

- Test at 320, 390, 768, 1024, 1440 and 1920 widths, both locales.
- Touch targets at least 44px.
- Contrast: body text and muted text meet WCAG AA against `bg` and `surface`.
- Keyboard: tab order follows visual order, the modal traps focus and restores it on close, the nav is operable with the keyboard.
- Every image has meaningful `alt`, decorative ones have `alt=""`.
- One `h1` (the name). Section titles are `h2`, card titles `h3`.
