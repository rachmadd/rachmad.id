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

  const sizing =
    size === "mobile"
      ? "h-10 min-w-11 px-[10px] text-xs"
      : "h-7 min-w-[38px] px-[10px] text-xs";

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex rounded-pill border border-[rgba(255,255,255,0.1)] p-[3px]"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            aria-current={active ? "true" : undefined}
            className={`flex items-center justify-center rounded-pill font-mono no-underline ${sizing} ${
              active ? "bg-fg text-bg" : "bg-transparent text-muted"
            }`}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
