"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={cn(
        "px-3 py-2 rounded-xl text-sm font-medium transition",
        pathname === href
          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
          : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
      )}
    >
      {label}
    </Link>
  );

  return (
    <div className="w-full border-b border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/40 backdrop-blur">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm md:text-base font-semibold tracking-tight">
          CivicAI Solutions
        </Link>
        <nav className="flex items-center gap-1">
          {link("/", "Home")}
          {link("/services", "Services")}
          {link("/pricing", "Pricing")}
          {link("/contact", "Contact")}
        </nav>
      </div>
    </div>
  );
}
