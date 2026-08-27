import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Managed IT Services | Mission Technology Solutions",
  description: "Responsive managed IT support, monitoring, maintenance, lifecycle planning, and strategic guidance for organizations in Indiana.",
};

export default function ManagedITPage() {
  return <ServicePage
    eyebrow="Managed IT Services"
    title="Less downtime. More momentum."
    accent="IT that simply works."
    introduction="Your team should be able to focus on the work that matters—not recurring technology problems. Mission combines responsive human support with proactive management to keep your systems reliable, secure, and ready for what’s next."
    outcomes={["Fast support from technicians who learn your environment", "Predictable technology costs and fewer disruptive surprises", "Healthier devices, networks, and cloud systems", "A practical roadmap aligned to your priorities and budget"]}
    services={[
      { title: "Helpdesk & User Support", text: "Friendly remote and onsite help for day-to-day issues, account access, devices, applications, and connectivity." },
      { title: "Monitoring & Maintenance", text: "Continuous oversight, patching, alerting, and preventative maintenance across your critical technology." },
      { title: "Device Lifecycle Management", text: "Standards, procurement guidance, configuration, inventory, warranty tracking, and replacement planning." },
      { title: "Microsoft 365 Management", text: "Administration and support for identity, email, Teams, SharePoint, OneDrive, Intune, and licensing." },
      { title: "Backup & Business Continuity", text: "Backup strategy, recovery planning, and tested safeguards designed to help your organization keep moving." },
      { title: "vCIO & Technology Planning", text: "Budgeting, roadmaps, vendor coordination, and practical advice that connects technology to business goals." },
    ]}
    process={[
      { step: "01 — Discover", title: "Understand your environment", text: "We learn your people, systems, priorities, pain points, and existing vendor relationships." },
      { step: "02 — Stabilize", title: "Address risk and friction", text: "We document, standardize, secure, and resolve the issues creating the most operational drag." },
      { step: "03 — Improve", title: "Build the roadmap", text: "We manage the day-to-day while helping you plan smarter investments and continuous improvements." },
    ]}
  />;
}
