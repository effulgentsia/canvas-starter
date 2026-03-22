import { cva } from "class-variance-authority";
import { cn } from "drupal-canvas";
import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-block text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red",
  {
    variants: {
      variant: {
        mauve: "bg-mauve text-inverted-text hover:bg-mauve/75",
        teal: "bg-teal text-inverted-text shadow-sm hover:bg-teal/90",
        surface: "bg-surface-0/75 text-text hover:text-text/75",
      },
      width: {
        auto: "",
        full: "w-full text-center",
      },
      size: {
        md: "rounded-md px-5 py-2.5",
        lg: "rounded-sm px-12 py-3",
      },
    },
    defaultVariants: {
      variant: "mauve",
      width: "auto",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    Omit<ComponentPropsWithoutRef<"a">, "children" | "href">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  label: string;
  link?: string;
}

function Button({
  className,
  href,
  label,
  link,
  size,
  variant,
  width,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href ?? link}
      className={cn(buttonVariants({ size, variant, width }), className)}
      {...props}
    >
      {label}
    </a>
  );
}

export { Button };
export default Button;
