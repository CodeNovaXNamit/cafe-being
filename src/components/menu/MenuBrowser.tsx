"use client";

import { useMemo, useState } from "react";
import { MenuCard } from "./MenuCard";
import { MenuCategoryTabs } from "./MenuCategoryTabs";
import { menuCategories } from "@/data/menu";

export function MenuBrowser() {
  const [active, setActive] = useState(menuCategories[0]?.name ?? "");
  const [query, setQuery] = useState("");
  const categories = menuCategories.map((category) => category.name);

  const activeCategory = menuCategories.find((category) => category.name === active) ?? menuCategories[0];
  const items = useMemo(
    () =>
      activeCategory.items.filter((item) =>
        `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())
      ),
    [activeCategory, query]
  );

  return (
    <>
      <div className="sticky top-20 z-10 mt-8 rounded-2xl border border-[color:var(--coffee-brown)]/20 bg-[color:var(--glass-white)] p-3 backdrop-blur">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <MenuCategoryTabs categories={categories} active={active} onChange={setActive} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search menu..."
            className="w-full rounded-full border border-[color:var(--coffee-brown)]/20 bg-white/70 px-4 py-2 text-sm outline-none md:w-64"
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl text-[color:var(--coffee-brown)]">{activeCategory.name}</h2>
        <p className="mt-2 text-sm text-[color:var(--coffee-brown)]/80">{activeCategory.description}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

