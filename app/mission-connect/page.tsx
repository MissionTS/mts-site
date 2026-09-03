import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Mission Connect Business VoIP | Mission Technology Solutions",
  description: "Business VoIP and unified communications with calling, mobile access, auto attendants, and support from Mission Technology Solutions.",
};

export default function MissionConnectPage() {
  return <ServicePage
    eyebrow="Mission Connect"
    title="A phone system that"
    accent="works the way you do."
    introduction="Mission Connect brings business calling, mobile access, auto attendants, call routing, and helpful support into one clear communications experience for your team."
    heroImage="/photos/managed-it-team.jpg"
    heroImageAlt="Team collaborating around a laptop in a modern office"
    outcomes={["Professional calling wherever your team works", "Clear routing so customers reach the right person", "Simple administration without telecom complexity", "A communications plan that can grow with your organization"]}
    services={[{ title: "Business VoIP", text: "Reliable cloud calling with the features and flexibility modern teams expect." }, { title: "Auto Attendants & Call Routing", text: "Guide callers to the right department, person, or after-hours option with a clear experience." }, { title: "Mobile & Remote Calling", text: "Keep business identity and calling workflows available when staff are away from their desks." }, { title: "Phones & Devices", text: "Right-sized desk phones, softphones, headsets, and configurations for each role." }, { title: "Call Queues & Voicemail", text: "Manage shared lines, voicemail, greetings, and call handling without guesswork." }, { title: "Ongoing Support", text: "Get help with changes, onboarding, troubleshooting, and improvements from a team that knows your environment." }]}
    situations={[{ title: "Calls are hard to route", text: "Customers wait, transfer between departments, or reach the wrong person because the system has grown without a plan." }, { title: "Your team is more mobile", text: "Remote and hybrid staff need a consistent business calling experience beyond a single desk phone." }, { title: "The phone bill is confusing", text: "Multiple vendors, add-ons, and outdated hardware make it difficult to understand what you are paying for." }, { title: "Growth is changing communication", text: "New locations, roles, and call volume require a system that can adapt without starting over." }]}
    process={[{ step: "01 , Understand", title: "Map how calls move", text: "We learn your departments, hours, roles, call volume, and the customer experience you want to create." }, { step: "02 , Configure", title: "Build the experience", text: "We design users, devices, greetings, queues, routing, permissions, and mobile workflows around your team." }, { step: "03 , Improve", title: "Support what comes next", text: "We help with changes, onboarding, troubleshooting, and ongoing improvements as your organization evolves." }]}
    faqs={[{ question: "Can Mission Connect support remote employees?", answer: "Yes. Mobile and softphone options can extend your business calling experience to staff working remotely or across multiple locations." }, { question: "Can you port our existing numbers?", answer: "We can help plan and coordinate number porting while protecting continuity and communicating the change clearly." }, { question: "Can you connect phones with our IT environment?", answer: "Yes. We consider network readiness, Wi-Fi, devices, security, user onboarding, and support workflows together." }, { question: "Will someone help us after setup?", answer: "Yes. Mission provides practical support for users, changes, troubleshooting, and future communications needs." }]}
    ctaBackgroundImage="/photos/managed-it-team.jpg"
  />;
}
