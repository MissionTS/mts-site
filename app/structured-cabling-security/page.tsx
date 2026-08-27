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
    outcomes={["Clean, labeled infrastructure that is easier to manage", "Reliable connectivity where your people and devices need it", "Better visibility across entrances and critical areas", "Consistent access controls with room to grow"]}
    services={[
      { title: "Structured Cabling", text: "Professional copper and fiber cabling, pathways, termination, labeling, testing, and certification." },
      { title: "Network Closets & Racks", text: "Organized racks, patch panels, cable management, cleanup, documentation, and infrastructure refreshes." },
      { title: "Camera Systems", text: "Thoughtful camera placement, installation, recording, remote viewing, and system configuration." },
      { title: "Access Control", text: "Secure doors, readers, credentials, schedules, permissions, and manageable employee access." },
      { title: "Wireless Infrastructure", text: "Cabling and mounting for access points, coverage improvements, and dependable facility-wide Wi-Fi." },
      { title: "Moves, Adds & Changes", text: "Efficient support for office changes, expansions, new workstations, equipment moves, and new locations." },
    ]}
    process={[
      { step: "01 — Walkthrough", title: "Survey the site", text: "We review the space, existing infrastructure, coverage goals, security priorities, and project constraints." },
      { step: "02 — Design", title: "Build the right plan", text: "We define locations, pathways, equipment, responsibilities, and a clear installation scope." },
      { step: "03 — Install", title: "Finish and document", text: "We install carefully, test the system, label and document the work, and make sure your team can use it." },
    ]}
  />;
}
