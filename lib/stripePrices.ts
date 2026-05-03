export type BillingCycle = "month" | "year";
type PriceSet = { month: string; year: string; setup: string };

export const prices = {
  chatbot: {
    starter: { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
    growth:  { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
    scale:   { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
  },
  support: {
    starter: { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
    growth:  { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
    scale:   { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
  },
  docs: {
    starter:  { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
    pro:      { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
    business: { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
  },
  automate: {
    starter: { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
    growth:  { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
    scale:   { month: "price_xxx", year: "price_xxx", setup: "price_xxx" } as PriceSet,
  },
  addons: {
    sso: "price_xxx",
    analytics: "price_xxx",
    extraBot: "price_xxx",
  },
} as const;
