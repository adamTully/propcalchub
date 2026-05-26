'use client';

import { useEffect } from 'react';

export default function AdSlot({
  slot,
  className = '',
  label = '',
}: {
  slot: string;
  className?: string;
  label?: string;
}) {
  useEffect(() => {
    try {
      const adWindow = window as Window & {
        adsbygoogle?: Record<string, unknown>[];
      };
      adWindow.adsbygoogle = adWindow.adsbygoogle || [];
      adWindow.adsbygoogle.push({});
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <aside className={`rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 ${className}`}>
      {label ? <p className="mb-2 text-xs uppercase tracking-wide text-slate-400">{label}</p> : null}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2489602416184279"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
