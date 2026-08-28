export const metadata = {
  title: 'Closing Costs Guide | PropCalcHub',
  description:
    'Learn what closing costs are, how buyer and seller costs differ, and how to use calculators to estimate real estate transaction expenses.',
  alternates: {
    canonical: '/closing-costs',
  },
};

export default function ClosingCostsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Real estate guide
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Closing costs explained for buyers and sellers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Closing costs are the transaction expenses paid when a property changes hands. They can
            include lender charges, title fees, attorney fees, transfer taxes, recording fees,
            prepaid expenses, seller concessions, payoff charges, and local settlement costs.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">What closing costs include</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-600">
            <p>
              A closing is more than a sale price and a signature. Buyers may need funds for lender
              fees, appraisal fees, title services, prepaid homeowners insurance, prepaid property
              taxes, escrow deposits, recording fees, and their down payment. Sellers may need to
              pay off an existing mortgage, pay real estate commission, cover transfer taxes,
              provide buyer credits, pay title or attorney charges, and handle local recording or
              HOA transfer fees.
            </p>
            <p>
              The exact mix depends on the property, loan type, contract, local custom, and timing.
              A cash buyer will not have the same lender-related fees as a buyer using a mortgage.
              A seller offering repair credits or closing cost concessions will usually walk away
              with less than a seller who does not provide those credits.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Buyer closing costs</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Buyer costs often include lender fees, title fees, appraisal, inspection, recording,
              prepaid interest, insurance, taxes, and escrow reserves. The down payment is separate
              from closing costs, but both are part of the cash needed to close.
            </p>
            <a href="/buyer-closing-cost-calculator" className="mt-5 inline-flex text-sm font-semibold text-blue-600 underline">
              Estimate buyer cash to close
            </a>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Seller closing costs</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Seller costs often include real estate commission, mortgage payoff, transfer taxes,
              attorney or settlement charges, seller concessions, recording fees, and other local
              fees. These expenses reduce the amount the seller keeps.
            </p>
            <a href="/seller-net-proceeds-calculator" className="mt-5 inline-flex text-sm font-semibold text-blue-600 underline">
              Estimate seller net proceeds
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Why estimates vary by location</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-600">
            <p>
              Closing costs vary because state and local rules are not uniform. Transfer taxes may
              be charged by the state, county, city, or a combination of local authorities. Title
              insurance practices, attorney involvement, recording charges, property tax calendars,
              HOA fees, and escrow requirements can also differ from one market to another.
            </p>
            <p>
              PropCalcHub uses state-level defaults to make estimates more useful than a single
              national assumption. Those defaults are still planning inputs. Replace them with
              numbers from your lender, title company, escrow officer, agent, or closing attorney
              when you have a real quote or settlement worksheet.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">A simple way to review an estimate</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-slate-600">
            <li>Separate purchase price, down payment, and closing costs.</li>
            <li>Identify which costs are lender charges, title charges, prepaid expenses, or taxes.</li>
            <li>Check whether seller credits or concessions are included.</li>
            <li>Confirm whether local transfer taxes and recording fees are estimated or quoted.</li>
            <li>Compare the estimate with official documents before making a decision.</li>
          </ol>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Related reference pages</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href="/transfer-taxes-by-state" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Transfer Taxes by State</a>
            <a href="/cash-to-close" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Cash to Close Guide</a>
            <a href="/seller-closing-costs" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Seller Closing Costs Guide</a>
            <a href="/methodology" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Calculator Methodology</a>
          </div>
        </section>
      </div>
    </main>
  );
}
