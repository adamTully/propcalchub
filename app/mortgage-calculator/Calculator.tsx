'use client';

import { useState } from 'react';

function MoneyInput({
  label,
  value,
  onChange,
  onBlur,
}: {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          $
        </span>
        <input
          className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-8 pr-4 outline-none transition focus:border-slate-500"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputMode="numeric"
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

export default function MortgageCalculator() {
  const [homePriceInput, setHomePriceInput] = useState('500,000');
  const [downPaymentInput, setDownPaymentInput] = useState('100,000');
  const [interestRateInput, setInterestRateInput] = useState('6.75%');
  const [loanTermInput, setLoanTermInput] = useState('30');
  const [propertyTaxInput, setPropertyTaxInput] = useState('5,000');
  const [insuranceInput, setInsuranceInput] = useState('1,800');
  const [hoaInput, setHoaInput] = useState('0');
  const [isMobileSummaryOpen, setIsMobileSummaryOpen] = useState(false);

  const parseNumber = (value: string) => Number(value.replace(/[^\d.]/g, '')) || 0;
  const formatNumber = (value: string) => numberFormatter.format(parseNumber(value));

  const homePrice = parseNumber(homePriceInput);
  const downPayment = parseNumber(downPaymentInput);
  const annualPropertyTax = parseNumber(propertyTaxInput);
  const annualInsurance = parseNumber(insuranceInput);
  const monthlyHoa = parseNumber(hoaInput);
  const loanTermYears = Math.max(parseNumber(loanTermInput), 1);
  const interestRate = parseNumber(interestRateInput);
  const loanAmount = Math.max(homePrice - downPayment, 0);
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = loanTermYears * 12;

  const principalAndInterest =
    monthlyInterestRate > 0
      ? (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments))) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
      : loanAmount / totalPayments;

  const monthlyPropertyTax = annualPropertyTax / 12;
  const monthlyInsurance = annualInsurance / 12;
  const estimatedMonthlyPayment =
    principalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyHoa;

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

  const paymentDetails = [
    ['Principal & interest', currencyFormatter.format(principalAndInterest)],
    ['Property taxes', currencyFormatter.format(monthlyPropertyTax)],
    ['Homeowners insurance', currencyFormatter.format(monthlyInsurance)],
    ['HOA dues', currencyFormatter.format(monthlyHoa)],
    ['Loan amount', currencyFormatter.format(loanAmount)],
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-36 text-slate-900 lg:pb-0">
      <div className="mx-auto max-w-[1600px] px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[180px_minmax(0,1fr)_180px]">
          <aside className="hidden xl:block" aria-hidden="true" />

          <div>
            <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                Monthly payment estimate
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Mortgage Calculator
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Estimate your monthly mortgage payment including principal, interest, property
                taxes, homeowners insurance, and HOA dues.
              </p>
            </section>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-2xl font-semibold">Estimate inputs</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Adjust the assumptions to compare monthly payment scenarios.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <MoneyInput
                    label="Home price"
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
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Interest rate
                    </label>
                    <input
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-500"
                      value={interestRateInput}
                      onChange={(event) => setInterestRateInput(event.target.value)}
                      onBlur={(event) =>
                        setInterestRateInput(`${parseNumber(event.target.value).toFixed(2)}%`)
                      }
                      inputMode="decimal"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Loan term in years
                    </label>
                    <input
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-500"
                      value={loanTermInput}
                      onChange={(event) =>
                        setLoanTermInput(event.target.value.replace(/[^\d]/g, ''))
                      }
                      onBlur={(event) => setLoanTermInput(String(Math.max(parseNumber(event.target.value), 1)))}
                      inputMode="numeric"
                    />
                  </div>
                  <MoneyInput
                    label="Annual property tax"
                    value={propertyTaxInput}
                    onChange={handleMoneyChange(setPropertyTaxInput)}
                    onBlur={handleMoneyBlur(setPropertyTaxInput)}
                  />
                  <MoneyInput
                    label="Annual homeowners insurance"
                    value={insuranceInput}
                    onChange={handleMoneyChange(setInsuranceInput)}
                    onBlur={handleMoneyBlur(setInsuranceInput)}
                  />
                  <MoneyInput
                    label="Monthly HOA dues"
                    value={hoaInput}
                    onChange={handleMoneyChange(setHoaInput)}
                    onBlur={handleMoneyBlur(setHoaInput)}
                  />
                </div>
              </section>

              <section className="space-y-6">
                <div className="hidden rounded-3xl bg-slate-900 p-6 text-white shadow-sm lg:block">
                  <p className="text-sm font-medium text-slate-300">
                    Estimated monthly payment
                  </p>
                  <div className="mt-3 text-5xl font-semibold tracking-tight">
                    {currencyFormatter.format(estimatedMonthlyPayment)}
                  </div>

                  <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-4">
                    {paymentDetails.map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-4 text-sm">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Payment breakdown</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {paymentDetails.map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-slate-200 p-4">
                        <p className="text-sm text-slate-500">{label}</p>
                        <p className="mt-1 text-xl font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">How this mortgage calculator works</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  This mortgage calculator estimates a monthly housing payment by combining the
                  principal and interest payment with property taxes, homeowners insurance, and HOA
                  dues. The principal and interest amount is calculated from the loan amount,
                  interest rate, and loan term using a standard amortization formula.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  The result is a planning estimate, not a lender quote. Your actual payment can
                  change based on loan program, interest rate lock, escrow setup, property taxes,
                  insurance premiums, mortgage insurance, and final lender fees.
                </p>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Step-by-step instructions</h2>
                <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-slate-600">
                  <li>Enter the expected home price.</li>
                  <li>Enter your planned down payment.</li>
                  <li>Adjust the interest rate and loan term.</li>
                  <li>Add estimated annual property taxes and homeowners insurance.</li>
                  <li>Add monthly HOA dues if the property has an association fee.</li>
                  <li>Review the monthly payment and breakdown.</li>
                </ol>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Example calculation</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Example: A buyer purchases a $500,000 home with a $100,000 down payment. The loan
                  amount is $400,000. At a 6.75% interest rate on a 30-year loan, principal and
                  interest would be roughly $2,600 per month. Adding $5,000 per year in property
                  taxes and $1,800 per year in homeowners insurance brings the estimated monthly
                  payment to roughly $3,170 before any HOA dues.
                </p>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">What affects monthly mortgage payments?</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    The biggest payment drivers are loan amount, interest rate, and loan term. A
                    larger down payment reduces the loan amount. A lower interest rate can reduce
                    the monthly principal and interest payment. A shorter loan term usually raises
                    the monthly payment but may reduce total interest over time.
                  </p>
                  <p>
                    Taxes, insurance, and HOA dues can also make a major difference. Property taxes
                    vary by location, insurance premiums vary by property and coverage, and HOA dues
                    depend on the neighborhood or building. Some loans may also include mortgage
                    insurance, which is not included in this simple estimate.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
                <div className="mt-6 space-y-6">
                  {[
                    [
                      'What is included in this mortgage payment estimate?',
                      'The estimate includes principal and interest, monthly property taxes, monthly homeowners insurance, and monthly HOA dues.',
                    ],
                    [
                      'Does this include mortgage insurance?',
                      'No. Mortgage insurance is not included. Some buyers may need to add private mortgage insurance or loan-specific mortgage insurance depending on down payment and loan type.',
                    ],
                    [
                      'Why are property taxes shown monthly?',
                      'Property taxes are often paid through escrow as part of the monthly mortgage payment, so this calculator divides annual taxes by 12.',
                    ],
                    [
                      'Is homeowners insurance required?',
                      'Most mortgage lenders require homeowners insurance. The actual premium depends on the property, coverage, deductible, and insurer.',
                    ],
                    [
                      'How does loan term affect the payment?',
                      'A longer term usually lowers the monthly payment but can increase total interest paid. A shorter term usually raises the monthly payment but can reduce total interest.',
                    ],
                    [
                      'Is this calculator a lender quote?',
                      'No. It is a planning estimate only. Confirm final payment details with your lender and review your Loan Estimate and Closing Disclosure.',
                    ],
                  ].map(([question, answer]) => (
                    <div key={question}>
                      <h3 className="font-medium">{question}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{answer}</p>
                    </div>
                  ))}
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
                  <span>-&gt;</span>
                </a>
                <a
                  href="/buyer-closing-cost-calculator"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <span>Buyer Closing Cost Calculator</span>
                  <span>-&gt;</span>
                </a>
              </div>
            </section>
          </div>

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
            aria-controls="mobile-mortgage-payment-details"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-300">
                Estimated monthly payment
              </p>
              <div className="mt-1 text-3xl font-semibold tracking-tight">
                {currencyFormatter.format(estimatedMonthlyPayment)}
              </div>
            </div>

            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl transition-transform ${
                isMobileSummaryOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              ^
            </span>
          </button>

          <div
            id="mobile-mortgage-payment-details"
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileSummaryOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-3 rounded-2xl bg-white/10 p-4">
              {paymentDetails.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 text-sm">
                  <span className="text-slate-300">{label}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
