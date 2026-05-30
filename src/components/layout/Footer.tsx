import { Coffee, Leaf, PawPrint } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--coffee-brown)]/15 bg-[color:var(--cream)]/80">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-2xl text-[color:var(--coffee-brown)]">{siteConfig.name}</h3>
          <p className="mt-1 text-sm text-[color:var(--coffee-brown)]">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm text-[color:var(--coffee-brown)]/80">
            Coffee, comfort and cozy little corners.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-[color:var(--coffee-brown)]">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[color:var(--coffee-brown)]/85">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/find-us">Find Us</Link>
          </div>
        </div>
        <div className="space-y-2 text-sm text-[color:var(--coffee-brown)]/90">
          <a href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer">
            Open Google Maps
          </a>
          <p>{siteConfig.locationLabel}</p>
          <p>{siteConfig.openingHours}</p>
          <div className="flex gap-2 pt-2">
            <Coffee size={16} />
            <Leaf size={16} />
            <PawPrint size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}

