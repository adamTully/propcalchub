import AdSlot from '@/components/AdSlot';

export const metadata = {
  title: 'Beginner’s Guide to Buying Your First Rental Property | PropCalcHub',
  description:
    'Learn how first-time investors can evaluate rental properties, estimate cash flow, understand financing, and avoid common beginner mistakes.',
  alternates: {
    canonical: '/blog/beginners-guide-to-buying-your-first-rental-property',
  },
};

export default function BeginnersGuideRentalPropertyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <article className="mx-auto max-w-4xl px-6 py-16">
        <header className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            First rental property
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Beginner’s Guide to Buying Your First Rental Property
          </h1>
          <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              Buying your first rental property can feel exciting and intimidating at the same time.
              The idea is simple: buy a property, rent it out, and keep the difference after the
              bills are paid. The real work is making sure the numbers are realistic before you buy.
            </p>
            <p>
              This guide walks through the core decisions first-time investors should understand:
              financing, rent estimates, operating expenses, cash flow, reserves, and common
              beginner mistakes.
            </p>
          </div>
        </header>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Watch the original video</h2>
          <div className="mt-5 overflow-hidden rounded-2xl bg-slate-950">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/bJx7_1rWC6U"
              title="Beginner’s Guide to Buying Your First Rental Property"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">Video source: Graham Stephan on YouTube</p>
        </section>

        <div className="mt-6 space-y-6">
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">
              Why your first rental property should start with the numbers
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                A rental property is both a place someone lives and a small business. Before you
                think about paint colors or future appreciation, estimate the rent, expenses,
                mortgage payment, reserves, and likely cash flow.
              </p>
              <p>
                The easiest starting point is to use the{' '}
                <a href="/rental-property-calculator" className="font-medium text-blue-600 underline">
                  Rental Property Calculator
                </a>{' '}
                to test a purchase price against realistic rent and expense assumptions.
              </p>
            </div>
          </section>

          <AdSlot slot="2187236714" className="my-10" />

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Understand your financing before you shop</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Financing changes everything. Your down payment, interest rate, loan term, closing
                costs, and lender requirements affect both your upfront cash and your monthly
                payment.
              </p>
              <p>
                Before making offers, use a{' '}
                <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
                  mortgage calculator
                </a>{' '}
                to estimate principal and interest. Then add taxes, insurance, HOA dues, repairs,
                vacancy, and management so the payment does not surprise you later.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Use quick screening metrics carefully</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Rules of thumb such as the 1% rule can help you scan listings quickly, but they
                should not decide whether you buy. A property can look strong by one ratio and still
                have weak cash flow after taxes, insurance, repairs, and financing.
              </p>
              <p>
                Use quick metrics to decide what deserves deeper review, then underwrite the deal
                with line-item expenses and local rent data.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Estimate operating expenses and reserves</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Operating expenses often include property taxes, insurance, maintenance, vacancy
                allowance, property management, HOA dues, owner-paid utilities, and reserves for
                larger future repairs.
              </p>
              <p>
                New investors often underestimate reserves. Even a property that is occupied today
                can need a water heater, appliance replacement, roof repair, or a few weeks of
                vacancy between tenants.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Calculate cash flow before making an offer</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Cash flow is what remains after rent, other income, operating expenses, and mortgage
                payment are included. A property with positive cash flow gives you more room to
                handle surprises. A property with thin or negative cash flow may still fit some
                strategies, but it needs a clearer reason and stronger reserves.
              </p>
              <p>
                Also estimate cash to close. The{' '}
                <a
                  href="/buyer-closing-cost-calculator"
                  className="font-medium text-blue-600 underline"
                >
                  Buyer Closing Cost Calculator
                </a>{' '}
                can help you plan for upfront costs beyond the down payment.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Think long term, not just month one</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Month one matters, but rental investing is a long-term commitment. Think about rent
                growth, tenant demand, property condition, future repairs, local rules, taxes,
                insurance trends, and whether the property can still work if something changes.
              </p>
              <p>
                A conservative first deal is often easier to manage than a deal that only works if
                every assumption is perfect.
              </p>
            </div>
          </section>

          <AdSlot slot="2817792104" className="my-10" />

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Common beginner mistakes to avoid</h2>
            <ul className="mt-5 list-disc space-y-2 pl-6 leading-7 text-slate-600">
              <li>Using seller-provided rent estimates without checking comparable rentals.</li>
              <li>Forgetting vacancy, maintenance, property management, or capital reserves.</li>
              <li>Assuming appreciation will make up for weak monthly numbers.</li>
              <li>Ignoring local landlord rules, insurance costs, or property tax changes.</li>
              <li>Buying before understanding how much cash is needed after closing.</li>
            </ul>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Final thoughts</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Your first rental property does not need to be perfect, but the assumptions should
                be clear. Start with the numbers, verify the local market, and leave enough room for
                repairs, vacancy, and surprises.
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
