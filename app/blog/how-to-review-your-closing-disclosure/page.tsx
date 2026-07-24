import { BuyerDecisionArticlePage, getBuyerDecisionMetadata } from '@/lib/buyerDecisionArticles';

export const metadata = getBuyerDecisionMetadata('how-to-review-your-closing-disclosure');

export default function HowToReviewYourClosingDisclosurePage() {
  return <BuyerDecisionArticlePage slug="how-to-review-your-closing-disclosure" />;
}
