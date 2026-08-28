"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon, CheckCircleIcon, LightBulbIcon, ShareIcon } from "@heroicons/react/24/outline";

type Guide = { category: string; title: string; intro: string; items: string[] };
type Section = { heading: string; body: string };

const articles: Record<string, { lead: string; sections: Section[]; takeaway: string }> = {
  "physical-security-cybersecurity": {
    lead: "Cybersecurity does not stop at the login screen. A stolen badge, unlocked network closet, or exposed camera controller can give an intruder a path to the same systems protected by passwords and firewalls.",
    sections: [
      { heading: "The physical attack surface", body: "Server rooms, wiring closets, laptops, printers, access controllers, and cameras all hold information or provide a route into the environment. If they are easy to reach, digital controls may be bypassed entirely." },
      { heading: "Connect the controls", body: "Physical security and cybersecurity work best together: access permissions should match identity roles, devices should be patched and monitored, and camera footage should support investigations when an account or facility is compromised." },
      { heading: "Make it part of the routine", body: "Review badge access, visitor processes, equipment locations, privacy zones, and incident contacts alongside MFA, endpoint security, and backups. The goal is one risk picture—not separate checklists owned by disconnected teams." },
    ],
    takeaway: "A secure organization protects the places, devices, people, and accounts that make its technology possible.",
  },
  "security-baseline": {
    lead: "A practical security baseline is the collection of everyday controls that makes a business harder to compromise and easier to recover. It is not a single product. It is a repeatable way to protect identities, devices, information, and operations.",
    sections: [
      { heading: "Start with identity", body: "Most business systems are reached through an account, so identity deserves first priority. Multifactor authentication, separate administrator accounts, sensible permissions, and prompt offboarding prevent one stolen password from becoming unrestricted access." },
      { heading: "Protect and maintain every endpoint", body: "Laptops and desktops should be encrypted, patched, monitored, and protected by modern endpoint detection. Consistency matters more than a perfect tool: unmanaged exceptions are where preventable incidents often begin." },
      { heading: "Prepare to recover", body: "Backups only become dependable after a successful restore test. Pair tested recovery with a written incident plan so people know who isolates a device, who contacts leadership, and how customers or partners are informed." },
    ],
    takeaway: "Security improves fastest when a short list of controls is owned, measured, and reviewed regularly.",
  },
  "microsoft-365-setup": {
    lead: "Microsoft 365 can be a clean, secure operating system for a business—or a maze of duplicate files, abandoned Teams, and confusing permissions. The difference is usually governance, not licensing.",
    sections: [
      { heading: "Give information a clear home", body: "Teams, SharePoint, and OneDrive solve different problems. Define where departmental files, collaborative work, and personal drafts belong so employees do not create a new storage pattern for every project." },
      { heading: "Design access intentionally", body: "Standardize multifactor authentication, guest access, sharing rules, and administrator roles. Access should follow the person’s job and device health rather than depending on someone remembering to remove permissions later." },
      { heading: "Make adoption part of the setup", body: "A technically correct environment still fails when users do not understand it. Short, role-based guidance for file sharing, Teams, mobile access, and suspicious-message reporting creates far more value than a long generic manual." },
    ],
    takeaway: "A calmer Microsoft 365 environment has clear ownership, predictable places for information, and security that follows the user.",
  },
  "proactive-it": {
    lead: "Proactive IT is the work that happens before someone submits a ticket. It reduces recurring problems, makes spending more predictable, and gives leadership a clearer view of risk and opportunity.",
    sections: [
      { heading: "Know what you support", body: "Accurate inventories, diagrams, warranty dates, vendor contacts, and account ownership turn troubleshooting into a process instead of a scavenger hunt. Documentation also prevents the business from depending on one person’s memory." },
      { heading: "Find patterns, not just tickets", body: "A good support team looks beyond resolution time. Repeated password resets, unstable wireless, and recurring application failures are signals that a permanent fix or training change is needed." },
      { heading: "Connect maintenance to a roadmap", body: "Patching and monitoring protect today. Lifecycle planning, budgeting, and quarterly priorities prepare for tomorrow. Both belong in a managed IT relationship." },
    ],
    takeaway: "The goal is not zero tickets. It is fewer surprises, faster recovery, and technology that supports the business plan.",
  },
  "physical-security": {
    lead: "Modern cameras and access control work best as one connected security layer. The design should begin with people, doors, workflows, and response expectations—not a catalog of devices.",
    sections: [
      { heading: "Design around real events", body: "Map entrances, deliveries, cash handling, sensitive areas, and after-hours activity. Each camera and controlled door should answer a specific operational or security question." },
      { heading: "Build the supporting infrastructure", body: "Camera quality depends on lighting, placement, bandwidth, PoE capacity, storage, and retention. Access control depends on reliable power, door hardware, credentials, schedules, and safe emergency behavior." },
      { heading: "Plan ownership and response", body: "Decide who can view footage, approve access, investigate alerts, and preserve evidence. Technology is only useful when the organization has a clear process for acting on what it reports." },
    ],
    takeaway: "A strong physical security system combines thoughtful coverage, reliable infrastructure, and an operating procedure people can follow.",
  },
  "network-closet": {
    lead: "The network closet is the physical center of nearly every digital service in a building. A clean, documented room saves support time, reduces outages, and makes future projects safer.",
    sections: [
      { heading: "Make every connection traceable", body: "Label both ends of cables, maintain a port map, and remove abandoned runs. Neat patching is not cosmetic; it lets technicians isolate problems without disconnecting the wrong system." },
      { heading: "Protect power and environment", body: "Switches, firewalls, and controllers need appropriate UPS capacity, cooling, grounding, and restricted physical access. Heat and poor power quietly shorten equipment life." },
      { heading: "Leave room for what comes next", body: "Document uplinks, VLANs, fiber, wireless, cameras, and rack capacity. Growth space and tested cabling prevent a routine expansion from becoming an emergency rebuild." },
    ],
    takeaway: "A healthy closet should be understandable to a qualified technician who has never seen it before.",
  },
  "90-day-plan": {
    lead: "A 90-day technology plan turns an overwhelming list into a small number of outcomes the business can actually finish. It is long enough to make meaningful progress and short enough to maintain urgency.",
    sections: [
      { heading: "Separate risk from irritation", body: "An unstable backup, exposed administrator account, or unsupported server deserves different treatment than a slow printer. Rank issues by business impact, likelihood, and recovery difficulty." },
      { heading: "Choose three measurable outcomes", body: "Limit the quarter to a few priorities such as enabling MFA, replacing an aging firewall, or documenting recovery. Give each outcome an owner, budget range, and definition of done." },
      { heading: "Review and reset", body: "At the end of the period, measure what changed, capture new risks, and move unfinished work deliberately. A roadmap is useful because it evolves—not because the first version was perfect." },
    ],
    takeaway: "A credible plan explains what happens now, what waits, who owns it, and why that order makes sense.",
  },
  "intune-business": {
    lead: "Microsoft Intune gives a business a consistent way to configure, secure, and support devices wherever employees work. It replaces one-off setup decisions with policies that can be measured and repeated.",
    sections: [
      { heading: "Make device health visible", body: "Enrollment creates an inventory of ownership, operating system, encryption, updates, and compliance. IT can see which devices meet expectations instead of relying on assumptions." },
      { heading: "Apply standards consistently", body: "Intune can enforce screen locks, encryption, update policies, approved applications, and security settings. New devices receive the same baseline without a technician rebuilding the process by hand." },
      { heading: "Connect devices to identity", body: "Combined with Entra ID and conditional access, Intune can restrict sensitive resources when a device is outdated, unencrypted, or otherwise risky. This is especially valuable for hybrid work and mobile access." },
    ],
    takeaway: "Intune matters because it turns device management into an enforceable business policy rather than a collection of best intentions.",
  },
  "more-than-helpdesk": {
    lead: "A helpdesk solves visible problems. A strong IT firm also works on the less visible systems that prevent those problems, protect the organization, and help leadership plan.",
    sections: [
      { heading: "Support is the front door", body: "Fast, thoughtful user support matters, but ticket resolution is only one measure. The provider should also review patterns, improve documentation, manage vendors, and remove recurring sources of frustration." },
      { heading: "Prevention is part of the service", body: "Monitoring, patching, backups, identity controls, lifecycle management, and incident preparation reduce the number and severity of emergencies. These activities should be scheduled and reported—not performed only after a failure." },
      { heading: "Strategy connects IT to the business", body: "Roadmap meetings should translate technical issues into timing, cost, risk, and business outcomes. The goal is to help leadership make informed decisions before a renewal, expansion, or crisis forces the issue." },
    ],
    takeaway: "The right IT firm supports users today while steadily improving the environment they will depend on tomorrow.",
  },
  "edr-and-mdr": {
    lead: "EDR and MDR are related security layers. EDR provides the technology that records and responds to suspicious endpoint behavior. MDR adds people who monitor those signals, investigate them, and help contain real threats.",
    sections: [
      { heading: "What EDR sees", body: "Endpoint detection and response watches processes, files, logins, network connections, and behavior on supported devices. It can block known threats and isolate a machine when activity looks dangerous." },
      { heading: "What MDR adds", body: "A detection tool can produce more alerts than a small team can evaluate. Managed detection and response adds security analysts, escalation procedures, threat hunting, and human judgment around what requires action." },
      { heading: "Why both need a response plan", body: "Detection is not recovery. The business still needs clear authority to isolate devices, reset accounts, communicate internally, involve legal or insurance resources, and restore operations." },
    ],
    takeaway: "EDR supplies visibility and response technology; MDR supplies continuous attention and security expertise.",
  },
  "unique-passwords": {
    lead: "A unique password prevents a breach at one website from becoming access to every other account. It is one of the simplest ways to stop credential stuffing and limit the damage of stolen login data.",
    sections: [
      { heading: "Why reuse is dangerous", body: "Attackers routinely test stolen email-and-password combinations against Microsoft 365, banking, payroll, and other popular services. A reused password turns an unrelated breach into a business incident." },
      { heading: "Use a password manager", body: "A reputable password manager creates and stores long, random passwords so people do not need to memorize them. Shared business credentials can be controlled and revoked without sending passwords through email or chat." },
      { heading: "Add another layer", body: "Multifactor authentication helps when a password is exposed, but it does not make weak password habits harmless. Use unique passwords, MFA, and individual accounts together." },
    ],
    takeaway: "The only password worth memorizing is a strong master passphrase; the rest should be unique and securely managed.",
  },
  "passkeys": {
    lead: "Passkeys replace typed passwords with a cryptographic credential stored on a trusted device or password manager. People sign in using a fingerprint, face, or device PIN, and the secret itself is not sent to the website.",
    sections: [
      { heading: "Why passkeys resist phishing", body: "A passkey is tied to the legitimate website. A convincing fake login page cannot capture a reusable password because there is no shared secret for the user to type or reveal." },
      { heading: "What the user experiences", body: "Signing in usually looks like unlocking a phone or computer. Depending on the platform, passkeys can synchronize securely across a person’s devices or be stored on a hardware security key." },
      { heading: "Adopt them thoughtfully", body: "Start with important services that support passkeys, maintain secure recovery methods, and document offboarding. During the transition, keep strong MFA and password-management practices in place for systems that still require passwords." },
    ],
    takeaway: "Passkeys make strong authentication easier for users while removing the phishable password from the sign-in flow.",
  },
};

