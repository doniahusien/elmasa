import type { Metadata } from "next";
import { changa } from "../fonts";
import "../globals.css";
import { Toaster } from "sonner";
import { NextIntlClientProvider, useLocale } from "next-intl";
import StoreProvider from "@/store/StoreProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Elmasa",
  description:
    "A modern, open-source, and privacy-focused password manager built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();

  return (
    <html lang="en" dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${changa.variable} antialiased`}>
        <NextIntlClientProvider>
          <StoreProvider>
            <Nav />
            {children}
            <Footer/>
          </StoreProvider>
          <Toaster
            position="top-right"
            richColors
            expand
            duration={4000}
            closeButton
            theme="system"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
