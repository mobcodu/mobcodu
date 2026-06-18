import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function ArtificialIntelligencePage() {
  const benefits = [
    "Process Automation",
    "Cost Reduction",
    "Better Decision Making",
    "Improved Customer Experience",
    "Higher Productivity",
    "Business Growth",
  ];

  const technologies = [
    "OpenAI",
    "ChatGPT",
    "LangChain",
    "TensorFlow",
    "PyTorch",
    "Azure AI",
    "AWS AI",
    "Python",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Artificial Intelligence
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            AI Powered
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Business Solutions
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Transform your business with intelligent AI solutions,
            automation, chatbots and machine learning technologies.
          </p>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Benefits of AI
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item) => (
              <div
                key={item}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Technologies We Use
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                {tech}
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