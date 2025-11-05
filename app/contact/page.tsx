"use client";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main>
      <Section title="Contact" subtitle="Plan een intake of stel je vraag — meestal binnen 1 werkdag reactie.">
        <Card className="p-6 mx-auto max-w-2xl">
          <form
            action="https://formspree.io/f/xxxxxxxx" method="POST"
            className="grid gap-4"
          >
            <label className="grid gap-1">
              <span className="text-sm font-medium text-slate-700">Naam</span>
              <input name="name" required className="rounded-xl border border-slate-300 px-3 py-2 bg-white" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium text-slate-700">E-mail</span>
              <input type="email" name="email" required className="rounded-xl border border-slate-300 px-3 py-2 bg-white" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium text-slate-700">Bericht</span>
              <textarea rows={5} name="message" className="rounded-xl border border-slate-300 px-3 py-2 bg-white" />
            </label>
            <Button className="justify-self-start">Verstuur</Button>
          </form>
        </Card>
      </Section>
    </main>
  );
}
