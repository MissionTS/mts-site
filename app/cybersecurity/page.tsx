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
    introduction="Security is not one product or one annual project. Mission builds practical, layered protection around your identities, devices, email, network, data, and people, then helps you keep improving as threats and requirements change."
    heroImage="/photos/cybersecurity-operations.jpg"
    heroImageAlt="Cybersecurity professionals monitoring systems from a modern operations center"
    outcomes={["Stronger protection across the most common attack paths", "Clearer visibility into vulnerabilities and suspicious activity", "Faster detection, response, and recovery", "Security decisions grounded in business risk, not fear"]}
    services={[
      { title: "Endpoint Protection & MDR", text: "Advanced endpoint controls backed by active monitoring, investigation, containment, and response." },
      { title: "Identity & Access Security", text: "Multifactor authentication, conditional access, account hardening, least privilege, and secure onboarding." },
      { title: "Email Security", text: "Protection against phishing, impersonation, malicious links, unsafe attachments, and business email compromise." },
      { title: "Security Awareness", text: "Ongoing training and phishing simulations that help employees recognize risk and respond confidently." },
      { title: "Vulnerability & Risk Management", text: "Practical reviews, remediation priorities, security baselines, policy guidance, and risk tracking." },
      { title: "Incident Readiness", text: "Response planning, recovery coordination, documentation, and safeguards that reduce the impact of an event." },
    ]}
    situations={[
      { title: "Security is mostly antivirus", text: "Modern attacks target identities, email, cloud applications, and human trust, not only malicious files." },
      { title: "You cannot see the whole environment", text: "Unknown devices, inconsistent settings, or scattered reports make it difficult to understand current exposure." },
      { title: "A customer is asking questions", text: "Cyber insurance, contracts, audits, or vendor reviews are requiring clearer evidence of your safeguards." },
      { title: "There is no incident plan", text: "Leadership and employees are unsure who to call, what to isolate, or how the organization would continue operating." },
    ]}
    process={[
      { step: "01 , Assess", title: "See the real risk", text: "We review your controls, exposure, business priorities, and the requirements that matter to your organization." },
      { step: "02 , Protect", title: "Close the important gaps", text: "We prioritize and implement layered safeguards across identity, endpoints, email, network, and data." },
      { step: "03 , Monitor", title: "Stay ready", text: "We watch for change, respond to threats, report clearly, and continuously strengthen your security posture." },
    ]}
    faqs={[
      { question: "Is cybersecurity included with Managed IT?", answer: "Security should be built into day-to-day IT management, but the exact controls and monitoring depend on your risks and requirements. Mission can help define an appropriate layered security plan instead of treating every organization the same." },
      { question: "What is MDR?", answer: "Managed Detection and Response combines security technology with people who review suspicious activity, investigate alerts, and help contain threats. It adds active oversight beyond traditional antivirus." },
      { question: "Can you help with cyber insurance requirements?", answer: "Mission can help identify technical gaps, document existing controls, and prioritize improvements. Insurance decisions and application answers remain the responsibility of your organization and insurance professionals." },
      { question: "Will better security make work harder for employees?", answer: "Good security balances protection and usability. The goal is to reduce unnecessary friction by choosing controls carefully, communicating changes, and giving employees clear support." },
    ]}
  />;
}
