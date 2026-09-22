import { buyerDecisionArticles } from '@/lib/buyerDecisionArticles';
import { mortgageDecisionArticles } from '@/lib/mortgageDecisionArticles';
import { sellerDecisionArticles } from '@/lib/sellerDecisionArticles';

export const metadata = {
  title: 'Real Estate Articles | PropCalcHub',
  description:
    'Helpful real estate articles about calculators, closing costs, mortgage payments, home buying, home selling, and rental property analysis.',
  alternates: {
    canonical: '/blog',
  },
};

const groups = [
  {
    title: 'Mortgage',
    articles: [
      ...mortgageDecisionArticles.map((article) => ({
        slug: article.slug,
        cluster: 'Mortgage',
        title: article.title,
        description: article.description,
      })),
    ],
  },
  {
    title: 'Buyer Closing Costs',
    articles: [
      ...buyerDecisionArticles.map((article) => ({
        slug: article.slug,
        cluster: 'Buyer Closing Costs',
        title: article.title,
        description: article.description,
      })),
    ],
  },
  {
    title: 'Seller Net Proceeds',
    articles: [
      ...sellerDecisionArticles.map((article) => ({
        slug: article.slug,
        cluster: 'Seller Net Proceeds',
        title: article.title,
        description: article.description,
      })),
    ],
  },
];

function ArticleCard({
  href,
  category,
  title,
  description,
}: {
  href: string;
  category: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
        {category}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6 flex items-center text-sm font-semibold text-slate-900">
        <span>Read article</span>
        <span className="ml-2 transition-transform group-hover:translate-x-1">-&gt;</span>
      </div>
    </a>
  );
}

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

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <section key={group.title}>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Content cluster
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">{group.title}</h2>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.articles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    category={article.cluster}
                    title={article.title}
                    description={article.description}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
