// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.5.
export const project: Project = {
  slug: "quickbill-mobile",
  tier: "featured",
  order: 2,
  companyId: "quickbill",
  title: { en: "Quickbill Mobile", id: "Quickbill Mobile" },
  year: "2025",
  card: {
    description: {
      en: "Quickbill on Flutter. I laid the groundwork so the mobile team could move fast without fighting the structure.",
      id: "Quickbill on Flutter. I laid the groundwork so the mobile team could move fast without fighting the structure.",
    },
    tags: ["Flutter", "Riverpod", "Dio"],
  },
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/quickbill-mobile/01.webp", alt: { en: "Quickbill Mobile screenshot", id: "Quickbill Mobile screenshot" } },
      { src: "/media/projects/quickbill-mobile/02.webp", alt: { en: "Quickbill Mobile screenshot", id: "Quickbill Mobile screenshot" } },
      { src: "/media/projects/quickbill-mobile/03.webp", alt: { en: "Quickbill Mobile screenshot", id: "Quickbill Mobile screenshot" } },
    ],
  },
  tagline: {
    en: "The whole platform, in your pocket.",
    id: "The whole platform, in your pocket.",
  },
  product: {
    en: [
      "The mobile app does what the web platform does, on your phone. I set the project up from scratch: folder structure, state management with Riverpod, networking with Dio, and the pattern for how a new feature gets added. After that, the team could build screens without asking where things go.",
    ],
    id: [
      "The mobile app does what the web platform does, on your phone. I set the project up from scratch: folder structure, state management with Riverpod, networking with Dio, and the pattern for how a new feature gets added. After that, the team could build screens without asking where things go.",
    ],
  },
  stack: "Flutter, Dart, Riverpod, Dio",
};

export default project;
