"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const CafeScene = dynamic(() => import("@/components/3d/CafeScene"), { ssr: false });

export function DesktopHero() {
  return (
    <section className="relative hidden min-h-screen min-h-[100svh] overflow-hidden md:block">
      <Image
        src="/assets/cafe-beings/cafe-being-main.jpeg"
        alt="Cafe Beings warm interior with plants and wooden seating"
        fill
        className="absolute inset-0 object-cover"
        sizes="100vw"
        preload
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,15,10,0.5),rgba(55,40,30,0.32),rgba(247,238,220,0.12))]" />
      <CafeScene />

      <div className="relative flex min-h-screen min-h-[100svh] items-center px-10 pt-[96px]">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="max-w-[640px] text-left">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full border border-white/35 bg-black/20 px-4 py-2 text-xs text-[color:var(--warm-cream)]"
            >
              Plant-filled cafe · Cozy seating · Pet-loving soul
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-7xl leading-tight text-[color:var(--warm-cream)]"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-3xl text-[color:var(--mustard)]"
            >
              Have a cup. Save a pup.
            </motion.p>
            <p className="mt-6 max-w-2xl text-lg leading-7 text-[color:var(--warm-cream)]">
              A cozy little escape for coffee, comfort bites, soft corners, and tiny happy moments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/menu">View Menu</Button>
              <Button href="/find-us" variant="ghost" className="text-[color:var(--warm-cream)]">
                Find Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
