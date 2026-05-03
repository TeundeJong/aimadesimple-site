import { headers } from "next/headers";

export type CurrencyRegion = "EUR" | "AUD";

function normalize(v: string | null): string {
  return (v || "").trim().toUpperCase();
}

/**
 * Best-effort, header-only region detection.
 *
 * - Works well on Vercel (x-vercel-ip-country / x-vercel-ip-continent)
 * - Works on Cloudflare (cf-ipcountry)
 * - Safe fallback (defaults to EUR)
 *
 * This intentionally avoids third-party IP geo lookups (cost/complexity) and
 * avoids introducing paid keys for a simple currency toggle.
 */
export async function getPricingCurrencyFromRequestHeaders(): Promise<CurrencyRegion> {
  // Next.js 15 makes request header APIs async in many setups. To stay compatible
  // across Next.js versions, handle both sync and async returns safely.
  const maybe = headers() as unknown as { then?: unknown };
  const h: Headers =
    typeof (maybe as any)?.then === "function" ? ((await (maybe as any)) as Headers) : (maybe as any);

  const country = normalize(
    (h as any).get?.("x-vercel-ip-country") || (h as any).get?.("cf-ipcountry") || (h as any).get?.("x-country")
  );

  const continent = normalize((h as any).get?.("x-vercel-ip-continent") || (h as any).get?.("x-continent"));

  // Australia always AUD
  if (country === "AU") return "AUD";

  // Americas -> AUD (NA/SA best-effort)
  if (continent === "NA" || continent === "SA") return "AUD";

  // Europe -> EUR
  if (continent === "EU") return "EUR";

  // Some providers do not include continent header; handle common cases.
  // Americas -> AUD, otherwise EUR.
  const americasCountries = new Set([
    "US",
    "CA",
    "MX",
    "BR",
    "AR",
    "CL",
    "CO",
    "PE",
    "VE",
    "EC",
    "BO",
    "PY",
    "UY",
    "CR",
    "PA",
    "GT",
    "HN",
    "NI",
    "SV",
    "DO",
    "JM",
    "TT",
    "BS",
    "BB",
    "GY",
    "SR",
  ]);
  if (country && americasCountries.has(country)) return "AUD";

  // Rest of world -> EUR (default)
  return "EUR";
}
