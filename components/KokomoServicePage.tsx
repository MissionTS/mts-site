import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "@/components/StructuredData";
import { SupportStats } from "@/components/SupportStats";

type ServiceItem = { title: string; text: string };
type FAQ = { question: string; answer: string };

const localServiceLinks = [
  { title: "Cybersecurity", href: "/kokomo-cybersecurity" },
  { title: "Microsoft 365 support", href: "/kokomo-microsoft-365" },
  { title: "Business networking & Wi-Fi", href: "/kokomo-networking" },
  { title: "Security cameras & access", href: "/kokomo-security-installation" },
  { title: "Structured cabling", href: "/kokomo-structured-cabling" },
];

export function KokomoServicePage({
  breadcrumbPath,
  service,
  title,
  accent,
  intro,
  image,
  imageAlt,
  services,
  localDescription,
  faqs,
}: {
  breadcrumbPath: string;
  service: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  imageAlt: string;
  services: ServiceItem[];
  localDescription: string;
  faqs: FAQ[];
}) {
  return (
    <main>
      <SiteHeader />
      <FaqPageJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "Home", path: "/" },
        { name: "IT services in Kokomo", path: "/kokomo-in" },
        { name: service, path: breadcrumbPath },
      ]} />

      <section className="relative isolate overflow-hidden bg-mission-ink text-white">
        <Image src="/photos/kokomo-downtown.jpg" alt="Downtown Kokomo, Indiana" fill priority sizes="100vw" quality={80} className="-z-20 object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-mission-ink/95 via-mission-ink/85 to-mission-ink/45" />
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-7 text-xs text-slate-300">
            <Link href="/" className="underline-offset-4 hover:underline">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/kokomo-in" className="underline-offset-4 hover:underline">Kokomo</Link>
            <span aria-hidden="true"> / </span>{service}
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-mission-gold">Kokomo, Indiana · {service}</p>
            <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">{title}<span className="mt-2 block text-mission-gold">{accent}</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-mission-gold px-5 py-3 font-semibold text-mission-ink">Talk about your IT <ArrowRightIcon aria-hidden="true" className="h-4 w-4" /></Link>
              <a href="tel:+17652458515" className="rounded-lg border border-white/35 px-5 py-3 font-medium text-white">(765) 245-8515</a>
            </div>
            <p className="mt-4 text-sm text-slate-300">Kokomo home base · Remote support · Coordinated onsite service</p>
          </div>
        </div>
      </section>

      <SupportStats />

      <section className="px-6 py-14 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-mission-navy">{service} for Kokomo organizations</p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy sm:text-4xl">Plan around the systems your team depends on.</h2>
              <p className="mt-5 max-w-3xl leading-7 text-slate-600">{localDescription}</p>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">We support organizations in Kokomo and Howard County with remote help and onsite work coordinated around the environment, service scope, and business need.</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mission-mist">
              <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mission-mist px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-mission-navy">How we can help</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy sm:text-4xl">Practical work for the environment you have.</h2>
          </div>
          <div className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="border-t border-slate-300 pt-5">
                <h3 className="text-lg font-medium text-mission-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-mission-navy">A local partner, a clear plan</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">Know who owns the next step.</h2>
            <p className="mt-5 leading-7 text-slate-600">Start with the people, locations, recurring issues, and upcoming changes behind the request. We clarify priorities, agree on responsibilities, and outline what support or project work makes sense.</p>
            <Link href="/kokomo-in" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-mission-navy underline-offset-4 hover:underline">Explore all IT services in Kokomo <ArrowRightIcon aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["01", "Understand the need", "Map the users, sites, systems, and business impact involved."],
              ["02", "Agree on the scope", "Set clear responsibilities, priorities, timing, and next steps."],
              ["03", "Keep improving", "Document decisions and plan practical improvements as needs change."],
            ].map(([number, heading, text]) => (
              <div key={number} className="border-t border-slate-300 pt-4">
                <span className="text-xs text-mission-navy">{number}</span>
                <h3 className="mt-3 font-medium text-mission-navy">{heading}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mission-mist px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-widest text-mission-navy">More Kokomo services</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">Related help from one local team.</h2>
          <div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {localServiceLinks.filter((item) => item.href !== breadcrumbPath).map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-center justify-between border-t border-slate-300 py-4 text-sm font-medium text-mission-navy hover:text-mission-ink">
                {item.title}<ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 lg:py-16">
        <p className="text-xs font-medium uppercase tracking-widest text-mission-navy">Questions about {service.toLowerCase()} in Kokomo</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-mission-navy">Straight answers before you make a change.</h2>
        <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="py-5">
              <summary className="cursor-pointer font-medium leading-7 text-mission-navy">{question}</summary>
              <p className="mt-3 leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-mission-navy px-6 py-14 text-white lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-mission-gold">Kokomo, Indiana</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">A clearer next step for your technology.</h2>
            <p className="mt-5 leading-7 text-slate-200">Tell us what your team needs, what is getting in the way, and where the systems are located. We’ll discuss the right next step.</p>
            <a href="tel:+17652458515" className="mt-6 inline-block text-xl font-medium">(765) 245-8515</a>
            <p className="mt-2 text-sm text-slate-200">Prefer email? <a href="mailto:sales@missionts.com" className="underline underline-offset-4">sales@missionts.com</a></p>
          </div>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
