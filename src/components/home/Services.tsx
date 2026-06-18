export default function Services() {
  const services = [
    {
      icon: "🤖",
      title: "AI Development",
      desc: "Custom AI solutions powered by machine learning and automation.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      desc: "Scalable web applications using modern technologies.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      desc: "Native & cross-platform mobile app development.",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure solutions.",
    },
    {
      icon: "⚙️",
      title: "Software Development",
      desc: "Enterprise-grade software tailored to your business.",
    },
    {
      icon: "📊",
      title: "Business Analytics",
      desc: "Transform data into actionable business insights.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Digital Solutions For
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Modern Businesses
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Image */}
          <div>
            <img
              src="/services-image.png"
              alt="Services"
              className="w-full rounded-3xl border border-white/10"
            />
          </div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}