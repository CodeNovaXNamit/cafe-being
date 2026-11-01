"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function DesktopHero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative hidden min-h-[100svh] overflow-hidden bg-[color:var(--deep-green)] md:block">
      {!videoError ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Delilah's Cafe exterior surrounded by plants in warm evening light"
          onError={() => setVideoError(true)}
        >
          <source
            src="/assets/cafe-beings/home/delilah.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
          Your browser does not support background video.
        </video>
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,36,24,0.8)_0%,rgba(10,36,24,0.6)_43%,rgba(10,36,24,0.24)_72%,rgba(10,36,24,0.1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,12,0.18)_0%,transparent_45%,rgba(8,14,10,0.5)_100%)]" />
      <div className="absolute top-[-12rem] right-[-9rem] size-[34rem] rounded-full bg-[color:var(--mustard)]/12 blur-3xl" />

      <div className="relative z-10 flex min-h-[100svh] w-full items-center pt-24 pr-10 pl-[clamp(2rem,8vw,8.75rem)]">
        <div className="hero-copy-enter max-w-[720px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[color:var(--warm-cream)] uppercase backdrop-blur-md">
            <MapPin size={14} /> Anand Vihar, New Delhi
          </span>

          <h1 className="mt-6 text-7xl leading-[0.94] tracking-[-0.045em] text-[color:var(--warm-cream)] xl:text-8xl">
            {siteConfig.name}
          </h1>
          <p lang="hi" className="mt-3 text-xl text-[#d8e8d5]">
            {siteConfig.hindiName}
          </p>
          <p className="mt-6 max-w-2xl text-2xl leading-tight text-[#f1c977]">
            A cozy cafe for food, friends &amp; beautiful evenings.
          </p>
          <p className="mt-5 max-w-[640px] text-base leading-7 text-[color:var(--warm-cream)]/88">
            Step into warm lights, plant-filled corners, Continental bites, coffee, mocktails,
            and relaxed conversations in Anand Vihar.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--warm-cream)] px-7 py-3 text-sm font-bold text-[color:var(--deep-green)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              View Menu
            </Link>
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-[color:var(--warm-cream)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/18"
            >
              <MapPin size={16} /> Get Directions
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-semibold text-[color:var(--warm-cream)]/90 transition hover:text-white"
            >
              <Phone size={15} /> Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
