import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function DataAnalyticsPage() {
  const services = [
    "Business Intelligence",
    "Data Visualization",
    "Predictive Analytics",
    "Customer Analytics",
    "Marketing Analytics",
    "Real-Time Reporting",
  ];

  const tools = [
    "Power BI",
    "Tableau",
    "Google Analytics",
    "Python",
    "SQL",
    "Excel",
    "BigQuery",
    "Azure Analytics",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Data Analytics
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Turn Data Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Business Growth
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Gain valuable insights from your data and make smarter
            business decisions with advanced analytics solutions.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Analytics Services
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

      {/* Tools */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Tools & Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                {tool}
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