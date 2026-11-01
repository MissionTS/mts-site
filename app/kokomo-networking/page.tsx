import { withSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { KokomoServicePage } from "@/components/KokomoServicePage";

const path = "/kokomo-networking";
const title = "Business Networking & Wi-Fi in Kokomo, Indiana | Mission Technology Solutions";
const description = "Business networking and Wi-Fi for Kokomo organizations, including network design, switching, firewalls, wireless coverage, and monitoring.";
const faqs = [
  { question: "Can you troubleshoot unreliable Wi-Fi at our Kokomo location?", answer: "Yes. We can review coverage, interference, access point placement, device density, and the network behind the wireless system to identify likely causes." },
  { question: "Do you install or upgrade business networks?", answer: "We can plan and coordinate switching, routing, firewall, wireless, and network closet improvements around your building, equipment, and operational requirements." },
  { question: "Can a business network support office and production equipment?", answer: "Network design can separate and manage different types of devices. We review business needs, security, traffic, and equipment constraints before recommending a layout." },
  { question: "Do you support multiple buildings or locations?", answer: "Yes. We can document the connections, equipment, access, and support needs across locations, then plan work in manageable stages." },
  { question: "Do you serve businesses outside Kokomo?", answer: "Mission is based in Kokomo and coordinates remote and onsite network support for organizations in Howard County and throughout Central Indiana." },
];

export const metadata: Metadata = withSeoMetadata({ title, description }, path);

export default function Page() {
  return <KokomoServicePage breadcrumbPath={path} service="Business Networking & Wi-Fi" title="A stronger network for Kokomo operations." accent="Reliable connections from the closet to the cloud." intro="Keep employees, applications, phones, cameras, and business equipment connected. Mission designs and supports networks around the way your Kokomo facility actually works." image="/photos/network-rack-room.png" imageAlt="Organized network rack and business connectivity equipment" localDescription="Kokomo organizations may need a dependable connection across offices, shop floors, warehouses, and connected devices. We start with the building and the work that happens in it, then plan coverage, capacity, and security together." services={[
    { title: "Network design & switching", text: "Plan wired connections, switching, segmentation, and documentation around present needs and future changes." },
    { title: "Business Wi-Fi", text: "Review wireless coverage and capacity for your building, users, devices, and operating patterns." },
    { title: "Firewall & secure access", text: "Coordinate firewall policies, remote access, and network separation to support secure connectivity." },
    { title: "Network closets", text: "Improve labeling, layout, patching, power coordination, and documentation for easier service." },
    { title: "Monitoring & troubleshooting", text: "Investigate recurring drops, slowdowns, device conflicts, and other connectivity problems." },
    { title: "Multi-site connectivity", text: "Document how locations connect and plan upgrades or changes with fewer surprises." },
  ]} faqs={faqs} />;
}
