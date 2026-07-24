import {
  MortgageDecisionArticlePage,
  getMortgageDecisionMetadata,
} from '@/lib/mortgageDecisionArticles';

export const metadata = getMortgageDecisionMetadata('mortgage-points-vs-lender-credits');

export default function MortgagePointsVsLenderCreditsPage() {
  return <MortgageDecisionArticlePage slug="mortgage-points-vs-lender-credits" />;
}
