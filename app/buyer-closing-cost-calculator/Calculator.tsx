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

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('en-US');

const ZIP_FEE_PRESETS = {
  '30082': {
    locationLabel: 'Smyrna, GA (Cobb County)',
    lenderFees: 2400,
    titleFees: 3200,
    prepaidExpenses: 4600,
    recordingFees: 250,
    inspectionAndAppraisal: 900,
  },
  '30126': {
    locationLabel: 'Mableton, GA (Cobb County)',
    lenderFees: 2400,
    titleFees: 3200,
    prepaidExpenses: 4600,
    recordingFees: 250,
    inspectionAndAppraisal: 900,
  },
  '30339': {
    locationLabel: 'Atlanta, GA (Cobb County)',
    lenderFees: 2600,
    titleFees: 3500,
    prepaidExpenses: 4900,
    recordingFees: 300,
    inspectionAndAppraisal: 950,
  },
  '30327': {
    locationLabel: 'Atlanta, GA (Fulton County)',
    lenderFees: 2750,
    titleFees: 3700,
    prepaidExpenses: 5200,
    recordingFees: 325,
    inspectionAndAppraisal: 1000,
  },
  default: {
    locationLabel: 'Selected ZIP estimate',
    lenderFees: 2500,
    titleFees: 3400,
    prepaidExpenses: 4800,
    recordingFees: 275,
    inspectionAndAppraisal: 950,
  },
};

