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

  const descriptor = resolveProjectMedia(
    project.media,
    `${t("screenshotLabel")} · ${project.title[locale]}`,
    locale,
  );

  return (
    <ProjectCardInteractive
      slug={project.slug}
      companyId={project.companyId}
      title={project.title[locale]}
      summary={project.summary[locale]}
      companyName={companyName}
      year={project.year}
      skills={project.skills}
      tier={project.tier}
      descriptor={descriptor}
    />
  );
}
