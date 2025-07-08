import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("about");

    return (
        <main className="flex flex-col items-center gap-8">
            <h3>
                {t("text")}
            </h3>
        </main>
    );
}
