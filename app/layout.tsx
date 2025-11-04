import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CivicAI Solutions — Where insight becomes action.",
  description: "Professional AI solutions for modern organizations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        {children}
        <footer className="mt-20 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="container-narrow py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-3 muted">
            <p>© {new Date().getFullYear()} CivicAI Solutions</p>
            <div className="flex items-center gap-4">
              <a href="/services">Services</a>
              <a href="/pricing">Pricing</a>
              <a href="/privacy">Privacy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
