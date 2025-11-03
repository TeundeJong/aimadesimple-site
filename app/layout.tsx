import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CivicAI Solutions — Where insight becomes action.",
  description: "Professional AI solutions for modern organizations. Automations, support bots, and document analysis.",
  metadataBase: new URL("https://civicaisolutions.io"),
  openGraph: {
    title: "CivicAI Solutions — Where insight becomes action.",
    description: "Professional AI solutions for modern organizations.",
    url: "https://civicaisolutions.io",
    siteName: "CivicAI Solutions",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
