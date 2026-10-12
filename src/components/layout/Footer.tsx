import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="mx-auto mt-[96px] flex max-w-content justify-between gap-4 border-t border-border px-[24px] pt-7 pb-[140px] font-mono text-[13px] text-muted md:mt-[160px] md:px-[40px]">
      <span>rachmad.id</span>
      <span>{t("line")}</span>
    </footer>
  );
}
