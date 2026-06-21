"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealDirection = "left" | "right" | "up" | "none";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: ScrollRevealDirection;
  delay?: number;
  className?: string;
};

const directionOffsets: Record<
  ScrollRevealDirection,
  { x: number; y: number }
> = {
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
  up: { x: 0, y: 36 },
  none: { x: 0, y: 0 },
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffsets[direction];

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.16, margin: "-5% 0px -5% 0px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.72,
              delay: delay / 1000,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className={cn(className)}
      style={{ willChange: prefersReducedMotion ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
