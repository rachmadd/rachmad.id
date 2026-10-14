"use client";

import { useEffect, useRef, useState } from "react";
import { GitHubIcon } from "@/components/ui/icons";

type VisitSiteButtonProps = {
  href?: string;
  color?: string;
  repoHref?: string;
};

const BASE_CLASS =
  "inline-flex h-12 shrink-0 items-center whitespace-nowrap rounded-pill px-[26px] text-[15px] font-medium no-underline";
const VISIT_CLASS = `${BASE_CLASS} text-white ring-1 ring-inset ring-white/20 hover:brightness-110`;
const REPO_CLASS = `${BASE_CLASS} gap-2 border border-[rgb(var(--overlay-rgb)_/_0.22)] bg-bg text-fg hover:border-[rgb(var(--overlay-rgb)_/_0.4)]`;

type ActionsProps = VisitSiteButtonProps & { tabIndex?: number };

function Actions({ href, color, repoHref, tabIndex }: ActionsProps) {
  return (
    <>
      {href && color ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={tabIndex}
          className={VISIT_CLASS}
          style={{ backgroundColor: color }}
        >
          Visit site ↗
        </a>
      ) : null}
      {repoHref ? (
        <a
          href={repoHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={tabIndex}
          className={REPO_CLASS}
        >
          <GitHubIcon className="size-5" />
          GitHub
        </a>
      ) : null}
    </>
  );
}

// Hero actions for a project page ("Visit site" filled in the project's
// color, optional "GitHub" outline). Once they scroll out of view above the
// viewport, a copy fades in, centered at the bottom.
export function VisitSiteButton(props: VisitSiteButtonProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsFloating(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={heroRef} className="flex flex-wrap justify-center gap-3">
        <Actions {...props} />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4">
        <div
          aria-hidden={!isFloating}
          className={`flex gap-3 transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none ${
            isFloating ? "pointer-events-auto translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <Actions {...props} tabIndex={isFloating ? 0 : -1} />
        </div>
      </div>
    </>
  );
}
