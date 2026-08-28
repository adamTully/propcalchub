export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 text-sm text-slate-600 lg:grid-cols-[1fr_auto_auto] lg:items-start">
        <div>
          <p className="font-medium text-slate-900">PropCalcHub</p>
          <p className="mt-1 max-w-2xl leading-6">
            PropCalcHub calculators are for informational purposes only and are not financial,
            legal, tax, lending, or real estate advice.
          </p>
        </div>

        <nav className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" aria-label="Calculator links">
          <a href="/seller-net-proceeds-calculator" className="hover:text-slate-900">
            Seller Net Proceeds Calculator
          </a>
          <a href="/buyer-closing-cost-calculator" className="hover:text-slate-900">
            Buyer Closing Cost Calculator
          </a>
          <a href="/mortgage-calculator" className="hover:text-slate-900">
            Mortgage Calculator
          </a>
          <a href="/rental-property-calculator" className="hover:text-slate-900">
            Rental Property Calculator
          </a>
        </nav>

        <nav className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" aria-label="Site links">
          <a href="/closing-costs" className="hover:text-slate-900">
            Closing Costs Guide
          </a>
          <a href="/transfer-taxes-by-state" className="hover:text-slate-900">
            Transfer Taxes by State
          </a>
          <a href="/seller-closing-costs" className="hover:text-slate-900">
            Seller Closing Costs
          </a>
          <a href="/cash-to-close" className="hover:text-slate-900">
            Cash to Close
          </a>
          <a href="/methodology" className="hover:text-slate-900">
            Methodology
          </a>
          <a href="/blog" className="hover:text-slate-900">
            Blog
          </a>
          <a href="/about" className="hover:text-slate-900">
            About
          </a>
          <a href="/contact" className="hover:text-slate-900">
            Contact
          </a>
          <a href="/privacy-policy" className="hover:text-slate-900">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}
