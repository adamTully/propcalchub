import {
  MortgageDecisionArticlePage,
  getMortgageDecisionMetadata,
} from '@/lib/mortgageDecisionArticles';

export const metadata = getMortgageDecisionMetadata('how-to-compare-loan-estimates');

export default function HowToCompareLoanEstimatesPage() {
  return <MortgageDecisionArticlePage slug="how-to-compare-loan-estimates" />;
}
