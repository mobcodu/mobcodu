export default function Portfolio() {
  const projects = [
    {
      title: "AI Chatbot Platform",
      tech: "AI • React • Node.js",
      image: "/portfolio/port1.png",
    },
    {
      title: "Healthcare Mobile App",
      tech: "Flutter • Firebase",
      image: "/portfolio/port2.png",
    },
    {
      title: "E-Commerce Platform",
      tech: "Next.js • MongoDB",
      image: "/portfolio/port3.png",
    },
    {
      title: "Fintech Banking App",
      tech: "React Native • Node.js",
      image: "/portfolio/port4.png",
    },
    {
      title: "Food Delivery App",
      tech: "Flutter • Firebase",
      image: "/portfolio/port5.png",
    },
    {
      title: "Real Estate Platform",
      tech: "Next.js • PostgreSQL",
      image: "/portfolio/port6.png",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-widest text-xs">
            Our Work
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold mt-6">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore some of our recent digital products, AI solutions,
            mobile applications, and enterprise platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.tech}
                </p>

                <button className="mt-6 text-blue-400 font-medium hover:text-blue-300 transition">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}