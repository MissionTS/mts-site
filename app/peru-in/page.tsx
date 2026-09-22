import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ContactForm } from "@/components/ContactForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const title = "IT Services in Peru, Indiana | Mission Technology Solutions";
const description = "Business IT support for Peru and Miami County, Indiana. Managed IT, cybersecurity, Microsoft 365 and onsite projects from Mission’s Kokomo-based team.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/peru-in" },
  openGraph: { title, description, url: "https://missionts.com/peru-in", type: "website", images: [{ url: "/photos/managed-it-team.jpg", alt: "Mission team collaborating in an office" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/photos/managed-it-team.jpg"] },
};

const services = [
  ["Managed IT & helpdesk", "Give employees one place to turn for account, device, email and application issues. Pair day-to-day support with monitoring, patching and a plan for aging equipment.", "/managed-it"],
  ["Cybersecurity & recovery", "Strengthen sign-in security, protect endpoints and email, and review backup and recovery needs. Build a practical security plan around the systems your business depends on.", "/cybersecurity"],
  ["Microsoft 365 & cloud", "Make email, Teams, SharePoint and OneDrive easier to use and manage. Get help with permissions, new employee setup, device management and cloud migrations.", "/services"],
  ["Business networks & Wi-Fi", "Address unreliable wireless, disconnected devices and network bottlenecks. Plan coverage, switches and firewalls around your office, facility and everyday workflows.", "/networking"],
  ["Cabling, cameras & access control", "Coordinate the physical work behind dependable technology: cable runs, network closets, cameras and door access. Keep installations connected to the broader IT plan.", "/structured-cabling-security"],
  ["Business phones & IT planning", "Connect your team with Mission Connect business phone services, then plan technology spending, replacements and growth with practical strategic guidance.", "/mission-connect"],
];
const faqs = [
  ["Do you provide IT services in Peru, Indiana?", "Yes. Mission supports businesses and organizations in Peru and Miami County from our Kokomo base. We combine remote support with coordinated onsite work for issues and projects that need hands-on attention."],
  ["Do you have an office in Peru?", "Our home base is Kokomo. Peru is part of our service area. We will discuss your location, support needs and onsite expectations when we scope your services."],
  ["Can you work alongside our current IT employee?", "Yes. Co-managed IT can add helpdesk capacity, security support, project work and documentation while your internal team retains its role. We agree on responsibilities before starting."],
  ["How much does managed IT support cost?", "Pricing depends on your users, devices, locations, security requirements and the support included. Tell us about your environment so we can recommend a scope and explain recurring services separately from project work."],
  ["Can you help us move from another IT provider?", "We can plan a transition around access, documentation, vendors, backups and the systems your team uses. We coordinate the handover and schedule changes with your business to limit disruption."],
  ["How quickly can someone come onsite in Peru?", "Onsite scheduling depends on the issue, location, service agreement and team availability. We discuss coverage and escalation expectations upfront; contact us to confirm availability for a specific need."],
];
const schema = {
  "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": "https://missionts.com/peru-in#service", name: "Business IT services in Peru, Indiana", url: "https://missionts.com/peru-in", serviceType: ["Managed IT", "Cybersecurity", "Microsoft 365 support", "Business networking"], areaServed: [{ "@type": "City", name: "Peru, Indiana" }, { "@type": "AdministrativeArea", name: "Miami County, Indiana" }], provider: { "@type": "Organization", name: "Mission Technology Solutions", url: "https://missionts.com", telephone: "+1-765-245-8515" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://missionts.com/" }, { "@type": "ListItem", position: 2, name: "IT Services in Peru, Indiana", item: "https://missionts.com/peru-in" }] },
  ],
};

export default function PeruPage() {
  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="bg-mission-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs text-slate-300"><Link href="/" className="underline-offset-4 hover:underline">Home</Link><span aria-hidden="true"> / </span>Peru, Indiana</nav>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-mission-gold">Serving Peru & Miami County</p>
            <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">IT services in Peru, Indiana.<span className="mt-3 block text-mission-gold">Support your team can turn to.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Technology problems should not become your second job. Mission brings managed IT support, cybersecurity and hands-on infrastructure expertise to Peru businesses—from our home base in Kokomo.</p>
            <div className="mt-8 flex flex-wrap gap-4"><Link href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-mission-gold px-5 py-3 font-semibold text-mission-ink">Talk about your IT <ArrowRightIcon aria-hidden="true" className="h-4 w-4" /></Link><a href="tel:+17652458515" className="rounded-lg border border-white/30 px-5 py-3 font-medium">(765) 245-8515</a></div>
            <p className="mt-5 text-sm text-slate-300">Remote support · Coordinated onsite service · Long-term planning</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/15"><Image src="/photos/managed-it-team.jpg" alt="Mission team collaborating in an office" width={1100} height={800} priority sizes="(min-width: 1024px) 42vw, 100vw" className="aspect-[4/3] w-full object-cover" /><p className="bg-mission-navy px-6 py-4 text-sm leading-6">One partner for your people, systems and facilities.</p></div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-xs font-medium uppercase tracking-widest text-mission-navy">Business IT support in Peru</p><h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">From the front desk to the network closet.</h2><p className="mt-5 leading-7 text-slate-600">Whether you run a professional office, a manufacturing operation, a nonprofit or a public organization in Miami County, your staff need reliable access to the tools that keep work moving. Bring support, security and infrastructure into one coordinated plan.</p></div>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{services.map(([name, text, href]) => <article key={name} className="border-t border-slate-200 pt-6"><h3 className="text-lg font-medium text-mission-navy">{name}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p><Link href={href} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-mission-navy underline-offset-4 hover:underline">Explore services <ArrowRightIcon aria-hidden="true" className="h-4 w-4" /></Link></article>)}</div>
        </div>
      </section>

      <section className="bg-mission-mist px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div><p className="text-xs font-medium uppercase tracking-widest text-mission-navy">A regional partner, a clear plan</p><h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">Know who owns the next step.</h2><p className="mt-5 leading-7 text-slate-600">A Peru office with unreliable Wi-Fi needs more than another router. A growing team needs more than another laptop. We look at the accounts, devices, vendors and physical connections behind the problem, then help you decide what to fix first.</p><p className="mt-4 leading-7 text-slate-600">Use Mission as your IT partner or extend the capacity of your existing staff. Remote help covers many everyday issues; onsite work is coordinated for installations, troubleshooting and facility projects.</p><Link href="/about" className="mt-5 inline-block text-sm font-medium text-mission-navy underline underline-offset-4">Meet the Mission team</Link></div>
          <div className="space-y-6">{[["01", "Start with your business", "Tell us your locations, users, recurring issues and upcoming changes. We clarify what you need from support."], ["02", "Agree on the scope", "Review support responsibilities, security priorities, onsite needs and costs before moving forward."], ["03", "Build a manageable roadmap", "Document the environment, prioritize improvements and plan projects around the way your organization works."]].map(([number, heading, text]) => <div key={number} className="flex gap-5 border-t border-slate-300 pt-5"><span className="text-sm text-mission-navy">{number}</span><div><h3 className="font-medium text-mission-navy">{heading}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20"><h2 className="text-3xl font-medium tracking-tight text-mission-navy">Questions about IT support in Peru</h2><div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question, answer]) => <details key={question} className="py-5"><summary className="cursor-pointer font-medium leading-7 text-mission-navy">{question}</summary><p className="mt-3 leading-7 text-slate-600">{answer}</p></details>)}</div><p className="mt-6 text-sm leading-7 text-slate-600">Still comparing options? Use our <Link href="/resources/it-support-peru" className="text-mission-navy underline underline-offset-4">Peru IT planning checklist</Link> to prepare, or read <Link href="/resources/questions-for-an-msp" className="text-mission-navy underline underline-offset-4">questions to ask an IT provider</Link>.</p></section>

      <section id="contact" className="scroll-mt-32 bg-mission-navy px-6 py-16 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-medium uppercase tracking-widest text-mission-gold">Let’s talk about your Peru business</p><h2 className="mt-4 text-3xl font-medium tracking-tight">A clearer next step for your IT.</h2><p className="mt-5 leading-8 text-slate-200">Tell us what is slowing your team down, how many people you support and where you need help. We’ll discuss your environment and the services that fit.</p><a href="tel:+17652458515" className="mt-6 inline-block text-2xl font-medium text-white">(765) 245-8515</a><p className="mt-3 text-sm text-slate-200">Prefer email? <a href="mailto:sales@missionts.com" className="underline underline-offset-4">sales@missionts.com</a></p></div><ContactForm /></div></section>
      <SiteFooter />
    </main>
  );
}

