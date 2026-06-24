import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('how-much-equity-do-i-need-to-sell');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/how-much-equity-do-i-need-to-sell',
  },
};

export default function HowMuchEquityDoINeedToSellPage() {
  return <ContentExpansionArticlePage slug="how-much-equity-do-i-need-to-sell" />;
}
