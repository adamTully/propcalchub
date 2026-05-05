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
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>

        <p className="mt-6 text-slate-600">
          At PropCalcHub, we respect your privacy. This site does not collect
          personally identifiable information unless you choose to provide it.
        </p>

        <p className="mt-4 text-slate-600">
          We may use third-party services such as Google AdSense that use cookies
          to serve ads based on your prior visits to this and other websites.
        </p>

        <p className="mt-4 text-slate-600">
          You can opt out of personalized advertising by visiting Google Ads
          Settings.
        </p>

        <p className="mt-4 text-slate-600">
          By using this site, you consent to our privacy policy.
        </p>
      </div>
    </main>
  );
}
