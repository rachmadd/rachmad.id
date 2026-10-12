// TODO: Indonesian translation pending. Group labels and items are product
// and library names; they don't translate, so id mirrors en here.
import type { Localized } from "./schema";

export interface SkillGroup {
  key: "frontend" | "mobileDesktop" | "backend" | "data" | "infra" | "testing";
  label: Localized;
  items: string[];
}

// Source: docs/rachmad-id-copy-en-v1.md section 3.
export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    label: { en: "Frontend", id: "Frontend" },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Jotai",
      "Redux",
      "Zod",
      "React Hook Form",
      "shadcn/ui",
      "Base UI",
      "Radix UI",
      "Ant Design",
      "MUI",
      "Storybook",
    ],
  },
  {
    key: "mobileDesktop",
    label: { en: "Mobile & Desktop", id: "Mobile & Desktop" },
    items: ["Flutter", "Riverpod", "React Native", "Electron"],
  },
  {
    key: "backend",
    label: { en: "Backend", id: "Backend" },
    items: ["Go (Gin, GORM)", "Node.js (Express)", "Laravel", "Python (FastAPI)"],
  },
  {
    key: "data",
    label: { en: "Data", id: "Data" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    key: "infra",
    label: { en: "Infra & Tooling", id: "Infra & Tooling" },
    items: [
      "Docker",
      "GitHub Actions",
      "RabbitMQ",
      "Pub/Sub",
      "gRPC",
      "WebSocket",
      "OpenTelemetry",
      "Jaeger",
      "Grafana",
    ],
  },
  {
    key: "testing",
    label: { en: "Testing", id: "Testing" },
    items: ["Jest", "Cypress"],
  },
];
