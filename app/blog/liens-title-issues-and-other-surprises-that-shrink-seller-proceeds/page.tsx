import {
  SellerDecisionArticlePage,
  getSellerDecisionMetadata,
} from '@/lib/sellerDecisionArticles';

export const metadata = getSellerDecisionMetadata(
  'liens-title-issues-and-other-surprises-that-shrink-seller-proceeds',
);

export default function LiensTitleIssuesAndOtherSurprisesPage() {
  return (
    <SellerDecisionArticlePage slug="liens-title-issues-and-other-surprises-that-shrink-seller-proceeds" />
  );
}
