export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "🚀",
      title: "Fast Delivery",
    },
    {
      icon: "💡",
      title: "Expert Team",
    },
    {
      icon: "🔒",
      title: "Secure Solutions",
    },
    {
      icon: "📞",
      title: "24/7 Support",
    },
    {
      icon: "⚙️",
      title: "Agile Development",
    },
    {
      icon: "📈",
      title: "Scalable Products",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Choose Mobcodu
          </h2>

          <p className="text-gray-400 mt-4">
            Delivering innovation, quality and long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}