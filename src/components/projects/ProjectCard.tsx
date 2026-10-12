import { getTranslations } from "next-intl/server";
import { companies } from "@/content/companies";
import type { Locale, Project } from "@/content/schema";
import { resolveProjectMedia } from "./ProjectMedia";
import { ProjectCardInteractive } from "./ProjectCardInteractive";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export async function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = await getTranslations("Common");
  const company = companies.find((c) => c.id === project.companyId);
  const companyName = company?.name ?? project.companyLabel?.[locale] ?? "";

  const placeholderLabel = project.internal
    ? t("internalToolLabel")
    : `${t("screenshotLabel")} · ${project.title[locale]}`;

  const descriptor = resolveProjectMedia(project.media, placeholderLabel, locale);

  return (
    <ProjectCardInteractive
      slug={project.slug}
      companyId={project.companyId}
      title={project.title[locale]}
      description={project.card.description[locale]}
      companyName={companyName}
      year={project.year}
      tags={project.card.tags}
      tier={project.tier}
      descriptor={descriptor}
    />
  );
}
