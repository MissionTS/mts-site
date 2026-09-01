import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Structured Cabling, Cameras & Access Control | Mission Technology Solutions",
  description: "Professional structured cabling, camera systems, and access control installation for dependable, secure facilities.",
};

export default function StructuredCablingSecurityPage() {
  return <ServicePage
    eyebrow="Structured Cabling & Physical Security"
    title="A stronger foundation for"
    accent="connected, secure facilities."
    introduction="Reliable technology starts behind the walls and extends to every door, camera, access point, and workstation. Mission designs and installs structured cabling and physical security systems that are clean, scalable, and built for everyday use."
    heroImage="/photos/partners/verkada-access-controller-hero.jpg"
    heroImageAlt="Modern access control hardware installed in a commercial building"
    outcomes={["Clean, labeled infrastructure that is easier to manage", "Reliable connectivity where your people and devices need it", "Better visibility across entrances and critical areas", "Consistent access controls with room to grow"]}
    services={[
      { title: "Structured Cabling", text: "Professional copper and fiber cabling, pathways, termination, labeling, testing, certification, and clean infrastructure for modern PoE systems." },
      { title: "Network Closets & Racks", text: "Organized racks, patch panels, cable management, cleanup, documentation, and infrastructure refreshes built for current-generation switching." },
      { title: "Camera Systems", text: "Thoughtful camera placement, installation, recording, remote viewing, and system configuration using modern cloud-managed camera platforms." },
      { title: "Access Control", text: "Secure doors, readers, credentials, schedules, permissions, and manageable employee access." },
      { title: "Wireless Infrastructure", text: "Cabling and mounting for WiFi 7 access points, coverage improvements, and dependable facility-wide wireless performance." },
      { title: "Moves, Adds & Changes", text: "Efficient support for office changes, expansions, new workstations, equipment moves, and new locations." },
    ]}
    partnerShowcase={[
      { title: "Ubiquiti WiFi 7", text: "Current-generation UniFi access points for cleaner coverage, higher capacity, and easier site management.", image: "/photos/partners/ubiquiti-u7-pro-max-01.png", alt: "Ubiquiti U7 Pro Max access point" },
      { title: "UniFi switching", text: "Modern PoE switching and Etherlighting deployments that make cabling, cameras, and access points easier to trace.", image: "/photos/partners/ubiquiti-pro-max-24-poe-deployment.png", alt: "Ubiquiti Pro Max PoE switch deployment" },
      { title: "Camera security", text: "Current camera platforms from Ubiquiti and Verkada for clear coverage, analytics, and practical management.", image: "/photos/partners/ubiquiti-g6-pro-bullet-01.png", alt: "Ubiquiti G6 Pro Bullet camera" },
      { title: "Access control", text: "Cloud-managed access control hardware for doors, readers, credentials, schedules, and secure facilities.", image: "/photos/partners/verkada-door-reader-ad34-ad64.png", alt: "Verkada door reader and access control interface" },
    ]}
    situations={[
      { title: "The network closet has become a mystery", text: "Unlabeled cables, crowded racks, and undocumented changes make every repair or expansion slower than it should be." },
      { title: "Coverage has gaps", text: "Entrances, parking areas, hallways, or critical spaces are difficult to review when an incident occurs." },
      { title: "Keys are hard to control", text: "Physical keys cannot be revoked easily, and there is limited visibility into who can enter secured areas." },
      { title: "A move or renovation is coming", text: "New construction, expansions, and office changes are the right time to plan pathways, drops, cameras, and access points together." },
    ]}
    process={[
      { step: "01 , Walkthrough", title: "Survey the site", text: "We review the space, existing infrastructure, coverage goals, security priorities, and project constraints." },
      { step: "02 , Design", title: "Build the right plan", text: "We define locations, pathways, equipment, responsibilities, and a clear installation scope." },
      { step: "03 , Install", title: "Finish and document", text: "We install carefully, test the system, label and document the work, and make sure your team can use it." },
    ]}
    faqs={[
      { question: "Can you work with our general contractor or electrician?", answer: "Yes. Cabling and security projects often depend on coordinated pathways, power, doors, ceilings, and construction schedules. Mission can define responsibilities and communicate with the other trades involved." },
      { question: "Do you install both cameras and access control?", answer: "Yes. Mission can design and install surveillance and controlled-entry systems, including camera placement, recording, remote viewing, readers, credentials, schedules, and permissions." },
      { question: "Can you clean up an existing network closet?", answer: "Yes. A cleanup can include rack organization, patch panels, cable management, labeling, removal planning for abandoned cabling, and updated documentation." },
      { question: "How do you determine camera placement?", answer: "Placement starts with the areas and events you need to observe. Lighting, distance, viewing angle, image detail, retention needs, network capacity, mounting conditions, and privacy considerations all shape the design." },
    ]}
  />;
}
