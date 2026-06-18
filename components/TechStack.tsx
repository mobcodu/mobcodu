const techs = [
  "React",
  "Next.js",
  "Flutter",
  "Node.js",
  "Python",
  "AWS",
  "OpenAI",
  "MongoDB",
];

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold mb-12">
          Technologies We Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech) => (
            <div
              key={tech}
              className="p-6 text-center rounded-2xl border border-white/10 bg-white/5"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}