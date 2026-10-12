export function formatCompanyDateRange(start: string, end: string): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  return `${formatMonth(start, formatter)} – ${formatMonth(end, formatter)}`;
}

function formatMonth(value: string, formatter: Intl.DateTimeFormat): string {
  const [year, month] = value.split("-").map(Number);
  return formatter.format(new Date(Date.UTC(year, month - 1, 1)));
}
