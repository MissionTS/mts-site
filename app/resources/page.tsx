import dynamic from "next/dynamic";
import { ResourceErrorBoundary } from "@/components/ResourceErrorBoundary";
const ResourcesClient = dynamic(() => import("@/components/ResourcesClient"), { ssr: false });
export default function ResourcesPage() { return <ResourceErrorBoundary><ResourcesClient /></ResourceErrorBoundary>; }
