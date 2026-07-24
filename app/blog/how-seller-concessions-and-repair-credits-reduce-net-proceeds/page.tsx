import {
  SellerDecisionArticlePage,
  getSellerDecisionMetadata,
} from '@/lib/sellerDecisionArticles';

export const metadata = getSellerDecisionMetadata(
  'how-seller-concessions-and-repair-credits-reduce-net-proceeds',
);

export default function SellerConcessionsAndRepairCreditsPage() {
  return (
    <SellerDecisionArticlePage slug="how-seller-concessions-and-repair-credits-reduce-net-proceeds" />
  );
}
