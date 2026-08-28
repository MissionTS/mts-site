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
  title: "Mission Technology Solutions | Managed IT & Cybersecurity",
  description:
    "Mission Technology Solutions provides managed IT, cybersecurity, cloud, communications, and strategic technology services for growing organizations.",
  icons: {
    icon: "/brand/mission-mark-blue.png",
    apple: "/brand/mission-mark-blue.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}<Script id="hs-script-loader" src="https://js.hs-scripts.com/50569444.js" strategy="afterInteractive" /></body>
    </html>
  );
}
