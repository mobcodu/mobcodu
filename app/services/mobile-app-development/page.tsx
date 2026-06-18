import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Mobile App Development
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Build Powerful
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Mobile Applications
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            We create Android, iOS and Cross-Platform mobile applications
            that deliver exceptional user experiences.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Mobile App Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Android App Development
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              iOS App Development
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Flutter Development
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              React Native Apps
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              App Maintenance
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              App Store Deployment
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}