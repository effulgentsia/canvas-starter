import { cva } from "class-variance-authority";
import { cn, FormattedText } from "drupal-canvas";
import type { CSSProperties, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

const cardVariants = cva("flex flex-col gap-3 rounded-lg bg-surface-0 p-6");

const cardIconVariants = cva("size-8", {
  variants: {
    iconColor: {
      text: "bg-text",
      rosewater: "bg-rosewater",
      flamingo: "bg-flamingo",
      pink: "bg-pink",
      mauve: "bg-mauve",
      red: "bg-red",
      maroon: "bg-maroon",
      peach: "bg-peach",
      yellow: "bg-yellow",
      green: "bg-green",
      teal: "bg-teal",
      sky: "bg-sky",
      sapphire: "bg-sapphire",
      blue: "bg-blue",
      lavender: "bg-lavender",
    },
  },
  defaultVariants: {
    iconColor: "teal",
  },
});

type CardIconColor = NonNullable<
  VariantProps<typeof cardIconVariants>["iconColor"]
>;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  description?: string;
  iconColor: CardIconColor;
  iconNameFromLucide?: string;
  title?: string;
}

function Card({
  className,
  description,
  iconColor,
  iconNameFromLucide,
  title,
  ...props
}: CardProps) {
  const iconMaskStyle: CSSProperties | undefined = iconNameFromLucide
    ? {
        maskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconNameFromLucide}.svg)`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskImage: `url(https://esm.sh/lucide-static@0.544.0/icons/${iconNameFromLucide}.svg)`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
      }
    : undefined;

  return (
    <div className={cn(cardVariants(), className)} {...props}>
      {iconNameFromLucide && (
        <div
          className={cn(cardIconVariants({ iconColor }))}
          style={iconMaskStyle}
        />
      )}
      {title && <h3 className="text-lg font-semibold text-text">{title}</h3>}
      {description && (
        <FormattedText as="div" className="text-subtext-0">
          {description}
        </FormattedText>
      )}
    </div>
  );
}

export { Card };
export default Card;
