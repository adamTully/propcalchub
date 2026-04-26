import BuyerClosingCostCalculator from './calculator';

export const metadata = {
  title: 'Buyer Closing Cost Calculator | PropCalcHub',
  description:
    'Estimate buyer closing costs, cash to close, down payment, lender fees, title fees, prepaid expenses, and more.',
};

export default function Page() {
  return <BuyerClosingCostCalculator />;
}