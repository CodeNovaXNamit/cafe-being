import { Clock3, IndianRupee, Phone, Star, Utensils } from "lucide-react";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/data/site";

export function VisitInfo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <SoftCard>
        <h3 className="text-xl text-[color:var(--coffee-brown)]">Opening hours</h3>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-[color:var(--coffee-brown)]/85">
          <Clock3 size={14} /> {siteConfig.hoursLabel}
        </p>
        <p className="mt-2 text-xs text-[color:var(--coffee-brown)]/65">
          Weekly opening times are pending owner confirmation.
        </p>
      </SoftCard>
      <SoftCard>
        <h3 className="text-xl text-[color:var(--coffee-brown)]">Services</h3>
        <p className="mt-2 inline-flex items-start gap-2 text-sm leading-6 text-[color:var(--coffee-brown)]/85">
          <Utensils size={14} className="mt-1 shrink-0" /> {siteConfig.services.join(" · ")}
        </p>
      </SoftCard>
      <SoftCard>
        <h3 className="text-xl text-[color:var(--coffee-brown)]">Rating & price</h3>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-[color:var(--coffee-brown)]/85">
          <Star size={14} fill="currentColor" /> {siteConfig.rating} from {siteConfig.reviewCount} reviews (snapshot)
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-[color:var(--coffee-brown)]/85">
          <IndianRupee size={14} /> {siteConfig.priceRange}
        </p>
      </SoftCard>
      <SoftCard>
        <h3 className="text-xl text-[color:var(--coffee-brown)]">Contact</h3>
        <a
          href={siteConfig.phoneHref}
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--leaf-green)]"
        >
          <Phone size={14} /> {siteConfig.phone}
        </a>
        <p className="mt-2 text-xs text-[color:var(--coffee-brown)]/65">
          WhatsApp, reservations, ordering, and social links are pending owner confirmation.
        </p>
      </SoftCard>
    </div>
  );
}
