import Calculator from './Calculator';

export const metadata = {
  title: 'Seller Net Proceeds Calculator | PropCalcHub',
  description:
    'Estimate how much you will walk away with after selling your home. Includes closing costs, commission, and more.',
  alternates: {
    canonical: '/seller-net-proceeds-calculator',
  },
};

export default function Page() {
  return <Calculator />;
}
