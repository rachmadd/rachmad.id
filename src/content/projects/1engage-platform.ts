import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.6.
export const project: Project = {
  slug: "1engage-platform",
  tier: "featured",
  order: 3,
  companyId: "1engage",
  title: "1Engage Platform",
  year: "2024",
  card: {
    description: "Multi-tenant platform for brands to run WhatsApp broadcasts, chatbots and voice at scale.",
    tags: ["Next.js", "Express", "MongoDB", "GCP"],
  },
  internal: true,
  media: {
    type: "carousel",
    images: [
      { src: "/projects/1engage-platform/01-detail-desktop.webp", alt: "1Engage Platform screenshot" },
      { src: "/projects/1engage-platform/02-detail-desktop.webp", alt: "1Engage Platform screenshot" },
      { src: "/projects/1engage-platform/03-detail-desktop.webp", alt: "1Engage Platform screenshot" },
    ],
  },
  about: [
    "1Engage is an official Meta Business Solution Provider under Sinarmas Group. Its platform lets brands manage several WhatsApp Business numbers, build chatbot flows and send broadcasts, right away or on a schedule.",
  ],
  myPart: [
    "Integrated the WhatsApp Cloud API on the Express backend for chatbot flows and multi-account management",
    "Built the message template editor on Lexical, with inline formatting, dynamic variables and live preview",
    "Standardized TanStack Query usage across the team and ran a knowledge-sharing session on it",
    "Fixed a re-render issue that made large forms lag while typing",
  ],
  features: [
    "Multi-tenant workspaces",
    "Multiple WhatsApp Business accounts",
    "Broadcast management",
    "Scheduled broadcasts",
    "Template management",
    "WhatsApp Flow builder",
    "Chatbot flows",
    "Voice chat & voice calls",
  ],
  stack: "Next.js, TypeScript, Lexical, TanStack Query, Express, MongoDB, PostgreSQL, RabbitMQ, Pub/Sub, Google Cloud",
};

export default project;
