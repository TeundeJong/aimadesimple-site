import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <main className="container-narrow py-16">
      <h1 className="text-3xl">Services</h1>
      <p className="muted mt-3 max-w-2xl">
        Implementaties met korte doorlooptijd. We leveren werkende AI die waarde oplevert—geen labprojecten.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>AI Support Bot</CardTitle></CardHeader>
          <CardContent className="muted space-y-2 text-sm">
            <p>Train op je helpcentrum, CRM en logs. Integreert met tickets/orders.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Retrieval + acties via API’s</li>
              <li>Hand-offs naar mens</li>
              <li>Analytics & verbeterloops</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Document Analyzer</CardTitle></CardHeader>
          <CardContent className="muted space-y-2 text-sm">
            <p>Contracten, handleidingen en rapporten met risico’s en samenvattingen.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Risico/actie-extractie</li>
              <li>Juridische highlights</li>
              <li>Export naar PDF/CSV</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Automations & Integraties</CardTitle></CardHeader>
          <CardContent className="muted space-y-2 text-sm">
            <p>Workflows over Slack, e-mail, Zapier/Make en webhooks.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sales & onboarding</li>
              <li>Ops & monitoring</li>
              <li>Self-serve portals</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Advisory / Roadmap</CardTitle></CardHeader>
          <CardContent className="muted space-y-2 text-sm">
            <p>Van quick wins naar schaalbare roadmap en governance.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Security & privacy</li>
              <li>Adoptie & training</li>
              <li>MRR-modellen</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
