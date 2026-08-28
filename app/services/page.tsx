import type { ComponentType } from "react";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CheckCircleIcon,
  CloudIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  LockClosedIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Services | Mission Technology Solutions",
  description: "Explore Mission Technology Solutions services including Managed IT, cybersecurity, Microsoft 365, structured cabling, physical security, communications, and strategic IT planning.",
};

type Icon = ComponentType<{ className?: string }>;

const featuredServices: {
  icon: Icon;
  title: string;
  eyebrow: string;
  text: string;
  href: string;
  bullets: string[];
}[] = [
  {
    icon: WrenchScrewdriverIcon,
    eyebrow: "Support",
    title: "Managed IT",
    text: "Responsive helpdesk, monitoring, patching, device lifecycle management, vendor coordination, and proactive support from people who learn your environment.",
    href: "/managed-it",
    bullets: ["Helpdesk & onsite support", "Monitoring and maintenance", "Technology roadmap planning"],
  },
  {
    icon: CpuChipIcon,
    eyebrow: "Connectivity",
    title: "Networking",
    text: "Business-grade wired and wireless networks, Wi-Fi planning, switching, firewalls, monitoring, and infrastructure support.",
    href: "/networking",
    bullets: ["Wi-Fi planning and heat mapping", "Switching and network design", "Performance monitoring and cleanup"],
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: "Protection",
    title: "Cybersecurity",
    text: "Layered security across identity, endpoints, email, cloud, network, users, and incident readiness so protection becomes part of daily operations.",
    href: "/cybersecurity",
    bullets: ["Endpoint protection & MDR", "Email and identity security", "Risk reviews and readiness"],
  },
  {
    icon: CpuChipIcon,
    eyebrow: "Infrastructure",
    title: "Structured Cabling",
    text: "Clean, labeled, tested cabling and network infrastructure that supports workstations, wireless, cameras, access control, phones, and future growth.",
    href: "/structured-cabling-security",
    bullets: ["Copper and fiber cabling", "Racks, closets, and cleanup", "Wireless infrastructure"],
  },
  {
    icon: LockClosedIcon,
    eyebrow: "Facilities",
    title: "Physical Security",
    text: "Camera systems, access control, viewing, recording, credentials, door schedules, and facility security designed around how your people move.",
    href: "/structured-cabling-security",
    bullets: ["Camera systems", "Access control", "Site walkthroughs and design"],
  },
];

const supportingServices = [
  {
    icon: CloudIcon,
    title: "Microsoft 365 & Cloud",
    text: "Teams, SharePoint, OneDrive, Exchange, Entra ID, Intune, migrations, licensing guidance, and secure collaboration.",
  },
  {
    icon: PhoneIcon,
    title: "Mission Connect",
    text: "Business VoIP, mobile calling, auto attendants, call routing, and communications that fit how your staff actually works.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Strategic IT & vCIO",
    text: "Roadmaps, budgets, lifecycle planning, compliance conversations, vendor alignment, and plain-language executive guidance.",
  },
  {
    icon: LifebuoyIcon,
    title: "Projects & Onsite Work",
    text: "New offices, expansions, refreshes, moves, hardware rollouts, network upgrades, cleanup, documentation, and hands-on execution.",
  },
];

const partnerVisuals = [
  { title: "WiFi 7 access", image: "/photos/partners/ubiquiti-u7-pro-max-01.png", alt: "Current-generation Ubiquiti U7 Pro Max access point" },
  { title: "PoE switching", image: "/photos/partners/ubiquiti-pro-max-24-poe-deployment.png", alt: "Current-generation Ubiquiti Pro Max PoE switch deployment" },
  { title: "Camera security", image: "/photos/partners/verkada-third-gen-bullet.png", alt: "Current-generation Verkada bullet camera" },
  { title: "Access control", image: "/photos/partners/verkada-access-controller-flexible.jpg", alt: "Current-generation Verkada access control installation" },
];

const missionStack = [
  ["People", "Helpdesk, onboarding, training, practical support, and a team your staff can reach."],
  ["Devices", "Workstations, servers, mobile devices, patching, security tools, standards, and lifecycle planning."],
  ["Cloud", "Microsoft 365, identity, email, files, collaboration, backup planning, and secure access."],
  ["Network", "Switches, Wi-Fi, firewalls, cabling, closets, monitoring, segmentation, and performance."],
  ["Facilities", "Cameras, access control, door schedules, recordings, and the physical layer that keeps sites connected."],
];

const outcomes = [
  "One partner across IT, cloud, network, communications, cameras, and access control.",
  "Fewer handoffs between disconnected vendors when something breaks or changes.",
  "A practical roadmap for upgrades, budgets, security priorities, and lifecycle replacements.",
  "Local support from a team that understands Indiana organizations and community-focused work.",
];

