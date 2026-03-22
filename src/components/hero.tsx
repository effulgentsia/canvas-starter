import Button from '@/components/button';
import { cva } from 'class-variance-authority';
import { cn, FormattedText } from 'drupal-canvas';
import { motion } from 'motion/react';
import type { ComponentPropsWithoutRef } from 'react';
import type { CanvasImage } from '@/lib/types';
import type { VariantProps } from 'class-variance-authority';

const heroVariants = cva('', {
  variants: {
    colorScheme: {
      light: '',
      dark: 'dark',
    },
    backgroundColor: {
      base: 'bg-base',
      mantle: 'bg-mantle',
      crust: 'bg-crust',
    },
  },
  defaultVariants: {
    colorScheme: 'light',
    backgroundColor: 'base',
  },
});

type HeroBackgroundColor = NonNullable<
  VariantProps<typeof heroVariants>['backgroundColor']
>;

export interface HeroProps extends Omit<
  ComponentPropsWithoutRef<'section'>,
  'children'
> {
  backgroundColor: HeroBackgroundColor;
  buttonLabel: string;
  buttonLink: string;
  darkVariant?: boolean;
  description: string;
  image?: CanvasImage;
  title: string;
}

function Hero({
  backgroundColor,
  buttonLabel,
  buttonLink,
  className,
  darkVariant,
  description,
  image,
  title,
  ...props
}: HeroProps) {
  return (
    <section
      className={cn(
        heroVariants({
          backgroundColor,
          colorScheme: darkVariant ? 'dark' : 'light',
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-screen-xl sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="flex max-w-xl flex-col gap-8">
            <h2 className="tracking-relaxed bg-gradient-to-r from-peach to-mauve bg-clip-text text-2xl font-extrabold text-balance text-transparent md:text-4xl">
              {title}
            </h2>
            <FormattedText
              as="div"
              className="leading-relaxed text-balance text-text"
            >
              {description}
            </FormattedText>
            <div>
              <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                <Button label={buttonLabel} link={buttonLink} size="lg" />
              </motion.div>
            </div>
          </div>
        </div>
        {image && (
          <div className="h-full w-full overflow-hidden rounded-3xl py-6 md:py-8 lg:py-14">
            <img
              alt={image.alt}
              src={image.src}
              width={image.width}
              height={image.height}
              className="h-full w-full object-cover object-center shadow-lg sm:rounded-l-4xl xl:rounded-r-xl dark:border dark:border-surface-0 dark:shadow-none"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export { Hero };
export default Hero;
