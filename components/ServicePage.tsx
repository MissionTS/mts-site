import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  introduction: string;
  heroImage: string;
  heroImageAlt: string;
  outcomes: string[];
  services: { title: string; text: string }[];
  situations: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  partnerShowcase?: { title: string; text: string; image: string; alt: string }[];
  industryExperience?: { title: string; text: string }[];
  certifications?: string[];
};

export function ServicePage({ eyebrow, title, accent, introduction, heroImage, heroImageAlt, outcomes, services, situations, process, faqs, partnerShowcase, industryExperience, certifications }: ServicePageProps) {
  return (
    <main>
      <SiteHeader />

      <section className="relative overflow-hidden bg-mission-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(48,80,108,0.9),_transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white">
              <ArrowLeftIcon className="h-4 w-4" /> Back to all services
            </Link>
            <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">{eyebrow}</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {title} <span className="text-mission-gold">{accent}</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{introduction}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-bold text-mission-ink transition hover:brightness-105">
                Talk with our team <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href="tel:+17652458515" className="rounded-xl border border-white/20 px-6 py-3.5 font-bold transition hover:bg-white/10">(765) 245-8515</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div className="absolute -inset-3 rounded-[1.75rem] border border-mission-gold/30" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-mission-navy shadow-2xl">
              <Image src={heroImage} alt={heroImageAlt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-mission-ink/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-mission-ink py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">When it’s time to act</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Does this sound familiar?</h2>
              <p className="mt-5 leading-8 text-slate-300">You do not need to wait for an emergency. These are common signs that a focused conversation can uncover a better path forward.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {situations.map((situation) => (
                <div key={situation.title} className="bg-mission-ink p-6 sm:p-7">
                  <h3 className="text-lg font-extrabold text-white">{situation.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{situation.text}</p>
                </div>
              ))}
            </div>
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

      {partnerShowcase && (
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Current-gen platforms</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Modern hardware, installed with practical field experience.</h2>
              </div>
              <p className="text-lg leading-8 text-slate-600">We design around the environment first, then match the right cabling, switching, wireless, cameras, access control, and management platform to the job.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {partnerShowcase.map((item) => (
                <article key={item.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-52 items-center justify-center bg-slate-50 p-6">
                    <Image src={item.image} alt={item.alt} width={520} height={360} className="max-h-44 w-full object-contain transition duration-300 group-hover:scale-105" />
                  </div>
                  <div className="border-t border-slate-100 p-6">
                    <h3 className="text-xl font-black text-mission-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {industryExperience && (
        <section className="relative overflow-hidden bg-mission-navy py-20 text-white lg:py-24">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(211,166,59,0.18),_transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">Experience that travels well</p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">Networks built for the environments where reliability matters most.</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {industryExperience.map((industry) => (
                <div key={industry.title} className="bg-mission-navy/90 p-7">
                  <h3 className="text-xl font-black text-white">{industry.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{industry.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {certifications && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Technical depth</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-mission-ink sm:text-4xl">Credentials behind the recommendations.</h2>
              </div>
              <p className="max-w-xl text-slate-600">Our networking guidance is grounded in hands-on deployment experience and continuing technical education.</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">{certifications.map((certification) => <span key={certification} className="rounded-full border border-slate-200 bg-mission-mist px-5 py-3 text-sm font-extrabold text-mission-navy">{certification}</span>)}</div>
          </div>
        </section>
      )}

      <section className="bg-mission-mist py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Questions, answered</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink">What organizations ask us.</h2>
            <p className="mt-5 leading-8 text-slate-600">Every environment is different, but these answers can help you understand what a conversation with Mission might look like.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-mission-ink">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mission-navy/10 text-xl text-mission-navy transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl border-t border-slate-100 pt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
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
          <Link href="/#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-extrabold text-mission-navy transition hover:bg-slate-100">
            Contact Sales <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
