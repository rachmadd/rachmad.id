# rachmad.id: Website Copy (EN, v2)

Phase 5 copy deck, v2. Same facts as v1, said more plainly.

**What changed from v1**
- Project descriptions are shorter and factual. The scene-setting and "story" lines are gone.
- Taglines are removed. The card line already does that job.
- Every section subtitle is rewritten to be short and literal.
- "My part" is a bullet list for every project, so the detail view reads the same everywhere.

**Voice rules**
- First person, plain verbs, past tense for shipped work.
- Say what the product does, then what I did. No scene-setting.
- "I built" only for things I started or built myself. Use "worked on" or "developed features for" when the product already existed or belonged to a team.
- Numbers only from the CV. No "passionate", "seamless", "robust", "leverage", "crafting", "cutting-edge", "not just X but Y".

---

## 0. Global & SEO

| Field | Copy |
|---|---|
| Page title | Rachmad Syaefullah · Full Stack Software Engineer |
| Meta description | Full stack software engineer in Jakarta with 7+ years in fintech, banking and game infrastructure. Go, Node.js, React and Next.js. |
| OG title | Rachmad Syaefullah · Full Stack Software Engineer |
| OG description | Full stack software engineer in Jakarta. I build products end to end, from the API and database to the interface. |

## 1. Navigation

- Links: **Skills** · **Experience** · **Projects** · **Contact**
- Language toggle: **EN** / **ID**
- Button: **Download CV**

---

## 2. Intro (Hero)

**Name:** Rachmad Syaefullah

**Roles** (rotating or inline):
Full Stack Engineer · Software Engineer · Frontend Engineer · UI Engineer

**Short description**

> Hi, I'm Rachmad, a full stack software engineer in Jakarta. I've spent 7+ years building banking systems, payment platforms and developer tools. I like work that ends up in real people's hands, and I care about both how it feels to use and how it holds up in production.

**Status chip (optional):** Open to full-time and contract roles

**Buttons:** **See my work** · **Get in touch**

---

## 3. Skills

**Title:** Skills
**Subtitle:** What I use day to day, from the backend to the browser.

| Group | Items |
|---|---|
| Backend | Go (Gin, GORM), Node.js (Express), Laravel, Python (FastAPI) |
| Frontend | React, Next.js, TypeScript, JavaScript, Tailwind CSS, TanStack Query, Zustand, Jotai, Redux, Zod, React Hook Form, shadcn/ui, Base UI, Radix UI, Ant Design, MUI, Storybook |
| Data | PostgreSQL, MySQL, MongoDB, Redis, Supabase |
| Messaging & Realtime | RabbitMQ, Pub/Sub, gRPC, WebSocket |
| Infra & Observability | Docker, GitHub Actions, OpenTelemetry, Jaeger, Grafana |
| Mobile & Desktop | Flutter, Riverpod, React Native, Electron |
| Testing | Jest, Cypress |

---

## 4. Experience (timeline)

**Title:** Experience
**Subtitle:** Started as a web developer in 2019. Six companies later, I work across the whole stack.

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

**Title:** Projects
**Subtitle:** Everything I've worked on since 2019, from company websites to banking systems and payment platforms.

**UI microcopy**
- Card button: **View details**
- Detail subtitle: the project's **Role** line (job title · company · years), shown under the project title. No taglines.
- Detail labels: **About** · **My part** · **Features** · **Stack**
- Link: **Visit site**
- Concept-card label: **Internal tool · no public screenshots**
- Close: **Close**

---

### 5.1 Quickbill Platform

**Card:** Invoicing and payments platform for businesses. I worked on it from the first commit, across the Next.js app and the Go services.
**Card tags:** Next.js · Go · PostgreSQL · RabbitMQ
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**About**
Quickbill lets businesses send invoices, collect payments and pay vendors in one place. I joined as one of five founding engineers and stayed as the team grew past 20. When I left, it served 3,000+ active users and processed trillions of rupiah a month.

**My part**
- Led frontend architecture: stack choice, project conventions and data-fetching patterns
- Owned backend features in Go and PostgreSQL: user settings, email notification templates and invoice notifications
- Set up CI/CD on GitHub Actions and containerized the apps with Docker
- Built the payment flow on Doku and Xendit across multiple payment methods
- Moved invoice PDF generation from the backend to the browser, which kept invoice creation fast under heavy load
- Built the invoice viewer with live form preview and changelog diffs
- Reviewed code and mentored a frontend team of six

