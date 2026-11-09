"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

type Section = { title: string; intro: string; items: string[] };

const sections: Section[] = [
  {
    title: "1. Know your coverage",
    intro: "Check the policy and ask your broker about anything unclear.",
    items: [
      "Is your business name and location correct?",
      "Do you know your limits and deductible?",
      "What events are covered—and excluded?",
      "Are vendor or cloud outages included?",
      "Who do you call, and how soon?",
    ],
  },
  {
    title: "2. Check your protections",
    intro: "Answer for what is in place today.",
    items: [
      "Is MFA on for email and remote access?",
      "Are devices protected and monitored?",
      "Are systems and apps kept up to date?",
      "Are backups protected and tested?",
      "Have unused accounts and vendor access been removed?",
      "Do staff verify payment or bank changes by phone?",
    ],
  },
  {
    title: "3. Gather a few records",
    intro: "Keep proof together so renewal questions are easier to answer.",
    items: [
      "List your devices, key apps, and cloud services.",
      "Save reports showing MFA, device protection, and backups.",
      "Record the last successful backup restore test.",
      "Keep your security and response plans handy.",
      "List open gaps, owners, and target dates.",
    ],
  },
  {
    title: "4. Be ready to respond",
    intro: "Know the first steps before an incident happens.",
    items: [
      "Keep insurer and broker numbers outside company email.",
      "Know who can approve emergency response costs.",
      "Check which vendors need insurer approval first.",
      "Know how to preserve devices and records.",
      "Practice who to call and what to report.",
    ],
  },
  {
    title: "5. Plan for renewal",
    intro: "Start early and make sure your answers still fit.",
    items: [
      "Start a few weeks before the due date.",
      "Compare this year's answers with last year's.",
      "Ask your broker about unclear questions or changes.",
      "Track improvements and who owns each one.",
      "Review limits and downtime coverage with your broker.",
    ],
  },
];

const allItems = sections.flatMap((section) => section.items);

