# rachmad.id: Website Copy (EN, v1)

Phase 5 copy deck. English first; Indonesian version comes after this one is locked.

**Voice rules used here**
- First person, plain verbs, past tense for shipped work.
- Numbers only where they come from the CV. No invented metrics.
- No "passionate", "seamless", "robust", "leverage", "crafting", "cutting-edge". No em-dash drama.
- Each project tells a small story: what the product is, what I was handed, what I did, what changed.

---

## 0. Global & SEO

| Field | Copy |
|---|---|
| Page title | Rachmad Syaefullah · Software Engineer |
| Meta description | Software engineer in Jakarta. Seven years building web apps for fintech and banking, plus a stretch building tools for game studios. Mostly frontend, often full stack. |
| OG title | Rachmad Syaefullah · Software Engineer |
| OG description | I build the parts of software people actually touch, and enough of the backend to ship them end to end. |

## 1. Navigation

- Links: **Skills** · **Experience** · **Projects** · **Contact**
- Language toggle: **EN** / **ID**
- Button: **Download CV**

---

## 2. Intro (Hero)

**Name:** Rachmad Syaefullah

**Roles** (rotating or inline):
Software Engineer · Frontend Engineer · UI Engineer · Full Stack Engineer · AI Engineer

**Short description** (pick one)

> **Option A (story)**
> Hi, I'm Rachmad. I build web apps, mostly the frontend and sometimes everything behind it. For seven years that has meant banking systems, fintech platforms and a desktop app for game studios. Most recently I helped take Quickbill from an empty repo to 3,000+ active users.

> **Option B (short)**
> Software engineer from Jakarta. Seven years in, I still enjoy the same thing: taking a messy product problem and turning it into an interface that feels obvious.

**Status chip (optional):** Open to full-time and contract roles

**Buttons:** **See my work** · **Get in touch**

---

## 3. Skills

**Title:** What I work with
**Subtitle:** Frontend is home. The rest is what I pick up when a feature needs to ship end to end.

| Group | Items |
|---|---|
| Frontend | React, Next.js, TypeScript, JavaScript, Tailwind CSS, TanStack Query, Zustand, Jotai, Redux, Zod, React Hook Form, shadcn/ui, Base UI, Radix UI, Ant Design, MUI, Storybook |
| Mobile & Desktop | Flutter, Riverpod, React Native, Electron |
| Backend | Go (Gin, GORM), Node.js (Express), Laravel, Python (FastAPI) |
| Data | PostgreSQL, MySQL, MongoDB, Redis, Supabase |
| Infra & Tooling | Docker, GitHub Actions, RabbitMQ, Pub/Sub, gRPC, WebSocket, OpenTelemetry, Jaeger, Grafana |
| Testing | Jest, Cypress |

---

## 4. Experience (timeline)

**Title:** Where I've worked
**Subtitle:** From marketing sites in 2019 to building a fintech platform from scratch.

| Company | Role | Period |
|---|---|---|
| Quickbill | Senior Software Engineer, Full Stack | Jan 2025 – Jul 2026 |
| 1Engage (Sinarmas Group) | Software Engineer, Full Stack | Apr 2024 – Dec 2024 |
| AccelByte | Software Engineer II, Frontend | Jan 2023 – Apr 2024 · Remote |
| Moladin | Software Engineer II, Frontend | Feb 2022 – Jan 2023 |
| Maybank Indonesia | Frontend Developer | Mar 2021 – Feb 2022 |
| vOffice Indonesia | Web Developer | Mar 2019 – Mar 2021 |

Optional side entry: **RevoU** · Mentor (Part-time) · Apr 2024 – Jun 2024

---

## 5. Projects

**Title:** Things I've built
**Subtitle:** Most of these live behind a login, so some get a concept card instead of a screenshot.

**UI microcopy**
- Card button: **View details**
- Detail labels: **The product** · **My part** · **What's inside** · **Built with**
- Link: **Visit live site**
- Concept-card label: **Internal tool · no public screenshots**
- Close: **Close**

---

### 5.1 Quickbill Platform

**Card:** The invoicing and payments app at the center of Quickbill. I set up its frontend from the first commit.
**Card tags:** Next.js · TypeScript · Go · PostgreSQL

**Tagline:** Invoices in, payments out, one place for both.

**The product**
Quickbill lets businesses send invoices, collect payments and pay their own vendors without juggling separate tools. When I joined there were five engineers and no code. I picked the frontend stack, set the patterns everyone else would build on, and wired up CI/CD so shipping didn't need babysitting.

