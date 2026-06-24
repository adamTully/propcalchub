import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('closing-costs-by-state');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/closing-costs-by-state',
  },
};

export default function ClosingCostsByStatePage() {
  return <ContentExpansionArticlePage slug="closing-costs-by-state" />;
}
