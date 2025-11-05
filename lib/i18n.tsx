// lib/i18n.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Locale = "nl" | "en" | "es" | "pt" | "de";

import nl from "@/locales/nl.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import pt from "@/locales/pt.json";
import de from "@/locales/de.json";

const DICTS: Record<Locale, any> = { nl, en, es, pt, de };

// --- helpers ---------------------------------------------------------------
function getByPath(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

function toList(val: unknown): string[] {
  if (Array.isArray(val)) return val as string[];
  if (typeof val === "string") {
    return val.split("|").map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

// --- context ---------------------------------------------------------------
type LangContext = {
  locale: Locale;
  t: (k: string) => string;
  tList: (k: string) => string[];
  setLocale: (l: Locale) => void;
};

const LangCtx = createContext<LangContext>({
  locale: "nl",
  t: (k) => k,
  tList: () => [],
  setLocale: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("nl");

  useEffect(() => {
    const c = document.cookie.split("; ").find((c) => c.startsWith("locale="));
    if (c) {
      const val = c.split("=")[1] as Locale;
      if (val && DICTS[val]) setLocale(val);
    }
  }, []);

  const t = (k: string) => {
    const val = getByPath(DICTS[locale], k);
    return typeof val === "string" ? val : k;
  };

  const tList = (k: string) => {
    const val = getByPath(DICTS[locale], k);
    return toList(val);
  };

  const setLocaleAndPersist = (l: Locale) => {
    setLocale(l);
    document.cookie = `locale=${l}; path=/; max-age=31536000`;
  };

  return (
    <LangCtx.Provider value={{ locale, t, tList, setLocale: setLocaleAndPersist }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}
