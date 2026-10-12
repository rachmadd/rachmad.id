import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.10.
export const project: Project = {
  slug: "maybank-digital-branch",
  tier: "other",
  order: 6,
  companyId: "maybank",
  title: "Maybank Branch Delivery System",
  year: "2021",
  card: {
    description: "The system Maybank Indonesia branch staff use for counter transactions. I worked on its move to micro-frontends.",
    tags: ["React", "single-spa", "Spring Boot"],
  },
  internal: true,
  media: {
    type: "concept",
    component: "micro-frontend",
    alt: "Generic diagram of a micro-frontend banking branch system",
  },
  about: [
    "The Branch Delivery System runs counter operations in every Maybank Indonesia branch, from account opening and transfers to card and e-banking activation. Its frontend was rebuilt as micro-frontends on single-spa, on top of Java Spring Boot microservices connected to core banking.",
  ],
  myPart: [
    "Helped set up the micro-frontend architecture on single-spa",
    "Built Python tooling for the development workflow",
    "Built a shared form and validation system on React Hook Form and Zod for a form-heavy app",
    "Built live transaction and document status updates over WebSocket",
    "Built screens on top of the Spring Boot services that connect to core banking",
  ],
  features: [
    "Domestic & international transfers",
    "Account registration",
    "Account opening",
    "Account blocking",
    "Account history",
    "Card activation",
    "Credit card settings",
    "Mobile & internet banking activation",
    "Power of attorney & supporting documents",
    "RDN accounts for stock investors",
    "Core banking integration",
  ],
  stack: "React, TypeScript, single-spa, Redux, React Hook Form, Zod, WebSocket, Python, Spring Boot",
};

export default project;
