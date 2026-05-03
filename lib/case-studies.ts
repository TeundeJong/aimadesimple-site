export type CaseStudyStatus = "Live" | "In development" | "Concept";
export type CaseStudyCategory = "AI" | "SaaS" | "Website" | "Hardware" | "Mobile";

export type CaseStudyImage = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  status: CaseStudyStatus;
  year: string;
  category: CaseStudyCategory[];
  externalHref?: string;
  externalLabel?: string;
  meta: {
    role: string;
    timeline: string;
    client: string;
  };
  problem: string;
  approach: { title: string; body: string }[];
  outcome: { label: string; value: string }[];
  tech: string[];
  highlights: string[];
  images?: CaseStudyImage[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "civicai-assistant",
    name: "Integrated AI Assistant",
    eyebrow: "Day-to-day automation",
    tagline:
      "Integrated AI that helps businesses run their daily admin &mdash; email, WhatsApp, scheduling, and the small repetitive work that piles up.",
    status: "Live",
    year: "2025",
    category: ["AI", "SaaS"],
    meta: {
      role: "Product, design, build, deploy",
      timeline: "Active product",
      client: "Internal product",
    },
    problem:
      "Small businesses lose time to a thousand small admin tasks &mdash; replying to emails, answering WhatsApp messages, scheduling appointments, sending follow-ups. Owners can't keep up, hires are too expensive for the work, and generic chatbots don't know enough about the business to be useful.",
    approach: [
      {
        title: "Plug into the channels you already use",
        body: "Email, WhatsApp, calendar &mdash; we integrate where the work already happens. No new app for the operator to learn, no portal for the customer to register on.",
      },
      {
        title: "Trained on your business",
        body: "Each tenant gets a private knowledge base &mdash; services, prices, hours, policies. The assistant retrieves relevant facts before replying instead of inventing them.",
      },
      {
        title: "Hand-off when it matters",
        body: "When a question is off-script or a customer asks for a human, the conversation escalates with the full context summarized. Nothing falls through the cracks.",
      },
      {
        title: "Operator dashboard",
        body: "A simple dashboard for the business owner: review conversations, edit the knowledge base, see which leads converted. Designed for non-technical operators.",
      },
    ],
    outcome: [
      { label: "Avg. response time", value: "< 2s" },
      { label: "Manual replies handled", value: "~70%" },
      { label: "Owner inbox load", value: "−80%" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "OpenAI",
      "Claude",
      "WhatsApp Cloud API",
      "Postmark",
      "Vercel",
      "Stripe",
    ],
    highlights: [
      "End-to-end build, from API integration to operator UI",
      "Private knowledge base per tenant with RAG retrieval",
      "Email + WhatsApp + calendar integrations",
      "Human escalation path with thread summary",
    ],
  },
  {
    slug: "contractguard-ai",
    name: "ContractGuard AI",
    eyebrow: "Contract intelligence",
    tagline:
      "Document analysis SaaS that scans contracts for risk, missing clauses, and unfavourable terms in seconds.",
    status: "Live",
    year: "2025",
    category: ["AI", "SaaS"],
    externalHref: "https://app.contractguardhq.com",
    externalLabel: "Open the live app",
    meta: {
      role: "Founder, full-stack build",
      timeline: "12 weeks + ongoing iteration",
      client: "Internal product",
    },
    problem:
      "Reviewing contracts is slow, expensive, and easy to skip. Small businesses sign agreements they haven't read closely, and lawyers cost too much for routine review. People learn the hard way which clauses matter.",
    approach: [
      {
        title: "Risk-flagging, not legal advice",
        body: "We frame the product as a second pair of eyes. The AI surfaces clauses that typically deserve attention &mdash; auto-renewal, indemnity, termination, governing law &mdash; without claiming to replace a lawyer.",
      },
      {
        title: "Structured extraction",
        body: "Each contract is parsed into a structured object: parties, dates, amounts, key clauses. The structured form is what powers risk scoring and search, not raw text.",
      },
      {
        title: "Plain-language explanations",
        body: "Every flag comes with a one-paragraph explanation aimed at a non-lawyer reader. We test these prompts against a fixed eval set before each release.",
      },
      {
        title: "Stripe billing from day one",
        body: "Free tier, paid plans, usage limits enforced server-side. The billing layer was built before the marketing site, because that's the part that actually pays for the work.",
      },
    ],
    outcome: [
      { label: "Avg. analysis time", value: "< 30s" },
      { label: "Status", value: "Live" },
      { label: "Hosted at", value: "contractguardhq.com" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "Supabase",
      "Stripe",
      "OpenAI",
      "Claude",
      "Vercel",
    ],
    highlights: [
      "Live SaaS with paying customers",
      "Structured contract extraction with risk scoring",
      "Plain-English clause explanations",
      "Multi-tenant auth + Stripe subscriptions",
    ],
    images: [
      { src: "/contractguard-landing.png", alt: "ContractGuard AI landing page" },
      { src: "/contractguard-dashboard.png", alt: "ContractGuard AI dashboard" },
    ],
  },
  {
    slug: "virex",
    name: "VIREX",
    eyebrow: "Own-your-code app maker",
    tagline:
      "An AI-assisted app builder that gives you full ownership of the source code &mdash; no platform lock-in, no proprietary runtime, just clean exportable Next.js you can host anywhere.",
    status: "In development",
    year: "2026",
    category: ["AI", "SaaS"],
    externalHref: "https://virex.build",
    externalLabel: "virex.build",
    meta: {
      role: "Founder, sole developer",
      timeline: "In active development",
      client: "Internal product",
    },
    problem:
      "Most AI app builders trap you. The output runs on their platform, in their proprietary stack, behind their pricing curve. The moment your project gets serious, you can't take the code with you. We thought that was backwards.",
    approach: [
      {
        title: "You own the code",
        body: "Every project on VIREX exports as a clean, conventional Next.js + TypeScript codebase. Push it to your own GitHub, host it on your own Vercel, hand it to your own developer. No runtime lock-in, no proprietary build step.",
      },
      {
        title: "AI as a builder, not a black box",
        body: "The assistant proposes diffs against the actual repo. You see what changes before they're applied, you approve commit-by-commit. The AI is a collaborator, not a sealed product.",
      },
      {
        title: "Production-grade defaults",
        body: "Auth, billing, database schema, deploys &mdash; the baseline every serious app needs &mdash; are wired in from the first prompt. Not a toy preview, a real app.",
      },
      {
        title: "Built for builders",
        body: "Designed for makers who want AI velocity without giving up control. The output is code you'd actually ship, in a stack you'd actually pick.",
      },
    ],
    outcome: [
      { label: "Status", value: "Active dev" },
      { label: "Target launch", value: "2026" },
      { label: "Domain", value: "virex.build" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "Supabase",
      "OpenAI",
      "Claude",
      "Stripe",
      "Vercel",
      "Cloudflare",
    ],
    highlights: [
      "Code exported as clean Next.js + TypeScript",
      "Diff-based AI editing with explicit approval",
      "Production-grade defaults baked in",
      "No runtime lock-in &mdash; host where you want",
    ],
    images: [
      { src: "/virex-landing.png", alt: "VIREX landing page and live demo" },
      { src: "/virex-build-in-progress.png", alt: "VIREX in the middle of building an app" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}