**Features**
Sign in with email or Google · Role-based access · KYC & KYB onboarding · Partner management · Wallet · Pay-in invoices · Payout invoices · Bulk invoices · Bulk payments · Domestic & international payments · Invoice viewer · Dashboard · Promo banners · User & payment settings

**Stack**
Next.js, React, TypeScript, Tailwind CSS, Quickbill UI, Zustand, Jotai, Zod, React Hook Form, Auth.js, next-intl, Pino · Go, Gin, GORM, PostgreSQL, Redis, RabbitMQ · OpenTelemetry, Jaeger, Docker, GitHub Actions

---

### 5.2 Quickbill Enterprise

**Card:** Quickbill for large companies, with maker-checker approval on every payment.
**Card tags:** Next.js · Go · PostgreSQL
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**About**
A version of Quickbill for enterprise finance teams. One person prepares a payment, another approves it, and no money moves until both have signed off. It runs on the same Go services as the main platform.

**My part**
- Built the maker-checker approval flow for payments and fund transfer orders, on both the backend and the frontend
- Kept shared logic in the platform's services and in Quickbill UI so both products stay in sync

**Features**
Maker-checker approvals · Fund transfer orders · Payments · Authentication · Dashboard

**Stack**
Same as Quickbill Platform

---

### 5.3 Quickbill Embedded Payment

**Card:** An embeddable checkout that lets enterprise clients take Quickbill payments inside their own apps.
**Card tags:** Vite · TypeScript · Quickbill UI
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**About**
For clients who manage invoices in their own systems and only need the payment step. Customers pick a payment method, complete 3D Secure when required and see the result, all inside the client's app. No Quickbill account needed.

**My part**
- Built the checkout app
- Wrote the integration docs
- Worked directly with client engineers during integration

**Features**
Payment method selection · 3DS verification · Payment status · Embeds inside client platforms

**Stack**
Vite, React, TypeScript, Quickbill UI

---

### 5.4 Quickbill UI

**Card:** The component library behind every Quickbill web app. I started it.
**Card tags:** shadcn/ui · Base UI · Storybook
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**About**
A shared component library built on shadcn/ui and Base UI, styled with Tailwind and documented in Storybook. I started it so teams stopped rebuilding the same components in each app. Every Quickbill web app now uses it, so they look and behave like one product.

**My part**
- Started and built the library
- Set up Storybook as the place to find and test components

**Stack**
React, TypeScript, Tailwind CSS, shadcn/ui, Base UI, Storybook

---

### 5.5 Quickbill Mobile

**Card:** Quickbill's Flutter app. I set up its architecture and project structure.
**Card tags:** Flutter · Riverpod · Dio
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**About**
The mobile version of the Quickbill platform, with the same features as the web app.

**My part**
- Set up the project from scratch: folder structure, architecture and the pattern for adding features
- Chose Riverpod for state management and Dio for networking

**Stack**
Flutter, Dart, Riverpod, Dio

---

### 5.6 1Engage Platform

**Card:** Multi-tenant platform for brands to run WhatsApp broadcasts, chatbots and voice at scale.
**Card tags:** Next.js · Express · MongoDB · GCP
**Role:** Software Engineer, Full Stack · 1Engage · 2024

**About**
1Engage is an official Meta Business Solution Provider under Sinarmas Group. Its platform lets brands manage several WhatsApp Business numbers, build chatbot flows and send broadcasts, right away or on a schedule.

**My part**
- Integrated the WhatsApp Cloud API on the Express backend for chatbot flows and multi-account management
- Built the message template editor on Lexical, with inline formatting, dynamic variables and live preview
- Standardized TanStack Query usage across the team and ran a knowledge-sharing session on it
- Fixed a re-render issue that made large forms lag while typing

**Features**
Multi-tenant workspaces · Multiple WhatsApp Business accounts · Broadcast management · Scheduled broadcasts · Template management · WhatsApp Flow builder · Chatbot flows · Voice chat & voice calls

**Stack**
Next.js, TypeScript, Lexical, TanStack Query · Express, MongoDB, PostgreSQL, RabbitMQ, Pub/Sub · Google Cloud

---

### 5.7 AccelByte Development Toolkit

