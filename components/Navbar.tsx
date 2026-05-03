"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import LangToggle from "@/components/LangToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV = [
    { href: "/services", label: t("nav.services") },
    { href: "/work", label: t("nav.work") },
    { href: "/about", label: t("nav.about") },
    { href: "/future", label: t("nav.future") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-edge-soft bg-canvas-base/80 backdrop-blur-xl"
          : "border-transparent bg-canvas-base/40 backdrop-blur-md"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-canvas-elevated ring-soft">
            <Image
              src="/civicai-icon.png"
              alt="CivicAI Solutions"
              fill
              sizes="36px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-medium tracking-tight">
              CivicAI Solutions
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
              {t("nav.tagline")}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  active
                    ? "text-ink-primary"
                    : "text-ink-secondary hover:text-ink-primary"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-teal to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LangToggle />
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            className="group hidden items-center gap-1.5 rounded-full bg-accent-gold px-4 py-2 text-sm font-medium text-canvas-base transition-all duration-200 hover:bg-accent-gold-hi hover:shadow-[0_0_0_4px_rgba(212,165,116,0.12)] md:inline-flex"
          >
            {t("nav.start_project")}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-edge-strong bg-canvas-elevated/60 text-ink-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden">
          <div className="border-t border-edge-soft bg-canvas-base/95 backdrop-blur-xl">
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname?.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base transition-colors",
                      active
                        ? "bg-canvas-elevated text-ink-primary ring-soft"
                        : "text-ink-secondary hover:bg-canvas-elevated hover:text-ink-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-3 flex items-center justify-between border-t border-edge-soft pt-4">
                <LangToggle />
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent-gold px-4 py-3 text-sm font-medium text-canvas-base transition-colors hover:bg-accent-gold-hi"
              >
                {t("nav.start_project")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
