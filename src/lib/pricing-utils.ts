const TIER_NAMES = ["entry", "mid", "advanced"] as const;

type TierName = (typeof TIER_NAMES)[number];

interface TierNamesInput {
  advancedTierName: string;
  entryTierName: string;
  midTierName: string;
}

interface TierDescriptionsInput {
  advancedTierDescription: string;
  entryTierDescription: string;
  midTierDescription: string;
}

interface TierPricesInput {
  advancedTierPriceAnnual: number;
  advancedTierPriceMonthly: number;
  entryTierPriceAnnual: number;
  entryTierPriceMonthly: number;
  midTierPriceAnnual: number;
  midTierPriceMonthly: number;
}

type TierValueMap<T> = Record<TierName, T>;

interface TierPrice {
  annual: number;
  monthly: number;
}

type TierPrices = TierValueMap<TierPrice>;

const buildTierNames = ({
  entryTierName,
  midTierName,
  advancedTierName,
}: TierNamesInput): TierValueMap<string> => ({
  entry: entryTierName,
  mid: midTierName,
  advanced: advancedTierName,
});

const buildTierDescriptions = ({
  entryTierDescription,
  midTierDescription,
  advancedTierDescription,
}: TierDescriptionsInput): TierValueMap<string> => ({
  entry: entryTierDescription,
  mid: midTierDescription,
  advanced: advancedTierDescription,
});

const buildTierPrices = ({
  entryTierPriceMonthly,
  entryTierPriceAnnual,
  midTierPriceMonthly,
  midTierPriceAnnual,
  advancedTierPriceMonthly,
  advancedTierPriceAnnual,
}: TierPricesInput): TierPrices => ({
  entry: {
    monthly: entryTierPriceMonthly,
    annual: entryTierPriceAnnual,
  },
  mid: {
    monthly: midTierPriceMonthly,
    annual: midTierPriceAnnual,
  },
  advanced: {
    monthly: advancedTierPriceMonthly,
    annual: advancedTierPriceAnnual,
  },
});

const getCurrentPrice = ({
  tierPrices,
  tierName,
  isAnnual,
}: {
  isAnnual: boolean;
  tierName: TierName;
  tierPrices: TierPrices;
}) => tierPrices[tierName][isAnnual ? "annual" : "monthly"];

export {
  TIER_NAMES,
  buildTierNames,
  buildTierDescriptions,
  buildTierPrices,
  getCurrentPrice,
};

export type { TierName, TierPrices, TierValueMap };
