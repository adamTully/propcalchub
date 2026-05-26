import RentalPropertyCalculator from './Calculator';

export const metadata = {
  title: 'Rental Property Calculator | PropCalcHub',
  description:
    'Estimate rental property cash flow, net operating income, cap rate, cash-on-cash return, and monthly profit before buying an investment property.',
  alternates: {
    canonical: '/rental-property-calculator',
  },
};

export default function RentalPropertyCalculatorPage() {
  return <RentalPropertyCalculator />;
}
