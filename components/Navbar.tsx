"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useT } from "@/lib/i18n";

export default function Navbar() {
  const { t } = useT();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          {t("brand").split(" ")[0]} <span className="text-blue-600">{t("brand").split(" ")[1]}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/services" className="hover:text-blue-600">{t("nav.services")}</Link>
          <Link href="/products" className="hover:text-blue-600">{t("nav.products")}</Link>
          <Link href="/pricing" className="hover:text-blue-600">{t("nav.pricing")}</Link>
          <Link href="/about" className="hover:text-blue-600">{t("nav.about")}</Link>
          <Link href="/contact" className="hover:text-blue-600">{t("nav.contact")}</Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
