export const metadata = {
  title: 'Calculator Methodology | PropCalcHub',
  description:
    'Learn how PropCalcHub calculators estimate closing costs, transfer taxes, mortgage payments, net proceeds, and rental property returns.',
  alternates: {
    canonical: '/methodology',
  },
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Transparency</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            How PropCalcHub estimates real estate numbers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            PropCalcHub calculators are designed for planning. They use straightforward formulas,
            editable assumptions, and state-level defaults so users can understand the major moving
            parts before replacing estimates with official quotes.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Core principles</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-600">
            <p>
              The calculators separate major inputs instead of hiding them inside one percentage.
              For sellers, the estimate starts with sale price and subtracts mortgage payoff,
              commission, concessions, transfer taxes, and seller-side fees. For buyers, the estimate
              combines down payment with lender fees, title fees, prepaid expenses, recording fees,
              inspection, and appraisal costs. Mortgage payment estimates use the standard
              amortization formula for principal and interest, then add taxes, insurance, and HOA
              dues.
            </p>
            <p>
              Defaults are intentionally editable. A planning number is useful only when users can
              replace it with real information from a lender, agent, title company, closing attorney,
              insurance quote, tax record, payoff statement, or settlement worksheet.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">State-level fee defaults</h2>
            <p className="mt-4 leading-7 text-slate-600">
              ZIP code inputs are used to identify a state-level estimate. That helps avoid a single
              national default, but it does not capture every county, city, transaction type,
              exemption, local tax tier, or title practice. If a state has known local variation,
              PropCalcHub surfaces a note where possible.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Transfer tax calculations</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Transfer tax estimates are calculated from the sale price when the state-level rule is
              percentage-based or charged per $100, $500, or $1,000 of value. Some states are shown
              as no transfer tax in the planning rules, while others may still have local charges or
              negotiated fees that should be verified before closing.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Limitations</h2>
          <p className="mt-4 leading-7 text-slate-600">
            PropCalcHub does not generate a Loan Estimate, Closing Disclosure, seller settlement
            statement, legal opinion, tax opinion, appraisal, or lending decision. The calculators do
            not know every contract term, local recording office rule, tax proration, HOA fee,
            payoff condition, title exception, insurance premium, interest lock, or escrow
            requirement. Treat every result as a starting estimate and confirm final numbers with
            the professionals involved in the transaction.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Related calculators and references</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href="/seller-net-proceeds-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Seller Net Proceeds Calculator</a>
            <a href="/buyer-closing-cost-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Buyer Closing Cost Calculator</a>
            <a href="/mortgage-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Mortgage Calculator</a>
            <a href="/transfer-taxes-by-state" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Transfer Taxes by State</a>
          </div>
        </section>
      </div>
    </main>
  );
}
