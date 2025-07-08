
import "./globals.css";
import Navbar from "./components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const message = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={message}>
          <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-16">
            <Navbar />
            <div className="flex flex-grow items-center justify-center ">
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
