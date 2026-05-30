"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SeamlessMobileHeroVideo } from "@/components/home/SeamlessMobileHeroVideo";
import FloatingHeroDecor from "./FloatingHeroDecor";

export function MobileHero() {
  return (
    <section className="relative min-h-screen min-h-[100svh] overflow-hidden bg-[#21180f] md:hidden">
      <SeamlessMobileHeroVideo />

      <div className="absolute inset-0 z-20 bg-[radial-gradient(95%_55%_at_50%_7%,rgba(255,245,224,0.28),transparent_62%)]" />
      <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(20,14,10,0.08)_0%,rgba(20,14,10,0.16)_45%,rgba(20,14,10,0.46)_100%)]" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_55%,rgba(17,12,9,0.18)_100%)]" />
      <FloatingHeroDecor />

      <div className="relative z-30 min-h-screen min-h-[100svh] px-5 pt-[34svh]">
        <div className="mx-auto max-w-[310px] text-center text-[color:var(--warm-cream)]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="mx-auto inline-flex rounded-full border border-white/30 bg-[#fff7e8]/16 px-3 py-1.5 text-[11px] tracking-wide backdrop-blur-md"
          >
            Plant-filled • Pet-loving • Cozy coffee
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-5xl leading-none [text-shadow:0_4px_20px_rgba(20,15,10,0.55)]"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.29, duration: 0.5 }}
            className="mt-4 text-[29px] leading-[1.04] tracking-tight [text-shadow:0_4px_16px_rgba(20,15,10,0.55)]"
          >
            Have a cup.
            <br />
            <span className="text-[color:var(--mustard)]">Save a pup.</span>
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.52 }}
        className="absolute right-[18px] bottom-6 left-[18px] z-30 rounded-[28px] border border-white/25 bg-[#fff7e8]/18 p-4 text-[color:var(--warm-cream)] shadow-[0_22px_34px_-26px_rgba(20,15,10,1)] backdrop-blur-xl"
      >
        <p className="text-xs leading-5 text-[color:var(--warm-cream)]/90">
          Slow coffee, cozy corners, tiny happy moments.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full bg-[#f6ebd5] px-4 py-2.5 text-sm font-semibold text-[color:var(--coffee-brown)] transition hover:translate-y-[-1px]"
          >
            View Menu
          </Link>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/12 px-4 py-2.5 text-sm font-semibold text-[color:var(--warm-cream)] transition hover:translate-y-[-1px]"
          >
            Get Directions
          </a>
        </div>
      </motion.div>
    </section>
  );
}
