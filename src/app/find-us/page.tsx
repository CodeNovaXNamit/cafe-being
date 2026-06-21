import type { Metadata } from "next";
import { MapCard } from "@/components/find-us/MapCard";
import { VisitInfo } from "@/components/find-us/VisitInfo";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Delilah's Cafe at 28 LSC DDA Market, Pushpanjali, Anand Vihar, New Delhi, and call for visit details.",
};

export default function FindUsPage() {
  return (
    <section className="px-4 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto w-[min(1120px,100%)]">
        <SectionHeader
          title={`Find your way to ${siteConfig.name}`}
          subtitle="Visit our cozy Continental cafe in Anand Vihar for warm lighting, plants, outdoor seating, food, and drinks with friends."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <MapCard />
          <VisitInfo />
        </div>
        <div className="mt-10 rounded-3xl bg-[color:var(--coffee-brown)] p-8 text-center text-[color:var(--warm-cream)]">
          <h2 className="text-3xl">Bring your people. Find your corner.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={siteConfig.mapUrl} external>
              Open Google Maps
            </Button>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-[color:var(--warm-cream)] transition hover:bg-white/20"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
