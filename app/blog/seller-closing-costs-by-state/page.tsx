import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('seller-closing-costs-by-state');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/seller-closing-costs-by-state',
  },
};

export default function SellerClosingCostsByStatePage() {
  return <ContentExpansionArticlePage slug="seller-closing-costs-by-state" />;
}
