"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Website",
  "Web app / SaaS",
  "AI integration",
  "Maintenance / care",
  "Not sure yet",
] as const;

const BUDGET_RANGES = [
  "Under $5k AUD",
  "$5k – $15k AUD",
  "$15k – $40k AUD",
  "$40k+ AUD",
  "Not sure yet",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const projectType = String(fd.get("projectType") || "").trim();
    const budget = String(fd.get("budget") || "").trim();
    const messageRaw = String(fd.get("message") || "").trim();

    const message = [
      projectType ? `Project type: ${projectType}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      messageRaw,
    ]
      .filter((l) => l !== null)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: projectType,
          message,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-success/30 bg-canvas-elevated p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-success/40 bg-success/10 text-success">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink-primary">
          Message received.
        </h3>
        <p className="mt-3 text-base text-ink-secondary">
          Thanks. We&apos;ll come back to you with a written reply within 48
          hours. A confirmation copy has been sent to your inbox.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-edge-strong bg-canvas-base px-4 py-3 text-base text-ink-primary placeholder:text-ink-tertiary focus:border-accent-teal/60 focus:outline-none focus:ring-4 focus:ring-accent-teal/10";
  const labelClass =
    "mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            minLength={2}
            placeholder="Jane Doe"
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-project" className={labelClass}>
            Project type
          </label>
          <select
            id="cf-project"
            name="projectType"
            defaultValue=""
            required
            className={cn(inputClass, "appearance-none pr-10")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {PROJECT_TYPES.map((p) => (
              <option key={p} value={p} className="bg-canvas-base">
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className={labelClass}>
            Budget range
          </label>
          <select
            id="cf-budget"
            name="budget"
            defaultValue=""
            required
            className={cn(inputClass, "appearance-none pr-10")}
          >
            <option value="" disabled>
              Choose one
            </option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b} className="bg-canvas-base">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Tell us what you&apos;re building
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={10}
          rows={6}
          placeholder="A short brief is enough — what the project is, who it's for, when you'd like it shipped."
          className={cn(inputClass, "resize-y")}
        />
      </div>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
        >
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
          Business inquiries only &middot; we don&apos;t cold-pitch
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent-gold px-6 py-3.5 text-sm font-medium text-canvas-base transition-all duration-200 hover:bg-accent-gold-hi hover:shadow-[0_0_0_4px_rgba(212,165,116,0.12)] disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send brief"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
