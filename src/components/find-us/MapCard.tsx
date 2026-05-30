import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function MapCard() {
  return (
    <div className="rounded-3xl border border-[color:var(--coffee-brown)]/20 bg-[color:var(--glass-white)] p-6">
      <div className="grid min-h-72 place-items-center rounded-2xl border border-dashed border-[color:var(--coffee-brown)]/30 bg-[linear-gradient(140deg,#ede3d3,#d9e4d4)] p-6 text-center">
        <div>
          <MapPin className="mx-auto text-[color:var(--leaf-green)]" />
          <p className="mt-3 text-lg text-[color:var(--coffee-brown)]">{siteConfig.locationLabel}</p>
          <p className="mt-2 text-sm text-[color:var(--coffee-brown)]/75">
            Map embed placeholder until owner-shared exact pin details.
          </p>
          <Button href={siteConfig.googleMapsUrl} external className="mt-5">
            Open in Google Maps
          </Button>
        </div>
      </div>
    </div>
  );
}

