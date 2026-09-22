import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy articles are intentionally consolidated into the stronger calculator and
      // reference experiences while they are being reworked. Keeping explicit redirects
      // preserves useful inbound links without leaving thin, derivative pages published.
      { source: "/blog/how-mortgage-payments-are-calculated", destination: "/mortgage-calculator", permanent: true },
      { source: "/blog/15-year-vs-30-year-mortgage-pros-and-cons", destination: "/mortgage-calculator", permanent: true },
      { source: "/blog/what-is-an-amortization-schedule", destination: "/mortgage-calculator", permanent: true },
      { source: "/blog/how-much-house-can-i-afford", destination: "/mortgage-calculator", permanent: true },
      { source: "/blog/fixed-vs-adjustable-rate-mortgages", destination: "/mortgage-calculator", permanent: true },
      { source: "/blog/what-are-closing-costs", destination: "/closing-costs", permanent: true },
      { source: "/blog/how-much-cash-do-i-need-to-buy-a-house", destination: "/cash-to-close", permanent: true },
      { source: "/blog/closing-costs-by-state", destination: "/transfer-taxes-by-state", permanent: true },
      { source: "/blog/fha-closing-costs-explained", destination: "/buyer-closing-cost-calculator", permanent: true },
      { source: "/blog/who-pays-closing-costs", destination: "/closing-costs", permanent: true },
      { source: "/blog/seller-net-sheet-explained", destination: "/seller-net-proceeds-calculator", permanent: true },
      { source: "/blog/how-much-does-it-cost-to-sell-a-house", destination: "/seller-closing-costs", permanent: true },
      { source: "/blog/realtor-commissions-explained", destination: "/seller-net-proceeds-calculator", permanent: true },
      { source: "/blog/seller-closing-costs-by-state", destination: "/transfer-taxes-by-state", permanent: true },
      { source: "/blog/how-much-equity-do-i-need-to-sell", destination: "/seller-net-proceeds-calculator", permanent: true },
      { source: "/blog/how-to-use-a-rental-property-calculator-to-analyze-deals", destination: "/rental-property-calculator", permanent: true },
      { source: "/blog/beginners-guide-to-buying-your-first-rental-property", destination: "/rental-property-calculator", permanent: true },
      { source: "/blog/house-hacking-with-fha-loans-buy-a-duplex-with-3-5-down", destination: "/rental-property-calculator", permanent: true },
      { source: "/blog/is-the-housing-market-about-to-crash", destination: "/rental-property-calculator", permanent: true },
      { source: "/blog/five-mistakes-to-avoid-when-buying-your-first-rental-property", destination: "/rental-property-calculator", permanent: true },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "propcalchub.com",
          },
        ],
        destination: "https://www.propcalchub.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
