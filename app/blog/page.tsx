export const metadata = {
  title: 'Real Estate Articles | PropCalcHub',
  description:
    'Helpful real estate articles about calculators, closing costs, mortgage payments, home buying, home selling, and rental property analysis.',
  alternates: {
    canonical: '/blog',
  },
};

const articles = [
  {
    href: '/blog/how-to-use-a-rental-property-calculator-to-analyze-deals',
    category: 'Rental analysis',
    title: 'How to Use a Rental Property Calculator to Analyze Deals',
    description:
      'Learn how investors use rental property calculators to estimate cash flow, cap rate, cash-on-cash return, and deal quality before buying.',
  },
  {
    href: '/blog/beginners-guide-to-buying-your-first-rental-property',
    category: 'First rental property',
    title: 'Beginner’s Guide to Buying Your First Rental Property',
    description:
      'Learn how first-time investors can evaluate rental properties, estimate cash flow, understand financing, and avoid common beginner mistakes.',
  },
  {
    href: '/blog/house-hacking-with-fha-loans-buy-a-duplex-with-3-5-down',
    category: 'House hacking',
    title: 'House Hacking with FHA Loans: How to Buy a Duplex with 3.5% Down',
    description:
      'See how house hacking can help buyers live in one unit, rent the other, and estimate the numbers before buying a duplex.',
  },
  {
    href: '/blog/is-the-housing-market-about-to-crash',
    category: 'Market context',
    title: 'Is the Housing Market About to Crash? How to Think About the Data',
    description:
      'Learn how buyers, sellers, and investors can think about crash headlines, supply, demand, mortgage rates, and local market risk.',
  },
  {
    href: '/blog/five-mistakes-to-avoid-when-buying-your-first-rental-property',
    category: 'Rental mistakes',
    title: 'Five Mistakes to Avoid When Buying Your First Rental Property',
    description:
      'Avoid common first-rental mistakes such as underestimating expenses, overpaying, skipping due diligence, and ignoring reserves.',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            PropCalcHub Guides
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Real Estate Articles
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Educational articles that support PropCalcHub calculators, explain common real estate
            numbers, and help buyers, sellers, homeowners, and investors make better planning
            estimates.
          </p>
        </section>

        <section className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                  {article.category}
                </div>
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p>
                <div className="mt-6 flex items-center text-sm font-semibold text-slate-900">
                  <span>Read article</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">-&gt;</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
