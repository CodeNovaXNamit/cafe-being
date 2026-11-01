import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealDirection = "left" | "right" | "up" | "none";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: ScrollRevealDirection;
  delay?: number;
  className?: string;
};

export function ScrollReveal({
  children,
  className,
}: ScrollRevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
