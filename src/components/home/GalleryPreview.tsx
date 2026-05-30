import { Button } from "@/components/ui/Button";
import { AnimatedImage } from "@/components/ui/AnimatedImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryItems } from "@/data/gallery";

export function GalleryPreview() {
  return (
    <section className="mx-auto mt-16 w-[min(1120px,calc(100%-2rem))]">
      <SectionHeader
        title="A visual love letter to cozy corners"
        subtitle="Pick a corner, order something comforting, and let the cafe slow the day down."
      />
      <div className="mt-8 flex gap-4 overflow-x-auto pb-2 md:grid md:overflow-visible md:pb-0 md:grid-cols-3">
        {galleryItems.slice(0, 3).map((item) => (
          <div key={item.src} className="relative h-[24rem] w-[82vw] shrink-0 overflow-hidden rounded-3xl md:h-80 md:w-auto md:shrink">
            <AnimatedImage src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button href="/gallery" variant="ghost">
          See Gallery
        </Button>
      </div>
    </section>
  );
}
