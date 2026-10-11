"use client";

import type { MotionValue } from "motion/react";
import { motion, useTransform } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import type { TimelineNodeGeometry } from "@/lib/timeline-geometry";

const ACCENT = "#ef233c";
const MUTED_BORDER = "rgba(255,255,255,0.12)";

type TimelineNodeProps = {
  geometry: TimelineNodeGeometry;
  nodeSize: number;
  logoSize: number;
  initials: string;
  name: string;
  role: string;
  dateLabel: string;
  projectsLabel: string | null;
  scrollYProgress: MotionValue<number>;
  threshold: number;
  onProjectsClick: () => void;
};

export function TimelineNode({
  geometry,
  nodeSize,
  logoSize,
  initials,
  name,
  role,
  dateLabel,
  projectsLabel,
  scrollYProgress,
  threshold,
  onProjectsClick,
}: TimelineNodeProps) {
  const borderColor = useTransform(scrollYProgress, (value) =>
    value >= threshold ? ACCENT : MUTED_BORDER,
  );

  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          left: geometry.nodeLeft,
          top: geometry.nodeTop,
          width: nodeSize,
          height: nodeSize,
          borderColor,
        }}
        className="flex items-center justify-center rounded-full border-[1.5px] bg-bg transition-colors duration-[400ms] ease-out"
      >
        <span
          style={{ width: logoSize, height: logoSize }}
          className="flex items-center justify-center rounded-[10px] bg-[#26262b] font-mono text-[11px] text-fg"
        >
          {initials}
        </span>
      </motion.div>
      <Reveal
        style={{
          position: "absolute",
          top: geometry.textTop,
          left: geometry.textLeft ?? undefined,
          right: geometry.textRight ?? undefined,
          width: geometry.textWidth,
          textAlign: geometry.textAlign,
        }}
        className="flex flex-col gap-0.5"
      >
        <h3 className="m-0 text-[17px] leading-[1.35] font-medium md:text-[18px]">
          {name}
        </h3>
        <p className="m-0 text-[15px] leading-[1.45]">{role}</p>
        <p className="m-0 mt-1 font-mono text-[12.5px] leading-[1.5] text-muted">
          {dateLabel}
        </p>
        {projectsLabel ? (
          <a
            href="#projects"
            onClick={onProjectsClick}
            className="mt-1 inline-flex min-h-[28px] items-center text-sm text-fg underline decoration-accent decoration-[1.5px] underline-offset-[5px] hover:text-white hover:decoration-[color:var(--color-accent-hover)]"
          >
            {projectsLabel}
          </a>
        ) : null}
      </Reveal>
    </>
  );
}
