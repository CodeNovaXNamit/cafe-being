import { IndianRupee, MapPin, ShoppingBag, Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "./ScrollReveal";

const trustItems = [
  {
    icon: Star,
    value: `${siteConfig.rating} ★ Rated`,
    detail: `${siteConfig.reviewCount} Google reviews`,
  },
  {
    icon: IndianRupee,
    value: siteConfig.priceRange,
    detail: "Per person",
  },
  {
    icon: ShoppingBag,
    value: "Dine-in · Pickup",
    detail: "No-contact delivery",
  },
  {
    icon: MapPin,
    value: "Anand Vihar, Delhi",
    detail: siteConfig.hoursLabel,
  },
] as const;

export function HomeInfoStrip() {
  return (
    <section
      aria-label="Cafe information"
      className="mx-auto w-full max-w-[1240px] px-4 py-16 md:px-10 md:py-[72px]"
    >
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal
              key={item.value}
              direction="up"
              delay={index * 80}
              className="min-w-[220px] flex-1 snap-start md:min-w-0"
            >
              <article className="h-full rounded-[1.35rem] border border-[color:var(--coffee-brown)]/12 bg-[#fffaf0]/90 p-4 shadow-[0_16px_45px_-32px_rgba(34,25,20,0.75)] backdrop-blur-xl">
                <Icon size={18} className="text-[color:var(--leaf-green)]" />
                <p className="mt-3 text-sm font-bold text-[color:var(--coffee-brown)]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-[color:var(--coffee-brown)]/65">
                  {item.detail}
                </p>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
