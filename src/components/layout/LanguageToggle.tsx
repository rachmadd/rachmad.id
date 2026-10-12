"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type LanguageToggleProps = {
  size?: "desktop" | "mobile";
};

export function LanguageToggle({ size = "desktop" }: LanguageToggleProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const activeIndex = Math.max(
    routing.locales.findIndex((loc) => loc === locale),
    0,
  );

  const sizing =
    size === "mobile"
      ? "h-10 min-w-11 px-[10px] text-xs"
      : "h-7 min-w-[38px] px-[10px] text-xs";

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="relative flex rounded-pill border border-[rgb(var(--overlay-rgb)_/_0.1)] p-[3px]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-[3px] left-[3px] rounded-pill bg-fg transition-transform duration-300 ease-out"
        style={{
          width: `calc((100% - 6px) / ${routing.locales.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            aria-current={active ? "true" : undefined}
            className={`relative z-10 flex items-center justify-center rounded-pill font-mono no-underline transition-colors duration-300 ${sizing} ${
              active ? "text-bg" : "text-muted"
            }`}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
