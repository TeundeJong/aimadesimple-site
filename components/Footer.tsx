"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const COLS = [
    {
      label: t("footer.col_work"),
      items: [
        { href: "/work", label: t("footer.selected_projects") },
        { href: "/work/civicai-assistant", label: t("footer.civicai_assistant") },
        { href: "/work/contractguard-ai", label: t("footer.contractguard") },
      ],
    },
    {
      label: t("footer.col_company"),
      items: [
        { href: "/services", label: t("footer.services_label") },
        { href: "/about", label: t("footer.about_label") },
        { href: "/future", label: t("footer.future_label") },
        { href: "/contact", label: t("footer.contact_label") },
      ],
    },
    {
      label: t("footer.col_legal"),
      items: [
        { href: "/privacy", label: t("footer.privacy_label") },
        { href: "/terms", label: t("footer.terms_label") },
        { href: "/refund-policy", label: t("footer.refund_label") },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-edge-soft bg-canvas-base">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-canvas-elevated ring-soft">
                <Image
                  src="/civicai-icon.png"
                  alt="CivicAI Solutions"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
              <div className="leading-tight">
                <div className="text-base font-medium tracking-tight">
                  CivicAI Solutions
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
                  Pty Ltd
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-secondary">
              {t("footer.body")}
            </p>

            <div className="mt-6 space-y-2.5 text-sm text-ink-secondary">
              <a
                href="mailto:teun@civicai-solutions.com"
                className="group inline-flex items-center gap-2 hover:text-ink-primary"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden />
                teun@civicai-solutions.com
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden />
              </a>
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                Coffs Harbour, AU &middot; Netherlands
              </div>
            </div>

            <p className="mt-6 max-w-sm text-xs leading-relaxed text-ink-tertiary">
              {t("footer.climate")}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.label}>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                  {col.label}
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-secondary">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-ink-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-edge-soft pt-8 text-xs text-ink-tertiary sm:flex-row sm:items-center">
          <div>
            &copy; {year} CivicAI Solutions Pty Ltd &middot; {t("footer.rights")}
          </div>
          <div className="font-mono uppercase tracking-[0.18em]">
            ACN 693 254 965 &middot; ABN 92 693 254 965
          </div>
          <div className="font-mono uppercase tracking-[0.18em]">
            {t("footer.built_in")}
          </div>
        </div>
      </div>
    </footer>
  );
}
