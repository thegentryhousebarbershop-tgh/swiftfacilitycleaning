import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("bg-background-secondary", className)}>
      <div
        className={cn(
          "container-default py-14 md:py-20",
          align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
        )}
      >
        {eyebrow && (
          <span className="inline-block text-sm font-semibold uppercase tracking-wide text-accent-blue mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="text-[2.25rem] leading-[1.15] md:text-5xl md:leading-[1.1] font-bold text-heading">
          {title}
        </h1>
        {subtitle && (
          <p className={cn("mt-5 text-lg text-body leading-relaxed", align === "center" && "mx-auto")}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
