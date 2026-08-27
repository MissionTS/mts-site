import {
  ArrowRightIcon,
  BoltIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  CloudIcon,
  CpuChipIcon,
  LockClosedIcon,
  PhoneIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactForm } from "@/components/ContactForm";

const services = [
  { icon: WrenchScrewdriverIcon, title: "Managed IT", text: "Responsive helpdesk, lifecycle management, patching, monitoring, and proactive support.", href: "/managed-it" },
  { icon: ShieldCheckIcon, title: "Cybersecurity", text: "Layered protection with endpoint security, MDR, email security, awareness training, and security operations.", href: "/cybersecurity" },
  { icon: CloudIcon, title: "Microsoft 365 & Cloud", text: "Modern identity, collaboration, SharePoint, OneDrive, Teams, Intune, and secure cloud migrations." },
  { icon: CpuChipIcon, title: "Structured Cabling & Security", text: "Professional cabling, camera systems, access control, and the infrastructure that keeps every connection dependable.", href: "/structured-cabling-security" },
  { icon: PhoneIcon, title: "Mission Connect", text: "Business VoIP, mobile calling, auto attendants, call routing, and communications built around your team." },
  { icon: BuildingOffice2Icon, title: "Strategic IT", text: "vCIO guidance, roadmaps, budgeting, lifecycle planning, compliance support, and technology strategy." },
];

const industries = ["Local Government", "Healthcare", "Professional Services", "Nonprofits", "Automotive", "Churches & Schools"];

const heroHighlights = ["Managed IT", "Cybersecurity", "Microsoft 365", "Cabling", "Cameras", "Access Control"];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="relative overflow-hidden bg-mission-ink text-white">
        <div className="absolute inset-0">
          <Image src="/photos/managed-it-team.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-mission-ink/85" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-mission-ink to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 shadow-lg shadow-black/10 backdrop-blur">
              <BoltIcon className="h-4 w-4 text-mission-gold" />
              IT support that moves at your speed
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Technology that works <span className="text-mission-gold">for your mission.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Managed IT, cybersecurity, cloud, communications, and strategic technology services for organizations that need dependable systems and a partner they can actually reach.
            </p>
            <div className="mt-8 flex max-w-3xl flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 backdrop-blur">{item}</span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-bold text-mission-ink transition hover:brightness-105">
                Start a Conversation <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href="#services" className="rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur">
              <div className="relative h-72 sm:h-80 lg:h-96">
                <Image src="/photos/mission-team-illustration.png" alt="Mission Technology Solutions team supporting a client environment" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-mission-ink/80 via-mission-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-mission-gold">The Mission Difference</div>
                  <p className="mt-2 max-w-md text-2xl font-black leading-tight">Local people, practical answers, and systems that stay ready.</p>
                </div>
              </div>
              <div className="grid gap-0 border-t border-white/10 sm:grid-cols-3">
                {[
                  ["Support", "Fast, human help"],
                  ["Security", "Built in early"],
                  ["Planning", "Clear next steps"],
                ].map(([title, text]) => (
                  <div key={title} className="border-white/10 px-5 py-4 sm:border-r sm:last:border-r-0">
                    <div className="text-sm font-extrabold text-mission-gold">{title}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-200">{text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Monitoring, helpdesk, and lifecycle care",
                "Network, cloud, cameras, and access control",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 text-sm font-bold text-slate-100 backdrop-blur">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-mission-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">What we do</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">One technology partner. Fewer loose ends.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">We bring the core technology disciplines together so your organization spends less time coordinating vendors and more time moving forward.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, href }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mission-navy/10 text-mission-navy"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-extrabold text-mission-ink">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
                {href && (
                  <Link href={href} className="mt-5 inline-flex items-center gap-2 font-bold text-mission-navy transition hover:text-mission-gold">
                    Learn more <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-mission" className="bg-mission-mist py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Why Mission</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Small-business culture. Enterprise-level solutions.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Responsive", "Get real help from people who know your environment."],
              ["Proactive", "Fix risk and technical debt before they become emergencies."],
              ["Secure", "Build security into identity, endpoints, email, network, and operations."],
              ["Strategic", "Tie technology decisions to budget, risk, growth, and business goals."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-lg font-extrabold text-mission-navy">{title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Who we serve</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Technology for organizations that cannot afford chaos.</h2>
            </div>
            <LockClosedIcon className="h-16 w-16 text-mission-gold" />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-xl border border-slate-200 px-5 py-4 font-bold text-slate-700">{industry}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-mission-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Ready when you are</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Let’s make your technology easier to run, easier to secure, and easier to grow.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Tell us what you’re working through. We’ll route your message to the right person and follow up with a practical next step.</p>
            <div className="mt-8 border-l-4 border-mission-gold pl-5">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-300">Prefer to call?</div>
              <a href="tel:+17652458515" className="mt-1 inline-block text-2xl font-black text-white">(765) 245-8515</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
