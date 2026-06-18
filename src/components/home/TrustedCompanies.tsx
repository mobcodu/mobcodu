export default function TrustedCompanies() {
  const companies = [
    "Google",
    "AWS",
    "Microsoft",
    "OpenAI",
    "Firebase",
  ];

  return (
    <section className="py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-gray-400 uppercase tracking-widest text-sm mb-10">
          Trusted Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {companies.map((company) => (
            <div
              key={company}
              className="px-8 py-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}