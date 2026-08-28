export const metadata = {
  title: 'Contact | PropCalcHub',
  description:
    'Contact PropCalcHub for general site, privacy, or business inquiries.',
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-4xl font-semibold tracking-tight">Contact PropCalcHub</h1>
          <p className="mt-5 leading-7 text-slate-600">
            For general site, privacy, or business inquiries, you can contact PropCalcHub by email.
          </p>
          <p className="mt-4 font-medium text-slate-900">Email: support@propcalchub.com</p>
          <p className="mt-4 leading-7 text-slate-600">
            PropCalcHub is an informational calculator site and does not provide personal financial,
            legal, tax, lending, or real estate advice. If your question involves a live transaction,
            loan approval, closing document, tax filing, or legal obligation, confirm the numbers
            with your lender, real estate agent, closing attorney, title company, tax professional,
            or another qualified local professional.
          </p>
        </section>
      </div>
    </main>
  );
}
