export const metadata = {
  title: 'Contact | PropCalcHub',
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Contact</h1>

        <p className="mt-6 text-slate-600">
          Have questions or feedback? We’d love to hear from you.
        </p>

        <p className="mt-4 text-slate-600">
          Email: support@propcalchub.com
        </p>
      </div>
    </main>
  );
}
