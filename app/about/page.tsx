import Section from "@/components/Section";
import Card from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main>
      <Section
        title="About CivicAI"
        subtitle="CivicAI Solutions Pty Ltd is a holding company building a portfolio of focused AI platforms. We operate with an enterprise mindset: reliability, security, measurable outcomes, and long-term scalability."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">What we are</h2>
            <p className="mt-3 text-slate-600">
              CivicAI is not a freelance consultancy and not a traditional agency. We build repeatable AI modules and
              SaaS products that can be deployed, maintained, and scaled across markets.
            </p>

            <h3 className="mt-8 text-lg font-semibold">What problems we solve</h3>
            <p className="mt-3 text-slate-600">
              Businesses lose time and money on slow communication, manual document work, and fragmented workflows.
              CivicAI ships systems that reduce operational load, standardise quality, and unlock faster decisions.
            </p>

            <h3 className="mt-8 text-lg font-semibold">How we work</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Practical AI",
                  desc: "Built around real operations—not demos. We design for reliability and daily usage.",
                },
                {
                  title: "ROI-driven",
                  desc: "We focus on measurable outcomes: response times, conversion, workload reduction, and throughput.",
                },
                {
                  title: "Security-minded",
                  desc: "Privacy-first patterns and guardrails. No gimmicks—just controlled systems.",
                },
                {
                  title: "Scalable architecture",
                  desc: "Modules and products designed to be maintained, extended, and rolled out across markets.",
                },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="font-semibold">{x.title}</div>
                  <div className="mt-2 text-sm text-slate-600">{x.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-xs text-teal-700">Global focus</div>
            <h3 className="mt-2 text-xl font-semibold">Australia + Europe</h3>
            <p className="mt-2 text-sm text-slate-600">
              CivicAI operates across markets with a practical approach to international rollout. We build products with
              localization, operational constraints, and compliance realities in mind.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-sm font-semibold">Long-term vision</div>
              <p className="mt-2 text-sm text-slate-600">
                A portfolio of enterprise-grade AI platforms—each focused on a clear business domain and designed to
                scale.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
