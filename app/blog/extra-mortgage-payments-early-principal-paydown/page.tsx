import {
  MortgageDecisionArticlePage,
  getMortgageDecisionMetadata,
} from '@/lib/mortgageDecisionArticles';

export const metadata = getMortgageDecisionMetadata(
  'extra-mortgage-payments-early-principal-paydown'
);

export default function ExtraMortgagePaymentsEarlyPrincipalPaydownPage() {
  return <MortgageDecisionArticlePage slug="extra-mortgage-payments-early-principal-paydown" />;
}
