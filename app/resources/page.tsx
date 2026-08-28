import type { Metadata } from "next";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  CloudIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Mission Knowledge Hub | Mission Technology Solutions",
  description: "Practical IT, cybersecurity, Microsoft 365, and infrastructure guides from Mission Technology Solutions.",
};

const guides = [
  { slug: "security-baseline", icon: ShieldCheckIcon, tag: "Cybersecurity", title: "The practical security baseline", text: "A plain-language starting point for identity, email, endpoints, backups, and the habits that reduce risk every day.", time: "8 min read", tone: "bg-mission-navy" },
  { slug: "microsoft-365-setup", icon: CloudIcon, tag: "Microsoft 365", title: "A calmer Microsoft 365 setup", text: "The decisions that make Teams, SharePoint, OneDrive, and Entra ID easier for your people to use securely.", time: "7 min read", tone: "bg-mission-gold" },
  { slug: "proactive-it", icon: WrenchScrewdriverIcon, tag: "Managed IT", title: "What proactive IT actually looks like", text: "See what should happen between helpdesk tickets: maintenance, lifecycle planning, documentation, and a roadmap.", time: "6 min read", tone: "bg-mission-ink" },
  { slug: "physical-security", icon: LockClosedIcon, tag: "Physical security", title: "Cameras and access control, connected", text: "How modern camera, door, network, and user systems work together across a facility.", time: "9 min read", tone: "bg-mission-navy" },
  { slug: "network-closet", icon: BookOpenIcon, tag: "Infrastructure", title: "A network closet field guide", text: "The signs of a healthy closet: labeling, power, cooling, switching, cabling, and documentation.", time: "5 min read", tone: "bg-mission-gold" },
  { slug: "90-day-plan", icon: CheckCircleIcon, tag: "Leadership", title: "Your next 90-day technology plan", text: "A simple way to prioritize urgent fixes, meaningful improvements, and the investments that can wait.", time: "10 min read", tone: "bg-mission-ink" },
  { slug: "intune-business", icon: CloudIcon, tag: "Microsoft 365", title: "Why Is Intune Important for Your Business?", text: "How modern device management helps secure laptops, standardize settings, and support a growing team.", time: "7 min read", tone: "bg-mission-navy" },
  { slug: "more-than-helpdesk", icon: WrenchScrewdriverIcon, tag: "Managed IT", title: "Why a Good IT Firm Is More Than Just a Helpdesk", text: "The planning, prevention, security, and strategy that should happen before the next ticket arrives.", time: "6 min read", tone: "bg-mission-gold" },
  { slug: "edr-and-mdr", icon: ShieldCheckIcon, tag: "Cybersecurity", title: "What Are EDR and MDR?", text: "A clear explanation of endpoint detection, response, monitoring, and where these layers fit in a security program.", time: "8 min read", tone: "bg-mission-ink" },
  { slug: "unique-passwords", icon: LockClosedIcon, tag: "Cybersecurity", title: "How You Can Protect Your Accounts with Unique Passwords", text: "Why password reuse is risky and how a password manager and multifactor authentication change the equation.", time: "5 min read", tone: "bg-mission-navy" },
  { slug: "passkeys", icon: CheckCircleIcon, tag: "Cybersecurity", title: "What Are Passkeys?", text: "A practical introduction to phishing-resistant sign-ins and what passkeys mean for your team.", time: "5 min read", tone: "bg-mission-gold" },
];

const lookingForItGuides = [
  { slug: "managed-it-cost-per-user", title: "What Does Managed IT Actually Cost Per User Per Month?", text: "Understand the factors behind MSP pricing and how to compare proposals fairly.", time: "7 min read" },
  { slug: "break-fix-vs-managed", title: "Break-Fix vs. Managed Services: The Real Math", text: "See the full cost of reactive support, downtime, risk, and predictable service.", time: "6 min read" },
  { slug: "managed-it-contract", title: "What's Included in a Managed IT Contract?", text: "A plain-language look at what is commonly included—and what usually is not.", time: "8 min read" },
  { slug: "questions-for-an-msp", title: "Questions to Ask Before Signing with an MSP", text: "Use this practical list to evaluate communication, security, coverage, and accountability.", time: "6 min read" },
  { slug: "outgrown-computer-guy", title: "Signs You've Outgrown Your \"Computer Guy\"", text: "Recognize when informal support no longer matches your risk, growth, or compliance needs.", time: "5 min read" },
  { slug: "switch-msps-without-downtime", title: "How to Switch MSPs Without Downtime", text: "A transition plan for changing providers while keeping people productive and protected.", time: "7 min read" },
  { slug: "what-is-a-vcio", title: "What Does a vCIO Do—and When Do You Need One?", text: "Learn how strategic technology leadership can help a small business plan with confidence.", time: "6 min read" },
  { slug: "co-managed-it", title: "Co-Managed IT: How It Works with Internal Staff", text: "Explore a flexible model that adds capacity and specialized expertise to your existing team.", time: "6 min read" },
  { slug: "msp-vs-internal-it", title: "MSP vs. Hiring an Internal IT Person: Cost Comparison", text: "Compare total cost, coverage, depth, and scalability—not just salary.", time: "8 min read" },
  { slug: "it-onboarding-transition", title: "What Happens During an IT Onboarding/Transition?", text: "See the milestones a thoughtful provider should complete in the first 30–90 days.", time: "7 min read" },
];

