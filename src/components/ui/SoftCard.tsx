import { cn } from "@/lib/utils";

export function SoftCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <article
      className={cn(
        "paper-grain relative rounded-3xl border border-[color:var(--coffee-brown)]/15 p-5 shadow-[0_12px_35px_-25px_rgba(34,25,20,0.7)] warm-card",
        className
      )}
    >
      {children}
    </article>
  );
}

