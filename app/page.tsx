export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">PropCalcHub</h1>

        <p className="mt-4 text-lg text-slate-600">
          Simple, accurate real estate calculators to help you make better buying and selling
          decisions.
        </p>

        <div className="mt-10 grid gap-4">
          <a
            href="/seller-net-proceeds-calculator"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:bg-slate-50 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold">Seller Net Proceeds Calculator</h2>
            <p className="mt-2 text-sm text-slate-600">
              Estimate how much you’ll walk away with after selling your home.
            </p>
            <div className="mt-4 flex items-center text-sm font-medium text-slate-900">
              <span>Open calculator</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>

          <a
            href="/buyer-closing-cost-calculator"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:bg-slate-50 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold">Buyer Closing Cost Calculator</h2>
            <p className="mt-2 text-sm text-slate-600">
              Estimate your cash to close, including down payment, lender fees, title fees, and
              prepaid expenses.
            </p>
            <div className="mt-4 flex items-center text-sm font-medium text-slate-900">
              <span>Open calculator</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}