import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing</h1>
        <p className="mt-3 text-slate-600">Eerlijk en eenvoudig. Maandelijks opzegbaar.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border-slate-200 shadow-sm">
            <CardHeader><CardTitle>Starter</CardTitle></CardHeader>
            <CardContent className="text-slate-600 space-y-3">
              <p className="text-3xl font-bold">€29 <span className="text-base font-normal text-slate-500">/m</span></p>
              <ul className="list-disc pl-4">
                <li>Basic AI-bot</li>
                <li>100 documenten/maand</li>
                <li>E-mail support</li>
              </ul>
              <Link href="/contact"><Button className="mt-4 w-full">Start met Starter</Button></Link>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-slate-200 shadow-sm ring-2 ring-blue-600/10">
            <CardHeader><CardTitle>Pro</CardTitle></CardHeader>
            <CardContent className="text-slate-600 space-y-3">
              <p className="text-3xl font-bold">€59 <span className="text-base font-normal text-slate-500">/m</span></p>
              <ul className="list-disc pl-4">
                <li>Geavanceerde bot + acties</li>
                <li>Onbeperkt documenten</li>
                <li>Integraties & webhooks</li>
              </ul>
              <Link href="/contact"><Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">Kies Pro</Button></Link>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-slate-200 shadow-sm">
            <CardHeader><CardTitle>Enterprise</CardTitle></CardHeader>
            <CardContent className="text-slate-600 space-y-3">
              <p className="text-3xl font-bold">Op aanvraag</p>
              <ul className="list-disc pl-4">
                <li>SLA & SSO</li>
                <li>Dedicated support</li>
                <li>Custom security</li>
              </ul>
              <Link href="/contact"><Button variant="outline" className="mt-4 w-full">Contact sales</Button></Link>
            </CardContent>
          </Card>
        </div>

        <p className="mt-10 text-sm text-slate-500">Prijzen excl. btw. Enterprise: maatwerk & volume-korting.</p>
      </section>
    </main>
  );
}
