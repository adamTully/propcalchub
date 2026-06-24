import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('how-much-does-it-cost-to-sell-a-house');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/how-much-does-it-cost-to-sell-a-house',
  },
};

export default function HowMuchDoesItCostToSellAHousePage() {
  return <ContentExpansionArticlePage slug="how-much-does-it-cost-to-sell-a-house" />;
}
