export default function Technologies() {
  const techs = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Swift",
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
    "Firebase",
    "OpenAI",
    "Azure",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Technologies We Use
          </h2>

          <p className="text-gray-400 mt-4">
            Modern technologies powering world-class applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techs.map((tech) => (
            <div
              key={tech}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 text-center transition"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}