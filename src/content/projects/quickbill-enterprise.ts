// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.2.
export const project: Project = {
  slug: "quickbill-enterprise",
  tier: "other",
  order: 1,
  companyId: "quickbill",
  title: { en: "Quickbill Enterprise", id: "Quickbill Enterprise" },
  year: "2025",
  card: {
    description: {
      en: "Quickbill reshaped for large companies, where every payment needs a second pair of eyes before it moves.",
      id: "Quickbill reshaped for large companies, where every payment needs a second pair of eyes before it moves.",
    },
    tags: ["Next.js", "TypeScript", "Go"],
  },
  media: {
    type: "image",
    src: "/media/projects/quickbill-enterprise/01.webp",
    alt: {
      en: "Quickbill Enterprise screenshot",
      id: "Quickbill Enterprise screenshot",
    },
  },
  tagline: {
    en: "Same engine, built around approvals.",
    id: "Same engine, built around approvals.",
  },
  product: {
    en: [
      "Enterprise clients liked the platform but couldn't use it as it was. In their finance teams, the person who prepares a payment is never the one who sends it. So we built a version around how they work: one person drafts, another approves, and nothing leaves the account until both have signed off.",
      "It shares its core with the main platform. My job was making it feel purpose-built without forking everything.",
    ],
    id: [
      "Enterprise clients liked the platform but couldn't use it as it was. In their finance teams, the person who prepares a payment is never the one who sends it. So we built a version around how they work: one person drafts, another approves, and nothing leaves the account until both have signed off.",
      "It shares its core with the main platform. My job was making it feel purpose-built without forking everything.",
    ],
  },
  myPart: {
    en: [
      "Built the maker-checker approval flow for payments and fund transfers",
      "Kept shared logic and components in the main platform and Quickbill UI, so both products improved together",
    ],
    id: [
      "Built the maker-checker approval flow for payments and fund transfers",
      "Kept shared logic and components in the main platform and Quickbill UI, so both products improved together",
    ],
  },
  inside: {
    en: ["Maker-checker approvals", "Fund transfer orders", "Payments", "Authentication", "Dashboard"],
    id: ["Maker-checker approvals", "Fund transfer orders", "Payments", "Authentication", "Dashboard"],
  },
  stack: "Same stack as Quickbill Platform",
};

export default project;
