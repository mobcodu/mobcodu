import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function ReactNativeDevelopersPage() {
  const services = [
    "Custom React Native App Development",
    "Cross-Platform Mobile Apps",
    "React Native UI/UX Development",
    "App Migration to React Native",
    "Third-Party API Integration",
    "Maintenance & Support",
  ];

  const technologies = [
    "React Native",
    "JavaScript",
    "TypeScript",
    "Expo",
    "Redux",
    "Firebase",
    "REST APIs",
    "AWS",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Hire React Native Developers
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              React Native Developers
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Build high-performance cross-platform mobile applications
            for iOS and Android using React Native and modern mobile
            development technologies.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-8">
            Why Hire React Native Developers?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our React Native developers build scalable mobile
            applications using a single codebase for both Android
            and iOS platforms. This reduces development cost,
            speeds up delivery and ensures a consistent user
            experience across devices.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            React Native Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300"
              >
                {service}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Technologies We Use
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {technologies.map((tech) => (
              <div
                key={tech}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-blue-500 transition-all duration-300"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose Mobcodu?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Cross Platform
              </h3>
              <p className="text-gray-400">
                Single codebase for Android and iOS apps.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Fast
              </h3>
              <p className="text-gray-400">
                Faster development and quicker time to market.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Scalable
              </h3>
              <p className="text-gray-400">
                Enterprise-grade mobile app architecture.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                24/7
              </h3>
              <p className="text-gray-400">
                Continuous support and maintenance services.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500">01</h3>
              <p className="mt-4">Requirement Discussion</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500">02</h3>
              <p className="mt-4">Developer Selection</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500">03</h3>
              <p className="mt-4">Project Kickoff</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500">04</h3>
              <p className="mt-4">Development & Delivery</p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            FAQs
          </h2>

          <div className="space-y-6">

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Why choose React Native?
              </h3>

              <p className="text-gray-400 mt-2">
                React Native enables faster development with a
                single codebase while delivering near-native
                performance on both Android and iOS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Do you provide app store deployment support?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, we handle App Store and Play Store
                submissions, updates and deployment support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Can you migrate an existing app to React Native?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, we help businesses migrate native or hybrid
                applications to React Native for better scalability
                and reduced maintenance costs.
              </p>
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}