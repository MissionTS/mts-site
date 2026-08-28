import {
  ArrowRightIcon,
  BoltIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CloudIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  LockClosedIcon,
  PhoneIcon,
  ServerStackIcon,
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
  { label: "Average response time", value: "<8 min", status: "Fast help when it matters" },
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

const testimonials = [
  {
    quote: "Mission Technology Solutions modernized our organization and has always been a reliable and attentive partner. Their amazing and quick support, mixed with invaluable strategic consulting, helped us make sure IT was always helping the organization, not hurting it.",
    name: "Troy",
    organization: "Kokomo Rescue Mission",
  },
  {
    quote: "The team at Mission have been incredibly helpful, responsive, and created an environment where we feel in control of our technology.",
    name: "Coordinated Assistance Ministries",
    organization: "Mission Technology Solutions client",
  },
  {
    quote: "Mission's team has been amazing and has helped rapidly modernize and secure our IT systems. They assisted us with updating our network equipment, moving us to the cloud, deploying town-wide security, and streamlining our operations. We really appreciate Mission's commitment and partnership in helping keep us safe and secure. The peace of mind aspect itself is enough of a burden lifted from our shoulders.",
    name: "Medium NW Indiana Municipality",
    organization: "Mission Technology Solutions client",
  },
  {
    quote: "The MTS team came in and completely changed the way we do IT in aspects we didn't even consider. They had such a deep understanding of our systems, assisted heavily with our budgeting, and made sure that we got an amazing value out of our investment. The helpdesk team also made sure that we never spent any amount of time longer than necessary facing an issue. Truly an amazing team to work with.",
    name: "Large Factory in Northern Indiana",
    organization: "Mission Technology Solutions client",
  },
];

const outcomeCards = [
  {
    icon: LifebuoyIcon,
    eyebrow: "Support",
    title: "Your team knows exactly who to call.",
    text: "Friendly helpdesk, remote support, onsite escalation, onboarding, and recurring issue cleanup so daily work keeps moving.",
    href: "/managed-it",
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: "Security",
    title: "Protection is part of the operating plan.",
    text: "Endpoint security, email protection, awareness, backup planning, identity controls, and practical insurance-readiness guidance.",
    href: "/cybersecurity",
  },
  {
    icon: CpuChipIcon,
    eyebrow: "Infrastructure",
    title: "The physical layer is handled with care.",
    text: "Structured cabling, wireless, cameras, door access, network closets, and clean documentation from the same team.",
    href: "/structured-cabling-security",
  },
];

const operatingModel = [
  ["Listen", "We learn the business, the people, and the pain points before prescribing tools."],
  ["Stabilize", "We document the environment, reduce immediate risk, and clean up recurring issues."],
  ["Protect", "We layer security across identity, devices, email, network, backups, and user behavior."],
  ["Plan", "We build roadmaps for upgrades, budgets, lifecycle replacement, and future projects."],
];

const authorityPanels = [
  {
    title: "Nonprofit and community roots",
    text: "Mission started with the goal of helping organizations serve their communities without being trapped by overpriced or confusing technology.",
  },
  {
    title: "Business-grade networking",
    text: "From Wi-Fi planning to secure network infrastructure, we design around reliability, coverage, and the way your team actually works.",
  },
  {
    title: "Security-minded by default",
    text: "Cybersecurity is part of the conversation from the start, especially for healthcare, government, nonprofits, and growing businesses.",
  },
];

const faqItems = [
  ["Can Mission be our full IT department?", "Yes. We can provide helpdesk, monitoring, security, projects, Microsoft 365, networking, phones, and planning as one partner."],
  ["Do you handle onsite work?", "Yes. We support remote issues and onsite needs including structured cabling, network equipment, cameras, access control, and physical installs."],
  ["Can you help us plan a budget?", "Yes. Our strategic IT work helps turn urgent technology spending into a clearer roadmap with priorities, timing, and lifecycle planning."],
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
              <Link href="/services" className="rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative">
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

      <section className="bg-mission-ink py-14 text-white lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Client perspective</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">Technology support should leave your team feeling more in control.</h2>
            </div>
            <Link href="/#contact" className="inline-flex shrink-0 items-center gap-2 font-extrabold text-mission-gold transition hover:text-white">Start a conversation <ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-8 border-y border-white/15 py-2 lg:grid-cols-2 lg:gap-0">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.organization} className="relative py-7 lg:px-8 lg:first:pl-0 lg:last:border-l lg:last:border-white/15">
                <div className="text-4xl font-black leading-none text-mission-gold" aria-hidden="true">“</div>
                <blockquote className="mt-2 max-w-xl text-base font-semibold leading-7 text-slate-200">{testimonial.quote}</blockquote>
                <figcaption className="mt-5">
                  <div className="text-sm font-black text-white">{testimonial.name}</div>
                  <div className="mt-1 text-xs font-bold leading-5 text-mission-gold">{testimonial.organization}</div>
                </figcaption>
              </figure>
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">What we solve</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Turn disconnected technology into one operating system.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">The old site says it well: Mission is not just IT support, it is IT partnership. This section now frames your services around the problems clients actually feel first.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {outcomeCards.map(({ icon: Icon, eyebrow, title, text, href }) => (
              <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-2 bg-mission-gold" />
                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-black uppercase tracking-[0.18em] text-mission-navy">{eyebrow}</div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mission-navy text-white transition group-hover:bg-mission-gold group-hover:text-mission-ink">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-8 text-2xl font-black leading-tight text-mission-ink">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                  <Link href={href} className="mt-7 inline-flex items-center gap-2 font-bold text-mission-navy transition hover:text-mission-gold">
                    See how it works <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.slice(3).map(({ icon: Icon, title, text, href }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-mission-navy shadow-sm"><Icon className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-black text-mission-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                    {href && <Link href={href} className="mt-3 inline-flex text-sm font-bold text-mission-navy">Learn more</Link>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-mission" className="bg-mission-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">How Mission works</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A better IT relationship has a rhythm.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">We listen first, stabilize the environment, build in protection, and keep a living roadmap so support does not feel random.</p>
              <Link href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-bold text-mission-ink transition hover:brightness-105">
                Start with a consult <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {operatingModel.map(([title, text], index) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="text-sm font-black text-mission-gold">0{index + 1}</div>
                  <div className="mt-5 text-2xl font-black">{title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl">
              <Image src="/photos/cybersecurity-operations.jpg" alt="Cybersecurity operations and monitoring workspace" width={1100} height={760} className="h-[520px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-mission-ink/85 via-mission-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Authority signals</p>
                <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight">Built for organizations that serve people, protect data, and cannot afford confusion.</h2>
              </div>
            </div>
            <div className="grid gap-4">
              {authorityPanels.map((panel) => (
                <article key={panel.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex gap-4">
                    <ClipboardDocumentCheckIcon className="mt-1 h-6 w-6 shrink-0 text-mission-gold" />
                    <div>
                      <h3 className="text-xl font-black text-mission-ink">{panel.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{panel.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
              <div key={industry} className="group rounded-2xl border border-slate-200 px-6 py-5 transition hover:-translate-y-1 hover:border-mission-gold hover:shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-black text-slate-800">{industry}</div>
                  <ServerStackIcon className="h-5 w-5 text-mission-navy transition group-hover:text-mission-gold" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">Support, security, infrastructure, and planning matched to the way this organization operates.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-mission-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Resources</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Give buyers answers before they have to ask.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">This builds authority lower on the page and helps visitors understand the scope of Mission before they submit the form.</p>
            </div>
            <div className="grid gap-4">
              {faqItems.map(([question, answer]) => (
                <div key={question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black text-mission-ink">{question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{answer}</p>
                </div>
              ))}
            </div>
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
