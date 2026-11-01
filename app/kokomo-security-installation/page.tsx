import { withSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { KokomoServicePage } from "@/components/KokomoServicePage";

const path = "/kokomo-security-installation";
const title = "Security Camera & Access Control in Kokomo, Indiana | Mission Technology Solutions";
const description = "Plan connected security cameras and access control for Kokomo facilities, with attention to coverage, networks, retention, and ongoing support.";
const faqs = [
  { question: "Can you help plan camera coverage for our Kokomo facility?", answer: "Yes. We can review entrances, work areas, lighting, privacy considerations, network capacity, and retention needs to help develop an appropriate camera plan." },
  { question: "Can cameras and door access work together?", answer: "They can be planned as connected parts of a facility security system. We discuss workflows, authorized users, event review, and the network and power needed." },
  { question: "Do you install access control for employee doors?", answer: "We can assess doors, schedules, credentials, visitor needs, and emergency access requirements as part of a project scope." },
  { question: "Can you work with an existing camera or access system?", answer: "We can review the current equipment, network, and management platform to determine what can be supported or expanded and what may need replacement." },
  { question: "Do you serve facilities throughout Howard County?", answer: "Yes. Mission is based in Kokomo and coordinates security projects and support in Kokomo and nearby Central Indiana communities." },
];

export const metadata: Metadata = withSeoMetadata({ title, description }, path);

export default function Page() {
  return <KokomoServicePage breadcrumbPath={path} service="Security Cameras & Access Control" title="Security systems that fit Kokomo facilities." accent="See clearly. Manage access. Plan ahead." intro="Connect cameras, doors, networks, and the people responsible for a facility. Mission helps Kokomo organizations plan physical security systems around how their buildings are used." image="/photos/physical-security-monitoring.jpg" imageAlt="Security camera monitoring for a commercial facility" localDescription="A useful system starts with the site: which entrances need attention, what staff should be able to review, how credentials are managed, and where network and power are available. We coordinate those considerations before equipment is selected or installed." services={[
    { title: "Camera coverage", text: "Plan views around entrances, shared spaces, lighting, privacy, and the events staff need to review." },
    { title: "Access control", text: "Coordinate doors, credentials, schedules, visitor workflows, and authorized access." },
    { title: "Network & PoE readiness", text: "Review connectivity, power, bandwidth, and placement for connected cameras and controllers." },
    { title: "Recording & retention", text: "Discuss how footage is accessed, retained, protected, and reviewed by approved staff." },
    { title: "System integration", text: "Consider how cameras, access control, and the broader network fit the facility's workflows." },
    { title: "Documentation & support", text: "Keep equipment, user roles, and maintenance needs understandable after installation." },
  ]} faqs={faqs} />;
}
