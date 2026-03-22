import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef } from 'react';

export interface HeadingProps extends Omit<
  ComponentPropsWithoutRef<'h2'>,
  'children'
> {
  text: string;
}

function Heading({ className, text, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        'mx-auto max-w-5xl text-center text-2xl font-extrabold text-balance text-text md:text-3xl',
        className,
      )}
      {...props}
    >
      {text}
    </h2>
  );
}

export { Heading };
export default Heading;
