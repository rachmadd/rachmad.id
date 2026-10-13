export interface SkillGroup {
  key: "frontend" | "mobileDesktop" | "backend" | "data" | "infra" | "testing";
  label: string;
  items: string[];
}

// Source: docs/rachmad-id-copy-en-v1.md section 3.
export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    label: "Frontend",
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
    label: "Mobile & Desktop",
    items: ["Flutter", "Riverpod", "React Native", "Electron"],
  },
  {
    key: "backend",
    label: "Backend",
    items: ["Go (Gin, GORM)", "Node.js (Express)", "Laravel", "Python (FastAPI)"],
  },
  {
    key: "data",
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    key: "infra",
    label: "Infra & Tooling",
    items: [
      "Docker",
      "GitHub Actions",
      "RabbitMQ",
      "Pub/Sub",
      "gRPC",
      "WebSocket",
      "OpenTelemetry",
      "Grafana",
    ],
  },
  {
    key: "testing",
    label: "Testing",
    items: ["Jest", "Cypress"],
  },
];
