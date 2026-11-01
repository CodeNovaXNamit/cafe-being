"use client";

import { useEffect, useRef, useState } from "react";

type YouTubeBackgroundProps = {
  className?: string;
  load?: "after-paint" | "viewport";
  orientation?: "landscape" | "portrait";
  title: string;
  videoId: string;
};

export function YouTubeBackground({
  className = "",
  load = "viewport",
  orientation = "landscape",
  title,
  videoId,
}: YouTubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (load === "after-paint") {
      const timer = window.setTimeout(() => setShouldLoad(true), 250);
      return () => window.clearTimeout(timer);
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [load]);

  const playerUrl =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&playsinline=1` +
    `&loop=1&playlist=${videoId}&rel=0&iv_load_policy=3`;

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden bg-[color:var(--deep-green)] ${className}`}
    >
      {shouldLoad ? (
        <iframe
          className={`pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 border-0 ${
            orientation === "portrait" ? "scale-[1.08]" : "scale-[1.18]"
          }`}
          src={playerUrl}
          title={title}
          tabIndex={-1}
          aria-hidden="true"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        />
      ) : null}
    </div>
  );
}
