// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "CivicAI Solutions",
  description: "Where insight becomes action.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <LangProvider>
          <Navbar />
          <div className="mx-auto max-w-7xl px-6">{children}</div>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}

