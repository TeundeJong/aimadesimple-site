export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
        We implement AI support bots, document analysis, and business automations.
        Get in touch to tailor a solution for your stack.
      </p>

      <ul className="mt-8 space-y-3 text-slate-700 dark:text-slate-200 list-disc pl-6">
        <li>AI Support Bot — trained on your data (FAQ, docs, CRM), action-capable via APIs.</li>
        <li>Document Analyzer — risks, summaries and action items for contracts and manuals.</li>
        <li>Automations — Zapier/Make, Slack, email, WhatsApp, CMS and custom webhooks.</li>
      </ul>

      <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        Every service can be customized and deployed under your own brand or as a managed CivicAI solution.
      </p>
    </main>
  );
}
