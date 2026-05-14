export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 text-sm text-slate-600 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-medium text-slate-900">PropCalcHub</p>
          <p className="mt-1 max-w-2xl leading-6">
            PropCalcHub calculators are for informational purposes only and are not financial,
            legal, tax, lending, or real estate advice.
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 md:justify-end">
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
