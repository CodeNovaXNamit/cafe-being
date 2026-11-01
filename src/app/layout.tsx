import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
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
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    siteName: siteConfig.name,
    // TODO: add a Delilah-specific Open Graph image when the official asset is provided.
  },
  twitter: {
    card: "summary",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  alternateName: siteConfig.hindiName,
  description: siteConfig.description,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  priceRange: siteConfig.priceRange,
  servesCuisine: siteConfig.cuisine,
  address: {
    "@type": "PostalAddress",
    streetAddress: "28 LSC DDA Market, Pushpanjali, Anand Vihar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110092",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating,
    reviewCount: siteConfig.reviewCount,
    bestRating: 5,
  },
  // Rating/review values are a snapshot and should be verified before launch.
  // TODO: add openingHoursSpecification after weekly hours are owner-verified.
  ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
  ...(siteConfig.instagramUrl ? { sameAs: [siteConfig.instagramUrl] } : {}),
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
          <main className="min-h-screen pb-24 md:pb-0">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
