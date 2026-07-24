import { BuyerDecisionArticlePage, getBuyerDecisionMetadata } from '@/lib/buyerDecisionArticles';

export const metadata = getBuyerDecisionMetadata('earnest-money-vs-down-payment-vs-closing-costs');

export default function EarnestMoneyVsDownPaymentVsClosingCostsPage() {
  return <BuyerDecisionArticlePage slug="earnest-money-vs-down-payment-vs-closing-costs" />;
}
