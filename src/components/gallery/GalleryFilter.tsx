import { GalleryFilter as FilterType, galleryFilters } from "@/data/gallery";
import { cn } from "@/lib/utils";

type Props = {
  active: FilterType;
  onChange: (f: FilterType) => void;
};

export function GalleryFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {galleryFilters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm",
            active === filter
              ? "border-[color:var(--leaf-green)] bg-[color:var(--leaf-green)] text-[color:var(--warm-cream)]"
              : "border-[color:var(--coffee-brown)]/20 bg-white/60 text-[color:var(--coffee-brown)]"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

