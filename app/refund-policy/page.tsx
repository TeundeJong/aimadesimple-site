import Section from "@/components/Section";
import Card from "@/components/ui/card";

export default function RefundPolicyPage() {
  return (
    <main>
      <Section
        title="Refund policy"
        subtitle="Professional, plain-language refund policy for CivicAI Solutions. Product-specific terms may vary."
      >
        <Card className="p-6 md:p-8">
          <div className="space-y-6 text-sm text-slate-600">
            <p>
              Unless explicitly agreed in writing for a specific engagement or product, CivicAI Solutions Pty Ltd does not provide refunds.
            </p>
            <p>
              Our work involves setup, configuration, and ongoing operational delivery. Once a service period begins, costs are incurred to deliver and
              maintain systems, which makes refunds impractical.
            </p>
            <p>
              If you believe you have been billed incorrectly, please contact us and we will investigate promptly.
            </p>
          </div>
        </Card>
      </Section>
    </main>
  );
}
