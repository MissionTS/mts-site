import { withSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { KokomoServicePage } from "@/components/KokomoServicePage";

const path = "/kokomo-microsoft-365";
const title = "Microsoft 365 Support in Kokomo, Indiana | Mission Technology Solutions";
const description = "Microsoft 365 support for Kokomo organizations, from Entra ID and Intune to Teams, SharePoint, OneDrive, onboarding, and security.";
const faqs = [
  { question: "What Microsoft 365 support do you provide in Kokomo?", answer: "We help organizations manage identity, email, Teams, SharePoint, OneDrive, licensing, devices, onboarding, and security settings, based on the services in scope." },
  { question: "Can you improve Microsoft 365 security?", answer: "We can review multifactor authentication, administrator roles, sign-in policies, sharing settings, and device practices, then help prioritize changes for your team." },
  { question: "Can you help organize Teams and SharePoint?", answer: "Yes. We can review how information is stored and shared, help set practical permissions, and plan changes so employees can find and collaborate on the right files." },
  { question: "Do you support employee onboarding and offboarding?", answer: "We can help document and carry out account and device steps when employees join or leave, with responsibilities coordinated with your organization." },
  { question: "Do you work with internal IT staff?", answer: "Yes. We can provide project capacity or Microsoft 365 expertise alongside your internal IT lead, with clear ownership for changes and support." },
];

export const metadata: Metadata = withSeoMetadata({ title, description }, path);

export default function Page() {
  return <KokomoServicePage breadcrumbPath={path} service="Microsoft 365 Support" title="Make Microsoft 365 work better for Kokomo teams." accent="A secure, organized cloud workplace." intro="Get more from the Microsoft tools your employees already use. Mission helps Kokomo organizations make Microsoft 365 easier to manage, safer to share, and more consistent as teams change." image="/photos/managed-it-team.jpg" imageAlt="Technology team collaborating on cloud services" localDescription="Microsoft 365 often becomes the hub for email, files, meetings, devices, and identity. We help bring those pieces into a manageable structure, whether you need a focused security review, migration help, or ongoing administration." services={[
    { title: "Entra ID & identity", text: "Review sign-in methods, multifactor authentication, administrator roles, and account lifecycle practices." },
    { title: "Intune & device management", text: "Plan enrollment, security baselines, updates, applications, and access for company devices." },
    { title: "Teams & collaboration", text: "Improve team workspaces, meeting setup, voice needs, and day-to-day collaboration." },
    { title: "SharePoint & OneDrive", text: "Set clear file locations, access permissions, sharing practices, and migration plans." },
    { title: "Licensing & administration", text: "Understand licensing choices and make routine account and service administration easier." },
    { title: "Onboarding & adoption", text: "Create repeatable setup guidance so employees can get started with the right access and tools." },
  ]} faqs={faqs} />;
}
