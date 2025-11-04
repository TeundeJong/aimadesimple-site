export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Over mij / ons</h1>
      <p className="mt-3 text-slate-600">
        Ik ben Teun de Jong. Met CivicAI Solutions bouw ik productie-klare AI-oplossingen die
        direct waarde leveren: support-bots, documentanalyse en automatisering.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold">Wat we doen</h2>
        <p className="mt-2 text-slate-600">
          We koppelen AI veilig aan je bestaande systemen en processen, met heldere doelen en
          meetbare resultaten. Binnen dagen live, met support.
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold">Visie</h2>
        <p className="mt-2 text-slate-600">
          AI hoort praktische beslissingen makkelijker te maken. Onze focus: betrouwbaarheid,
          privacy en echte impact op operatie en omzet.
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold">Toekomst</h2>
        <p className="mt-2 text-slate-600">
          We bouwen door aan modulaire producten en integraties. Roadmap en pilots op aanvraag
          — zonder gevoelige details publiek te maken.
        </p>
      </div>
    </main>
  );
}
