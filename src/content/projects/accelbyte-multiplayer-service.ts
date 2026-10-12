// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.8. Open question #3 in the
// deck notes AMS features come from AccelByte's public docs and asks
// Rachmad to confirm which screens he touched besides logs.
// TODO: confirm — "What's inside" is product context; "My part" stays logs-only per the deck's own caveat.
export const project: Project = {
  slug: "accelbyte-multiplayer-service",
  tier: "other",
  order: 4,
  companyId: "accelbyte",
  title: { en: "AccelByte Multiplayer Servers (AMS)", id: "AccelByte Multiplayer Servers (AMS)" },
  year: "2023",
  card: {
    description: {
      en: "The dashboard for running dedicated game servers around the world. I built its real-time server logs.",
      id: "The dashboard for running dedicated game servers around the world. I built its real-time server logs.",
    },
    tags: ["React", "gRPC", "WebSocket"],
  },
  internal: true,
  media: {
    type: "concept",
    component: "multiplayer",
    alt: {
      en: "Diagram of the multiplayer service's matchmaking and real-time log flow",
      id: "Diagram alur matchmaking dan log real-time pada layanan multiplayer",
    },
  },
  tagline: {
    en: "Game servers close to players, and a live view of what they're doing.",
    id: "Game servers close to players, and a live view of what they're doing.",
  },
  product: {
    en: [
      "AMS runs dedicated game servers near the players who need them. Studios upload server builds, create fleets, choose which regions they run in, and decide how many servers stay warm and ready in each one. The web dashboard is where all of that gets set up and watched.",
      "My main piece was logs. When a server misbehaves, developers want to see it as it happens, not after a refresh. I built a pipeline that streams logs between backend services over gRPC and pushes them to the browser over WebSocket, so the log view updates while the server is still writing.",
    ],
    id: [
      "AMS runs dedicated game servers near the players who need them. Studios upload server builds, create fleets, choose which regions they run in, and decide how many servers stay warm and ready in each one. The web dashboard is where all of that gets set up and watched.",
      "My main piece was logs. When a server misbehaves, developers want to see it as it happens, not after a refresh. I built a pipeline that streams logs between backend services over gRPC and pushes them to the browser over WebSocket, so the log view updates while the server is still writing.",
    ],
  },
  inside: {
    en: [
      "Fleet management",
      "Region selection",
      "Server buffer & scaling settings",
      "Instance types & ports",
      "Server build uploads",
      "Development & production fleets",
      "Real-time server logs",
    ],
    id: [
      "Fleet management",
      "Region selection",
      "Server buffer & scaling settings",
      "Instance types & ports",
      "Server build uploads",
      "Development & production fleets",
      "Real-time server logs",
    ],
  },
  stack: "React, TypeScript, Ant Design, Redux, TanStack Query, gRPC, WebSocket",
};

export default project;
