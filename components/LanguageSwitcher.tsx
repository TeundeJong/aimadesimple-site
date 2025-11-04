"use client";

import { useLang } from "@/lib/i18n";

import { useState } from "react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLang();;
  const [open, setOpen] = useState(false);
  const options = [
    { code: "nl", label: "Nederlands" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "pt", label: "Português" },
    { code: "de", label: "Deutsch" },
  ] as const;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100"
        aria-label="Change language"
      >
        🌐 <span className="uppercase text-sm">{locale}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          {options.map((o) => (
            <button
              key={o.code}
              onClick={() => { setLocale(o.code as any); setOpen(false); }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-slate-50"
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
