import { BuyerDecisionArticlePage, getBuyerDecisionMetadata } from '@/lib/buyerDecisionArticles';

export const metadata = getBuyerDecisionMetadata(
  'seller-credits-and-lender-credits-lower-cash-to-close'
);

export default function SellerCreditsAndLenderCreditsLowerCashToClosePage() {
  return <BuyerDecisionArticlePage slug="seller-credits-and-lender-credits-lower-cash-to-close" />;
}
