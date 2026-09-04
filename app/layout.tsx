import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://missionts.com"),
  title: "Managed IT Services & Cybersecurity | Mission Technology Solutions",
  description:
    "Indiana-based managed IT services, cybersecurity, networking, Microsoft 365, cloud, communications, and physical security for businesses and organizations.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Managed IT Services & Cybersecurity | Mission Technology Solutions",
    description: "Indiana-based managed IT, cybersecurity, networking, Microsoft 365, and physical security for organizations that need technology to work.",
    siteName: "Mission Technology Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed IT Services & Cybersecurity | Mission Technology Solutions",
    description: "Indiana-based managed IT, cybersecurity, networking, Microsoft 365, and physical security.",
  },
  icons: {
    icon: "/brand/mission-mark-blue.png",
    apple: "/brand/mission-mark-blue.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-760137266" strategy="afterInteractive" />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-760137266');
          `}
        </Script>
        <Script id="hs-script-loader" src="https://js.hs-scripts.com/50569444.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
