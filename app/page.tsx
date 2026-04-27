export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* HERO */}
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Real Estate Calculators
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            PropCalcHub
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Simple, accurate real estate calculators to help buyers, sellers, and homeowners make
            better financial decisions.
          </p>
        </section>

        {/* TOP AD */}
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-400">
          Advertisement
        </div>

        {/* CALCULATOR CARDS */}
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="/seller-net-proceeds-calculator"
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl">
              🏠
            </div>

            <h2 className="text-xl font-semibold">Seller Net Proceeds Calculator</h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Estimate how much you’ll walk away with after selling your home, including mortgage
              payoff, commissions, closing costs, and other seller expenses.
            </p>

            <div className="mt-6 flex items-center text-sm font-semibold text-slate-900">
              <span>Open calculator</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>

          <a
            href="/buyer-closing-cost-calculator"
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl">
              🔑
            </div>

            <h2 className="text-xl font-semibold">Buyer Closing Cost Calculator</h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Estimate your cash to close, including down payment, lender fees, title fees, prepaid
              expenses, escrow reserves, and other buyer costs.
            </p>

            <div className="mt-6 flex items-center text-sm font-semibold text-slate-900">
              <span>Open calculator</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>
        </section>

        {/* MID AD */}
        <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-400">
          Advertisement
        </div>

        {/* SEO CONTENT */}
        <section className="mx-auto mt-14 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Free real estate calculators for smarter decisions</h2>

          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              PropCalcHub helps simplify the numbers behind buying, selling, and owning real
              estate. Whether you are preparing to sell a home, estimating buyer closing costs, or
              planning your next move, our calculators are built to give you fast, practical
              estimates.
            </p>

            <p>
              Start with one of the calculators above, enter a few basic details, and get a clearer
              picture of your potential costs, proceeds, or cash needed at closing.
            </p>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">More calculators coming soon</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            We’re building additional tools for mortgage payments, affordability, refinance
            decisions, rent vs. buy comparisons, and more.
          </p>
        </section>
      </div>
    </main>
  );
}