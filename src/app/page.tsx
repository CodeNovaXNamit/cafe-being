import { CafeStory } from "@/components/home/CafeStory";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { MenuPreview } from "@/components/home/MenuPreview";
import { SpecialtyCards } from "@/components/home/SpecialtyCards";
import { VisitCTA } from "@/components/home/VisitCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CafeStory />
      <SpecialtyCards />
      <MenuPreview />
      <GalleryPreview />
      <VisitCTA />
    </>
  );
}
