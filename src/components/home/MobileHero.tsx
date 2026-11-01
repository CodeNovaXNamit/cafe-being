"use client";

import { MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import { SeamlessMobileHeroVideo } from "@/components/home/SeamlessMobileHeroVideo";
import { siteConfig } from "@/data/site";

export function MobileHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[color:var(--deep-green)] md:hidden">
      <SeamlessMobileHeroVideo />

      <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(12,24,16,0.2)_0%,rgba(12,24,16,0.16)_28%,rgba(10,19,13,0.58)_62%,rgba(8,15,10,0.9)_100%)]" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(90%_44%_at_50%_14%,rgba(255,238,197,0.2),transparent_70%)]" />

      <div className="relative z-30 flex min-h-[100svh] items-end px-4 pt-28 pb-5 min-[380px]:px-5 min-[380px]:pb-7">
        <div className="hero-copy-enter w-full rounded-[1.8rem] border border-white/22 bg-[color:var(--deep-green)]/58 p-4 text-[color:var(--warm-cream)] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.95)] backdrop-blur-md min-[380px]:p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-white/78 uppercase">
              <MapPin size={12} /> Anand Vihar
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[11px]">
              <Star size={12} fill="currentColor" /> {siteConfig.rating} · {siteConfig.hoursLabel}
            </span>
          </div>

          <h1 className="mt-4 text-[2.7rem] leading-[0.94] tracking-[-0.04em] text-[color:var(--warm-cream)] min-[380px]:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-lg leading-tight text-[#f1c977]">
            Cozy Continental cafe in Anand Vihar
          </p>
          <p className="mt-3 text-[13px] leading-5 text-white/78">
            Warm lights, plant-filled corners, good food, mocktails, and easy conversations.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              href="/menu"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--warm-cream)] px-4 py-2.5 text-sm font-bold text-[color:var(--deep-green)]"
            >
              View Menu
            </Link>
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-2.5 text-sm font-bold text-[color:var(--warm-cream)]"
            >
              <MapPin size={14} /> Directions
            </a>
          </div>
          <a
            href={siteConfig.phoneHref}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 text-xs font-semibold text-white/80"
          >
            <Phone size={13} /> Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
