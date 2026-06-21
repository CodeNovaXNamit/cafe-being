"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });

    if (!window.location.hash) {
      requestAnimationFrame(() => {
        lenis.scrollTo(0, { immediate: true });
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    }

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
