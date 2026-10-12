import type { Project } from "@/content/schema";
import { project as quickbillPlatform } from "./quickbill-platform";
import { project as quickbillEnterprise } from "./quickbill-enterprise";
import { project as quickbillEmbeddedPayment } from "./quickbill-embedded-payment";
import { project as quickbillUi } from "./quickbill-ui";
import { project as quickbillMobile } from "./quickbill-mobile";
import { project as engagePlatform } from "./1engage-platform";
import { project as accelbyteDevToolkit } from "./accelbyte-dev-toolkit";
import { project as accelbyteMultiplayerService } from "./accelbyte-multiplayer-service";
import { project as moladinRefinancing } from "./moladin-refinancing";
import { project as vofficeWebsite } from "./voffice-website";
import { project as izinCoId } from "./izin-co-id";
import { project as hellolive } from "./hellolive";
import { project as shopAndBike } from "./shop-and-bike";
import { project as maybankDigitalBranch } from "./maybank-digital-branch";

const TIER_ORDER: Record<Project["tier"], number> = { featured: 0, other: 1 };

// Source: docs/rachmad-id-copy-en-v1.md section 5 (deck numbering 5.1–5.13,
// plus Maybank kept outside the deck — see maybank-digital-branch.ts).
export const projects: Project[] = [
  quickbillPlatform,
  quickbillEnterprise,
  quickbillEmbeddedPayment,
  quickbillUi,
  quickbillMobile,
  engagePlatform,
  accelbyteDevToolkit,
  accelbyteMultiplayerService,
  moladinRefinancing,
  vofficeWebsite,
  izinCoId,
  hellolive,
  shopAndBike,
  maybankDigitalBranch,
].sort((a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier] || a.order - b.order);

export function getProjectsByTier(tier: Project["tier"]): Project[] {
  return projects.filter((project) => project.tier === tier);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
