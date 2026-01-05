import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CivicAI Solutions Pty Ltd",
    template: "%s — CivicAI Solutions",
  },
  description:
    "CivicAI Solutions builds and operates focused software systems that automate repetitive work, streamline communication, and make daily operations simpler and more predictable.",
  metadataBase: new URL("https://civicai.solutions"),
  icons: {
    icon: [
      { url: "/civicai-icon.png", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        {/* Global light-mode depth (kept subtle; footer/CTA remain the darkest blocks) */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc,rgba(240,253,250,0.35),#f8fafc)]" />
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_0)] bg-[size:18px_18px]" />
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-[-180px] right-[-160px] h-[520px] w-[520px] rounded-full bg-teal-500/10 blur-3xl" />
          {/* Subtle texture for depth (kept extremely light to avoid visual noise). */}
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_10%,rgba(2,132,199,1),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(13,148,136,1),transparent_40%)]" />
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
