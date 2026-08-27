import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mission Technology Solutions | Managed IT & Cybersecurity",
  description:
    "Mission Technology Solutions provides managed IT, cybersecurity, cloud, communications, and strategic technology services for growing organizations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
