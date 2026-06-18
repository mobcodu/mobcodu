const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "20+",
    label: "Happy Clients",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-blue-500">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}