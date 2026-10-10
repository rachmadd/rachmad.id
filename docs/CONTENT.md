# Content

Everything the site says, in one place. English and Indonesian ship together. Anything marked **PLACEHOLDER** is stand-in copy that must be replaced by Rachmad before launch.

## 1. Schema (`src/content/schema.ts`)

```ts
export type Locale = 'en' | 'id';
export type Localized<T = string> = Record<Locale, T>;

export type CompanyId =
  | 'quickbill' | '1engage' | 'accelbyte' | 'moladin' | 'maybank' | 'voffice';

export interface Company {
  id: CompanyId;
  name: string;                 // display name, not translated
  legalName?: string;
  role: Localized;              // title at that company
  start: string;                // 'YYYY-MM'
  end: string;                  // 'YYYY-MM'
  location: Localized;
  logo: string;                 // path under /public/logos
}

export type Media =
  | { type: 'image';    src: string; alt: Localized }
  | { type: 'carousel'; images: { src: string; alt: Localized }[] }       // 3 to 5
  | { type: 'scroll';   webm: string; mp4: string; poster: string; alt: Localized }
  | { type: 'concept';  webm: string; mp4: string; poster: string; alt: Localized };

export interface Feature {
  title: Localized;
  body: Localized;              // 1 to 2 short paragraphs
  media?: { src: string; alt: Localized };   // screenshot or diagram
}

export interface Project {
  slug: string;                 // URL slug, see table below
  tier: 'featured' | 'other';
  order: number;                // sort order inside its tier
  companyId: CompanyId | null;  // null shows no company label
  companyLabel?: Localized;     // used when companyId is null
  title: Localized;
  summary: Localized;           // max 140 characters per locale. Enforce in a type test or build check.
  role: Localized;
  year: string;
  skills: string[];             // 3 to 5 shown on the card
  stack: string[];              // full list on the project page
  media: Media;
  overview: Localized<string[]>;     // paragraphs
  features: Feature[];               // 3+ ; Quickbill Platform needs 8+
  outcome?: Localized<string[]>;
  links?: { label: Localized; href: string }[];   // only if public
  generic?: true;               // diagram-only project, no real screens (Maybank)
  placeholder: boolean;         // true until real copy is written
}
```

`placeholder: true` projects render normally but are listed by the pre-launch check (`pnpm check:content`, added in Roadmap phase 9), which fails when any placeholder remains.

## 2. Site-level data (`src/content/site.ts`)

| Field | Value |
|---|---|
| Domain | `https://rachmad.id` (canonical, no `www`) |
| Name | Rachmad |
| Primary title | Senior Software Engineer (EN), Senior Software Engineer (ID, keep English) |
| Role tags | Frontend Engineer, UI Engineer, AI Engineer, Full Stack Engineer |
| Location | Jakarta, Indonesia |
| Email | **TODO: Rachmad to provide** |
| LinkedIn | **TODO** |
| Instagram | **TODO** |
| GitHub | **TODO** |
| CV files | `/cv/Rachmad-CV-en.pdf`, `/cv/Rachmad-CV-id.pdf` (the Download CV button picks by locale) |

Open decision: the headline title. Default is "Senior Software Engineer" because it matches the last two job titles. If Rachmad prefers "Senior Frontend Engineer" as the headline, change it in one place (`site.ts`) and in the SEO description.

## 3. Companies (timeline, newest first)

| id | Company | Title | Dates | Location | Projects |
|---|---|---|---|---|---|
| `quickbill` | Quickbill (PT Integrasi Keuangan Digital) | Senior Software Engineer, Full Stack | 2025-01 to 2026-07 | Jakarta, Indonesia | 4 |
| `1engage` | 1Engage (PT Eka Nusantara Gemilang, Sinarmas Group) | Software Engineer, Full Stack | 2024-04 to 2024-12 | Jakarta, Indonesia | 1 |
| `accelbyte` | Accelbyte | Software Engineer II, Frontend | 2023-01 to 2024-04 | Washington, USA (Remote) | 2 |
| `moladin` | Moladin (PT Moladin Digital Indonesia) | Software Engineer II, Frontend | 2022-02 to 2023-01 | Jakarta, Indonesia | 0 |
| `maybank` | Maybank (PT Bank Internasional Indonesia) | Frontend Developer | 2021-03 to 2022-02 | Jakarta, Indonesia | 1 |
| `voffice` | vOffice Indonesia | Web Developer | 2019-03 to 2021-03 | Jakarta, Indonesia | 2 (to confirm) |