**Card:** Desktop app for getting game builds to playtesters and collecting crash reports.
**Card tags:** Electron · React · TypeScript
**Role:** Software Engineer II, Frontend · AccelByte · 2023–2024

**About**
AccelByte provides backend services for online games. ADT is its toolkit for game developers to upload and version builds, share them with testers and track what breaks. Its desktop app, ADT Hub, was redesigned in 2023, including channels that hold builds for multiple platforms.

**My part**
- Worked on the ADT Hub desktop app revamp
- Built game installation with local disk integration and streamed downloads
- Built build and version management, shareable builds and playtest channels
- Built scheduled online playtest sessions for multiplayer games
- Built event history with crash reports, stack traces and trend charts
- Worked remotely with PMs, QA and backend engineers across time zones

**Features**
Build & version management · Multi-platform builds per channel · Install to local disk · Streamed downloads · Shareable builds & installers · Playtest channels · Launch arguments · Scheduled multiplayer sessions · Crash reports & stack traces · Playtest monitoring

**Stack**
Electron, React, TypeScript, Redux, TanStack Query, Axios

---

### 5.8 AccelByte Multiplayer Servers (AMS)

**Card:** AccelByte's dedicated game server hosting. I worked on its dashboard and built the real-time log monitor, including an Express BFF.
**Card tags:** React · Express · gRPC · WebSocket
**Role:** Software Engineer II, Frontend · AccelByte · 2023–2024

**About**
Multiplayer games need dedicated servers close to their players, scaled to demand and replaced when they crash. AMS handles that for game developers. They upload a server build and set up fleets per region with min, max and buffer servers. AMS then scales the fleets, hands ready servers to matchmaking and monitors their health. Developers can also register a server running on their own machine to test the full matchmaking flow.

**My part**
- Maintained fleet configuration and local server configuration in the dashboard
- Built an Express BFF that subscribes to the gRPC log stream and relays it over WebSocket, since browsers can't read gRPC streams directly
- Built the real-time log monitor in the dashboard

**Features**
Server image uploads · Fleet management · Production & development fleets · Region configuration · Min, max & buffer servers per region · Instance types & servers per instance · Port configuration · Claim keys · Autoscaling with player demand · Local server registration for testing · Real-time server logs

**Stack**
React, TypeScript, Ant Design, Redux, TanStack Query · Node.js, Express (BFF), gRPC, WebSocket

---

### 5.9 Moladin Refinancing

**Card:** Moladin's vehicle refinancing product: the customer application site and the internal sales CRM.
**Card tags:** React · Redux · Ant Design
**Role:** Software Engineer II, Frontend · Moladin · 2022–2023

**About**
Moladin offers refinancing solutions for vehicle owners. Customers apply through a multi-step website. Sales officers, partner agents and regional managers process those applications in an internal CRM organized by regional team.

**My part**
- Developed features for the customer site's multi-step application, with Redux managing state across steps and API calls
- Developed features for the internal CRM used by sales teams and partner agents
- Built approvals that follow the regional hierarchy, where members submit and managers approve

**Features** *(to confirm, see notes)*
Website: Product information · Multi-step loan application
CRM: Lead & customer management · Application status tracking · Document upload · Approvals by team hierarchy · Regional teams with managers & members · Partner agent access

**Stack**
React, TypeScript, Redux, React Hook Form, Ant Design, Tailwind CSS, Single SPA

---

### 5.10 Maybank Branch Delivery System

**Card:** The system Maybank Indonesia branch staff use for counter transactions. I worked on its move to micro-frontends.
**Card tags:** React · single-spa · Spring Boot
**Role:** Frontend Developer · Maybank Indonesia · 2021–2022
**Thumbnail:** Concept card (no public screenshots)

**About**
The Branch Delivery System runs counter operations in every Maybank Indonesia branch, from account opening and transfers to card and e-banking activation. Its frontend was rebuilt as micro-frontends on single-spa, on top of Java Spring Boot microservices connected to core banking.

**My part**
- Helped set up the micro-frontend architecture on single-spa
- Built Python tooling for the development workflow
- Built a shared form and validation system on React Hook Form and Zod for a form-heavy app
- Built live transaction and document status updates over WebSocket
- Built screens on top of the Spring Boot services that connect to core banking

**Features**
Domestic & international transfers · Account registration · Account opening · Account blocking · Account history · Card activation · Credit card settings · Mobile & internet banking activation · Power of attorney & supporting documents · RDN accounts for stock investors · Core banking integration

