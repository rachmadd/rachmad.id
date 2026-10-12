"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll } from "motion/react";
import { useTranslations } from "next-intl";
import { computeTimelineGeometry } from "@/lib/timeline-geometry";
import { formatCompanyDateRange } from "@/lib/format-date";
import { TimelineNode } from "./TimelineNode";
import type { Company } from "@/content/companies";
import type { Locale } from "@/content/schema";

const MOBILE_BREAKPOINT = 720;
const MAX_WIDTH = 1040;

type TimelineCurveProps = {
  companies: Company[];
  locale: Locale;
};

function highlightProjectCards(companyId: string) {
  const cards = document.querySelectorAll(
    `[data-company-highlight="${companyId}"]`,
  );
  cards.forEach((card) => {
    card.classList.add("timeline-highlight");
    setTimeout(() => card.classList.remove("timeline-highlight"), 1200);
  });
}

export function TimelineCurve({
  companies,
  locale,
}: TimelineCurveProps) {
  const t = useTranslations("Experience");
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const remoteLabel = t("remote");
  const projectsLabel = (count: number) => t("projectsLink", { count });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => setWidth(el.getBoundingClientRect().width);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.6"],
  });
  const fullyDrawn = useMotionValue(1);
  const progress = shouldReduceMotion ? fullyDrawn : scrollYProgress;

  const isMobile = width > 0 && width < MOBILE_BREAKPOINT;
  const geometry =
    width > 0
      ? computeTimelineGeometry({
          count: companies.length,
          width: Math.min(width, MAX_WIDTH),
          isMobile,
        })
      : null;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-[1040px]"
      style={geometry ? { height: geometry.height } : undefined}
    >
      {geometry ? (
        <svg
          width={geometry.width}
          height={geometry.height}
          aria-hidden="true"
          className="absolute top-0 left-0 overflow-visible"
        >
          <path
            d={geometry.path}
            style={{ fill: "none", stroke: "rgba(141,153,174,0.3)", strokeWidth: 1.5 }}
          />
          <motion.path
            d={geometry.path}
            style={{
              fill: "none",
              stroke: "#ef233c",
              strokeWidth: 2,
              strokeLinecap: "round",
              pathLength: progress,
            }}
          />
        </svg>
      ) : null}
      <ol className="relative m-0 list-none p-0">
        {companies.map((company, index) => {
          const hasProjects = company.projectCountStub > 0;
          return (
            <li key={company.id}>
              {geometry ? (
                <TimelineNode
                  geometry={geometry.nodes[index]}
                  nodeSize={geometry.nodeSize}
                  logoSize={geometry.logoSize}
                  initials={company.initials}
                  name={company.name}
                  logo={company.logo}
                  role={company.role[locale]}
                  dateLabel={
                    company.remote
                      ? `${formatCompanyDateRange(company.start, company.end, locale)} · ${remoteLabel}`
                      : formatCompanyDateRange(company.start, company.end, locale)
                  }
                  projectsLabel={
                    hasProjects ? projectsLabel(company.projectCountStub) : null
                  }
                  scrollYProgress={progress}
                  threshold={geometry.nodes[index].y / geometry.height}
                  onProjectsClick={() => highlightProjectCards(company.id)}
                />
              ) : (
                <div className="flex flex-col gap-1 border-t border-border py-6 first:border-t-0">
                  <h3 className="m-0 text-[17px] font-medium">{company.name}</h3>
                  <p className="m-0 text-[15px]">{company.role[locale]}</p>
                  <p className="m-0 font-mono text-[12.5px] text-muted">
                    {company.remote
                      ? `${formatCompanyDateRange(company.start, company.end, locale)} · ${remoteLabel}`
                      : formatCompanyDateRange(company.start, company.end, locale)}
                  </p>
                  {hasProjects ? (
                    <a
                      href="#projects"
                      onClick={() => highlightProjectCards(company.id)}
                      className="text-sm text-fg underline decoration-accent decoration-[1.5px] underline-offset-[5px]"
                    >
                      {projectsLabel(company.projectCountStub)}
                    </a>
                  ) : null}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
