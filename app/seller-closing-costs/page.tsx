export const metadata = {
  title: 'Seller Closing Costs Guide | PropCalcHub',
  description:
    'Learn which costs reduce seller net proceeds, including commission, mortgage payoff, transfer taxes, concessions, and settlement fees.',
  alternates: {
    canonical: '/seller-closing-costs',
  },
};

export default function SellerClosingCostsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Seller guide</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Seller closing costs and net proceeds
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The amount a seller keeps is usually much lower than the sale price. Net proceeds are
            what remains after paying off loans and subtracting commission, taxes, concessions, and
            closing costs.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Common seller costs</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-600">
            <p>
              Seller costs commonly include real estate agent commission, mortgage payoff, transfer
              taxes, attorney or title fees, recording fees, seller concessions, repair credits, HOA
              document fees, lien payoffs, and prorated expenses. Some of these costs are predictable
              early in the process. Others change after inspections, negotiations, payoff statements,
              or title review.
            </p>
            <p>
              Commission and payoff are often the largest line items. Transfer taxes and settlement
              charges can also matter, especially in higher-tax states or cities. If a seller agrees
              to pay part of the buyer's closing costs, that credit directly reduces proceeds.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Example seller net sheet</h2>
          <p className="mt-4 leading-7 text-slate-600">
            A homeowner selling for $500,000 with a $390,000 payoff starts with $110,000 of gross
            equity before sale expenses. A 6% commission is $30,000. If transfer taxes, attorney or
            title fees, recording charges, and other seller costs are about $6,000, the rough net is
            $500,000 minus $390,000 minus $30,000 minus $6,000, or about $74,000. Concessions,
            repair credits, prorations, or payoff changes would reduce or increase that number.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">How to make the estimate better</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-slate-600">
            <li>Use a realistic sale price, not only the number you hope to receive.</li>
            <li>Request a current payoff quote if closing is likely soon.</li>
            <li>Enter the commission rate from your listing agreement or offer terms.</li>
            <li>Ask whether transfer taxes are state-only or include city and county taxes.</li>
            <li>Add seller concessions, credits, HOA fees, or liens before relying on the result.</li>
          </ol>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Useful next steps</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href="/seller-net-proceeds-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Use the seller calculator</a>
            <a href="/transfer-taxes-by-state" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Review transfer taxes by state</a>
            <a href="/methodology" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Read the calculator methodology</a>
            <a href="/buyer-closing-cost-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Buying next? Estimate cash to close</a>
          </div>
        </section>
      </div>
    </main>
  );
}
