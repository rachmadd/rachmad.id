import type { Project } from "@/content/schema";
import { project as quickbillPlatform } from "./quickbill-platform";
import { project as quickbillMobile } from "./quickbill-mobile";
import { project as engagePlatform } from "./1engage-platform";
import { project as accelbyteDevToolkit } from "./accelbyte-dev-toolkit";
import { project as quickbillEnterprise } from "./quickbill-enterprise";
import { project as quickbillEmbeddedPayment } from "./quickbill-embedded-payment";
import { project as accelbyteMultiplayerService } from "./accelbyte-multiplayer-service";
import { project as maybankDigitalBranch } from "./maybank-digital-branch";
import { project as vofficeWebsite } from "./voffice-website";
import { project as izinCoId } from "./izin-co-id";
import { project as companyProfileWebsites } from "./company-profile-websites";

const TIER_ORDER: Record<Project["tier"], number> = { featured: 0, other: 1 };

export const projects: Project[] = [
  quickbillPlatform,
  quickbillMobile,
  engagePlatform,
  accelbyteDevToolkit,
  quickbillEnterprise,
  quickbillEmbeddedPayment,
  accelbyteMultiplayerService,
  maybankDigitalBranch,
  vofficeWebsite,
  izinCoId,
  companyProfileWebsites,
].sort((a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier] || a.order - b.order);

export function getProjectsByTier(tier: Project["tier"]): Project[] {
  return projects.filter((project) => project.tier === tier);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
