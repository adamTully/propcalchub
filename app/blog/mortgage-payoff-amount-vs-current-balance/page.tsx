import {
  SellerDecisionArticlePage,
  getSellerDecisionMetadata,
} from '@/lib/sellerDecisionArticles';

export const metadata = getSellerDecisionMetadata('mortgage-payoff-amount-vs-current-balance');

export default function MortgagePayoffAmountVsCurrentBalancePage() {
  return <SellerDecisionArticlePage slug="mortgage-payoff-amount-vs-current-balance" />;
}
