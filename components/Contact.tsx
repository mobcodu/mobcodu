export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-blue-400">
            CONTACT US
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let's Discuss Your Project
          </h2>

          <p className="text-gray-400 mt-4">
            Have an idea? Let's turn it into a successful digital product.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Service Required"
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            />

          </div>

          <textarea
            placeholder="Tell us about your project..."
            rows={6}
            className="w-full mt-6 bg-white/5 border border-white/10 rounded-xl p-4"
          />

          <button className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
            Send Inquiry
          </button>

        </div>

      </div>
    </section>
  );
}