"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function AnimatedImage({ src, alt, className, priority }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 22, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="rounded-3xl object-cover"
        preload={priority}
      />
    </motion.div>
  );
}

