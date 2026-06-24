import { ContentExpansionArticlePage, getContentArticle } from '@/lib/contentExpansionArticles';

const article = getContentArticle('realtor-commissions-explained');

export const metadata = {
  title: `${article.title} | PropCalcHub`,
  description: article.description,
  alternates: {
    canonical: '/blog/realtor-commissions-explained',
  },
};

export default function RealtorCommissionsExplainedPage() {
  return <ContentExpansionArticlePage slug="realtor-commissions-explained" />;
}
