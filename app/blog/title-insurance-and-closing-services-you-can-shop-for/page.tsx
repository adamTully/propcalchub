import { BuyerDecisionArticlePage, getBuyerDecisionMetadata } from '@/lib/buyerDecisionArticles';

export const metadata = getBuyerDecisionMetadata(
  'title-insurance-and-closing-services-you-can-shop-for'
);

export default function TitleInsuranceAndClosingServicesYouCanShopForPage() {
  return <BuyerDecisionArticlePage slug="title-insurance-and-closing-services-you-can-shop-for" />;
}
