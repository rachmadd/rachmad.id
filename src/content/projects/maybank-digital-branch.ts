import type { Project } from "@/content/schema";

export const project: Project = {
  slug: "maybank-digital-branch",
  tier: "other",
  order: 4,
  companyId: "maybank",
  title: {
    en: "Maybank Digital Branch Delivery System",
    id: "Maybank Digital Branch Delivery System",
  },
  summary: {
    en: "A micro-frontend banking branch system covering teller, account opening and approvals.",
    id: "Sistem cabang bank berbasis micro-frontend yang mencakup teller, pembukaan akun, dan persetujuan.",
  },
  role: { en: "Frontend Developer", id: "Frontend Developer" },
  year: "2021",
  skills: ["React", "Micro-frontends"],
  stack: ["React", "Micro-frontends"],
  generic: true,
  media: {
    type: "concept",
    component: "micro-frontend",
    alt: {
      en: "Generic diagram of a micro-frontend banking branch system",
      id: "Diagram generik sistem cabang bank berbasis micro-frontend",
    },
  },
  overview: {
    en: [
      "Maybank Digital Branch Delivery System is a large web app made of multiple services, built with micro frontends. It covers banking branch operations: manager authorization, account opening, international transfer, teller service, deposit and others.",
      "Shown here only as a generic architecture diagram. No real screens, hostnames or internal names.",
    ],
    id: [
      "Maybank Digital Branch Delivery System adalah aplikasi web besar yang terdiri dari beberapa layanan, dibangun dengan micro frontends. Mencakup operasi cabang bank: persetujuan manager, pembukaan akun, transfer internasional, layanan teller, setoran, dan lainnya.",
      "Ditampilkan di sini hanya sebagai diagram arsitektur generik. Tidak ada tampilan layar, hostname, atau nama internal yang sebenarnya.",
    ],
  },
  features: [
    {
      title: { en: "Micro-frontend shell", id: "Shell micro-frontend" },
      body: {
        en: "A shell app hosts separate modules for Teller, Account Opening, Deposit, International Transfer and Manager Authorization, each tied to its own service.",
        id: "Aplikasi shell menampung modul terpisah untuk Teller, Pembukaan Akun, Setoran, Transfer Internasional, dan Persetujuan Manager, masing-masing terhubung ke layanannya sendiri.",
      },
    },
    {
      title: { en: "Manager authorization", id: "Persetujuan manager" },
      body: {
        en: "A transaction can route to Manager Authorization and return approved, generic only.",
        id: "Sebuah transaksi dapat diarahkan ke Persetujuan Manager dan kembali dengan status disetujui, bersifat generik saja.",
      },
    },
    {
      title: { en: "No real internals", id: "Tanpa detail internal asli" },
      body: {
        en: "Per the bank's confidentiality, this project is shown only as a generic diagram, with no real screens or internal names.",
        id: "Demi kerahasiaan pihak bank, proyek ini hanya ditampilkan sebagai diagram generik, tanpa tampilan layar atau nama internal yang sebenarnya.",
      },
    },
  ],
  placeholder: true,
};

export default project;
