import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[color:var(--coffee-brown)] text-[color:var(--warm-cream)] hover:translate-y-[-2px]"
      : "border border-[color:var(--coffee-brown)]/25 bg-white/50 text-[color:var(--coffee-brown)] hover:bg-white/80";

  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--leaf-green)]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cn(base, styles, className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}

