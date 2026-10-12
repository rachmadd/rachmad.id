// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.3.
export const project: Project = {
  slug: "quickbill-embedded-payment",
  tier: "other",
  order: 2,
  companyId: "quickbill",
  title: { en: "Quickbill Embedded Payment", id: "Quickbill Embedded Payment" },
  year: "2025",
  card: {
    description: {
      en: "A checkout screen enterprise clients drop into their own apps. Their invoices, our payment rails.",
      id: "A checkout screen enterprise clients drop into their own apps. Their invoices, our payment rails.",
    },
    tags: ["Vite", "TypeScript", "Quickbill UI"],
  },
  internal: true,
  media: {
    type: "concept",
    component: "embedded-payment",
    alt: {
      en: "Diagram of the embedded payment flow inside a partner app",
      id: "Diagram alur pembayaran tersemat di dalam aplikasi partner",
    },
  },
  tagline: {
    en: "Quickbill checkout, living inside someone else's product.",
    id: "Quickbill checkout, living inside someone else's product.",
  },
  product: {
    en: [
      "Some clients already had their own invoicing and only wanted the payment part. So I built a small checkout they could embed: the customer picks a method, clears 3D Secure when needed, and lands on a clear status screen. No Quickbill account required.",
      "I kept it light on purpose. Vite instead of Next.js, and only the components it needed from Quickbill UI. I also wrote the integration docs and worked directly with client engineers while they plugged it in.",
    ],
    id: [
      "Some clients already had their own invoicing and only wanted the payment part. So I built a small checkout they could embed: the customer picks a method, clears 3D Secure when needed, and lands on a clear status screen. No Quickbill account required.",
      "I kept it light on purpose. Vite instead of Next.js, and only the components it needed from Quickbill UI. I also wrote the integration docs and worked directly with client engineers while they plugged it in.",
    ],
  },
  inside: {
    en: ["Payment method selection", "3DS verification", "Payment status", "Embeds inside client platforms"],
    id: ["Payment method selection", "3DS verification", "Payment status", "Embeds inside client platforms"],
  },
  stack: "Vite, React, TypeScript, Quickbill UI",
};

export default project;
