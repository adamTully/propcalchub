export const metadata = {
  title: 'Privacy Policy | PropCalcHub',
  description: 'Read the PropCalcHub privacy policy.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-5 text-sm text-slate-500">Last updated: August 28, 2026</p>
          <p className="mt-5 leading-7 text-slate-600">
            PropCalcHub provides real estate calculators and educational planning content. This
            policy explains the types of information that may be collected when you use the site and
            how third-party services may process information for analytics, advertising, and site
            functionality.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Information you provide</h2>
          <p className="mt-4 leading-7 text-slate-600">
            PropCalcHub does not require you to create an account to use the calculators. Calculator
            inputs are intended for on-page estimates. If you contact us by email, we may receive
            the information you choose to include, such as your email address, feedback, question,
            page URL, or details about a calculator issue.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Analytics and advertising</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-600">
            <p>
              PropCalcHub may use analytics services to understand general site usage, such as page
              views, device type, browser information, approximate location, and referral sources.
              This helps identify pages that need clearer explanations, better navigation, or bug
              fixes.
            </p>
            <p>
              PropCalcHub may use Google AdSense or similar advertising services. These services may
              use cookies or similar technologies to serve, measure, and improve ads. Advertising
              partners may use information about visits to this and other websites to provide ads
              that are more relevant to users, subject to their own policies and user controls.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Cookies and user choices</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Cookies and similar technologies may be used for analytics, advertising, security, and
            site performance. You can manage cookies through your browser settings. You can also
            review Google's advertising controls and opt-out tools through Google's own privacy and
            ad settings pages.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Children's privacy</h2>
          <p className="mt-4 leading-7 text-slate-600">
            PropCalcHub is intended for general audiences interested in real estate planning tools
            and is not directed to children. We do not knowingly collect personal information from
            children. If you believe a child has provided personal information, contact us so we can
            review the issue.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Contact and updates</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Questions about this policy can be sent to support@propcalchub.com. We may update this
            privacy policy from time to time as the site changes, as legal requirements evolve, or
            as third-party services are added or removed.
          </p>
        </section>
      </div>
    </main>
  );
}
