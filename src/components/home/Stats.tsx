"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "100%",
    label: "Client Focused",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "24/7",
    label: "Support",
  },
  {
    value: "AI Ready",
    label: "Solutions",
  },
];

export default function Stats() {
  return (
    <section className="py-28 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-[4px] text-sm font-semibold">
            Our Achievements
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Delivering Excellence
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Through Innovation
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            We help startups and enterprises build scalable digital products
            with modern technologies and exceptional user experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                group
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
                hover:border-blue-500/50
                hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                transition-all duration-300
              "
            >
              <h3 className="
                text-5xl md:text-6xl
                font-extrabold
                bg-gradient-to-r
                from-blue-400
                via-cyan-400
                to-purple-500
                bg-clip-text
                text-transparent
              ">
                {item.value}
              </h3>

              <p className="mt-4 text-gray-300 text-lg">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}