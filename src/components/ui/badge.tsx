import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "accent" | "outline" | "dark" | "brand" | "muted";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  accent: "bg-accent-500/15 text-accent-600 border border-accent-500/30",
  outline: "bg-white text-ink-600 border border-ink-200",
  dark: "bg-white/10 text-white border border-white/15",
  brand: "bg-brand-50 text-brand border border-brand-100",
  muted: "bg-ink-100 text-ink-500 border border-ink-200",
};

export function Badge({ className, variant = "outline", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
