import { withSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { KokomoServicePage } from "@/components/KokomoServicePage";

const path = "/kokomo-cybersecurity";
const title = "Cybersecurity Services in Kokomo, Indiana | Mission Technology Solutions";
const description = "Practical cybersecurity for Kokomo businesses, including identity protection, endpoint security, email, backups, awareness, and recovery planning.";
const faqs = [
  { question: "What cybersecurity services can you help Kokomo businesses with?", answer: "We can assess and strengthen sign-in security, endpoint protection, email safeguards, backups, security awareness, and incident readiness. Recommendations are based on your systems, risks, and operational needs." },
  { question: "Can you improve security without replacing everything?", answer: "Often, yes. We review the tools and processes already in place, identify gaps, and prioritize changes that fit your environment and budget." },
  { question: "How should a small team prepare for a cyber incident?", answer: "Start by confirming who makes decisions, how access can be contained, which systems are most important, and how backups can be restored. We can help document and exercise a practical response plan." },
  { question: "Do you support organizations in Howard County?", answer: "Yes. Mission is based in Kokomo and supports organizations in Kokomo and across Howard County through remote service and coordinated onsite work." },
  { question: "Can you work with our current IT provider or employee?", answer: "Yes. We can coordinate security assessments, projects, documentation, or ongoing controls with your existing IT team when roles and access are agreed in advance." },
];

export const metadata: Metadata = withSeoMetadata({ title, description }, path);

export default function Page() {
  return <KokomoServicePage breadcrumbPath={path} service="Cybersecurity" title="Cybersecurity for Kokomo businesses." accent="Build resilience without adding busywork." intro="Protect the accounts, devices, email, and business information your team relies on. Mission helps Kokomo organizations make security practical, understandable, and easier to maintain." image="/photos/cybersecurity-operations.jpg" imageAlt="Security operations team monitoring business technology" localDescription="Many local organizations run a mix of office systems, Microsoft 365, line-of-business applications, and connected equipment. We look at how those pieces fit together, then prioritize safeguards that reduce risk without getting in the way of daily work." services={[
    { title: "Identity & sign-in protection", text: "Review multifactor authentication, administrator access, account recovery, and user changes to reduce avoidable account risk." },
    { title: "Endpoint security", text: "Protect and monitor the laptops, desktops, and servers your staff use across office and remote work." },
    { title: "Email security & awareness", text: "Improve safeguards against phishing and help staff know how to report suspicious messages." },
    { title: "Backup & recovery planning", text: "Review important data, backup coverage, recovery responsibilities, and restoration testing." },
    { title: "Security assessments", text: "Identify gaps in current tools and practices, then rank recommended improvements by impact." },
    { title: "Incident readiness", text: "Clarify escalation contacts, decision owners, and the first steps to take if an event occurs." },
  ]} faqs={faqs} />;
}
