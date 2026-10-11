import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { projects, getProjectBySlug } from "@/content/projects";
import { companies } from "@/content/companies";
import type { Locale } from "@/content/schema";
import { resolveProjectMedia } from "@/components/projects/ProjectMedia";
import { ProjectMediaView } from "@/components/projects/ProjectMediaView";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title[locale as Locale]} | Rachmad`;
  return {
    title,
    description: project.summary[locale as Locale],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("Project");
  const company = companies.find((c) => c.id === project.companyId);
  const companyName = company?.name ?? project.companyLabel?.[locale] ?? "";

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="px-[24px] pt-[112px] md:px-[40px] md:pt-[168px]">
        <div className="mx-auto flex max-w-content flex-col items-center gap-[14px]">
          <p className="m-0 text-center font-mono text-[13px] text-muted">
            {companyName} · {project.year}
          </p>
          <h1 className="m-0 text-center text-[36px] leading-[1.08] font-medium tracking-[-0.025em] text-wrap-balance md:text-[52px]">
            {project.title[locale]}
          </h1>
          <p className="m-0 text-center text-base md:text-lg">
            {project.role[locale]}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-[1040px] md:mt-16">
          <ProjectMediaView
            className="border border-border"
            paused={false}
            descriptor={resolveProjectMedia(
              project.media,
              `${t("overview")} · ${project.title[locale]}`,
              locale,
            )}
          />
        </div>
      </section>

      <div className="flex flex-col gap-[96px] pt-[96px] md:gap-[160px] md:pt-[160px]">
        <ProjectContent project={project} locale={locale} variant="page" />

        {project.outcome ? (
          <section className="px-[24px] md:px-[40px]">
            <h2 className="m-0 mb-12 text-center text-[24px] leading-[1.15] font-medium tracking-[-0.025em] md:mb-16 md:text-[30px]">
              {t("outcome")}
            </h2>
            <div className="mx-auto flex max-w-content flex-col gap-4">
              {project.outcome[locale].map((paragraph, i) => (
                <p key={i} className="m-0 text-wrap-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        <section className="px-[24px] md:px-[40px]">
          <div className="mx-auto grid max-w-content grid-cols-1 gap-3 md:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="flex flex-col gap-[6px] rounded-card border border-border bg-surface p-[22px_26px] text-fg no-underline hover:border-[rgba(255,255,255,0.22)]"
            >
              <span className="font-mono text-[12.5px] text-muted">
                ← {t("previous")}
              </span>
              <span className="text-[17px] font-medium">
                {prev.title[locale]}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="flex flex-col items-end gap-[6px] rounded-card border border-border bg-surface p-[22px_26px] text-right text-fg no-underline hover:border-[rgba(255,255,255,0.22)]"
            >
              <span className="font-mono text-[12.5px] text-muted">
                {t("next")} →
              </span>
              <span className="text-[17px] font-medium">
                {next.title[locale]}
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
