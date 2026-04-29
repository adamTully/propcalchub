/**
 * PropCalcHub Phase 1 state-level fee rules
 *
 * Purpose:
 * - Map ZIP codes to a state-level closing-cost preset.
 * - Provide state-level transfer tax estimates and default editable fee values.
 * - Keep calculator UI clean while centralizing fee logic.
 *
 * Important:
 * - These are state-level planning estimates, not final settlement figures.
 * - Local/county/city transfer taxes, title rules, recording fees, loan type, and contract terms can vary.
 * - Keep all fee fields editable in the UI.
 */

export type TransferTaxRule =
  | { type: 'none' }
  | { type: 'flat'; amount: number }
  | { type: 'percent'; rate: number }
  | { type: 'perThousand'; amountPerThousand: number }
  | { type: 'perHundred'; amountPerHundred: number }
  | { type: 'perFiveHundred'; amountPerFiveHundred: number };

export type ClosingCostPayer = 'seller' | 'buyer' | 'split' | 'negotiable';

export type StateFeeRule = {
  state: string;
  stateName: string;
  transferTax: TransferTaxRule;
  transferTaxPayerDefault: ClosingCostPayer;
  notes?: string;
  defaultSellerFees: {
    titleOrAttorney: number;
    recordingFees: number;
    otherLocalFees: number;
  };
  defaultBuyerFees: {
    lenderFees: number;
    titleFees: number;
    prepaidExpenses: number;
    recordingFees: number;
    inspectionAndAppraisal: number;
  };
};

export type ZipStateMatch = {
  state: string;
  stateName: string;
};

const sellerBase = {
  titleOrAttorney: 1800,
  recordingFees: 250,
  otherLocalFees: 350,
};

const buyerBase = {
  lenderFees: 2500,
  titleFees: 3400,
  prepaidExpenses: 4800,
  recordingFees: 275,
  inspectionAndAppraisal: 950,
};

export function calculateTransferTax(price: number, rule: TransferTaxRule): number {
  const safePrice = Math.max(Number(price) || 0, 0);

  switch (rule.type) {
    case 'none':
      return 0;
    case 'flat':
      return rule.amount;
    case 'percent':
      return safePrice * rule.rate;
    case 'perThousand':
      return Math.ceil(safePrice / 1000) * rule.amountPerThousand;
    case 'perHundred':
      return Math.ceil(safePrice / 100) * rule.amountPerHundred;
    case 'perFiveHundred':
      return Math.ceil(safePrice / 500) * rule.amountPerFiveHundred;
    default:
      return 0;
  }
}

/**
 * ZIP-to-state mapper using 3-digit ZIP prefix ranges.
 * Good enough for Phase 1. For Phase 2, replace with ZIP/county data.
 */
