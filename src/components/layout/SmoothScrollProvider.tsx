"use client";

import { useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    if (
      window.matchMedia("(max-width: 1023px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cancelled = false;
    let lenis: { destroy: () => void; raf: (time: number) => void } | null = null;
    let raf = 0;
    const timer = window.setTimeout(async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }, 900);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