export default function BuyerClosingCostCalculator() {
  const [zipCode, setZipCode] = useState('30082');
  const [homePriceInput, setHomePriceInput] = useState('500,000');
  const [downPaymentInput, setDownPaymentInput] = useState('100,000');
  const [lenderFeesInput, setLenderFeesInput] = useState('2,400');
  const [titleFeesInput, setTitleFeesInput] = useState('3,200');
  const [prepaidExpensesInput, setPrepaidExpensesInput] = useState('4,600');
  const [recordingFeesInput, setRecordingFeesInput] = useState('250');
  const [inspectionAndAppraisalInput, setInspectionAndAppraisalInput] = useState('900');

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
      };
    }

    return {
      ...ZIP_FEE_PRESETS.default,
      locationLabel: zipCode ? `ZIP ${zipCode} estimate` : 'Selected ZIP estimate',
    };
  }, [zipCode]);

  useEffect(() => {
    setLenderFeesInput(numberFormatter.format(feePreset.lenderFees));
    setTitleFeesInput(numberFormatter.format(feePreset.titleFees));
    setPrepaidExpensesInput(numberFormatter.format(feePreset.prepaidExpenses));
    setRecordingFeesInput(numberFormatter.format(feePreset.recordingFees));
    setInspectionAndAppraisalInput(numberFormatter.format(feePreset.inspectionAndAppraisal));
  }, [feePreset]);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  const homePrice = parseNumber(homePriceInput);
  const downPayment = parseNumber(downPaymentInput);
  const loanAmount = Math.max(homePrice - downPayment, 0);

  const lenderFees = parseNumber(lenderFeesInput);
  const titleFees = parseNumber(titleFeesInput);
  const prepaidExpenses = parseNumber(prepaidExpensesInput);
  const recordingFees = parseNumber(recordingFeesInput);
  const inspectionAndAppraisal = parseNumber(inspectionAndAppraisalInput);

  const estimatedClosingCosts =
    lenderFees + titleFees + prepaidExpenses + recordingFees + inspectionAndAppraisal;

  const estimatedCashToClose = downPayment + estimatedClosingCosts;
  const closingCostPercent = homePrice > 0 ? (estimatedClosingCosts / homePrice) * 100 : 0;

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

  const scenarios = [
    { label: 'Lower estimate', multiplier: 0.85 },
    { label: 'Current estimate', multiplier: 1 },
    { label: 'Higher estimate', multiplier: 1.15 },
  ].map((scenario) => {
    const costs = estimatedClosingCosts * scenario.multiplier;
    return {
      label: scenario.label,
      closingCosts: currencyFormatter.format(costs),
      cashToClose: currencyFormatter.format(downPayment + costs),
      active: scenario.multiplier === 1,
    };
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-[1600px] px-4 py-10 md:px-6 lg:px-8">
        <div className="mb-6">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2489602416184279"
            data-ad-slot="XXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[180px_minmax(0,1fr)_180px]">
          <aside className="hidden xl:block">
            <div className="sticky top-6 min-h-[600px] rounded-2xl border border-slate-200 bg-slate-100 p-4 text-center text-sm font-medium text-slate-500">
              Left sidebar ad
            </div>
          </aside>

          <div>
            <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                Localized buyer estimate
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Buyer Closing Cost Calculator
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Estimate how much cash you may need to buy a home, including your down payment,
                lender fees, title fees, prepaid expenses, and other buyer-side closing costs.
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
                      label="Home purchase price"
                      value={homePriceInput}
                      onChange={handleMoneyChange(setHomePriceInput)}
                      onBlur={handleMoneyBlur(setHomePriceInput)}
                    />
                    <MoneyInput
                      label="Down payment"
                      value={downPaymentInput}
                      onChange={handleMoneyChange(setDownPaymentInput)}
                      onBlur={handleMoneyBlur(setDownPaymentInput)}
                    />
                  </div>

                  <div className="rounded-2xl border border-dashed border-slate-300 p-4">
                    <h3 className="font-medium">Editable buyer cost estimates</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      These defaults update based on ZIP code. Edit them if you already have lender
                      or title estimates.
                    </p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <MoneyInput
                        label="Lender fees"
                        value={lenderFeesInput}
                        onChange={handleMoneyChange(setLenderFeesInput)}
                        onBlur={handleMoneyBlur(setLenderFeesInput)}
                      />
                      <MoneyInput
                        label="Title and legal fees"
                        value={titleFeesInput}
                        onChange={handleMoneyChange(setTitleFeesInput)}
                        onBlur={handleMoneyBlur(setTitleFeesInput)}
                      />
                      <MoneyInput
                        label="Prepaid expenses"
                        value={prepaidExpensesInput}
                        onChange={handleMoneyChange(setPrepaidExpensesInput)}
                        onBlur={handleMoneyBlur(setPrepaidExpensesInput)}
                      />
                      <MoneyInput
                        label="Recording fees"
                        value={recordingFeesInput}
                        onChange={handleMoneyChange(setRecordingFeesInput)}
                        onBlur={handleMoneyBlur(setRecordingFeesInput)}
                      />
                      <MoneyInput
                        label="Inspection and appraisal"
                        value={inspectionAndAppraisalInput}
                        onChange={handleMoneyChange(setInspectionAndAppraisalInput)}
                        onBlur={handleMoneyBlur(setInspectionAndAppraisalInput)}
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
                  <p className="text-sm font-medium text-slate-300">Estimated cash to close</p>
                  <div className="mt-3 text-5xl font-semibold tracking-tight">
                    {currencyFormatter.format(estimatedCashToClose)}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    This includes your down payment plus estimated buyer closing costs.
                  </p>

                  <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-4">
                    <div className="flex justify-between text-sm">
                      <span>Down payment</span>
                      <span>{currencyFormatter.format(downPayment)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Estimated closing costs</span>
                      <span>{currencyFormatter.format(estimatedClosingCosts)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Loan amount</span>
                      <span>{currencyFormatter.format(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Closing costs as % of price</span>
                      <span>{closingCostPercent.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Compare scenarios</h3>
                    <span className="text-sm text-slate-500">Low / current / high</span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {scenarios.map((scenario) => (
                      <div
                        key={scenario.label}
                        className={`rounded-2xl border p-4 ${
                          scenario.active
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 bg-slate-50'
                        }`}
                      >
                        <p className="text-sm opacity-80">{scenario.label}</p>
                        <div className="mt-2 text-xl font-semibold">{scenario.closingCosts}</div>
                        <p className="mt-4 text-sm opacity-80">Cash to close</p>
                        <div className="mt-1 text-xl font-semibold">{scenario.cashToClose}</div>
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
                      label="Down payment"
                      value={downPaymentInput}
                      onChange={handleMoneyChange(setDownPaymentInput)}
                      onBlur={handleMoneyBlur(setDownPaymentInput)}
                    />
                    <MoneyInput
                      label="Lender fees"
                      value={lenderFeesInput}
                      onChange={handleMoneyChange(setLenderFeesInput)}
                      onBlur={handleMoneyBlur(setLenderFeesInput)}
                    />
                    <MoneyInput
                      label="Title and legal fees"
                      value={titleFeesInput}
                      onChange={handleMoneyChange(setTitleFeesInput)}
                      onBlur={handleMoneyBlur(setTitleFeesInput)}
                    />
                    <MoneyInput
                      label="Prepaid expenses"
                      value={prepaidExpensesInput}
                      onChange={handleMoneyChange(setPrepaidExpensesInput)}
                      onBlur={handleMoneyBlur(setPrepaidExpensesInput)}
                    />
                    <MoneyInput
                      label="Recording fees"
                      value={recordingFeesInput}
                      onChange={handleMoneyChange(setRecordingFeesInput)}
                      onBlur={handleMoneyBlur(setRecordingFeesInput)}
                    />
                    <MoneyInput
                      label="Inspection and appraisal"
                      value={inspectionAndAppraisalInput}
                      onChange={handleMoneyChange(setInspectionAndAppraisalInput)}
                      onBlur={handleMoneyBlur(setInspectionAndAppraisalInput)}
                    />
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-semibold">
                How this buyer closing cost calculator works
              </h2>
              <p className="mt-4 text-slate-600">
                This calculator estimates the amount of cash a buyer may need to bring to closing.
                It combines your down payment with estimated closing costs such as lender fees, title
                and legal costs, prepaid expenses, recording fees, inspections, and appraisal costs.
              </p>

              <h2 className="mt-10 text-2xl font-semibold">What costs are included?</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>Down payment</li>
                <li>Lender and loan origination fees</li>
                <li>Title search, title insurance, and settlement fees</li>
                <li>Prepaid homeowners insurance, taxes, and interest</li>
                <li>Recording fees, appraisal fees, and home inspection costs</li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">Frequently asked questions</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-medium">How much are buyer closing costs?</h3>
                  <p className="mt-2 text-slate-600">
                    Buyer closing costs often range from about 2% to 5% of the purchase price,
                    excluding the down payment. Actual costs vary based on loan type, location, lender,
                    and transaction details.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Is the down payment included in closing costs?</h3>
                  <p className="mt-2 text-slate-600">
                    The down payment is separate from closing costs, but both are usually part of the
                    total cash needed to close on a home purchase.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Can buyers reduce closing costs?</h3>
                  <p className="mt-2 text-slate-600">
                    Buyers may reduce costs by comparing lenders, negotiating seller concessions, and
                    reviewing loan estimates carefully before closing.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">Related tools</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="/seller-net-proceeds-calculator"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <span>Seller Net Proceeds Calculator</span>
                  <span>→</span>
                </a>
                <a
                  href="/"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <span>View all calculators</span>
                  <span>→</span>
                </a>
              </div>
            </section>
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-6 min-h-[600px] rounded-2xl border border-slate-200 bg-slate-100 p-4 text-center text-sm font-medium text-slate-500">
              Right sidebar ad
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}