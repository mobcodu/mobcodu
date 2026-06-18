import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function ConsultingServicesPage() {
  const services = [
    "Digital Transformation Consulting",
    "Technology Strategy",
    "Software Architecture Consulting",
    "Cloud Consulting",
    "AI & Data Consulting",
    "IT Project Management",
  ];

  const expertise = [
    "Business Analysis",
    "Technology Assessment",
    "Process Optimization",
    "Enterprise Solutions",
    "Innovation Strategy",
    "Risk Management",
  ];

  const benefits = [
    "Reduced Development Costs",
    "Faster Project Delivery",
    "Better Decision Making",
    "Improved Scalability",
    "Technology Alignment",
    "Business Growth",
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
            Consulting Services
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Strategic
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Technology Consulting
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Empower your business with expert consulting services that
            align technology with your goals and drive long-term success.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Consulting Services
            </h2>

            <p className="text-gray-400 mt-4">
              Expert guidance to help businesses make informed technology decisions.
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

      {/* Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Our Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                {item}
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
              Why Choose Our Consulting?
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

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Our Consulting Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">01</h3>
              <p className="mt-4">Discovery</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">02</h3>
              <p className="mt-4">Assessment</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">03</h3>
              <p className="mt-4">Strategy</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">04</h3>
              <p className="mt-4">Execution</p>
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}