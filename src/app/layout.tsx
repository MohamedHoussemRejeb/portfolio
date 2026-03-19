import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mohamed Houssem Rejeb | Junior Software Engineer",
  description:
    "Portfolio of Mohamed Houssem Rejeb — Junior Software Engineer specialized in Java, Spring Boot, Angular, Microservices, and DevOps.",
  metadataBase: new URL("https://mohamedhoussemrejeb.vercel.app"),
  openGraph: {
    title: "Mohamed Houssem Rejeb | Junior Software Engineer",
    description: "Full-Stack (Java/Spring Boot/Angular) • Microservices • DevOps • Data Engineering",
    url: "/",
    siteName: "Houssem Rejeb Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portfolio preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Houssem Rejeb | Junior Software Engineer",
    description: "Full-Stack (Java/Spring Boot/Angular) • Microservices • DevOps • Data Engineering",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}