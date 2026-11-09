import { withSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TeamProfiles, type TeamProfile } from "@/components/TeamProfiles";

export const metadata: Metadata = withSeoMetadata({
  title: "About Us | Mission Technology Solutions",
  description: "Learn how Mission Technology Solutions grew from a 2019 home-based startup into an Indiana IT and cybersecurity partner supporting more than 1,000 devices.",
}, "/about");

const values = [
  ["Transparency", "We keep billing, communication, timelines, and expectations clear so you know what to expect and where things stand."],
  ["Integrity", "Our team earns your trust by treating your data, sensitive information, and security with care and responsibility."],
  ["Passion", "We are dedicated to solving the issue in front of us and helping your business function at its best."],
  ["Quality", "We take care with the details, document the work, and finish the job well."],
  ["Service", "Serving clients comes before profit. We focus on what helps your organization and the people who depend on it."],
  ["Excellence", "We hold ourselves to a higher standard, keep growing and improving, and use that progress to serve you better."],
];

const differences = [
  ["Talk to the people who solve it", "No escalation maze. You can reach the technician who can move your issue forward."],
  ["Get help without the long wait", "We work to respond quickly, keep you informed, and get you out of the hold queue."],
  ["Work with friendly experts", "Our techs are real people who love technology, explain what happened, and help prevent a repeat."],
  ["Know what your bill covers", "Straightforward, predictable billing makes it easier to plan and easier to trust."],
  ["Get a partner beyond the helpdesk", "We guide your business on technology, operations, and security so your systems support where you are going."],
];

const certificationGroups = [
  ["Networking", ["Network+", "Cisco CCNA", "Cisco Certified Network Professional (CCNP) Enterprise", "Cisco Certified Network Professional (CCNP) Wireless", "Aruba Architect for Network Architecture"]],
  ["Security & Incident Response", ["Security+", "Cisco Certified Network Professional (CCNP) Security", "Cisco Certified Network Professional (CCNP) Cybersecurity", "eCIR Incident Response", "CISSP"]],
  ["Microsoft Cloud & Endpoint", ["MS-102: Microsoft 365 Administrator", "MD-102: Endpoint Administrator"]],
  ["Systems & Support", ["A+", "Server+"]],
];

const team: TeamProfile[] = [
  { name: "Alyssa Hopen", role: "Service Coordinator", bio: "Alyssa helps keep service moving smoothly from the first request through follow-up. She coordinates communication, helps connect clients with the right Mission resources, and keeps the service experience organized and approachable.", image: "/photos/team-alyssa-20260924.jpg" },
  { name: "Ashley Padgett", role: "Billing & Executive Assistant", bio: "What I do: I handle accounts payable and receivable, payroll and internal accounting, project scheduling and customer communication, and assist the executive team with organization and documentation. Why I do it: I love being able to help my family and the organizations we serve. Most interesting fact: I have an extensive background working with dogs and horses, including training protection dogs to bite people, for fun. Least interesting fact: I am married to Westin.", image: "/photos/team-ashley.png" },
  { name: "Brian Gaddie", role: "Director of Sales", bio: "What I do: I lead business sales and strategy, build collaborative business relationships with vendors and organizations, and provide excellent customer service to grow opportunities and revenue for Mission. Why I do it: I love technology and continuous learning. I’m a technologist who believes in bringing businesses across Indiana the latest IT, telecommunications, and software solutions. Most interesting fact: I’m pictured on my LinkedIn page beside Indiana University’s National Championship football trophy, the Big Ten trophy, the Heisman Trophy, and the Old Oaken Bucket.", image: "/photos/team-brian.jpg" },
  { name: "Colton Langley", role: "Installation Technician", bio: "What I do: I assist with security system installations, PTZ and advanced 360 cameras and door access controls, as well as quality networking and cybersecurity systems. I provide great service for clients’ security needs, and go fishin’ every once in a while. Why I do it: I’m driven to provide quality work and give clients peace of mind that their property and cyber protection are in order. Most interesting fact: I have 13 pet tarantulas. Least interesting fact: I have red hair.", image: "/photos/team-colton.jpg" },
  { name: "Dylan Wyatt", role: "Helpdesk Technician", bio: "Dylan helps Mission clients navigate technology questions and day-to-day support needs with a service-first mindset. He is focused on clear communication, reliable troubleshooting, and a better experience for every user.", image: "/photos/team-dylan.jpg" },
  { name: "Jacob Bohlmann", role: "Helpdesk Technician", bio: "Jacob supports clients with friendly, practical technical help. He works to make everyday technology issues less disruptive so teams can stay focused on the work that matters most.", image: "/photos/team-jacob.jpg" },
  { name: "Jonathan Davis", role: "Installation Technician", bio: "What I do: I assist with advanced installations including structured cabling, physical security cameras and door access control, network systems deployment, and AV integration. I lead installation and structured cabling projects onsite and coordinate with contractors and customers. Why I do it: I’m proud to deliver clean, reliable installations that make our client’s technology simple and dependable. Most interesting fact: I’m quite literally walking radio. Least interesting fact: I share the same name as the lead singer of Korn.", image: "/photos/team-jonathan.jpg" },
  { name: "Westin Padgett", role: "Chief Executive Officer & Founder", bio: "What I do: Account management and customer relations, staff and vendor management, sales, and network and AV systems design. Why I do it: I started Mission to equip businesses and nonprofits with the tools and knowledge they need to protect themselves and function efficiently. Most interesting fact: I have a wife, son, and three awesome dogs that are all significantly more talented and better looking than I am. Least interesting fact: I got to work on a world-famous studio for Bon Iver…one time, but I still mention it at about every sales meeting.", image: "/photos/team-westin.png" },
];

