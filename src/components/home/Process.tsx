export default function Process() {
  const steps = [
    "Discovery",
    "Planning",
    "UI/UX Design",
    "Development",
    "Testing",
    "Launch & Support",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Our Development Process
          </h2>

          <p className="text-gray-400 mt-4">
            From idea to deployment, we follow a proven process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500 transition"
            >
              <div className="text-4xl font-bold text-blue-500 mb-4">
                0{index + 1}
              </div>

              <h3 className="font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}