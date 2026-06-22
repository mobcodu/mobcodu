import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function MLDevelopersPage() {
  const services = [
    "Machine Learning Model Development",
    "Predictive Analytics Solutions",
    "Natural Language Processing (NLP)",
    "Computer Vision Solutions",
    "Recommendation Systems",
    "ML Model Maintenance & Optimization",
  ];

  const technologies = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "OpenAI",
    "LangChain",
    "AWS",
    "Azure AI",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Hire ML Developers
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Machine Learning Developers
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Build intelligent AI-powered solutions with our experienced
            Machine Learning developers. From predictive analytics to
            computer vision and NLP, we help businesses innovate faster.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-8">
            Why Hire ML Developers?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our Machine Learning developers help businesses leverage
            artificial intelligence to automate processes, improve
            decision-making, uncover valuable insights and create
            innovative digital products. We build scalable ML solutions
            tailored to your unique business needs.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Machine Learning Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300"
              >
                {service}
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
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-blue-500 transition-all duration-300"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose Mobcodu?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                AI
              </h3>
              <p className="text-gray-400">
                Expertise in modern AI and ML technologies.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Fast
              </h3>
              <p className="text-gray-400">
                Agile development and rapid deployment.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                Secure
              </h3>
              <p className="text-gray-400">
                Enterprise-grade security and scalability.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-blue-500 mb-4">
                24/7
              </h3>
              <p className="text-gray-400">
                Continuous support and maintenance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500">01</h3>
              <p className="mt-4">
                Business Requirement Analysis
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500">02</h3>
              <p className="mt-4">
                ML Expert Selection
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500">03</h3>
              <p className="mt-4">
                Model Development
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-500">04</h3>
              <p className="mt-4">
                Deployment & Optimization
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            FAQs
          </h2>

          <div className="space-y-6">

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                What industries can benefit from Machine Learning?
              </h3>

              <p className="text-gray-400 mt-2">
                Healthcare, Finance, Retail, Manufacturing,
                Logistics, Education and many more industries
                can leverage Machine Learning solutions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Do you provide ML model maintenance?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, we provide continuous monitoring,
                optimization and maintenance services for
                Machine Learning models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-bold">
                Can you integrate AI into existing software?
              </h3>

              <p className="text-gray-400 mt-2">
                Absolutely. We can integrate AI and ML
                capabilities into your existing web,
                mobile or enterprise applications.
              </p>
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}