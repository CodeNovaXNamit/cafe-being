"use client";

import { DesktopHero } from "@/components/home/DesktopHero";
import { MobileHero } from "@/components/home/MobileHero";

export function Hero() {
  return (
    <>
      <DesktopHero />
      <MobileHero />
    </>
  );
}
