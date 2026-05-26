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

function PlainNumberInput({
  label,
  value,
  onChange,
  onBlur,
  inputMode = 'numeric',
}: {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  inputMode?: 'numeric' | 'decimal';
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <input
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-500"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputMode={inputMode}
      />
    </div>
  );
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('en-US');

const percentFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const formatPercent = (value: number) => `${percentFormatter.format(value)}%`;

export default function RentalPropertyCalculator() {
  const [purchasePriceInput, setPurchasePriceInput] = useState('300,000');
  const [downPaymentInput, setDownPaymentInput] = useState('60,000');
  const [interestRateInput, setInterestRateInput] = useState('6.75%');
  const [loanTermInput, setLoanTermInput] = useState('30');
  const [closingCostsInput, setClosingCostsInput] = useState('9,000');
  const [monthlyRentInput, setMonthlyRentInput] = useState('3,000');
  const [otherMonthlyIncomeInput, setOtherMonthlyIncomeInput] = useState('0');
  const [propertyTaxesInput, setPropertyTaxesInput] = useState('3,600');
  const [insuranceInput, setInsuranceInput] = useState('1,800');
  const [hoaDuesInput, setHoaDuesInput] = useState('0');
  const [propertyManagementInput, setPropertyManagementInput] = useState('240');
  const [maintenanceReserveInput, setMaintenanceReserveInput] = useState('150');
  const [vacancyReserveInput, setVacancyReserveInput] = useState('150');
  const [utilitiesInput, setUtilitiesInput] = useState('0');
  const [otherExpensesInput, setOtherExpensesInput] = useState('0');
  const [isMobileSummaryOpen, setIsMobileSummaryOpen] = useState(false);

  const parseNumber = (value: string) => Number(value.replace(/[^\d.]/g, '')) || 0;
  const formatNumber = (value: string) => numberFormatter.format(parseNumber(value));

  const purchasePrice = parseNumber(purchasePriceInput);
  const downPayment = parseNumber(downPaymentInput);
  const interestRate = parseNumber(interestRateInput);
  const loanTermYears = Math.max(parseNumber(loanTermInput), 1);
  const closingCosts = parseNumber(closingCostsInput);
  const monthlyRent = parseNumber(monthlyRentInput);
  const otherMonthlyIncome = parseNumber(otherMonthlyIncomeInput);
  const annualPropertyTaxes = parseNumber(propertyTaxesInput);
  const annualInsurance = parseNumber(insuranceInput);
  const monthlyHoaDues = parseNumber(hoaDuesInput);
  const propertyManagement = parseNumber(propertyManagementInput);
  const maintenanceReserve = parseNumber(maintenanceReserveInput);
  const vacancyReserve = parseNumber(vacancyReserveInput);
  const utilities = parseNumber(utilitiesInput);
  const otherExpenses = parseNumber(otherExpensesInput);

  const loanAmount = Math.max(purchasePrice - downPayment, 0);
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyMortgagePayment =
    loanAmount > 0
      ? monthlyInterestRate > 0
        ? (loanAmount *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
          (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
        : loanAmount / numberOfPayments
      : 0;

  const monthlyGrossIncome = monthlyRent + otherMonthlyIncome;
  const monthlyOperatingExpenses =
    annualPropertyTaxes / 12 +
    annualInsurance / 12 +
    monthlyHoaDues +
    propertyManagement +
    maintenanceReserve +
    vacancyReserve +
    utilities +
    otherExpenses;
  const annualGrossIncome = monthlyGrossIncome * 12;
  const annualOperatingExpenses = monthlyOperatingExpenses * 12;
  const netOperatingIncome = annualGrossIncome - annualOperatingExpenses;
  const monthlyCashFlow = monthlyGrossIncome - monthlyOperatingExpenses - monthlyMortgagePayment;
  const annualCashFlow = monthlyCashFlow * 12;
  const capRate = purchasePrice > 0 ? (netOperatingIncome / purchasePrice) * 100 : 0;
  const cashInvested = downPayment + closingCosts;
  const cashOnCashReturn = cashInvested > 0 ? (annualCashFlow / cashInvested) * 100 : 0;
  const onePercentRuleRatio = purchasePrice > 0 ? (monthlyRent / purchasePrice) * 100 : 0;

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

  const resultDetails = [
    ['Monthly gross income', currencyFormatter.format(monthlyGrossIncome)],
    ['Monthly operating expenses', currencyFormatter.format(monthlyOperatingExpenses)],
    ['Monthly mortgage payment', currencyFormatter.format(monthlyMortgagePayment)],
    ['Net operating income', currencyFormatter.format(netOperatingIncome)],
    ['Cap rate', formatPercent(capRate)],
    ['Cash-on-cash return', formatPercent(cashOnCashReturn)],
    ['Cash invested', currencyFormatter.format(cashInvested)],
    ['1% rule ratio', formatPercent(onePercentRuleRatio)],
    ['Loan amount', currencyFormatter.format(loanAmount)],
  ];

  const mobileResultDetails = resultDetails.filter(([label]) => label !== 'Loan amount');

  return (
    <main className="min-h-screen bg-slate-50 pb-40 text-slate-900 lg:pb-0">
      <div className="mx-auto max-w-[1600px] px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[180px_minmax(0,1fr)_180px]">
          <aside className="hidden xl:block" aria-hidden="true" />

          <div>
            <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                Investment property estimate
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Rental Property Calculator
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Estimate monthly cash flow, net operating income, cap rate, and cash-on-cash return
                before buying an investment property.
              </p>
            </section>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-2xl font-semibold">Estimate inputs</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Adjust the purchase, income, financing, and expense assumptions.
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">Purchase details</h3>
                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                      <MoneyInput
                        label="Purchase price"
                        value={purchasePriceInput}
                        onChange={handleMoneyChange(setPurchasePriceInput)}
                        onBlur={handleMoneyBlur(setPurchasePriceInput)}
                      />
                      <MoneyInput
                        label="Down payment"
                        value={downPaymentInput}
                        onChange={handleMoneyChange(setDownPaymentInput)}
                        onBlur={handleMoneyBlur(setDownPaymentInput)}
                      />
                      <PlainNumberInput
                        label="Interest rate"
                        value={interestRateInput}
                        onChange={(event) => setInterestRateInput(event.target.value)}
                        onBlur={(event) =>
                          setInterestRateInput(`${parseNumber(event.target.value).toFixed(2)}%`)
                        }
                        inputMode="decimal"
                      />
                      <PlainNumberInput
                        label="Loan term in years"
                        value={loanTermInput}
                        onChange={(event) =>
                          setLoanTermInput(event.target.value.replace(/[^\d]/g, ''))
                        }
                        onBlur={(event) =>
                          setLoanTermInput(String(Math.max(parseNumber(event.target.value), 1)))
                        }
                      />
                      <MoneyInput
                        label="Closing costs"
                        value={closingCostsInput}
                        onChange={handleMoneyChange(setClosingCostsInput)}
                        onBlur={handleMoneyBlur(setClosingCostsInput)}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Rental income</h3>
                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                      <MoneyInput
                        label="Monthly rent"
                        value={monthlyRentInput}
                        onChange={handleMoneyChange(setMonthlyRentInput)}
                        onBlur={handleMoneyBlur(setMonthlyRentInput)}
                      />
                      <MoneyInput
                        label="Other monthly income"
                        value={otherMonthlyIncomeInput}
                        onChange={handleMoneyChange(setOtherMonthlyIncomeInput)}
                        onBlur={handleMoneyBlur(setOtherMonthlyIncomeInput)}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Operating expenses</h3>
                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                      <MoneyInput
                        label="Property taxes, annual"
                        value={propertyTaxesInput}
                        onChange={handleMoneyChange(setPropertyTaxesInput)}
                        onBlur={handleMoneyBlur(setPropertyTaxesInput)}
                      />
                      <MoneyInput
                        label="Homeowners insurance, annual"
                        value={insuranceInput}
                        onChange={handleMoneyChange(setInsuranceInput)}
                        onBlur={handleMoneyBlur(setInsuranceInput)}
                      />
                      <MoneyInput
                        label="HOA dues, monthly"
                        value={hoaDuesInput}
                        onChange={handleMoneyChange(setHoaDuesInput)}
                        onBlur={handleMoneyBlur(setHoaDuesInput)}
                      />
                      <MoneyInput
                        label="Property management, monthly"
                        value={propertyManagementInput}
                        onChange={handleMoneyChange(setPropertyManagementInput)}
                        onBlur={handleMoneyBlur(setPropertyManagementInput)}
                      />
                      <MoneyInput
                        label="Maintenance reserve, monthly"
                        value={maintenanceReserveInput}
                        onChange={handleMoneyChange(setMaintenanceReserveInput)}
                        onBlur={handleMoneyBlur(setMaintenanceReserveInput)}
                      />
                      <MoneyInput
                        label="Vacancy reserve, monthly"
                        value={vacancyReserveInput}
                        onChange={handleMoneyChange(setVacancyReserveInput)}
                        onBlur={handleMoneyBlur(setVacancyReserveInput)}
                      />
                      <MoneyInput
                        label="Utilities paid by owner, monthly"
                        value={utilitiesInput}
                        onChange={handleMoneyChange(setUtilitiesInput)}
                        onBlur={handleMoneyBlur(setUtilitiesInput)}
                      />
                      <MoneyInput
                        label="Other monthly expenses"
                        value={otherExpensesInput}
                        onChange={handleMoneyChange(setOtherExpensesInput)}
                        onBlur={handleMoneyBlur(setOtherExpensesInput)}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="hidden rounded-3xl bg-slate-900 p-6 text-white shadow-sm lg:block">
                  <p className="text-sm font-medium text-slate-300">
                    Estimated monthly cash flow
                  </p>
                  <div className="mt-3 text-5xl font-semibold tracking-tight">
                    {currencyFormatter.format(monthlyCashFlow)}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    This is income minus operating expenses and estimated mortgage payment.
                  </p>

                  <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-4">
                    {resultDetails.map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-4 text-sm">
                        <span>{label}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">Investment breakdown</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {resultDetails.map(([label, value]) => (
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
                <h2 className="text-2xl font-semibold">
                  How this rental property calculator works
                </h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    This calculator starts with the purchase price, financing terms, expected rent,
                    and recurring operating expenses. It estimates the loan amount, monthly mortgage
                    payment, gross income, operating expenses, net operating income, cash flow, cap
                    rate, cash-on-cash return, and 1% rule ratio.
                  </p>
                  <p>
                    The mortgage payment uses a standard amortization formula based on loan amount,
                    interest rate, and loan term. Operating expenses are calculated separately from
                    mortgage debt service so you can see both property performance and financing
                    impact.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">What each result means</h2>
                <div className="mt-5 space-y-4 leading-7 text-slate-600">
                  <p>
                    Monthly cash flow is the estimated amount left after monthly income, operating
                    expenses, and mortgage payment are included. Net operating income is annual
                    income minus annual operating expenses before mortgage debt service.
                  </p>
                  <p>
                    Cap rate compares net operating income to purchase price. Cash-on-cash return
                    compares annual pre-tax cash flow to cash invested, including down payment and
                    closing costs. The 1% rule ratio compares monthly rent to purchase price as a
                    quick screening metric.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Example rental property calculation</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    Example: A rental property purchased for $300,000 rents for $3,000 per month.
                    Annual gross rent is $36,000. If estimated annual operating expenses are
                    $12,000, net operating income is $24,000.
                  </p>
                  <p>
                    Dividing $24,000 of NOI by the $300,000 purchase price gives an 8% cap rate.
                    This example does not include mortgage debt service until cash flow is
                    calculated, so the cap rate is not the same as monthly profit after financing.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">What affects rental property cash flow</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    Cash flow can change with rent demand, vacancy, property taxes, insurance,
                    repair needs, HOA dues, property management costs, utilities, financing terms,
                    and local rules. A higher interest rate or larger repair reserve can turn a
                    property that looks strong into a much thinner deal.
                  </p>
                  <p>
                    Use realistic local assumptions whenever possible. Comparable rents, tax
                    records, insurance quotes, inspection findings, and property management quotes
                    can all make the estimate more useful.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">
                  1% rule: useful filter, not a final decision
                </h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    The 1% rule asks whether monthly rent is about 1% of the purchase price. It can
                    help you screen deals quickly, but it does not account for taxes, insurance,
                    repairs, vacancy, financing, property condition, or local landlord rules.
                  </p>
                  <p>
                    A property can miss the 1% rule and still be reasonable in a lower-yield market.
                    Another property can meet the 1% rule and still be risky if expenses or repair
                    needs are high.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold">Rental property calculator limitations</h2>
                <div className="mt-4 space-y-4 leading-7 text-slate-600">
                  <p>
                    This calculator is for informational and planning purposes only and is not
                    financial, tax, legal, lending, or investment advice. It cannot predict rent
                    growth, future repairs, tenant behavior, tax treatment, local rule changes, or
                    the exact terms a lender may offer.
                  </p>
                  <p>
                    Before buying an investment property, review the numbers with qualified
                    professionals and verify property condition, rents, insurance, taxes, financing,
                    and local rental requirements.
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
                      'What is a good cap rate?',
                      'A good cap rate depends on the market, property type, risk, condition, and investor goals. Higher cap rates may suggest stronger income relative to price, but they can also reflect higher risk or weaker growth expectations.',
                    ],
                    [
                      'What is cash-on-cash return?',
                      'Cash-on-cash return compares annual pre-tax cash flow to the cash invested in the deal. It helps estimate the return on your actual cash outlay rather than the full property price.',
                    ],
                    [
                      'Is the 1% rule still useful?',
                      'The 1% rule can be useful as a fast first filter, but it should not be the final decision. Detailed expenses, financing, repairs, vacancy, and local market conditions matter more than a single ratio.',
                    ],
                    [
                      'Should mortgage payments be included in NOI?',
                      'No. Net operating income is calculated before mortgage debt service. Mortgage payments are included when estimating cash flow after financing.',
                    ],
                    [
                      'What expenses should I include for a rental property?',
                      'Common expenses include property taxes, insurance, repairs, maintenance reserves, vacancy allowance, property management, HOA dues, owner-paid utilities, and capital expenditure reserves.',
                    ],
                    [
                      'How much should I budget for vacancy?',
                      'Vacancy assumptions vary by market and property type. Many investors include a monthly or annual reserve based on local vacancy risk, expected tenant turnover, and lease demand.',
                    ],
                    [
                      'Is this calculator financial advice?',
                      'No. This calculator is for informational and planning purposes only and is not financial, tax, legal, lending, or investment advice.',
                    ],
                    [
                      'Can this calculator work for duplexes or small multifamily properties?',
                      'Yes, it can be used for duplexes and small multifamily properties if you enter total property income and total property expenses. For larger or more complex properties, a more detailed underwriting model may be needed.',
                    ],
                  ].map(([question, answer]) => (
                    <div key={question}>
                      <h3 className="text-lg font-semibold">{question}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">Related tools</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ['Mortgage Calculator', '/mortgage-calculator'],
                  ['Buyer Closing Cost Calculator', '/buyer-closing-cost-calculator'],
                  ['Seller Net Proceeds Calculator', '/seller-net-proceeds-calculator'],
                  [
                    'How to Use a Rental Property Calculator to Analyze Deals',
                    '/blog/how-to-use-a-rental-property-calculator-to-analyze-deals',
                  ],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span>{label}</span>
                    <span>-&gt;</span>
                  </a>
                ))}
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
            aria-controls="mobile-rental-cash-flow-details"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-300">
                Estimated monthly cash flow
              </p>
              <div className="mt-1 text-3xl font-semibold tracking-tight">
                {currencyFormatter.format(monthlyCashFlow)}
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
            id="mobile-rental-cash-flow-details"
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileSummaryOpen ? 'mt-4 max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-3 rounded-2xl bg-white/10 p-4">
              {mobileResultDetails.map(([label, value]) => (
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
