// TODO: Indonesian translation pending — id mirrors en.
import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v1.md section 5.7.
export const project: Project = {
  slug: "accelbyte-dev-toolkit",
  tier: "featured",
  order: 4,
  companyId: "accelbyte",
  title: { en: "AccelByte Development Toolkit", id: "AccelByte Development Toolkit" },
  year: "2023",
  card: {
    description: {
      en: "A desktop app that gets game builds from the studio to playtesters, and brings the crash reports back.",
      id: "A desktop app that gets game builds from the studio to playtesters, and brings the crash reports back.",
    },
    tags: ["Electron", "React", "TypeScript"],
  },
  internal: true,
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/accelbyte-dev-toolkit/01.webp", alt: { en: "AccelByte Development Toolkit screenshot", id: "AccelByte Development Toolkit screenshot" } },
      { src: "/media/projects/accelbyte-dev-toolkit/02.webp", alt: { en: "AccelByte Development Toolkit screenshot", id: "AccelByte Development Toolkit screenshot" } },
      { src: "/media/projects/accelbyte-dev-toolkit/03.webp", alt: { en: "AccelByte Development Toolkit screenshot", id: "AccelByte Development Toolkit screenshot" } },
    ],
  },
  tagline: {
    en: "Ship a build, run a playtest, read the crashes.",
    id: "Ship a build, run a playtest, read the crashes.",
  },
  product: {
    en: [
      "Game studios need builds in testers' hands quickly, and they need to know what broke. ADT handles both. It's an Electron app where teams upload and version their builds, share them through playtest channels, and schedule online sessions for multiplayer tests.",
      "I worked on the parts that touch the player's machine: installing builds to local disk, streaming downloads and setting launch arguments. I also built the event history view, where session logs, crash reports and stack traces sit together with charts that show trends over time.",
    ],
    id: [
      "Game studios need builds in testers' hands quickly, and they need to know what broke. ADT handles both. It's an Electron app where teams upload and version their builds, share them through playtest channels, and schedule online sessions for multiplayer tests.",
      "I worked on the parts that touch the player's machine: installing builds to local disk, streaming downloads and setting launch arguments. I also built the event history view, where session logs, crash reports and stack traces sit together with charts that show trends over time.",
    ],
  },
  myPart: {
    en: [
      "Built game installation with local disk integration and streamed downloads",
      "Built build and version management, shareable builds and playtest channels",
      "Built scheduled online playtest sessions for multiplayer games",
      "Built event history with crash reports, stack traces and trend charts",
      "Worked remotely with PMs, QA and backend engineers across time zones",
    ],
    id: [
      "Built game installation with local disk integration and streamed downloads",
      "Built build and version management, shareable builds and playtest channels",
      "Built scheduled online playtest sessions for multiplayer games",
      "Built event history with crash reports, stack traces and trend charts",
      "Worked remotely with PMs, QA and backend engineers across time zones",
    ],
  },
  inside: {
    en: [
      "Build & version management",
      "Install to local disk",
      "Streamed downloads",
      "Shareable builds & installers",
      "Playtest channels",
      "Launch arguments",
      "Scheduled multiplayer sessions",
      "Crash reports & stack traces",
      "Playtest monitoring",
    ],
    id: [
      "Build & version management",
      "Install to local disk",
      "Streamed downloads",
      "Shareable builds & installers",
      "Playtest channels",
      "Launch arguments",
      "Scheduled multiplayer sessions",
      "Crash reports & stack traces",
      "Playtest monitoring",
    ],
  },
  stack: "Electron, React, TypeScript, Redux, TanStack Query, Axios",
};

export default project;
