// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.9. Open questions #1/#2 in
// the deck note a conflict with the CV (B2C refinancing web vs. this
// internal sales/agent tool) and ask Rachmad to confirm the feature list.
export const project: Project = {
  slug: "moladin-refinancing",
  tier: "other",
  order: 5,
  companyId: "moladin",
  title: { en: "Moladin Refinancing", id: "Moladin Refinancing" },
  year: "2022",
  card: {
    description: {
      en: "The tool Moladin's sales teams and agents used to take car-backed loans from first contact to payout.",
      id: "The tool Moladin's sales teams and agents used to take car-backed loans from first contact to payout.",
    },
    tags: ["React", "Redux", "Ant Design"],
  },
  internal: true,
  media: {
    type: "image",
    src: "/media/projects/moladin-refinancing/01.webp",
    alt: { en: "Moladin Refinancing screenshot", id: "Moladin Refinancing screenshot" },
  },
  tagline: {
    en: "One long loan process, many hands, kept in order.",
    id: "One long loan process, many hands, kept in order.",
  },
  product: {
    en: [
      "Moladin offers cash loans using a car's BPKB as collateral. Behind that product is a large field operation: sales officers, outside agents, and regional managers who each look after a team. This platform is where all of them do their work.",
      "A loan application has many steps and many people touching it, so most of my effort went into keeping a long multi-step flow predictable. Redux held the state between steps and API calls, React Hook Form carried the heavy forms, and approvals followed the team structure so the right manager signed off on the right application.",
    ],
    id: [
      "Moladin offers cash loans using a car's BPKB as collateral. Behind that product is a large field operation: sales officers, outside agents, and regional managers who each look after a team. This platform is where all of them do their work.",
      "A loan application has many steps and many people touching it, so most of my effort went into keeping a long multi-step flow predictable. Redux held the state between steps and API calls, React Hook Form carried the heavy forms, and approvals followed the team structure so the right manager signed off on the right application.",
    ],
  },
  // TODO: confirm — deck marks this list "(to confirm, see notes)"; cross out anything Rachmad didn't build.
  inside: {
    en: [
      "Lead & customer management",
      "Multi-step loan application",
      "Document upload",
      "Application status tracking",
      "Approvals by team hierarchy",
      "Regional teams with managers & members",
      "Agent access",
    ],
    id: [
      "Lead & customer management",
      "Multi-step loan application",
      "Document upload",
      "Application status tracking",
      "Approvals by team hierarchy",
      "Regional teams with managers & members",
      "Agent access",
    ],
  },
  stack: "React, TypeScript, Redux, React Hook Form, Ant Design, Tailwind CSS, Single SPA",
};

export default project;
