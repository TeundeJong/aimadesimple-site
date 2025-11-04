"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import nl from "@/locales/nl.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import pt from "@/locales/pt.json";
import de from "@/locales/de.json";

type Locale = "nl" | "en" | "es" | "pt" | "de";
type Dict = Record<string, string>;

const DICTS: Record<Locale, Record<string,string | any>> = { nl, en, es, pt, de };

const LangCtx = createContext<{
  locale: Locale;
  t: (k: string) => string;
  setLocale: (l: Locale) => void;
}>({ locale: "nl", t: (k) => k, setLocale: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("nl");

  useEffect(() => {
    const cookie = document.cookie.split("; ").find((c) => c.startsWith("locale="));
    if (cookie) setLocale(cookie.split("=")[1] as Locale);
  }, []);

  function setLoc(l: Locale) {
    document.cookie = `locale=${l}; path=/; max-age=31536000`;
    setLocale(l);
  }

  const dict = DICTS[locale] ?? DICTS.nl;
  const t = (k: string) => dict[k] ?? k;

  return <LangCtx.Provider value={{ locale, t, setLocale: setLoc }}>{children}</LangCtx.Provider>;
}

export function useT() {
  return useContext(LangCtx);
}
