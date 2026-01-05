"use client";

import * as React from "react";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

export default function ContactPage() {
  const [status, setStatus] = React.useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
    };

    setStatus({ state: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as any;

      if (!res.ok || !data?.ok) {
        const msg = typeof data?.error === "string" ? data.error : "Unable to send message. Please try again.";
        setStatus({ state: "error", message: msg });
        return;
      }

      setStatus({ state: "success" });
      form.reset();
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <main>
      <Section
        title="Contact"
        subtitle="Business inquiries only. Share your use case and relevant context—our team will respond as soon as possible."
      >
        <Card className="mx-auto max-w-2xl p-6 md:p-8">
          {status.state === "success" ? (
            <div className="space-y-3">
              <div className="text-lg font-semibold">Message sent</div>
              <p className="text-sm text-slate-600">
                Thanks—your message was delivered. If it is urgent, please include your preferred contact channel and time zone.
              </p>
              <div className="pt-2">
                <Button onClick={() => setStatus({ state: "idle" })} variant="outline">
                  Send another message
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-1">
                <label className="text-sm font-medium">Full name</label>
                <Input name="name" required placeholder="Your name" autoComplete="name" />
              </div>

              <div className="grid gap-1">
                <label className="text-sm font-medium">Business email</label>
                <Input type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
              </div>

              <div className="grid gap-1">
                <label className="text-sm font-medium">Company</label>
                <Input name="company" placeholder="Company name (optional)" autoComplete="organization" />
              </div>

              <div className="grid gap-1">
                <label className="text-sm font-medium">Message</label>
                <Textarea name="message" rows={6} placeholder="Tell us what you want to build or improve..." required />
              </div>

              {status.state === "error" && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">
                  {status.message}
                </div>
              )}

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you confirm you have authority to send this inquiry and the details are accurate.
                </p>
                <Button type="submit" disabled={status.state === "submitting"}>
                  {status.state === "submitting" ? "Sending…" : "Send inquiry"}
                </Button>
              </div>
            </form>
          )}
        </Card>
      </Section>
    </main>
  );
}
