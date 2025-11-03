import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="container-narrow py-16">
      <h1 className="text-3xl">Contact</h1>
      <p className="muted mt-3 max-w-2xl">
        Klaar om te starten? Mail ons direct of plan een korte intake.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Stuur een bericht</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Naam" />
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Onderwerp" />
            <textarea className="h-28 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/50 p-3 text-sm" placeholder="Bericht" />
            <Button className="w-full">Verstuur</Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Direct</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <a className="underline" href="mailto:hello@civicaisolutions.io">hello@civicaisolutions.io</a>
            <div>Boek een call: <a className="underline" href="https://cal.com/" target="_blank">cal.com</a></div>
            <p className="muted">Reactie binnen 24 uur op werkdagen.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
