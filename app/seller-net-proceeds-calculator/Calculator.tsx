'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import {
  calculateTransferTax,
  getFeeRuleFromZip,
  getLocationLabelFromZip,
} from '@/lib/real-estate-fee-rules';

function AdSlot({
  slot,
  className = '',
  minHeight = 'min-h-[90px]',
}: {
  slot: string;
  className?: string;
  minHeight?: string;
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className={`overflow-hidden rounded-2xl bg-white ${minHeight} ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2489602416184279"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

function MoneyInput({
  label,
  value,
  onChange,
  onBlur,
  readOnly = false,
}: {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          $
        </span>
        <input
          className={`w-full rounded-2xl border py-3 pl-8 pr-4 outline-none transition ${
            readOnly
              ? 'border-slate-200 bg-slate-100 text-slate-600'
              : 'border-slate-300 bg-white focus:border-slate-500'
          }`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputMode="numeric"
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('en-US');

type SellerFeeInputKey = 'titleOrAttorney' | 'transferTax' | 'recordingFees' | 'otherLocalFees';

const sellerFeeInputKeys: SellerFeeInputKey[] = [
  'titleOrAttorney',
  'transferTax',
  'recordingFees',
  'otherLocalFees',
];

const getSellerFeeInputs = (zipCode: string, salePrice: number) => {
  const feeRule = getFeeRuleFromZip(zipCode);

  return {
    titleOrAttorney: numberFormatter.format(feeRule.defaultSellerFees.titleOrAttorney),
    transferTax: numberFormatter.format(calculateTransferTax(salePrice, feeRule.transferTax)),
    recordingFees: numberFormatter.format(feeRule.defaultSellerFees.recordingFees),
    otherLocalFees: numberFormatter.format(feeRule.defaultSellerFees.otherLocalFees),
  };
};

const getUneditedSellerFeeInputs = () =>
  sellerFeeInputKeys.reduce(
    (editedInputs, key) => ({
      ...editedInputs,
      [key]: false,
    }),
    {} as Record<SellerFeeInputKey, boolean>,
  );

export default function Calculator() {
  const [zipCode, setZipCode] = useState('30082');
  const [salePriceInput, setSalePriceInput] = useState('500,000');
  const [mortgageBalanceInput, setMortgageBalanceInput] = useState('390,000');
  const [commissionInput, setCommissionInput] = useState('6%');
  const [sellerConcessionsInput, setSellerConcessionsInput] = useState('0');
  const [isMobileNetOpen, setIsMobileNetOpen] = useState(false);

  const parseNumber = (value: string) => Number(value.replace(/[^\d.]/g, '')) || 0;

  const formatNumber = (value: string) => numberFormatter.format(parseNumber(value));

  const salePrice = parseNumber(salePriceInput);
  const feeRule = useMemo(() => getFeeRuleFromZip(zipCode), [zipCode]);
  const locationLabel = useMemo(() => getLocationLabelFromZip(zipCode), [zipCode]);
  const calculatedTransferTax = calculateTransferTax(salePrice, feeRule.transferTax);

  const [feeInputs, setFeeInputs] = useState(() => getSellerFeeInputs('30082', salePrice));
  const [editedFeeInputs, setEditedFeeInputs] = useState(() => getUneditedSellerFeeInputs());
  const previousZipCode = useRef(zipCode);

  useEffect(() => {
    const zipChanged = previousZipCode.current !== zipCode;

    if (zipChanged) {
      setFeeInputs({
        titleOrAttorney: numberFormatter.format(feeRule.defaultSellerFees.titleOrAttorney),
        transferTax: numberFormatter.format(calculatedTransferTax),
        recordingFees: numberFormatter.format(feeRule.defaultSellerFees.recordingFees),
        otherLocalFees: numberFormatter.format(feeRule.defaultSellerFees.otherLocalFees),
      });
      setEditedFeeInputs(getUneditedSellerFeeInputs());
      previousZipCode.current = zipCode;
      return;
    }

    if (!editedFeeInputs.transferTax) {
      setFeeInputs((current) => ({
        ...current,
        transferTax: numberFormatter.format(calculatedTransferTax),
      }));
    }
  }, [calculatedTransferTax, editedFeeInputs.transferTax, feeRule, zipCode]);

  const mortgageBalance = parseNumber(mortgageBalanceInput);
  const commissionRate = parseNumber(commissionInput);
  const sellerConcessions = parseNumber(sellerConcessionsInput);

  const attorneyFees = parseNumber(feeInputs.titleOrAttorney);
  const transferTax = parseNumber(feeInputs.transferTax);
  const recordingFees = parseNumber(feeInputs.recordingFees);
  const otherLocalFees = parseNumber(feeInputs.otherLocalFees);

  const localizedFees = attorneyFees + transferTax + recordingFees + otherLocalFees;
  const commissionAmount = salePrice * (commissionRate / 100);
  const totalSellingCosts = commissionAmount + localizedFees + sellerConcessions;
  const estimatedNetProceeds = salePrice - mortgageBalance - totalSellingCosts;

  const handleMoneyChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value.replace(/[^\d.,]/g, ''));
    };

  const handleMoneyBlur =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.FocusEvent<HTMLInputElement>) => {
      setter(formatNumber(event.target.value));
    };

  const handleFeeChange =
    (key: keyof typeof feeInputs) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditedFeeInputs((current) => ({
        ...current,
        [key]: true,
      }));
      setFeeInputs((current) => ({
        ...current,
        [key]: event.target.value.replace(/[^\d.,]/g, ''),
      }));
    };

  const handleFeeBlur =
    (key: keyof typeof feeInputs) => (event: React.FocusEvent<HTMLInputElement>) => {
      setFeeInputs((current) => ({
        ...current,
        [key]: formatNumber(event.target.value),
      }));
    };

  const scenarios = [salePrice - 25000, salePrice, salePrice + 25000].map((price, index) => {
    const safePrice = Math.max(price, 0);
    const scenarioCommission = safePrice * (commissionRate / 100);
    const scenarioCosts = scenarioCommission + localizedFees + sellerConcessions;
    const scenarioNet = safePrice - mortgageBalance - scenarioCosts;

    return {
      price: currencyFormatter.format(safePrice),
      net: currencyFormatter.format(scenarioNet),
      active: index === 1,
    };
  });

  return (
    <main className="min-h-screen bg-slate-50 pb-36 text-slate-900 lg:pb-0">
      <div className="mx-auto max-w-[1600px] px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[180px_minmax(0,1fr)_180px]">
          {/* LEFT SIDEBAR AD - paused for initial AdSense review / UX.
          <aside className="hidden xl:block">
            <div className="sticky top-6">
              <AdSlot label="Left sidebar ad" minHeight="min-h-[600px]" />
            </div>
          </aside>
          */}

          <aside className="hidden xl:block" aria-hidden="true" />

          <div>
            {/* HERO */}
            <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                Localized seller estimate
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Seller Net Proceeds Calculator
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Estimate how much you may walk away with after selling your home using your ZIP
                code, mortgage balance, commission, and seller-side closing costs.
              </p>
            </section>

            {/* TOP AD */}
            <div className="mb-8">
              <AdSlot
                slot="4273170546"
                minHeight="min-h-[90px]"
                />
            </div>

            {/* CALCULATOR + RESULTS */}
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-2xl font-semibold">Estimate inputs</h2>
                <p className="mt-1 text-sm text-slate-500">Quick mode with localized defaults</p>

                <div className="mt-6 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">ZIP code</label>
                    <input
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                      value={zipCode}
                      onChange={(event) =>
                        setZipCode(event.target.value.replace(/\D/g, '').slice(0, 5))
                      }
                      inputMode="numeric"
                    />
                    <p className="mt-2 text-sm text-slate-500">
                      Using state-level defaults for {locationLabel}
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <MoneyInput
                      label="Expected sale price"
                      value={salePriceInput}
                      onChange={handleMoneyChange(setSalePriceInput)}
                      onBlur={handleMoneyBlur(setSalePriceInput)}
                    />
                    <MoneyInput
                      label="Mortgage balance"
                      value={mortgageBalanceInput}
                      onChange={handleMoneyChange(setMortgageBalanceInput)}
                      onBlur={handleMoneyBlur(setMortgageBalanceInput)}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Agent commission
                      </label>
                      <input
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                        value={commissionInput}
                        onChange={(event) => setCommissionInput(event.target.value)}
                        onBlur={(event) => setCommissionInput(`${parseNumber(event.target.value)}%`)}
                        inputMode="decimal"
                      />
                    </div>

                    <MoneyInput
                      label="Seller concessions"
                      value={sellerConcessionsInput}
                      onChange={handleMoneyChange(setSellerConcessionsInput)}
                      onBlur={handleMoneyBlur(setSellerConcessionsInput)}
                    />
                  </div>

                  <div className="rounded-2xl border border-dashed border-slate-300 p-4">
                    <h3 className="font-medium">Localized fee defaults</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Fee assumptions update based on the ZIP entered. You can edit these values.
                    </p>
                    {feeRule.notes ? (
                      <p className="mt-2 text-xs text-slate-500">Note: {feeRule.notes}</p>
                    ) : null}

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <MoneyInput
                        label="Title / attorney fees"
                        value={feeInputs.titleOrAttorney}
                        onChange={handleFeeChange('titleOrAttorney')}
                        onBlur={handleFeeBlur('titleOrAttorney')}
                      />
                      <MoneyInput
                        label="Transfer tax"
                        value={feeInputs.transferTax}
                        onChange={handleFeeChange('transferTax')}
                        onBlur={handleFeeBlur('transferTax')}
                      />
                      <MoneyInput
                        label="Recording fees"
                        value={feeInputs.recordingFees}
                        onChange={handleFeeChange('recordingFees')}
                        onBlur={handleFeeBlur('recordingFees')}
                      />
                      <MoneyInput
                        label="Other local fees"
                        value={feeInputs.otherLocalFees}
                        onChange={handleFeeChange('otherLocalFees')}
                        onBlur={handleFeeBlur('otherLocalFees')}
                      />
                    </div>
                  </div>

                  {/* IN-CARD AD */}
                  <AdSlot
                    slot="5263338100"
                    minHeight="min-h-[120px]"
                    />
                </div>
              </section>

              <section className="space-y-6">
                <div className="hidden rounded-3xl bg-slate-900 p-6 text-white shadow-sm lg:block">
                  <p className="text-sm font-medium text-slate-300">Estimated net proceeds</p>
                  <div className="mt-3 text-5xl font-semibold tracking-tight">
                    {currencyFormatter.format(estimatedNetProceeds)}
                  </div>

                  <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-4">
                    <div className="flex justify-between text-sm">
                      <span>Sale price</span>
                      <span>{currencyFormatter.format(salePrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total selling costs</span>
                      <span>{currencyFormatter.format(totalSellingCosts)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Loan payoff</span>
                      <span>{currencyFormatter.format(mortgageBalance)}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Compare scenarios</h3>
                    <span className="text-sm text-slate-500">Live decision support</span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {scenarios.map((scenario) => (
                      <div
                        key={`${scenario.price}-${scenario.net}`}
                        className={`rounded-2xl border p-4 ${
                          scenario.active
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 bg-slate-50'
                        }`}
                      >
                        <p className="text-sm opacity-80">Sale price</p>
                        <div className="mt-1 text-2xl font-semibold">{scenario.price}</div>
                        <p className="mt-4 text-sm opacity-80">You net</p>
                        <div className="mt-1 text-xl font-semibold">{scenario.net}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Estimated breakdown</h3>
                    <span className="text-sm text-slate-500">Editable values</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <MoneyInput
                      label="Agent commission"
                      value={numberFormatter.format(Math.round(commissionAmount))}
                      onChange={() => {}}
                      onBlur={() => {}}
                      readOnly
                    />
                    <MoneyInput
                      label="Loan payoff"
                      value={mortgageBalanceInput}
                      onChange={handleMoneyChange(setMortgageBalanceInput)}
                      onBlur={handleMoneyBlur(setMortgageBalanceInput)}
                    />
                    <MoneyInput
                      label="Title / attorney fees"
                      value={feeInputs.titleOrAttorney}
                      onChange={handleFeeChange('titleOrAttorney')}
                      onBlur={handleFeeBlur('titleOrAttorney')}
                    />
                    <MoneyInput
                      label="Transfer tax"
                      value={feeInputs.transferTax}
                      onChange={handleFeeChange('transferTax')}
                      onBlur={handleFeeBlur('transferTax')}
                    />
                    <MoneyInput
                      label="Recording fees"
                      value={feeInputs.recordingFees}
                      onChange={handleFeeChange('recordingFees')}
                      onBlur={handleFeeBlur('recordingFees')}
                    />
                    <MoneyInput
                      label="Other local fees"
                      value={feeInputs.otherLocalFees}
                      onChange={handleFeeChange('otherLocalFees')}
                      onBlur={handleFeeBlur('otherLocalFees')}
                    />
                    <MoneyInput
                      label="Seller concessions"
                      value={sellerConcessionsInput}
                      onChange={handleMoneyChange(setSellerConcessionsInput)}
                      onBlur={handleMoneyBlur(setSellerConcessionsInput)}
                    />
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">What affects your net proceeds?</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    Several factors can change how much you walk away with after selling your home.
                    The largest factors are usually your mortgage payoff and real estate commission,
                    but local closing costs, transfer taxes, negotiated repairs, and seller
                    concessions can also reduce your final amount.
                  </p>
                  <p>
                    In some transactions, the seller agrees to pay part of the buyer's closing costs
                    or provide repair credits. These concessions can be useful during negotiation,
                    but they directly reduce seller proceeds. Local taxes and settlement fees may
                    also vary by state, county, and contract.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Example seller scenario</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    Example: A homeowner expects to sell for $500,000 and has a remaining mortgage
                    payoff of $390,000. If the agent commission is 6%, the commission alone would be
                    about $30,000. After adding transfer taxes, attorney or title fees, recording
                    fees, and other seller costs, the amount the seller keeps may be much lower than
                    the sale price.
                  </p>
                  <p>
                    This is why sellers should estimate net proceeds before deciding on a listing
                    price, accepting an offer, or planning the purchase of another home.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Seller costs commonly included</h2>
                <ul className="mt-5 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                  <li>Real estate agent commission</li>
                  <li>Mortgage payoff or remaining loan balance</li>
                  <li>State or local transfer taxes</li>
                  <li>Attorney, title, or settlement fees</li>
                  <li>Recording fees</li>
                  <li>Seller concessions or repair credits</li>
                  <li>HOA transfer or document fees, if applicable</li>
                  <li>Other local closing costs</li>
                </ul>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">How accurate is this calculator?</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This calculator is designed for planning, not final closing. It uses state-level
                  defaults and editable assumptions to help you estimate a likely range. Actual
                  closing costs can vary based on your location, title company, closing attorney,
                  lender payoff, contract terms, and negotiated concessions.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  For the most accurate number, compare this estimate with a seller net sheet from
                  your real estate agent or closing attorney.
                </p>
              </div>
            </section>

            <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">
                  How this seller net proceeds calculator works
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This seller net proceeds calculator estimates how much money you may keep after
                  selling a home. It starts with your expected sale price, then subtracts your
                  remaining mortgage balance, estimated real estate commission, transfer taxes, title
                  or attorney fees, recording fees, seller concessions, and other local closing
                  costs.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  The calculator uses your ZIP code to apply a state-level estimate for certain
                  fees. These defaults are only a starting point. If you already know your commission
                  rate, mortgage payoff, attorney fees, title fees, or concessions, you can edit the
                  fields directly to create a more personalized estimate.
                </p>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">
                  Step-by-step: how to estimate seller net proceeds
                </h2>
                <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-slate-600">
                  <li>Enter your expected sale price.</li>
                  <li>Enter your remaining mortgage balance or loan payoff.</li>
                  <li>Review the estimated commission and seller closing costs.</li>
                  <li>
                    Adjust transfer taxes, title or attorney fees, recording fees, and concessions
                    if you know the exact numbers.
                  </li>
                  <li>
                    Review the estimated net proceeds and compare different sale price scenarios.
                  </li>
                </ol>
                <p className="mt-4 leading-7 text-slate-600">
                  Your estimated net proceeds are not the same as your sale price. The sale price is
                  the gross amount paid by the buyer, while net proceeds are what may remain after
                  selling expenses and loan payoff are deducted.
                </p>
              </div>
            </section>

            {/* MID-CONTENT AD */}
            <div className="mt-6">
              <AdSlot
                slot="1204898936"
                minHeight="min-h-[250px]"
                />
            </div>

            {/* CONTEXT + RELATED */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold">Helpful context</h3>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                  <p>
                    Closing costs vary by state, county, and transaction setup. ZIP-based defaults
                    help make the estimate more useful than a generic national calculator.
                  </p>
                  <p>
                    Sellers usually want one answer first: how much they may walk away with. This
                    layout prioritizes that answer before exposing the detailed fee breakdown.
                  </p>
                </div>
              </section>

              <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold">Related tools</h3>
                <div className="mt-4 grid gap-3">
                  <a
                    href="/buyer-closing-cost-calculator"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span>Buyer Closing Cost Calculator</span>
                    <span>→</span>
                  </a>

                  {['Monthly Payment Calculator', 'Offer Comparison Tool', 'Rent vs Sell Calculator'].map(
                    (tool) => (
                      <button
                        key={tool}
                        className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        <span>{tool}</span>
                        <span>→</span>
                      </button>
                    ),
                  )}
                </div>
              </section>
            </div>

            <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">
                  How this seller net proceeds calculator works
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This seller net proceeds calculator estimates how much money you may walk away
                  with after selling your home. It uses your estimated sale price, mortgage balance,
                  real estate commission, seller concessions, and common seller-side closing costs to
                  create a simple net proceeds estimate.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  Because closing costs can vary by location, this calculator also uses your ZIP code
                  to apply localized fee assumptions. You can edit those assumptions if you already
                  know your attorney fees, title fees, transfer taxes, recording fees, or other local
                  costs.
                </p>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">What costs are included?</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  A seller net estimate usually includes the major costs that reduce your proceeds at
                  closing. Your actual costs may vary based on your state, county, purchase
                  agreement, lender payoff, and negotiated seller concessions.
                </p>

                <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-600">
                  <li>Real estate agent commission</li>
                  <li>Mortgage payoff or remaining loan balance</li>
                  <li>Attorney or title fees</li>
                  <li>Transfer taxes</li>
                  <li>Recording fees</li>
                  <li>Seller concessions or repair credits</li>
                  <li>Other local closing fees</li>
                </ul>
              </div>
            </section>

            {/* PRE-FAQ AD - paused for initial AdSense review / UX.
            <div className="mt-6">
              <AdSlot slot="xxxxxx" minHeight="min-h-[250px]" />
            </div>
            */}

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Frequently asked questions</h2>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">What are seller net proceeds?</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Seller net proceeds are the estimated amount you keep after subtracting your
                      mortgage payoff, commission, closing costs, concessions, and other seller
                      expenses from the final sale price.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Are net proceeds the same as home equity?
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Not exactly. Home equity is the difference between your home's value and what
                      you owe on the mortgage. Net proceeds account for selling costs, commissions,
                      transfer taxes, concessions, and other expenses that reduce the amount you
                      actually keep.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      How do I calculate my net proceeds from selling a house?
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Start with your expected sale price, then subtract your loan payoff, agent
                      commission, seller closing costs, and any credits or concessions you agree to
                      pay. The remaining amount is your estimated net proceeds.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Are seller closing costs the same in every ZIP code?
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      No. Seller closing costs can vary by state, county, municipality, and
                      transaction type. That is why this calculator uses ZIP-based defaults and lets
                      you edit the individual fee values.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Who usually pays transfer taxes?</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Transfer tax responsibility depends on the state, local custom, and the
                      purchase agreement. In many areas the seller pays, but in some places it may be
                      split, paid by the buyer, or negotiated.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      Can seller concessions reduce my proceeds?
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Yes. Seller concessions, repair credits, or closing cost credits paid to the
                      buyer reduce the seller's final net proceeds.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Why does ZIP code matter?</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      ZIP code helps estimate the state or local cost assumptions used by the
                      calculator. Closing costs can vary by location, so state-level defaults are
                      more useful than a single national estimate.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Why is agent commission included?</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Commission is often one of the largest seller expenses. Including it gives you
                      a more realistic estimate of what you may walk away with after the sale closes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Is this a final closing statement?</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      No. This calculator is an estimate for planning purposes. Your final numbers
                      should come from your real estate agent, closing attorney, title company,
                      lender, or settlement statement.
                    </p>
                  </div>

                  <div className="mt-6">
                    <a
                      href="/buyer-closing-cost-calculator"
                      className="text-sm font-medium text-blue-600 underline hover:text-blue-800"
                    >
                      Buying instead? Estimate your buyer closing costs →
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR AD - paused for initial AdSense review / UX.
          <aside className="hidden xl:block">
            <div className="sticky top-6">
              <AdSlot slot="xxxxxxxxx" minHeight="min-h-[600px]" />
            </div>
          </aside>
          */}

          <aside className="hidden xl:block" aria-hidden="true" />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-slate-900 text-white shadow-[0_-12px_30px_rgba(15,23,42,0.25)] lg:hidden">
        <div className="mx-auto max-w-xl px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3">
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-out ${
              isMobileNetOpen ? 'mb-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="space-y-3 rounded-2xl bg-white/10 p-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-300">Sale price</span>
                  <span className="font-medium">{currencyFormatter.format(salePrice)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-300">Total selling costs</span>
                  <span className="font-medium">{currencyFormatter.format(totalSellingCosts)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-300">Loan payoff</span>
                  <span className="font-medium">{currencyFormatter.format(mortgageBalance)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-300">
                Estimated net proceeds
              </p>
              <div className="mt-1 text-3xl font-semibold tracking-tight">
                {currencyFormatter.format(estimatedNetProceeds)}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileNetOpen((current) => !current)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15"
              aria-label={isMobileNetOpen ? 'Hide net proceeds details' : 'Show net proceeds details'}
              aria-expanded={isMobileNetOpen}
            >
              <span
                className={`text-2xl leading-none transition-transform duration-300 ${
                  isMobileNetOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY AD - paused for initial AdSense review / UX.
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-2 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] xl:hidden">
        <AdSlot label="Mobile sticky ad" minHeight="min-h-[64px]" className="mx-auto max-w-md rounded-xl" />
        <!---use this syntax below, check the format from the old one above is correct-->
        <AdSlot slot="xxxxxx" minHeight="min-h-[64px]" />
      </div>
      */}
    </main>
  );
}
