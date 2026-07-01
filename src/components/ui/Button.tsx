import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-base",
};

const variantClasses = {
  secondary:
    "bg-brand-yellow text-heading shadow-md hover:bg-[#f0c12e] hover:-translate-y-0.5 hover:shadow-lg",
  primary:
    "bg-accent-blue text-white hover:bg-[#3a7bc8] hover:-translate-y-0.5 hover:shadow-lg",
  ghost: "text-accent-blue hover:underline bg-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 min-w-11 min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
