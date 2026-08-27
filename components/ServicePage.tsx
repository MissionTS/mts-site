import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  introduction: string;
  outcomes: string[];
  services: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
};

export function ServicePage({ eyebrow, title, accent, introduction, outcomes, services, process }: ServicePageProps) {
  return (
    <main>
      <SiteHeader />

      <section className="relative overflow-hidden bg-mission-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(48,80,108,0.9),_transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white">
            <ArrowLeftIcon className="h-4 w-4" /> Back to all services
          </Link>
          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            {title} <span className="text-mission-gold">{accent}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{introduction}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="mailto:sales@missionts.com" className="inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-bold text-mission-ink transition hover:brightness-105">
              Talk with our team <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href="tel:+17652458515" className="rounded-xl border border-white/20 px-6 py-3.5 font-bold transition hover:bg-white/10">(765) 245-8515</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">What you gain</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink">Technology that supports the way you work.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 rounded-2xl bg-mission-mist p-5">
                <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-mission-gold" />
                <span className="font-semibold leading-7 text-slate-700">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mission-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">What’s included</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Practical services, built around your environment.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="h-1 w-12 rounded-full bg-mission-gold" />
                <h3 className="mt-5 text-xl font-extrabold text-mission-ink">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">How we work</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink">A clear path from today to better.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="border-l-4 border-mission-gold pl-6">
                <div className="text-sm font-black uppercase tracking-widest text-mission-navy">{item.step}</div>
                <h3 className="mt-3 text-2xl font-extrabold text-mission-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-mission-navy py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Let’s get started</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Tell us what’s working, what isn’t, and where you need to go.</h2>
          </div>
          <a href="mailto:sales@missionts.com" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-extrabold text-mission-navy transition hover:bg-slate-100">
            Contact Sales <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
