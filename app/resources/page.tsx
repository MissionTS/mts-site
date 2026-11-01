import type { Metadata } from "next";
import { withSeoMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import ResourcesClient from "@/components/ResourcesClient";
import { ResourceErrorBoundary } from "@/components/ResourceErrorBoundary";
export const metadata: Metadata = withSeoMetadata({ title: "Knowledge Hub | Mission Technology Solutions", description: "Technology and cybersecurity articles, practical guides, and resources for Indiana businesses and organizations." }, "/resources");
export default function ResourcesPage() { return <><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Knowledge Hub", path: "/resources" }]} /><ResourceErrorBoundary><ResourcesClient /></ResourceErrorBoundary></>; }
