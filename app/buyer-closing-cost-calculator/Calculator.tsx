'use client';

import { useEffect, useMemo, useState } from 'react';

import {
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

export default function BuyerClosingCostCalculator() {
  const [zipCode, setZipCode] = useState('30082');
  const [homePriceInput, setHomePriceInput] = useState('500,000');
  const [downPaymentInput, setDownPaymentInput] = useState('100,000');
  const [lenderFeesInput, setLenderFeesInput] = useState('2,400');
  const [titleFeesInput, setTitleFeesInput] = useState('3,200');
  const [prepaidExpensesInput, setPrepaidExpensesInput] = useState('4,600');
  const [recordingFeesInput, setRecordingFeesInput] = useState('250');
  const [inspectionAndAppraisalInput, setInspectionAndAppraisalInput] = useState('900');
  const [isMobileSummaryOpen, setIsMobileSummaryOpen] = useState(false);

  const parseNumber = (value: string) => Number(value.replace(/[^\d.]/g, '')) || 0;
  const formatNumber = (value: string) => numberFormatter.format(parseNumber(value));

  const feeRule = useMemo(() => getFeeRuleFromZip(zipCode), [zipCode]);
  const locationLabel = useMemo(() => getLocationLabelFromZip(zipCode), [zipCode]);

  useEffect(() => {
    setLenderFeesInput(numberFormatter.format(feeRule.defaultBuyerFees.lenderFees));
    setTitleFeesInput(numberFormatter.format(feeRule.defaultBuyerFees.titleFees));
    setPrepaidExpensesInput(numberFormatter.format(feeRule.defaultBuyerFees.prepaidExpenses));
    setRecordingFeesInput(numberFormatter.format(feeRule.defaultBuyerFees.recordingFees));
    setInspectionAndAppraisalInput(
      numberFormatter.format(feeRule.defaultBuyerFees.inspectionAndAppraisal),
    );
  }, [feeRule]);


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
    <main className="min-h-screen bg-slate-50 pb-28 text-slate-900 lg:pb-0">
      <div className="mx-auto max-w-[1600px] px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[180px_minmax(0,1fr)_180px]">
          {/* Left sidebar intentionally hidden to preserve the desktop 3-column layout */}
          <aside className="hidden xl:block" aria-hidden="true" />

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

            <div className="mb-8">
              <AdSlot slot="9538459184" minHeight="min-h-[90px]" />
            </div>

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
                    {feeRule.notes ? (
                      <p className="mt-2 text-xs text-slate-500">Note: {feeRule.notes}</p>
                    ) : null}

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

                  <AdSlot slot="6992186895" minHeight="min-h-[120px]" />
                </div>
              </section>

              <section className="space-y-6">
                <div className="hidden rounded-3xl bg-slate-900 p-6 text-white shadow-sm lg:block">
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
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">
                  How this buyer closing cost calculator works
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This buyer closing cost calculator estimates the cash a buyer may need to purchase
                  a home. It combines the down payment with estimated buyer closing costs such as
                  lender fees, title fees, prepaid expenses, recording fees, inspection costs, and
                  appraisal costs.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  The calculator uses your ZIP code to apply state-level defaults where possible.
                  These defaults are only planning estimates. If you have a loan estimate from your
                  lender or a quote from your title company or closing attorney, replace the default
                  values with your actual numbers.
                </p>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">
                  Step-by-step: how to estimate cash to close
                </h2>
                <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-slate-600">
                  <li>Enter the expected home purchase price.</li>
                  <li>Enter your planned down payment.</li>
                  <li>Review the estimated buyer closing costs.</li>
                  <li>
                    Adjust lender fees, title fees, prepaid expenses, recording fees, inspection
                    costs, or appraisal costs if you know the exact values.
                  </li>
                  <li>
                    Review the estimated cash to close and compare low, current, and high scenarios.
                  </li>
                </ol>
                <p className="mt-4 leading-7 text-slate-600">
                  Cash to close usually includes more than just the down payment. Buyers often need
                  additional funds for lender fees, title services, escrow deposits, prepaid taxes,
                  prepaid insurance, and other transaction costs.
                </p>
              </div>
            </section>

            <div className="mt-6">
              <AdSlot slot="1189421214" minHeight="min-h-[250px]" />
            </div>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">What affects buyer closing costs?</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    Buyer closing costs can vary based on loan type, lender, interest rate, state,
                    county, title company, property taxes, homeowners insurance, and the timing of
                    closing. A buyer using a mortgage will usually have different closing costs than
                    a cash buyer.
                  </p>
                  <p>
                    Prepaid expenses can also vary significantly. For example, buyers may need to
                    prepay homeowners insurance, property taxes, mortgage interest, or escrow
                    reserves. These amounts depend on the closing date, local tax schedule, and
                    lender requirements.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Example buyer scenario</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    Example: A buyer purchasing a $500,000 home with a $100,000 down payment may
                    still need approximately $10,000 to $12,000 in additional closing costs. In
                    plain English, the buyer would add the $100,000 down payment to estimated buyer
                    costs for a total cash to close of roughly $110,000 to $112,000. Lender fees,
                    title fees, prepaid insurance, escrow deposits, appraisal fees, and inspection
                    costs can all add to the total cash needed at closing.
                  </p>
                  <p>
                    This calculator helps buyers understand that the down payment is only one part
                    of the total amount needed to complete a home purchase.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Buyer costs commonly included</h2>
                <ul className="mt-5 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                  <li>Down payment</li>
                  <li>Loan origination or lender fees</li>
                  <li>Credit report and underwriting fees</li>
                  <li>Title search and title insurance</li>
                  <li>Settlement or escrow fees</li>
                  <li>Recording fees</li>
                  <li>Appraisal fee</li>
                  <li>Home inspection fee</li>
                  <li>Prepaid homeowners insurance</li>
                  <li>Prepaid property taxes</li>
                  <li>Prepaid mortgage interest</li>
                  <li>Escrow reserves, if required</li>
                </ul>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">How accurate is this calculator?</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This calculator is designed to provide a planning estimate, not a final loan
                  estimate. Your actual cash to close may change based on lender fees, loan program,
                  interest rate, closing date, escrow requirements, property taxes, insurance
                  premiums, title charges, and negotiated seller credits.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  For the most accurate number, compare this estimate with your official Loan
                  Estimate and Closing Disclosure from your lender.
                </p>
              </div>
            </section>

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
                  <h3 className="font-medium">What are buyer closing costs?</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Buyer closing costs are the fees and prepaid expenses a buyer typically pays
                    when purchasing a home. They may include lender fees, title fees, recording fees,
                    appraisal fees, inspection fees, prepaid taxes, prepaid insurance, and escrow
                    reserves.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">How much are buyer closing costs?</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Buyer closing costs often range from about 2% to 5% of the purchase price,
                    excluding the down payment. Actual costs vary based on loan type, location, lender,
                    and transaction details.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Is the down payment included in closing costs?</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    The down payment is separate from closing costs, but both are part of the total
                    cash needed to close. That is why this calculator shows estimated cash to close
                    instead of only closing costs.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Can buyers reduce closing costs?</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Buyers may reduce costs by comparing lenders, negotiating seller concessions, and
                    reviewing loan estimates carefully before closing.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Can seller credits reduce cash to close?</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Yes. If the seller agrees to pay some buyer closing costs, those credits can
                    reduce the amount of cash the buyer needs at closing. Seller credits are usually
                    negotiated in the purchase agreement.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Why do prepaid expenses matter?</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Prepaid expenses can be a major part of cash to close. Buyers may need to prepay
                    homeowners insurance, property taxes, mortgage interest, or escrow reserves
                    depending on lender requirements and closing date.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Is this calculator the same as a Loan Estimate?</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    No. This calculator is for planning only. Your official Loan Estimate and
                    Closing Disclosure from your lender provide the numbers used for your actual
                    transaction.
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

            <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">Estimate the monthly payment</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                After you estimate cash to close, use the mortgage calculator to compare the
                monthly payment for the same purchase price, down payment, taxes, insurance, and HOA
                dues.
              </p>
              <a
                href="/mortgage-calculator"
                className="mt-4 inline-flex rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Mortgage Calculator -&gt;
              </a>
            </section>
          </div>

          {/* Right sidebar intentionally hidden to preserve the desktop 3-column layout */}
          <aside className="hidden xl:block" aria-hidden="true" />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-900 text-white shadow-[0_-10px_30px_rgba(15,23,42,0.25)] lg:hidden">
        <div className="mx-auto max-w-xl px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-3">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 text-left"
            onClick={() => setIsMobileSummaryOpen((current) => !current)}
            aria-expanded={isMobileSummaryOpen}
            aria-controls="mobile-cash-to-close-details"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-300">
                Estimated cash to close
              </p>
              <div className="mt-1 text-3xl font-semibold tracking-tight">
                {currencyFormatter.format(estimatedCashToClose)}
              </div>
            </div>

            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl transition-transform ${
                isMobileSummaryOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              ↑
            </span>
          </button>

          <div
            id="mobile-cash-to-close-details"
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileSummaryOpen ? 'mt-4 max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-3 rounded-2xl bg-white/10 p-4">
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-slate-300">Down payment</span>
                <span className="font-medium">{currencyFormatter.format(downPayment)}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-slate-300">Estimated closing costs</span>
                <span className="font-medium">{currencyFormatter.format(estimatedClosingCosts)}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-slate-300">Loan amount</span>
                <span className="font-medium">{currencyFormatter.format(loanAmount)}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-slate-300">Closing costs as % of price</span>
                <span className="font-medium">{closingCostPercent.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
