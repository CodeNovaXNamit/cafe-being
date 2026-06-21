import { Clock3, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "./ScrollReveal";

export function HomeFinalCta() {
  return (
    <section className="mx-auto my-16 w-[min(1180px,calc(100%-2rem))] md:my-24">
      <ScrollReveal direction="up">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(125deg,#143624_0%,#244e35_58%,#5d4030_100%)] p-6 text-[color:var(--warm-cream)] shadow-[0_35px_80px_-58px_rgba(20,54,36,1)] md:p-12">
          <div className="absolute -top-28 -right-16 size-80 rounded-full bg-[#efc36f]/18 blur-3xl" />
          <div className="absolute -bottom-28 -left-16 size-80 rounded-full bg-black/20 blur-3xl" />
          <div className="absolute top-8 right-8 hidden h-[calc(100%-4rem)] w-[34%] rounded-[2rem] border border-white/10 bg-white/5 lg:block" />

          <div className="relative z-10 grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-[#f2c979] uppercase">
                Make a plan
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">
                Visit Delilah&apos;s Cafe today.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                {siteConfig.address}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/75">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-3.5 py-2">
                  <Clock3 size={14} /> {siteConfig.hoursLabel}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-3.5 py-2">
                  <Phone size={14} /> {siteConfig.phone}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-3.5 py-2">
                  <UtensilsCrossed size={14} /> {siteConfig.services.join(" · ")}
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--warm-cream)] px-6 py-3 text-sm font-bold text-[color:var(--deep-green)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                <MapPin size={16} /> Get Directions
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/9 px-6 py-3 text-sm font-bold text-[color:var(--warm-cream)] transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                <Phone size={16} /> Call Now
              </a>
              <Link
                href="/menu"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-bold text-[color:var(--warm-cream)] transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
