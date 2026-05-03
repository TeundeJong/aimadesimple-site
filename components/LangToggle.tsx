"use client";

import { useLang, type Locale } from "@/lib/i18n";

const LANGS: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
];

export default function LangToggle() {
  const { locale, setLocale } = useLang();

  return (
    <div
      className="inline-flex items-center rounded-full border border-edge-strong bg-canvas-elevated/60 p-0.5 font-mono text-[11px]"
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l) => {
        const active = locale === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLocale(l.code)}
            className={`relative rounded-full px-2.5 py-1 transition-colors ${
              active
                ? "bg-canvas-base text-ink-primary ring-soft"
                : "text-ink-secondary hover:text-ink-primary"
            }`}
            aria-pressed={active}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
