import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.4.
export const project: Project = {
  slug: "quickbill-ui",
  tier: "other",
  order: 4,
  companyId: "quickbill",
  title: "Quickbill UI",
  year: "2025",
  card: {
    description: "The component library behind every Quickbill web app. I started it.",
    tags: ["shadcn/ui", "Base UI", "Storybook"],
  },
  media: {
    type: "concept",
    component: "ui-library",
    alt: "Animated diagram of the Quickbill UI component library building an invoice form",
  },
  about: [
    "A shared component library built on shadcn/ui and Base UI, styled with Tailwind and documented in Storybook. I started it so teams stopped rebuilding the same components in each app. Every Quickbill web app now uses it, so they look and behave like one product.",
  ],
  myPart: ["Started and built the library", "Set up Storybook as the place to find and test components"],
  stack: "React, TypeScript, Tailwind CSS, shadcn/ui, Base UI, Storybook",
};

export default project;
