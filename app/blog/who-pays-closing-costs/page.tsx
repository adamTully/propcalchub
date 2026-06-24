import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('who-pays-closing-costs');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/who-pays-closing-costs',
  },
};

export default function WhoPaysClosingCostsPage() {
  return <ContentExpansionArticlePage slug="who-pays-closing-costs" />;
}
