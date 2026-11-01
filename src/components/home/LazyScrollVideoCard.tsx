"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ScrollVideoCard = dynamic(
  () => import("./ScrollVideoCard").then((module) => module.ScrollVideoCard),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto aspect-[9/16] w-full max-w-[17rem] rounded-[1.75rem] border border-white/25 bg-white/8 md:mx-0" />
    ),
  },
);

export function LazyScrollVideoCard() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={triggerRef} className="min-h-[30rem]">
      {isNearViewport ? (
        <ScrollVideoCard />
      ) : (
        <div className="mx-auto aspect-[9/16] w-full max-w-[17rem] rounded-[1.75rem] border border-white/25 bg-white/8 md:mx-0" />
      )}
    </div>
  );
}
