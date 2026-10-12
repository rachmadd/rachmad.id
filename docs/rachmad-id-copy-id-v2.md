# rachmad.id: Website Copy (ID, v2)

Versi Indonesia dari `rachmad-id-copy-en-v2.md`. Struktur dan urutan sama persis, jadi tiap string bisa dipasangkan langsung dengan versi EN.

**Aturan bahasa**
- Pakai "saya", nada santai tapi profesional. Bukan bahasa baku kaku, bukan juga "gue".
- Istilah yang memang dipakai sehari-hari di dunia kerja tech tetap dalam bahasa Inggris: invoice, download, dashboard, frontend, backend, full stack, checkout, approval, playtest, build, deploy, feature flag, live preview, real-time, dan sejenisnya.
- Jabatan tetap dalam bahasa Inggris, sama seperti di CV dan LinkedIn.
- Menu navbar dan judul section tetap dalam bahasa Inggris (Skills, Experience, Projects, Contact). Subtitle-nya yang diterjemahkan.
- Nama produk, nama fitur resmi, dan nama teknologi tidak diterjemahkan.

---

## 0. Global & SEO

| Field | Copy |
|---|---|
| Page title | Rachmad Syaefullah · Full Stack Software Engineer |
| Meta description | Full stack software engineer di Jakarta dengan pengalaman 7+ tahun di fintech, perbankan, dan infrastruktur game. Go, Node.js, React, dan Next.js. |
| OG title | Rachmad Syaefullah · Full Stack Software Engineer |
| OG description | Full stack software engineer di Jakarta. Saya membangun produk dari ujung ke ujung, mulai dari API dan database sampai tampilan yang dipakai pengguna. |

## 1. Navigation

- Links: **Skills** · **Experience** · **Projects** · **Contact** (tidak diterjemahkan)
- Language toggle: **EN** / **ID**
- Button: **Download CV**

---

## 2. Intro (Hero)

**Name:** Rachmad Syaefullah

**Roles** (tidak diterjemahkan):
Full Stack Engineer · Software Engineer · Frontend Engineer · UI Engineer

**Short description**

> Halo, saya Rachmad, full stack software engineer di Jakarta. Sudah 7+ tahun saya membangun sistem perbankan, platform pembayaran, dan developer tools. Saya senang mengerjakan produk yang benar-benar dipakai orang, dan saya peduli pada dua hal: rasanya saat dipakai, dan ketahanannya di production.

**Status chip (optional):** Terbuka untuk posisi full-time dan kontrak

**Buttons:** **Lihat karya saya** · **Hubungi saya**

---

## 3. Skills

**Title:** Skills
**Subtitle:** Yang saya pakai sehari-hari, dari backend sampai browser.

| Group | Items |
|---|---|
| Backend | Go (Gin, GORM), Node.js (Express), Laravel, Python (FastAPI) |
| Frontend | React, Next.js, TypeScript, JavaScript, Tailwind CSS, TanStack Query, Zustand, Jotai, Redux, Zod, React Hook Form, shadcn/ui, Base UI, Radix UI, Ant Design, MUI, Storybook |
| Data | PostgreSQL, MySQL, MongoDB, Redis, Supabase |
| Messaging & Realtime | RabbitMQ, Pub/Sub, gRPC, WebSocket |
| Infra & Observability | Docker, GitHub Actions, OpenTelemetry, Jaeger, Grafana |
| Mobile & Desktop | Flutter, Riverpod, React Native, Electron |
| Testing | Jest, Cypress |

(Nama grup tetap bahasa Inggris karena memang istilah teknis.)

---

## 4. Experience (timeline)

**Title:** Experience
**Subtitle:** Mulai sebagai web developer di 2019. Enam perusahaan kemudian, sekarang saya bekerja di seluruh stack.

