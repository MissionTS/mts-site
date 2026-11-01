import { withSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "@/components/StructuredData";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SupportStats } from "@/components/SupportStats";
import { KokomoRescueFeature } from "@/components/KokomoRescueFeature";

const title = "IT Services in Kokomo, Indiana | Mission Technology Solutions";
const description = "Managed IT, cybersecurity, Microsoft 365, business networking, cabling and physical security for Kokomo businesses and organizations, from Mission’s local team.";
export const metadata: Metadata = withSeoMetadata({
  title,
  description,
  openGraph: { title, description, type: "website", images: [{ url: "/photos/kokomo-downtown.jpg", width: 1200, height: 800, alt: "Downtown Kokomo, Indiana" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/photos/kokomo-downtown.jpg"] },
}, "/kokomo-in");

const services = [
  { title: "Managed IT & helpdesk", text: "Give employees a clear place to turn for account, device, email, application, and connectivity issues. Pair everyday support with monitoring and a plan for aging systems.", href: "/managed-it" },
  { title: "Cybersecurity & recovery", text: "Strengthen sign-ins, protect devices and email, and review backup and recovery needs with a security plan built around the work your organization does.", href: "/kokomo-cybersecurity" },
  { title: "Microsoft 365 & cloud", text: "Make email, Teams, SharePoint, OneDrive, identity, and device management easier to use and administer.", href: "/kokomo-microsoft-365" },
  { title: "Business networks & Wi-Fi", text: "Address weak wireless, network bottlenecks, and connected equipment across your office, shop floor, or facility.", href: "/kokomo-networking" },
  { title: "Cameras & access control", text: "Plan connected security systems around entrances, staff workflows, network capacity, and the needs of your building.", href: "/kokomo-security-installation" },
  { title: "Structured cabling", text: "Coordinate cable runs, network closets, testing, labeling, and documentation for new work and existing facilities.", href: "/kokomo-structured-cabling" },
];

const faqs = [
  { question: "What IT services does Mission provide in Kokomo?", answer: "Mission supports managed IT and helpdesk needs, cybersecurity, Microsoft 365, networking and Wi-Fi, structured cabling, cameras, access control, business communications, and technology planning. We can scope a full relationship or discuss a focused project." },
  { question: "Do you provide onsite IT support in Kokomo?", answer: "Yes. We provide remote support and coordinate onsite service for hands-on troubleshooting, installations, cabling, network work, security systems, and other needs. Scheduling depends on the service scope and availability." },
  { question: "What kinds of Kokomo organizations do you work with?", answer: "We work with small and midsize businesses, manufacturers, professional offices, healthcare organizations, nonprofits, schools, churches, and public-sector teams. The right scope depends on your systems, locations, and support needs." },
  { question: "Can you work with our current IT employee or provider?", answer: "Yes. Co-managed work can add helpdesk capacity, security expertise, project support, documentation, or planning. We agree on access, responsibilities, and escalation paths with your team." },
  { question: "How much do managed IT services cost?", answer: "Cost depends on your users, devices, locations, security requirements, and the services included. We discuss your environment first and separate ongoing support from project work in the proposed scope." },
  { question: "How do we move from another IT provider?", answer: "A transition can cover account and vendor access, device and network records, backups, open issues, and support responsibilities. We plan the handoff around your team and the systems it depends on." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://missionts.com/kokomo-in#service",
  name: "Business IT services in Kokomo, Indiana",
  serviceType: ["Managed IT", "Cybersecurity", "Microsoft 365 support", "Business networking", "Structured cabling", "Physical security"],
  areaServed: [{ "@type": "City", name: "Kokomo, Indiana" }, { "@type": "AdministrativeArea", name: "Howard County, Indiana" }],
  provider: { "@type": "Organization", name: "Mission Technology Solutions", url: "https://missionts.com", telephone: "+1-765-245-8515" },
  url: "https://missionts.com/kokomo-in",
};

const steps = [
  ["01", "Start with your operation", "Share your locations, users, systems, recurring issues, and upcoming changes."],
  ["02", "Agree on the priorities", "Clarify responsibilities, security needs, onsite expectations, costs, and the best first step."],
  ["03", "Build a practical plan", "Document what matters, address the highest-impact gaps, and plan improvements around your work."],
];

export default function KokomoPage() {
  return (
    <main>
      <SiteHeader />
      <FaqPageJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "IT services in Kokomo, Indiana", path: "/kokomo-in" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="relative isolate overflow-hidden bg-mission-ink text-white">
        <Image src="/photos/kokomo-downtown.jpg" alt="Downtown Kokomo, Indiana, with historic storefronts along the street" fill priority sizes="100vw" quality={80} className="-z-20 object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-mission-ink/95 via-mission-ink/82 to-mission-ink/40" />
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-7 text-xs text-slate-300"><Link href="/" className="underline-offset-4 hover:underline">Home</Link><span aria-hidden="true"> / </span>Kokomo, Indiana</nav>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-mission-gold">Serving Kokomo & Howard County</p>
            <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">IT services in Kokomo, Indiana.<span className="mt-2 block text-mission-gold">A local team for the work you do.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">Your technology should help your people do their jobs, not become another job to manage. Mission brings IT support, security, cloud, and infrastructure experience to Kokomo organizations—from our home base here in the community.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-mission-gold px-5 py-3 font-semibold text-mission-ink">Talk about your IT <ArrowRightIcon aria-hidden="true" className="h-4 w-4" /></Link><a href="tel:+17652458515" className="rounded-lg border border-white/35 px-5 py-3 font-medium text-white">(765) 245-8515</a></div>
            <p className="mt-4 text-sm text-slate-300">Kokomo home base · Remote support · Coordinated onsite service</p>
          </div>
        </div>
      </section>

      <SupportStats />
      <KokomoRescueFeature />

      <section className="px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-xs font-medium uppercase tracking-widest text-mission-navy">Business IT support in Kokomo</p><h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy sm:text-4xl">From the front desk to the facility floor.</h2><p className="mt-5 leading-7 text-slate-600">A professional office, a production environment, and a community organization rely on different systems. But every team needs a dependable way to get help, protect information, keep devices connected, and plan ahead. We bring those needs into one clear conversation.</p></div>
          <div className="mt-9 grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">{services.map((item) => <article key={item.title} className="border-t border-slate-200 pt-5"><h3 className="text-lg font-medium text-mission-navy">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p><Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-mission-navy underline-offset-4 hover:underline">Explore this service <ArrowRightIcon aria-hidden="true" className="h-4 w-4" /></Link></article>)}</div>
        </div>
      </section>

      <section className="bg-mission-mist px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-medium uppercase tracking-widest text-mission-navy">Technology with local context</p><h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">Support shaped around the way Kokomo works.</h2><p className="mt-5 leading-7 text-slate-600">Organizations here may need to keep office teams, connected equipment, multiple facilities, and customer-facing services working together. A useful IT plan starts with how people actually work, what cannot stop, and where a technology issue has the greatest impact.</p><p className="mt-4 leading-7 text-slate-600">We support Kokomo teams as their IT partner or coordinate with internal staff and other providers. Remote help handles many everyday needs; onsite work is arranged for projects and issues that require a visit.</p><Link href="/about" className="mt-5 inline-block text-sm font-medium text-mission-navy underline underline-offset-4">Meet the Mission team</Link></div>
          <div className="grid gap-6 sm:grid-cols-3">{[
            ["Manufacturing & operations", "Plan connectivity, device security, and support around production systems and work that depends on reliable uptime."],
            ["Professional & healthcare offices", "Keep staff connected to business applications, Microsoft 365, communications, and the information they need."],
            ["Nonprofits & community teams", "Build right-sized support, security, and technology plans around staff capacity and budget priorities."],
          ].map(([heading, text]) => <article key={heading} className="border-t border-slate-300 pt-5"><h3 className="font-medium text-mission-navy">{heading}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-xs font-medium uppercase tracking-widest text-mission-navy">A regional partner, a clear plan</p><h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">Know who owns the next step.</h2><p className="mt-5 leading-7 text-slate-600">Start with the systems and responsibilities you have today. Then make changes in an order your team can manage.</p></div><div className="mt-9 grid gap-7 md:grid-cols-3">{steps.map(([number, heading, text]) => <article key={number} className="border-t border-slate-200 pt-5"><span className="text-xs text-mission-navy">{number}</span><h3 className="mt-3 font-medium text-mission-navy">{heading}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div>
      </section>

      <section className="bg-mission-mist px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl"><p className="text-xs font-medium uppercase tracking-widest text-mission-navy">More from Mission</p><h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">Explore nearby services and resources.</h2><div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">{[
          ["Managed IT services", "/managed-it"], ["Central Indiana service area", "/managed-it-central-indiana"], ["IT services in Peru", "/peru-in"], ["Cyber insurance for small business", "/resources/cyber-insurance-small-business"], ["Services overview", "/services"], ["Meet our team", "/about"],
        ].map(([label, href]) => <Link key={href} href={href} className="group flex items-center justify-between border-t border-slate-300 py-4 text-sm font-medium text-mission-navy hover:text-mission-ink">{label}<ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" /></Link>)}</div></div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 lg:py-16">
        <p className="text-xs font-medium uppercase tracking-widest text-mission-navy">Questions about IT support in Kokomo</p><h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">Straight answers before you make a change.</h2>
        <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(({ question, answer }) => <details key={question} className="py-5"><summary className="cursor-pointer font-medium leading-7 text-mission-navy">{question}</summary><p className="mt-3 leading-7 text-slate-600">{answer}</p></details>)}</div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-mission-navy px-6 py-14 text-white lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-medium uppercase tracking-widest text-mission-gold">Let’s talk about your Kokomo organization</p><h2 className="mt-3 text-3xl font-medium tracking-tight">A clearer next step for your IT.</h2><p className="mt-5 leading-7 text-slate-200">Tell us what is slowing your team down, how your systems are set up, and where you need help. We’ll discuss your environment and what makes sense next.</p><a href="tel:+17652458515" className="mt-6 inline-block text-xl font-medium text-white">(765) 245-8515</a><p className="mt-2 text-sm text-slate-200">Prefer email? <a href="mailto:sales@missionts.com" className="underline underline-offset-4">sales@missionts.com</a></p></div><ContactForm /></div>
      </section>
      <SiteFooter />
    </main>
  );
}