const localGuides = [
  ["it-support-kokomo", "IT Support in Kokomo, Indiana", "Local managed IT, cybersecurity, networking, and technology guidance for Kokomo businesses."],
  ["it-support-tipton", "IT Support in Tipton, Indiana", "Technology support and security for Tipton organizations that need a responsive local partner."],
  ["it-support-peru", "IT Support in Peru, Indiana", "Managed IT and infrastructure support for Peru businesses, nonprofits, and public organizations."],
  ["it-support-logansport", "IT Support in Logansport, Indiana", "Practical IT support, security, and modernization for Logansport teams."],
  ["it-support-noblesville", "IT Support in Noblesville, Indiana", "Scalable managed IT and cybersecurity for growing Noblesville businesses."],
  ["it-support-westfield", "IT Support in Westfield, Indiana", "Reliable technology support for Westfield offices, practices, and organizations."],
  ["it-support-carmel", "IT Support in Carmel, Indiana", "Strategic managed IT and security for Carmel businesses that expect more from technology."],
  ["it-support-lafayette", "IT Support in Lafayette, Indiana", "Connected, secure, and dependable IT support for Lafayette organizations."],
  ["howard-county-internet", "Business Internet Options in Howard County", "A practical guide to comparing availability, service levels, and business internet providers."],
  ["indiana-breach-notification", "Indiana Data Breach Notification Law", "What small businesses should know when personal information may have been exposed."],
  ["indiana-tech-grants", "Local Resources for Indiana Small Business Tech Grants", "Where to look for programs that can help fund modernization, security, and digital growth."],
];

const securityGuides = [
  ["what-is-phishing", "What Is Phishing and How Attacks Actually Reach Your Inbox"], ["mfa-app-text-key", "MFA Explained: App vs. Text vs. Hardware Key"], ["first-hour-ransomware", "What to Do in the First Hour of a Ransomware Attack"], ["cyber-insurance-questionnaires", "Cyber Insurance Questionnaires: What the Questions Really Mean"], ["password-managers-small-teams", "Password Managers for Small Teams"], ["why-antivirus-isnt-enough", "Why Antivirus Alone Isn't Enough Anymore"], ["business-email-compromise", "Business Email Compromise: How Wire Fraud Happens"], ["security-awareness-training", "Employee Security Awareness Training: What Actually Reduces Incidents"], ["dark-web-monitoring", "Dark Web Monitoring: What It Can and Can't Tell You"], ["backed-up-or-synced", "Is Your Data Backed Up or Just Synced?"], ["three-two-one-backup", "The 3-2-1 Backup Rule"], ["test-backup-restore", "How to Test a Backup Restore"],
];

