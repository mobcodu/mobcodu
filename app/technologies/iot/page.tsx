import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function IoTPage() {
  const services = [
    "Smart Device Development",
    "IoT Mobile Applications",
    "Sensor Integration",
    "Industrial IoT Solutions",
    "IoT Dashboard Development",
    "IoT Consulting Services",
  ];

  const technologies = [
    "Arduino",
    "Raspberry Pi",
    "AWS IoT",
    "Azure IoT",
    "MQTT",
    "Node.js",
    "Python",
    "Firebase",
  ];

  return (
    <>
      <Navbar />

      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Internet Of Things
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Smart Connected
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              IoT Solutions
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Connect devices, automate operations and gain real-time insights
            with modern IoT solutions.
          </p>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            IoT Services
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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            IoT Technologies
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

      <CTA />
      <Footer />
    </>
  );
}