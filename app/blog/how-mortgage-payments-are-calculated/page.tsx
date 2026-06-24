import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('how-mortgage-payments-are-calculated');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/how-mortgage-payments-are-calculated',
  },
};

export default function HowMortgagePaymentsAreCalculatedPage() {
  return <ContentExpansionArticlePage slug="how-mortgage-payments-are-calculated" />;
}
