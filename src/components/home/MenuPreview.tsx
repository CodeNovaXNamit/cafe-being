import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SoftCard } from "@/components/ui/SoftCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { menuCategories } from "@/data/menu";

export function MenuPreview() {
  return (
    <section className="mx-auto mt-16 w-[min(1120px,calc(100%-2rem))]">
      <SectionHeader title="Signature comfort menu" />
      <div className="mt-8 flex gap-4 overflow-x-auto pb-2 md:grid md:overflow-visible md:pb-0 md:grid-cols-3">
        {menuCategories.slice(0, 6).map((category) => (
          <SoftCard key={category.name} className="w-[78vw] shrink-0 md:w-auto md:shrink">
            <h3 className="text-xl text-[color:var(--coffee-brown)]">{category.name}</h3>
            <p className="mt-2 text-sm text-[color:var(--coffee-brown)]/80">{category.description}</p>
          </SoftCard>
        ))}
      </div>
      <Link
        href="/menu"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--leaf-green)]"
      >
        Explore Full Menu <ArrowRight size={15} />
      </Link>
    </section>
  );
}
