import type { LucideIcon } from "lucide-react";
import { Armchair, Camera, Pizza, ShoppingBag, Users } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type VibeItem = {
  title: string;
  copy: string;
  label: string;
  icon: LucideIcon;
  className: string;
  tone: string;
  dark?: boolean;
};

const vibeItems: VibeItem[] = [
  {
    title: "Pinterest-coded corners",
    copy: "Warm lights, plants, soft seating, and photo-friendly details.",
    label: "Aesthetic",
    icon: Camera,
    className: "md:col-span-3 md:row-span-2",
    tone: "bg-[linear-gradient(145deg,#173e2b,#2f5d3a_58%,#8da36f)]",
    dark: true,
  },
  {
    title: "Outdoor seating",
    copy: "A relaxed setting for evenings, coffee, and conversations.",
    label: "Open air",
    icon: Armchair,
    className: "md:col-span-3",
    tone: "bg-[linear-gradient(145deg,#f5e8cd,#d9dfbb)]",
  },
  {
    title: "Continental comfort",
    copy: "Pizzas, fries, platters, coffee, mocktails, and cafe classics.",
    label: "On the table",
    icon: Pizza,
    className: "md:col-span-2",
    tone: "bg-[linear-gradient(145deg,#f1dcc5,#d5a77f)]",
  },
  {
    title: "Easy plans",
    copy: "Dine-in, pickup, and no-contact delivery available.",
    label: "Flexible",
    icon: ShoppingBag,
    className: "md:col-span-2",
    tone: "bg-[linear-gradient(145deg,#f8f0df,#e9d5ad)]",
  },
  {
    title: "Good for friends",
    copy: "A cozy place for catch-ups, dates, and slow evenings.",
    label: "Stay awhile",
    icon: Users,
    className: "md:col-span-2",
    tone: "bg-[linear-gradient(145deg,#4b3628,#744c35)]",
    dark: true,
  },
];

const revealDirections = ["left", "right", "up", "left", "right"] as const;

export function HomeBentoGrid() {
  return (
    <section className="mx-auto mt-16 w-[min(1180px,calc(100%-2rem))] md:mt-24">
      <ScrollReveal direction="left" className="max-w-2xl">
        <p className="text-xs font-bold tracking-[0.16em] text-[color:var(--leaf-green)] uppercase">
          Come for the mood
        </p>
        <h2 className="mt-3 text-4xl tracking-[-0.03em] text-[color:var(--coffee-brown)] md:text-6xl">
          A cafe made for lingering.
        </h2>
        <p className="mt-3 text-sm leading-7 text-[color:var(--coffee-brown)]/72 md:text-base">
          Pretty without feeling precious. Comfortable without feeling ordinary.
        </p>
      </ScrollReveal>

      <div className="mt-8 grid gap-4 md:grid-cols-6 md:auto-rows-[13rem]">
        {vibeItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal
              key={item.title}
              direction={revealDirections[index]}
              delay={(index % 3) * 90}
              className={item.className}
            >
              <article
                className={`group relative h-full min-h-[220px] overflow-hidden rounded-[1.9rem] border border-white/40 p-6 shadow-[0_20px_55px_-45px_rgba(34,25,20,0.75)] transition duration-300 hover:-translate-y-1 ${item.tone}`}
              >
                <div className="absolute -top-12 -right-10 size-40 rounded-full border border-white/20 bg-white/12 transition duration-500 group-hover:scale-110" />
                <div className="absolute right-16 bottom-[-4rem] size-36 rounded-full border border-white/12" />
                <div
                  className={`relative z-10 flex h-full flex-col ${
                    item.dark
                      ? "text-[color:var(--warm-cream)]"
                      : "text-[color:var(--coffee-brown)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase ${
                        item.dark
                          ? "bg-white/12 text-white/80"
                          : "bg-white/50 text-[color:var(--leaf-green)]"
                      }`}
                    >
                      <Icon size={13} /> {item.label}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-2xl leading-tight md:text-3xl">{item.title}</h3>
                    <p
                      className={`mt-2 max-w-sm text-sm leading-6 ${
                        item.dark
                          ? "text-white/72"
                          : "text-[color:var(--coffee-brown)]/70"
                      }`}
                    >
                      {item.copy}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
