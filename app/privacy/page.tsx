import Section from "@/components/Section";
import Card from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main>
      <Section
        title="Privacy"
        subtitle="High-level privacy statement for the CivicAI Solutions holding-company website. Product-specific privacy terms may exist on individual product sites."
      >
        <Card className="p-6 md:p-8">
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold">Website data</h3>
              <p className="mt-2 text-sm text-slate-600">
                We collect only minimal information required to operate this website. If you submit the contact form, we
                receive the details you provide (name, email, company, and message) in order to respond to your inquiry.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Third-party services</h3>
              <p className="mt-2 text-sm text-slate-600">
                This website uses third-party infrastructure providers (e.g., hosting and email delivery) strictly to
                operate the site and respond to business inquiries.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Business inquiries</h3>
              <p className="mt-2 text-sm text-slate-600">
                We use inquiry data only for communication and follow-up related to your request. We do not sell personal
                information.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-slate-600">
                If you have questions about privacy, please contact CivicAI via the contact page.
              </p>
            </section>
          </div>
        </Card>
      </Section>
    </main>
  );
}
