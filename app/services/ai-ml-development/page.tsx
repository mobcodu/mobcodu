import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function AIMLDevelopmentPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            AI & Machine Learning
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            AI Powered
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Business Solutions
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Transform your business with Artificial Intelligence,
            Machine Learning, Automation and Generative AI solutions.
          </p>

        </div>
      </section>

      {/* AI Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            AI Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              AI Chatbot Development
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Generative AI Solutions
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Machine Learning Models
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              AI Automation
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              NLP Solutions
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              AI Consulting
            </div>

          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            AI Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              "OpenAI",
              "ChatGPT",
              "Python",
              "TensorFlow",
              "PyTorch",
              "LangChain",
              "Azure AI",
              "AWS AI",
            ].map((tech) => (
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