"use client";

import { useState } from "react";

const VIDEO_SRC = "/assets/cafe-beings/home/delilah-phone.mp4";

export function SeamlessMobileHeroVideo() {
  const [videoError, setVideoError] = useState(false);

  if (videoError) {
    return (
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_20%,#7f9c5f_0%,#31533a_38%,#163b2a_72%,#0f251a_100%)]" />
    );
  }

  return (
    <video
      className="absolute inset-0 z-10 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Delilah's Cafe exterior surrounded by greenery"
      onError={() => setVideoError(true)}
    >
      <source src={VIDEO_SRC} type="video/mp4" />
      Your browser does not support background video.
    </video>
  );
}