export default function AboutPage() {
  return <main>
    <SiteHeader />
    <section className="hero-motion relative overflow-hidden bg-mission-ink py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(48,80,108,0.9),_transparent_42%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">About Mission</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Strategic IT excellence, <span className="text-mission-gold">every business, every time.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">We help organizations use dependable technology, stronger security, and friendly, efficient support to better serve their communities.</p>
          <Link href="/#contact" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-mission-gold px-6 py-3.5 font-bold text-mission-ink transition hover:brightness-105">Talk with our team <ArrowRightIcon className="h-4 w-4" /></Link>
        </div>
        <div className="relative mx-auto w-full max-w-2xl"><div className="absolute -inset-3 rounded-[1.75rem] border border-mission-gold/30" /><div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white p-5 shadow-2xl sm:p-8"><Image src="/photos/mission-team-illustration.png" alt="Illustration representing the Mission Technology Solutions team" width={1732} height={594} priority className="h-auto w-full" /></div></div>
      </div>
    </section>

    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Our origin</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Technology should serve people. The companies behind it should lead with integrity. That is why we built Mission.</h2>
          <div className="mt-8 border-l-4 border-mission-gold pl-5">
            <div className="text-4xl font-black text-mission-navy">2019</div>
          </div>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>Mission was founded in 2019 under the name Mission MSP by Westin Padgett. With experience in cybersecurity, network architecture, and ministry, Westin had seen too many churches and nonprofits struggle to find a reliable technology partner, and too many vendors take advantage of organizations that were simply trying to serve their communities well.</p>
          <p>So he decided to build something different. Mission began as a small, part-time operation run from his home outside of another job. Through patience, care, and a commitment to doing the work right, it grew into an Indiana technology firm trusted by local businesses, churches, and not-for-profits, as well as municipalities, enterprises, and large organizations.</p>
          <p>In 2025, Mission MSP became Mission Technology Solutions. The new name and brand made it easier to communicate who we are and the full range of work we provide, from managed IT and cybersecurity to networking, cloud, communications, and physical security, while carrying the same Mission values forward.</p>
          <p>Today, Mission supports more than 1,000 devices and brings its team into high-stakes work, from multi-million-dollar incident response scenarios to large-scale network and access-control installations, managed IT, and cybersecurity programs for complex environments.</p>
          <p>Our ministry values have been part of Mission from the beginning. They shape how we communicate, how we recommend solutions, and how we show up when a client needs help. The name is a reminder of that purpose: technology is not the mission. It is one of the tools that helps people carry theirs forward.</p>
        </div>
      </div>
    </section>

    <section id="values" className="relative isolate overflow-hidden bg-mission-ink py-16 text-white sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(217,167,55,0.18),transparent_62%)]" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-mission-gold">Our core values</p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">The principles behind every promise we make.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-200 lg:justify-self-end">These values shape how we communicate, protect your information, solve problems, and make decisions for your organization.</p>
        </div>

        <div className="mt-10 grid border-y border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Transparency", "You should not have to guess what a project will cost, when it will be complete, or what happens next. We communicate clearly about billing, timelines, expectations, and progress, so you can make informed decisions and plan with confidence."],
            ["Integrity", "You trust us with systems and information central to your organization. We treat your data, sensitive information, and security with care, recommend what fits your needs, and act in the best interest of your team."],
            ["Passion", "We stay with the problem until we understand what is getting in the way. Our team is dedicated to solving issues and helping your business function better, not just checking a ticket off the list."],
            ["Quality", "We take care with the details, document the work, and finish the job well. From the first assessment through the final handoff, we aim for reliable results your team can count on."],
            ["Service", "We believe our work starts with service. We put client needs and the health of your organization ahead of our bottom line, taking time to understand what will genuinely help your team."],
            ["Excellence", "We do not settle for standing still. We keep learning, growing, and improving our skills and processes so we can provide better support and guidance to you."],
          ].map(([title, text], index) => (
            <article key={title} className="border-b border-white/15 px-5 py-7 first:pl-0 sm:odd:border-r sm:odd:pl-0 sm:even:pl-5 lg:border-r lg:px-6 lg:py-8 lg:last:border-r-0">
              <span aria-hidden="true" className="text-xs font-black tracking-[0.18em] text-mission-gold">0{index + 1}</span>
              <h3 className="mt-3 text-2xl font-extrabold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-200">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Relationship first</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Why Working With Mission is Different</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Technology works best when the people behind it know your people, your goals, and what matters to your organization.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {differences.map(([title, text], index) => <article key={title} className="rounded-2xl border border-slate-200 bg-mission-mist/50 p-6">
            <span aria-hidden="true" className="text-sm font-black text-mission-gold">0{index + 1}</span>
            <h3 className="mt-3 text-lg font-extrabold text-mission-ink">{title}</h3>
            <p className="mt-2 leading-7 text-slate-600">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-white py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Certifications & expertise</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Experience you can build on.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Our team brings recognized credentials across infrastructure, wireless, cybersecurity, incident response, and enterprise networking.</p></div><div className="mt-10 grid items-center gap-5 rounded-3xl border border-slate-200 bg-mission-mist p-5 sm:grid-cols-2 lg:grid-cols-4"><div className="flex h-24 items-center justify-center rounded-2xl bg-white p-3"><Image src="/certifications/comptia.png" alt="CompTIA certification badges" width={1000} height={300} className="max-h-full w-auto object-contain" /></div><div className="flex h-24 items-center justify-center rounded-2xl bg-white p-3"><Image src="/certifications/cisco.png" alt="Cisco CCNA and CCNP certification marks" width={800} height={450} className="max-h-full w-auto object-contain" /></div><div className="flex h-24 items-center justify-center rounded-2xl bg-slate-950 p-3"><Image src="/certifications/cissp.png" alt="CISSP certification mark" width={500} height={500} className="max-h-full w-auto object-contain" /></div><div className="flex h-24 items-center justify-center rounded-2xl bg-white p-3"><Image src="/certifications/ecir.png" alt="eCIR Incident Response certification badge" width={256} height={304} className="max-h-full w-auto object-contain" /></div></div><div className="mt-12 space-y-10">{certificationGroups.map(([group, certs]) => <div key={group as string}><h3 className="text-2xl font-black text-mission-ink">{group}</h3><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{(certs as string[]).map((cert) => <div key={cert} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-mission-mist/60 p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mission-navy text-mission-gold"><ShieldCheckIcon className="h-5 w-5" /></div><p className="pt-1 text-sm font-extrabold leading-6 text-mission-ink">{cert}</p></div>)}</div></div>)}</div></div></section>

    <section className="bg-white py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Our story</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Built to make technology support more practical.</h2></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{[["The problem", "In the Kokomo area, many nonprofits and growing organizations were navigating unclear technology needs, limited security knowledge, and services that strained already-tight budgets."], ["The solution", "Mission set out to provide practical managed IT and networking support that helps organizations focus their attention on the people and communities they serve."], ["Where we are now", "Our work has expanded beyond nonprofits to serve industries including manufacturing and government, with services that support today’s operations and planning for what comes next."]].map(([title, text], index) => <article key={title} className="border-l-4 border-mission-gold pl-6"><div className="text-sm font-black uppercase tracking-widest text-mission-navy">0{index + 1}</div><h3 className="mt-3 text-2xl font-extrabold text-mission-ink">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

    <section className="bg-mission-mist py-20 lg:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Our team</p><h2 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">People who care about getting it right.</h2><p className="mt-5 max-w-2xl leading-8 text-slate-600">Great people make a great Mission. Meet the problem-solvers, friendly faces, and steady hands who bring ours to life.</p><div className="mt-12 space-y-12"><TeamProfiles people={team} /></div></div></section>

    <section className="bg-mission-navy py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8"><div><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-gold">How can we help?</p><h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Tell us about your business and the work you need technology to support.</h2></div><Link href="/#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-extrabold text-mission-navy transition hover:bg-slate-100">Start a Conversation <ArrowRightIcon className="h-4 w-4" /></Link></div></section>
    <SiteFooter />
  </main>;
}



