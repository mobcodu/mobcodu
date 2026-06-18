import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function BusinessAnalyticsPage() {
  const services = [
    "Business Intelligence",
    "Data Analytics",
    "Power BI Dashboards",
    "Predictive Analytics",
    "KPI Tracking",
    "Custom Reporting",
  ];

  const tools = [
    "Power BI",
    "Tableau",
    "Google Analytics",
    "SQL",
    "Python",
    "Excel",
    "BigQuery",
    "Looker Studio",
  ];

  const benefits = [
    "Data-Driven Decisions",
    "Revenue Growth",
    "Improved Efficiency",
    "Customer Insights",
    "Risk Management",
    "Performance Tracking",
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
            Business Analytics
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Turn Data Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Business Growth
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Unlock valuable insights from your data and make smarter,
            faster business decisions with advanced analytics solutions.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Analytics Services
            </h2>

            <p className="text-gray-400 mt-4">
              End-to-end business intelligence and analytics solutions.
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
              Benefits of Business Analytics
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

      {/* Tools */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Tools & Technologies
            </h2>
          </div>

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

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Our Analytics Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">01</h3>
              <p className="mt-4">Data Collection</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">02</h3>
              <p className="mt-4">Analysis</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">03</h3>
              <p className="mt-4">Visualization</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500">04</h3>
              <p className="mt-4">Insights & Growth</p>
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}