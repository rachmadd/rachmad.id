import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProjectBySlug, projects } from "@/content/projects";
import { companies } from "@/content/companies";
import type { Locale } from "@/content/schema";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { resolveProjectMedia } from "@/components/projects/ProjectMedia";
import { ProjectMediaView } from "@/components/projects/ProjectMediaView";

type ModalPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ProjectModalPage({ params }: ModalPageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("Project");
  const common = await getTranslations("Common");
  const company = companies.find((c) => c.id === project.companyId);
  const companyName = company?.name ?? project.companyLabel?.[locale] ?? "";

  const placeholderLabel = project.internal
    ? common("internalToolLabel")
    : `${common("screenshotLabel")} · ${project.title[locale]}`;

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <ProjectModal title={project.title[locale]}>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[12.5px] text-muted">
            {companyName} · {project.year}
          </span>
          <form method="dialog">
            <button
              type="submit"
              className="h-11 rounded-pill border border-[rgba(255,255,255,0.14)] bg-transparent px-[18px] text-sm text-fg"
            >
              {t("close")}
            </button>
          </form>
        </div>

        <ProjectMediaView
          className="border border-border"
          paused={false}
          descriptor={resolveProjectMedia(project.media, placeholderLabel, locale)}
        />

        <div className="flex flex-col items-center gap-[10px]">
          <h2 className="m-0 text-center text-[28px] leading-[1.15] font-medium tracking-[-0.025em] text-wrap-balance md:text-[36px]">
            {project.title[locale]}
          </h2>
          <p className="m-0 text-center text-base">{project.tagline[locale]}</p>
          <p className="m-0 text-center font-mono text-[13px] text-muted">
            {companyName} · {project.year}
          </p>
          {project.link ? (
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg underline decoration-accent decoration-[1.5px] underline-offset-[5px]"
            >
              {t("visitLiveSite")} ↗
            </a>
          ) : null}
          {project.footnote ? (
            <p className="m-0 max-w-[480px] text-center text-sm text-muted">
              {project.footnote[locale]}
            </p>
          ) : null}
        </div>

        <ProjectContent project={project} locale={locale} variant="modal" />

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <div className="flex gap-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="inline-flex h-11 items-center rounded-pill border border-[rgba(255,255,255,0.14)] px-[18px] text-sm text-fg no-underline"
            >
              ← {t("previous")}
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="inline-flex h-11 items-center rounded-pill border border-[rgba(255,255,255,0.14)] px-[18px] text-sm text-fg no-underline"
            >
              {t("next")} →
            </Link>
          </div>
          <a
            href={`/${locale}/projects/${project.slug}`}
            className="inline-flex h-11 items-center rounded-pill bg-fg px-[22px] text-sm font-medium text-bg no-underline"
          >
            {t("openProjectPage")} ↗
          </a>
        </div>
      </div>
    </ProjectModal>
  );
}
