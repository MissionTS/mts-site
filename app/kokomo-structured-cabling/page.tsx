import { withSeoMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { KokomoServicePage } from "@/components/KokomoServicePage";

const path = "/kokomo-structured-cabling";
const title = "Structured Cabling Services in Kokomo, Indiana | Mission Technology Solutions";
const description = "Structured cabling for Kokomo businesses and facilities, including fiber, copper, network closets, testing, labeling, and documentation.";
const faqs = [
  { question: "What cabling work do you provide in Kokomo?", answer: "Projects can include fiber and copper runs, patching, network closet organization, moves and changes, testing, labeling, and documentation, depending on the site and scope." },
  { question: "Can you help with a new office or facility buildout?", answer: "Yes. We can coordinate cabling requirements with the building layout, network equipment, work areas, cameras, access control, and expected growth." },
  { question: "Can you clean up an existing network closet?", answer: "We can assess the current cabling and equipment, identify connections where possible, and plan an orderly cleanup with clear labeling and records." },
  { question: "Do you test and document installed cabling?", answer: "Testing and documentation can be included in the project scope so the organization has a clearer record of runs and connections." },
  { question: "Do you work with other contractors?", answer: "Yes. We can coordinate with construction, electrical, facilities, and IT teams on pathways, schedules, access, and handoff requirements." },
];

export const metadata: Metadata = withSeoMetadata({ title, description }, path);

export default function Page() {
  return <KokomoServicePage breadcrumbPath={path} service="Structured Cabling" title="Build a reliable foundation for Kokomo businesses." accent="Clean runs. Clear labels. Easier changes." intro="The network is only as dependable as the connections behind it. Mission plans and coordinates structured cabling for Kokomo offices and facilities, from new runs to network closet improvements." image="/photos/network-rack-room.png" imageAlt="Business network closet with structured cabling and rack equipment" localDescription="Whether you are expanding a Kokomo workspace, adding cameras, or sorting out an undocumented closet, we account for the building, pathways, equipment, and future service needs before work begins." services={[
    { title: "Fiber & copper installation", text: "Plan cable types, pathways, endpoints, and patching for the intended devices and distances." },
    { title: "Office & facility buildouts", text: "Coordinate drops for work areas, wireless access points, cameras, phones, and shared equipment." },
    { title: "Network closet organization", text: "Improve racks, patch panels, cable management, labeling, and service access." },
    { title: "Testing & certification", text: "Include testing appropriate to the project so connections can be checked before handoff." },
    { title: "Moves, adds & changes", text: "Plan expansions and alterations while keeping records of what was changed." },
    { title: "Documentation", text: "Provide useful labels and connection records to make future troubleshooting and upgrades easier." },
  ]} faqs={faqs} />;
}
