import { NextRequest } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

function isEmail(value: string): boolean {
  // Simple, robust email check (we still validate server-side)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(body: any): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid payload." };
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2) return { ok: false, error: "Please provide your name." };
  if (!isEmail(email)) return { ok: false, error: "Please provide a valid email address." };
  if (message.length < 10) return { ok: false, error: "Please include a short message (10+ characters)." };
  if (message.length > 5000) return { ok: false, error: "Message is too long." };

  return { ok: true, data: { name, email, company: company || undefined, message } };
}

async function sendPostmarkEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  textBody: string;
  htmlBody?: string;
  replyTo?: string;
}) {
  const res = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": params.apiKey,
    },
    body: JSON.stringify({
      From: params.from,
      To: params.to,
      Subject: params.subject,
      TextBody: params.textBody,
      HtmlBody: params.htmlBody,
      ReplyTo: params.replyTo,
      MessageStream: "outbound",
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Postmark request failed (${res.status}): ${text}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.POSTMARK_API_KEY;
    const fromContact = process.env.POSTMARK_FROM_CONTACT;
    const businessInbox = process.env.POSTMARK_FROM_AUTH || process.env.POSTMARK_FROM_CONTACT;

    if (!apiKey || !fromContact || !businessInbox) {
      return new Response(JSON.stringify({ ok: false, error: "Email delivery is not configured." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => null);
    const v = validate(body);
    if (!v.ok) {
      return new Response(JSON.stringify({ ok: false, error: v.error }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, email, company, message } = v.data;

    const internalSubject = `New inquiry — CivicAI Solutions (${name})`;
    const internalText = [
      "New website inquiry:",
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : undefined,
      "",
      "Message:",
      message,
      "",
      "---",
      "Submitted via civicai.solutions contact form.",
    ]
      .filter(Boolean)
      .join("\n");

    // (a) Internal notification
    await sendPostmarkEmail({
      apiKey,
      from: fromContact,
      to: businessInbox,
      subject: internalSubject,
      textBody: internalText,
      replyTo: email,
    });

    // (b) Optional confirmation email to the submitter
    const confirmSubject = "We received your message — CivicAI Solutions";
    const confirmText = [
      `Hi ${name},`,
      "",
      "Thanks for reaching out to CivicAI Solutions. We have received your message and will respond as soon as possible.",
      "",
      "For reference, here is a copy of your message:",
      "",
      message,
      "",
      "— CivicAI Solutions Pty Ltd",
    ].join("\n");

    await sendPostmarkEmail({
      apiKey,
      from: fromContact,
      to: email,
      subject: confirmSubject,
      textBody: confirmText,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Never leak internal errors to the client.
    return new Response(JSON.stringify({ ok: false, error: "Something went wrong. Please try again." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
