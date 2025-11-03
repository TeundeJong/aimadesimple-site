import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CivicAI Solutions — Where insight becomes action.",
  description: "Professional AI solutions for modern organizations. Automations, support bots, and document analysis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 antialiased">
        <Navbar />
        {children}
        <footer className="py-10 border-t border-slate-200/60 dark:border-slate-800/60 mt-16">
          <div className="container mx-auto px-4 text-sm text-slate-600 dark:text-slate-300 flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} CivicAI Solutions</p>
            <div className="flex items-center gap-4">
              <a href="/services" className="hover:underline">Services</a>
              <a href="/pricing" className="hover:underline">Pricing</a>
              <a href="/privacy" className="hover:underline">Privacy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
