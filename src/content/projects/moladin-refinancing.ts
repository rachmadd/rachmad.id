import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.9.
export const project: Project = {
  slug: "moladin-refinancing",
  tier: "other",
  order: 5,
  companyId: "moladin",
  title: "Moladin Refinancing",
  year: "2022",
  card: {
    description: "Moladin's vehicle refinancing product: the customer application site and the internal sales CRM.",
    tags: ["React", "Redux", "Ant Design"],
  },
  internal: true,
  media: {
    type: "image",
    src: "/media/projects/moladin-refinancing/01.webp",
    alt: "Moladin Refinancing screenshot",
  },
  about: [
    "Moladin offers refinancing solutions for vehicle owners. Customers apply through a multi-step website. Sales officers, partner agents and regional managers process those applications in an internal CRM organized by regional team.",
  ],
  myPart: [
    "Developed features for the customer site's multi-step application, with Redux managing state across steps and API calls",
    "Developed features for the internal CRM used by sales teams and partner agents",
    "Built approvals that follow the regional hierarchy, where members submit and managers approve",
  ],
  // TODO: confirm — deck marks this list "(to confirm, see notes)"; cross out anything Rachmad didn't build.
  features: [
    "Product information",
    "Multi-step loan application",
    "Lead & customer management",
    "Application status tracking",
    "Document upload",
    "Approvals by team hierarchy",
    "Regional teams with managers & members",
    "Partner agent access",
  ],
  stack: "React, TypeScript, Redux, React Hook Form, Ant Design, Tailwind CSS, Single SPA",
};

export default project;
