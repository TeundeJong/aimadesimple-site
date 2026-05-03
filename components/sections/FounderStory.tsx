import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        {/* Visual column */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-edge-soft bg-canvas-elevated">
            <Image
              src="/tj-portrait-1.jpeg"
              alt="Teun de Jong, founder of CivicAI Solutions"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas-base/95 via-canvas-base/40 to-transparent p-6 pt-16">
              <div className="font-display text-2xl font-medium tracking-tight text-ink-primary">
                Teun de Jong
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
                Founder &middot; CivicAI Solutions
              </div>
            </div>
          </div>

          {/* Stat callout */}
          <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-edge-soft bg-edge-soft">
            {[
              { v: "NL", l: "Born & trained" },
              { v: "AU", l: "Based since 2019" },
              { v: "EN/NL", l: "Languages" },
            ].map((s) => (
              <div key={s.l} className="bg-canvas-base p-4">
                <div className="font-display text-base font-medium text-ink-primary">
                  {s.v}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body column */}
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-gold" />
            The story
          </div>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Built things with my hands.{" "}
            <span className="text-gradient-gold">Now I build them in code.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
            <p>
              I trained as a carpenter in the Netherlands and ran my own
              carpentry business there for years. The trade taught me how to
              read drawings, plan a sequence, and finish a job properly &mdash;
              the same discipline I now bring to software.
            </p>
            <p>
              For roughly ten years, in parallel with the trade, I&apos;ve been
              building apps and SaaS in my evenings and weekends. Self-taught,
              shipped end-to-end, on real stacks. Eventually the side work
              outgrew the day job.
            </p>
            <p>
              I moved to Australia in 2019 and kept the same pattern &mdash;
              trade work by day, code by night &mdash; until I went full-time
              on software in 2023, after completing the Google IT Support
              certificate. CivicAI Solutions Pty Ltd was registered that same
              year.
            </p>
            <p>
              Today I build websites, web apps, AI integrations, and mobile
              apps for clients. Mobile work runs on the same toolkit &mdash;
              React Native and Expo on top of the web stack we already know.
              CivicAI is small on purpose; that&apos;s how the work stays good.
            </p>
          </div>

          <div className="mt-10 inline-flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-edge-soft pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
            <span>Coffs Harbour, AU</span>
            <span>&middot;</span>
            <span>Available globally</span>
            <span>&middot;</span>
            <span>Speaks EN &amp; NL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
