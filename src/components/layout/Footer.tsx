import { Coffee, Leaf, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--coffee-brown)]/15 bg-[linear-gradient(180deg,#f6eddd,#efe5d6)]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            {/* TODO: replace this temporary mark with the official Delilah logo. */}
            <span
              aria-hidden="true"
              className="grid size-11 place-items-center rounded-full bg-[color:var(--leaf-green)] font-serif text-xl text-[color:var(--warm-cream)]"
            >
              D
            </span>
            <h3 className="text-2xl text-[color:var(--coffee-brown)]">{siteConfig.name}</h3>
          </div>
          <p className="mt-1 text-sm text-[color:var(--coffee-brown)]">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm text-[color:var(--coffee-brown)]/80">
            {siteConfig.hindiName} · {siteConfig.businessType}
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-[color:var(--coffee-brown)]/85">
            <Star size={15} fill="currentColor" /> {siteConfig.rating} from {siteConfig.reviewCount} reviews (snapshot)
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
          <p className="font-semibold">{siteConfig.locationLabel}</p>
          <p className="leading-6">{siteConfig.address}</p>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[color:var(--leaf-green)]"
          >
            <MapPin size={15} /> Get directions
          </a>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 font-semibold text-[color:var(--leaf-green)]"
          >
            <Phone size={15} /> {siteConfig.phone}
          </a>
          <p>{siteConfig.hoursLabel}</p>
          <p>{siteConfig.priceRange}</p>
          <p>{siteConfig.services.join(" · ")}</p>
          <div className="flex gap-2 pt-2">
            <Coffee size={16} />
            <Leaf size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}
