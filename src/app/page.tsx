import { AbstractIntlMessages, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: AbstractIntlMessages = await getMessages({ locale });
  const title = (messages.TabTitles as { home: string })?.home;
  // const title = messages.TabTitles?.home;
  return {
    title
  };
}

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex flex-col items-center gap-8">
      <ol className="list-inside list-decimal text-sm text-center">
        <li className="mb-2">
          {t("list1")}{" "}
          <code className="bg-black/[0.5]">app/page.tsx</code>
        </li>
        <li>{t("list2")}</li>
      </ol>
    </main>
  );
}