**Stack**
React, TypeScript, single-spa, Redux, React Hook Form, Zod, WebSocket, Python · Java Spring Boot microservices

---

### 5.11 vOffice

**Card:** vOffice Indonesia's main website and the Laravel CMS behind it.
**Card tags:** Laravel · PHP · Mapbox
**Role:** Web Developer · vOffice Indonesia · 2019–2021
**Link:** voffice.co.id

**About**
vOffice rents virtual offices and workspaces across Indonesia. The site covers its services, an interactive map of every centre in Indonesia and abroad, a blog and chatbot support. Most of its traffic comes from search.

**My part**
- Built and maintained the website
- Built an interactive Mapbox map of every vOffice location in Indonesia and worldwide
- Built a custom Laravel CMS so the marketing team could publish blogs, promos, services and landing pages themselves
- Handled SEO, AMP pages, performance and analytics

**Features**
Service pages · Interactive location map (Indonesia & worldwide) · Blog & CMS · Chatbot integration · Contact forms · AMP pages · SEO & analytics

**Stack**
PHP, Laravel, MySQL, jQuery, Bootstrap, Sass, Mapbox

---

### 5.12 IZIN.co.id

**Card:** Website for vOffice's legal and licensing service, with self-service tools for business owners.
**Card tags:** Laravel · PHP · SEO
**Role:** Web Developer · vOffice Indonesia · 2019–2021
**Link:** none (the live site has since been rebuilt by another team)
**Thumbnail:** Archived screenshot from my era, or a concept card. Not the current site.

**About**
IZIN.co.id helps businesses set up a PT or CV, register trademarks and get business permits in Indonesia. The site explains each service, brings in leads through forms and WhatsApp, and offers free tools that help business owners check and plan before they apply.

**My part**
- Built and maintained the site on the same Laravel CMS as vOffice
- Built the site's self-service tools: company name check, trademark name check, KBLI finder, online tax calculator, property calculator and document tracking
- Focused on search ranking and page speed

**Features**
Company name check · Trademark name check · KBLI business code finder · Tax calculator · Property calculator · Document tracking · Service pages · Guides & blog · Lead forms & WhatsApp consultation · CMS · SEO & AMP

**Stack**
PHP, Laravel, jQuery, Bootstrap, Sass

---

### 5.13 Hellolive

**Card:** Website for vOffice's podcast studio and event space in Jakarta.
**Card tags:** PHP · Bootstrap
**Role:** Web Developer · vOffice Indonesia · 2019–2021
**Link:** hellolive.id

**About**
Hellolive rents podcast studios and event space in South Jakarta. The site shows the rooms, equipment and packages, and sends visitors to WhatsApp to book.

**My part**
- Built and maintained the website

**Features**
Studio & facilities · Packages · Locations · Booking via WhatsApp

**Stack**
PHP, jQuery, Bootstrap, Sass

---

### 5.14 Shop&Bike (Freelance)

**Card:** Company site with a small online shop for Astra Otoparts' motorcycle workshop chain. Freelance, 2022.
**Card tags:** PHP · Bootstrap
**Role:** Freelance Web Developer · 2022
**Link:** shopandbike.co.id

**About**
Shop&Bike is Astra Otoparts' network of motorcycle service shops. Besides company information, promos, articles and an outlet finder, the site has a small shop where customers create an account and order the products listed.

**My part**
- Built the website as a freelance project in 2022, including customer accounts and online ordering

**Features**
Company profile · Product catalog · Customer accounts · Online ordering · Promos · Articles · Outlet finder

**Stack**
PHP, jQuery, Bootstrap

---

## 6. Contact

**Title:** Contact
**Subtitle:** Open to full-time and contract roles. Email is the fastest way to reach me.

**Links:** Email · LinkedIn · GitHub · Instagram
**Button:** Download CV (PDF)

## 7. Footer

© 2026 Rachmad Syaefullah. Made in Bekasi.

## 8. System pages

- **404 title:** This page doesn't exist.
- **404 body:** The rest of the site does, though.
- **404 button:** Back to home

---

## Notes (not site content)

**Still open**
1. **Moladin features** (both website and CRM lists) are still my best guess. Cross out anything you didn't build.
2. **CV update:** add the Moladin internal CRM to your CV so both say the same thing.
