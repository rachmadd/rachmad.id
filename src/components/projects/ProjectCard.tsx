import { companies } from "@/content/companies";
import type { Project } from "@/content/schema";
import { resolveProjectMedia, SCREENSHOT_LABEL, INTERNAL_TOOL_LABEL } from "./ProjectMedia";
import { ProjectCardInteractive } from "./ProjectCardInteractive";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const company = companies.find((c) => c.id === project.companyId);
  const companyName = company?.name ?? project.companyLabel ?? "";

  const placeholderLabel = project.internal
    ? INTERNAL_TOOL_LABEL
    : `${SCREENSHOT_LABEL} · ${project.title}`;

  const descriptor = resolveProjectMedia(project.media, placeholderLabel);

  return (
    <ProjectCardInteractive
      slug={project.slug}
      companyId={project.companyId}
      title={project.title}
      description={project.card.description}
      companyName={companyName}
      year={project.year}
      tags={project.card.tags}
      tier={project.tier}
      descriptor={descriptor}
    />
  );
}
