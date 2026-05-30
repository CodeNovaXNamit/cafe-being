import { AtSign, Clock3, Phone } from "lucide-react";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/data/site";

export function VisitInfo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <SoftCard>
        <h3 className="text-xl text-[color:var(--coffee-brown)]">Opening hours</h3>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-[color:var(--coffee-brown)]/85">
          <Clock3 size={14} /> {siteConfig.openingHours}
        </p>
      </SoftCard>
      <SoftCard>
        <h3 className="text-xl text-[color:var(--coffee-brown)]">Best for</h3>
        <p className="mt-2 text-sm text-[color:var(--coffee-brown)]/85">{siteConfig.visitTags.join(", ")}</p>
      </SoftCard>
      <SoftCard>
        <h3 className="text-xl text-[color:var(--coffee-brown)]">Vibe</h3>
        <p className="mt-2 text-sm text-[color:var(--coffee-brown)]/85">{siteConfig.vibe}</p>
      </SoftCard>
      <SoftCard>
        <h3 className="text-xl text-[color:var(--coffee-brown)]">Contact</h3>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-[color:var(--coffee-brown)]/85">
          <Phone size={14} /> {siteConfig.phone || "TODO: verify with owner"}
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-[color:var(--coffee-brown)]/85">
          <AtSign size={14} /> {siteConfig.instagram || "TODO: add official Instagram"}
        </p>
      </SoftCard>
    </div>
  );
}
