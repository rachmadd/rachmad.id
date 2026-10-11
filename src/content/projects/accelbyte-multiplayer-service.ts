import type { Project } from "@/content/schema";

export const project: Project = {
  slug: "accelbyte-multiplayer-service",
  tier: "other",
  order: 3,
  companyId: "accelbyte",
  title: { en: "Accelbyte Multiplayer Service", id: "Accelbyte Multiplayer Service" },
  summary: {
    en: "A web platform for a multiplayer service, covering matchmaking and real-time logs.",
    id: "Platform web untuk layanan multiplayer, mencakup matchmaking dan log real-time.",
  },
  role: { en: "Software Engineer II, Frontend", id: "Software Engineer II, Frontend" },
  year: "2023",
  skills: ["React", "TypeScript"],
  stack: ["React", "TypeScript"],
  media: {
    type: "concept",
    component: "multiplayer",
    alt: {
      en: "Diagram of the multiplayer service's matchmaking and real-time log flow",
      id: "Diagram alur matchmaking dan log real-time pada layanan multiplayer",
    },
  },
  overview: {
    en: [
      "Accelbyte Multiplayer Service is a web platform covering a matchmaking backend, real-time logs and related tooling for a multiplayer service.",
    ],
    id: [
      "Accelbyte Multiplayer Service adalah platform web yang mencakup backend matchmaking, log real-time, dan perkakas terkait untuk layanan multiplayer.",
    ],
  },
  features: [
    {
      title: { en: "Matchmaking", id: "Matchmaking" },
      body: {
        en: "The game client connects to a matchmaking service that places players into a game session.",
        id: "Game client terhubung ke layanan matchmaking yang menempatkan pemain ke dalam sesi game.",
      },
    },
    {
      title: { en: "Real-time logs", id: "Log real-time" },
      body: {
        en: "A real-time log stream feeds a small web console panel so the session can be observed as it happens.",
        id: "Log real-time mengalir ke panel konsol web kecil sehingga sesi bisa diamati saat berlangsung.",
      },
    },
    {
      title: { en: "Related tooling", id: "Perkakas terkait" },
      body: {
        en: "Further tooling details are not yet available and will be added once Rachmad provides them.",
        id: "Detail perkakas lebih lanjut belum tersedia dan akan ditambahkan setelah Rachmad memberikannya.",
      },
    },
  ],
  placeholder: true,
};

export default project;
