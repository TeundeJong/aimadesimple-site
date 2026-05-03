# CivicAI Solutions — Complete Rebuild Plan

> **For:** Teun de Jong (TJ) · Founder, CivicAI Solutions Pty Ltd
> **Goal:** Transform existing site (`aimadesimple-site-main`) into a premium, professional, tech-forward IT agency website that attracts paying clients for websites, web apps, and AI integrations — while serving as TJ's personal portfolio.
> **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS 3.4 · shadcn/ui · Framer Motion · Stripe (existing)
> **Build environment:** Claude Code

---

## 1. Project Context

### Current state
- Live at: https://aimadesimple-site.vercel.app/
- Repo: `aimadesimple-site-main` (Next.js 14 App Router)
- Tailwind 3.4 + Framer Motion 12 already installed
- 5 locales: en, nl, de, es, pt (`/locales/*.json`)
- Stripe integration in place (`lib/stripe.ts`, `lib/stripePrices.ts`)
- Existing pages: `/`, `/about`, `/contact`, `/products`, `/services`, `/pricing`, `/privacy`, `/terms`, `/refund-policy`

### What changes
- Visual identity → dark, premium, tech-forward (currently light/slate-teal SaaS look)
- New pages: `/work` (portfolio), `/future` (vision), individual case study pages
- New sections everywhere: hero animations, tech marquee, scroll reveals
- Add shadcn/ui (not currently installed)
- Reuse animations from `Portfolio-main` (Lovable export)

### What stays
- Next.js App Router structure
- Stripe + i18n infrastructure
- Existing legal pages (Privacy/Terms/Refund)
- Domain + Vercel deployment

---

## 2. Brand Identity

### Color palette (dark theme)

```css
/* Primary surface */
--bg-base:        #0a0a0a;   /* near-black canvas */
--bg-elevated:    #111114;   /* cards, elevated surfaces */
--bg-subtle:      #1a1a1f;   /* hover states, dividers */

/* Borders */
--border-soft:    rgba(255, 255, 255, 0.06);
--border-strong:  rgba(255, 255, 255, 0.12);

/* Text */
--text-primary:   #f5f5f4;   /* body text */
--text-secondary: #a8a29e;   /* muted */
--text-tertiary:  #57534e;   /* very muted */

/* ACCENTS */
--accent-gold:    #d4a574;   /* primary accent — warm, premium, craftsman feel */
--accent-gold-hi: #e6c189;   /* hover state */
--accent-teal:    #5eead4;   /* secondary accent — tech feel, links, CTAs */
--accent-teal-hi: #7ef0dc;

/* Status */
--success:        #4ade80;
--warn:           #fbbf24;
--error:          #f87171;
```

**Why this palette:** Gold honors TJ's craftsman background (carpentry → code), teal keeps the tech-forward feel. Both work strongly on near-black. Avoid generic purple gradients.

### Typography

```css
/* Display — headlines, hero */
font-family: 'Geist', 'Satoshi', system-ui, sans-serif;

/* Body */
font-family: 'Inter', system-ui, sans-serif;

/* Mono — code, tags, timestamps */
font-family: 'JetBrains Mono', 'Geist Mono', monospace;
```

Use `next/font/google` for performance.

