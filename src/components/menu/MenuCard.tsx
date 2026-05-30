import { Leaf } from "lucide-react";
import { SoftCard } from "@/components/ui/SoftCard";
import { MenuItem } from "@/data/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <SoftCard className="h-full">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg text-[color:var(--coffee-brown)]">{item.name}</h3>
        <span className="font-semibold text-[color:var(--leaf-green)]">{item.price}</span>
      </div>
      <p className="mt-2 text-sm text-[color:var(--coffee-brown)]/85">{item.description}</p>
      <div className="mt-3 flex items-center gap-2 text-xs">
        {item.tag ? (
          <span className="rounded-full bg-[color:var(--mustard)]/20 px-2 py-1 text-[color:var(--coffee-brown)]">
            {item.tag}
          </span>
        ) : null}
        {item.veg ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--leaf-green)]/10 px-2 py-1 text-[color:var(--leaf-green)]">
            <Leaf size={12} /> Veg
          </span>
        ) : null}
      </div>
    </SoftCard>
  );
}