Notes:

- The project count on the timeline link is computed from the project data, not typed by hand. Moladin has no projects, so it shows no link.
- The timeline ends at July 2026 for Quickbill. Do not label it "Present".
- Date display: "Jan 2025 – Jul 2026" in English, "Jan 2025 – Jul 2026" in Indonesian with Indonesian month names ("Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"). Use `Intl.DateTimeFormat` with the locale.
- To confirm with Rachmad: izin.co.id is assumed to belong to vOffice. "Company profile websites" has no company, so use `companyId: null` with the label "Freelance" (ID: "Freelance") until he says otherwise.

## 4. Projects

Order inside each tier is the order below. Slugs are final and used in routes, file names and the Lighthouse config.

### Featured (4)

| slug | Title | Company | Media | Visuals available |
|---|---|---|---|---|
| `quickbill-platform` | Quickbill Platform | quickbill | `scroll` or `carousel` (pick best) | Many screenshots, many features. Longest project page (8+ features) |
| `quickbill-mobile` | Quickbill Mobile App | quickbill | `carousel`, phone-proportioned screenshots inside the 16:10 frame | Some screenshots |
| `1engage-platform` | 1Engage Customer Engagement Platform | 1engage | `carousel` | Some screenshots |
| `accelbyte-dev-toolkit` | Accelbyte Development Toolkit | accelbyte | `carousel` | Some screenshots (desktop app) |

### Other work (7)

| slug | Title | Company | Media | Visuals available |
|---|---|---|---|---|
| `quickbill-enterprise` | Quickbill Enterprise Platform | quickbill | `image` placeholder | Unknown. **Ask Rachmad.** If none, make it a `concept` card |
| `quickbill-embedded-payment` | Quickbill Embedded Payment | quickbill | `concept` | None. Concept video |
| `accelbyte-multiplayer-service` | Accelbyte Multiplayer Service | accelbyte | `concept` | None. Concept video |
| `maybank-digital-branch` | Maybank Digital Branch Delivery System | maybank | `concept`, `generic: true` | None, and none may be shown. Concept video |
| `voffice-website` | vOffice Website | voffice | `carousel` | Some screenshots |
| `izin-co-id` | izin.co.id | voffice (to confirm) | `carousel` | Some screenshots |
| `company-profile-websites` | Company Profile Websites | null ("Freelance") | `carousel` | Some screenshots (static sites) |

### What is known about each project (facts only, safe to use)

| Project | Known facts |
|---|---|
| Quickbill Platform | Invoicing platform built with Next.js. Rachmad was a founding engineer. Monorepo with an internal UI library. Backoffice exists. Many features to describe (Rachmad will supply) |
| Quickbill Mobile | Flutter app |
| Quickbill Embedded Payment | Partner app flow: open the Invoice menu, tap Pay, a Quickbill payment iframe opens inside the partner app, user fills in payment details, payment success. Keep the partner app unnamed ("a partner app") |
| Accelbyte Multiplayer Service | A web platform for a multiplayer service: matchmaking backend, real-time logs, and related tooling |
| Accelbyte Dev Toolkit | A desktop application for developers |
| Maybank Digital Branch | Large web app made of multiple services and microservices, built with micro frontends. Covers banking operations in a branch: manager authorization, account opening, international transfer, teller service, deposit and others. No real screens or internals may appear |
| vOffice, izin.co.id | Websites. vOffice work used PHP/Laravel (Laravel 7), 2019 to 2021 |
| Company profile websites | Static company-profile sites developed by Rachmad |
| 1Engage | Customer engagement platform |

Anything beyond this table (features, metrics, stack details, team size, dates per project) is **not known**. Use placeholders and list them in the phase report.

### Placeholder rules

