import { ArrowRight, Camera, Leaf, MoonStar, Sparkles } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const moments = [
  {
    title: "Golden hour",
    line: "Warm light across leafy outdoor corners.",
    icon: Sparkles,
    tone: "bg-[linear-gradient(145deg,#e9c27b,#a76f43)]",
  },
  {
    title: "Leafy tables",
    line: "Green details around easy, relaxed seating.",
    icon: Leaf,
    tone: "bg-[linear-gradient(145deg,#9caf79,#31563b)]",
  },
  {
    title: "Evening glow",
    line: "Soft lighting made for plans that run late.",
    icon: MoonStar,
    tone: "bg-[linear-gradient(145deg,#5d4537,#1d3025)]",
  },
] as const;

export function HomeGalleryPreview() {
  return (
    <section className="mx-auto mt-16 w-[min(1180px,calc(100%-2rem))] md:mt-24">
      <ScrollReveal
        direction="left"
        className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
      >
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-[color:var(--leaf-green)] uppercase">
            Cafe moments
          </p>
          <h2 className="mt-3 text-4xl tracking-[-0.03em] text-[color:var(--coffee-brown)] md:text-6xl">
            Corners worth capturing.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--coffee-brown)]/72 md:text-base">
            From plant-filled walls to warm evening lights, Delilah&apos;s Cafe is made for
            relaxed moments and pretty pictures.
          </p>
        </div>
        <Link
          href="/gallery"
          className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[color:var(--leaf-green)]"
        >
          View Gallery <ArrowRight size={16} />
        </Link>
      </ScrollReveal>

      <div className="mt-8 grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
        <ScrollReveal direction="up" className="min-h-[27rem] md:min-h-[35rem]">
          <div className="relative h-full min-h-[27rem] overflow-hidden rounded-[2rem] bg-[color:var(--deep-green)] md:min-h-[35rem]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Delilah's Cafe exterior and greenery"
            >
              <source
                src="/assets/cafe-beings/home/delilah-phone.mp4"
                type="video/mp4"
                media="(max-width: 767px)"
              />
              <source src="/assets/cafe-beings/home/delilah.mp4" type="video/mp4" />
              Your browser does not support background video.
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(10,21,14,0.78)_100%)]" />
            <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-white/20 bg-[color:var(--deep-green)]/48 p-4 text-[color:var(--warm-cream)] backdrop-blur-md md:inset-x-7 md:bottom-7 md:p-5">
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-white/65 uppercase">
                <Camera size={14} /> A glimpse of Delilah&apos;s
              </p>
              <p className="mt-2 font-serif text-2xl">Plants outside. Warm light within.</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 min-[480px]:grid-cols-3 md:grid-cols-1">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            return (
              <ScrollReveal
                key={moment.title}
                direction="up"
                delay={index * 90}
              >
                <article
                  className={`relative min-h-[190px] overflow-hidden rounded-[1.75rem] border border-white/35 p-5 text-[color:var(--warm-cream)] ${moment.tone}`}
                >
                  <div className="absolute -right-8 -bottom-12 size-36 rounded-full border border-white/18 bg-white/8" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <Icon size={18} />
                      <span className="font-serif text-2xl text-white/40">0{index + 1}</span>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-xl">{moment.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-white/70">{moment.line}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ScrollReveal direction="up" delay={220}>
        <p className="mt-4 text-xs text-[color:var(--coffee-brown)]/55">
          More Delilah-specific interior and food photography can be added when the official
          gallery assets are supplied.
        </p>
      </ScrollReveal>
    </section>
  );
}
