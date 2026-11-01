type QuestionAnswer = { question: string; answer: string };
type BreadcrumbItem = { name: string; path: string };

function JsonLd({ value }: { value: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}

export function LocalBusinessJsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "Mission Technology Solutions",
    url: "https://missionts.com/",
    logo: "https://missionts.com/brand/mission-mark-blue.png",
    telephone: "+1-765-245-8515",
    address: {
      "@type": "PostalAddress",
      streetAddress: "400 N Main St",
      addressLocality: "Kokomo",
      addressRegion: "IN",
      postalCode: "46901",
      addressCountry: "US",
    },
    areaServed: [
      "Kokomo, Indiana", "Peru, Indiana", "Logansport, Indiana", "Carmel, Indiana",
      "Westfield, Indiana", "Indianapolis, Indiana", "Howard County, Indiana", "Central Indiana",
    ],
    foundingDate: "2019",
    serviceType: ["Managed IT Services", "Cybersecurity", "Business Networking", "Microsoft 365 Support", "Structured Cabling", "Physical Security"],
    founder: { "@type": "Person", name: "Westin Padgett" },
    // Add verified Schema.org OpeningHoursSpecification objects when business hours are confirmed.
    // Add verified latitude/longitude for 400 N Main St here before publishing geo.
    // Add official profile URLs here; empty placeholders are omitted from the live schema.
    ...(process.env.NEXT_PUBLIC_BUSINESS_GEO_LATITUDE && process.env.NEXT_PUBLIC_BUSINESS_GEO_LONGITUDE ? { geo: { "@type": "GeoCoordinates", latitude: Number(process.env.NEXT_PUBLIC_BUSINESS_GEO_LATITUDE), longitude: Number(process.env.NEXT_PUBLIC_BUSINESS_GEO_LONGITUDE) } } : {}),
    ...(process.env.NEXT_PUBLIC_BUSINESS_OPENING_HOURS ? { openingHours: process.env.NEXT_PUBLIC_BUSINESS_OPENING_HOURS.split(",").map((value) => value.trim()).filter(Boolean) } : {}),
    sameAs: [
      process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL,
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
      process.env.NEXT_PUBLIC_FACEBOOK_URL,
      process.env.NEXT_PUBLIC_BBB_URL,
    ].filter((url): url is string => Boolean(url)),
  };
  return <JsonLd value={business} />;
}

export function FaqPageJsonLd({ items }: { items: QuestionAnswer[] }) {
  if (!items.length) return null;
  return <JsonLd value={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }} />;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd value={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `https://missionts.com${path}`,
    })),
  }} />;
}

export function ArticleJsonLd({ title, slug, published, modified }: { title: string; slug: string; published?: string; modified?: string }) {
  return <JsonLd value={{
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    author: { "@type": "Organization", name: "Mission Technology Solutions" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://missionts.com/resources/${slug}` },
    publisher: { "@type": "Organization", name: "Mission Technology Solutions", logo: { "@type": "ImageObject", url: "https://missionts.com/brand/mission-mark-blue.png" } },
  }} />;
}