By the time I left, the team had grown past 20 engineers and the platform was moving trillions of rupiah a month for over 3,000 active users. The foundation held up under all of that, which is the part I'm proudest of.

**My part**
- Designed the frontend architecture, folder conventions and data-fetching patterns
- Chose the frontend stack and set up CI/CD on GitHub Actions
- Built the payment UI on Doku and Xendit, keeping multi-step state sane across every payment method
- Moved invoice PDF generation from the server to the browser, so creating invoices stayed fast under heavy load
- Built the invoice viewer with live form preview and changelog diffs
- Reviewed code and paired with a frontend team of six

**What's inside**
Sign in with email or Google · Role-based access · KYC & KYB onboarding · Partner management · Wallet · Pay-in invoices · Payout invoices · Bulk invoices · Bulk payments · Domestic & international payments · Invoice viewer · Dashboard · Promo banners · User & payment settings

**Built with**
Next.js, React, TypeScript, Tailwind CSS, Quickbill UI, Zustand, Jotai, Zod, React Hook Form, Auth.js, next-intl, Pino · Go, Gin, GORM, PostgreSQL, Redis, RabbitMQ · OpenTelemetry, Jaeger, Docker, GitHub Actions

---

### 5.2 Quickbill Enterprise

**Card:** Quickbill reshaped for large companies, where every payment needs a second pair of eyes before it moves.
**Card tags:** Next.js · TypeScript · Go

**Tagline:** Same engine, built around approvals.

**The product**
Enterprise clients liked the platform but couldn't use it as it was. In their finance teams, the person who prepares a payment is never the one who sends it. So we built a version around how they work: one person drafts, another approves, and nothing leaves the account until both have signed off.

It shares its core with the main platform. My job was making it feel purpose-built without forking everything.

**My part**
- Built the maker-checker approval flow for payments and fund transfers
- Kept shared logic and components in the main platform and Quickbill UI, so both products improved together

**What's inside**
Maker-checker approvals · Fund transfer orders · Payments · Authentication · Dashboard

**Built with**
Same stack as Quickbill Platform

---

### 5.3 Quickbill Embedded Payment

**Card:** A checkout screen enterprise clients drop into their own apps. Their invoices, our payment rails.
**Card tags:** Vite · TypeScript · Quickbill UI

**Tagline:** Quickbill checkout, living inside someone else's product.

**The product**
Some clients already had their own invoicing and only wanted the payment part. So I built a small checkout they could embed: the customer picks a method, clears 3D Secure when needed, and lands on a clear status screen. No Quickbill account required.

I kept it light on purpose. Vite instead of Next.js, and only the components it needed from Quickbill UI. I also wrote the integration docs and worked directly with client engineers while they plugged it in.

**What's inside**
Payment method selection · 3DS verification · Payment status · Embeds inside client platforms

**Built with**
Vite, React, TypeScript, Quickbill UI

---

### 5.4 Quickbill UI

**Card:** The component library every Quickbill web app is built from.
**Card tags:** shadcn/ui · Base UI · Storybook

**Tagline:** The shared building blocks under every Quickbill screen.

**The product**
With several apps being built at once, the same date picker was about to get written four different ways. I built Quickbill UI so it wouldn't. It sits on shadcn and Base UI, uses Tailwind for styling, and lives in Storybook so anyone on the team can find a component before writing a new one.

It's the reason the platform, the enterprise app and the embedded checkout all look like one product.

**Built with**
React, TypeScript, Tailwind CSS, shadcn/ui, Base UI, Storybook

---

### 5.5 Quickbill Mobile

**Card:** Quickbill on Flutter. I laid the groundwork so the mobile team could move fast without fighting the structure.
**Card tags:** Flutter · Riverpod · Dio

**Tagline:** The whole platform, in your pocket.

**The product**
The mobile app does what the web platform does, on your phone. I set the project up from scratch: folder structure, state management with Riverpod, networking with Dio, and the pattern for how a new feature gets added. After that, the team could build screens without asking where things go.

**Built with**
Flutter, Dart, Riverpod, Dio

---

### 5.6 1Engage Platform

**Card:** A multi-tenant platform for brands to run WhatsApp at scale: broadcasts, chatbots and voice, on the official API.
**Card tags:** Next.js · Express · MongoDB · GCP

**Tagline:** Where brands talk to their customers on WhatsApp.

**The product**
1Engage is an official Meta Business Solution Provider under Sinarmas Group, and this platform is how its clients use WhatsApp for business. A brand can manage several WhatsApp Business numbers, design chatbot flows, and send broadcasts to the right audience, now or on a schedule.

