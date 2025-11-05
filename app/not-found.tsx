// app/not-found.tsx
"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLang();
  return (
    <main className="min-h-[60vh] grid place-items-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-semibold tracking-tight">{t("notFound.title")}</h1>
        <p className="mt-3 text-slate-600">{t("notFound.body")}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
            {t("notFound.ctaHome")}
          </Link>
          <Link href="/contact" className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50">
            {t("notFound.ctaContact")}
          </Link>
        </div>
      </div>
    </main>
  );
}
