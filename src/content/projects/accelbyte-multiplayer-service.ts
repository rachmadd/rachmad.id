import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.8.
export const project: Project = {
  slug: "accelbyte-multiplayer-service",
  tier: "other",
  order: 3,
  companyId: "accelbyte",
  title: "AccelByte Multiplayer Servers (AMS)",
  year: "2023",
  card: {
    description: "AccelByte's dedicated game server hosting. I worked on its dashboard and built the real-time log monitor, including an Express BFF.",
    tags: ["React", "Express", "gRPC", "WebSocket"],
  },
  internal: true,
  media: {
    type: "concept",
    component: "multiplayer",
    alt: "Diagram of the multiplayer service's matchmaking and real-time log flow",
  },
  about: [
    "Multiplayer games need dedicated servers close to their players, scaled to demand and replaced when they crash. AMS handles that for game developers. They upload a server build and set up fleets per region with min, max and buffer servers. AMS then scales the fleets, hands ready servers to matchmaking and monitors their health. Developers can also register a server running on their own machine to test the full matchmaking flow.",
  ],
  myPart: [
    "Maintained fleet configuration and local server configuration in the dashboard",
    "Built an Express BFF that subscribes to the gRPC log stream and relays it over WebSocket, since browsers can't read gRPC streams directly",
    "Built the real-time log monitor in the dashboard",
  ],
  features: [
    "Server image uploads",
    "Fleet management",
    "Production & development fleets",
    "Region configuration",
    "Min, max & buffer servers per region",
    "Instance types & servers per instance",
    "Port configuration",
    "Claim keys",
    "Autoscaling with player demand",
    "Local server registration for testing",
    "Real-time server logs",
  ],
  stack: "React, TypeScript, Ant Design, Redux, TanStack Query, Node.js, Express, gRPC, WebSocket",
};

export default project;
