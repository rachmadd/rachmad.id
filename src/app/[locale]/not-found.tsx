import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-[14px] px-[24px] text-center md:px-[40px]">
      <h1 className="m-0 text-[32px] leading-[1.15] font-medium tracking-[-0.025em] md:text-[40px]">
        {t("title")}
      </h1>
      <p className="m-0 max-w-[420px] text-muted">{t("body")}</p>
      <Link
        href="/"
        className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-pill bg-fg px-[26px] text-[15px] font-medium text-bg no-underline hover:bg-white"
      >
        {t("button")}
      </Link>
    </section>
  );
}