export function CyberInsuranceChecklist() {
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState<Record<number, boolean>>({});
  const [sectionNotes, setSectionNotes] = useState<Record<number, { owner: string; evidence: string; date: string }>>({});
  const doneCount = useMemo(() => Object.values(completed).filter(Boolean).length, [completed]);

  function downloadAnswers() {
    const csvCell = (value: string | number | boolean) => `"${String(value).replaceAll('"', '""')}"`;
    const rows: (string | number | boolean)[][] = [["Section", "Question", "Complete", "Owner", "Notes / evidence", "Target date"]];
    let itemIndex = 0;
    sections.forEach((section, sectionIndex) => {
      const notes = sectionNotes[sectionIndex] || { owner: "", evidence: "", date: "" };
      section.items.forEach((item) => {
        rows.push([section.title, item, completed[itemIndex] ? "Yes" : "Not yet", notes.owner, notes.evidence, notes.date]);
        itemIndex += 1;
      });
    });
    const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(",")).join("\r\n")}`;
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "mission-cyber-insurance-readiness.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function unlockChecklist(event: FormEvent<HTMLFormElement>) {
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
      if (!response.ok) throw new Error(result.error || "We could not open the checklist right now.");
      setUnlocked(true);
      setStatus("idle");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not open the checklist right now.");
      setStatus("error");
    }
  }

  return (
    <>
      <section className="bg-mission-ink py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div>
            <Link href="/resources" className="text-sm font-bold text-slate-300 hover:text-mission-gold">← Back to the Knowledge Hub</Link>
            <p className="mt-10 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold"><ShieldCheckIcon className="h-5 w-5" /> Free business checklist</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Get ready for cyber insurance.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A simple checklist to review your coverage, security, and next steps.</p>
            <p className="mt-5 text-sm font-semibold text-slate-400">For small businesses and practices · About 10 minutes</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl backdrop-blur sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-mission-gold">What you will review</p>
            <ul className="mt-5 space-y-3 text-slate-200">
              {["Know your coverage", "Check your protections", "Gather key records", "Plan for an incident", "Get ready for renewal"].map((item) => <li key={item} className="flex gap-3"><CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-mission-gold" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {!unlocked ? (
        <section className="bg-mission-mist px-6 py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Free checklist</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-mission-ink">Know what to check. Know what to ask.</h2>
              <p className="mt-5 leading-7 text-slate-600">Enter your details to open it. Check items, add notes, then download your answers to share with Mission.</p>
              <p className="mt-4 text-sm leading-6 text-slate-500">Use this as a planning aid. Ask your broker about coverage and policy requirements.</p>
            </div>
            <form onSubmit={unlockChecklist} className="rounded-3xl bg-white p-6 text-mission-ink shadow-xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold">Name *<input name="name" required maxLength={100} autoComplete="name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-medium outline-none focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15" /></label>
                <label className="text-sm font-bold">Company or practice<input name="company" maxLength={120} autoComplete="organization" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-medium outline-none focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15" /></label>
              </div>
              <label className="mt-5 block text-sm font-bold">Work email *<input name="email" type="email" required maxLength={160} autoComplete="email" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-medium outline-none focus:border-mission-navy focus:ring-2 focus:ring-mission-navy/15" /></label>
              <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
              <input type="hidden" name="service" value="Cyber Insurance Readiness Checklist" />
              <input type="hidden" name="message" value="Requested access to the Cyber Insurance Readiness Checklist." />
              {status === "error" && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error} You can also call (765) 245-8515.</p>}
              <button type="submit" disabled={status === "sending"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink transition hover:brightness-105 disabled:opacity-60">{status === "sending" ? "Opening…" : "Open the free checklist"}<ArrowRightIcon className="h-4 w-4" /></button>
              <p className="mt-4 text-xs leading-5 text-slate-500">We use your details to provide this resource and respond to your request. No newsletter subscription is included.</p>
            </form>
          </div>
        </section>
      ) : (
        <section className="checklist-content bg-mission-mist px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="no-print mb-8 flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div><p className="text-sm font-extrabold uppercase tracking-[0.16em] text-mission-navy">Your checklist</p><h2 className="mt-2 text-2xl font-black text-mission-ink">{doneCount} of {allItems.length} complete</h2><p className="mt-2 text-sm leading-6 text-slate-600">Check what you’ve confirmed. Add notes for anything to follow up.</p></div>
              <div className="flex flex-col gap-3 sm:items-end"><button type="button" onClick={downloadAnswers} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-mission-navy px-5 py-3 font-extrabold text-white transition hover:bg-mission-ink"><ArrowDownTrayIcon className="h-5 w-5" /> Download answers (.csv)</button><button type="button" onClick={() => window.print()} className="text-sm font-bold text-mission-navy underline underline-offset-4">Print / Save as PDF</button></div>
            </div>
            <div className="print-only mb-8"><p className="text-sm font-bold uppercase tracking-wide">Mission Technology Solutions</p><h2 className="mt-2 text-3xl font-black">Cyber Insurance Readiness Checklist</h2><p className="mt-2">Use this planning aid with your insurance broker and technology team.</p></div>
            <div className="space-y-6">
              {sections.map((section, sectionIndex) => (
                <article key={section.title} className="break-inside-avoid rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="text-2xl font-black tracking-tight text-mission-ink">{section.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{section.intro}</p>
                  <ul className="mt-6 space-y-4">
                    {section.items.map((item, itemIndex) => {
                      const index = sections.slice(0, sectionIndex).reduce((total, value) => total + value.items.length, 0) + itemIndex;
                      const id = `insurance-check-${index}`;
                      return <li key={item} className="checklist-row flex items-start gap-3 border-t border-slate-100 pt-4">
                        <input id={id} type="checkbox" checked={Boolean(completed[index])} onChange={(event) => setCompleted((previous) => ({ ...previous, [index]: event.target.checked }))} className="mt-1 h-5 w-5 shrink-0 accent-[#d3a63b]" />
                        <label htmlFor={id} className="cursor-pointer leading-7 text-slate-700">{item}</label>
                      </li>;
                    })}
                  </ul>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {(["owner", "evidence", "date"] as const).map((field) => {
                      const label = field === "owner" ? "Owner" : field === "evidence" ? "Notes / evidence" : "Target date";
                      const value = sectionNotes[sectionIndex]?.[field] || "";
                      return <label key={field} className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}<input type={field === "date" ? "date" : "text"} value={value} onChange={(event) => setSectionNotes((previous) => ({ ...previous, [sectionIndex]: { owner: previous[sectionIndex]?.owner || "", evidence: previous[sectionIndex]?.evidence || "", date: previous[sectionIndex]?.date || "", [field]: event.target.value } }))} className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal normal-case tracking-normal text-slate-700 outline-none focus:border-mission-navy" /></label>;
                    })}
                  </div>
                </article>
              ))}
            </div>
            <section className="mt-8 rounded-3xl bg-mission-ink p-7 text-white sm:p-9">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-mission-gold">Need a hand?</p>
              <h3 className="mt-3 text-2xl font-black">We can help with the technical side.</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">Download your answers and send them to <a className="underline" href="mailto:sales@missionts.com">sales@missionts.com</a>. We can help review safeguards, backups, and open technical gaps. Your broker can advise on coverage.</p>
              <Link href="/#contact" className="no-print mt-6 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-5 py-3 font-extrabold text-mission-ink">Talk with Mission <ArrowRightIcon className="h-4 w-4" /></Link>
              <p className="print-only mt-4 text-sm text-slate-300">missionts.com · (765) 245-8515 · sales@missionts.com</p>
            </section>
            <p className="mt-6 text-xs leading-5 text-slate-500">This checklist is for planning only. It does not guarantee coverage or replace advice from your broker, carrier, or attorney.</p>
          </div>
        </section>
      )}
      <style jsx global>{`
        .print-only { display: none; }
        @media print {
          body { background: #fff !important; color: #17232e !important; }
          header, footer, .no-print { display: none !important; }
          .print-only { display: block !important; }
          .checklist-content { background: #fff !important; padding: 0 !important; }
          .checklist-content article, .checklist-content section { box-shadow: none !important; break-inside: avoid; }
          .checklist-content article { border: 1px solid #cbd5e1 !important; margin-bottom: 12pt !important; padding: 18pt !important; }
          .checklist-content h2, .checklist-content h3 { color: #17232e !important; }
          .checklist-content p, .checklist-content label { color: #334155 !important; }
          .checklist-content input:not([type="checkbox"]) { border: 1px solid #94a3b8 !important; min-height: 24pt; }
          .checklist-row { break-inside: avoid; }
          a { color: #17232e !important; text-decoration: none !important; }
          @page { margin: 0.55in; }
        }
      `}</style>
    </>
  );
}