I worked across the stack here. My favorite piece was the template editor: a rich-text editor on Lexical with inline formatting, dynamic variables and a live preview of how the message lands on a phone. I also cleaned up how the team used TanStack Query, and fixed a bug that made every form field re-render on each keystroke.

**My part**
- Built the WhatsApp message template editor on Lexical, with variables and live preview
- Built chatbot flows and multi-account WhatsApp Business management
- Standardized TanStack Query usage across the team and ran a knowledge-sharing session on it
- Fixed a re-render issue that made large forms lag while typing

**What's inside**
Multi-tenant workspaces · Multiple WhatsApp Business accounts · Broadcast management · Scheduled broadcasts · Template management · WhatsApp Flow builder · Chatbot flows · Voice chat & voice calls

**Built with**
Next.js, TypeScript, Lexical, TanStack Query · Express, MongoDB, PostgreSQL, RabbitMQ, Pub/Sub · Google Cloud

---

### 5.7 AccelByte Development Toolkit

**Card:** A desktop app that gets game builds from the studio to playtesters, and brings the crash reports back.
**Card tags:** Electron · React · TypeScript

**Tagline:** Ship a build, run a playtest, read the crashes.

**The product**
Game studios need builds in testers' hands quickly, and they need to know what broke. ADT handles both. It's an Electron app where teams upload and version their builds, share them through playtest channels, and schedule online sessions for multiplayer tests.

I worked on the parts that touch the player's machine: installing builds to local disk, streaming downloads and setting launch arguments. I also built the event history view, where session logs, crash reports and stack traces sit together with charts that show trends over time.

**My part**
- Built game installation with local disk integration and streamed downloads
- Built build and version management, shareable builds and playtest channels
- Built scheduled online playtest sessions for multiplayer games
- Built event history with crash reports, stack traces and trend charts
- Worked remotely with PMs, QA and backend engineers across time zones

**What's inside**
Build & version management · Install to local disk · Streamed downloads · Shareable builds & installers · Playtest channels · Launch arguments · Scheduled multiplayer sessions · Crash reports & stack traces · Playtest monitoring

**Built with**
Electron, React, TypeScript, Redux, TanStack Query, Axios

---

### 5.8 AccelByte Multiplayer Servers (AMS)

**Card:** The dashboard for running dedicated game servers around the world. I built its real-time server logs.
**Card tags:** React · gRPC · WebSocket

**Tagline:** Game servers close to players, and a live view of what they're doing.

**The product**
AMS runs dedicated game servers near the players who need them. Studios upload server builds, create fleets, choose which regions they run in, and decide how many servers stay warm and ready in each one. The web dashboard is where all of that gets set up and watched.

My main piece was logs. When a server misbehaves, developers want to see it as it happens, not after a refresh. I built a pipeline that streams logs between backend services over gRPC and pushes them to the browser over WebSocket, so the log view updates while the server is still writing.

**What's inside**
Fleet management · Region selection · Server buffer & scaling settings · Instance types & ports · Server build uploads · Development & production fleets · Real-time server logs

**Built with**
React, TypeScript, Ant Design, Redux, TanStack Query, gRPC, WebSocket

---

### 5.9 Moladin Refinancing

**Card:** The tool Moladin's sales teams and agents used to take car-backed loans from first contact to payout.
**Card tags:** React · Redux · Ant Design

**Tagline:** One long loan process, many hands, kept in order.

**The product**
Moladin offers cash loans using a car's BPKB as collateral. Behind that product is a large field operation: sales officers, outside agents, and regional managers who each look after a team. This platform is where all of them do their work.

A loan application has many steps and many people touching it, so most of my effort went into keeping a long multi-step flow predictable. Redux held the state between steps and API calls, React Hook Form carried the heavy forms, and approvals followed the team structure so the right manager signed off on the right application.

**What's inside** *(to confirm, see notes)*
Lead & customer management · Multi-step loan application · Document upload · Application status tracking · Approvals by team hierarchy · Regional teams with managers & members · Agent access

**Built with**
React, TypeScript, Redux, React Hook Form, Ant Design, Tailwind CSS, Single SPA

---

### 5.10 vOffice

**Card:** The main website for vOffice Indonesia, built so marketing could update it without waiting on me.
**Card tags:** Laravel · PHP · Mapbox
**Link:** voffice.co.id

**Tagline:** Virtual offices across Indonesia, one search away.

