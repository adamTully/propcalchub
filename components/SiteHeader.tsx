'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/seller-net-proceeds-calculator', label: 'Seller Net Proceeds' },
  { href: '/buyer-closing-cost-calculator', label: 'Buyer Closing Costs' },
  { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-slate-950 ${
                  isActive ? 'font-bold underline' : ''
                }`}
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
          className={`fixed right-0 top-0 z-50 h-dvh w-4/5 max-w-sm transform p-6 text-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
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
              ×
            </button>
          </div>

          <nav className="mt-8 grid gap-2 text-lg font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

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
