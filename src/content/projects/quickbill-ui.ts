// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.4.
export const project: Project = {
  slug: "quickbill-ui",
  tier: "other",
  order: 3,
  companyId: "quickbill",
  title: { en: "Quickbill UI", id: "Quickbill UI" },
  year: "2025",
  card: {
    description: {
      en: "The component library every Quickbill web app is built from.",
      id: "The component library every Quickbill web app is built from.",
    },
    tags: ["shadcn/ui", "Base UI", "Storybook"],
  },
  media: {
    type: "image",
    src: "/media/projects/quickbill-ui/01.webp",
    alt: { en: "Quickbill UI screenshot", id: "Quickbill UI screenshot" },
  },
  tagline: {
    en: "The shared building blocks under every Quickbill screen.",
    id: "The shared building blocks under every Quickbill screen.",
  },
  product: {
    en: [
      "With several apps being built at once, the same date picker was about to get written four different ways. I built Quickbill UI so it wouldn't. It sits on shadcn and Base UI, uses Tailwind for styling, and lives in Storybook so anyone on the team can find a component before writing a new one.",
      "It's the reason the platform, the enterprise app and the embedded checkout all look like one product.",
    ],
    id: [
      "With several apps being built at once, the same date picker was about to get written four different ways. I built Quickbill UI so it wouldn't. It sits on shadcn and Base UI, uses Tailwind for styling, and lives in Storybook so anyone on the team can find a component before writing a new one.",
      "It's the reason the platform, the enterprise app and the embedded checkout all look like one product.",
    ],
  },
  stack: "React, TypeScript, Tailwind CSS, shadcn/ui, Base UI, Storybook",
};

export default project;
