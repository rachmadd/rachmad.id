export type Locale = "en" | "id";

export type Localized<T = string> = Record<Locale, T>;

export type CompanyId =
  | "quickbill"
  | "1engage"
  | "accelbyte"
  | "moladin"
  | "maybank"
  | "voffice";

export type ConceptComponentKey = "embedded-payment" | "micro-frontend" | "multiplayer";

export type Media =
  | { type: "image"; src: string; alt: Localized }
  | { type: "carousel"; images: { src: string; alt: Localized }[] }
  | { type: "scroll"; webm: string; mp4: string; poster: string; alt: Localized }
  | {
      type: "concept";
      component: ConceptComponentKey;
      alt: Localized;
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
  companyLabel?: Localized;
  title: Localized;
  year: string;
  card: {
    description: Localized;
    tags: string[];
  };
  // True when the real product can't be shown even as a screenshot
  // (client- or employer-confidential). Drives the "Internal tool · no
  // public screenshots" placeholder label. See docs/DECISIONS.md.
  internal?: boolean;
  media: Media;
  link?: string;
  tagline: Localized;
  product: Localized<string[]>;
  myPart?: Localized<string[]>;
  inside?: Localized<string[]>;
  stack: string;
  footnote?: Localized;
  generic?: true;
  placeholder?: boolean;
}
