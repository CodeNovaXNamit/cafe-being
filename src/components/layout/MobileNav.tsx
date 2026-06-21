"use client";

import { Home, Images, MapPin, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu", label: "Menu", icon: Menu },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/find-us", label: "Find Us", icon: MapPin },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed inset-x-3 top-3 z-50 flex items-center justify-between rounded-full border border-[color:var(--coffee-brown)]/15 bg-[color:var(--glass-white)] px-3 py-2 shadow-md backdrop-blur md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="grid size-[30px] place-items-center rounded-full bg-[color:var(--leaf-green)] font-serif text-sm text-[color:var(--warm-cream)]"
          >
            D
          </span>
          <span className="text-sm font-semibold text-[color:var(--coffee-brown)]">{siteConfig.name}</span>
        </Link>
        <a
          href={siteConfig.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[color:var(--coffee-brown)] px-3 py-1.5 text-xs font-semibold text-[color:var(--warm-cream)]"
        >
          Directions
        </a>
      </header>

      <nav className="fixed inset-x-3 bottom-3 z-50 rounded-full border border-[color:var(--coffee-brown)]/15 bg-[color:var(--glass-white)] p-2 shadow-md backdrop-blur md:hidden">
        <ul className="grid grid-cols-4 gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center rounded-full py-2 text-[11px]",
                    pathname === item.href
                      ? "bg-[color:var(--leaf-green)]/15 text-[color:var(--leaf-green)]"
                      : "text-[color:var(--coffee-brown)]"
                  )}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
