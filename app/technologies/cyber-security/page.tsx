import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function CyberSecurityPage() {
  const services = [
    "Security Audits",
    "Penetration Testing",
    "Network Security",
    "Cloud Security",
    "Threat Monitoring",
    "Security Consulting",
  ];

  const technologies = [
    "OWASP",
    "Burp Suite",
    "Wireshark",
    "Nessus",
    "AWS Security",
    "Azure Security",
    "Linux Security",
    "Firewalls",
  ];

  const benefits = [
    "Threat Protection",
    "Data Security",
    "Compliance Management",
    "Risk Reduction",
    "Secure Infrastructure",
    "Business Continuity",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Cyber Security Solutions
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Protect Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Digital Assets
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Secure your applications, networks and cloud infrastructure
            against modern cyber threats.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Security Services
            </h2>

            <p className="text-gray-400 mt-4">
              Comprehensive cyber security solutions for businesses.
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
              Why Cyber Security Matters
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
              Security Technologies
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

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Why Choose Mobcodu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Security Experts
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Proven Methodology
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Enterprise Solutions
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              24/7 Support
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}