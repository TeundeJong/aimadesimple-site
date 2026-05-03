import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CivicAI Solutions — Practical software, delivered properly.",
    template: "%s — CivicAI Solutions",
  },
  description:
    "CivicAI Solutions builds websites, web apps and AI integrations for businesses that need to move. Founded by Teun de Jong.",
  metadataBase: new URL("https://civicai.solutions"),
  applicationName: "CivicAI Solutions",
  authors: [{ name: "Teun de Jong" }],
  creator: "Teun de Jong",
  publisher: "CivicAI Solutions Pty Ltd",
  keywords: [
    "web development",
    "web design",
    "AI integration",
    "SaaS development",
    "Next.js agency",
    "Coffs Harbour",
    "Australia",
    "Netherlands",
  ],
  icons: {
    icon: [
      { url: "/civicai-icon.png", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://civicai.solutions",
    siteName: "CivicAI Solutions",
    title: "CivicAI Solutions — Practical software, delivered properly.",
    description:
      "Websites, web apps and AI integrations for businesses that need to move.",
    images: [
      {
        url: "/civicai-logo.jpg",
        width: 1200,
        height: 630,
        alt: "CivicAI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CivicAI Solutions — Practical software, delivered properly.",
    description:
      "Websites, web apps and AI integrations for businesses that need to move.",
    images: ["/civicai-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-canvas-base text-ink-primary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-gold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-canvas-base"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LangProvider>
            <Navbar />
            <TechMarquee />
            <main id="main">{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
