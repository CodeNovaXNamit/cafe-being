type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-3xl leading-tight text-[color:var(--coffee-brown)] md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--coffee-brown)]/85 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