function defaultArticle(guide: Guide) {
  if (guide.category === "Local resources") {
    return {
      lead: guide.intro,
      sections: [
        { heading: "Local context changes the answer", body: "Indiana businesses do not all have the same provider availability, building layouts, workforce patterns, or response needs. A useful technology plan starts with the exact address, the systems the organization depends on, and the people responsible for acting when something goes wrong." },
        { heading: "Look beyond the monthly service", body: "When comparing providers or resources, evaluate response coverage, internet resilience, Microsoft 365 and endpoint support, cybersecurity, backup recovery, and documentation. A lower headline price can become expensive if a business still has to coordinate every vendor or emergency." },
        { heading: "Build a practical local plan", body: "Begin with a short discovery conversation, verify what is available at each location, and prioritize the improvements that reduce operational risk first. The right partner should be able to support remote work while still providing local context and onsite coordination when the situation calls for it." },
      ],
      takeaway: "Use the local checklist below to turn community-specific conditions into a clear, supportable technology plan.",
    };
  }
  return {
    lead: guide.intro,
    sections: [
      { heading: "Why this matters", body: "Technology decisions become easier when the organization understands the business impact, the people involved, and the risk of leaving the issue unresolved." },
      { heading: "Build a repeatable approach", body: "Document the current state, assign ownership, and define what a successful outcome looks like. A repeatable process is more valuable than a one-time fix." },
      { heading: "Turn guidance into a decision", body: "Start with the smallest next step that creates useful evidence: confirm availability, document a gap, ask a provider a specific question, or test the current process. Then use what you learn to prioritize the next investment." },
      { heading: "Keep the conversation moving", body: "The strongest technology programs are reviewed over time. Revisit assumptions, measure outcomes, and adjust the plan as your team, systems, and risk profile change." },
    ],
    takeaway: "Use the action plan below to turn the topic into a clear next step for your team, then revisit it as circumstances change.",
  };
}

