import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.3.
export const project: Project = {
  slug: "quickbill-embedded-payment",
  tier: "other",
  order: 2,
  companyId: "quickbill",
  title: "Quickbill Embedded Payment",
  year: "2025",
  card: {
    description: "An embeddable checkout that lets enterprise clients take Quickbill payments inside their own apps.",
    tags: ["Vite", "TypeScript", "Quickbill UI"],
  },
  internal: true,
  media: {
    type: "concept",
    component: "embedded-payment",
    alt: "Diagram of the embedded payment flow inside a partner app",
  },
  about: [
    "For clients who manage invoices in their own systems and only need the payment step. Customers pick a payment method, complete 3D Secure when required and see the result, all inside the client's app. No Quickbill account needed.",
  ],
  myPart: [
    "Built the checkout app",
    "Wrote the integration docs",
    "Worked directly with client engineers during integration",
  ],
  features: ["Payment method selection", "3DS verification", "Payment status", "Embeds inside client platforms"],
  stack: "Vite, React, TypeScript, Quickbill UI",
};

export default project;
