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
  title: "Mission Flare Learning Center | Mission Technology Solutions",
  description: "Practical IT, cybersecurity, Microsoft 365, and infrastructure guides from Mission Technology Solutions.",
};

const guides = [
  { icon: ShieldCheckIcon, tag: "Cybersecurity", title: "The practical security baseline", text: "A plain-language starting point for identity, email, endpoints, backups, and the habits that reduce risk every day.", time: "8 min read", tone: "bg-mission-navy" },
  { icon: CloudIcon, tag: "Microsoft 365", title: "A calmer Microsoft 365 setup", text: "The decisions that make Teams, SharePoint, OneDrive, and Entra ID easier for your people to use securely.", time: "7 min read", tone: "bg-mission-gold" },
  { icon: WrenchScrewdriverIcon, tag: "Managed IT", title: "What proactive IT actually looks like", text: "See what should happen between helpdesk tickets: maintenance, lifecycle planning, documentation, and a roadmap.", time: "6 min read", tone: "bg-mission-ink" },
  { icon: LockClosedIcon, tag: "Physical security", title: "Cameras and access control, connected", text: "How modern camera, door, network, and user systems work together across a facility.", time: "9 min read", tone: "bg-mission-navy" },
  { icon: BookOpenIcon, tag: "Infrastructure", title: "A network closet field guide", text: "The signs of a healthy closet: labeling, power, cooling, switching, cabling, and documentation.", time: "5 min read", tone: "bg-mission-gold" },
  { icon: CheckCircleIcon, tag: "Leadership", title: "Your next 90-day technology plan", text: "A simple way to prioritize urgent fixes, meaningful improvements, and the investments that can wait.", time: "10 min read", tone: "bg-mission-ink" },
];

const topics = ["All guides", "Cybersecurity", "Microsoft 365", "Managed IT", "Infrastructure", "Leadership"];

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="relative overflow-hidden bg-mission-ink text-white">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mission-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-mission-navy/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100"><SparklesIcon className="h-4 w-4 text-mission-gold" /> Mission Flare Learning Center</div>
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
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">The flare library</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Start with what is on your desk today.</h2></div><div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-500"><MagnifyingGlassIcon className="h-5 w-5 text-mission-navy" /> Browse practical guides</div></div>
          <div className="mt-10 flex flex-wrap gap-2">{topics.map((topic, i) => <span key={topic} className={`rounded-full px-4 py-2 text-sm font-bold ${i === 0 ? "bg-mission-navy text-white" : "border border-slate-200 bg-white text-slate-600"}`}>{topic}</span>)}</div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{guides.map(({ icon: Icon, tag, title, text, time, tone }) => <article key={title} className="group flex min-h-[310px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className={`flex h-28 items-center justify-between px-7 ${tone}`}><Icon className={`h-10 w-10 ${tone === "bg-mission-gold" ? "text-mission-ink" : "text-mission-gold"}`} /><span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.15em] ${tone === "bg-mission-gold" ? "bg-mission-ink/10 text-mission-ink" : "bg-white/10 text-white"}`}>{time}</span></div><div className="flex flex-1 flex-col p-7"><p className="text-xs font-black uppercase tracking-[0.16em] text-mission-navy">{tag}</p><h3 className="mt-3 text-2xl font-black tracking-tight text-mission-ink">{title}</h3><p className="mt-3 flex-1 leading-7 text-slate-600">{text}</p><Link href="/#contact" className="mt-6 inline-flex items-center gap-2 font-extrabold text-mission-navy transition group-hover:text-mission-gold">Get the checklist <ArrowRightIcon className="h-4 w-4" /></Link></div></article>)}</div>
        </div>
      </section>
      <section className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Need a signal, not another article?</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Bring us the messy version.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">If a guide gives you three more questions, that is a good place to start. Mission can help translate the situation into a clear next move.</p><Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink transition hover:brightness-105">Talk with Mission <ArrowRightIcon className="h-4 w-4" /></Link></div><div className="rounded-3xl bg-mission-navy p-8 text-white"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mission-gold text-mission-ink"><SparklesIcon className="h-7 w-7" /></div><h3 className="mt-6 text-2xl font-black">The flare principle</h3><p className="mt-3 leading-7 text-slate-200">Good technology guidance should make the next decision easier to see, not make the room feel darker.</p></div></div></section>
      <SiteFooter />
    </main>
  );
}
