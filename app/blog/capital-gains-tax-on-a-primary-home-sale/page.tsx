import {
  SellerDecisionArticlePage,
  getSellerDecisionMetadata,
} from '@/lib/sellerDecisionArticles';

export const metadata = getSellerDecisionMetadata('capital-gains-tax-on-a-primary-home-sale');

export default function CapitalGainsTaxOnAPrimaryHomeSalePage() {
  return <SellerDecisionArticlePage slug="capital-gains-tax-on-a-primary-home-sale" />;
}
