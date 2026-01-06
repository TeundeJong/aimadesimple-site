# CivicAI Solutions Pty Ltd — Holding Company Website

Enterprise-grade, minimal Next.js website for **CivicAI Solutions Pty Ltd** (parent company).

## Pages
- `/` Home
- `/about` About
- `/products` Products overview
- `/products/whatsapp-ai-assistant` Product page (only page with pricing)
- `/products/contractguard-ai` Product page with CTA to the SaaS app
- `/contact` Business inquiry form
- `/privacy` Basic privacy statement
- `/terms` Website terms
- `/refund-policy` Refund policy (no refunds)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact form
The contact form posts to a Next.js Route Handler at `app/api/contact/route.ts` and sends emails via Postmark.

Required environment variables:

```bash
POSTMARK_API_KEY=
POSTMARK_FROM_AUTH=
POSTMARK_FROM_CONTACT=
```

## Notes
- Region pricing on the CivicAI Assistant page is selected automatically using request headers (Vercel/Cloudflare) with a safe fallback.
- ContractGuard AI link: `https://app.contractguardhq.com`

## Stripe (checkout + purchase notifications)
The CivicAI Assistant product page includes a primary "Pay & start onboarding" CTA that creates a Stripe Checkout subscription session.

The Stripe webhook endpoint at `app/api/stripe/webhook/route.ts` listens for `checkout.session.completed` and sends an **internal** purchase notification email via Postmark (best-effort), so onboarding can be scheduled immediately.

Environment variables required for Stripe (names are used by the existing code).

You can configure Stripe in **either** of these ways:
- **Legacy single account**: `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET`
- **Per-region accounts (recommended)**: `STRIPE_EU_SECRET_KEY` / `STRIPE_AU_SECRET_KEY` and `STRIPE_EU_WEBHOOK_SECRET` / `STRIPE_AU_WEBHOOK_SECRET`

```bash
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_EU_SECRET_KEY=
STRIPE_AU_SECRET_KEY=
STRIPE_EU_WEBHOOK_SECRET=
STRIPE_AU_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=
```

### Recent changes (2026-01)
- Updated WhatsApp Assistant product page to an all-in subscription model (no add-ons) with region pricing €399 / $499 AUD.
- Added a subtle calendar capability explanation box (Read/Write/Read+Write) marked as included and enabled during onboarding.
- Added a primary Stripe checkout CTA ("Pay & start onboarding") using the existing checkout route.
- Extended the Stripe webhook handler to email the owner on successful checkout completion (via Postmark).
- Improved logo rendering sharpness by using Next/Image optimization settings.
