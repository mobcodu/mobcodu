import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function CrossPlatformDevelopmentPage() {
  const services = [
    "Flutter App Development",
    "React Native Development",
    "Cross Platform UI/UX Design",
    "Mobile App Migration",
    "App Maintenance & Support",
    "Enterprise Mobility Solutions",
  ];

  const technologies = [
    "Flutter",
    "React Native",
    "Dart",
    "JavaScript",
    "Firebase",
    "Node.js",
    "AWS",
    "REST APIs",
  ];

  const benefits = [
    "Single Codebase",
    "Faster Development",
    "Reduced Costs",
    "Native-Like Performance",
    "Faster Time To Market",
    "Easy Maintenance",
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Cross Platform Development
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Build Once,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Deploy Everywhere
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Create high-performance mobile applications for Android and iOS
            using a single codebase with Flutter and React Native.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Cross Platform Services
            </h2>

            <p className="text-gray-400 mt-4">
              End-to-end cross-platform app development solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
              >
                {service}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Benefits of Cross Platform Apps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                {benefit}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                {tech}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Development Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Our Development Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">01</h3>
              <p className="mt-4">Discovery</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">02</h3>
              <p className="mt-4">Design</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">03</h3>
              <p className="mt-4">Development</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">04</h3>
              <p className="mt-4">Launch</p>
            </div>

          </div>

        </div>
      </section>

      {/* Platforms */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Platforms We Support
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              📱 Android Apps
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              🍎 iOS Apps
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              🌐 Web Applications
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}