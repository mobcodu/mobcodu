"use client";

import {
  FaReact,
  FaAws,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiMongodb,
  SiOpenai,
} from "react-icons/si";

export default function TrustedTechnologies() {
  const technologies = [
    { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
    { name: "Flutter", icon: <SiFlutter size={40} className="text-sky-400" /> },
    { name: "React Native", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "AWS", icon: <FaAws size={40} className="text-orange-400" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: "OpenAI", icon: <SiOpenai size={40} className="text-teal-400" /> },
  ];

  return (
    <section className="py-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-blue-400 font-semibold tracking-[4px] uppercase text-sm mb-12">
          Technologies We Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="
                group
                rounded-2xl
                border border-blue-500/20
                bg-[#071226]
                p-6
                flex flex-col
                items-center
                justify-center
                gap-4
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
                transition-all duration-300
              "
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              <span className="text-white text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}