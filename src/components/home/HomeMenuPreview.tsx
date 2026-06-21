import type { LucideIcon } from "lucide-react";
import { ArrowRight, Coffee, CupSoda, Flame, Pizza, Sparkles, Utensils } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

type FavoriteItem = {
  name: string;
  tag: string;
  description: string;
  icon: LucideIcon;
  tone: string;
};

const favorites: FavoriteItem[] = [
  {
    name: "Truffle Fries",
    tag: "Popular",
    description: "Crisp, savoury, and made for sharing.",
    icon: Sparkles,
    tone: "from-[#f5e4bd] to-[#e9c884]",
  },
  {
    name: "Hot Chocolate with Nutella",
    tag: "Chocolatey",
    description: "A rich, warm cafe comfort.",
    icon: Coffee,
    tone: "from-[#e5c9b3] to-[#b98461]",
  },
  {
    name: "Watermelon Mojito",
    tag: "Refreshing",
    description: "Bright, chilled, and easy to sip.",
    icon: CupSoda,
    tone: "from-[#f1c5b7] to-[#d98978]",
  },
  {
    name: "Garlic Bread with Cheese",
    tag: "For sharing",
    description: "Cheesy, toasted, familiar comfort.",
    icon: Flame,
    tone: "from-[#f1dfb5] to-[#d7a85d]",
  },
  {
    name: "Paparazzi Farm Pizza",
    tag: "Cafe favourite",
    description: "A hearty pizza for long table conversations.",
    icon: Pizza,
    tone: "from-[#d5dfb5] to-[#8eaa6e]",
  },
  {
    name: "No Wine Sangria",
    tag: "Chilled",
    description: "Fruit-forward and made for slow evenings.",
    icon: CupSoda,
    tone: "from-[#d9b7b5] to-[#a65b62]",
  },
  {
    name: "Peri Peri Fries",
    tag: "Spiced",
    description: "Crispy fries with a warm chilli kick.",
    icon: Flame,
    tone: "from-[#f0cfaa] to-[#cf8055]",
  },
  {
    name: "Exotic Veg Platter",
    tag: "For the table",
    description: "A generous pick for groups and catch-ups.",
    icon: Utensils,
    tone: "from-[#cfdcab] to-[#779557]",
  },
];

export function HomeMenuPreview() {
  return (
    <section className="mx-auto mt-16 w-[min(1180px,calc(100%-2rem))] md:mt-24">
      <ScrollReveal
        direction="left"
        className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
      >
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-[color:var(--leaf-green)] uppercase">
            Food &amp; drinks
          </p>
          <h2 className="mt-3 text-4xl tracking-[-0.03em] text-[color:var(--coffee-brown)] md:text-6xl">
            Delilah Favorites
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--coffee-brown)]/72 md:text-base">
            A few plates and sips people come back for.
          </p>
        </div>
        <Link
          href="/menu"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--leaf-green)]/18 bg-[color:var(--leaf-green)]/8 px-5 py-3 text-sm font-bold text-[color:var(--leaf-green)] transition hover:-translate-y-0.5 hover:bg-[color:var(--leaf-green)]/12"
        >
          Explore Full Menu <ArrowRight size={16} />
        </Link>
      </ScrollReveal>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-4 md:overflow-visible">
        {favorites.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal
              key={item.name}
              direction="up"
              delay={(index % 4) * 80}
              className="w-[78vw] max-w-[310px] shrink-0 snap-start md:w-auto"
            >
              <article className="group relative min-h-[250px] overflow-hidden rounded-[1.75rem] border border-[color:var(--coffee-brown)]/10 bg-[#fffaf1] p-5 shadow-[0_20px_55px_-42px_rgba(75,54,40,0.75)] transition duration-300 hover:-translate-y-1">
                <div
                  className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${item.tone} opacity-75`}
                />
                <div className="absolute top-6 right-5 font-serif text-5xl text-white/45">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative z-10 flex h-full flex-col">
                  <span className="grid size-11 place-items-center rounded-full border border-white/45 bg-white/50 text-[color:var(--coffee-brown)] backdrop-blur">
                    <Icon size={19} />
                  </span>
                  <div className="mt-auto pt-16">
                    <span className="inline-flex rounded-full bg-[color:var(--leaf-green)]/8 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[color:var(--leaf-green)] uppercase">
                      {item.tag}
                    </span>
                    <h3 className="mt-3 text-xl leading-tight text-[color:var(--coffee-brown)]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-[color:var(--coffee-brown)]/68">
                      {item.description}
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
