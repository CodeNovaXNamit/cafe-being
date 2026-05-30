import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function VisitCTA() {
  return (
    <section className="mx-auto my-16 w-[min(1120px,calc(100%-2rem))] rounded-[2rem] border border-[color:var(--coffee-brown)]/15 bg-[color:var(--deep-green)] p-8 text-[color:var(--warm-cream)] md:p-12">
      <h2 className="text-3xl md:text-5xl">Come for the coffee. Stay for the corners.</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--warm-cream)]/85 md:text-base">
        Some places are not just for eating. They are for sitting longer than planned.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={siteConfig.googleMapsUrl} external>
          Open Google Maps
        </Button>
        <Button href="/gallery" variant="ghost" className="text-[color:var(--warm-cream)]">
          View Gallery
        </Button>
      </div>
    </section>
  );
}