### Motion principles
- Easings: prefer `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) for entries
- Stagger: 60–80ms between siblings on reveal
- Marquee: linear, 28–40s loop
- Hover: 200ms transitions, scale 1.02 max
- Scroll reveals: trigger at 20% viewport entry

---

## 3. Site Architecture

```
/                    Home
/services            What we offer + packages + process
/work                Portfolio grid
/work/[slug]         Case study detail
/about               TJ's story + team + values + timeline
/future              Vision: HealthHub Pods, MediSphere, HydroHive (coming)
/contact             Form + WhatsApp + email + locations
/products            (existing) — keep, integrate into work
/products/[slug]     (existing) — CivicAI Assistant, ContractGuard
/pricing             (existing) — link to /services
/privacy /terms /refund-policy   (existing) — keep as-is
```

---

## 4. Page Specs

### 4.1 Home (`/`)

**Sections (top → bottom):**

1. **Sticky Navbar** — logo + nav (Services / Work / About / Future / Contact) + lang switcher (EN/NL primary) + theme toggle + "Start a project" CTA
2. **Tech Marquee** — full-width strip directly under navbar: `Next.js · Tailwind · TypeScript · Supabase · Stripe · Framer Motion · Vercel · OpenAI · Claude · React · Node.js` (loops infinitely, edge fades — adapted from `Portfolio-main/src/components/v2/MarqueeSection.tsx`)
3. **Hero** — large headline: *"We build practical software systems for businesses that need to move."* · subhead about who CivicAI is · two CTAs (Start a project / View work) · animated background (gradient orbs + grid)
4. **Trust strip** — 3-4 metrics or values (Years building / Projects shipped / Maintenance uptime / 1% climate pledge)
5. **Services preview** — 4 cards (Websites, Web Apps, AI Integration, Maintenance) with hover effects, link to `/services`
6. **Featured work** — 3 large project cards (CivicAI Assistant, ContractGuard AI, VIREX) with case study links
7. **Founder strip** — short "Built by TJ — from carpenter to founder" teaser, link to `/about`
8. **Future vision teaser** — preview HealthHub Pods + MediSphere with "Coming" badge, link to `/future`
9. **CTA block** — "Have something to build? Tell us." + contact button
10. **Footer**

### 4.2 Services (`/services`)

1. Hero — "Practical software. Delivered properly."
2. Services grid — 4 detailed cards (numbered 01–04) with tech tags
3. Packages — Starter / Pro / Custom (highlight middle, prices TBD or "Contact for quote")
4. Process — 4 steps (Intake → Proposal → Build → Deliver)
5. Tech stack — visual grid of tools used
6. CTA

### 4.3 Work (`/work`)

1. Hero — "Selected projects. Built end-to-end."
2. Filter tabs — All / Websites / SaaS / AI / Hardware
3. Project grid — 6+ cards with thumbnail, name, tags, year
4. Case study cards link to `/work/[slug]`
5. CTA — "Want yours here?"

**Initial case studies:**
- **CivicAI Assistant** — WhatsApp AI assistant (existing product)
- **ContractGuard AI** — Contract risk scanning (existing product, working SaaS)
- **VIREX** — Private builder ecosystem (TJ's own SaaS)
- **MediSphere Care** (in development) — Medical pod systems
- **HydroHive** (concept) — Off-grid greenhouse system
- **HealthHub Pods** (concept)

### 4.4 About (`/about`)

1. Hero — "Built things with my hands. Now I build them in code." (large portrait or abstract visual)
2. Founder story — TJ's journey: carpenter (NL) → self-employed → Australia → self-taught dev → founder
3. Timeline — 2015–2019 / 2019–2022 / 2022–2023 / 2023–Now
4. Values — Practical · Reliable · Transparent · Long-term
5. Skills — Frontend / Backend / AI / Tools (grid)
6. Certifications — Carpentry diploma, White Card, Working at Heights
7. CTA

### 4.5 Future (`/future`)

1. Hero — "What we're building toward."
2. Vision intro — CivicAI Solutions as a holding company
3. **HealthHub Pods** — concept dossier teaser
4. **MediSphere Care** — medical pods, NGO/government targeting
5. **HydroHive** — off-grid greenhouse, atmospheric water gen
6. **EcoPod Living** — modular off-grid smart living pods
7. Investor / partner CTA

### 4.6 Contact (`/contact`)

1. Form (name, email, project type dropdown, budget range, message)
2. Direct contact (email, WhatsApp link)
3. Locations (Coffs Harbour, AU + NL presence)
4. Response time expectation
5. "Business inquiries only — no cold outreach"

---

## 5. Component Inventory

### To build new
| Component | Path | Purpose |
|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Sticky, dark, with lang/theme toggle |
| `TechMarquee` | `components/TechMarquee.tsx` | Tech stack horizontal scroll |
| `HeroHome` | `components/sections/HeroHome.tsx` | Animated hero on home |
| `HeroPage` | `components/sections/HeroPage.tsx` | Reusable for sub-pages |
| `ServicesGrid` | `components/sections/ServicesGrid.tsx` | 4-up service cards |
| `WorkShowcase` | `components/sections/WorkShowcase.tsx` | Featured work, home |
| `WorkGrid` | `components/sections/WorkGrid.tsx` | Full portfolio grid |
| `CaseStudy` | `components/sections/CaseStudy.tsx` | Project detail layout |
| `Timeline` | `components/sections/Timeline.tsx` | Career journey |
| `TechStack` | `components/sections/TechStack.tsx` | Visual tool grid |
| `FutureVision` | `components/sections/FutureVision.tsx` | Future products section |
| `ContactForm` | `components/sections/ContactForm.tsx` | Contact form |
| `CTABlock` | `components/sections/CTABlock.tsx` | Reusable CTA |
| `Footer` | `components/Footer.tsx` | Update existing |
| `BackgroundGrid` | `components/ui/BackgroundGrid.tsx` | Animated grid bg |
| `GradientOrbs` | `components/ui/GradientOrbs.tsx` | Animated gradient orbs |

### shadcn/ui

> TJ already has the full `ui-main` shadcn/ui repo locally (from `TAILWIND_PACKET.zip → ui-main.zip`). We use the standard CLI to install components into the CivicAI repo — the local copy is for reference / browsing source.

```bash
# Initialize shadcn in the CivicAI project (one-time setup)
npx shadcn@latest init