| Company | Role | Period |
|---|---|---|
| Quickbill | Senior Software Engineer, Full Stack | Jan 2025 – Jul 2026 |
| 1Engage (Sinarmas Group) | Software Engineer, Full Stack | Apr 2024 – Des 2024 |
| AccelByte | Software Engineer II, Frontend | Jan 2023 – Apr 2024 · Remote |
| Moladin | Software Engineer II, Frontend | Feb 2022 – Jan 2023 |
| Maybank Indonesia | Frontend Developer | Mar 2021 – Feb 2022 |
| vOffice Indonesia | Web Developer | Mar 2019 – Mar 2021 |

Optional side entry: **RevoU** · Mentor (Part-time) · Apr 2024 – Jun 2024

(Singkatan bulan versi Indonesia: Jan, Feb, Mar, Apr, Mei, Jun, Jul, Agu, Sep, Okt, Nov, Des.)

---

## 5. Projects

**Title:** Projects
**Subtitle:** Semua yang pernah saya kerjakan sejak 2019, dari website perusahaan sampai sistem perbankan dan platform pembayaran.

**UI microcopy**
- Card button: **Lihat detail**
- Detail subtitle: baris **Role** (jabatan · perusahaan · tahun), tidak diterjemahkan
- Detail labels: **Tentang** · **Kontribusi saya** · **Fitur** · **Stack**
- Link: **Kunjungi situs**
- Concept-card label: **Internal tool · tidak ada screenshot publik**
- Close: **Tutup**

---

### 5.1 Quickbill Platform

**Card:** Platform invoice dan pembayaran untuk bisnis. Saya ikut mengerjakannya sejak commit pertama, di aplikasi Next.js maupun service Go-nya.
**Card tags:** Next.js · Go · PostgreSQL · RabbitMQ
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**Tentang**
Quickbill memudahkan bisnis mengirim invoice, menerima pembayaran, dan membayar vendor dari satu tempat. Saya bergabung sebagai salah satu dari lima founding engineer dan bertahan sampai tim berkembang lebih dari 20 orang. Saat saya keluar, platform ini melayani 3.000+ pengguna aktif dan memproses transaksi triliunan rupiah setiap bulan.

**Kontribusi saya**
- Memimpin arsitektur frontend: pemilihan stack, konvensi project, dan pola data fetching
- Memegang fitur backend di Go dan PostgreSQL: user settings, template email notifikasi, dan notifikasi invoice
- Menyiapkan CI/CD di GitHub Actions dan containerize aplikasi dengan Docker
- Membangun alur pembayaran dengan Doku dan Xendit untuk berbagai metode pembayaran
- Memindahkan pembuatan PDF invoice dari backend ke browser, sehingga pembuatan invoice tetap cepat walau beban sedang tinggi
- Membangun invoice viewer dengan live preview form dan changelog diff
- Review kode dan mentoring tim frontend beranggotakan enam orang

**Fitur**
Login dengan email atau Google · Role-based access · Onboarding KYC & KYB · Manajemen partner · Wallet · Pay-in invoice · Payout invoice · Bulk invoice · Bulk payment · Pembayaran domestik & internasional · Invoice viewer · Dashboard · Promo banner · Pengaturan akun & pembayaran

**Stack**
Next.js, React, TypeScript, Tailwind CSS, Quickbill UI, Zustand, Jotai, Zod, React Hook Form, Auth.js, next-intl, Pino · Go, Gin, GORM, PostgreSQL, Redis, RabbitMQ · OpenTelemetry, Jaeger, Docker, GitHub Actions

---

### 5.2 Quickbill Enterprise

**Card:** Quickbill untuk perusahaan besar, dengan maker-checker approval di setiap pembayaran.
**Card tags:** Next.js · Go · PostgreSQL
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**Tentang**
Versi Quickbill untuk tim keuangan perusahaan besar. Satu orang menyiapkan pembayaran, orang lain menyetujuinya, dan uang baru bergerak setelah keduanya setuju. Berjalan di atas service Go yang sama dengan platform utama.

