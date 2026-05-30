"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const decorItems = [
  {
    src: "/assets/cafe-beings/decor/floating-leaf-1.png",
    alt: "Floating cafe leaf",
    className:
      "left-[-20px] top-[92px] h-[112px] w-[112px] rotate-[-18deg]",
    animate: {
      y: [0, -13, 0],
      x: [0, 6, 0],
      rotate: [-18, -11, -18],
      scale: [1, 1.035, 1],
    },
    duration: 6.8,
  },
  {
    src: "/assets/cafe-beings/decor/floating-leaf-2.png",
    alt: "Floating cafe leaf",
    className:
      "right-[-28px] bottom-[130px] h-[132px] w-[132px] rotate-[18deg]",
    animate: {
      y: [0, 14, 0],
      x: [0, -7, 0],
      rotate: [18, 10, 18],
      scale: [1, 1.04, 1],
    },
    duration: 7.4,
  },
  {
    src: "/assets/cafe-beings/decor/floating-coffee.png",
    alt: "Floating coffee cup",
    className:
      "right-[-12px] top-[126px] h-[88px] w-[88px] rotate-[10deg]",
    animate: {
      y: [0, -10, 0],
      x: [0, -5, 0],
      rotate: [10, 16, 10],
      scale: [1, 1.025, 1],
    },
    duration: 5.9,
  },
  {
    src: "/assets/cafe-beings/decor/floating-shake.png",
    alt: "Floating shake",
    className:
      "left-[-14px] bottom-[112px] h-[96px] w-[96px] rotate-[-8deg]",
    animate: {
      y: [0, 11, 0],
      x: [0, 5, 0],
      rotate: [-8, -14, -8],
      scale: [1, 1.03, 1],
    },
    duration: 6.3,
  },
];

export default function FloatingHeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 md:hidden">
      {decorItems.map((item, index) => (
        <motion.div
          key={item.src}
          className={`absolute ${item.className}`}
          initial={{ opacity: 0, scale: 0.84, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            ...item.animate,
          }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: 0.35 + index * 0.12,
              ease: "easeOut",
            },
            filter: {
              duration: 0.8,
              delay: 0.35 + index * 0.12,
              ease: "easeOut",
            },
            y: {
              duration: item.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            x: {
              duration: item.duration + 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            rotate: {
              duration: item.duration + 0.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            scale: {
              duration: item.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="140px"
            className="object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.28)]"
            priority={false}
          />
        </motion.div>
      ))}
    </div>
  );
}
