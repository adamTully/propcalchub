import { BuyerDecisionArticlePage, getBuyerDecisionMetadata } from '@/lib/buyerDecisionArticles';

export const metadata = getBuyerDecisionMetadata('prepaid-costs-and-escrow-deposits-explained');

export default function PrepaidCostsAndEscrowDepositsExplainedPage() {
  return <BuyerDecisionArticlePage slug="prepaid-costs-and-escrow-deposits-explained" />;
}