**Kontribusi saya**
- Membangun alur maker-checker approval untuk pembayaran dan fund transfer order, di backend maupun frontend
- Menjaga logic bersama tetap di service platform dan Quickbill UI, supaya kedua produk tetap sinkron

**Fitur**
Maker-checker approval · Fund transfer order · Pembayaran · Autentikasi · Dashboard

**Stack**
Sama dengan Quickbill Platform

---

### 5.3 Quickbill Embedded Payment

**Card:** Checkout yang bisa di-embed, supaya klien enterprise bisa menerima pembayaran Quickbill langsung di aplikasi mereka.
**Card tags:** Vite · TypeScript · Quickbill UI
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**Tentang**
Untuk klien yang mengelola invoice di sistem mereka sendiri dan hanya butuh langkah pembayarannya. Pelanggan memilih metode pembayaran, menyelesaikan 3D Secure bila diperlukan, lalu melihat hasilnya, semua di dalam aplikasi klien. Tidak perlu akun Quickbill.

**Kontribusi saya**
- Membangun aplikasi checkout-nya
- Menulis dokumentasi integrasi
- Mendampingi engineer klien secara langsung selama integrasi

**Fitur**
Pilihan metode pembayaran · Verifikasi 3DS · Status pembayaran · Embed di platform klien

**Stack**
Vite, React, TypeScript, Quickbill UI

---

### 5.4 Quickbill UI

**Card:** Component library di balik semua aplikasi web Quickbill. Saya yang memulainya.
**Card tags:** shadcn/ui · Base UI · Storybook
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**Tentang**
Component library bersama yang dibangun di atas shadcn/ui dan Base UI, di-styling dengan Tailwind, dan didokumentasikan di Storybook. Saya memulainya supaya tim tidak lagi membangun ulang komponen yang sama di tiap aplikasi. Sekarang semua aplikasi web Quickbill memakainya, jadi tampilan dan perilakunya terasa seperti satu produk.

**Kontribusi saya**
- Memulai dan membangun library-nya
- Menyiapkan Storybook sebagai tempat mencari dan menguji komponen

**Stack**
React, TypeScript, Tailwind CSS, shadcn/ui, Base UI, Storybook

---

### 5.5 Quickbill Mobile

**Card:** Aplikasi Flutter Quickbill. Saya yang menyiapkan arsitektur dan struktur project-nya.
**Card tags:** Flutter · Riverpod · Dio
**Role:** Senior Software Engineer, Full Stack · Quickbill · 2025–2026

**Tentang**
Versi mobile dari platform Quickbill, dengan fitur yang sama seperti aplikasi web-nya.

**Kontribusi saya**
- Menyiapkan project dari nol: struktur folder, arsitektur, dan pola untuk menambah fitur baru
- Memilih Riverpod untuk state management dan Dio untuk networking

**Stack**
Flutter, Dart, Riverpod, Dio

---

### 5.6 1Engage Platform

**Card:** Platform multi-tenant untuk brand menjalankan broadcast, chatbot, dan voice WhatsApp dalam skala besar.
**Card tags:** Next.js · Express · MongoDB · GCP
**Role:** Software Engineer, Full Stack · 1Engage · 2024

**Tentang**
1Engage adalah Meta Business Solution Provider resmi di bawah Sinarmas Group. Platformnya memungkinkan brand mengelola beberapa nomor WhatsApp Business, membuat alur chatbot, dan mengirim broadcast, langsung maupun terjadwal.

**Kontribusi saya**
- Mengintegrasikan WhatsApp Cloud API di backend Express untuk alur chatbot dan pengelolaan multi-akun
- Membangun editor template pesan di atas Lexical, dengan format inline, variabel dinamis, dan live preview
- Menstandarkan penggunaan TanStack Query di tim dan mengadakan sesi knowledge sharing tentangnya
- Memperbaiki masalah re-render yang bikin form besar terasa lambat saat diketik