**The product**
vOffice rents virtual offices and workspaces across Indonesia, and its website is where most customers start. It lists every service and every centre on a map, runs a blog, and hands visitors over to a chatbot when they have questions.

I built and maintained it, along with a Laravel CMS that let the marketing team publish blogs, promos and landing pages on their own. Most visitors came from search, so a lot of the work was the invisible kind: AMP pages, clean markup, fast loads and tidy analytics.

**What's inside**
Service pages · Centre locator on Mapbox · Blog & CMS · Chatbot integration · Contact forms · AMP pages · SEO & analytics

**Built with**
PHP, Laravel, jQuery, Bootstrap, Sass, Mapbox

---

### 5.11 IZIN.co.id

**Card:** vOffice's legal and licensing service. A site that explains company setup in plain words and turns readers into leads.
**Card tags:** Laravel · PHP · SEO
**Link:** izin.co.id

**Tagline:** Making business paperwork a little less scary.

**The product**
IZIN.co.id helps people set up a PT or CV, register a trademark and sort out business permits in Indonesia. That process confuses most first-time founders, so the site does a lot of explaining: service pages, guides and articles written for the questions people actually search.

I built and maintained it during my time at vOffice, on the same CMS setup, with search ranking and page speed as the main priorities.

**What's inside**
Service pages · Guides & blog · Lead forms & WhatsApp consultation · CMS · SEO & AMP

**Built with**
PHP, Laravel, jQuery, Bootstrap, Sass

---

### 5.12 Hellolive

**Card:** A podcast studio and event space in Jakarta. The site had one job: get people to book.
**Card tags:** PHP · Bootstrap
**Link:** hellolive.id

**Tagline:** Show the studio, then get out of the way.

**The product**
Hellolive is vOffice's podcast studio and event space in South Jakarta. The website shows the rooms, the gear and the packages, then sends visitors straight to WhatsApp to lock in a slot. It's a small site, but the people booking are creators deciding how their show will look, so it had to look the part.

**What's inside**
Studio & facilities · Packages · Locations · Booking via WhatsApp

**Built with**
PHP, jQuery, Bootstrap, Sass

---

### 5.13 Shop&Bike (Freelance)

**Card:** A freelance build for Astra Otoparts' motorcycle workshop chain: products, promos and the nearest outlet.
**Card tags:** PHP · Bootstrap
**Link:** shopandbike.co.id

**Tagline:** Find the part, find the workshop.

**The product**
Shop&Bike is Astra Otoparts' network of motorcycle service shops. I built the website as a freelance project: a catalog of tires, batteries, oil and shock absorbers, running promos, maintenance articles, and an outlet finder so riders can locate the nearest workshop.

**What's inside** *(to confirm)*
Product catalog · Product comparison · Promos · Articles · Outlet finder · Customer testimonials

**Built with**
PHP, jQuery, Bootstrap

---

## 6. Contact

**Title:** Let's talk
**Body:** Hiring, building something, or just want to talk frontend? My inbox is open.

**Links:** Email · LinkedIn · GitHub · Instagram
**Button:** Download CV (PDF)

## 7. Footer

© 2026 Rachmad Syaefullah. Made in Bekasi.

## 8. System pages

- **404 title:** This page doesn't exist.
- **404 body:** The rest of the site does, though.
- **404 button:** Back to home

---

## Open questions before this goes into the prompts

1. **Moladin conflict.** Your CV says you worked on the consumer-facing (B2C) refinancing web. Here you described an internal tool for sales and partners. Which one is right? The site and the CV need to say the same thing.
2. **Moladin features** are my best guess based on how their BPKB loan product and sales hierarchy work. Cross out anything you didn't build.
3. **AMS features** come from AccelByte's public docs. Confirm which screens you touched besides logs; if only logs, the "What's inside" list should stay as product context and "My part" stays logs only.
4. **Maybank** was in your earlier project list but not in this one. Drop it, or should I write its card (concept-card, no screenshots)?
5. **AI Engineer role.** Nothing on the page backs it up yet: no AI skills group, no AI project. Either add one (your Go + AI invoicing project is a candidate) or drop the role from the hero. Right now it reads as padding.
6. **Shop&Bike.** Which features were yours, and roughly when (during vOffice years)? The live site may have been rebuilt since.
7. **IZIN.co.id** has clearly been rebuilt since your time. Use archived screenshots or a concept card, not the current site.
8. **Suggestion:** merge Hellolive and Shop&Bike into one "Smaller sites" card. Thirteen cards is a lot of scrolling, and those two are your lightest work.
