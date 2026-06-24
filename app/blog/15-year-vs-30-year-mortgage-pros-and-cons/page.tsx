import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('15-year-vs-30-year-mortgage-pros-and-cons');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/15-year-vs-30-year-mortgage-pros-and-cons',
  },
};

export default function FifteenYearVsThirtyYearMortgagePage() {
  return <ContentExpansionArticlePage slug="15-year-vs-30-year-mortgage-pros-and-cons" />;
}
