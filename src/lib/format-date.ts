import type { Locale } from "@/content/schema";

export function formatCompanyDateRange(
  start: string,
  end: string,
  locale: Locale,
): string {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  });

  return `${formatMonth(start, formatter)} – ${formatMonth(end, formatter)}`;
}

function formatMonth(value: string, formatter: Intl.DateTimeFormat): string {
  const [year, month] = value.split("-").map(Number);
  return formatter.format(new Date(Date.UTC(year, month - 1, 1)));
}
