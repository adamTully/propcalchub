import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('what-are-closing-costs');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/what-are-closing-costs',
  },
};

export default function WhatAreClosingCostsPage() {
  return <ContentExpansionArticlePage slug="what-are-closing-costs" />;
}
