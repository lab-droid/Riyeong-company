import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "dark" | "accent";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-700 shadow-lg shadow-brand-900/20 border border-transparent",
  outline: "bg-white text-ink-900 border border-ink-200 hover:border-brand-300 hover:text-brand",
  ghost: "bg-transparent text-white border border-white/25 hover:bg-white/10",
  dark: "bg-ink-900 text-white hover:bg-ink-800 border border-transparent",
  accent: "bg-accent text-white hover:bg-accent-600 shadow-lg shadow-accent-950/20 border border-transparent",
};

const sizeClasses: Record<Size, string> = {
  md: "h-12 px-5 text-base",
  lg: "h-14 px-8 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
