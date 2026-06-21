"use client";

import { Menu, MapPin, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/find-us", label: "Find Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[70] md:border-b md:border-white/25 md:bg-[color:var(--leaf-green)]/70 md:shadow-[0_8px_28px_-18px_rgba(20,40,25,0.85)] md:backdrop-blur-[18px]">
        <div className="mx-auto hidden h-[72px] w-full max-w-[1240px] items-center justify-between px-6 md:flex">
          <Link href="/" className="group inline-flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            {/* TODO: replace this temporary wordmark mark with the official Delilah logo. */}
            <span
              aria-hidden="true"
              className="grid size-[42px] place-items-center rounded-full border border-white/30 bg-white/15 font-serif text-xl text-[color:var(--warm-cream)] transition-transform duration-300 group-hover:translate-y-[-1px]"
            >
              D
            </span>
            <span className="text-base font-semibold tracking-wide text-[color:var(--warm-cream)] md:text-lg">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:translate-y-[-1px]",
                  pathname === item.href
                    ? "bg-white/20 text-[color:var(--warm-cream)]"
                    : "text-[color:var(--warm-cream)]/90 hover:bg-white/15 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[color:var(--coffee-brown)] px-5 py-2.5 text-sm font-semibold text-[color:var(--warm-cream)] shadow-[0_10px_25px_-18px_rgba(34,25,20,0.95)] transition duration-300 hover:translate-y-[-1px] hover:shadow-[0_14px_30px_-18px_rgba(34,25,20,1)] md:inline-flex"
          >
            <MapPin size={15} /> Get Directions
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed top-[14px] right-[14px] left-[14px] z-[72] flex h-[58px] items-center justify-between rounded-full border border-white/35 bg-[color:var(--leaf-green)]/70 px-3.5 shadow-[0_20px_30px_-25px_rgba(20,40,25,1)] backdrop-blur-xl md:hidden"
        >
          <Link href="/" className="group inline-flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <span
              aria-hidden="true"
              className="grid size-[33px] place-items-center rounded-full border border-white/30 bg-white/15 font-serif text-base text-[color:var(--warm-cream)] transition-transform duration-300 group-hover:translate-y-[-1px]"
            >
              D
            </span>
            <span className="text-[15px] font-semibold tracking-wide text-[color:var(--warm-cream)]">
              {siteConfig.name}
            </span>
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/35 bg-white/15 text-[color:var(--warm-cream)] shadow-sm transition duration-300 hover:translate-y-[-1px]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      <div
        className={cn(
          "fixed top-[78px] right-[14px] left-[14px] z-[71] rounded-3xl border border-white/30 bg-[color:var(--leaf-green)]/75 p-3 shadow-[0_20px_34px_-24px_rgba(20,40,25,1)] backdrop-blur-xl transition-all duration-300 md:hidden",
          menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-base font-medium transition duration-300 hover:translate-y-[-1px]",
                pathname === item.href
                  ? "bg-white/20 text-white"
                  : "text-[color:var(--warm-cream)]/90 hover:bg-white/15 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--warm-cream)] px-5 py-3 text-sm font-semibold text-[color:var(--leaf-green)] shadow-[0_12px_25px_-18px_rgba(20,40,25,0.95)] transition duration-300 hover:translate-y-[-1px]"
          >
            <MapPin size={15} /> Get Directions
          </a>
        </nav>
      </div>
    </>
  );
}
