import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function SoftwareDevelopmentPage() {
  const services = [
    "Custom Software Development",
    "Enterprise Software Solutions",
    "CRM & ERP Development",
    "SaaS Product Development",
    "API Development & Integration",
    "Software Maintenance & Support",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "AWS",
  ];

  const benefits = [
    "Business Automation",
    "Scalable Architecture",
    "Improved Productivity",
    "Enhanced Security",
    "Reduced Operational Costs",
    "Faster Time To Market",
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
            Software Development Services
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Custom
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Software Solutions
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Build powerful, scalable and secure software solutions tailored
            to your business goals. From enterprise applications to SaaS
            platforms, we deliver software that drives growth.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Software Development Services
            </h2>

            <p className="text-gray-400 mt-4">
              End-to-end software development for startups and enterprises.
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
              Why Invest In Custom Software?
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
              <p className="mt-4">Planning</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">03</h3>
              <p className="mt-4">Development</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">04</h3>
              <p className="mt-4">Launch & Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              Healthcare
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              FinTech
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              E-Commerce
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              Education
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}