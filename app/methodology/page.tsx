import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculator Methodology and Sources | PropCalcHub',
  description:
    'Review the formulas, source standards, update process, state-level assumptions, and limitations behind PropCalcHub real estate calculators.',
  alternates: { canonical: '/methodology' },
};

const sources = [
  {
    name: 'Consumer Financial Protection Bureau: Loan Estimate',
    href: 'https://www.consumerfinance.gov/owning-a-home/loan-estimate/',
    use: 'Loan costs, prepaid expenses, escrow concepts, and terminology used in buyer estimates.',
  },
  {
    name: 'Consumer Financial Protection Bureau: Closing Disclosure',
    href: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/',
    use: 'Final closing-cost categories and the distinction between an estimate and a closing document.',
  },
  {
    name: 'HUD: Buying a Home',
    href: 'https://www.hud.gov/helping-americans/buying-a-home',
    use: 'General homebuying and FHA-oriented educational context.',
  },
  {
    name: 'IRS Publication 523',
    href: 'https://www.irs.gov/publications/p523',
    use: 'Home-sale tax terminology. PropCalcHub does not calculate a user’s taxable gain.',
  },
  {
    name: 'State and local revenue or recording authorities',
    href: '/transfer-taxes-by-state',
    use: 'Transfer-tax planning defaults. Local rules, exemptions, tiers, and payer customs require direct verification.',
  },
];

const formulaRows = [
  ['Seller net proceeds', 'Sale price − mortgage payoff − commission − concessions − transfer taxes − seller fees'],
  ['Buyer cash to close', 'Down payment + lender/title/recording costs + prepaid expenses + other buyer costs − credits'],
  ['Loan principal', 'Home price − down payment'],
  ['Monthly principal and interest', 'Standard fixed-rate amortization using principal, monthly interest rate, and total payment count'],
  ['Rental NOI', 'Gross scheduled rent − vacancy allowance − operating expenses; debt service is excluded'],
  ['Monthly rental cash flow', 'Rental income − operating expenses − financing payments'],
  ['Cap rate', 'Annual net operating income ÷ purchase price'],
  ['Cash-on-cash return', 'Annual pre-tax cash flow ÷ initial cash invested'],
];

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Transparency</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Calculator methodology, assumptions, and sources
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PropCalcHub provides planning estimates, not quotes or transaction documents. This page
            explains what the calculators do, where the starting assumptions come from, and which
            values users should replace with property-specific information.
          </p>
          <p className="mt-4 text-sm text-slate-500">Methodology page reviewed September 22, 2026.</p>
        </header>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Formula reference</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Results are calculated from user inputs and editable defaults. Rounding can cause small
            differences between the displayed components and professional closing documents.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr><th className="px-4 py-3 font-semibold">Result</th><th className="px-4 py-3 font-semibold">Planning formula</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
                {formulaRows.map(([result, formula]) => (
                  <tr key={result}><th scope="row" className="px-4 py-3 font-medium text-slate-900">{result}</th><td className="px-4 py-3">{formula}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Editable assumptions</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Defaults are starting points, not predictions. Replace them with a Loan Estimate,
              Closing Disclosure, payoff statement, purchase contract, title or attorney quote,
              insurance quote, tax record, HOA statement, inspection estimate, or property manager
              budget whenever one is available.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Location handling</h2>
            <p className="mt-4 leading-7 text-slate-600">
              ZIP code is used only to select a state-level planning rule. It cannot reliably infer
              county, city, deed type, exemption, local surcharge, negotiated payer, title custom,
              or closing date. A local professional or government office remains the authoritative
              source for a specific transaction.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Source standards</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The site prefers government agencies, regulators, and primary program documentation.
            General educational sources are used for context only. A cited source does not imply
            endorsement of PropCalcHub or confirm that a default applies to a particular property.
          </p>
          <ul className="mt-6 space-y-4">
            {sources.map((source) => (
              <li key={source.name} className="rounded-2xl border border-slate-200 p-5">
                <a className="font-semibold text-blue-700 underline" href={source.href}>{source.name}</a>
                <p className="mt-2 text-sm leading-6 text-slate-600">{source.use}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Review and change controls</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600">
              <li>Material formula or default changes are reviewed before deployment.</li>
              <li>State rules are treated as planning data and should be rechecked against current state or local sources.</li>
              <li>Articles that cannot meet the site’s sourcing and decision-support standard are not kept in the public library.</li>
              <li>Corrections are applied across calculators, guides, and explanatory examples where the same assumption appears.</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">Known limitations</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600">
              <li>No credit, underwriting, appraisal, tax, legal, or title analysis is performed.</li>
              <li>Variable-rate loans, unusual payment structures, and transaction-specific tax treatment may require separate calculations.</li>
              <li>Rental projections do not predict rent growth, appreciation, repairs, vacancy, financing changes, or investment returns.</li>
              <li>Results are not a Loan Estimate, Closing Disclosure, settlement statement, net sheet, or professional opinion.</li>
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Use a calculator</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href="/seller-net-proceeds-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Seller Net Proceeds Calculator</a>
            <a href="/buyer-closing-cost-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Buyer Closing Cost Calculator</a>
            <a href="/mortgage-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Mortgage Calculator</a>
            <a href="/rental-property-calculator" className="rounded-2xl border border-slate-200 px-4 py-3 font-medium hover:bg-slate-50">Rental Property Calculator</a>
          </div>
        </section>
      </div>
    </main>
  );
}
