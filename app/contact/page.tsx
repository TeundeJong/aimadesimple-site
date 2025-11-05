// app/contact/page.tsx
"use client";
import Button from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-slate-600">Plan een intake of stel je vraag — meestal binnen 1 werkdag reactie.</p>

      <form
        action="https://formspree.io/f/xxxxxxxx"
        method="POST"
        className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
      >
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-700">Naam</span>
          <input name="name" required className="rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-700">E-mail</span>
          <input type="email" name="email" required className="rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-700">Bericht</span>
          <textarea rows={5} name="message" className="rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <Button className="justify-self-start">Verstuur</Button>
      </form>
    </main>
  );
}
