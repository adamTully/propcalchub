export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-semibold">PropCalcHub</h1>
      <p className="mt-4">Real estate calculators to help you make better decisions.</p>

      <a
        href="/seller-net-proceeds-calculator"
        className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white"
      >
        Seller Net Proceeds Calculator →
      </a>
    </main>
  );
}