// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Not in docs/rachmad-id-copy-en-v1.md (deck's own open question #4 asks
// whether to add Maybank back; no drafted copy exists for it). Kept as-is
// from the earlier placeholder pass per Rachmad's explicit instruction —
// mechanically remapped to the new field shape, no new text invented.
// See docs/DECISIONS.md.
export const project: Project = {
  slug: "maybank-digital-branch",
  tier: "other",
  order: 10,
  companyId: "maybank",
  title: {
    en: "Maybank Digital Branch Delivery System",
    id: "Maybank Digital Branch Delivery System",
  },
  year: "2021",
  card: {
    description: {
      en: "A micro-frontend banking branch system covering teller, account opening and approvals.",
      id: "A micro-frontend banking branch system covering teller, account opening and approvals.",
    },
    tags: ["React", "Micro-frontends"],
  },
  internal: true,
  generic: true,
  media: {
    type: "concept",
    component: "micro-frontend",
    alt: {
      en: "Generic diagram of a micro-frontend banking branch system",
      id: "Diagram generik sistem cabang bank berbasis micro-frontend",
    },
  },
  tagline: {
    en: "Shown only as a generic diagram, no real screens or internal names.",
    id: "Shown only as a generic diagram, no real screens or internal names.",
  },
  product: {
    en: [
      "Maybank Digital Branch Delivery System is a large web app made of multiple services, built with micro frontends. It covers banking branch operations: manager authorization, account opening, international transfer, teller service, deposit and others.",
      "Shown here only as a generic architecture diagram. No real screens, hostnames or internal names.",
    ],
    id: [
      "Maybank Digital Branch Delivery System is a large web app made of multiple services, built with micro frontends. It covers banking branch operations: manager authorization, account opening, international transfer, teller service, deposit and others.",
      "Shown here only as a generic architecture diagram. No real screens, hostnames or internal names.",
    ],
  },
  inside: {
    en: ["Micro-frontend shell", "Manager authorization", "No real internals"],
    id: ["Micro-frontend shell", "Manager authorization", "No real internals"],
  },
  stack: "React, Micro-frontends",
  placeholder: true,
};

export default project;
