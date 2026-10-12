// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.6.
export const project: Project = {
  slug: "1engage-platform",
  tier: "featured",
  order: 3,
  companyId: "1engage",
  title: { en: "1Engage Platform", id: "1Engage Platform" },
  year: "2024",
  card: {
    description: {
      en: "A multi-tenant platform for brands to run WhatsApp at scale: broadcasts, chatbots and voice, on the official API.",
      id: "A multi-tenant platform for brands to run WhatsApp at scale: broadcasts, chatbots and voice, on the official API.",
    },
    tags: ["Next.js", "Express", "MongoDB", "GCP"],
  },
  internal: true,
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/1engage-platform/01.webp", alt: { en: "1Engage Platform screenshot", id: "1Engage Platform screenshot" } },
      { src: "/media/projects/1engage-platform/02.webp", alt: { en: "1Engage Platform screenshot", id: "1Engage Platform screenshot" } },
      { src: "/media/projects/1engage-platform/03.webp", alt: { en: "1Engage Platform screenshot", id: "1Engage Platform screenshot" } },
    ],
  },
  tagline: {
    en: "Where brands talk to their customers on WhatsApp.",
    id: "Where brands talk to their customers on WhatsApp.",
  },
  product: {
    en: [
      "1Engage is an official Meta Business Solution Provider under Sinarmas Group, and this platform is how its clients use WhatsApp for business. A brand can manage several WhatsApp Business numbers, design chatbot flows, and send broadcasts to the right audience, now or on a schedule.",
      "I worked across the stack here. My favorite piece was the template editor: a rich-text editor on Lexical with inline formatting, dynamic variables and a live preview of how the message lands on a phone. I also cleaned up how the team used TanStack Query, and fixed a bug that made every form field re-render on each keystroke.",
    ],
    id: [
      "1Engage is an official Meta Business Solution Provider under Sinarmas Group, and this platform is how its clients use WhatsApp for business. A brand can manage several WhatsApp Business numbers, design chatbot flows, and send broadcasts to the right audience, now or on a schedule.",
      "I worked across the stack here. My favorite piece was the template editor: a rich-text editor on Lexical with inline formatting, dynamic variables and a live preview of how the message lands on a phone. I also cleaned up how the team used TanStack Query, and fixed a bug that made every form field re-render on each keystroke.",
    ],
  },
  myPart: {
    en: [
      "Built the WhatsApp message template editor on Lexical, with variables and live preview",
      "Built chatbot flows and multi-account WhatsApp Business management",
      "Standardized TanStack Query usage across the team and ran a knowledge-sharing session on it",
      "Fixed a re-render issue that made large forms lag while typing",
    ],
    id: [
      "Built the WhatsApp message template editor on Lexical, with variables and live preview",
      "Built chatbot flows and multi-account WhatsApp Business management",
      "Standardized TanStack Query usage across the team and ran a knowledge-sharing session on it",
      "Fixed a re-render issue that made large forms lag while typing",
    ],
  },
  inside: {
    en: [
      "Multi-tenant workspaces",
      "Multiple WhatsApp Business accounts",
      "Broadcast management",
      "Scheduled broadcasts",
      "Template management",
      "WhatsApp Flow builder",
      "Chatbot flows",
      "Voice chat & voice calls",
    ],
    id: [
      "Multi-tenant workspaces",
      "Multiple WhatsApp Business accounts",
      "Broadcast management",
      "Scheduled broadcasts",
      "Template management",
      "WhatsApp Flow builder",
      "Chatbot flows",
      "Voice chat & voice calls",
    ],
  },
  stack: "Next.js, TypeScript, Lexical, TanStack Query, Express, MongoDB, PostgreSQL, RabbitMQ, Pub/Sub, Google Cloud",
};

export default project;