**Fitur**
Workspace multi-tenant · Beberapa akun WhatsApp Business · Manajemen broadcast · Broadcast terjadwal · Manajemen template · WhatsApp Flow builder · Alur chatbot · Voice chat & voice call

**Stack**
Next.js, TypeScript, Lexical, TanStack Query · Express, MongoDB, PostgreSQL, RabbitMQ, Pub/Sub · Google Cloud

---

### 5.7 AccelByte Development Toolkit

**Card:** Aplikasi desktop untuk mengirim build game ke playtester dan mengumpulkan crash report.
**Card tags:** Electron · React · TypeScript
**Role:** Software Engineer II, Frontend · AccelByte · 2023–2024

**Tentang**
AccelByte menyediakan layanan backend untuk game online. ADT adalah toolkit-nya untuk game developer: upload dan versioning build, membagikannya ke tester, dan memantau apa yang error. Aplikasi desktop-nya, ADT Hub, didesain ulang di 2023, termasuk channel yang bisa menampung build untuk beberapa platform sekaligus.

**Kontribusi saya**
- Ikut mengerjakan revamp aplikasi desktop ADT Hub
- Membangun instalasi game dengan integrasi local disk dan streamed download
- Membangun manajemen build dan versi, shareable build, dan playtest channel
- Membangun sesi playtest online terjadwal untuk game multiplayer
- Membangun event history dengan crash report, stack trace, dan grafik tren
- Bekerja remote bersama PM, QA, dan backend engineer lintas zona waktu

**Fitur**
Manajemen build & versi · Build multi-platform per channel · Instalasi ke local disk · Streamed download · Shareable build & installer · Playtest channel · Launch argument · Sesi multiplayer terjadwal · Crash report & stack trace · Monitoring playtest

**Stack**
Electron, React, TypeScript, Redux, TanStack Query, Axios

---

### 5.8 AccelByte Multiplayer Servers (AMS)

**Card:** Layanan hosting dedicated game server dari AccelByte. Saya mengerjakan dashboard-nya dan membangun real-time log monitor, termasuk BFF berbasis Express.
**Card tags:** React · Express · gRPC · WebSocket
**Role:** Software Engineer II, Frontend · AccelByte · 2023–2024

**Tentang**
Game multiplayer butuh dedicated server yang dekat dengan pemainnya, bisa naik-turun sesuai kebutuhan, dan langsung diganti kalau crash. AMS mengurus semua itu untuk game developer. Mereka cukup upload build server dan menyiapkan fleet per region dengan jumlah server minimum, maksimum, dan buffer. Setelah itu AMS menyesuaikan skala fleet, memberikan server yang siap pakai ke matchmaking, dan memantau kesehatannya. Developer juga bisa mendaftarkan server yang jalan di komputer sendiri untuk menguji alur matchmaking secara utuh.

**Kontribusi saya**
- Memelihara fleet configuration dan local server configuration di dashboard
- Membangun BFF berbasis Express yang subscribe ke gRPC log stream dan meneruskannya lewat WebSocket, karena browser tidak bisa membaca gRPC stream secara langsung
- Membangun real-time log monitor di dashboard

**Fitur**
Upload server image · Manajemen fleet · Fleet production & development · Konfigurasi region · Server minimum, maksimum & buffer per region · Instance type & jumlah server per instance · Konfigurasi port · Claim key · Autoscaling sesuai jumlah pemain · Registrasi local server untuk testing · Real-time server log

**Stack**
React, TypeScript, Ant Design, Redux, TanStack Query · Node.js, Express (BFF), gRPC, WebSocket

---

### 5.9 Moladin Refinancing

**Card:** Produk refinancing kendaraan dari Moladin: situs pengajuan untuk pelanggan dan CRM internal untuk tim sales.
**Card tags:** React · Redux · Ant Design
**Role:** Software Engineer II, Frontend · Moladin · 2022–2023

**Tentang**
Moladin menawarkan solusi refinancing untuk pemilik kendaraan. Pelanggan mengajukan lewat website dengan beberapa tahap. Sales officer, partner agent, dan regional manager memproses pengajuan itu di CRM internal yang diatur per tim regional.

