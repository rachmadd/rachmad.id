"use client";

import { useEffect, useRef, useState } from "react";

type VisitSiteButtonProps = {
  href: string;
  color: string;
};

const BUTTON_CLASS =
  "inline-flex h-12 items-center rounded-pill px-[26px] text-[15px] font-medium text-white no-underline ring-1 ring-inset ring-white/20 hover:brightness-110";

// Filled "Visit site" button for the project hero. Once it scrolls out of
// view above the viewport, a second copy fades in, centered at the bottom.
export function VisitSiteButton({ href, color }: VisitSiteButtonProps) {
  const heroRef = useRef<HTMLAnchorElement>(null);
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
      <a
        ref={heroRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={BUTTON_CLASS}
        style={{ backgroundColor: color }}
      >
        Visit site ↗
      </a>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={!isFloating}
        tabIndex={isFloating ? 0 : -1}
        className={`${BUTTON_CLASS} fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none ${
          isFloating ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
        style={{ backgroundColor: color }}
      >
        Visit site ↗
      </a>
    </>
  );
}
