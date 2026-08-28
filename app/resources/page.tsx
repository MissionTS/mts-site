import dynamic from "next/dynamic";
const ResourcesClient = dynamic(() => import("@/components/ResourcesClient"), { ssr: false });
export default function ResourcesPage() { return <ResourcesClient />; }
