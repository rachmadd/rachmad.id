import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.1.
export const project: Project = {
  slug: "quickbill-platform",
  tier: "featured",
  order: 1,
  companyId: "quickbill",
  title: "Quickbill Platform",
  year: "2025",
  card: {
    description:
      "Invoicing and payments platform for businesses. I worked on it from the first commit, across the Next.js app and the Go services.",
    tags: ["Next.js", "Go", "PostgreSQL", "RabbitMQ"],
  },
  media: {
    type: "carousel",
    images: [
      { src: "/projects/quickbill-platform/01-detail-desktop.webp", alt: "Quickbill Platform screenshot" },
      { src: "/projects/quickbill-platform/02-detail-desktop.webp", alt: "Quickbill Platform screenshot" },
      { src: "/projects/quickbill-platform/03-detail-desktop.webp", alt: "Quickbill Platform screenshot" },
      { src: "/projects/quickbill-platform/04-detail-desktop.webp", alt: "Quickbill Platform screenshot" },
    ],
  },
  about: [
    "Quickbill lets businesses send invoices, collect payments and pay vendors in one place. I joined as one of five founding engineers and stayed as the team grew past 20. When I left, it served 3,000+ active users and processed trillions of rupiah a month.",
  ],
  myPart: [
    "Led frontend architecture: stack choice, project conventions and data-fetching patterns",
    "Owned backend features in Go and PostgreSQL: user settings, email notification templates and invoice notifications",
    "Set up CI/CD on GitHub Actions and containerized the apps with Docker",
    "Built the payment flow on Doku and Xendit across multiple payment methods",
    "Moved invoice PDF generation from the backend to the browser, which kept invoice creation fast under heavy load",
    "Built the invoice viewer with live form preview and changelog diffs",
    "Reviewed code and mentored a frontend team of six",
  ],
  features: [
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
  stack:
    "Next.js, React, TypeScript, Tailwind CSS, Quickbill UI, Zustand, Jotai, Zod, React Hook Form, Auth.js, next-intl, Pino, Go, Gin, GORM, PostgreSQL, Redis, RabbitMQ, OpenTelemetry, Jaeger, Docker, GitHub Actions",
};

export default project;
