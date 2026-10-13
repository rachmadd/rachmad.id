import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.4 (updated 2026-10-14).
export const project: Project = {
  slug: "quickbill-ui",
  tier: "other",
  order: 4,
  companyId: "quickbill",
  title: "Quickbill UI",
  year: "2025–2026",
  card: {
    description: "The design system and component library behind every Quickbill web app. I started it and shipped it as an npm package.",
    tags: ["shadcn/ui", "Base UI", "Storybook", "npm"],
  },
  media: {
    type: "carousel",
    images: [{ src: "/projects/quickbill-ui/01-detail-desktop.webp", alt: "Quickbill UI component library in Storybook" }],
  },
  link: "main--6ace544728e8e596ac5d731e.chromatic.com/",
  brandColor: "#2662e7",
  repo: "github.com/rachmadd/quickbill-ui",
  about: [
    "Quickbill's shared design system: design tokens, icons, components and hooks, built on shadcn/ui and Base UI and styled with Tailwind. It's published as an npm package through GitHub and documented in Storybook. Every Quickbill web app installs it, so they look and behave like one product.",
  ],
  myPart: [
    "Started the project and set up the design tokens the whole system is built on",
    "Built a DataTable on TanStack Table with row selection, sorting, pagination and frozen columns",
    "Built overlay components: Dialog, AlertDialog, Toast and Dropdown",
    "Built form fields like Autocomplete, Combobox and Select, all compatible with React Hook Form",
    "Set up Storybook and wrote the docs: step-by-step installation, component usage and patterns",
    "Published the package to the npm registry through GitHub, with Changesets for versioning, CI/CD and a Changesets release bot",
  ],
  features: [
    "54 Components and 411 Stories",
    "Design tokens",
    "Icon set",
    "Reusable components",
    "Custom hooks",
    "DataTable",
    "Dialog, AlertDialog, Toast & Dropdown",
    "Autocomplete, Combobox & Select",
    "React Hook Form support",
    "Storybook docs",
    "Versioned releases",
  ],
  stack:
    "React, TypeScript, Tailwind CSS, shadcn/ui, Base UI, TanStack Table, Storybook, Changesets, GitHub Actions, GitHub Packages (npm)",
};

export default project;
