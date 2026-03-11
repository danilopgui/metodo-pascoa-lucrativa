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
          "bg-cta text-cta-foreground font-bold rounded-lg shadow-cta transition-all duration-300 hover:bg-cta-hover hover:scale-105 active:scale-95 animate-pulse-cta uppercase tracking-wider",
          size === "lg" ? "px-10 py-5 text-lg md:text-xl" : "px-8 py-4 text-base md:text-lg",
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
