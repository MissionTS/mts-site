"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const sections = [
  {
    title: "1. Understand what the policy actually says",
    intro: "Use your current policy and renewal documents. Coverage depends on the wording, endorsements, limits, exclusions, and facts of a claim.",
    items: [
      "Confirm the named organization, subsidiaries, locations, and covered business activities are accurate.",
      "Record the policy limit, retention or deductible, waiting period, and any sublimits that apply to key events.",
      "Ask your broker how the policy treats ransomware, business interruption, system failure, social engineering, and funds-transfer fraud.",
      "Identify exclusions or conditions tied to unsupported systems, unpatched vulnerabilities, prior incidents, or security controls.",
      "Confirm how third-party providers, cloud services, and dependent vendors are treated if their outage affects your operations.",
      "Write down notification deadlines, the carrier's incident hotline, approved response providers, and any consent requirements.",
    ],
  },
  {
    title: "2. Verify the security controls you reported",
    intro: "Application answers should describe the environment as it exists today. Do not assume a tool is deployed everywhere because it appears on a quote or project plan.",
    items: [
      "Check multifactor authentication coverage for email, remote access, administrators, and other systems that store sensitive information.",
      "Confirm endpoint protection is installed, active, and monitored on the computers and servers in scope.",
      "Review patching practices for operating systems, business applications, firewalls, and internet-facing devices.",
      "Confirm backups cover the systems and data the business needs, with protected copies and retention that fit recovery needs.",
      "Restore sample files or systems and record when the test occurred, what was restored, and any gaps found.",
      "Review privileged accounts, remote access, service accounts, and vendor access; remove access that is no longer needed.",
      "Check email protections, payment-change verification, security awareness, encryption, and incident reporting procedures.",
    ],
  },
  {
    title: "3. Gather evidence before the application is due",
    intro: "A small evidence folder makes it easier to answer questions accurately and explain what is in place.",
    items: [
      "Current inventory of users, devices, servers, major applications, cloud services, and business locations.",
      "A simple map of where sensitive or regulated information is stored and which vendors can access it.",
      "Reports or screenshots showing MFA, endpoint protection, patch status, email security, and backup coverage.",
      "Recent backup restore results, incident response exercises, vulnerability reviews, or penetration test summaries, if available.",
      "Written security, access-control, backup, incident response, and employee onboarding/offboarding procedures.",
      "A list of known gaps, compensating safeguards, planned remediation, owners, and target dates.",
    ],
  },
  {
    title: "4. Prepare for a claim before an incident",
    intro: "When something happens, teams may need to move quickly while protecting evidence and following policy conditions.",
    items: [
      "Keep the insurer and broker contact details available somewhere other than company email or file storage.",
      "Know who can authorize an incident response provider, legal counsel, forensic work, and urgent business decisions.",
      "Confirm which vendors must be approved by the insurer before work begins or costs are incurred.",
      "Document how to preserve relevant logs, messages, devices, and backup records without disrupting investigation.",
      "Define who communicates with employees, customers, regulators, law enforcement, and the insurer, with counsel guiding legal notices.",
      "Practice an incident scenario so leadership knows how to report a suspected event and reach the right people.",
    ],
  },
  {
    title: "5. Start renewal preparation early",
    intro: "A renewal is a good point to reconcile application statements with actual practice and assign owners to changes.",
    items: [
      "Start well before the renewal date so there is time to investigate questions and close realistic gaps.",
      "Compare this year's application with last year's answers and explain material changes.",
      "Ask your broker to clarify ambiguous questions, coverage changes, exclusions, and endorsements before binding.",
      "Prioritize improvements by business risk and insurer requirements; document what is complete and what remains open.",
      "Review whether limits, retentions, business interruption periods, and dependent-provider coverage still fit the business.",
      "Set a recurring owner and review date for controls that must stay in place throughout the policy term.",
    ],
  },
];

const allItems = sections.flatMap((section) => section.items);

export function CyberInsuranceChecklist() {
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState<Record<number, boolean>>({});
  const doneCount = useMemo(() => Object.values(completed).filter(Boolean).length, [completed]);

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
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Get ready for your cyber insurance conversation.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Use this practical checklist to review the policy, verify the controls you report, organize supporting evidence, and prepare your team for renewal or a claim.</p>
            <p className="mt-5 text-sm font-semibold text-slate-400">Designed for small and midsize businesses and practices. Allow about 20 minutes for a first review.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl backdrop-blur sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-mission-gold">What you will review</p>
            <ul className="mt-5 space-y-3 text-slate-200">
              {["Policy terms and common coverage questions", "Security controls and application accuracy", "Evidence to gather before renewal", "Incident and claim readiness", "A short action plan for next steps"].map((item) => <li key={item} className="flex gap-3"><CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-mission-gold" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {!unlocked ? (
        <section className="bg-mission-mist px-6 py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Open the checklist</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-mission-ink">A clearer renewal starts with knowing what is in place.</h2>
              <p className="mt-5 leading-7 text-slate-600">Enter your contact details to open the checklist. You can work through it on screen, mark items as you go, or print it and save a PDF for your records.</p>
              <p className="mt-4 text-sm leading-6 text-slate-500">This is an educational planning aid. It does not determine eligibility, guarantee coverage, or replace advice from your insurance broker, carrier, attorney, or other qualified advisor. Policy terms and requirements vary.</p>
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
              <div><p className="text-sm font-extrabold uppercase tracking-[0.16em] text-mission-navy">Your checklist</p><h2 className="mt-2 text-2xl font-black text-mission-ink">{doneCount} of {allItems.length} items marked complete</h2><p className="mt-2 text-sm leading-6 text-slate-600">Mark what you have verified. Leave items unchecked when you need to confirm them.</p></div>
              <button type="button" onClick={() => window.print()} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-mission-navy px-5 py-3 font-extrabold text-white transition hover:bg-mission-ink"><ArrowDownTrayIcon className="h-5 w-5" /> Print / Save as PDF</button>
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
                    {["Owner", "Evidence to gather", "Target date"].map((label) => <label key={label} className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}<input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-normal normal-case tracking-normal text-slate-700 outline-none focus:border-mission-navy" /></label>)}
                  </div>
                </article>
              ))}
            </div>
            <section className="mt-8 rounded-3xl bg-mission-ink p-7 text-white sm:p-9">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-mission-gold">Turn gaps into a plan</p>
              <h3 className="mt-3 text-2xl font-black">Want help checking the technical side?</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">Mission can help inventory safeguards, gather technical evidence, test backup recovery, and organize remediation priorities. Your broker or carrier should confirm coverage and policy requirements.</p>
              <Link href="/#contact" className="no-print mt-6 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-5 py-3 font-extrabold text-mission-ink">Talk with Mission <ArrowRightIcon className="h-4 w-4" /></Link>
              <p className="print-only mt-4 text-sm text-slate-300">missionts.com · (765) 245-8515 · sales@missionts.com</p>
            </section>
            <p className="mt-6 text-xs leading-5 text-slate-500">This checklist is general educational information and is not insurance, legal, or compliance advice. It does not guarantee a policy, a particular premium, or claim coverage. Review the actual policy and application with your licensed broker, carrier, and qualified legal advisors.</p>
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

