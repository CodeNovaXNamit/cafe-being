import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Explore ${siteConfig.name} interiors, plants, warm lighting, dreamy corners, and relaxed seating in Anand Vihar.`,
};

export default function GalleryPage() {
  return (
    <section className="px-4 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto w-[min(1120px,100%)]">
        <SectionHeader
          title="Gallery"
          subtitle="A visual love letter to the rattan lamps, rope lights, plant shadows, and warm wooden corners of Cafe Beings."
        />
      </div>
      <GalleryGrid />
    </section>
  );
}
