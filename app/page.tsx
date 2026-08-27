import {
  ArrowRightIcon,
  BoltIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CheckCircleIcon,
  CloudIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
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

const liveSignals = [
  { label: "Helpdesk queue", value: "12 active", status: "Triaged by priority" },
  { label: "Endpoints", value: "Protected", status: "Monitoring and patching" },
  { label: "Microsoft 365", value: "Healthy", status: "Identity and mail watched" },
  { label: "Site security", value: "Online", status: "Cameras and access ready" },
];

const organizationPaths = [
  {
    title: "Owners & Executives",
    text: "Clear budgets, fewer technology surprises, and a team that can explain the plan without burying you in jargon.",
  },
  {
    title: "Office & Operations",
    text: "Fast support, smoother onboarding, working printers, stable Wi-Fi, and fewer interruptions in the middle of the day.",
  },
  {
    title: "Healthcare & Public Sector",
    text: "Security-minded support, documentation, access controls, and practical help preparing for audits and insurance reviews.",
  },
  {
    title: "Growing Teams",
    text: "Microsoft 365, devices, cabling, phones, cameras, and security that can scale without making every change painful.",
  },
];

const proofPoints = [
  ["Local", "Indiana-based team"],
  ["One partner", "IT, cloud, network, voice, cameras"],
  ["Proactive", "Monitoring, patching, lifecycle planning"],
  ["Secure", "Identity, endpoint, email, and network layers"],
];

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
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-20">
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
            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mission-gold text-mission-ink">
                  <ChartBarIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-300">Today</div>
                  <div className="text-sm font-black text-white">Systems watched</div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] shadow-2xl shadow-black/30 backdrop-blur">
              <div className="border-b border-white/10 bg-mission-ink/70 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-mission-gold">Mission Control</div>
                    <div className="mt-1 text-xl font-black">IT operations snapshot</div>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-extrabold text-emerald-200">Live</div>
                </div>
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-2">
                {liveSignals.map((signal, index) => (
                  <div key={signal.label} className="animate-signal rounded-xl border border-white/10 bg-white/10 p-4" style={{ animationDelay: `${index * 180}ms` }}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wide text-slate-300">{signal.label}</div>
                        <div className="mt-2 text-2xl font-black text-white">{signal.value}</div>
                      </div>
                      <div className="mt-1 h-3 w-3 rounded-full bg-mission-gold shadow-[0_0_18px_rgba(211,166,59,0.8)]" />
                    </div>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-3/4 animate-data-bar rounded-full bg-mission-gold" />
                    </div>
                    <div className="mt-3 text-sm font-semibold text-slate-200">{signal.status}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 p-4">
                <div className="relative overflow-hidden rounded-xl">
                  <Image src="/photos/mission-team-illustration.png" alt="Mission Technology Solutions team supporting a client environment" width={900} height={420} priority className="h-56 w-full object-cover sm:h-64" />
                  <div className="absolute inset-0 bg-gradient-to-t from-mission-ink/90 via-mission-ink/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="max-w-md text-2xl font-black leading-tight">Local people, practical answers, and systems that stay ready.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {proofPoints.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-3xl font-black text-mission-navy">{title}</div>
                <div className="mt-2 text-sm font-bold leading-6 text-slate-600">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-mission-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Solutions by role</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Different teams feel technology problems differently.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">The homepage can guide each visitor toward the problems they recognize fastest, then route them into the right service.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {organizationPaths.map((path, index) => (
                <article key={path.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-mission-navy/10 text-mission-navy transition group-hover:bg-mission-gold group-hover:text-mission-ink">
                    <CursorArrowRaysIcon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-black text-mission-gold">0{index + 1}</div>
                  <h3 className="mt-5 max-w-xs text-2xl font-black text-mission-ink">{path.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{path.text}</p>
                </article>
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
