import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "default" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ring-offset-background";
    
    const variants = {
      primary: "bg-zinc-950 text-zinc-50 hover:bg-zinc-800 shadow-md rounded-xl hover:shadow-lg hover:-translate-y-0.5",
      secondary: "bg-zinc-100 text-zinc-950 hover:bg-zinc-200 rounded-xl",
      outline: "border border-zinc-200 bg-transparent hover:bg-zinc-50 text-zinc-950 rounded-xl",
      ghost: "hover:bg-zinc-100 text-zinc-950 rounded-xl",
      glass: "glass text-zinc-950 hover:bg-white/80 rounded-xl shadow-soft hover:-translate-y-0.5",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      default: "h-12 px-6 py-2 text-sm",
      lg: "h-14 px-8 text-base",
      icon: "h-12 w-12",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
