import type { Project } from "@/content/schema";

export const project: Project = {
  slug: "quickbill-embedded-payment",
  tier: "other",
  order: 2,
  companyId: "quickbill",
  title: { en: "Quickbill Embedded Payment", id: "Quickbill Embedded Payment" },
  summary: {
    en: "An embedded payment iframe that drops Quickbill payment flows into a partner app.",
    id: "Iframe pembayaran yang menyisipkan alur pembayaran Quickbill ke dalam aplikasi partner.",
  },
  role: { en: "Software Engineer, Full Stack", id: "Software Engineer, Full Stack" },
  year: "2025",
  skills: ["Next.js", "TypeScript"],
  stack: ["Next.js", "TypeScript"],
  media: {
    type: "concept",
    component: "embedded-payment",
    alt: {
      en: "Diagram of the embedded payment flow inside a partner app",
      id: "Diagram alur pembayaran tersemat di dalam aplikasi partner",
    },
  },
  overview: {
    en: [
      "Quickbill Embedded Payment lets a partner app open an Invoice menu, tap Pay, and complete payment inside a Quickbill iframe without leaving the partner app.",
    ],
    id: [
      "Quickbill Embedded Payment memungkinkan sebuah aplikasi partner membuka menu Invoice, menekan Bayar, dan menyelesaikan pembayaran di dalam iframe Quickbill tanpa keluar dari aplikasi partner.",
    ],
  },
  features: [
    {
      title: { en: "Invoice menu", id: "Menu invoice" },
      body: {
        en: "The partner app opens an Invoice menu that lists what's due.",
        id: "Aplikasi partner membuka menu Invoice yang menampilkan tagihan yang harus dibayar.",
      },
    },
    {
      title: { en: "Embedded iframe", id: "Iframe tersemat" },
      body: {
        en: "Tapping Pay opens a Quickbill payment iframe inside the partner app, so the user never leaves it.",
        id: "Menekan Bayar membuka iframe pembayaran Quickbill di dalam aplikasi partner, sehingga pengguna tidak perlu keluar dari aplikasi tersebut.",
      },
    },
    {
      title: { en: "Payment success", id: "Pembayaran berhasil" },
      body: {
        en: "After the user fills in payment details, the flow ends with a payment success state inside the same iframe.",
        id: "Setelah pengguna mengisi detail pembayaran, alur berakhir dengan status pembayaran berhasil di dalam iframe yang sama.",
      },
    },
  ],
  placeholder: true,
};

export default project;
