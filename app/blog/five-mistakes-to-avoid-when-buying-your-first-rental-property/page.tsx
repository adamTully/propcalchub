import AdSlot from '@/components/AdSlot';

export const metadata = {
  title: 'Five Mistakes to Avoid When Buying Your First Rental Property | PropCalcHub',
  description:
    'Learn common mistakes first-time rental property investors make, including underestimating expenses, overpaying, skipping due diligence, and ignoring cash flow.',
  alternates: {
    canonical: '/blog/five-mistakes-to-avoid-when-buying-your-first-rental-property',
  },
};

export default function FirstRentalMistakesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <article className="mx-auto max-w-4xl px-6 py-16">
        <header className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            Rental mistakes
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Five Mistakes to Avoid When Buying Your First Rental Property
          </h1>
          <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              A first rental property can be a strong learning experience, but small assumptions can
              become expensive when real money is involved. The biggest beginner mistakes usually
              come from overconfidence in rent, underestimating costs, or skipping due diligence.
            </p>
            <p>
              This guide covers five common mistakes and how to avoid them before you make an offer.
            </p>
          </div>
        </header>

        <div className="mt-6 space-y-6">
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Mistake 1: Underestimating expenses</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Rent is only the top line. Property taxes, insurance, maintenance, vacancy,
                management, HOA dues, utilities, and capital repairs can all reduce the amount left
                over each month.
              </p>
              <p>
                Before buying, use the{' '}
                <a href="/rental-property-calculator" className="font-medium text-blue-600 underline">
                  Rental Property Calculator
                </a>{' '}
                to enter line-item expenses rather than relying on a rough guess.
              </p>
            </div>
          </section>

          <AdSlot slot="2187236714" className="my-10" />

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">
              Mistake 2: Overpaying because the rent sounds good
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                A high rent number can make a deal look better than it is. If the purchase price is
                too high, taxes are rising, or repairs are overdue, the property may still produce
                weak returns.
              </p>
              <p>
                Compare rent to similar properties, calculate cap rate and cash-on-cash return, and
                stress test the deal with lower rent or higher expenses.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Mistake 3: Skipping due diligence</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Due diligence means verifying the assumptions before you close. Review leases,
                deposits, rent history, property condition, inspection results, insurance quotes,
                tax records, HOA rules, and local rental requirements.
              </p>
              <p>
                A calculator can organize the numbers, but it cannot inspect the property or verify
                that the seller's assumptions are accurate.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">
              Mistake 4: Not budgeting for vacancy and repairs
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Even good rentals can sit vacant between tenants. Repairs also arrive unevenly: a
                quiet year can be followed by a major appliance, plumbing, HVAC, or roof expense.
              </p>
              <p>
                Build reserves into the deal from the beginning. A property that only works with no
                vacancy and no repairs is usually more fragile than it looks.
              </p>
            </div>
          </section>

          <AdSlot slot="2817792104" className="my-10" />

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Mistake 5: Having no exit strategy</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Before buying, think about what you would do if the property underperforms. Could
                you hold it with lower rent? Sell it without losing money? Refinance later? Move in?
                Convert the strategy?
              </p>
              <p>
                The answer does not need to be perfect, but having a plan helps you avoid being
                trapped by one optimistic scenario.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">How to avoid these mistakes</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Start with conservative numbers. Estimate the payment with the{' '}
                <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
                  Mortgage Calculator
                </a>
                , estimate cash needed with the{' '}
                <a
                  href="/buyer-closing-cost-calculator"
                  className="font-medium text-blue-600 underline"
                >
                  Buyer Closing Cost Calculator
                </a>
                , and compare several rent and expense scenarios.
              </p>
              <p>
                Then verify the property itself. Inspections, lease review, insurance quotes, tax
                research, and local rental rules are part of the deal, not side details.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Final thoughts</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                The best way to avoid beginner mistakes is to slow the deal down long enough to
                check the assumptions. Rent, expenses, financing, condition, reserves, and exit
                strategy all matter.
              </p>
              <p>
                This article is for informational and planning purposes only and is not financial,
                tax, legal, lending, real estate, or investment advice.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
