import MortgageCalculator from './Calculator';

export const metadata = {
  title: 'Mortgage Calculator | PropCalcHub',
  description:
    'Estimate your monthly mortgage payment including principal, interest, property taxes, homeowners insurance, and HOA dues.',
  alternates: {
    canonical: '/mortgage-calculator',
  },
};

export default function MortgageCalculatorPage() {
  return <MortgageCalculator />;
}
