export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-[40px] overflow-hidden p-12 lg:p-20 text-center border border-white/10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20">

          <h2 className="text-4xl lg:text-6xl font-bold">
            Ready To Build
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Your Next Project?
            </span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            Let's transform your ideas into powerful digital products with AI,
            web, mobile and cloud technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition duration-300"
            >
              Get Free Quote
            </a>

            <a
              href="tel:+917982980354"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition duration-300"
            >
              Schedule Call
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}