import { hasEmptySlotPlaceholder } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';

const headerVariants = cva('', {
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

type HeaderBackgroundColor = NonNullable<
  VariantProps<typeof headerVariants>['backgroundColor']
>;

export interface HeaderProps extends Omit<
  ComponentPropsWithoutRef<'header'>,
  'children'
> {
  backgroundColor: HeaderBackgroundColor;
  branding?: ReactNode;
  darkVariant?: boolean;
  navigation?: ReactNode;
}

function Header({
  backgroundColor,
  branding,
  className,
  darkVariant,
  navigation,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        headerVariants({
          backgroundColor,
          colorScheme: darkVariant ? 'dark' : 'light',
        }),
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex h-24 max-w-7xl min-w-sm items-center justify-between gap-x-12 px-4 sm:px-12 md:h-32 lg:gap-x-16 lg:px-16">
        <div
          className={cn(
            'h-12 shrink-0 items-center justify-start md:h-16',
            hasEmptySlotPlaceholder(branding) && 'min-w-32',
          )}
        >
          {branding}
        </div>
        <div className="flex h-12 grow items-center justify-end md:h-16">
          {navigation}
        </div>
      </div>
    </header>
  );
}

export { Header };
export default Header;
