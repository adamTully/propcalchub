import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('how-much-house-can-i-afford');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/how-much-house-can-i-afford',
  },
};

export default function HowMuchHouseCanIAffordPage() {
  return <ContentExpansionArticlePage slug="how-much-house-can-i-afford" />;
}
