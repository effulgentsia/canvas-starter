import { hasEmptySlotPlaceholder } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { cn, FormattedText } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

const footerVariants = cva('', {
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

type FooterBackgroundColor = NonNullable<
  VariantProps<typeof footerVariants>['backgroundColor']
>;

export interface FooterProps extends Omit<
  ComponentPropsWithoutRef<'footer'>,
  'children'
> {
  backgroundColor: FooterBackgroundColor;
  branding?: ReactNode;
  copyrightNotice: string;
  darkVariant?: boolean;
}

function Footer({
  backgroundColor,
  branding,
  className,
  copyrightNotice,
  darkVariant,
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn(
        footerVariants({
          backgroundColor,
          colorScheme: darkVariant ? 'dark' : 'light',
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-3xl min-w-sm flex-col items-center gap-12 p-12 md:p-16">
        <div
          className={cn(
            'h-12 shrink-0 items-center justify-start',
            hasEmptySlotPlaceholder(branding) && 'min-w-32',
          )}
        >
          {branding}
        </div>
        <FormattedText as="div" className="text-sm text-text">
          {copyrightNotice}
        </FormattedText>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;
