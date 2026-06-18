import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function PowerBIPage() {
  const services = [
    "Power BI Dashboard Development",
    "Business Intelligence Solutions",
    "Data Visualization",
    "KPI Tracking Dashboards",
    "Power BI Consulting",
    "Custom Reports & Analytics",
  ];

  const features = [
    "Interactive Dashboards",
    "Real-Time Reporting",
    "Data Integration",
    "Advanced Analytics",
    "Cloud-Based Access",
    "Custom Visualizations",
    "Performance Monitoring",
    "Decision Support",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Power BI Solutions
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Transform Data Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Actionable Insights
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Build intelligent dashboards and business intelligence
            solutions using Microsoft Power BI.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Power BI Services
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

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                {feature}
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