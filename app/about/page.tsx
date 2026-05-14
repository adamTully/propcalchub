export const metadata = {
  title: 'About | PropCalcHub',
  description:
    'Learn about PropCalcHub, an independent real estate calculator hub built to help buyers and sellers estimate common property costs.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            About PropCalcHub
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Real estate calculators for practical planning
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            PropCalcHub is an independent real estate calculator hub built to help people estimate
            common property costs before they rely on final transaction documents.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="max-w-3xl space-y-4 leading-7 text-slate-600">
            <p>
              Buying or selling a home can involve a lot of moving numbers. A seller might know the
              likely sale price but still need to subtract mortgage payoff, agent commission,
              transfer taxes, title or attorney fees, recording fees, repair credits, and seller
              concessions. A buyer might know the down payment but still need to estimate lender
              fees, title charges, prepaid expenses, insurance, taxes, inspections, and appraisal
              costs. A homeowner comparing the next move may need a simple monthly payment estimate
              before deciding whether a property or price range is realistic.
            </p>
            <p>
              PropCalcHub exists to make those estimates easier to organize. The calculators are
              intentionally simple: enter the major numbers, review the assumptions, adjust anything
              you already know, and use the result as a planning range. The goal is not to make a
              real estate decision for you. The goal is to help you understand which numbers drive
              the estimate so you can have a better conversation with the professionals involved in
              your transaction.
            </p>
            <p>
              The site is designed for home buyers, home sellers, and homeowners comparing
              scenarios. Buyers can use the buyer closing cost calculator to estimate cash to close
              and see why the down payment is only one part of the total amount needed. Sellers can
              use the seller net proceeds calculator to estimate what may remain after payoff and
              selling costs. Homeowners can use the mortgage calculator to compare payment scenarios
              using home price, down payment, interest rate, taxes, insurance, and HOA dues.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Why estimates are not final numbers</h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-7 text-slate-600">
            <p>
              Real estate costs can vary by state, county, city, lender, title company, closing
              attorney, property type, loan program, contract terms, and timing. A transfer tax may
              be different in one state than another. A title company may quote different settlement
              fees than a closing attorney. A lender may require escrow reserves, prepaid interest,
              or insurance payments that depend on the exact closing date. Seller credits and repair
              concessions can also change the final cash needed or net proceeds.
            </p>
            <p>
              That is why every calculator on PropCalcHub is built around editable assumptions. The
              default values are meant to help you start quickly, but the most useful estimate comes
              from replacing those assumptions with numbers from your loan estimate, payoff
              statement, title quote, property tax bill, insurance quote, purchase agreement, or
              seller net sheet.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Calculator library</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <a
              href="/seller-net-proceeds-calculator"
              className="rounded-2xl border border-slate-200 p-5 text-sm leading-6 hover:bg-slate-50"
            >
              <h3 className="font-semibold text-slate-900">Seller Net Proceeds Calculator</h3>
              <p className="mt-2 text-slate-600">
                Estimate seller proceeds after mortgage payoff, commission, taxes, and closing
                costs.
              </p>
            </a>
            <a
              href="/buyer-closing-cost-calculator"
              className="rounded-2xl border border-slate-200 p-5 text-sm leading-6 hover:bg-slate-50"
            >
              <h3 className="font-semibold text-slate-900">Buyer Closing Cost Calculator</h3>
              <p className="mt-2 text-slate-600">
                Estimate down payment, buyer closing costs, prepaid expenses, and cash to close.
              </p>
            </a>
            <a
              href="/mortgage-calculator"
              className="rounded-2xl border border-slate-200 p-5 text-sm leading-6 hover:bg-slate-50"
            >
              <h3 className="font-semibold text-slate-900">Mortgage Calculator</h3>
              <p className="mt-2 text-slate-600">
                Estimate monthly principal, interest, taxes, insurance, and HOA dues.
              </p>
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Informational use disclaimer</h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-7 text-slate-600">
            <p>
              PropCalcHub is for informational and educational purposes only. It is not financial,
              legal, tax, lending, mortgage, or real estate advice. The calculators do not know every
              detail of your property, loan, contract, local fees, tax treatment, or closing
              provider.
            </p>
            <p>
              Before making financial decisions, confirm your numbers with a lender, real estate
              agent, closing attorney, title company, tax professional, financial professional, or
              another qualified expert who can review the details of your specific situation.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
