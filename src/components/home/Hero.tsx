"use client";

import { DesktopHero } from "@/components/home/DesktopHero";
import { MobileHero } from "@/components/home/MobileHero";
import { useIsMobile } from "@/lib/useIsMobile";

export function Hero() {
  const isMobile = useIsMobile();

  if (isMobile === null) {
    return <DesktopHero />;
  }

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
