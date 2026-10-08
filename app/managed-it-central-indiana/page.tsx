import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, CloudIcon, LifebuoyIcon, LockClosedIcon, ServerStackIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const title = "Managed IT Services in Central Indiana | Mission Technology Solutions";
const description = "Managed IT services for Central Indiana businesses and organizations. Get responsive helpdesk support, proactive maintenance, cybersecurity, Microsoft 365, and practical technology planning from Mission.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/managed-it-central-indiana" },
  openGraph: {
    title,
    description,
    url: "https://missionts.com/managed-it-central-indiana",
    type: "website",
    images: [{ url: "/photos/managed-it-team.jpg", alt: "Mission team collaborating around a laptop" }],
  },
};

const services = [
  { icon: LifebuoyIcon, title: "Helpdesk & user support", text: "Give your employees a clear place to turn for account, device, email, application, and connectivity issues." },
  { icon: WrenchScrewdriverIcon, title: "Monitoring & maintenance", text: "Keep systems cared for with monitoring, patching, alert response, preventative maintenance, and follow-through." },
  { icon: LockClosedIcon, title: "Cybersecurity & recovery", text: "Strengthen identity, endpoint, email, and backup protections with a practical plan for reducing risk and recovering from disruption." },
  { icon: CloudIcon, title: "Microsoft 365 & cloud", text: "Get help with Microsoft 365 administration, onboarding, permissions, Teams, SharePoint, OneDrive, and device management." },
  { icon: ServerStackIcon, title: "Networks & onsite projects", text: "Plan and support business networks, Wi-Fi, cabling, cameras, access control, and other work that needs hands-on coordination." },
  { icon: CheckCircleIcon, title: "IT planning & vCIO guidance", text: "Connect technology decisions to business priorities with budgeting, lifecycle planning, vendor coordination, and a clear roadmap." },
];

const communities = ["Kokomo", "Peru", "Logansport", "Tipton", "Lafayette", "Carmel", "Noblesville", "Westfield"];

const faqs = [
  ["What does managed IT include?", "Managed IT can combine helpdesk support, monitoring, maintenance, device and account management, security coordination, backup planning, and long-term technology guidance. We scope services around your environment and agree on responsibilities before work begins."],
  ["Do you support businesses across Central Indiana?", "Mission is based in Kokomo and serves businesses and organizations across Central Indiana, including Kokomo, Peru, Logansport, Tipton, Lafayette, Carmel, Noblesville, Westfield, and nearby communities. Remote support and onsite work are coordinated based on the need and service arrangement."],
  ["Can you work with an internal IT employee?", "Yes. Co-managed IT can give an internal technology lead more helpdesk capacity, specialized expertise, monitoring, documentation, project support, or coverage. We define who owns each responsibility together."],
  ["Do you provide onsite IT support?", "Yes. Many requests can be handled remotely, while hands-on troubleshooting, installations, network work, and other projects can be scheduled onsite. Timing depends on the issue, location, and service arrangement."],
  ["How do we get started?", "Tell us about your team, locations, systems, and current challenges. We will discuss what you need, answer questions, and outline a practical next step."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://missionts.com/managed-it-central-indiana#service",
      name: "Managed IT services in Central Indiana",
      serviceType: ["Managed IT services", "IT helpdesk support", "Cybersecurity", "Microsoft 365 support", "Business networking"],
      areaServed: communities.map((name) => ({ "@type": "City", name, address: { "@type": "PostalAddress", addressRegion: "IN", addressCountry: "US" } })),
      provider: { "@type": "Organization", name: "Mission Technology Solutions", url: "https://missionts.com", telephone: "+1-765-245-8515" },
      url: "https://missionts.com/managed-it-central-indiana",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://missionts.com/" },
        { "@type": "ListItem", position: 2, name: "Managed IT Services in Central Indiana", item: "https://missionts.com/managed-it-central-indiana" },
      ],
    },
  ],
};

