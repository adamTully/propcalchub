'use client';

import { useEffect, useMemo, useState } from 'react';

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
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
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

const ZIP_FEE_PRESETS = {
  '30082': {
    locationLabel: 'Smyrna, GA (Cobb County)',
    titleOrAttorneyLabel: 'Attorney / title fees',
    titleOrAttorney: 1800,
    transferTax: 1000,
    recordingFees: 250,
    otherLocalFees: 300,
  },
  '30126': {
    locationLabel: 'Mableton, GA (Cobb County)',
    titleOrAttorneyLabel: 'Attorney / title fees',
    titleOrAttorney: 1800,
    transferTax: 1000,
    recordingFees: 250,
    otherLocalFees: 300,
  },
  '30339': {
    locationLabel: 'Atlanta, GA (Cobb County)',
    titleOrAttorneyLabel: 'Attorney / title fees',
    titleOrAttorney: 1950,
    transferTax: 1100,
    recordingFees: 300,
    otherLocalFees: 350,
  },
  '30327': {
    locationLabel: 'Atlanta, GA (Fulton County)',
    titleOrAttorneyLabel: 'Attorney / title fees',
    titleOrAttorney: 2100,
    transferTax: 1200,
    recordingFees: 325,
    otherLocalFees: 375,
  },
  default: {
    locationLabel: 'Selected ZIP estimate',
    titleOrAttorneyLabel: 'Title / attorney fees',
    titleOrAttorney: 1900,
    transferTax: 1050,
    recordingFees: 275,
    otherLocalFees: 325,
  },
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('en-US');

export default function Calculator() {
  const [zipCode, setZipCode] = useState('30082');
  const [salePriceInput, setSalePriceInput] = useState('500,000');
  const [mortgageBalanceInput, setMortgageBalanceInput] = useState('390,000');
  const [commissionInput, setCommissionInput] = useState('6%');
  const [sellerConcessionsInput, setSellerConcessionsInput] = useState('0');

  const parseNumber = (value: string) => Number(value.replace(/[^\d.]/g, '')) || 0;

  const formatNumber = (value: string) => numberFormatter.format(parseNumber(value));

  const feePreset = useMemo(() => {
    if (zipCode in ZIP_FEE_PRESETS) {
      return ZIP_FEE_PRESETS[zipCode as keyof typeof ZIP_FEE_PRESETS];
    }

    if (zipCode.startsWith('30')) {
      return {
        ...ZIP_FEE_PRESETS.default,
        locationLabel: `ZIP ${zipCode} (Georgia estimate)`,
        titleOrAttorneyLabel: 'Attorney / title fees',
      };
    }

    return {
      ...ZIP_FEE_PRESETS.default,
      locationLabel: zipCode ? `ZIP ${zipCode} estimate` : 'Selected ZIP estimate',
    };
  }, [zipCode]);

  const [feeInputs, setFeeInputs] = useState({
    titleOrAttorney: numberFormatter.format(ZIP_FEE_PRESETS['30082'].titleOrAttorney),
    transferTax: numberFormatter.format(ZIP_FEE_PRESETS['30082'].transferTax),
    recordingFees: numberFormatter.format(ZIP_FEE_PRESETS['30082'].recordingFees),
    otherLocalFees: numberFormatter.format(ZIP_FEE_PRESETS['30082'].otherLocalFees),
  });

  useEffect(() => {
    setFeeInputs({
      titleOrAttorney: numberFormatter.format(feePreset.titleOrAttorney),
      transferTax: numberFormatter.format(feePreset.transferTax),
      recordingFees: numberFormatter.format(feePreset.recordingFees),
      otherLocalFees: numberFormatter.format(feePreset.otherLocalFees),
    });
  }, [feePreset]);

  const salePrice = parseNumber(salePriceInput);
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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-[1600px] px-4 py-10 md:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-100 p-4 text-center text-sm font-medium text-slate-500">
          Top ad slot
        </div>

        <div className="grid gap-6 xl:grid-cols-[180px_minmax(0,1fr)_180px]">
          <aside className="hidden xl:block">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-slate-100 p-4 text-center text-sm font-medium text-slate-500 min-h-[600px]">
              Left sidebar ad
            </div>
          </aside>

          <div>
            <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                Localized seller estimate
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Seller Net Proceeds Calculator
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Estimate how much you may walk away with after selling your home using your ZIP code,
                mortgage balance, commission, and seller-side closing costs.
              </p>
            </section>

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
                      Using averages for {feePreset.locationLabel}
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

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <MoneyInput
                        label={feePreset.titleOrAttorneyLabel}
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

                  <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 text-center text-sm font-medium text-slate-500">
                    In-card ad slot
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
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
                      label={feePreset.titleOrAttorneyLabel}
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
                  {[
                    'Buyer Closing Cost Calculator',
                    'Monthly Payment Calculator',
                    'Offer Comparison Tool',
                    'Rent vs Sell Calculator',
                  ].map((tool) => (
                    <button
                      key={tool}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      <span>{tool}</span>
                      <span>→</span>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-slate-100 p-4 text-center text-sm font-medium text-slate-500 min-h-[600px]">
              Right sidebar ad
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}