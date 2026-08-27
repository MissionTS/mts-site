import type { Metadata } from "next";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About Us | Mission Technology Solutions",
  description: "Learn about Mission Technology Solutions, our community-focused roots, values, and Indiana-based team.",
};

const values = [
  ["Committed to Quality", "We are meticulous. From installations to documentation, we put care and patience into every detail so the work is not merely complete—it is done well."],
  ["Dedicated to Knowledge", "We are knowledge seekers. When a question needs research, we find the answer and bring it back in a way that is useful to your team."],
  ["Focused on Customer Needs", "We listen first. Understanding your organization, goals, and constraints is how we recommend technology that fits instead of a generic stack."],
  ["Determined to Help", "Mission began with a desire to make stronger, more affordable technology support available to organizations serving their communities."],
];

const leadership = [["Westin Padgett", "Chief Executive Officer & Founder"], ["Ronnie Schaeffer", "Director of Managed Services"], ["Derrick Gatt", "Director of Installation"]];
const team = [["Ashley Padgett", "Billing & Executive Assistant"], ["Dave Osenbaugh", "Accounts & AV Project Manager"], ["Chris Dame", "Senior Support Technician"], ["Shelby Davis", "Support Technician"], ["Jonathan Davis", "Installation Technician"], ["Colton Langley", "Installation Technician"]];

function TeamList({ title, people }: { title: string; people: string[][] }) {
  return <div>
    <h3 className="text-xl font-extrabold text-mission-ink">{title}</h3>
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {people.map(([name, role]) => <div key={name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="font-extrabold text-mission-ink">{name}</div><div className="mt-1 text-sm leading-6 text-slate-600">{role}</div></div>)}
    </div>
  </div>;
}

export default function AboutPage() {
  return <main>
    <SiteHeader />
    <section className="relative overflow-hidden bg-mission-ink py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(48,80,108,0.9),_transparent_42%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">About Mission</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Strategic IT excellence, <span className="text-mission-gold">every business, every time.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">We help organizations use dependable technology, stronger security, and friendly, efficient support to better serve their communities.</p>
          <Link href="/#contact" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-bold text-mission-ink transition hover:brightness-105">Talk with our team <ArrowRightIcon className="h-4 w-4" /></Link>
        </div>
        <div className="relative mx-auto w-full max-w-2xl"><div className="absolute -inset-3 rounded-[1.75rem] border border-mission-gold/30" /><div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white p-5 shadow-2xl sm:p-8"><Image src="/photos/mission-team-illustration.png" alt="Illustration representing the Mission Technology Solutions team" width={1732} height={594} priority className="h-auto w-full" /></div></div>
      </div>
    </section>

    <section className="bg-white py-20 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Why we exist</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">How can we help?</h2></div><div className="space-y-6 text-lg leading-8 text-slate-600"><p><strong className="text-mission-ink">Our mission:</strong> empowering businesses with innovative technology solutions and friendly, efficient IT support so they can better serve their communities.</p><p>Mission was first dreamed up to serve nonprofits. Our team had experience in both IT and nonprofit work and saw how much stronger support, security awareness, and practical guidance could change an organization’s ability to serve.</p><p>Today, Mission supports a wider client base while holding onto those community-oriented roots. We listen to needs, recommend solutions with efficiency and friendliness, and aim to help organizations work with more clarity and confidence.</p></div></div></section>

    <section id="values" className="bg-mission-mist py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Our values</p><h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">How we show up for our clients and community.</h2><div className="mt-12 grid gap-6 md:grid-cols-2">{values.map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><CheckCircleIcon className="h-8 w-8 text-mission-gold" /><h3 className="mt-5 text-2xl font-extrabold text-mission-ink">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

    <section className="bg-white py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Our story</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Built to make technology support more practical.</h2></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{[["The problem", "In the Kokomo area, many nonprofits and growing organizations were navigating unclear technology needs, limited security knowledge, and services that strained already-tight budgets."], ["The solution", "Mission set out to provide practical managed IT and networking support that helps organizations focus their attention on the people and communities they serve."], ["Where we are now", "Our work has expanded beyond nonprofits to serve industries including manufacturing and government, with services that support today’s operations and planning for what comes next."]].map(([title, text], index) => <article key={title} className="border-l-4 border-mission-gold pl-6"><div className="text-sm font-black uppercase tracking-widest text-mission-navy">0{index + 1}</div><h3 className="mt-3 text-2xl font-extrabold text-mission-ink">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

    <section className="bg-mission-mist py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Our team</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">People who care about getting it right.</h2><div className="mt-12 space-y-12"><TeamList title="Leadership" people={leadership} /><TeamList title="Operations, Support & Installation" people={team} /></div></div></section>

    <section className="bg-mission-navy py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">How can we help?</p><h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Tell us about your business and the work you need technology to support.</h2></div><Link href="/#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-extrabold text-mission-navy transition hover:bg-slate-100">Start a Conversation <ArrowRightIcon className="h-4 w-4" /></Link></div></section>
    <SiteFooter />
  </main>;
}
