"use client";

import { YouTubeBackground } from "@/components/ui/YouTubeBackground";

export function SeamlessMobileHeroVideo() {
  return (
    <YouTubeBackground
      className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_20%,#7f9c5f_0%,#31533a_38%,#163b2a_72%,#0f251a_100%)]"
      load="after-paint"
      orientation="portrait"
      title="Delilah's Cafe exterior surrounded by greenery"
      videoId="aEDpR5mk3Nw"
    />
  );
}
