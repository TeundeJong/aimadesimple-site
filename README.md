# CivicAI Solutions Pty Ltd — Holding Company Website



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


## Notes
- Region pricing on the CivicAI Assistant page is selected automatically using request headers (Vercel/Cloudflare) with a safe fallback.
- ContractGuard AI link: `https://app.contractguardhq.com`

## Stripe (checkout + purchase notifications)
The CivicAI Assistant product page includes a primary "Pay & start onboarding" CTA that creates a Stripe Checkout subscription session.



### Recent changes (2026-01)
- Updated WhatsApp Assistant product page to an all-in subscription model (no add-ons) with region pricing €399 / $499 AUD.
- Added a subtle calendar capability explanation box (Read/Write/Read+Write) marked as included and enabled during onboarding.
- Added a primary Stripe checkout CTA ("Pay & start onboarding") using the existing checkout route.
- Extended the Stripe webhook handler to email the owner on successful checkout completion (via Postmark).
