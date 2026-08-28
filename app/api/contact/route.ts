import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recentSubmissions = new Map<string, number>();

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const previousSubmission = recentSubmissions.get(forwardedFor) || 0;

  if (Date.now() - previousSubmission < 30_000) {
    return NextResponse.json({ error: "Please wait a moment before sending another message." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "The form submission was not valid." }, { status: 400 });
  }

  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const company = clean(body.company, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const service = clean(body.service, 100);
  const message = clean(body.message, 3000);

  if (!name || !EMAIL_PATTERN.test(email) || !service || !message) {
    return NextResponse.json({ error: "Please complete the required fields with a valid email address." }, { status: 400 });
  }

  const tenantId = process.env.M365_TENANT_ID;
  const clientId = process.env.M365_CLIENT_ID;
  const clientSecret = process.env.M365_CLIENT_SECRET;
  const sender = process.env.M365_SENDER_EMAIL || "sales@missionts.com";
  const recipient = process.env.CONTACT_TO_EMAIL || "sales@missionts.com";

  if (!tenantId || !clientId || !clientSecret) {
    console.error("Microsoft 365 contact form credentials are not configured.");
    return NextResponse.json({ error: "Online messaging is temporarily unavailable." }, { status: 503 });
  }

  try {
    const tokenResponse = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, scope: "https://graph.microsoft.com/.default", grant_type: "client_credentials" }),
      cache: "no-store",
    });

    if (!tokenResponse.ok) throw new Error(`Microsoft token request failed: ${tokenResponse.status}`);
    const token = await tokenResponse.json() as { access_token: string };
    const safe = { name: escapeHtml(name), company: escapeHtml(company || "Not provided"), email: escapeHtml(email), phone: escapeHtml(phone || "Not provided"), service: escapeHtml(service), message: escapeHtml(message).replace(/\n/g, "<br />") };

    const sendResponse = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token.access_token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: {
          subject: `Website inquiry: ${service} — ${name}`,
          body: { contentType: "HTML", content: `<h2>New Mission website inquiry</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Company:</strong> ${safe.company}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Service:</strong> ${safe.service}</p><p><strong>Message:</strong><br />${safe.message}</p>` },
          toRecipients: [{ emailAddress: { address: recipient } }],
          replyTo: [{ emailAddress: { address: email, name } }],
        },
        saveToSentItems: true,
      }),
      cache: "no-store",
    });

    if (!sendResponse.ok) throw new Error(`Microsoft sendMail request failed: ${sendResponse.status}`);

    const hubspotKey = process.env.HUBSPOT_SERVICE_KEY;
    if (hubspotKey) {
      const nameParts = name.split(/\s+/);
      const hubspotResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: { Authorization: `Bearer ${hubspotKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ properties: { email, firstname: nameParts[0], lastname: nameParts.slice(1).join(" "), company, phone } }),
        cache: "no-store",
      });
      if (!hubspotResponse.ok && hubspotResponse.status !== 409) console.error(`HubSpot contact sync failed: ${hubspotResponse.status}`);
    }

    recentSubmissions.set(forwardedFor, Date.now());
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return NextResponse.json({ error: "We couldn’t send your message right now." }, { status: 502 });
  }
}
