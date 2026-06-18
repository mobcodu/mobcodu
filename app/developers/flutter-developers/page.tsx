import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function FlutterDevelopersPage() {
  const services = [
    "Custom Flutter App Development",
    "Flutter UI/UX Design",
    "Cross Platform Development",
    "Flutter Web Development",
    "Flutter App Migration",
    "Maintenance & Support",
  ];

  const technologies = [
    "Flutter",
    "Dart",
    "Firebase",
    "REST API",
    "Google Maps",
    "Stripe",
    "AWS",
    "Supabase",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Hire Flutter Developers
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Flutter Developers
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Build Android, iOS, Web and Desktop applications with our
            experienced Flutter development team.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8">
            Why Hire Flutter Developers?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our Flutter developers create high-performance applications
            with a single codebase, reducing development cost and time
            while maintaining native-like performance.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Flutter Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
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
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                {tech}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process */}
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
                Why choose Flutter?
              </h3>
              <p className="text-gray-400 mt-2">
                Flutter allows faster development with a single codebase.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Do you provide maintenance?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes, we provide long-term support and maintenance.
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