**Kontribusi saya**
- Mengembangkan fitur untuk alur pengajuan multi-step di situs pelanggan, dengan Redux mengelola state antar tahap dan API call
- Mengembangkan fitur untuk CRM internal yang dipakai tim sales dan partner agent
- Membangun approval yang mengikuti hierarki regional: anggota tim mengajukan, manager menyetujui

**Fitur** *(to confirm, see notes)*
Website: Informasi produk · Pengajuan pinjaman multi-step
CRM: Manajemen lead & pelanggan · Tracking status pengajuan · Upload dokumen · Approval berdasarkan hierarki tim · Tim regional dengan manager & anggota · Akses partner agent

**Stack**
React, TypeScript, Redux, React Hook Form, Ant Design, Tailwind CSS, Single SPA

---

### 5.10 Maybank Branch Delivery System

**Card:** Sistem yang dipakai staf cabang Maybank Indonesia untuk transaksi di counter. Saya ikut mengerjakan migrasinya ke micro-frontend.
**Card tags:** React · single-spa · Spring Boot
**Role:** Frontend Developer · Maybank Indonesia · 2021–2022
**Thumbnail:** Concept card (no public screenshots)

**Tentang**
Branch Delivery System menjalankan operasional counter di seluruh cabang Maybank Indonesia, mulai dari pembukaan rekening dan transfer sampai aktivasi kartu dan e-banking. Frontend-nya dibangun ulang sebagai micro-frontend dengan single-spa, di atas microservice Java Spring Boot yang terhubung ke core banking.

**Kontribusi saya**
- Ikut menyiapkan arsitektur micro-frontend dengan single-spa
- Membangun tooling Python untuk alur kerja development
- Membangun sistem form dan validasi bersama dengan React Hook Form dan Zod, untuk aplikasi yang hampir seluruhnya berisi form
- Membangun update status transaksi dan dokumen secara live lewat WebSocket
- Membangun layar di atas service Spring Boot yang terhubung ke core banking

**Fitur**
Transfer domestik & internasional · Registrasi rekening · Pembukaan rekening · Blokir rekening · Riwayat rekening · Aktivasi kartu · Pengaturan kartu kredit · Aktivasi mobile & internet banking · Surat kuasa & dokumen pendukung · Rekening RDN untuk investor saham · Integrasi core banking

**Stack**
React, TypeScript, single-spa, Redux, React Hook Form, Zod, WebSocket, Python · Java Spring Boot microservices

---

### 5.11 vOffice

**Card:** Website utama vOffice Indonesia beserta CMS Laravel di belakangnya.
**Card tags:** Laravel · PHP · Mapbox
**Role:** Web Developer · vOffice Indonesia · 2019–2021
**Link:** voffice.co.id

**Tentang**
vOffice menyewakan virtual office dan ruang kerja di seluruh Indonesia. Situsnya berisi layanan, peta interaktif semua lokasi di Indonesia dan luar negeri, blog, dan dukungan chatbot. Sebagian besar trafiknya datang dari pencarian.

**Kontribusi saya**
- Membangun dan memelihara website-nya
- Membangun peta interaktif Mapbox untuk semua lokasi vOffice di Indonesia dan seluruh dunia
- Membangun CMS Laravel custom supaya tim marketing bisa menerbitkan blog, promo, layanan, dan landing page sendiri
- Menangani SEO, halaman AMP, performa, dan analytics

**Fitur**
Halaman layanan · Peta lokasi interaktif (Indonesia & dunia) · Blog & CMS · Integrasi chatbot · Form kontak · Halaman AMP · SEO & analytics

**Stack**
PHP, Laravel, MySQL, jQuery, Bootstrap, Sass, Mapbox

---

### 5.12 IZIN.co.id

