import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('what-is-an-amortization-schedule');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/what-is-an-amortization-schedule',
  },
};

export default function WhatIsAnAmortizationSchedulePage() {
  return <ContentExpansionArticlePage slug="what-is-an-amortization-schedule" />;
}
