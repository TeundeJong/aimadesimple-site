# CivicAI Solutions — Landing Page

A clean, bilingual (NL/EN) Next.js landing page with TailwindCSS and minimal UI components.

## Quickstart
```bash
# In an empty folder (Next 14)
npx create-next-app@latest .
# overwrite files in /app, /components, /lib with the ones from this package
npm install framer-motion lucide-react tailwindcss postcss autoprefixer
npx tailwindcss init -p  # (if missing)
# then run
npm run dev
```

## Files included
- app/layout.tsx
- app/page.tsx
- app/privacy/page.tsx
- app/globals.css
- components/ui/button.tsx, card.tsx, input.tsx
- lib/utils.ts
- tailwind.config.ts
- postcss.config.js
- vercel.json

## Customize
- Replace Stripe checkout links in `app/page.tsx`
- Add your bot widget script/iframe in the hero's demo box
- Update metadata and email in `layout.tsx` and CTA
