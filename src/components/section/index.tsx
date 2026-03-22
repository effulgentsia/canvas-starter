import { cva } from "class-variance-authority";
import { cn } from "drupal-canvas";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

const sectionVariants = cva("", {
  variants: {
    colorScheme: {
      light: "",
      dark: "dark",
    },
    backgroundColor: {
      base: "bg-base",
      mantle: "bg-mantle",
      crust: "bg-crust",
    },
  },
  defaultVariants: {
    colorScheme: "light",
  },
});

type SectionBackgroundColor = NonNullable<
  VariantProps<typeof sectionVariants>["backgroundColor"]
>;

export interface SectionProps extends Omit<
  ComponentPropsWithoutRef<"section">,
  "children" | "content"
> {
  backgroundColor?: SectionBackgroundColor;
  content?: ReactNode;
  darkVariant?: boolean;
}

function Section({
  backgroundColor,
  className,
  content,
  darkVariant,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants({
          backgroundColor,
          colorScheme: darkVariant ? "dark" : "light",
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-screen-xl min-w-sm flex-col items-center gap-6 p-12 px-4 md:p-16 md:px-12 lg:gap-8 lg:px-16">
        {content}
      </div>
    </section>
  );
}

export { Section };
export default Section;
