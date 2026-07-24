import {
  MortgageDecisionArticlePage,
  getMortgageDecisionMetadata,
} from '@/lib/mortgageDecisionArticles';

export const metadata = getMortgageDecisionMetadata('why-your-mortgage-payment-went-up');

export default function WhyYourMortgagePaymentWentUpPage() {
  return <MortgageDecisionArticlePage slug="why-your-mortgage-payment-went-up" />;
}
