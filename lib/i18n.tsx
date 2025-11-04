// lib/i18n.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// ✅ beschikbare talen
export type Locale = "nl" | "en" | "es" | "pt" | "de";

// ✅ laad je JSONs
import nl from "@/locales/nl.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import pt from "@/locales/pt.json";
import de from "@/locales/de.json";

const DICTS: Record<Locale, Record<string,string | any>> = { nl, en, es, pt, de };

// ✅ context type
type LangContext = {
  locale: Locale;
  t: (k: string) => string;
  setLocale: (l: Locale) => void;
};

// ✅ init context
const LangCtx = createContext<LangContext>({
  locale: "nl",
  t: (k) => k,
  setLocale: () => {},
});

// ✅ provider op module-niveau exporteren
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("nl");

  // (optioneel) taal uit cookie lezen
  useEffect(() => {
    const c = document.cookie.split("; ").find((c) => c.startsWith("locale="));
    if (c) {
      const val = c.split("=")[1] as Locale;
      if (val && DICTS[val]) setLocale(val);
    }
  }, []);

  // vertaalfunctie
  const t = (k: string) => DICTS[locale]?.[k] ?? k;

  // (optioneel) taal bewaren als cookie
  const setLocaleAndPersist = (l: Locale) => {
    setLocale(l);
    document.cookie = `locale=${l}; path=/; max-age=31536000`;
  };

  return (
    <LangCtx.Provider value={{ locale, t, setLocale: setLocaleAndPersist }}>
      {children}
    </LangCtx.Provider>
  );
}

// ✅ hook op module-niveau exporteren
export function useLang() {
  return useContext(LangCtx);
}
