'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const calculatorLinks = [
  { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds' },
  { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Costs' },
  { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
  { href: '/rental-property-calculator', label: 'Rental Property' },
];

const guideLinks = [
  { href: '/closing-costs', label: 'Closing Costs Guide' },
  { href: '/transfer-taxes-by-state', label: 'Transfer Taxes by State' },
  { href: '/seller-closing-costs', label: 'Seller Closing Costs' },
  { href: '/cash-to-close', label: 'Cash to Close Guide' },
  { href: '/methodology', label: 'Methodology' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalculatorMenuOpen, setIsCalculatorMenuOpen] = useState(false);
  const [isGuideMenuOpen, setIsGuideMenuOpen] = useState(false);
  const isCalculatorActive = calculatorLinks.some((link) => isActivePath(pathname, link.href));
  const isGuideActive = guideLinks.some((link) => isActivePath(pathname, link.href));

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="text-lg font-semibold tracking-tight text-slate-950">
            PropCalcHub
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="site-mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 rounded-full bg-current" />
              <span className="block h-0.5 rounded-full bg-current" />
              <span className="block h-0.5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <nav className="mt-4 hidden flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-600 md:flex md:justify-end">
          <a
            href="/"
            className={`hover:text-slate-950 ${pathname === '/' ? 'font-bold underline' : ''}`}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            Home
          </a>

          <div className="group relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1 hover:text-slate-950 ${
                isCalculatorActive ? 'font-bold underline' : ''
              }`}
              aria-haspopup="menu"
            >
              Calculators
            </button>

            <div
              className="invisible absolute left-0 top-full z-50 w-64 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
              role="menu"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                {calculatorLinks.map((link) => {
                  const isActive = isActivePath(pathname, link.href);

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm hover:bg-slate-50 hover:text-slate-950 ${
                        isActive ? 'font-bold text-slate-950 underline' : 'text-slate-700'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      role="menuitem"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1 hover:text-slate-950 ${
                isGuideActive ? 'font-bold underline' : ''
              }`}
              aria-haspopup="menu"
            >
              Guides
            </button>

            <div
              className="invisible absolute left-0 top-full z-50 w-72 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
              role="menu"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                {guideLinks.map((link) => {
                  const isActive = isActivePath(pathname, link.href);

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 text-sm hover:bg-slate-50 hover:text-slate-950 ${
                        isActive ? 'font-bold text-slate-950 underline' : 'text-slate-700'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      role="menuitem"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => {
            const isActive = isActivePath(pathname, link.href);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-slate-950 ${isActive ? 'font-bold underline' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {isMenuOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-950/35 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          />
        ) : null}

        <div
          id="site-mobile-menu"
          className={`fixed right-0 top-0 z-50 h-dvh w-4/5 max-w-sm transform overflow-y-auto p-6 text-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: 'color-mix(in srgb, var(--color-slate-900) 94%, transparent)' }}
        >
          <div className="flex items-center justify-between gap-4">
            <a
              href="/"
              className="text-lg font-semibold tracking-tight"
              onClick={() => setIsMenuOpen(false)}
            >
              PropCalcHub
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl leading-none text-white hover:bg-white/15"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              x
            </button>
          </div>

          <nav className="mt-8 grid gap-2 text-lg font-medium">
            <a
              href="/"
              className={`rounded-2xl px-4 py-4 text-white/90 hover:bg-white/10 hover:text-white ${
                pathname === '/' ? 'font-bold underline' : ''
              }`}
              aria-current={pathname === '/' ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <div>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-white/90 hover:bg-white/10 hover:text-white ${
                  isCalculatorActive ? 'font-bold underline' : ''
                }`}
                onClick={() => setIsCalculatorMenuOpen((current) => !current)}
                aria-haspopup="menu"
                aria-expanded={isCalculatorMenuOpen}
                aria-controls="mobile-calculator-menu"
              >
                <span>Calculators</span>
                <span
                  className={`text-xl leading-none transition-transform ${
                    isCalculatorMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  ^
                </span>
              </button>

              <div
                id="mobile-calculator-menu"
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isCalculatorMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 overflow-hidden pl-4">
                  <div className="mt-1 grid gap-1 border-l border-white/15 pl-3">
                    {calculatorLinks.map((link) => {
                      const isActive = isActivePath(pathname, link.href);

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`rounded-2xl px-4 py-3 text-base text-white/80 hover:bg-white/10 hover:text-white ${
                            isActive ? 'font-bold underline' : ''
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-white/90 hover:bg-white/10 hover:text-white ${
                  isGuideActive ? 'font-bold underline' : ''
                }`}
                onClick={() => setIsGuideMenuOpen((current) => !current)}
                aria-haspopup="menu"
                aria-expanded={isGuideMenuOpen}
                aria-controls="mobile-guide-menu"
              >
                <span>Guides</span>
                <span
                  className={`text-xl leading-none transition-transform ${
                    isGuideMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  ^
                </span>
              </button>

              <div
                id="mobile-guide-menu"
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isGuideMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 overflow-hidden pl-4">
                  <div className="mt-1 grid gap-1 border-l border-white/15 pl-3">
                    {guideLinks.map((link) => {
                      const isActive = isActivePath(pathname, link.href);

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`rounded-2xl px-4 py-3 text-base text-white/80 hover:bg-white/10 hover:text-white ${
                            isActive ? 'font-bold underline' : ''
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => {
              const isActive = isActivePath(pathname, link.href);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-4 text-white/90 hover:bg-white/10 hover:text-white ${
                    isActive ? 'font-bold underline' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
