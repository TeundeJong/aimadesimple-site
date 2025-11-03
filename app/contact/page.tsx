export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
        Questions or ready to start? Email us directly or book a short intake to discuss your use case.
      </p>

      <div className="mt-6 flex gap-4 flex-wrap">
        <a
          href="mailto:hello@civicaisolutions.io"
          className="inline-flex items-center px-4 py-2 rounded-2xl text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Email us
        </a>
        <a
          href="https://cal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-2xl text-sm font-medium border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          Book a call
        </a>
      </div>

      <p className="mt-10 text-xs text-slate-500 dark:text-slate-400">
        You can expect a reply within 24 hours on business days.
      </p>
    </main>
  );
}
