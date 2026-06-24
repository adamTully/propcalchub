import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('fixed-vs-adjustable-rate-mortgages');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/fixed-vs-adjustable-rate-mortgages',
  },
};

export default function FixedVsAdjustableRateMortgagesPage() {
  return <ContentExpansionArticlePage slug="fixed-vs-adjustable-rate-mortgages" />;
}
