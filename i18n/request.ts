import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const coockieLocale =     (await cookies()).get("MYNEXTAPP_LOCALE")?.value || "en";
  const locale = coockieLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