export function KnowledgeArticle({ slug, guide }: { slug: string; guide: Guide }) {
  const article = articles[slug] ?? defaultArticle(guide);
  const [copied, setCopied] = useState(false);
  const shareArticle = async () => {
    const url = window.location.href;
    if (navigator.share) await navigator.share({ title: guide.title, text: article.lead, url });
    else { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 2200); }
  };
  return (
    <>
      <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12 lg:p-14">
        <div className="flex items-start gap-4 rounded-2xl bg-mission-mist p-6"><LightBulbIcon className="mt-1 h-7 w-7 shrink-0 text-mission-gold" /><p className="text-xl font-semibold leading-9 text-slate-700">{article.lead}</p></div>
        <div className="mt-10 grid gap-10">
          {article.sections.map((section, index) => (
            <section key={section.heading} className={`rounded-2xl p-5 sm:p-7 ${index % 2 ? "border-l-4 border-mission-gold bg-amber-50/40" : "bg-slate-50/70"}`}>
              <h2 className="text-3xl font-black tracking-tight text-mission-ink">{section.heading}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6"><p className="text-sm font-bold text-slate-500">Found this useful?</p><button type="button" onClick={shareArticle} className="inline-flex items-center gap-2 rounded-xl border border-mission-navy/20 px-4 py-2.5 text-sm font-extrabold text-mission-navy transition hover:border-mission-gold hover:bg-mission-mist"><ShareIcon className="h-4 w-4" /> {copied ? "Link copied" : "Share this article"}</button></div><div className="mt-10 flex gap-4 rounded-2xl bg-mission-mist p-6">
          <LightBulbIcon className="h-7 w-7 shrink-0 text-mission-gold" />
          <p className="font-bold leading-7 text-mission-ink">{article.takeaway}</p>
        </div>
      </article>
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="flex items-center gap-3"><CheckCircleIcon className="h-7 w-7 text-mission-gold" /><h2 className="text-2xl font-black text-mission-ink">Put this guide into practice</h2></div>
        <div className="mt-8 grid gap-4">{guide.items.map((item, index) => <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 p-5"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mission-navy text-sm font-black text-white">{index + 1}</div><p className="font-bold leading-7 text-slate-700">{item}</p></div>)}</div>
      </section>
      <div className="mt-8 rounded-3xl bg-mission-navy p-8 text-white"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Want a second set of eyes?</p><h2 className="mt-3 text-3xl font-black">Mission can help turn this guide into a plan.</h2><Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink">Talk with Mission <ArrowRightIcon className="h-4 w-4" /></Link></div>
    </>
  );
}

