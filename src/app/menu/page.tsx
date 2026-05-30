import type { Metadata } from "next";
import Image from "next/image";
import { MenuBrowser } from "@/components/menu/MenuBrowser";

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse Cafe Beings menu categories, comfort bites, and coffee-style cafe drinks.",
};

export default function MenuPage() {
  return (
    <section className="px-4 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto w-[min(1120px,100%)]">
        <div className="relative overflow-hidden rounded-[2rem]">
          <div className="relative h-64 md:h-80">
            <Image
              src="/assets/cafe-beings/cafe-being-counter.png"
              alt="Cafe counter at Cafe Beings"
              fill
              className="object-cover"
              sizes="100vw"
              preload
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          <div className="absolute inset-0 flex items-end p-6 md:p-10">
            <div>
              <h1 className="text-4xl text-[color:var(--warm-cream)] md:text-5xl">Menu</h1>
              <p className="mt-2 max-w-xl text-sm text-[color:var(--warm-cream)]/90 md:text-base">
                Comfort food and cafe sips made for long conversations. Prices are placeholders until owner verification.
              </p>
            </div>
          </div>
        </div>
        <MenuBrowser />
      </div>
    </section>
  );
}

