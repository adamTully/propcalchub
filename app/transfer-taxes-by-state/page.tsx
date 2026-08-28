import { STATE_FEE_RULES, calculateTransferTax } from '@/lib/real-estate-fee-rules';

export const metadata = {
  title: 'Transfer Taxes by State | PropCalcHub',
  description:
    'Compare state-level real estate transfer tax estimates, common payer assumptions, and planning notes for home buyers and sellers.',
  alternates: {
    canonical: '/transfer-taxes-by-state',
  },
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function describePayer(payer: string) {
  if (payer === 'seller') return 'Seller commonly pays';
  if (payer === 'buyer') return 'Buyer commonly pays';
  if (payer === 'split') return 'Often split or negotiated';
  return 'Negotiable';
}

export default function TransferTaxesByStatePage() {
  const states = Object.values(STATE_FEE_RULES).sort((a, b) =>
    a.stateName.localeCompare(b.stateName),
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            State reference
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Real estate transfer taxes by state
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Transfer taxes can be one of the easiest closing costs to miss because the rate, payer,
            and local add-ons vary by location. This guide turns PropCalcHub's state-level rules
            into a plain-English reference for planning a home sale or purchase.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">How to use this table</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-600">
            <p>
              Start with your state, then compare the planning estimate against your expected sale
              price or purchase price. The sample column shows the estimated transfer tax on a
              $500,000 transaction using the same state-level rules that support the PropCalcHub
              seller calculator. The payer column reflects a general planning assumption, not a
              guaranteed contract rule.
            </p>
            <p>
              Many states, counties, cities, and special districts have separate rules. Some use a
              flat amount, some use a percentage of price, and others charge a set amount per $100,
              $500, or $1,000 of value. Always verify final figures with a closing attorney, escrow
              officer, title company, county recorder, or local tax office before relying on the
              estimate.
            </p>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="border-b border-slate-200 p-6">
            <h2 className="text-2xl font-semibold">State-level transfer tax planning table</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Sample estimates use a $500,000 sale price. Local taxes, exemptions, tiers, and
              negotiated contract terms can change the final amount.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-5 py-3 font-semibold">State</th>
                  <th className="px-5 py-3 font-semibold">Default payer</th>
                  <th className="px-5 py-3 font-semibold">Sample tax on $500,000</th>
                  <th className="px-5 py-3 font-semibold">Planning note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {states.map((rule) => (
                  <tr key={rule.state} className="align-top">
                    <td className="px-5 py-4 font-medium text-slate-900">
                      {rule.stateName} ({rule.state})
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {describePayer(rule.transferTaxPayerDefault)}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {currencyFormatter.format(calculateTransferTax(500000, rule.transferTax))}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {rule.notes || 'Use as a state-level planning estimate and confirm local rules.'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Why the payer can vary</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Transfer tax responsibility can depend on state law, local custom, and the purchase
              agreement. In some markets the seller usually pays. In others, the buyer pays, the tax
              is split, or the parties negotiate the result as part of the offer. A calculator can
              make a reasonable planning assumption, but the signed contract controls the final
              allocation.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Where this shows up</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Sellers often see transfer taxes on a seller net sheet or settlement statement.
              Buyers may see related charges on a Loan Estimate, Closing Disclosure, or title quote.
              If a local transfer tax applies, ask whether it is included in the estimate or listed
              separately from state-level transfer tax.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Use the calculators next</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href="/seller-net-proceeds-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">
              Seller Net Proceeds Calculator
            </a>
            <a href="/buyer-closing-cost-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">
              Buyer Closing Cost Calculator
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