export function getStateFromZip(zipInput: string): ZipStateMatch | null {
  const zip = String(zipInput || '').replace(/\D/g, '').slice(0, 5);
  if (zip.length < 3) return null;

  const prefix = Number(zip.slice(0, 3));

  if (prefix >= 350 && prefix <= 369) return { state: 'AL', stateName: 'Alabama' };
  if (prefix >= 995 && prefix <= 999) return { state: 'AK', stateName: 'Alaska' };
  if (prefix >= 850 && prefix <= 865) return { state: 'AZ', stateName: 'Arizona' };
  if (prefix >= 716 && prefix <= 729) return { state: 'AR', stateName: 'Arkansas' };
  if (prefix >= 900 && prefix <= 966) return { state: 'CA', stateName: 'California' };
  if (prefix >= 800 && prefix <= 816) return { state: 'CO', stateName: 'Colorado' };
  if (prefix >= 60 && prefix <= 69) return { state: 'CT', stateName: 'Connecticut' };
  if (prefix >= 197 && prefix <= 199) return { state: 'DE', stateName: 'Delaware' };
  if (prefix >= 320 && prefix <= 349) return { state: 'FL', stateName: 'Florida' };
  if ((prefix >= 300 && prefix <= 319) || (prefix >= 398 && prefix <= 399)) return { state: 'GA', stateName: 'Georgia' };
  if (prefix >= 967 && prefix <= 968) return { state: 'HI', stateName: 'Hawaii' };
  if (prefix >= 832 && prefix <= 838) return { state: 'ID', stateName: 'Idaho' };
  if (prefix >= 600 && prefix <= 629) return { state: 'IL', stateName: 'Illinois' };
  if (prefix >= 460 && prefix <= 479) return { state: 'IN', stateName: 'Indiana' };
  if (prefix >= 500 && prefix <= 528) return { state: 'IA', stateName: 'Iowa' };
  if (prefix >= 660 && prefix <= 679) return { state: 'KS', stateName: 'Kansas' };
  if (prefix >= 400 && prefix <= 427) return { state: 'KY', stateName: 'Kentucky' };
  if (prefix >= 700 && prefix <= 715) return { state: 'LA', stateName: 'Louisiana' };
  if (prefix >= 39 && prefix <= 49) return { state: 'ME', stateName: 'Maine' };
  if (prefix >= 206 && prefix <= 219) return { state: 'MD', stateName: 'Maryland' };
  if (prefix >= 10 && prefix <= 27) return { state: 'MA', stateName: 'Massachusetts' };
  if (prefix >= 480 && prefix <= 499) return { state: 'MI', stateName: 'Michigan' };
  if (prefix >= 550 && prefix <= 567) return { state: 'MN', stateName: 'Minnesota' };
  if (prefix >= 386 && prefix <= 397) return { state: 'MS', stateName: 'Mississippi' };
  if (prefix >= 630 && prefix <= 658) return { state: 'MO', stateName: 'Missouri' };
  if (prefix >= 590 && prefix <= 599) return { state: 'MT', stateName: 'Montana' };
  if (prefix >= 680 && prefix <= 693) return { state: 'NE', stateName: 'Nebraska' };
  if (prefix >= 889 && prefix <= 898) return { state: 'NV', stateName: 'Nevada' };
  if (prefix >= 30 && prefix <= 38) return { state: 'NH', stateName: 'New Hampshire' };
  if (prefix >= 70 && prefix <= 89) return { state: 'NJ', stateName: 'New Jersey' };
  if (prefix >= 870 && prefix <= 884) return { state: 'NM', stateName: 'New Mexico' };
  if (prefix >= 100 && prefix <= 149) return { state: 'NY', stateName: 'New York' };
  if (prefix >= 270 && prefix <= 289) return { state: 'NC', stateName: 'North Carolina' };
  if (prefix >= 580 && prefix <= 588) return { state: 'ND', stateName: 'North Dakota' };
  if (prefix >= 430 && prefix <= 459) return { state: 'OH', stateName: 'Ohio' };
  if (prefix >= 730 && prefix <= 749) return { state: 'OK', stateName: 'Oklahoma' };
  if (prefix >= 970 && prefix <= 979) return { state: 'OR', stateName: 'Oregon' };
  if (prefix >= 150 && prefix <= 196) return { state: 'PA', stateName: 'Pennsylvania' };
  if (prefix >= 28 && prefix <= 29) return { state: 'RI', stateName: 'Rhode Island' };
  if (prefix >= 290 && prefix <= 299) return { state: 'SC', stateName: 'South Carolina' };
  if (prefix >= 570 && prefix <= 577) return { state: 'SD', stateName: 'South Dakota' };
  if (prefix >= 370 && prefix <= 385) return { state: 'TN', stateName: 'Tennessee' };
  if ((prefix >= 750 && prefix <= 799) || prefix === 885) return { state: 'TX', stateName: 'Texas' };
  if (prefix >= 840 && prefix <= 847) return { state: 'UT', stateName: 'Utah' };
  if (prefix >= 50 && prefix <= 59) return { state: 'VT', stateName: 'Vermont' };
  if ((prefix >= 201 && prefix <= 205) || (prefix >= 220 && prefix <= 246)) return { state: 'VA', stateName: 'Virginia' };
  if (prefix >= 980 && prefix <= 994) return { state: 'WA', stateName: 'Washington' };
  if (prefix >= 247 && prefix <= 268) return { state: 'WV', stateName: 'West Virginia' };
  if (prefix >= 530 && prefix <= 549) return { state: 'WI', stateName: 'Wisconsin' };
  if (prefix >= 820 && prefix <= 831) return { state: 'WY', stateName: 'Wyoming' };
  if (prefix === 200) return { state: 'DC', stateName: 'District of Columbia' };

  return null;
}

