import Section from "@/components/Section";
import Card from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main>
      <Section
        title="Terms"
        subtitle="These terms apply to this CivicAI Solutions holding-company website. Product-specific terms may be provided by each product."
      >
        <Card className="p-6 md:p-8">
          <div className="space-y-8 text-sm text-slate-600">
            <section>
              <h3 className="text-lg font-semibold text-slate-900">General information</h3>
              <p className="mt-2">
                The information on this website is provided for general business information purposes only. It does not constitute legal, financial,
                or other professional advice. You should obtain professional advice tailored to your circumstances before acting on any information.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900">No warranties</h3>
              <p className="mt-2">
                We aim to keep the website accurate and up to date, however we make no representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, or availability of the website or its content.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900">Limitation of liability</h3>
              <p className="mt-2">
                To the maximum extent permitted by law, CivicAI Solutions Pty Ltd is not liable for any loss or damage arising out of or in connection
                with the use of this website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900">External links</h3>
              <p className="mt-2">
                This website may link to third-party websites. We do not control those websites and are not responsible for their content, practices,
                or availability.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900">Changes</h3>
              <p className="mt-2">
                We may update these terms from time to time. Continued use of the website after changes indicates acceptance of the updated terms.
              </p>
            </section>
          </div>
        </Card>
      </Section>
    </main>
  );
}
