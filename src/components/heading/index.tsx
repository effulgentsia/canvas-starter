import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef } from 'react';

const headingVariants = cva(
  'mx-auto max-w-5xl text-center text-2xl font-extrabold text-balance text-text md:text-3xl',
);

export interface HeadingProps extends Omit<
  ComponentPropsWithoutRef<'h2'>,
  'children'
> {
  text: string;
}

function Heading({ className, text, ...props }: HeadingProps) {
  return (
    <h2 className={cn(headingVariants(), className)} {...props}>
      {text}
    </h2>
  );
}

export { Heading };
export default Heading;
