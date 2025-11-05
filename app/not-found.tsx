// app/not-found.tsx
"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLang();
  return (
    <main className="min-h-[70vh] grid place-items-center bg-slate-50 dark:bg-slate-950">
      <div className="max-w-xl text-center px-6 py-16">
        <p className="text-sm text-slate-500">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {t("notFound.title")}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {t("notFound.body")}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {t("notFound.ctaHome")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
          >
            {t("notFound.ctaContact")}
          </Link>
        </div>
      </div>
    </main>
  );
}
