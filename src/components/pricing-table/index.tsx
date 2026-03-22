import { useState } from 'react';
import {
  buildTierDescriptions,
  buildTierNames,
  buildTierPrices,
  getCurrentPrice,
  TIER_NAMES,
} from '@/lib/pricing-utils';
import { cva } from 'class-variance-authority';
import { cn } from 'drupal-canvas';
import type { ComponentPropsWithoutRef } from 'react';
import type { TierName } from '@/lib/pricing-utils';

const pricingTableVariants = cva('max-w-2xl');

export interface PricingTableProps extends Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
> {
  advancedTierDescription: string;
  advancedTierName: string;
  advancedTierPriceAnnual: number;
  advancedTierPriceMonthly: number;
  annualBadgeText: string;
  annualSelectedByDefault?: boolean;
  buttonLabel: string;
  buttonLink: string;
  defaultTier: TierName;
  entryTierDescription: string;
  entryTierName: string;
  entryTierPriceAnnual: number;
  entryTierPriceMonthly: number;
  midTierDescription: string;
  midTierName: string;
  midTierPriceAnnual: number;
  midTierPriceMonthly: number;
}

function PricingTable({
  entryTierName,
  entryTierDescription,
  entryTierPriceMonthly,
  entryTierPriceAnnual,
  midTierName,
  midTierDescription,
  midTierPriceMonthly,
  midTierPriceAnnual,
  advancedTierName,
  advancedTierDescription,
  advancedTierPriceMonthly,
  advancedTierPriceAnnual,
  defaultTier,
  annualSelectedByDefault,
  annualBadgeText,
  buttonLabel,
  buttonLink,
  className,
  ...props
}: PricingTableProps) {
  const [isAnnual, setIsAnnual] = useState(annualSelectedByDefault ?? false);
  const [tier, setTier] = useState<TierName>(defaultTier);

  const tierNames = buildTierNames({
    entryTierName,
    midTierName,
    advancedTierName,
  });
  const tierDescriptions = buildTierDescriptions({
    entryTierDescription,
    midTierDescription,
    advancedTierDescription,
  });
  const tierPrices = buildTierPrices({
    entryTierPriceMonthly,
    entryTierPriceAnnual,
    midTierPriceMonthly,
    midTierPriceAnnual,
    advancedTierPriceMonthly,
    advancedTierPriceAnnual,
  });

  return (
    <div className={cn(pricingTableVariants(), className)} {...props}>
      {/* Billing toggle */}
      <div className="mb-8 flex items-center justify-center">
        <div className="w-24 text-right">
          <span
            className={cn(
              'font-medium text-subtext-0/75',
              !isAnnual && 'text-mauve',
            )}
          >
            Monthly
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative mx-3 h-7 w-14 cursor-pointer rounded-full border-0 bg-surface-1 p-0.5"
        >
          <div
            className={cn(
              'absolute top-0.5 h-6 w-6 rounded-full border-2 border-flamingo bg-inverted-text transition-all duration-200',
              isAnnual ? 'left-7' : 'left-0.5',
            )}
          />
        </button>
        <div className="flex w-36 items-center">
          <span
            className={cn(
              'font-medium text-subtext-0/75',
              isAnnual && 'text-mauve',
            )}
          >
            Annual
          </span>
          <span
            className={cn(
              'ml-2 rounded-full bg-green px-2 py-1 text-xs leading-none font-medium whitespace-nowrap text-inverted-text transition-opacity duration-200',
              isAnnual ? 'opacity-100' : 'opacity-0',
            )}
          >
            {annualBadgeText}
          </span>
        </div>
      </div>

      {/* Pricing tiers */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        {TIER_NAMES.map((planName) => {
          const isSelected = tier === planName;
          const price = getCurrentPrice({
            tierPrices,
            tierName: planName,
            isAnnual,
          });

          return (
            <div
              key={planName}
              onClick={() => setTier(planName)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setTier(planName);
                }
              }}
              data-state={isSelected ? 'selected' : undefined}
              role="button"
              tabIndex={0}
              className={cn(
                'group flex-1 cursor-pointer rounded-lg p-5 transition-all duration-200',
                'bg-surface-1',
                'data-[state=selected]:outline-2 data-[state=selected]:outline-offset-3 data-[state=selected]:outline-mauve',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red',
              )}
            >
              <h3 className="mb-3 text-lg font-bold text-text">
                {tierNames[planName]}
              </h3>

              <div className="mb-4">
                <div className="mb-1 text-2xl font-bold text-text">
                  ${price.toLocaleString()}
                </div>
              </div>

              <div className="text-sm leading-relaxed text-text">
                {tierDescriptions[planName]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div>
        <a
          href={buttonLink}
          className="inline-block w-full rounded-sm bg-mauve px-12 py-3 text-center text-sm font-medium text-inverted-text transition hover:bg-mauve/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
        >
          {buttonLabel.replace('{tier}', tierNames[tier])}
        </a>
      </div>
    </div>
  );
}

export { PricingTable };
export default PricingTable;
