import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Cybersecurity Services | Mission Technology Solutions",
  description: "Layered cybersecurity services for identity, endpoints, email, networks, users, and business operations.",
};

export default function CybersecurityPage() {
  return <ServicePage
    eyebrow="Cybersecurity"
    title="Reduce risk without"
    accent="slowing down your team."
    introduction="Security is not one product or one annual project. Mission builds practical, layered protection around your identities, devices, email, network, data, and people—then helps you keep improving as threats and requirements change."
    heroImage="/photos/cybersecurity-operations.jpg"
    heroImageAlt="Cybersecurity professionals monitoring systems from a modern operations center"
    outcomes={["Stronger protection across the most common attack paths", "Clearer visibility into vulnerabilities and suspicious activity", "Faster detection, response, and recovery", "Security decisions grounded in business risk—not fear"]}
    services={[
      { title: "Endpoint Protection & MDR", text: "Advanced endpoint controls backed by active monitoring, investigation, containment, and response." },
      { title: "Identity & Access Security", text: "Multifactor authentication, conditional access, account hardening, least privilege, and secure onboarding." },
      { title: "Email Security", text: "Protection against phishing, impersonation, malicious links, unsafe attachments, and business email compromise." },
      { title: "Security Awareness", text: "Ongoing training and phishing simulations that help employees recognize risk and respond confidently." },
      { title: "Vulnerability & Risk Management", text: "Practical reviews, remediation priorities, security baselines, policy guidance, and risk tracking." },
      { title: "Incident Readiness", text: "Response planning, recovery coordination, documentation, and safeguards that reduce the impact of an event." },
    ]}
    process={[
      { step: "01 — Assess", title: "See the real risk", text: "We review your controls, exposure, business priorities, and the requirements that matter to your organization." },
      { step: "02 — Protect", title: "Close the important gaps", text: "We prioritize and implement layered safeguards across identity, endpoints, email, network, and data." },
      { step: "03 — Monitor", title: "Stay ready", text: "We watch for change, respond to threats, report clearly, and continuously strengthen your security posture." },
    ]}
  />;
}
