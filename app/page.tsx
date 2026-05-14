'use client';

import { useEffect } from 'react';

function AdSlot({
  slot,
  className = '',
  minHeight = 'min-h-[90px]',
}: {
  slot: string;
  className?: string;
  minHeight?: string;
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className={`overflow-hidden rounded-2xl bg-white ${minHeight} ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2489602416184279"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

const calculators = [
  {
    label: 'Sell',
    title: 'Seller Net Proceeds Calculator',
    href: '/seller-net-proceeds-calculator',
    description:
      'Estimate how much you may keep after mortgage payoff, commission, transfer taxes, title or attorney fees, concessions, and other seller costs.',
  },
  {
    label: 'Buy',
    title: 'Buyer Closing Cost Calculator',
    href: '/buyer-closing-cost-calculator',
    description:
      'Estimate cash to close by combining your down payment with lender fees, title charges, prepaid expenses, recording fees, inspection costs, and appraisal costs.',
  },
  {
    label: 'Pay',
    title: 'Mortgage Calculator',
    href: '/mortgage-calculator',
    description:
      'Estimate a monthly payment with principal, interest, property taxes, homeowners insurance, and HOA dues in one simple planning view.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Real Estate Calculator Hub
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            PropCalcHub
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Simple real estate calculators for buyers, sellers, and homeowners who want to
            understand the numbers behind a property decision before they rely on a final quote.
          </p>
        </section>

        <div className="mt-10">
          <AdSlot slot="6968136162" minHeight="min-h-[90px]" />
        </div>

        <section className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Available calculators</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Choose the tool that matches your current question. Each calculator includes
                editable fields, explanatory content, and limitations so the estimate is useful even
                before you speak with a lender, agent, attorney, or title company.
              </p>
            </div>
            <a href="/about" className="text-sm font-medium text-blue-600 underline">
              About PropCalcHub
            </a>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {calculators.map((calculator) => (
              <a
                key={calculator.href}
                href={calculator.href}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold">
                  {calculator.label}
                </div>

                <h3 className="text-xl font-semibold">{calculator.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">{calculator.description}</p>

                <div className="mt-6 flex items-center text-sm font-semibold text-slate-900">
                  <span>Open calculator</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">-&gt;</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">What is PropCalcHub?</h2>

          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              PropCalcHub is an independent collection of real estate calculators built to make
              common property decisions easier to understand. Buying, selling, and financing a home
              often involves several numbers that can be hard to compare: sale price, down payment,
              loan amount, commission, title fees, prepaid expenses, taxes, insurance, concessions,
              and monthly payment estimates. PropCalcHub puts those pieces into simple calculators
              so you can form a practical starting estimate.
            </p>

            <p>
              The goal is not to replace professional guidance. Instead, the site helps you prepare
              better questions before you talk with a lender, real estate agent, closing attorney,
              title company, or other professional involved in your transaction. A seller may want
              to know whether a listing price leaves enough room after payoff and selling costs. A
              buyer may want to understand cash to close beyond the down payment. A homeowner may
              want to compare possible mortgage payments before shopping for the next home.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-6 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">How to use these calculators</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Start with the calculator that matches the decision in front of you. If you are
              selling, use the seller net proceeds calculator to subtract mortgage payoff,
              commission, transfer taxes, and seller costs from a possible sale price. If you are
              buying, use the buyer closing cost calculator to estimate down payment plus closing
              costs and prepaid expenses. If you are comparing payment scenarios, use the mortgage
              calculator to estimate principal, interest, taxes, insurance, and HOA dues.
            </p>
            <p>
              Default assumptions are only a starting point. Replace them with your own numbers
              whenever you have them. A loan estimate, seller net sheet, payoff statement, title
              quote, insurance quote, property tax estimate, or written repair credit can all make
              the calculator output more useful. Small changes can matter, especially when a
              transaction includes seller concessions, escrow deposits, local transfer taxes, HOA
              fees, or a different closing date.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <AdSlot slot="1715809480" minHeight="min-h-[250px]" />
        </div>

        <section className="mx-auto mt-6 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Why closing costs and payment estimates vary
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Real estate estimates vary because costs are shaped by location, loan type, contract
              terms, local custom, timing, and provider fees. Transfer taxes may be set at the state
              level in one place and affected by county or city rules in another. Title fees,
              attorney fees, recording fees, escrow requirements, prepaid taxes, and insurance
              premiums can also change from one transaction to the next.
            </p>
            <p>
              Mortgage payment estimates can vary for similar reasons. The loan amount, interest
              rate, loan term, property tax bill, homeowners insurance premium, HOA dues, and escrow
              requirements all affect the monthly number. A useful estimate should show the
              components clearly so you can see what changed, not just a single final total.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-6 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Important disclaimer</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            The calculators on PropCalcHub are for general planning and educational purposes only.
            They are not financial, legal, tax, mortgage, lending, or real estate advice. Actual
            costs may vary based on your lender, closing provider, negotiated contract, local rules,
            property details, and timing. Always confirm final numbers with a qualified professional
            before making financial decisions.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Helpful site links</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
            <a href="/about" className="rounded-full bg-slate-100 px-4 py-2 hover:bg-slate-200">
              About
            </a>
            <a href="/contact" className="rounded-full bg-slate-100 px-4 py-2 hover:bg-slate-200">
              Contact
            </a>
            <a
              href="/privacy-policy"
              className="rounded-full bg-slate-100 px-4 py-2 hover:bg-slate-200"
            >
              Privacy Policy
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
