import {
  SellerDecisionArticlePage,
  getSellerDecisionMetadata,
} from '@/lib/sellerDecisionArticles';

export const metadata = getSellerDecisionMetadata('property-tax-and-hoa-prorations-at-closing');

export default function PropertyTaxAndHoaProrationsAtClosingPage() {
  return <SellerDecisionArticlePage slug="property-tax-and-hoa-prorations-at-closing" />;
}
