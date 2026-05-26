import AdSlot from '@/components/AdSlot';

export const metadata = {
  title: 'House Hacking with FHA Loans: Buy a Duplex with 3.5% Down | PropCalcHub',
  description:
    'Learn how house hacking can help first-time investors buy a duplex, live in one unit, rent the other, and estimate the numbers before buying.',
  alternates: {
    canonical: '/blog/house-hacking-with-fha-loans-buy-a-duplex-with-3-5-down',
  },
};

export default function HouseHackingFhaLoansPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <article className="mx-auto max-w-4xl px-6 py-16">
        <header className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            House hacking
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            House Hacking with FHA Loans: How to Buy a Duplex with 3.5% Down
          </h1>
          <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              House hacking is a simple idea: buy a property, live in part of it, and rent out the
              rest. For some buyers, a small multifamily property such as a duplex can make the
              numbers more approachable because rental income helps offset the housing payment.
            </p>
            <p>
              This guide explains how to think about FHA-financed house hacking, how to estimate the
              rent from the other unit, and what expenses to include before you buy.
            </p>
          </div>
        </header>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Watch the original video</h2>
          <div className="mt-5 overflow-hidden rounded-2xl bg-slate-950">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/PREK0tEazlE"
              title="House Hacking with FHA Loans"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">Video source: Real Estate Rookie on YouTube</p>
        </section>

        <div className="mt-6 space-y-6">
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">What house hacking means</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                House hacking usually means using your primary residence as both a home and a
                partial investment property. You might live in one side of a duplex and rent the
                other side, or live in one unit of a small multifamily property.
              </p>
              <p>
                The goal is not just to buy with a smaller down payment. The goal is to understand
                whether the rental income meaningfully offsets your monthly housing cost.
              </p>
            </div>
          </section>

          <AdSlot slot="2187236714" className="my-10" />

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">
              Why FHA loans can make house hacking easier
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                FHA loans may allow eligible owner-occupant buyers to purchase a qualifying property
                with a low down payment. That can make a duplex or small multifamily property feel
                more accessible than a traditional investment loan.
              </p>
              <p>
                Loan rules, occupancy requirements, mortgage insurance, and property standards
                matter. Estimate the monthly payment with a{' '}
                <a href="/mortgage-calculator" className="font-medium text-blue-600 underline">
                  mortgage calculator
                </a>{' '}
                and confirm loan details with a qualified lender.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">How to estimate rent from the other unit</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Rent estimates should come from comparable rentals, not wishful thinking. Compare
                similar unit size, bedroom count, condition, location, parking, laundry, and lease
                terms.
              </p>
              <p>
                If one unit is vacant, be conservative. If it is occupied, review the current lease,
                rent amount, deposit, renewal terms, and whether the rent is below or above market.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Expenses to include before you buy</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                Include principal and interest, property taxes, insurance, mortgage insurance, HOA
                dues if applicable, repairs, maintenance reserves, vacancy, utilities paid by the
                owner, and larger capital expenses.
              </p>
              <p>
                Also plan for the upfront cash. The{' '}
                <a
                  href="/buyer-closing-cost-calculator"
                  className="font-medium text-blue-600 underline"
                >
                  Buyer Closing Cost Calculator
                </a>{' '}
                can help estimate cash needed beyond the down payment.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">How to calculate monthly cash flow</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                For a house hack, cash flow is often framed as your net housing cost. Start with
                your mortgage payment and operating expenses, then subtract the rent from the other
                unit.
              </p>
              <p>
                You can also use the{' '}
                <a href="/rental-property-calculator" className="font-medium text-blue-600 underline">
                  Rental Property Calculator
                </a>{' '}
                by entering total rent and expenses to see how the property performs as a rental.
              </p>
            </div>
          </section>

          <AdSlot slot="2817792104" className="my-10" />

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Risks and limitations of house hacking</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                House hacking can reduce your housing cost, but it also means becoming a landlord
                where you live. Tenant issues, repairs, vacancies, noise, privacy, local rules, and
                financing requirements can all affect the experience.
              </p>
              <p>
                A low down payment can also mean less equity and higher monthly costs. Make sure the
                deal still works if rent is lower than expected or a repair happens early.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">When house hacking makes sense</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                House hacking may make sense when you are comfortable living near tenants, the rent
                meaningfully offsets your payment, the property condition is manageable, and the
                financing terms fit your budget.
              </p>
              <p>
                It may be less attractive if the property needs major repairs, local rental rules
                are restrictive, or the numbers only work with unusually optimistic rent.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Final thoughts</h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              <p>
                FHA house hacking can be a practical way to enter real estate investing, but the
                numbers still need to work. Estimate rent, expenses, reserves, cash to close, and
                monthly payment before deciding whether the property fits your life and budget.
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
