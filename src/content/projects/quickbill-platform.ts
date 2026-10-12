// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.1.
export const project: Project = {
  slug: "quickbill-platform",
  tier: "featured",
  order: 1,
  companyId: "quickbill",
  title: { en: "Quickbill Platform", id: "Quickbill Platform" },
  year: "2025",
  card: {
    description: {
      en: "The invoicing and payments app at the center of Quickbill. I set up its frontend from the first commit.",
      id: "The invoicing and payments app at the center of Quickbill. I set up its frontend from the first commit.",
    },
    tags: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
  },
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/quickbill-platform/01.webp", alt: { en: "Quickbill Platform screenshot", id: "Quickbill Platform screenshot" } },
      { src: "/media/projects/quickbill-platform/02.webp", alt: { en: "Quickbill Platform screenshot", id: "Quickbill Platform screenshot" } },
      { src: "/media/projects/quickbill-platform/03.webp", alt: { en: "Quickbill Platform screenshot", id: "Quickbill Platform screenshot" } },
    ],
  },
  tagline: {
    en: "Invoices in, payments out, one place for both.",
    id: "Invoices in, payments out, one place for both.",
  },
  product: {
    en: [
      "Quickbill lets businesses send invoices, collect payments and pay their own vendors without juggling separate tools. When I joined there were five engineers and no code. I picked the frontend stack, set the patterns everyone else would build on, and wired up CI/CD so shipping didn't need babysitting.",
      "By the time I left, the team had grown past 20 engineers and the platform was moving trillions of rupiah a month for over 3,000 active users. The foundation held up under all of that, which is the part I'm proudest of.",
    ],
    id: [
      "Quickbill lets businesses send invoices, collect payments and pay their own vendors without juggling separate tools. When I joined there were five engineers and no code. I picked the frontend stack, set the patterns everyone else would build on, and wired up CI/CD so shipping didn't need babysitting.",
      "By the time I left, the team had grown past 20 engineers and the platform was moving trillions of rupiah a month for over 3,000 active users. The foundation held up under all of that, which is the part I'm proudest of.",
    ],
  },
  myPart: {
    en: [
      "Designed the frontend architecture, folder conventions and data-fetching patterns",
      "Chose the frontend stack and set up CI/CD on GitHub Actions",
      "Built the payment UI on Doku and Xendit, keeping multi-step state sane across every payment method",
      "Moved invoice PDF generation from the server to the browser, so creating invoices stayed fast under heavy load",
      "Built the invoice viewer with live form preview and changelog diffs",
      "Reviewed code and paired with a frontend team of six",
    ],
    id: [
      "Designed the frontend architecture, folder conventions and data-fetching patterns",
      "Chose the frontend stack and set up CI/CD on GitHub Actions",
      "Built the payment UI on Doku and Xendit, keeping multi-step state sane across every payment method",
      "Moved invoice PDF generation from the server to the browser, so creating invoices stayed fast under heavy load",
      "Built the invoice viewer with live form preview and changelog diffs",
      "Reviewed code and paired with a frontend team of six",
    ],
  },
  inside: {
    en: [
      "Sign in with email or Google",
      "Role-based access",
      "KYC & KYB onboarding",
      "Partner management",
      "Wallet",
      "Pay-in invoices",
      "Payout invoices",
      "Bulk invoices",
      "Bulk payments",
      "Domestic & international payments",
      "Invoice viewer",
      "Dashboard",
      "Promo banners",
      "User & payment settings",
    ],
    id: [
      "Sign in with email or Google",
      "Role-based access",
      "KYC & KYB onboarding",
      "Partner management",
      "Wallet",
      "Pay-in invoices",
      "Payout invoices",
      "Bulk invoices",
      "Bulk payments",
      "Domestic & international payments",
      "Invoice viewer",
      "Dashboard",
      "Promo banners",
      "User & payment settings",
    ],
  },
  stack:
    "Next.js, React, TypeScript, Tailwind CSS, Quickbill UI, Zustand, Jotai, Zod, React Hook Form, Auth.js, next-intl, Pino, Go, Gin, GORM, PostgreSQL, Redis, RabbitMQ, OpenTelemetry, Jaeger, Docker, GitHub Actions",
};

export default project;
