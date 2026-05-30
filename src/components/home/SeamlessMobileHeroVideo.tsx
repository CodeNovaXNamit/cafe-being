"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/assets/cafe-beings/mobile-hero-optimized.mp4";
const FALLBACK_IMAGE = "/assets/cafe-beings/cafe-being-main.jpeg";
const LOOP_START = 0.05;
const LOOP_CUT_SECONDS = 0.8;
const CROSSFADE_MS = 220;

export function SeamlessMobileHeroVideo() {
  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);
  const durationsRef = useRef<[number, number]>([0, 0]);
  const transitioningRef = useRef(false);
  const activeRef = useRef<0 | 1>(0);
  const [active, setActive] = useState<0 | 1>(0);

  useEffect(() => {
    const a = videoARef.current;
    if (!a) return;

    a.currentTime = LOOP_START;
    a.play().catch(() => {});

    let frameId = 0;
    const tick = () => {
      const current = activeRef.current === 0 ? videoARef.current : videoBRef.current;
      const next = activeRef.current === 0 ? videoBRef.current : videoARef.current;
      const duration = durationsRef.current[activeRef.current];

      if (current && next && duration > 0 && !transitioningRef.current) {
        const loopEnd = Math.max(LOOP_START + 0.2, duration - LOOP_CUT_SECONDS);
        if (current.currentTime >= loopEnd) {
          transitioningRef.current = true;
          next.currentTime = LOOP_START;
          next.play().catch(() => {});

          const nextActive: 0 | 1 = activeRef.current === 0 ? 1 : 0;
          activeRef.current = nextActive;
          setActive(nextActive);

          window.setTimeout(() => {
            current.pause();
            current.currentTime = LOOP_START;
            transitioningRef.current = false;
          }, CROSSFADE_MS);
        }
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const videoClass =
    "absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-200";

  return (
    <>
      <Image
        src={FALLBACK_IMAGE}
        alt="Cafe Beings"
        fill
        preload
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover"
      />

      <video
        ref={videoARef}
        className={`${videoClass} ${active === 0 ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={FALLBACK_IMAGE}
        onLoadedData={(event) => {
          durationsRef.current[0] = event.currentTarget.duration || 0;
          event.currentTarget.play().catch(() => {});
        }}
        onEnded={(event) => {
          event.currentTarget.currentTime = LOOP_START;
          event.currentTarget.play().catch(() => {});
        }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <video
        ref={videoBRef}
        className={`${videoClass} ${active === 1 ? "opacity-100" : "opacity-0"}`}
        muted
        loop
        playsInline
        preload="auto"
        poster={FALLBACK_IMAGE}
        onLoadedData={(event) => {
          durationsRef.current[1] = event.currentTarget.duration || 0;
        }}
        onEnded={(event) => {
          event.currentTarget.currentTime = LOOP_START;
          event.currentTarget.play().catch(() => {});
        }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </>
  );
}
