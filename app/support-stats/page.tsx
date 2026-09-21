import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SupportStatsDetail } from "@/components/SupportStats";

export const metadata: Metadata = {
  title: "Support Metrics | Mission Technology Solutions",
  description: "Explore illustrative email response, phone response, and customer satisfaction trends for Mission Technology Solutions.",
  alternates: { canonical: "/support-stats" },
};

export default function SupportStatsPage() {
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-[1440px] px-6 pt-8 lg:px-8">
        <Link href="/#support-stats" className="text-sm text-mission-navy underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">← Back to homepage</Link>
      </div>
      <SupportStatsDetail />
      <SiteFooter />
    </main>
  );
}

