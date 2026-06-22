import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-widest text-xs">
            Contact Us
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Let's Build
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Something Amazing
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Have a project idea? Get in touch with our team and let's discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Send Us A Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
                />

                <select className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none">
                  <option>Service Required</option>
                  <option>AI Development</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Solutions</option>
                  <option>UI/UX Design</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-medium"
                >
                  Send Message
                </button>

              </form>
            </div>

            {/* Company Details */}
            <div>

              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-xl mb-2">
                    📧 Email
                  </h3>

                  <a
                    href="mailto:sales@mobcodu.in"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    sales@mobcodu.in
                  </a>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-xl mb-2">
                    📞 Phone
                  </h3>

                  <a
                    href="tel:+91987654321"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-xl mb-2">
                    🌐 Website
                  </h3>

                  <a
                    href="https://mobcodu.in"
                    target="_blank"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    mobcodu.in
                  </a>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-xl mb-2">
                    📍 Location
                  </h3>

                  <p className="text-gray-400">
                    Greater Noida, Uttar Pradesh, India
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}