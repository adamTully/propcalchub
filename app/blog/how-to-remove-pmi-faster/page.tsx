import {
  MortgageDecisionArticlePage,
  getMortgageDecisionMetadata,
} from '@/lib/mortgageDecisionArticles';

export const metadata = getMortgageDecisionMetadata('how-to-remove-pmi-faster');

export default function HowToRemovePmiFasterPage() {
  return <MortgageDecisionArticlePage slug="how-to-remove-pmi-faster" />;
}