**Card:** Website layanan legalitas dan perizinan vOffice, lengkap dengan tools mandiri untuk pemilik bisnis.
**Card tags:** Laravel · PHP · SEO
**Role:** Web Developer · vOffice Indonesia · 2019–2021
**Link:** none (the live site has since been rebuilt by another team)
**Thumbnail:** Archived screenshot from my era, or a concept card. Not the current site.
**Footnote:** Situs yang sekarang sudah dibangun ulang sejak saya mengerjakannya.

**Tentang**
IZIN.co.id membantu bisnis mendirikan PT atau CV, mendaftarkan merek, dan mengurus izin usaha di Indonesia. Situsnya menjelaskan setiap layanan, menjaring lead lewat form dan WhatsApp, dan menyediakan tools gratis untuk membantu pemilik bisnis mengecek dan merencanakan sebelum mengajukan.

**Kontribusi saya**
- Membangun dan memelihara situsnya di atas CMS Laravel yang sama dengan vOffice
- Membangun tools mandiri di situsnya: cek nama PT, cek merek, KBLI finder, kalkulator pajak online, kalkulator properti, dan tracking dokumen
- Fokus pada ranking pencarian dan kecepatan halaman

**Fitur**
Cek nama PT · Cek merek · KBLI finder · Kalkulator pajak · Kalkulator properti · Tracking dokumen · Halaman layanan · Panduan & blog · Form lead & konsultasi WhatsApp · CMS · SEO & AMP

**Stack**
PHP, Laravel, jQuery, Bootstrap, Sass

---

### 5.13 Hellolive

**Card:** Website studio podcast dan event space milik vOffice di Jakarta.
**Card tags:** PHP · Bootstrap
**Role:** Web Developer · vOffice Indonesia · 2019–2021
**Link:** hellolive.id

**Tentang**
Hellolive menyewakan studio podcast dan event space di Jakarta Selatan. Situsnya menampilkan ruangan, peralatan, dan paket, lalu mengarahkan pengunjung ke WhatsApp untuk booking.

**Kontribusi saya**
- Membangun dan memelihara website-nya

**Fitur**
Studio & fasilitas · Paket · Lokasi · Booking via WhatsApp

**Stack**
PHP, jQuery, Bootstrap, Sass

---

### 5.14 Shop&Bike (Freelance)

**Card:** Website perusahaan dengan toko online kecil untuk jaringan bengkel motor Astra Otoparts. Freelance, 2022.
**Card tags:** PHP · Bootstrap
**Role:** Freelance Web Developer · 2022
**Link:** shopandbike.co.id

**Tentang**
Shop&Bike adalah jaringan bengkel servis motor milik Astra Otoparts. Selain informasi perusahaan, promo, artikel, dan pencari outlet, situsnya punya toko kecil tempat pelanggan bisa membuat akun dan memesan produk yang tersedia.

**Kontribusi saya**
- Membangun website-nya sebagai proyek freelance di 2022, termasuk akun pelanggan dan pemesanan online

**Fitur**
Profil perusahaan · Katalog produk · Akun pelanggan · Pemesanan online · Promo · Artikel · Pencari outlet

**Stack**
PHP, jQuery, Bootstrap

---

## 6. Contact

**Title:** Contact
**Subtitle:** Terbuka untuk posisi full-time dan kontrak. Cara tercepat menghubungi saya lewat email.

**Links:** Email · LinkedIn · GitHub · Instagram
**Button:** Download CV (PDF)

## 7. Footer

© 2026 Rachmad Syaefullah. Dibuat di Bekasi.

## 8. System pages

- **404 title:** Halaman ini tidak ada.
- **404 body:** Tapi bagian lain situs ini ada, kok.
- **404 button:** Kembali ke beranda

---

## Notes (not site content)

1. Daftar fitur Moladin masih menunggu konfirmasi, sama seperti versi EN.
2. Kalau ada istilah yang menurutmu lebih natural dibiarkan dalam bahasa Inggris (atau sebaliknya), tandai saja dan saya samakan di semua tempat.
