import { Armchair, Coffee, Leaf, MoonStar } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "./ScrollReveal";
import { LazyScrollVideoCard } from "./LazyScrollVideoCard";

const storyNotes = [
  { icon: Leaf, label: "Plant-filled corners" },
  { icon: MoonStar, label: "Warm evening light" },
  { icon: Armchair, label: "Indoor & outdoor seating" },
] as const;

export function HomeStorySection() {
  return (
    <section className="mx-auto mt-14 w-[min(1180px,calc(100%-2rem))] md:mt-24">
      <div className="grid items-stretch gap-6 md:grid-cols-[0.92fr_1.08fr] md:gap-10">
        <ScrollReveal direction="left" className="flex flex-col justify-center py-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--leaf-green)]/18 bg-[color:var(--leaf-green)]/8 px-3 py-1.5 text-xs font-semibold text-[color:var(--leaf-green)]">
            <Coffee size={14} /> Welcome to Delilah&apos;s
          </span>
          <h2 className="mt-5 max-w-xl text-4xl leading-[1.05] tracking-[-0.03em] text-[color:var(--coffee-brown)] md:text-6xl">
            A cozy little escape in Anand Vihar.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--coffee-brown)]/78 md:text-base">
            {siteConfig.name} brings together warm lighting, leafy corners, relaxed seating,
            Continental comfort food, pizzas, fries, coffee, mocktails, and desserts — made
            for easy conversations and beautiful evenings.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {storyNotes.map((note, index) => {
              const Icon = note.icon;
              return (
                <ScrollReveal
                  key={note.label}
                  direction="up"
                  delay={120 + index * 80}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--coffee-brown)]/12 bg-white/55 px-3.5 py-2 text-xs font-semibold text-[color:var(--coffee-brown)]">
                    <Icon size={14} className="text-[color:var(--leaf-green)]" /> {note.label}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="min-h-[36rem] md:min-h-[34rem]">
          <div className="relative h-full min-h-[36rem] overflow-hidden rounded-[2.2rem] border border-white/40 bg-[linear-gradient(145deg,#1b4932_0%,#2f5d3a_47%,#a16b43_100%)] p-6 text-[color:var(--warm-cream)] shadow-[0_30px_70px_-50px_rgba(22,59,42,0.95)] md:min-h-[34rem] md:p-8 lg:p-9">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-[#f3c878]/28 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 size-80 rounded-full bg-[#0d2d20]/55 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="grid flex-1 items-center gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(13rem,1.15fr)] md:gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-8">
                <div className="relative z-10">
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/65 uppercase">
                    The Delilah mood
                  </p>
                  <p className="mt-4 max-w-sm font-serif text-4xl leading-tight md:text-[2.65rem] lg:text-5xl">
                    Warm lights.
                    <br />
                    Leafy tables.
                    <br />
                    No rush.
                  </p>
                  <div className="mt-6 h-px w-16 bg-[#f3c878]/55" />
                  <p className="mt-4 max-w-[15rem] text-xs leading-5 text-white/60">
                    A moving glimpse of cozy corners, warm evenings, and the easy pace inside
                    Delilah&apos;s.
                  </p>
                </div>

                <LazyScrollVideoCard />
              </div>

              <div className="mt-9 grid gap-3 min-[420px]:grid-cols-3 md:mt-6">
                {["Good food", "Pretty corners", "Easy evenings"].map((label, index) => (
                  <div
                    key={label}
                    className="rounded-[1.25rem] border border-white/16 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <p className="text-[10px] tracking-[0.16em] text-white/50 uppercase">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
