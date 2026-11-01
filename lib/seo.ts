import type { Metadata } from "next";

const SITE_NAME = "Mission Technology Solutions";

export function withSeoMetadata(metadata: Metadata, pathname: string): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : SITE_NAME;
  const description = typeof metadata.description === "string" ? metadata.description : "";
  const openGraph = metadata.openGraph ?? {};
  const twitter = metadata.twitter ?? {};

  return {
    ...metadata,
    alternates: { ...metadata.alternates, canonical: pathname },
    openGraph: {
      ...openGraph,
      type: "website",
      url: pathname,
      title,
      description,
      siteName: SITE_NAME,
    },
    twitter: {
      ...twitter,
      card: twitter.card ?? "summary_large_image",
      title,
      description,
    },
  };
}
