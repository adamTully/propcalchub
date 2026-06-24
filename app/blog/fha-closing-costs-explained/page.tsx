import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('fha-closing-costs-explained');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/fha-closing-costs-explained',
  },
};

export default function FhaClosingCostsExplainedPage() {
  return <ContentExpansionArticlePage slug="fha-closing-costs-explained" />;
}