const serviceMoments = [
  "A new employee starts Monday and needs accounts, devices, phones, access, and permissions ready.",
  "Cyber insurance, a customer contract, or an audit asks for clearer proof of safeguards.",
  "The Wi‑Fi is unreliable, the network closet is a mystery, or cabling has become a bottleneck.",
  "Leadership needs a technology plan that is easier to explain than another emergency purchase.",
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="relative overflow-hidden bg-mission-ink text-white">
        <div className="absolute inset-0">
          <Image src="/photos/managed-it-team.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-mission-ink/90" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-mission-gold/20 blur-3xl" />
          <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-mission-navy/50 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 backdrop-blur">
              <SparklesIcon className="h-4 w-4 text-mission-gold" />
              A full technology team, organized around your mission
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Services that connect every layer of your <span className="text-mission-gold">technology stack.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Mission brings managed IT, cybersecurity, Microsoft 365, structured cabling, physical security, communications, and strategy into one coordinated support model.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#service-lines" className="inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink transition hover:-translate-y-0.5 hover:brightness-105">
                Explore Services <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/#contact" className="rounded-xl border border-white/20 px-6 py-3.5 font-extrabold text-white transition hover:bg-white/10">
                Get Started
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-10 hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/20 backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mission-gold text-mission-ink">
                  <ChartBarIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-300">Coverage</div>
                  <div className="text-sm font-black text-white">End-to-end</div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="grid gap-3 sm:grid-cols-2">
                {missionStack.map(([title, text], index) => (
                  <div key={title} className="animate-signal rounded-2xl border border-white/10 bg-white/10 p-5" style={{ animationDelay: `${index * 140}ms` }}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-black uppercase tracking-[0.18em] text-mission-gold">0{index + 1}</div>
                      <div className="h-3 w-3 rounded-full bg-mission-gold shadow-[0_0_18px_rgba(211,166,59,0.8)]" />
                    </div>
                    <h2 className="mt-5 text-2xl font-black text-white">{title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 animate-data-bar rounded-full bg-mission-gold" />
                    </div>
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
            {outcomes.map((outcome) => (
              <div key={outcome} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircleIcon className="h-7 w-7 text-mission-gold" />
                <p className="mt-4 text-sm font-bold leading-6 text-slate-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-mission-mist shadow-sm">
            <div className="grid gap-px bg-slate-200 md:grid-cols-4">
              {partnerVisuals.map((visual) => (
                <div key={visual.title} className="group bg-white p-6">
                  <div className="flex h-44 items-center justify-center rounded-2xl bg-slate-50 p-5">
                    <Image src={visual.image} alt={visual.alt} width={480} height={320} className="max-h-36 w-full object-contain transition duration-300 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-mission-navy">{visual.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="service-lines" className="bg-mission-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Core service lines</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Start with the outcome, then connect the right services underneath.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              Most technology problems do not fit neatly into one bucket. A camera project may need cabling, network planning, security policy, and support. A Microsoft 365 rollout may touch identity, devices, compliance, and training. Mission keeps those pieces together.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {featuredServices.map(({ icon: Icon, eyebrow, title, text, href, bullets }) => (
              <article key={title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-2 bg-mission-gold" />
                <div className="grid gap-8 p-7 md:grid-cols-[auto_1fr]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-mission-navy text-white transition group-hover:bg-mission-gold group-hover:text-mission-ink">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-mission-navy">{eyebrow}</p>
                    <h3 className="mt-3 text-3xl font-black tracking-tight text-mission-ink">{title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{text}</p>
                    <div className="mt-6 grid gap-3">
                      {bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                          <span className="h-2 w-2 rounded-full bg-mission-gold" />
                          {bullet}
                        </div>
                      ))}
                    </div>
                    <Link href={href} className="mt-7 inline-flex items-center gap-2 font-extrabold text-mission-navy transition hover:text-mission-gold">
                      View service details <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-mission-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">The rest of the bench</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">The “etc.” matters. That’s where projects usually get messy.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We support the connected services around the obvious ones, so your team is not stuck managing a pile of vendors who each own one tiny slice of the problem.
            </p>
            <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-extrabold text-mission-ink transition hover:brightness-105">
              Build a plan <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {supportingServices.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <Icon className="h-8 w-8 text-mission-gold" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative overflow-hidden rounded-3xl">
              <Image src="/photos/physical-security-monitoring.jpg" alt="Security monitoring dashboard and camera feeds" width={1100} height={760} className="h-[520px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-mission-ink/90 via-mission-ink/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">How services connect</p>
                <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight">Support is stronger when the physical, cloud, security, and people layers talk to each other.</h2>
              </div>
            </div>
            <div className="grid gap-4">
              {serviceMoments.map((moment, index) => (
                <div key={moment} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-mission-gold hover:shadow-lg">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mission-mist text-sm font-black text-mission-navy transition group-hover:bg-mission-gold group-hover:text-mission-ink">0{index + 1}</div>
                    <p className="font-bold leading-7 text-slate-700">{moment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-mission-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Not sure where to start?</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Tell us what you need the business to do. We’ll map the technology around it.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Whether you need daily IT support, a security uplift, a new camera system, Microsoft 365 help, or a facility project, we’ll route the conversation to the right people.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
