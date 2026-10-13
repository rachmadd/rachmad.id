import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.5.
export const project: Project = {
  slug: "quickbill-mobile",
  tier: "featured",
  order: 2,
  companyId: "quickbill",
  title: "Quickbill Mobile",
  year: "2025",
  card: {
    description: "Quickbill's Flutter app. I set up its architecture and project structure.",
    tags: ["Flutter", "Riverpod", "Dio"],
  },
  media: {
    type: "carousel",
    images: [
      { src: "/projects/quickbill-mobile/01-detail-desktop.webp", alt: "Quickbill Mobile screenshot" },
      { src: "/projects/quickbill-mobile/02-detail-desktop.webp", alt: "Quickbill Mobile screenshot" },
    ],
  },
  about: ["The mobile version of the Quickbill platform, with the same features as the web app."],
  myPart: [
    "Set up the project from scratch: folder structure, architecture and the pattern for adding features",
    "Chose Riverpod for state management and Dio for networking",
  ],
  stack: "Flutter, Dart, Riverpod, Dio",
};

export default project;
