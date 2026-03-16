"use client";

import { useMemo } from "react";
import { usePathname } from "@/i18n/routing";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Youtube,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
    const t = useTranslations();
      const pathname = usePathname();
    
      const isAuthRoute = useMemo(
        () =>
          /^\/(login|signup|reset-password|forget-password|verify)/.test(
            pathname ?? "",
          ),
        [pathname],
      );
 if (isAuthRoute) return null;

  return (
    <footer className="bg-secondary-500 text-white mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/logo-white.svg"
                width={120}
                height={36}
                alt={t("TITLES.brand_name")}
                className="h-10 w-auto"
              />
              <span className="text-sm font-semibold">
                {t("TITLES.brand_name")}
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 text-white/80">
              <Link href="#" className="hover:text-white border rounded-sm p-1">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="hover:text-white border rounded-sm p-1">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white border rounded-sm p-1">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white border rounded-sm p-1">
                <X className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold">
              {t("FOOTER.important_links")}
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-white/90">
                {t("NAV.home")}
              </Link>
              <Link href="/" className="hover:text-white/90">
                {t("TITLES.plans")}
              </Link>
              <Link href="/booking" className="hover:text-white/90">
                {t("NAV.booking")}
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <span className="text-sm">4650289650</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <span className="text-sm">7049488021</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5" />
              <p className="text-sm leading-relaxed">
                7478 سعد بن خيثمة - المدينة المنورة
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/70 md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            {/*        <span>{t("FOOTER.built_by")}</span>
            <ArrowRight className="h-4 w-4" /> */}
          </div>

          <div className="mt-4 flex flex-col gap-2 md:mt-0 md:flex-row md:items-center md:gap-6">
            <Link href="#" className="hover:text-white">
              {t("FOOTER.terms")}
            </Link>
            <Link href="#" className="hover:text-white">
              {t("FOOTER.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