- Card `summary`, `overview`, `features`, `outcome`: write short neutral stand-ins that describe only the known facts above, set `placeholder: true`, and prefix nothing visible. The check script finds them via the flag.
- `skills` and `stack` placeholders: pick from the skills list below, and keep to 3 for cards. Stack facts known from the table above (Next.js, Flutter, Laravel) can be used for real.
- Never invent numbers, user counts, revenue, performance gains, client names, or awards.
- Feature blocks for Quickbill Platform: create 8 placeholder blocks titled "Feature 1" to "Feature 8" with generic screenshots, so the layout can be verified. Rachmad replaces them with real features.

## 5. Skills (draft, Rachmad to confirm)

| Group | Items |
|---|---|
| Frontend | React, Next.js, TypeScript, Tailwind CSS |
| Languages | TypeScript, JavaScript, Go, Dart, PHP |
| Backend and data | Node.js, Go, Laravel, PostgreSQL, MongoDB |
| Mobile | Flutter |
| Tooling | Git, Docker, GitHub Actions, AWS (frontend deployment) |

Honest-scope note: Rachmad's strength is frontend. Backend and cloud items are listed at the level he has actually used them. Do not add "DevOps", "cloud architecture" or "backend architecture" as claims.

## 6. Intro and contact copy (PLACEHOLDER)

English intro:

> I build web products, mostly on the frontend. Seven years across banking, fintech and gaming, from a bank's branch systems to an invoicing platform I helped start from scratch. I like work where the interface has to be fast and hard to break.

Indonesian intro:

> Saya membuat produk web, kebanyakan di sisi frontend. Tujuh tahun di perbankan, fintech, dan game, dari sistem cabang bank sampai platform invoice yang saya bantu bangun dari awal. Saya suka pekerjaan yang antarmukanya harus cepat dan tidak gampang rusak.

Contact line, English: "Open to new roles. Email is the fastest way to reach me."
Contact line, Indonesian: "Terbuka untuk peran baru. Cara tercepat menghubungi saya lewat email."

Mark all of the above `placeholder` in the content layer so the pre-launch check catches them.

## 7. UI strings (`src/messages/{en,id}.json`)

Needed keys at minimum: nav labels (Experience, Projects, Skills, Contact), language toggle label, "Contact", "Download CV", "{n} projects" with plural handling (ID: "{n} proyek"), "Featured", "Other work", "View project", "Back to projects", "Previous project", "Next project", "Close", skills group names, section titles, role/year/company labels on project pages, footer text, 404 text, `aria-label`s for every icon-less control.

Indonesian equivalents, as a starting point: Pengalaman, Proyek, Keahlian, Kontak, Unduh CV, Proyek unggulan, Proyek lainnya, Lihat proyek, Kembali ke proyek, Proyek sebelumnya, Proyek berikutnya, Tutup.

## 8. Voice rules (for both languages)

Rachmad wants copy that sounds like a person wrote it, not like generated marketing text.

Do:
- Write the way he would explain his work to a colleague: plain words, short sentences.
- Lead with what was built or what changed, then the detail.
- Be specific. A named feature beats an adjective.
- Keep descriptions short. The card summary is one sentence.
- If AI-assisted coding is mentioned at all, frame it as a tool that multiplies existing experience, not as the source of the skill.

Do not:
- Use these words or phrases: passionate, leverage, seamless, cutting-edge, robust, crafting, journey, dive into, elevate, unlock, empower, game-changing, state-of-the-art, "not just X but Y", "in today's fast-paced world".
- Write sentences or bullets in neat groups of three for rhythm. Use the number of items that is true.
- Use exclamation marks.
- Lean on em dashes. Use commas and periods.
- Claim anything that cannot be backed up with a screenshot, a link or Rachmad's own word.

Indonesian specifically:
- Write natural Indonesian, not a translation of the English. Rewrite sentences where needed.
- Use "saya" and a semi-formal, friendly register. Avoid stiff phrasing and avoid "Anda" unless addressing the reader is needed.
- Keep common technical terms in English as Indonesian developers do (frontend, deploy, microservice, API, dashboard).
- Check that Indonesian summaries still fit the 140-character limit and the card layout.
