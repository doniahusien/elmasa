import type { Metadata } from "next";
import Image from "next/image";
import "../../globals.css";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Elmasa",
  description:
    "A modern, open-source, and privacy-focused password manager built with Next.js and TypeScript.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations();
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden xl:block w-1/2 bg-cover bg-center bg-no-repeat bg-[url('/images/auth.jpg')] relative before:absolute before:inset-0 before:bg-black/40" />
      <div className="w-full xl:w-1/2 mx-auto  overflow-y-auto flex justify-center items-center z-20 flex-col ">
        <Image src="/logo.svg" alt="Elmasa Logo" width={65} height={60} />
        <div className="text-st2 font-semibold text-center text-primary-500">
          {t("TITLES.brand_name")}
        </div>
        <div className="w-full container mx-auto px-4 md:px-7">
          {children}
        </div>
      </div>
    </div>
  );
}
