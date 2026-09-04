import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Virtual CIO Services | Mission Technology Solutions",
  description: "Virtual CIO and strategic IT leadership for Indiana organizations that need clearer technology decisions, budgets, security, and roadmaps.",
};

export default function VcioPage() {
  return <ServicePage
    eyebrow="Strategic IT Leadership"
    title="A clearer technology plan"
    accent="for the work ahead."
    introduction="Mission’s virtual CIO service gives leadership practical guidance without the cost of a full-time executive. We connect technology decisions to operations, risk, budget, and growth."
    heroImage="/photos/managed-it-team.jpg"
    heroImageAlt="Technology leaders reviewing a plan together in a modern office"
    outcomes={["A roadmap leadership can understand", "Budgets tied to business priorities", "Security and risk translated into decisions", "One accountable partner across vendors and systems"]}
    services={[{ title: "Technology Roadmaps", text: "Prioritized plans for infrastructure, cloud, security, devices, and the projects that support your goals." }, { title: "Budget and Lifecycle Planning", text: "Clear replacement cycles, budget ranges, and timing that reduce emergency purchases and surprises." }, { title: "Leadership Reporting", text: "Plain-language reporting on risk, progress, service trends, and the decisions that need attention." }, { title: "Security and Compliance Guidance", text: "Practical direction for insurance requirements, access controls, incident readiness, and policy improvements." }, { title: "Vendor and Project Alignment", text: "A steady point of coordination across providers, internal staff, projects, and technology partners." }, { title: "Co-Managed IT Strategy", text: "Additional depth for internal teams that need planning capacity, specialized expertise, or an experienced second opinion." }]}
    situations={[{ title: "Technology decisions feel reactive", text: "Projects appear as emergencies, priorities compete, and leadership lacks a consistent way to decide what comes next." }, { title: "The environment has outgrown informal planning", text: "More users, locations, vendors, regulations, or systems make it difficult for one person to keep the full picture." }, { title: "Security needs an owner", text: "Your team wants stronger safeguards and clearer accountability, but security work keeps getting pushed behind daily operations." }, { title: "You need a second opinion", text: "An upcoming purchase, audit, migration, or vendor decision would benefit from independent guidance grounded in your organization." }]}
    process={[{ step: "01 , Listen", title: "Understand the mission", text: "We learn your operating model, goals, constraints, risks, and the technology decisions already in motion." }, { step: "02 , Prioritize", title: "Turn noise into a roadmap", text: "We organize risks, projects, lifecycle needs, and quick wins into a sequence leadership can act on." }, { step: "03 , Guide", title: "Keep the plan moving", text: "We meet regularly, track progress, explain tradeoffs, and adjust the roadmap as your organization changes." }]}
    faqs={[{ question: "What is a virtual CIO?", answer: "A virtual CIO provides strategic technology leadership on a flexible basis, helping an organization plan, prioritize, budget, and manage risk without hiring a full-time CIO." }, { question: "Is vCIO support only for large organizations?", answer: "No. Growing businesses, nonprofits, municipalities, and internal IT teams often benefit when technology has become too important or complex to manage informally." }, { question: "Can vCIO support work with our existing IT staff?", answer: "Yes. Mission can provide an outside perspective, planning capacity, and specialized expertise while your internal team keeps the relationships and context it owns best." }, { question: "How often do we meet?", answer: "Most organizations use a recurring monthly or quarterly cadence, with additional working sessions around major projects, audits, incidents, or budget cycles." }]}
    ctaBackgroundImage="/photos/managed-it-team.jpg"
  />;
}
