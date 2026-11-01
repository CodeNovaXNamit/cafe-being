"use client";

import { useEffect, useRef, useState } from "react";

type VideoSource = {
  src: string;
  type: string;
  media?: string;
};

type DeferredVideoProps = {
  ariaLabel: string;
  className?: string;
  onError?: () => void;
  sources: VideoSource[];
};

export function DeferredVideo({
  ariaLabel,
  className,
  onError,
  sources,
}: DeferredVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.load();
    void video.play().catch(() => undefined);
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
      onError={onError}
    >
      {shouldLoad
        ? sources.map((source) => (
            <source
              key={`${source.src}-${source.media ?? "all"}`}
              src={source.src}
              type={source.type}
              media={source.media}
            />
          ))
        : null}
      Your browser does not support background video.
    </video>
  );
}
