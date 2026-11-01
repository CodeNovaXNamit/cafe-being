"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { YouTubeBackground } from "@/components/ui/YouTubeBackground";

export function ScrollVideoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const animatedY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [20, -14]);
  const animatedScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1.025, 0.99],
  );
  const animatedRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -1]);
  const animatedRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-4, 0, 3]);
  const mobileRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0, -0.4]);
  const mobileRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-1.5, 0, 1]);
  const animatedShadow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "0 20px 45px -24px rgba(4, 15, 9, 0.65)",
      "0 34px 70px -28px rgba(4, 15, 9, 0.9)",
      "0 24px 52px -26px rgba(4, 15, 9, 0.72)",
    ],
  );

  return (
    <div
      ref={cardRef}
      className="relative mx-auto w-full max-w-[17rem] [perspective:1000px] sm:max-w-[18rem] md:mx-0 md:max-w-[16rem] lg:max-w-[18rem]"
    >
      <motion.div
        style={
          prefersReducedMotion
            ? {
                y: 0,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                boxShadow: "0 28px 64px -28px rgba(4, 15, 9, 0.82)",
              }
            : {
                y: isMobile ? mobileY : animatedY,
                scale: animatedScale,
                rotateX: isMobile ? mobileRotateX : animatedRotateX,
                rotateY: isMobile ? mobileRotateY : animatedRotateY,
                boxShadow: animatedShadow,
              }
        }
        className="relative aspect-[9/16] max-h-[520px] overflow-hidden rounded-[1.75rem] border border-white/30 bg-[#173e2b] p-1.5 [transform-style:preserve-3d]"
      >
        <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-white/12 bg-[linear-gradient(145deg,#244f38,#9b7248)]">
          <YouTubeBackground
            className="absolute inset-0"
            orientation="portrait"
            title="A vertical glimpse of the atmosphere at Delilah's Cafe"
            videoId="ZqB6V7B4ids"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,238,196,0.08),transparent_38%,rgba(8,24,15,0.22))]" />
          <div className="pointer-events-none absolute inset-x-3 bottom-3 h-px bg-white/25" />
        </div>
      </motion.div>
    </div>
  );
}
