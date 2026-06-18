import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="py-32 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-widest text-xs">
            Our Services
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Innovative
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Digital Solutions
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            We provide AI, Web, Mobile and Cloud solutions
            to help businesses grow faster and smarter.
          </p>

        </div>

      </section>

      {/* Services Grid */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        What We Offer
      </h2>

      <p className="text-gray-400 mt-4">
        Comprehensive technology solutions tailored to your business.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
        <div className="text-5xl mb-4">🤖</div>

        <h3 className="text-2xl font-bold mb-4">
          AI Development
        </h3>

        <p className="text-gray-400">
          Custom AI solutions, chatbots, automation and machine learning applications.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
        <div className="text-5xl mb-4">🌐</div>

        <h3 className="text-2xl font-bold mb-4">
          Web Development
        </h3>

        <p className="text-gray-400">
          High-performance websites and web applications using modern frameworks.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
        <div className="text-5xl mb-4">📱</div>

        <h3 className="text-2xl font-bold mb-4">
          Mobile App Development
        </h3>

        <p className="text-gray-400">
          Android, iOS and cross-platform mobile applications.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
        <div className="text-5xl mb-4">🎨</div>

        <h3 className="text-2xl font-bold mb-4">
          UI/UX Design
        </h3>

        <p className="text-gray-400">
          User-centered design experiences that improve engagement and conversion.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
        <div className="text-5xl mb-4">☁️</div>

        <h3 className="text-2xl font-bold mb-4">
          Cloud Solutions
        </h3>

        <p className="text-gray-400">
          Scalable cloud infrastructure, deployment and DevOps services.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
        <div className="text-5xl mb-4">⚙️</div>

        <h3 className="text-2xl font-bold mb-4">
          Software Development
        </h3>

        <p className="text-gray-400">
          Enterprise-grade software solutions customized to business needs.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Development Process */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Our Development Process
      </h2>

      <p className="text-gray-400 mt-4">
        A proven workflow that ensures quality and success.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
        <div className="text-5xl font-bold text-blue-500 mb-4">01</div>
        <h3 className="text-2xl font-bold mb-3">Discovery</h3>
        <p className="text-gray-400">
          Understanding your business goals and requirements.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
        <div className="text-5xl font-bold text-blue-500 mb-4">02</div>
        <h3 className="text-2xl font-bold mb-3">Planning</h3>
        <p className="text-gray-400">
          Creating a roadmap and project strategy.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
        <div className="text-5xl font-bold text-blue-500 mb-4">03</div>
        <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
        <p className="text-gray-400">
          Designing intuitive and engaging user experiences.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
        <div className="text-5xl font-bold text-blue-500 mb-4">04</div>
        <h3 className="text-2xl font-bold mb-3">Development</h3>
        <p className="text-gray-400">
          Building scalable and high-performance applications.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
        <div className="text-5xl font-bold text-blue-500 mb-4">05</div>
        <h3 className="text-2xl font-bold mb-3">Testing</h3>
        <p className="text-gray-400">
          Ensuring quality, performance and security.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
        <div className="text-5xl font-bold text-blue-500 mb-4">06</div>
        <h3 className="text-2xl font-bold mb-3">Launch & Support</h3>
        <p className="text-gray-400">
          Deployment, monitoring and continuous support.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Technologies We Use */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Technologies We Use
      </h2>

      <p className="text-gray-400 mt-4">
        Modern technologies powering scalable digital solutions.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {[
        "React.js",
        "Next.js",
        "TypeScript",
        "Flutter",
        "Swift",
        "Node.js",
        "Python",
        "MongoDB",
        "Firebase",
        "AWS",
        "OpenAI",
        "Azure",
      ].map((tech) => (
        <div
          key={tech}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold">
            {tech}
          </h3>
        </div>
      ))}

    </div>

  </div>
</section>

{/* Why Choose Mobcodu */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Why Choose Mobcodu
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        🚀 Fast Delivery
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        👨‍💻 Expert Team
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        🤖 AI-Powered Solutions
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        🔒 Secure Development
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        📞 Dedicated Support
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        ⚡ Scalable Architecture
      </div>

    </div>

  </div>
</section>

<CTA />

      <Footer />
    </>
  );
}