export const STATE_FEE_RULES: Record<string, StateFeeRule> = {
  AL: { state: 'AL', stateName: 'Alabama', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 0.5 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  AK: { state: 'AK', stateName: 'Alaska', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  AZ: { state: 'AZ', stateName: 'Arizona', transferTax: { type: 'flat', amount: 2 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  AR: { state: 'AR', stateName: 'Arkansas', transferTax: { type: 'perThousand', amountPerThousand: 3.3 }, transferTaxPayerDefault: 'split', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  CA: { state: 'CA', stateName: 'California', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 0.55 }, transferTaxPayerDefault: 'seller', notes: 'Local city/county transfer taxes may apply.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2200, otherLocalFees: 700 }, defaultBuyerFees: { ...buyerBase, titleFees: 3900, prepaidExpenses: 5600 } },
  CO: { state: 'CO', stateName: 'Colorado', transferTax: { type: 'perHundred', amountPerHundred: 0.01 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  CT: { state: 'CT', stateName: 'Connecticut', transferTax: { type: 'percent', rate: 0.01 }, transferTaxPayerDefault: 'seller', notes: 'Tiered/local conveyance taxes may apply.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2500 }, defaultBuyerFees: { ...buyerBase, titleFees: 3800 } },
  DE: { state: 'DE', stateName: 'Delaware', transferTax: { type: 'percent', rate: 0.04 }, transferTaxPayerDefault: 'split', defaultSellerFees: { ...sellerBase, otherLocalFees: 900 }, defaultBuyerFees: { ...buyerBase, titleFees: 3900 } },
  DC: { state: 'DC', stateName: 'District of Columbia', transferTax: { type: 'percent', rate: 0.011 }, transferTaxPayerDefault: 'seller', notes: 'Transfer/recordation rates can vary by price tier.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2600 }, defaultBuyerFees: { ...buyerBase, titleFees: 4200, prepaidExpenses: 6000 } },
  FL: { state: 'FL', stateName: 'Florida', transferTax: { type: 'percent', rate: 0.007 }, transferTaxPayerDefault: 'seller', notes: 'Miami-Dade and mortgage-related taxes may differ.', defaultSellerFees: { ...sellerBase, otherLocalFees: 700 }, defaultBuyerFees: { ...buyerBase, titleFees: 3800, prepaidExpenses: 5600 } },
  GA: { state: 'GA', stateName: 'Georgia', transferTax: { type: 'perThousand', amountPerThousand: 1 }, transferTaxPayerDefault: 'seller', defaultSellerFees: { titleOrAttorney: 1800, recordingFees: 250, otherLocalFees: 300 }, defaultBuyerFees: { lenderFees: 2400, titleFees: 3200, prepaidExpenses: 4600, recordingFees: 250, inspectionAndAppraisal: 900 } },
  HI: { state: 'HI', stateName: 'Hawaii', transferTax: { type: 'percent', rate: 0.001 }, transferTaxPayerDefault: 'seller', notes: 'Hawaii conveyance tax is tiered.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2400 }, defaultBuyerFees: { ...buyerBase, titleFees: 3900, prepaidExpenses: 5800 } },
  ID: { state: 'ID', stateName: 'Idaho', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  IL: { state: 'IL', stateName: 'Illinois', transferTax: { type: 'perThousand', amountPerThousand: 1 }, transferTaxPayerDefault: 'seller', notes: 'County/municipal transfer taxes may apply.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2500, otherLocalFees: 700 }, defaultBuyerFees: { ...buyerBase, titleFees: 3800 } },
  IN: { state: 'IN', stateName: 'Indiana', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  IA: { state: 'IA', stateName: 'Iowa', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 0.8 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  KS: { state: 'KS', stateName: 'Kansas', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  KY: { state: 'KY', stateName: 'Kentucky', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 0.5 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  LA: { state: 'LA', stateName: 'Louisiana', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2300 }, defaultBuyerFees: { ...buyerBase, titleFees: 3700 } },
  ME: { state: 'ME', stateName: 'Maine', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 2.2 }, transferTaxPayerDefault: 'split', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  MD: { state: 'MD', stateName: 'Maryland', transferTax: { type: 'percent', rate: 0.005 }, transferTaxPayerDefault: 'split', notes: 'County transfer/recordation taxes can vary.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2300, otherLocalFees: 800 }, defaultBuyerFees: { ...buyerBase, titleFees: 3900, prepaidExpenses: 5600 } },
  MA: { state: 'MA', stateName: 'Massachusetts', transferTax: { type: 'perThousand', amountPerThousand: 4.56 }, transferTaxPayerDefault: 'seller', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2400 }, defaultBuyerFees: { ...buyerBase, titleFees: 3800 } },
  MI: { state: 'MI', stateName: 'Michigan', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 4.3 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  MN: { state: 'MN', stateName: 'Minnesota', transferTax: { type: 'percent', rate: 0.0033 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  MS: { state: 'MS', stateName: 'Mississippi', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  MO: { state: 'MO', stateName: 'Missouri', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  MT: { state: 'MT', stateName: 'Montana', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  NE: { state: 'NE', stateName: 'Nebraska', transferTax: { type: 'perThousand', amountPerThousand: 2.25 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  NV: { state: 'NV', stateName: 'Nevada', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 1.95 }, transferTaxPayerDefault: 'seller', notes: 'Some counties add transfer taxes.', defaultSellerFees: { ...sellerBase, otherLocalFees: 600 }, defaultBuyerFees: buyerBase },
  NH: { state: 'NH', stateName: 'New Hampshire', transferTax: { type: 'percent', rate: 0.015 }, transferTaxPayerDefault: 'split', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2300 }, defaultBuyerFees: { ...buyerBase, titleFees: 3700 } },
  NJ: { state: 'NJ', stateName: 'New Jersey', transferTax: { type: 'percent', rate: 0.01 }, transferTaxPayerDefault: 'seller', notes: 'Tiered transfer fees and buyer mansion tax may apply.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2600, otherLocalFees: 900 }, defaultBuyerFees: { ...buyerBase, titleFees: 4200, prepaidExpenses: 6200 } },
  NM: { state: 'NM', stateName: 'New Mexico', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  NY: { state: 'NY', stateName: 'New York', transferTax: { type: 'percent', rate: 0.004 }, transferTaxPayerDefault: 'seller', notes: 'NYC/local transfer taxes and mansion tax may apply.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 3200, otherLocalFees: 1200 }, defaultBuyerFees: { ...buyerBase, titleFees: 5000, prepaidExpenses: 6500 } },
  NC: { state: 'NC', stateName: 'North Carolina', transferTax: { type: 'percent', rate: 0.002 }, transferTaxPayerDefault: 'seller', defaultSellerFees: { ...sellerBase, titleOrAttorney: 1600 }, defaultBuyerFees: buyerBase },
  ND: { state: 'ND', stateName: 'North Dakota', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  OH: { state: 'OH', stateName: 'Ohio', transferTax: { type: 'perThousand', amountPerThousand: 1 }, transferTaxPayerDefault: 'seller', notes: 'County permissive conveyance fees may apply.', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  OK: { state: 'OK', stateName: 'Oklahoma', transferTax: { type: 'percent', rate: 0.0015 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  OR: { state: 'OR', stateName: 'Oregon', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', notes: 'Some local transfer taxes may exist.', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  PA: { state: 'PA', stateName: 'Pennsylvania', transferTax: { type: 'percent', rate: 0.02 }, transferTaxPayerDefault: 'split', notes: 'Common estimate includes state plus local transfer tax; local rate varies.', defaultSellerFees: { ...sellerBase, otherLocalFees: 900 }, defaultBuyerFees: { ...buyerBase, titleFees: 3900 } },
  RI: { state: 'RI', stateName: 'Rhode Island', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 2.3 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  SC: { state: 'SC', stateName: 'South Carolina', transferTax: { type: 'perFiveHundred', amountPerFiveHundred: 1.85 }, transferTaxPayerDefault: 'seller', defaultSellerFees: { ...sellerBase, titleOrAttorney: 1700 }, defaultBuyerFees: buyerBase },
  SD: { state: 'SD', stateName: 'South Dakota', transferTax: { type: 'percent', rate: 0.005 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  TN: { state: 'TN', stateName: 'Tennessee', transferTax: { type: 'percent', rate: 0.0037 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  TX: { state: 'TX', stateName: 'Texas', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: { ...sellerBase, otherLocalFees: 600 }, defaultBuyerFees: { ...buyerBase, prepaidExpenses: 6200 } },
  UT: { state: 'UT', stateName: 'Utah', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  VT: { state: 'VT', stateName: 'Vermont', transferTax: { type: 'percent', rate: 0.0125 }, transferTaxPayerDefault: 'buyer', defaultSellerFees: sellerBase, defaultBuyerFees: { ...buyerBase, titleFees: 3700 } },
  VA: { state: 'VA', stateName: 'Virginia', transferTax: { type: 'percent', rate: 0.0025 }, transferTaxPayerDefault: 'split', notes: 'Grantor/recordation/regional fees vary.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2200 }, defaultBuyerFees: { ...buyerBase, titleFees: 3800 } },
  WA: { state: 'WA', stateName: 'Washington', transferTax: { type: 'percent', rate: 0.011 }, transferTaxPayerDefault: 'seller', notes: 'Washington REET is graduated; this uses a base-tier estimate.', defaultSellerFees: { ...sellerBase, titleOrAttorney: 2300, otherLocalFees: 900 }, defaultBuyerFees: { ...buyerBase, titleFees: 3800, prepaidExpenses: 5800 } },
  WV: { state: 'WV', stateName: 'West Virginia', transferTax: { type: 'percent', rate: 0.0022 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  WI: { state: 'WI', stateName: 'Wisconsin', transferTax: { type: 'percent', rate: 0.003 }, transferTaxPayerDefault: 'seller', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
  WY: { state: 'WY', stateName: 'Wyoming', transferTax: { type: 'none' }, transferTaxPayerDefault: 'negotiable', defaultSellerFees: sellerBase, defaultBuyerFees: buyerBase },
};

export const DEFAULT_STATE_FEE_RULE = STATE_FEE_RULES.GA;

export function getFeeRuleFromZip(zipInput: string): StateFeeRule {
  const match = getStateFromZip(zipInput);
  if (!match) return DEFAULT_STATE_FEE_RULE;
  return STATE_FEE_RULES[match.state] || DEFAULT_STATE_FEE_RULE;
}

export function getLocationLabelFromZip(zipInput: string): string {
  const match = getStateFromZip(zipInput);
  if (!match) return 'Selected ZIP estimate';
  return `${match.stateName} estimate`;
}
