export default function GlobalPresence() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Global Presence
          </h2>

          <p className="text-gray-400 mt-4">
            Serving clients across multiple countries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <div className="text-6xl mb-4">🇮🇳</div>
            <h3 className="text-2xl font-semibold">India</h3>
            <p className="text-gray-400 mt-2">
              Noida, Uttar Pradesh
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <div className="text-6xl mb-4">🇺🇸</div>
            <h3 className="text-2xl font-semibold">USA</h3>
            <p className="text-gray-400 mt-2">
              California
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <div className="text-6xl mb-4">🇨🇦</div>
            <h3 className="text-2xl font-semibold">Canada</h3>
            <p className="text-gray-400 mt-2">
              Ontario
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}