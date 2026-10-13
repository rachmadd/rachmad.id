import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/content/projects";
import { companies } from "@/content/companies";
import { resolveProjectMedia, SCREENSHOT_LABEL, INTERNAL_TOOL_LABEL } from "@/components/projects/ProjectMedia";
import { ProjectMediaView } from "@/components/projects/ProjectMediaView";
import { VisitSiteButton } from "@/components/projects/VisitSiteButton";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { Footer } from "@/components/layout/Footer";
import { getSiteUrl, isProductionDeployment } from "@/lib/site-url";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const siteUrl = getSiteUrl();
  const title = `${project.title} | ${site.name}`;
  const description = project.card.description;
  const pageUrl = `${siteUrl}/projects/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      locale: "en_US",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: isProductionDeployment()
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const company = companies.find((c) => c.id === project.companyId);
  const companyName = company?.name ?? project.companyLabel ?? "";

  const placeholderLabel = project.internal
    ? INTERNAL_TOOL_LABEL
    : `${SCREENSHOT_LABEL} · ${project.title}`;

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const roleTitle = project.roleTitle ?? company?.role ?? "";
  const startYear = company?.start.slice(0, 4);
  const endYear = company?.end.slice(0, 4);
  const years = company ? (startYear === endYear ? startYear : `${startYear}–${endYear}`) : project.year;
  const roleLine = (company ? [roleTitle, companyName, years] : [roleTitle, years]).filter(Boolean).join(" · ");

  return (
    <>
      <section className="px-[24px] pt-[112px] md:px-[40px] md:pt-[168px]">
        <div className="mx-auto flex max-w-content flex-col items-center gap-[14px]">
          <h1 className="m-0 text-center text-[36px] leading-[1.08] font-medium tracking-[-0.025em] text-wrap-balance md:text-[52px]">
            {project.title}
          </h1>
          <p className="m-0 text-center font-mono text-[13px] text-muted">
            {roleLine}
          </p>
          {project.link && project.brandColor ? (
            <VisitSiteButton href={`https://${project.link}`} color={project.brandColor} />
          ) : null}
        </div>
        <div className="mx-auto mt-10 max-w-[1040px] md:mt-16">
          <ProjectMediaView
            className="border border-border"
            paused={false}
            descriptor={resolveProjectMedia(project.media, placeholderLabel)}
          />
        </div>
      </section>

      <div className="flex flex-col gap-[96px] pt-[96px] md:gap-[160px] md:pt-[160px]">
        <ProjectContent project={project} />

        <section className="px-[24px] md:px-[40px]">
          <div className="mx-auto grid max-w-content grid-cols-1 gap-3 md:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="flex flex-col gap-[6px] rounded-card border border-border bg-surface p-[22px_26px] text-fg no-underline hover:border-[rgb(var(--overlay-rgb)_/_0.22)]"
            >
              <span className="font-mono text-[12.5px] text-muted">
                ← Previous
              </span>
              <span className="text-[17px] font-medium">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="flex flex-col items-end gap-[6px] rounded-card border border-border bg-surface p-[22px_26px] text-right text-fg no-underline hover:border-[rgb(var(--overlay-rgb)_/_0.22)]"
            >
              <span className="font-mono text-[12.5px] text-muted">
                Next →
              </span>
              <span className="text-[17px] font-medium">
                {next.title}
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
