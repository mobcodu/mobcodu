export default function Testimonials() {
  const testimonials = [
    {
      name: "John Anderson",
      company: "Tech Startup USA",
      review:
        "Mobcodu delivered our AI platform ahead of schedule. Outstanding quality and communication.",
    },
    {
      name: "Sarah Williams",
      company: "Healthcare Solutions",
      review:
        "The team built our healthcare application with exceptional attention to detail.",
    },
    {
      name: "Michael Brown",
      company: "E-Commerce Brand",
      review:
        "Professional developers, great support, and excellent project management.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 mt-4">
            Trusted by startups and businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-lg">
                  {item.name}
                </h4>

                <p className="text-gray-400 text-sm">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}