export const metadata = {
  title: 'Cash to Close Guide | PropCalcHub',
  description:
    'Understand cash to close, how it differs from closing costs, and which buyer costs usually appear before a home purchase closes.',
  alternates: {
    canonical: '/cash-to-close',
  },
};

export default function CashToClosePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Buyer guide</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Cash to close explained
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Cash to close is the estimated amount a buyer needs to bring to settlement. It usually
            includes the down payment plus closing costs, prepaid expenses, escrow deposits, and any
            adjustments or credits shown on the closing documents.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Cash to close is not just the down payment</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-600">
            <p>
              Many buyers focus on the down payment first, but the amount needed at closing is often
              higher. Lender fees, title services, recording fees, appraisal fees, inspections,
              prepaid homeowners insurance, prepaid interest, property tax deposits, and escrow
              reserves can all add to the funds needed to complete the purchase.
            </p>
            <p>
              Seller credits, lender credits, earnest money deposits, and prorations can move the
              number in the other direction. A useful estimate should show the pieces separately so
              you can see whether a change came from the loan, title fees, prepaid expenses, or a
              negotiated credit.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Example cash to close estimate</h2>
          <p className="mt-4 leading-7 text-slate-600">
            A buyer purchasing a $500,000 home with a $100,000 down payment may still need another
            $10,000 to $12,000 for estimated closing costs and prepaid expenses. In that scenario,
            total cash to close may be about $110,000 to $112,000 before accounting for earnest
            money already deposited, seller credits, or lender credits.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">What to verify before closing</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-slate-600">
            <li>Compare your calculator estimate with your lender's Loan Estimate.</li>
            <li>Ask whether taxes, insurance, and escrow reserves are current or placeholders.</li>
            <li>Confirm seller credits and lender credits are shown correctly.</li>
            <li>Review title charges and services you can shop for.</li>
            <li>Use the Closing Disclosure for final figures before wiring money.</li>
          </ol>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Useful next steps</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href="/buyer-closing-cost-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Use the buyer calculator</a>
            <a href="/mortgage-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Estimate the monthly payment</a>
            <a href="/closing-costs" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Read the closing costs guide</a>
            <a href="/methodology" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Read the calculator methodology</a>
          </div>
        </section>
      </div>
    </main>
  );
}
