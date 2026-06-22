import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function IOSDevelopersPage() {
  const services = [
    "Custom iOS App Development",
    "iPhone App Development",
    "iPad App Development",
    "Swift App Development",
    "iOS App Migration",
    "Maintenance & Support",
  ];

  const technologies = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Xcode",
    "Core Data",
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
            Hire iOS Developers
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              iOS Developers
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Build high-performance iPhone and iPad applications with our
            experienced iOS development team using Swift, SwiftUI and
            the latest Apple technologies.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-8">
            Why Hire iOS Developers?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our iOS developers build secure, scalable and intuitive
            applications for iPhone, iPad and Apple ecosystem devices.
            We focus on delivering seamless user experiences with
            native performance and enterprise-grade quality.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            iOS Development Services
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
                Native
              </h3>
              <p className="text-gray-400">
                High-performance native iOS applications.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Secure
              </h3>
              <p className="text-gray-400">
                Enterprise-grade security and reliability.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Fast
              </h3>
              <p className="text-gray-400">
                Agile development and rapid deployment.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                24/7
              </h3>
              <p className="text-gray-400">
                Continuous support and maintenance.
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
                Why choose native iOS development?
              </h3>

              <p className="text-gray-400 mt-2">
                Native iOS apps offer superior performance, security,
                user experience and seamless integration with Apple devices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Do you develop apps using SwiftUI?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, we build modern iOS applications using SwiftUI,
                UIKit and Apple's latest development frameworks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Do you provide App Store deployment support?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, we handle App Store submission, review process,
                deployment and post-launch support.
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