import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.2.
export const project: Project = {
  slug: "quickbill-enterprise",
  tier: "other",
  order: 1,
  companyId: "quickbill",
  title: "Quickbill Enterprise",
  year: "2025",
  card: {
    description: "Quickbill for large companies, with maker-checker approval on every payment.",
    tags: ["Next.js", "Go", "PostgreSQL"],
  },
  media: {
    type: "image",
    src: "/media/projects/quickbill-enterprise/01.webp",
    alt: "Quickbill Enterprise screenshot",
  },
  about: [
    "A version of Quickbill for enterprise finance teams. One person prepares a payment, another approves it, and no money moves until both have signed off. It runs on the same Go services as the main platform.",
  ],
  myPart: [
    "Built the maker-checker approval flow for payments and fund transfer orders, on both the backend and the frontend",
    "Kept shared logic in the platform's services and in Quickbill UI so both products stay in sync",
  ],
  features: ["Maker-checker approvals", "Fund transfer orders", "Payments", "Authentication", "Dashboard"],
  stack: "Same as Quickbill Platform",
};

export default project;
