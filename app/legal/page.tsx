import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Legal | Mission Technology Solutions",
  description:
    "Review Mission Technology Solutions' terms and conditions, Master Services Agreement, service attachments, and data processing terms.",
  alternates: { canonical: "/legal" },
};

const exhibits = [
  { label: "Master Services Agreement", href: "https://ourterms.live/missionmsp/MSA" },
  { label: "Service Attachment for Managed Services", href: "https://ourterms.live/missionmsp/Managed-IT-Attachment" },
  { label: "Service Attachment for Compliance Services", href: "https://ourterms.live/missionmsp/Compliance-Attachment" },
  { label: "Service Attachment for AI Services", href: "https://ourterms.live/missionmsp/AI-Attachment" },
  { label: "Data Processing Agreement", href: "https://ourterms.live/missionmsp/DPA" },
  { label: "Schedule of Third-Party Services", href: "https://ourterms.live/missionmsp/Third-Party-Services" },
];

export default function LegalPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-mission-mist py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Legal</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-mission-ink sm:text-5xl">Terms and Conditions</h1>
          </div>

          <article className="rounded-2xl bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
            <p className="text-base leading-8 text-slate-700">
              Provider reserves the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information, including Services or pricing is inaccurate.
            </p>

            <section className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-mission-ink sm:text-3xl">
                Acceptance and Incorporation by Reference
              </h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  This Order together with the Master Services Agreement and Service Attachments and other terms and conditions identified on Exhibit A, all of which are incorporated herein by reference (collectively, the “Agreement”) is between Mission MSP (sometimes referred to as “we,” “us,” “our,” or “Provider”), and the customer identified on the Order (sometimes referred to as “you,” “your,” or “Client”). This Agreement is effective as of the date the Client accepts the Order (the “Effective Date”).
                </p>

                <p>
                  By signing or accepting this Order, Client acknowledges, represents, and warrants that it has read and agrees to the terms and conditions identified on Exhibit A to this Order which are incorporated as if fully set forth herein.
                </p>

                <p>
                  The parties hereby agree that electronic signatures to this Order shall be relied upon and will bind them to the obligations stated herein. Each party hereby warrants and represents that it has the express authority to execute this Agreement(s).
                </p>

                <p>
                  Provider may make changes to the Agreement at any time. If there are changes, Provider will revise the date at the top of the document. Provider may or may not provide Client with additional notice regarding such changes. Client should review the terms and conditions regularly. Unless otherwise noted, the amended terms and conditions will be effective immediately, and your continued use of the Services thereafter constitutes your acceptance of the changes. If you do not agree to the amended terms and conditions, you must stop using the Services immediately. Please note, you may incur a termination fee or other third-party fees, if applicable. You may access the current version of the terms and conditions at any time by visiting{" "}
                  <Link href="https://missionts.com/legal" className="font-semibold text-mission-navy underline decoration-mission-gold underline-offset-4">
                    https://missionts.com/legal
                  </Link>.
                </p>

                <p>
                  The parties, acting through their authorized officers, hereby execute this Agreement.
                </p>
              </div>
            </section>

            <section className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold tracking-tight text-mission-ink sm:text-3xl">Exhibit A</h2>
              <ul className="mt-5 space-y-3">
                {exhibits.map((exhibit) => (
                  <li key={exhibit.href}>
                    <a
                      href={exhibit.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold leading-7 text-mission-navy underline decoration-mission-gold underline-offset-4 hover:text-mission-ink"
                    >
                      {exhibit.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <p className="mt-6 text-sm leading-6 text-slate-600">
            <Link href="/" className="font-semibold text-mission-navy hover:text-mission-ink">Mission Technology Solutions</Link>
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
