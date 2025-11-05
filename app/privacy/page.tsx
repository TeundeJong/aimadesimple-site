"use client";
export const metadata = {
  title: "Privacy — CivicAI Solutions",
  description: "We respect your privacy. This page explains what we collect and how we use it.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[60vh] container mx-auto px-4 py-16 text-slate-800 dark:text-slate-100">
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl">
        We respect your privacy. This policy explains what data we collect, how we use it, and your choices.
      </p>

      <section className="mt-10 space-y-3 text-slate-700 dark:text-slate-200 max-w-3xl">
        <h2 className="text-xl font-semibold">1) What we collect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Contact details</strong> you share (e.g., email for demo links or intake).</li>
          <li><strong>Uploaded content</strong> for analysis (processed only to deliver the service).</li>
          <li><strong>Technical data</strong> like pages visited and device/browser (to improve performance).</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3 text-slate-700 dark:text-slate-200 max-w-3xl">
        <h2 className="text-xl font-semibold">2) How we use your data</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>To provide demos, support, and the services you request.</li>
          <li>To improve quality, reliability, and security of our systems.</li>
          <li>To communicate important updates about your project or account.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3 text-slate-700 dark:text-slate-200 max-w-3xl">
        <h2 className="text-xl font-semibold">3) Data ownership & retention</h2>
        <p>
          You retain ownership of your content. We do not use your data to train
          foundation models outside your project scope. Uploaded files are removed or anonymized after
          project completion unless you request retention for support or improvements.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700 dark:text-slate-2 00 max-w-3xl">
        <h2 className="text-xl font-semibold">4) Security</h2>
        <p>
          We apply reasonable technical and organizational measures (access control, logging, encryption-in-transit)
          to protect data. No method is 100% secure; contact us if you need stricter controls (e.g., on-prem or regional hosting).
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700 dark:text-slate-200 max-w-3xl">
        <h2 className="text-xl font-semibold">5) Your choices</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Request access, correction, or deletion of your data.</li>
          <li>Ask for regional hosting or self-hosted deployments.</li>
          <li>Opt out of non-essential analytics.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3 text-slate-700 dark:text-slate-200 max-w-3xl">
        <h2 className="text-xl font-semibold">6) Cookies & analytics</h2>
        <p>
          We use minimal, privacy-friendly analytics. If we add marketing cookies in the future,
          we will update this page and request consent where required.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-slate-700 dark:text-slate-200 max-w-3xl">
        <h2 className="text-xl font-semibold">7) Contact</h2>
        <p>
          Questions or requests? Email <a className="underline" href="mailto:hello@civicaisolutions.io">hello@civicaisolutions.io</a>.
        </p>
      </section>

      <p className="mt-10 text-xs text-slate-500 dark:text-slate-400">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>
    </main>
  );
}
