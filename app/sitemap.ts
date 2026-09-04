import type { MetadataRoute } from "next";

const baseUrl = "https://missionts.com";

const coreRoutes = [
  "",
  "/services",
  "/industries",
  "/resources",
  "/about",
  "/contact",
  "/managed-it",
  "/cybersecurity",
  "/networking",
  "/mission-connect",
  "/vcio",
  "/structured-cabling-security",
  "/kokomo-in",
  "/kokomo-managed-it",
  "/kokomo-cybersecurity",
  "/kokomo-networking",
  "/kokomo-microsoft-365",
  "/kokomo-structured-cabling",
  "/kokomo-security-installation",
  "/healthcare",
];

const resourceSlugs = [
  "90-day-plan", "backed-up-or-synced", "break-fix-vs-managed", "business-email-compromise",
  "co-managed-it", "cyber-insurance-questionnaires", "dark-web-monitoring", "edr-and-mdr",
  "first-hour-ransomware", "howard-county-internet", "indiana-breach-notification", "indiana-tech-grants",
  "intune-business", "it-onboarding-transition", "it-support-carmel", "it-support-kokomo",
  "it-support-lafayette", "it-support-logansport", "it-support-noblesville", "it-support-peru",
  "it-support-tipton", "it-support-westfield", "managed-it-contract", "managed-it-cost-per-user",
  "mfa-app-text-key", "microsoft-365-setup", "more-than-helpdesk", "msp-vs-internal-it", "network-closet",
  "outgrown-computer-guy", "passkeys", "password-managers-small-teams", "physical-security",
  "physical-security-cybersecurity", "proactive-it", "questions-for-an-msp", "security-awareness-training",
  "security-baseline", "switch-msps-without-downtime", "test-backup-restore", "three-two-one-backup",
  "unique-passwords", "what-is-a-vcio", "what-is-phishing", "why-antivirus-isnt-enough",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...coreRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...resourceSlugs.map((slug) => ({ url: `${baseUrl}/resources/${slug}`, lastModified: new Date() })),
  ];
}
