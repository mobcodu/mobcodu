"use client";

import {
  Brain,
  Code2,
  Smartphone,
  Cloud,
  Cog,
  Palette,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      desc: "Intelligent AI solutions that automate processes and drive growth.",
    },
    {
      icon: Code2,
      title: "Web Development",
      desc: "Modern, responsive and high-performance websites and web applications.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Cross-platform mobile apps that deliver seamless user experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure for secure and reliable operations.",
    },
    {
      icon: Cog,
      title: "Business Automation",
      desc: "Automate workflows and boost productivity with smart automation.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Beautiful and intuitive designs that enhance user experience.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[3px] font-semibold text-sm">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            We Provide Smart Solutions
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            End-to-end services to help your business grow and scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  p-8
                  rounded-3xl
                  bg-[#071226]
                  border border-blue-500/20
                  hover:border-cyan-400
                  hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]
                  transition-all duration-300
                  hover:-translate-y-2
                  text-center
                "
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <Icon
                    size={52}
                    className="
                      text-cyan-400
                      group-hover:scale-110
                      transition
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-7">
                  {service.desc}
                </p>

                {/* Button */}
                <div className="mt-6 flex items-center justify-center gap-2 text-cyan-400 font-medium cursor-pointer">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}