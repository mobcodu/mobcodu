export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-widest text-xs">
              AI • Web • Mobile • Digital Solutions
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
              Building The Future With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                AI & Digital Innovation
              </span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
              We help startups and businesses build AI-powered software,
              websites, mobile applications and automation solutions that
              accelerate growth and digital transformation.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition duration-300 font-medium">
                View Portfolio
              </button>

              <button className="px-7 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition duration-300">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 flex-wrap">
              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-gray-400">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-gray-400">Solutions</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-gray-400">Support</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative z-10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl bg-white/5 w-full max-w-lg shadow-2xl">

              <h3 className="text-2xl font-bold mb-8">
                Mobcodu Technologies
              </h3>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/5 border border-white/10 hover:border-blue-500 transition duration-300 p-5 rounded-xl">
                  🤖 AI Development
                </div>

                <div className="bg-white/5 border border-white/10 hover:border-blue-500 transition duration-300 p-5 rounded-xl">
                  🌐 Web Development
                </div>

                <div className="bg-white/5 border border-white/10 hover:border-blue-500 transition duration-300 p-5 rounded-xl">
                  📱 Mobile Apps
                </div>

                <div className="bg-white/5 border border-white/10 hover:border-blue-500 transition duration-300 p-5 rounded-xl">
                  ⚙️ Automation
                </div>

              </div>

              <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10">
                <p className="text-gray-300 text-sm">
                  Delivering scalable digital solutions powered by modern
                  technologies and innovation.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    
  );
}