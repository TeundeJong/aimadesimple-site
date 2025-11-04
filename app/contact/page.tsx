import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 text-slate-600">
          Plan een intake of stel je vraag. We reageren meestal binnen één werkdag.
        </p>

        <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <form
            action="https://formspree.io/f/xbjnnnnn" /* vervang door je eigen handler of mailto */
            method="POST"
            className="grid gap-4"
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
              <textarea name="message" rows={5} className="rounded-lg border border-slate-300 px-3 py-2" />
            </label>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Verstuur</Button>
          </form>

          <div className="mt-6 text-sm text-slate-600">
            Liever mailen? <a href="mailto:hello@civicaisolutions.io" className="text-blue-600 hover:underline">hello@civicaisolutions.io</a>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/pricing" className="text-blue-600 hover:underline">Bekijk prijzen</Link>
        </div>
      </section>
    </main>
  );
}
