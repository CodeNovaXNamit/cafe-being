"use client";

import { cn } from "@/lib/utils";

type Props = {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
};

export function MenuCategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition",
            active === category
              ? "border-[color:var(--leaf-green)] bg-[color:var(--leaf-green)] text-[color:var(--warm-cream)]"
              : "border-[color:var(--coffee-brown)]/20 bg-white/50 text-[color:var(--coffee-brown)]"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

