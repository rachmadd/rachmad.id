"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageToggle } from "./LanguageToggle";

const SECTION_IDS = ["experience", "projects", "skills", "contact"] as const;

export function Nav() {
  const t = useTranslations("Nav");
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = SECTION_IDS.map((id) => ({ id, label: t(id) }));

  return (
    <header className="sticky top-4 z-30 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="hidden items-center gap-0.5 rounded-pill border border-[rgba(255,255,255,0.09)] bg-surface p-[6px] md:flex"
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={`/#${link.id}`}
            className={`inline-flex h-[38px] items-center whitespace-nowrap rounded-pill px-4 text-sm text-fg no-underline hover:bg-[rgba(255,255,255,0.06)] hover:text-white ${
              active === link.id
                ? "underline decoration-accent decoration-2 underline-offset-[6px]"
                : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        <span className="mx-1.5 h-5 w-px bg-[rgba(255,255,255,0.1)]" />
        <LanguageToggle />
      </nav>

      <div className="relative w-full max-w-[440px] md:hidden">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-2 rounded-pill border border-[rgba(255,255,255,0.09)] bg-surface py-[5px] pr-[5px] pl-5"
        >
          <Link href="/#top" className="font-mono text-[13px] text-fg no-underline">
            {t("brand")}
          </Link>
          <div className="flex items-center gap-1.5">
            <LanguageToggle size="mobile" />
            <button
              type="button"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="h-[46px] rounded-pill border border-[rgba(255,255,255,0.12)] bg-transparent px-5 text-sm text-fg"
            >
              {menuOpen ? t("menuClose") : t("menuOpen")}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="absolute inset-x-0 top-[66px] flex flex-col rounded-[24px] border border-[rgba(255,255,255,0.09)] bg-surface p-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[52px] items-center rounded-2xl px-4 text-[17px] text-fg no-underline hover:bg-[rgba(255,255,255,0.05)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