const topics = [["All guides", "#guides"], ["Security", "#guides"], ["Microsoft 365", "#guides"], ["Managed IT", "#guides"], ["Infrastructure", "#guides"], ["Local resources", "#guides"]];

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="relative overflow-hidden bg-mission-ink text-white">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mission-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-mission-navy/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100"><SparklesIcon className="h-4 w-4 text-mission-gold" /> Mission Knowledge Hub</div>
            <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">A little light for the next technology decision.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Useful, practical guidance for the people responsible for keeping a business connected, secure, and moving forward.</p>
            <div className="mt-9 flex flex-wrap gap-4"><Link href="#guides" className="inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink transition hover:-translate-y-0.5 hover:brightness-105">Explore the guides <ArrowRightIcon className="h-4 w-4" /></Link><Link href="/#contact" className="rounded-xl border border-white/20 px-6 py-3.5 font-extrabold text-white transition hover:bg-white/10">Ask Mission a question</Link></div>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-3 lg:mt-20">
            {["Clear next steps", "No jargon required", "Built for real teams"].map((item, i) => <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"><div className="text-sm font-black uppercase tracking-[0.18em] text-mission-gold">0{i + 1}</div><div className="mt-3 text-lg font-black">{item}</div></div>)}
          </div>
        </div>
      </section>
      <section id="guides" className="bg-mission-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">The knowledge library</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Start with what is on your desk today.</h2></div><div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-500"><MagnifyingGlassIcon className="h-5 w-5 text-mission-navy" /> Browse practical guides</div></div>
          <div className="mt-10 flex flex-wrap gap-2">{topics.map(([topic, href], i) => <a key={topic} href={href} className={`rounded-full px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-sm ${i === 0 ? "bg-mission-navy text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-mission-gold"}`}>{topic}</a>)}</div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{guides.map(({ slug, icon: Icon, tag, title, text, time, tone }) => <article key={title} className="group flex min-h-[310px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className={`flex h-28 items-center justify-between px-7 ${tone}`}><Icon className={`h-10 w-10 ${tone === "bg-mission-gold" ? "text-mission-ink" : "text-mission-gold"}`} /><span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.15em] ${tone === "bg-mission-gold" ? "bg-mission-ink/10 text-mission-ink" : "bg-white/10 text-white"}`}>{time}</span></div><div className="flex flex-1 flex-col p-7"><p className="text-xs font-black uppercase tracking-[0.16em] text-mission-navy">{tag}</p><h3 className="mt-3 text-2xl font-black tracking-tight text-mission-ink">{title}</h3><p className="mt-3 flex-1 leading-7 text-slate-600">{text}</p><Link href={`/resources/${slug}`} className="mt-6 inline-flex items-center gap-2 font-extrabold text-mission-navy transition group-hover:text-mission-gold">Open checklist <ArrowRightIcon className="h-4 w-4" /></Link></div></article>)}</div>
          <div className="mt-20 border-t border-slate-200 pt-16"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Security</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Build habits that hold up under pressure.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Short, practical security explainers for the moments before, during, and after an incident.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{securityGuides.map(([slug, title]) => <article key={slug} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-mission-gold hover:shadow-lg"><span className="text-xs font-black uppercase tracking-[0.16em] text-mission-navy">Security guide</span><h3 className="mt-4 text-xl font-black tracking-tight text-mission-ink">{title}</h3><Link href={`/resources/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-mission-navy group-hover:text-mission-gold">Read the guide <ArrowRightIcon className="h-4 w-4" /></Link></article>)}</div></div>
          <div className="mt-20 border-t border-slate-200 pt-16"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Local resources</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Technology guidance for Indiana teams.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Local context matters. Start with your community, your connectivity options, and the resources available to Indiana businesses.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{localGuides.map(([slug, title, text]) => <article key={slug} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-mission-gold hover:shadow-lg"><span className="text-xs font-black uppercase tracking-[0.16em] text-mission-navy">Indiana resource</span><h3 className="mt-4 text-xl font-black tracking-tight text-mission-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p><Link href={`/resources/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-mission-navy group-hover:text-mission-gold">Read the guide <ArrowRightIcon className="h-4 w-4" /></Link></article>)}</div></div>
          <div className="mt-20 border-t border-slate-200 pt-16"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Looking for IT?</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">The buying questions worth asking first.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Thinking about managed IT, a provider change, or adding strategic support? These guides make the business case easier to evaluate.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{lookingForItGuides.map(({ slug, title, text, time }) => <article key={slug} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-mission-gold hover:shadow-lg"><div className="flex items-center justify-between gap-3"><span className="text-xs font-black uppercase tracking-[0.16em] text-mission-navy">Looking for IT</span><span className="text-xs font-bold text-slate-400">{time}</span></div><h3 className="mt-4 text-xl font-black tracking-tight text-mission-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p><Link href={`/resources/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-mission-navy group-hover:text-mission-gold">Read the guide <ArrowRightIcon className="h-4 w-4" /></Link></article>)}</div></div>
        </div>
      </section>
      <section className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Need a signal, not another article?</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Bring us the messy version.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">If a guide gives you three more questions, that is a good place to start. Mission can help translate the situation into a clear next move.</p><Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink transition hover:brightness-105">Talk with Mission <ArrowRightIcon className="h-4 w-4" /></Link></div><div className="rounded-3xl bg-mission-navy p-8 text-white"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mission-gold text-mission-ink"><SparklesIcon className="h-7 w-7" /></div><h3 className="mt-6 text-2xl font-black">The knowledge principle</h3><p className="mt-3 leading-7 text-slate-200">Good technology guidance should make the next decision easier to see, not make the room feel darker.</p></div></div></section>
      <SiteFooter />
    </main>
  );
}
