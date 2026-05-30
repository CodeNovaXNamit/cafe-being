import type { Metadata } from "next";
import { MapCard } from "@/components/find-us/MapCard";
import { VisitInfo } from "@/components/find-us/VisitInfo";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Find Us",
  description: "Get directions to Cafe Beings and plan your cozy visit.",
};

export default function FindUsPage() {
  return (
    <section className="px-4 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto w-[min(1120px,100%)]">
        <SectionHeader
          title="Find your way to Cafe Beings"
          subtitle="A cozy little cafe corner waiting with coffee, plants, soft lights and a calm seat for you."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <MapCard />
          <VisitInfo />
        </div>
        <div className="mt-10 rounded-3xl bg-[color:var(--coffee-brown)] p-8 text-center text-[color:var(--warm-cream)]">
          <h2 className="text-3xl">Bring your people. Find your corner.</h2>
          <div className="mt-6">
            <Button href={siteConfig.googleMapsUrl} external>
              Open Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

