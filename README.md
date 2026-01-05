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
- Region pricing on the WhatsApp AI Assistant page is selected automatically using request headers (Vercel/Cloudflare) with a safe fallback.
- ContractGuard AI link: `https://app.contractguardhq.com`
