import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Business Networking & Wi-Fi Services | Mission Technology Solutions",
  description: "Expert-designed business networking, Wi-Fi planning, heat mapping, switching, firewall, and network support for Central Indiana organizations.",
};

export default function NetworkingPage() {
  return <ServicePage
    eyebrow="Business networking"
    title="Networks that keep your team"
    accent="moving."
    introduction="Mission designs and supports secure, reliable business networks for organizations that cannot afford slow Wi-Fi, mystery outages, or infrastructure that is already at its limit."
    heroImage="/photos/partners/ubiquiti-pro-max-24-poe-deployment.png"
    heroImageAlt="Modern Ubiquiti PoE network switch deployment"
    outcomes={["Reliable wired and wireless performance across the spaces that matter", "Wi-Fi planned around coverage, capacity, devices, and how people actually work", "Better visibility into bottlenecks, failures, and security risks", "A network roadmap that supports growth instead of forcing emergency upgrades"]}
    services={[{ title: "Network Design", text: "Purpose-built designs for offices, plants, campuses, public spaces, and multi-site organizations." }, { title: "Wi-Fi Planning & Heat Mapping", text: "Coverage analysis and access-point placement that account for walls, density, roaming, and real-world use." }, { title: "Switching & Firewalls", text: "Secure, supportable switching, VLANs, segmentation, routing, and firewall configurations." }, { title: "Performance Monitoring", text: "Ongoing visibility into availability, utilization, recurring issues, and changes that affect performance." }, { title: "Network Cleanup", text: "Cable tracing, closet organization, documentation, configuration review, and practical remediation." }, { title: "Moves, Adds & Changes", text: "New offices, expansions, device rollouts, internet changes, and network upgrades with less disruption." }]}
    situations={[{ title: "Wi-Fi works in one room and nowhere else", text: "Coverage gaps, interference, density, and old access points create friction your team feels all day." }, { title: "The network closet is a mystery", text: "Unlabeled cables, crowded racks, and undocumented changes make every repair or expansion slower." }, { title: "Growth is exposing weak spots", text: "More users, cameras, cloud applications, and devices can push a once-adequate network past its limit." }, { title: "You need a network plan", text: "A clear design and roadmap can turn reactive upgrades into a predictable investment." }]}
    process={[{ step: "01 — Survey", title: "See the real environment", text: "We review the space, cabling, devices, internet service, coverage goals, and business constraints." }, { step: "02 — Design", title: "Build the right plan", text: "We translate findings into practical equipment, placement, segmentation, documentation, and budget priorities." }, { step: "03 — Improve", title: "Deploy and support", text: "We implement carefully, validate performance, and stay available as your environment changes." }]}
    faqs={[{ question: "Can you improve our Wi-Fi without replacing everything?", answer: "Often, yes. We can assess placement, interference, cabling, configuration, and capacity before recommending the right level of change." }, { question: "Do you work with our current internet provider?", answer: "Yes. We can coordinate with your provider, review service options, and help make sure the internal network is not the hidden bottleneck." }, { question: "Can networking and structured cabling be planned together?", answer: "Absolutely. Planning the logical network and physical cabling together usually produces a cleaner, more supportable result." }]}
    partnerShowcase={[{ title: "WiFi 7 access", text: "Current-generation wireless for higher capacity and cleaner coverage.", image: "/photos/partners/ubiquiti-u7-pro-max-01.png", alt: "Ubiquiti U7 Pro Max WiFi 7 access point" }, { title: "PoE switching", text: "Modern switching for access points, cameras, phones, and connected devices.", image: "/photos/partners/ubiquiti-pro-max-24-poe-deployment.png", alt: "Ubiquiti Pro Max PoE network switch" }]}
  />;
}
