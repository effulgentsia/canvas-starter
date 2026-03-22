import { cva } from "class-variance-authority";
import { cn, FormattedText } from "drupal-canvas";
import type { HTMLAttributes } from "react";

const paragraphVariants = cva(
  "mx-auto max-w-2xl text-center leading-relaxed text-balance text-text",
);

export interface ParagraphProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  text: string;
}

function Paragraph({ className, text }: ParagraphProps) {
  return (
    <FormattedText as="div" className={cn(paragraphVariants(), className)}>
      {text}
    </FormattedText>
  );
}

export { Paragraph };
export default Paragraph;
