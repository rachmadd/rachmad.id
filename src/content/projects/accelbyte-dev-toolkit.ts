import type { Project } from "@/content/schema";

// Source: docs/rachmad-id-copy-en-v2.md section 5.7.
export const project: Project = {
  slug: "accelbyte-dev-toolkit",
  tier: "featured",
  order: 4,
  companyId: "accelbyte",
  title: "AccelByte Development Toolkit",
  year: "2023",
  card: {
    description: "Desktop app for getting game builds to playtesters and collecting crash reports.",
    tags: ["Electron", "React", "TypeScript"],
  },
  internal: true,
  media: {
    type: "carousel",
    images: [
      { src: "/media/projects/accelbyte-dev-toolkit/01.webp", alt: "AccelByte Development Toolkit screenshot" },
      { src: "/media/projects/accelbyte-dev-toolkit/02.webp", alt: "AccelByte Development Toolkit screenshot" },
      { src: "/media/projects/accelbyte-dev-toolkit/03.webp", alt: "AccelByte Development Toolkit screenshot" },
      { src: "/media/projects/accelbyte-dev-toolkit/04.webp", alt: "AccelByte Development Toolkit screenshot" },
      { src: "/media/projects/accelbyte-dev-toolkit/05.webp", alt: "AccelByte Development Toolkit screenshot" },
    ],
  },
  about: [
    "AccelByte provides backend services for online games. ADT is its toolkit for game developers to upload and version builds, share them with testers and track what breaks. Its desktop app, ADT Hub, was redesigned in 2023, including channels that hold builds for multiple platforms.",
  ],
  myPart: [
    "Worked on the ADT Hub desktop app revamp",
    "Built game installation with local disk integration and streamed downloads",
    "Built build and version management, shareable builds and playtest channels",
    "Built scheduled online playtest sessions for multiplayer games",
    "Built event history with crash reports, stack traces and trend charts",
    "Worked remotely with PMs, QA and backend engineers across time zones",
  ],
  features: [
    "Build & version management",
    "Multi-platform builds per channel",
    "Install to local disk",
    "Streamed downloads",
    "Shareable builds & installers",
    "Playtest channels",
    "Launch arguments",
    "Scheduled multiplayer sessions",
    "Crash reports & stack traces",
    "Playtest monitoring",
  ],
  stack: "Electron, React, TypeScript, Redux, TanStack Query, Axios",
};

export default project;
