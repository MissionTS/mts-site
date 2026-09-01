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
    introduction="Your team should be able to focus on the work that matters, not recurring technology problems. Mission combines responsive human support with proactive management to keep your systems reliable, secure, and ready for what’s next."
    heroImage="/photos/managed-it-team.jpg"
    heroImageAlt="Coworkers collaborating around a laptop in a bright office"
    outcomes={["Fast support from technicians who learn your environment", "Predictable technology costs and fewer disruptive surprises", "Healthier devices, networks, and cloud systems", "A practical roadmap aligned to your priorities and budget"]}
    services={[
      { title: "Helpdesk & User Support", text: "Friendly remote and onsite help for day-to-day issues, account access, devices, applications, and connectivity." },
      { title: "Monitoring & Maintenance", text: "Continuous oversight, patching, alerting, and preventative maintenance across your critical technology." },
      { title: "Device Lifecycle Management", text: "Standards, procurement guidance, configuration, inventory, warranty tracking, and replacement planning." },
      { title: "Microsoft 365 Management", text: "Administration and support for identity, email, Teams, SharePoint, OneDrive, Intune, and licensing." },
      { title: "Backup & Business Continuity", text: "Backup strategy, recovery planning, and tested safeguards designed to help your organization keep moving." },
      { title: "vCIO & Technology Planning", text: "Budgeting, roadmaps, vendor coordination, and practical advice that connects technology to business goals." },
    ]}
    situations={[
      { title: "Support feels unpredictable", text: "Employees do not know who to call, issues linger, or the same problems keep returning." },
      { title: "Your internal team is stretched", text: "A key employee has become the default IT person while still carrying another full-time role." },
      { title: "Technology decisions are reactive", text: "Purchases happen during emergencies instead of following standards, budgets, and a replacement plan." },
      { title: "Growth is exposing weak spots", text: "New employees, locations, applications, or compliance needs are making the current approach harder to sustain." },
    ]}
    process={[
      { step: "01 , Discover", title: "Understand your environment", text: "We learn your people, systems, priorities, pain points, and existing vendor relationships." },
      { step: "02 , Stabilize", title: "Address risk and friction", text: "We document, standardize, secure, and resolve the issues creating the most operational drag." },
      { step: "03 , Improve", title: "Build the roadmap", text: "We manage the day-to-day while helping you plan smarter investments and continuous improvements." },
    ]}
    faqs={[
      { question: "Can Mission work with our existing internal IT employee?", answer: "Yes. Co-managed support can add helpdesk capacity, specialized expertise, monitoring, documentation, project assistance, and coverage while your internal team retains the responsibilities that make sense." },
      { question: "Do you provide both remote and onsite support?", answer: "Mission can resolve many requests remotely for speed and convenience, while onsite work is coordinated when the issue, project, or environment requires hands-on attention." },
      { question: "What happens during onboarding?", answer: "Onboarding typically includes discovery, documentation, access and security review, monitoring deployment, vendor coordination, and a prioritized list of immediate risks and improvements." },
      { question: "Can you help us plan a technology budget?", answer: "Yes. Lifecycle information, business priorities, risk, and upcoming projects can be organized into a practical roadmap so investments are easier to anticipate and explain." },
    ]}
  />;
}
