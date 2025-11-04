export default function ProductsPage() {
  const products = [
    { name: "CivicAI Support", from: "€99/m", blurb: "Conversational AI voor support met API-acties." },
    { name: "CivicAI Docs", from: "€79/m", blurb: "Contract- & handleiding-analyse met risico’s en actiepunten." },
    { name: "CivicAI Automate", from: "€129/m", blurb: "Workflow-automatisering en integraties." }
  ];
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Products</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">Kant-en-klare modules met duidelijke startprijzen.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-slate-600">{p.blurb}</p>
            <p className="mt-4 text-sm text-slate-500">Vanaf <b>{p.from}</b></p>
          </div>
        ))}
      </div>
    </main>
  );
}
