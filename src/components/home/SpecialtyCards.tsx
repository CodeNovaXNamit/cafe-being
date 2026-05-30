"use client";

import { motion } from "framer-motion";
import { SoftCard } from "@/components/ui/SoftCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { specialtyCards } from "@/data/site";

export function SpecialtyCards() {
  return (
    <section className="mx-auto mt-16 w-[min(1120px,calc(100%-2rem))]">
      <SectionHeader title="Corners people remember" />
      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:overflow-visible md:pb-0 md:snap-none md:grid-cols-3">
        {specialtyCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="w-[82vw] shrink-0 snap-start md:w-auto md:shrink"
          >
            <SoftCard className="h-full">
              <h3 className="text-xl text-[color:var(--coffee-brown)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--coffee-brown)]/85">{card.description}</p>
            </SoftCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
