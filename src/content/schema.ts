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

export interface Feature {
  title: Localized;
  body: Localized;
  media?: { src: string; alt: Localized };
}

export type ProjectTier = "featured" | "other";

export interface Project {
  slug: string;
  tier: ProjectTier;
  order: number;
  companyId: CompanyId | null;
  companyLabel?: Localized;
  title: Localized;
  summary: Localized;
  role: Localized;
  year: string;
  skills: string[];
  stack: string[];
  media: Media;
  overview: Localized<string[]>;
  features: Feature[];
  outcome?: Localized<string[]>;
  links?: { label: Localized; href: string }[];
  generic?: true;
  placeholder: boolean;
}
