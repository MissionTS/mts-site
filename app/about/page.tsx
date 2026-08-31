import type { Metadata } from "next";
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TeamProfiles, type TeamProfile } from "@/components/TeamProfiles";

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

const certifications = ["A+", "Network+", "Security+", "Server+", "Cisco CCNA", "Cisco Certified Network Professional (CCNP) Enterprise", "Cisco Certified Network Professional (CCNP) Security", "Cisco Certified Network Professional (CCNP) Wireless", "Cisco Certified Network Professional (CCNP) Cybersecurity", "eCIR Incident Response", "Aruba Architect for Network Architecture", "CISSP"];

const leadership: TeamProfile[] = [
  { name: "Westin Padgett", role: "Chief Executive Officer & Founder", bio: "What I do: Account management and customer relations, staff and vendor management, sales, and network and AV systems design. Why I do it: I started Mission to equip businesses and nonprofits with the tools and knowledge they need to protect themselves and function efficiently. Most interesting fact: I have a wife, son, and three awesome dogs that are all significantly more talented and better looking than I am. Least interesting fact: I got to work on a world-famous studio for Bon Iver…one time, but I still mention it at about every sales meeting.", image: "/photos/team-westin.png" },
  { name: "Derrick Gatt", role: "Director of Installation", bio: "What I do: I lead and oversee installation projects for structured cabling, network infrastructure, and physical security systems across the division. I coordinate with the Projects Team to ensure smooth, efficient technology deployments and provide expert onsite support for complex security installations and system integrations. Why I do it: I like working with my hands, working with technology, and making systems that people can rely on. Most interesting fact: I am occasionally vegan when I choose it. Least interesting fact: I am 30% Ginger—can’t even be a full carrot top.", image: "/photos/team-derrick.jpg" },
];

const team: TeamProfile[] = [
  { name: "Ashley Padgett", role: "Billing & Executive Assistant", bio: "What I do: I handle accounts payable and receivable, payroll and internal accounting, project scheduling and customer communication, and assist the executive team with organization and documentation. Why I do it: I love being able to help my family and the organizations we serve. Most interesting fact: I have an extensive background working with dogs and horses, including training protection dogs to bite people—for fun. Least interesting fact: I am married to Westin.", image: "/photos/team-ashley.png" },
  { name: "Jonathan Davis", role: "Installation Technician", bio: "What I do: I assist with advanced installations including structured cabling, physical security cameras and door access control, network systems deployment, and AV integration. I lead installation and structured cabling projects onsite and coordinate with contractors and customers. Why I do it: I’m proud to deliver clean, reliable installations that make our client’s technology simple and dependable. Most interesting fact: I’m quite literally walking radio. Least interesting fact: I share the same name as the lead singer of Korn.", image: "/photos/team-jonathan.jpg" },
  { name: "Colton Langley", role: "Installation Technician", bio: "What I do: I assist with security system installations—PTZ and advanced 360 cameras and door access controls—as well as quality networking and cybersecurity systems. I provide great service for clients’ security needs, and go fishin’ every once in a while. Why I do it: I’m driven to provide quality work and give clients peace of mind that their property and cyber protection are in order. Most interesting fact: I have 13 pet tarantulas. Least interesting fact: I have red hair.", image: "/photos/team-colton.jpg" },
  { name: "Alyssa Hopen", role: "Service Coordinator", bio: "Alyssa helps keep service moving smoothly from the first request through follow-up. She coordinates communication, helps connect clients with the right Mission resources, and keeps the service experience organized and approachable.", image: "/photos/team-alyssa.jpg" },
  { name: "Jacob Bohlmann", role: "Helpdesk Technician", bio: "Jacob supports clients with friendly, practical technical help. He works to make everyday technology issues less disruptive so teams can stay focused on the work that matters most.", image: "/photos/team-jacob.jpg" },
  { name: "Dylan Wyatt", role: "Helpdesk Technician", bio: "Dylan helps Mission clients navigate technology questions and day-to-day support needs with a service-first mindset. He is focused on clear communication, reliable troubleshooting, and a better experience for every user.", image: "/photos/team-dylan.jpg" },
];

export default function AboutPage() {
  return <main>
    <SiteHeader />
    <section className="hero-motion relative overflow-hidden bg-mission-ink py-20 text-white lg:py-28">
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

    <section className="bg-white py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Certifications & expertise</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Experience you can build on.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Our team brings recognized credentials across infrastructure, wireless, cybersecurity, incident response, and enterprise networking.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{certifications.map((cert) => <div key={cert} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-mission-mist/60 p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mission-navy text-mission-gold"><ShieldCheckIcon className="h-5 w-5" /></div><p className="pt-1 text-sm font-extrabold leading-6 text-mission-ink">{cert}</p></div>)}</div></div></section>

    <section className="bg-white py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Our story</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Built to make technology support more practical.</h2></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{[["The problem", "In the Kokomo area, many nonprofits and growing organizations were navigating unclear technology needs, limited security knowledge, and services that strained already-tight budgets."], ["The solution", "Mission set out to provide practical managed IT and networking support that helps organizations focus their attention on the people and communities they serve."], ["Where we are now", "Our work has expanded beyond nonprofits to serve industries including manufacturing and government, with services that support today’s operations and planning for what comes next."]].map(([title, text], index) => <article key={title} className="border-l-4 border-mission-gold pl-6"><div className="text-sm font-black uppercase tracking-widest text-mission-navy">0{index + 1}</div><h3 className="mt-3 text-2xl font-extrabold text-mission-ink">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

    <section className="bg-mission-mist py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Our team</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">People who care about getting it right.</h2><p className="mt-5 max-w-2xl leading-8 text-slate-600">Select a team member to learn more about the people behind Mission.</p><div className="mt-12 space-y-12"><TeamProfiles title="Leadership" people={leadership} /><TeamProfiles title="Operations, Support & Installation" people={team} /></div></div></section>

    <section className="bg-mission-navy py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">How can we help?</p><h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Tell us about your business and the work you need technology to support.</h2></div><Link href="/#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-extrabold text-mission-navy transition hover:bg-slate-100">Start a Conversation <ArrowRightIcon className="h-4 w-4" /></Link></div></section>
    <SiteFooter />
  </main>;
}