# When prompted:
#   Style:           New York (recommended for premium look)
#   Base color:      Neutral
#   CSS variables:   Yes

# Add the components we need
npx shadcn@latest add button card input textarea select label dialog sheet badge separator tabs accordion navigation-menu dropdown-menu
```

**Reference the local `ui-main` folder if you want to:**
- See full source of any component before installing
- Copy a non-default variant
- Compare with Catalyst UI Kit alternatives (also in `TAILWIND_PACKET`)

### To reuse from `Portfolio-main`
- `MarqueeSection.tsx` (adapt for tech stack)
- `ScrollLogo.tsx` (optional, for hero)
- `LoadingScreen.tsx` (optional)
- `CursorEffects.tsx` (optional, hover trail)

---

## 6. Tailwind Config

`tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0a0a0a',
          elevated: '#111114',
          subtle: '#1a1a1f',
        },
        border: {
          soft: 'rgba(255,255,255,0.06)',
          strong: 'rgba(255,255,255,0.12)',
        },
        accent: {
          gold: '#d4a574',
          'gold-hi': '#e6c189',
          teal: '#5eead4',
          'teal-hi': '#7ef0dc',
        },
      },
      fontFamily: {
        display: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-shift': 'gradientShift 12s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
```

---

## 7. Build Phases (work in this order in Claude Code)

### Phase 1 — Foundation (1 session)
- [ ] Install shadcn/ui + initialize
- [ ] Install `next-themes` for dark/light toggle
- [ ] Update `tailwind.config.ts` with design tokens
- [ ] Update `app/globals.css` with new CSS variables and base styles
- [ ] Set up fonts via `next/font/google` (Geist, Inter, JetBrains Mono)
- [ ] Update `app/layout.tsx` with new fonts + theme provider
- [ ] Build `Navbar.tsx`, `Footer.tsx`, `TechMarquee.tsx`
- [ ] Build base UI components: `BackgroundGrid`, `GradientOrbs`, `CTABlock`
- [ ] Verify dev server runs cleanly

### Phase 2 — Home page (1 session)
- [ ] Hero section with animated background
- [ ] Trust strip
- [ ] Services preview grid
- [ ] Featured work section
- [ ] Founder teaser strip
- [ ] Future vision teaser
- [ ] Final CTA block
- [ ] Mobile responsive pass

### Phase 3 — Services + About (1 session)
- [ ] `/services` — full page with packages + process
- [ ] `/about` — TJ's story + timeline + skills + certs
- [ ] Reusable `HeroPage` component for sub-pages

### Phase 4 — Work + Future (1 session)
- [ ] `/work` — portfolio grid with filters
- [ ] `/work/civicai-assistant` (case study)
- [ ] `/work/contractguard-ai` (case study)
- [ ] `/work/virex` (case study)
- [ ] `/future` — vision page with HealthHub, MediSphere, HydroHive

### Phase 5 — Contact + Polish (1 session)
- [ ] `/contact` rebuilt with form, locations, channels
- [ ] SEO metadata per page (Open Graph, Twitter cards)
- [ ] 404 page styled
- [ ] Loading states
- [ ] i18n updates for new content (EN + NL primary)
- [ ] Mobile responsive QA on all pages
- [ ] Accessibility pass (focus states, alt text, contrast)
- [ ] Lighthouse run

### Phase 6 — Deploy
- [ ] Push to GitHub
- [ ] Auto-deploy via Vercel
- [ ] Test live site
- [ ] Update DNS if needed

---

## 8. Content Inventory (TJ to provide / refine)

### Founder content (About page)
- **Bio (long-form)** — 200–300 words: carpenter origin, transition story, why software, what drives the work
- **Portrait photo** (optional) — clean headshot or workspace shot
- **Specific project anecdotes** — 1–2 short stories (carpentry job that taught X, first app shipped, etc.)

### Project case studies (3 minimum to launch)
For each: problem → approach → result → tech used → screenshots/visuals

1. **CivicAI Assistant** — already exists, just needs case study framing
2. **ContractGuard AI** — already live, has paying potential
3. **VIREX** — TJ's flagship, in development, can show concept screens

### Services positioning
- 4 services confirmed: Websites / Web Apps / AI Integration / Maintenance ✓
- **Pricing strategy: Contact for quote** (TJ's decision)
  - All three packages (Starter / Pro / Custom) display "Contact for quote" instead of fixed prices
  - Each package still lists what's included (features list) so prospects can self-qualify
  - Reasoning: keeps flexibility while TJ figures out his rate, lets him price per project
  - Trade-off to be aware of: some prospects bounce on "no price shown" — mitigate by being very specific in the **features list** of each tier so they can match themselves to the right package before reaching out

### Future products
- One-paragraph teaser per: HealthHub Pods, MediSphere Care, HydroHive, EcoPod Living
- Status badge per (Concept / In development / Pilot / Live)

---

## 9. Reusable assets from existing repos

### From `aimadesimple-site-main`
- `/public/civicai-icon.png` — keep as logo
- `/public/civicai-logo.jpg` — keep
- `/public/hero.jpg`, `/public/i.jpg` — evaluate if usable
- `/locales/*.json` — extend with new keys for new pages
- `lib/i18n.tsx`, `lib/stripe.ts`, `lib/stripePrices.ts` — keep, reuse
- `app/api/*` — Stripe checkout, keep
- Legal pages — keep unchanged

### From `Portfolio-main` (Lovable export)
- `src/components/v2/MarqueeSection.tsx` → adapt to `components/TechMarquee.tsx`
- `src/components/v2/ScrollLogo.tsx` → optional, for visual flair
- `src/components/CursorEffects.tsx` → optional desktop enhancement
- `src/hooks/*` → check for useful custom hooks (scroll, motion)

### From `TAILWIND_PACKET`
- **Catalyst UI Kit** — primary inspiration for components (Button, Card patterns)
- **Studio template** — agency/portfolio layouts (great for `/work` and `/about`)
- **Salient template** — landing page sections (services, pricing, CTA)
- **Spotlight template** — personal portfolio patterns (relevant for `/about`)

> Note: Tailwind UI Plus components are licensed for TJ's use. Adapt — don't redistribute.

---

## 10. Working with Claude Code

### Setup steps in Claude Code

```bash
# Open the existing repo in Claude Code
cd path/to/aimadesimple-site-main

# Install new dependencies
npm install next-themes tailwindcss-animate

# Initialize shadcn (CLI will set up the components folder + utils)
npx shadcn@latest init

# Add base shadcn components we need for the build
npx shadcn@latest add button card input textarea select label dialog sheet badge separator tabs accordion navigation-menu dropdown-menu

# Run dev
npm run dev
```

> **Note:** TJ has the full shadcn/ui source repo locally as `ui-main` (from `TAILWIND_PACKET.zip`). The CLI above is the standard install — `ui-main` is for reference / inspecting source / copying non-default variants if needed.

### Suggested first prompt to Claude Code
> "Read `BUILD_PLAN.md`. Start with Phase 1 — Foundation. Update `tailwind.config.ts` and `app/globals.css` with the design tokens. Set up the three Google fonts via `next/font`. Update `app/layout.tsx` with the theme provider and fonts. Build `Navbar.tsx`, `Footer.tsx`, and `TechMarquee.tsx`. Verify the dev server runs cleanly before moving on."

### Work approach
- One phase per session
- Commit after each working phase
- Test in browser before moving to next phase
- Don't bulk-rewrite — iterate and verify

---

## 11. Success criteria

The redesigned site succeeds if:
- A potential client lands on the homepage and within 10 seconds understands: TJ builds practical software, has a real portfolio, and can be hired
- The about page makes TJ's unconventional path (carpenter → founder) a credibility booster, not a disclaimer
- Three real case studies (CivicAI Assistant, ContractGuard, VIREX) demonstrate range
- The visual quality says "premium agency" — not "first AI portfolio"
- Lighthouse: 90+ across Performance / Accessibility / Best Practices / SEO
- Mobile-first responsive on iPhone SE (smallest realistic viewport) up to 4K desktop

---

## 12. Out of scope (for v1)

To keep the build focused, these are deferred to a v1.1:
- Blog / insights section (add later when there's content)
- Multi-language beyond EN + NL (de/es/pt JSON files exist but content updates can come later)
- CMS integration (use code-based content for now; revisit if updates become frequent)
- Analytics dashboard / admin
- Customer portal / login (ContractGuard has its own SaaS at `app.contractguardhq.com`)

---

**Next step:** Open this file in Claude Code with the repo. Start Phase 1.
