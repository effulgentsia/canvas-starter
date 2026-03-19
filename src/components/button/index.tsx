import { cva } from "class-variance-authority";
import { cn } from "drupal-canvas";
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

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  label: string;
  href: string;
  className?: string;
}

const Button = ({
  label,
  href,
  variant,
  width,
  size,
  className,
}: ButtonProps) => {
  return (
    <a
      className={cn(buttonVariants({ variant, width, size }), className)}
      href={href}
    >
      {label}
    </a>
  );
};

export default Button;
