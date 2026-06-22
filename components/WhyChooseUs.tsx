"use client";

import {
  Users,
  Code2,
  Zap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: "100% Client Focus",
      desc: "We prioritize client satisfaction and long-term success.",
    },
    {
      icon: Code2,
      title: "Modern Technologies",
      desc: "We use the latest tools and technologies to deliver best results.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "We follow agile practices to deliver on time, every time.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      desc: "Solutions designed to grow with your business.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left Content */}
          <div className="lg:col-span-1 flex flex-col justify-center">

            <span className="text-cyan-400 uppercase tracking-[3px] text-sm font-semibold">
              Why Choose Mobcodu?
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
              Innovation.
              <br />
              Quality.
              <br />
              Results.
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              We combine technology and creativity to deliver
              solutions that make a real impact.
            </p>

            <button
              className="
                mt-8
                px-6
                py-4
                rounded-xl
                border
                border-blue-500/30
                bg-white/5
                text-white
                flex
                items-center
                gap-2
                hover:border-cyan-400
                hover:bg-blue-500/10
                transition
                w-fit
              "
            >
              Learn More About Us
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Right Cards */}
          <div className="lg:col-span-4 grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    p-8
                    bg-[#071226]
                    border
                    border-blue-500/20
                    hover:border-cyan-400
                    hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    size={52}
                    className="
                      text-cyan-400
                      mb-6
                      group-hover:scale-110
                      transition
                    "
                  />

                  <h3 className="text-3xl font-bold text-white mb-3">
                    {item.title === "100% Client Focus"
                      ? "100%"
                      : ""}
                  </h3>

                  {item.title !== "100% Client Focus" && (
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                  )}

                  {item.title === "100% Client Focus" && (
                    <h4 className="text-xl font-semibold text-white mb-3">
                      Client Focus
                    </h4>
                  )}

                  <p className="text-gray-400 leading-7">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}