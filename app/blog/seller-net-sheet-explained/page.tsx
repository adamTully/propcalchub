import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('seller-net-sheet-explained');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/seller-net-sheet-explained',
  },
};

export default function SellerNetSheetExplainedPage() {
  return <ContentExpansionArticlePage slug="seller-net-sheet-explained" />;
}
