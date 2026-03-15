"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, Bell, User, BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "../LanguageSwitcher";
import Cookies from "js-cookie";
export default function Nav() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const showAuthButtons = !isLoggedIn;
  const showLoggedInActions = isLoggedIn;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const userCookie = Cookies.get("user");
    setIsLoggedIn(!!userCookie);
  }, []);

  const isAuthRoute = useMemo(
    () =>
      /^\/(login|signup|reset-password|forget-password|verify)/.test(
        pathname ?? "",
      ),
    [pathname],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseTextColor = scrolled ? "text-primary-500" : "text-white";
  const linkHover = scrolled
    ? "hover:text-primary-600"
    : "hover:text-primary-300";

  if (isAuthRoute) return null;

  if (!mounted) return null;
  return (
    <header
      className={cn(
        "fixed top-0 z-99 w-full border-b backdrop-blur transition-colors duration-300",
        scrolled
          ? "bg-white/90 border-gray-200"
          : "bg-transparent border-white/10",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={scrolled ? "/logo.svg" : "/images/logo-white.svg"}
            width={120}
            height={40}
            alt={t("TITLES.brand_name")}
            className="h-10 w-auto"
            priority
          />
          <div
            className={cn("text-st2 font-semibold text-center", baseTextColor)}
          >
            {t("TITLES.brand_name")}
          </div>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-6 text-sm font-medium md:flex",
            baseTextColor,
          )}
        >
          <Link
            href="/"
            className={cn(linkHover, isActive("/") && "text-primary-500")}
          >
            {t("NAV.home")}
          </Link>
          <Link
            href="/gallery"
            className={cn(
              linkHover,
              isActive("/gallery") && "text-primary-500",
            )}
          >
            {t("NAV.gallery")}
          </Link>
          <Link
            href="/booking"
            className={cn(
              linkHover,
              isActive("/booking") && "text-primary-500",
            )}
          >
            {t("NAV.booking")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className={cn(
              "md:hidden rounded-md p-2 text-white hover:bg-white/10",
              scrolled && "text-primary-500",
            )}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {showAuthButtons && (
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/login"
                className={cn(
                  "rounded-md border px-4 py-2 text-sm hover:bg-white/10",
                  scrolled
                    ? "border-gray-200 text-primary-500"
                    : "border-white/20 text-white",
                  isActive("/login") &&
                    (scrolled ? "bg-white/20" : "bg-white/10"),
                )}
              >
                {t("NAV.login")}
              </Link>
              <Link
                href="/signup"
                className={cn(
                  "rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500",
                  isActive("/signup") && "ring-2 ring-primary-300",
                )}
              >
                {t("NAV.create_account")}
              </Link>
              <LanguageSwitcher />
            </div>
          )}

          {showLoggedInActions && (
            <div className="hidden items-center gap-3 md:flex">
              <LanguageSwitcher />

              <Link
                href="/notifications"
                className={cn(
                  "p-2 rounded-full hover:bg-white/10",
                  baseTextColor,
                )}
              >
                <span className="sr-only">{t("NAV.notifications")}</span>
                <Bell className="size-5" />
              </Link>
              <Link
                href="/profile"
                className={cn(
                  "p-2 rounded-full hover:bg-white/10",
                  baseTextColor,
                )}
              >
                <span className="sr-only">{t("NAV.profile")}</span>
                <User className="size-5" />
              </Link>
              <Link
                href="/booking"
                className="rounded-md bg-primary-500 px-8 py-2 text-sm font-semibold text-white hover:bg-primary-400 flex items-center gap-2"
              >
                {t("NAV.book_now")}
              </Link>
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden">
          <div className="flex flex-col gap-2 border-t border-white/10 bg-black/70 px-4 py-4">
            <Link
              href="/"
              className={cn(
                "rounded-md px-3 py-2 text-sm",
                baseTextColor,
                isActive("/") && "bg-white/10",
              )}
              onClick={() => setMobileOpen(false)}
            >
              {t("NAV.home")}
            </Link>
            <Link
              href="/gallery"
              className={cn(
                "rounded-md px-3 py-2 text-sm",
                baseTextColor,
                isActive("/gallery") && "bg-white/10",
              )}
              onClick={() => setMobileOpen(false)}
            >
              {t("NAV.gallery")}
            </Link>
            <Link
              href="/booking"
              className={cn(
                "rounded-md px-3 py-2 text-sm",
                baseTextColor,
                isActive("/booking") && "bg-white/10",
              )}
              onClick={() => setMobileOpen(false)}
            >
              {t("NAV.booking")}
            </Link>

            {showAuthButtons && (
              <>
                <Link
                  href="/login"
                  className={cn(
                    "rounded-md px-3 py-2 text-sm",
                    baseTextColor,
                    isActive("/login") && "bg-white/10",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {t("NAV.login")}
                </Link>
                <Link
                  href="/signup"
                  className={cn(
                    "rounded-md px-3 py-2 text-sm",
                    baseTextColor,
                    isActive("/signup") && "bg-white/10",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {t("NAV.create_account")}
                </Link>
              </>
            )}

            {showLoggedInActions && (
              <>
                <Link
                  href="/booking"
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-semibold",
                    "bg-primary-500 text-white hover:bg-primary-400",
                    "flex items-center gap-2",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  <BookOpen className="size-4" />
                  {t("NAV.book_now")}
                </Link>
                <Link
                  href="/notifications"
                  className={cn(
                    "rounded-md px-3 py-2 text-sm flex items-center gap-2",
                    baseTextColor,
                    isActive("/notifications") && "bg-white/10",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  <Bell className="size-5" />
                  {t("NAV.notifications")}
                </Link>
                <Link
                  href="/profile"
                  className={cn(
                    "rounded-md px-3 py-2 text-sm flex items-center gap-2",
                    baseTextColor,
                    isActive("/profile") && "bg-white/10",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  <User className="h-5 w-5" />
                  {t("NAV.profile")}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
