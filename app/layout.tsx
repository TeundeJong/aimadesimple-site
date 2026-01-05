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
          <div className="absolute inset-0 bg-slate-50" />
          <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-[-180px] right-[-160px] h-[520px] w-[520px] rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
