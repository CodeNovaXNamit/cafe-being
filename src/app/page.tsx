import { Hero } from "@/components/home/Hero";
import { HomeBentoGrid } from "@/components/home/HomeBentoGrid";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeGalleryPreview } from "@/components/home/HomeGalleryPreview";
import { HomeInfoStrip } from "@/components/home/HomeInfoStrip";
import { HomeMenuPreview } from "@/components/home/HomeMenuPreview";
import { HomeStorySection } from "@/components/home/HomeStorySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeInfoStrip />
      <HomeStorySection />
      <HomeMenuPreview />
      <HomeBentoGrid />
      <HomeGalleryPreview />
      <HomeFinalCta />
    </>
  );
}
