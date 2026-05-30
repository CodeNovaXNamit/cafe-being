"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduced ? { opacity: 1 } : { opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="min-h-screen pb-24 md:pb-0"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

