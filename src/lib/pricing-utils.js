const buildTierNames = ({ entryTierName, midTierName, advancedTierName }) => ({
  entry: entryTierName,
  mid: midTierName,
  advanced: advancedTierName,
});

const buildTierDescriptions = ({
  entryTierDescription,
  midTierDescription,
  advancedTierDescription,
}) => ({
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
}) => ({
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

const getCurrentPrice = ({ tierPrices, tierName, isAnnual }) =>
  tierPrices[tierName][isAnnual ? "annual" : "monthly"];

export {
  buildTierNames,
  buildTierDescriptions,
  buildTierPrices,
  getCurrentPrice,
};
