export type CompanyId =
  | "quickbill"
  | "1engage"
  | "accelbyte"
  | "moladin"
  | "maybank"
  | "voffice";

export type ConceptComponentKey = "embedded-payment" | "micro-frontend" | "multiplayer" | "ui-library";

export type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "carousel"; images: { src: string; alt: string }[] }
  | { type: "scroll"; mp4: string; webm?: string; poster?: string; alt: string }
  | {
      type: "concept";
      component: ConceptComponentKey;
      alt: string;
      // Optional video fallback for a component that can't be ported
      // faithfully as a live animation. See docs/DECISIONS.md.
      webm?: string;
      mp4?: string;
      poster?: string;
    };

export type ProjectTier = "featured" | "other";

export interface Project {
  slug: string;
  tier: ProjectTier;
  order: number;
  companyId: CompanyId | null;
  companyLabel?: string;
  // Overrides the company's role (from companies.ts) in the detail page's
  // role line. Only needed when companyId is null (freelance work has no
  // companies.ts entry to read a job title from).
  roleTitle?: string;
  title: string;
  year: string;
  card: {
    description: string;
    tags: string[];
  };
  // True when the real product can't be shown even as a screenshot
  // (client- or employer-confidential). Drives the "Internal tool · media
  // attached soon" placeholder label. See docs/DECISIONS.md.
  internal?: boolean;
  media: Media;
  link?: string;
  // Fill color of the "Visit site" buttons, taken from the mockup background
  // of the project's media. Required whenever `link` is set.
  brandColor?: string;
  about: string[];
  myPart?: string[];
  features?: string[];
  stack: string;
  generic?: true;
  placeholder?: boolean;
}
