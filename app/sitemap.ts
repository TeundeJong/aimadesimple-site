import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/case-studies";

const BASE = "https://civicai.solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/future",
    "/contact",
    "/products",
    "/products/whatsapp-ai-assistant",
    "/products/contractguard-ai",
    "/pricing",
    "/privacy",
    "/terms",
    "/refund-policy",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const caseStudyRoutes = getAllSlugs().map((slug) => ({
    url: `${BASE}/work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
