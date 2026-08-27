"use client";

import { FormEvent, useState } from "react";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const serviceOptions = [
  "Managed IT",
  "Cybersecurity",
  "Structured Cabling",
  "Cameras & Access Control",
  "Microsoft 365 & Cloud",
  "Networking",
  "Business Communications",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "We couldn’t send your message.");

      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We couldn’t send your message.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[470px] flex-col items-center justify-center rounded-3xl bg-white p-8 text-center text-mission-ink shadow-2xl">
        <CheckCircleIcon className="h-16 w-16 text-mission-gold" />
        <h3 className="mt-5 text-3xl font-black">Message received.</h3>
        <p className="mt-3 max-w-md leading-7 text-slate-600">Thanks for reaching out. A member of the Mission team will follow up soon.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-7 font-bold text-mission-navy hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 text-mission-ink shadow-2xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold">
          Name <span className="text-red-600">*</span>
          <input name="name" required maxLength={100} autoComplete="name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-medium outline-none transition focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15" />
        </label>
        <label className="block text-sm font-bold">
          Company
          <input name="company" maxLength={120} autoComplete="organization" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-medium outline-none transition focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15" />
        </label>
        <label className="block text-sm font-bold">
          Work email <span className="text-red-600">*</span>
          <input name="email" type="email" required maxLength={160} autoComplete="email" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-medium outline-none transition focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15" />
        </label>
        <label className="block text-sm font-bold">
          Phone
          <input name="phone" type="tel" maxLength={40} autoComplete="tel" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-medium outline-none transition focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15" />
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold">
        What can we help with? <span className="text-red-600">*</span>
        <select name="service" required defaultValue="" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium outline-none transition focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15">
          <option value="" disabled>Select a service</option>
          {serviceOptions.map((service) => <option key={service}>{service}</option>)}
        </select>
      </label>

      <label className="mt-5 block text-sm font-bold">
        Tell us a little about your needs <span className="text-red-600">*</span>
        <textarea name="message" required maxLength={3000} rows={5} className="mt-2 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 font-medium outline-none transition focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15" />
      </label>

      <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {status === "error" && <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error} You can also call (765) 245-8515.</p>}

      <button disabled={status === "sending"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink transition hover:brightness-105 disabled:cursor-wait disabled:opacity-70">
        {status === "sending" ? "Sending…" : "Send to Mission"} <ArrowRightIcon className="h-4 w-4" />
      </button>
      <p className="mt-4 text-center text-xs leading-5 text-slate-500">Your information is sent securely to the Mission sales team and is not displayed publicly.</p>
    </form>
  );
}
