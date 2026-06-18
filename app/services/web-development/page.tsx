import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Web Development Services
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Custom Web
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Development Solutions
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            We build high-performance websites and web applications
            using modern technologies and scalable architecture.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Corporate Websites
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              E-Commerce Development
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              SaaS Applications
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              CRM Systems
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Admin Dashboards
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Custom Web Apps
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}