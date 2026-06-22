import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function KotlinDevelopersPage() {
  const services = [
    "Custom Kotlin App Development",
    "Native Android Development",
    "Kotlin Multiplatform Development",
    "Enterprise Mobile Solutions",
    "App Migration to Kotlin",
    "Maintenance & Support",
  ];

  const technologies = [
    "Kotlin",
    "Jetpack Compose",
    "Android Studio",
    "Firebase",
    "REST APIs",
    "Room Database",
    "AWS",
    "GraphQL",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Hire Kotlin Developers
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Kotlin Developers
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Build secure, scalable and high-performance Android
            applications with our experienced Kotlin developers.
            We create modern mobile solutions using the latest
            Kotlin technologies and best practices.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-8">
            Why Hire Kotlin Developers?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Kotlin is Google's preferred language for Android development.
            Our Kotlin developers build robust, maintainable and
            future-ready applications with clean architecture,
            enhanced performance and exceptional user experiences.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Kotlin Development Services
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
                Modern
              </h3>
              <p className="text-gray-400">
                Latest Kotlin technologies and Android frameworks.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Native
              </h3>
              <p className="text-gray-400">
                High-performance native Android applications.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Scalable
              </h3>
              <p className="text-gray-400">
                Enterprise-grade architecture and scalability.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                24/7
              </h3>
              <p className="text-gray-400">
                Ongoing support and maintenance services.
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
                Why choose Kotlin for Android development?
              </h3>

              <p className="text-gray-400 mt-2">
                Kotlin offers concise syntax, improved safety,
                better performance and full support from Google.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Do you support Kotlin Multiplatform?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, we build cross-platform solutions using
                Kotlin Multiplatform for Android, iOS and Web.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Do you provide long-term maintenance?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, we provide updates, monitoring, bug fixes
                and continuous support after deployment.
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