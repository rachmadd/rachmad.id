"use client";

import { useState } from "react";
import Link from "next/link";
import type { MediaDescriptor } from "./ProjectMedia";
import { ProjectMediaView } from "./ProjectMediaView";

type ProjectCardInteractiveProps = {
  slug: string;
  companyId: string | null;
  title: string;
  description: string;
  companyName: string;
  year: string;
  tags: string[];
  tier: "featured" | "other";
  descriptor: MediaDescriptor;
};

export function ProjectCardInteractive({
  slug,
  companyId,
  title,
  description,
  companyName,
  year,
  tags,
  tier,
  descriptor,
}: ProjectCardInteractiveProps) {
  const [hovered, setHovered] = useState(false);

  const titleSize =
    tier === "featured" ? "text-[19px] md:text-[22px]" : "text-[18px]";
  const captionPadding =
    tier === "featured" ? "p-[20px_12px_14px]" : "p-[18px_10px_10px]";

  return (
    <article
      data-company-highlight={companyId ?? undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`relative flex flex-col rounded-card border bg-surface p-[10px] transition-colors duration-300 ${
        hovered ? "border-[rgb(var(--overlay-rgb)_/_0.22)]" : "border-border"
      }`}
    >
      <div className="overflow-hidden rounded-media">
        <div
          className={`transition-transform duration-[600ms] [transition-timing-function:cubic-bezier(.2,.7,.2,1)] ${
            hovered ? "scale-[1.02]" : ""
          }`}
        >
          <ProjectMediaView descriptor={descriptor} paused={hovered} />
        </div>
      </div>
      <div className={captionPadding}>
        <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted">
          <span>{companyName}</span>
          <span>{year}</span>
        </div>
        <h3
          className={`m-0 mt-[10px] leading-[1.3] font-medium tracking-[-0.01em] text-wrap-pretty ${titleSize}`}
        >
          <Link
            href={`/projects/${slug}`}
            className="text-fg no-underline after:absolute after:inset-0 after:rounded-card after:content-['']"
          >
            {title}
          </Link>
        </h3>
        <p className="m-0 mt-[10px] text-[15px] leading-[1.55] text-wrap-pretty text-muted">
          {description}
        </p>
        <div className="mt-1 flex flex-wrap gap-[6px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-7 items-center rounded-pill border border-[rgb(var(--overlay-rgb)_/_0.1)] px-3 text-[12.5px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
