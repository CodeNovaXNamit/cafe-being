"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { GalleryFilter } from "./GalleryFilter";
import { galleryItems, type GalleryFilter as FilterType } from "@/data/gallery";

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [selected, setSelected] = useState<number | null>(null);

  const items = useMemo(
    () => galleryItems.filter((item) => activeFilter === "All" || item.filter === activeFilter),
    [activeFilter]
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="mx-auto mt-8 w-[min(1120px,calc(100%-2rem))]">
      <GalleryFilter active={activeFilter} onChange={setActiveFilter} />
      <div className="mt-6 columns-1 gap-4 space-y-4 md:columns-3">
        {items.map((item, idx) => (
          <button
            key={`${item.src}-${idx}`}
            onClick={() => setSelected(idx)}
            className="group relative block w-full overflow-hidden rounded-3xl text-left"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={900}
              className="h-auto w-full transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <p className="absolute bottom-3 left-3 right-3 text-sm text-[color:var(--warm-cream)] opacity-0 transition group-hover:opacity-100">
              {item.caption}
            </p>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selected !== null ? (
          <motion.dialog
            open
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/75 p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl">
              <Image
                src={items[selected]?.src ?? galleryItems[0].src}
                alt={items[selected]?.alt ?? galleryItems[0].alt}
                width={1400}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.dialog>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

