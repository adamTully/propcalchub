import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('how-much-cash-do-i-need-to-buy-a-house');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/how-much-cash-do-i-need-to-buy-a-house',
  },
};

export default function HowMuchCashDoINeedToBuyAHousePage() {
  return <ContentExpansionArticlePage slug="how-much-cash-do-i-need-to-buy-a-house" />;
}
