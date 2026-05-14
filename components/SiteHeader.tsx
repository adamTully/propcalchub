'use client';

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

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight text-slate-950">
          PropCalcHub
        </a>

        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-600">
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
      </div>
    </header>
  );
}
