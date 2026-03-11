import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "lg";
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative bg-cta text-cta-foreground font-bold rounded-xl shadow-cta transition-all duration-300 hover:bg-cta-hover hover:scale-105 hover:shadow-[0_12px_40px_-5px_hsl(25_95%_53%/0.6)] active:scale-95 animate-pulse-cta uppercase tracking-wider",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-t before:from-transparent before:to-white/20 before:pointer-events-none",
          size === "lg" ? "px-10 py-5 text-base md:text-lg" : "px-8 py-4 text-sm md:text-base",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
CTAButton.displayName = "CTAButton";

export default CTAButton;
