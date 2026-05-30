import { AnimatedImage } from "@/components/ui/AnimatedImage";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CafeStory() {
  return (
    <section className="mx-auto mt-16 w-[min(1120px,calc(100%-2rem))]">
      <SectionHeader
        title="A little jungle of coffee, comfort and kindness."
        subtitle="Cafe Beings feels like stepping into a warm indoor garden. Rope lights glow softly, rattan lamps hang above, plants wrap the corners, and every table feels like a small pause from the busy outside world."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="relative h-72 md:h-[26rem]">
          <AnimatedImage
            src="/assets/cafe-beings/cafe-window-seating.png"
            alt="Window side seating with plants and warm light"
          />
        </div>
        <div className="relative h-72 md:h-[26rem]">
          <AnimatedImage
            src="/assets/cafe-beings/cafe-hanging-decor.png"
            alt="Hanging decor and indoor jungle details at Cafe Beings"
          />
        </div>
      </div>
    </section>
  );
}

