import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { PageTransition } from "@/components/layout/PageTransition";
import { siteConfig } from "@/data/site";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Cafe Beings | Have a Cup, Save a Pup",
    template: "%s | Cafe Beings",
  },
  description:
    "Cafe Beings is a cozy, plant-filled cafe with warm lights, comfort bites and a pet-loving heart. Visit for coffee, conversations and calm corners.",
  openGraph: {
    title: "Cafe Beings | Have a Cup, Save a Pup",
    description:
      "Cafe Beings is a cozy, plant-filled cafe with warm lights, comfort bites and a pet-loving heart.",
    type: "website",
    images: [
      {
        url: "/assets/cafe-beings/cafe-being-main.jpeg",
        alt: "Cafe Beings warm plant-filled interior",
      },
    ],
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  description: siteConfig.shortDescription,
  url: siteConfig.siteUrl,
  sameAs: siteConfig.instagram ? [siteConfig.instagram] : [],
  telephone: siteConfig.phone || undefined,
  openingHours: siteConfig.openingHours || undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScrollProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </body>
    </html>
  );
}