export default function CentralIndianaManagedITPage() {
  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="relative isolate overflow-hidden bg-mission-ink text-white">
        <Image src="/photos/managed-it-team.jpg" alt="Mission team collaborating around a laptop" fill priority sizes="100vw" className="-z-20 object-cover opacity-30" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-mission-ink/95 via-mission-ink/85 to-mission-ink/60" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-300"><Link href="/" className="underline-offset-4 hover:underline">Home</Link><span aria-hidden="true"> / </span>Managed IT Services in Central Indiana</nav>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Indiana-based. Ready to help.</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Managed IT services for Central Indiana businesses.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Less time chasing technology problems. More confidence in the systems your team depends on. Mission brings responsive support, proactive care, cybersecurity, and clear IT planning to organizations across the region.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-bold text-mission-ink">Talk with our team <ArrowRightIcon aria-hidden="true" className="h-4 w-4" /></Link>
            <a href="tel:+17652458515" className="rounded-xl border border-white/25 px-6 py-3.5 font-bold text-white">(765) 245-8515</a>
          </div>
          <p className="mt-5 text-sm text-slate-300">Based in Kokomo · Remote support and coordinated onsite service</p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">A partner for the whole environment</p><h2 className="mt-3 text-3xl font-black tracking-tight text-mission-ink sm:text-4xl">Support that keeps work moving.</h2><p className="mt-5 text-lg leading-8 text-slate-600">When a login breaks, Wi-Fi drops, or a device needs attention, your staff need a clear next step. Managed IT brings everyday help and the behind-the-scenes care together, so recurring issues get addressed and technology decisions do not have to wait for a crisis.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mission-navy text-mission-gold"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-xl font-extrabold text-mission-ink">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-mission-mist px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Built around your business</p><h2 className="mt-3 text-3xl font-black tracking-tight text-mission-ink sm:text-4xl">A steady partner for the people behind the systems.</h2><p className="mt-5 leading-7 text-slate-600">From a growing office to a busy facility, the right support starts by understanding how your organization works. We can support your team as its IT partner or work alongside an internal lead, with responsibilities and priorities made clear.</p></div>
          <div className="grid gap-4 sm:grid-cols-2"><article className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-lg font-extrabold text-mission-ink">Everyday operations</h3><p className="mt-3 leading-7 text-slate-600">Helpdesk, user onboarding, devices, email, Microsoft 365, and connectivity support for the work happening each day.</p></article><article className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-lg font-extrabold text-mission-ink">Complex environments</h3><p className="mt-3 leading-7 text-slate-600">Security-minded planning and technical support for manufacturing, healthcare, nonprofits, professional services, and public organizations.</p></article><article className="rounded-2xl bg-white p-6 shadow-sm sm:col-span-2"><h3 className="text-lg font-extrabold text-mission-ink">Clear priorities</h3><p className="mt-3 leading-7 text-slate-600">Turn urgent fixes and aging equipment into an understandable plan with risks, timing, and costs discussed before the next surprise.</p></article></div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Serving Central Indiana</p><h2 className="mt-3 text-3xl font-black tracking-tight text-mission-ink sm:text-4xl">Local knowledge, regional reach.</h2><p className="mt-5 leading-7 text-slate-600">Mission is based in Kokomo and works with organizations across Central Indiana. Support is delivered remotely when it is the quickest fit, with onsite work scheduled for needs that call for hands-on help.</p></div>
          <div><ul className="grid gap-3 sm:grid-cols-2">{communities.map((community) => <li key={community} className="flex items-center gap-3 border-b border-slate-200 py-3 text-lg font-semibold text-mission-navy"><CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-mission-gold" />{community}, Indiana</li>)}</ul><p className="mt-5 text-sm text-slate-500">Also serving nearby communities. Onsite scheduling depends on your location, needs, and service arrangement.</p></div>
        </div>
      </section>

      <section className="bg-mission-ink px-6 py-16 text-white lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">A clear start</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">First, let’s understand what your team needs.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{[["01", "Listen", "We learn about your people, locations, systems, and the issues taking time away from the work."], ["02", "Get oriented", "We review the environment, existing providers, urgent risks, and how support should reach your staff."], ["03", "Plan the next steps", "We outline a service approach and priorities that fit the needs you shared."]].map(([number, heading, text]) => <article key={number} className="border-l-2 border-mission-gold pl-5"><p className="text-sm font-bold tracking-widest text-mission-gold">{number}</p><h3 className="mt-3 text-xl font-extrabold">{heading}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></article>)}</div></div></section>

      <section className="bg-mission-mist px-6 py-16 lg:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Questions, answered</p><h2 className="mt-3 text-3xl font-black tracking-tight text-mission-ink sm:text-4xl">Managed IT in Central Indiana.</h2></div><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-mission-ink">{question}<span aria-hidden="true" className="text-2xl text-mission-navy transition group-open:rotate-45">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 leading-7 text-slate-600">{answer}</p></details>)}</div></div></section>

      <section id="contact" className="scroll-mt-28 bg-mission-navy px-6 py-16 text-white lg:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Start a conversation</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Let’s make IT easier to manage.</h2><p className="mt-5 leading-7 text-slate-200">Tell us where your team is, what is working, and where you could use a hand. A Mission team member will follow up to talk through a practical next step.</p><a href="tel:+17652458515" className="mt-6 inline-block text-xl font-bold text-white">(765) 245-8515</a></div><ContactForm /></div></section>
      <SiteFooter />
    </main>
  );
}
