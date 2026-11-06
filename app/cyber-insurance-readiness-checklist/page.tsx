import type { Metadata } from "next";
import { CyberInsuranceChecklist } from "@/components/CyberInsuranceChecklist";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Cyber Insurance Readiness Checklist | Mission Technology Solutions",
  description:
    "Prepare for a cyber insurance renewal with a practical checklist for policy terms, security controls, evidence, incident response, and broker conversations.",
  alternates: { canonical: "/cyber-insurance-readiness-checklist" },
  openGraph: {
    type: "website",
    siteName: "Mission Technology Solutions",
    url: "/cyber-insurance-readiness-checklist",
    title: "Cyber Insurance Readiness Checklist | Mission Technology Solutions",
    description:
      "A practical checklist to help your organization prepare for cyber insurance applications and renewals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Insurance Readiness Checklist | Mission Technology Solutions",
    description:
      "Review policy terms, security controls, evidence, incident response, and renewal steps with this practical checklist.",
  },
};

export default function CyberInsuranceReadinessChecklistPage() {
  return (
    <main>
      <SiteHeader />
      <CyberInsuranceChecklist />
      <SiteFooter />
    </main>
  );
}

