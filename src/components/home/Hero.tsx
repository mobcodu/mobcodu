"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Settings,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] flex items-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold"
            >
              Welcome To Mobcodu Technologies
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95]"
            >
              Transforming
              <br />
              Ideas
              <br />
              Into Powerful
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 text-gray-400 text-xl max-w-2xl leading-relaxed"
            >
              We build intelligent, scalable and reliable digital solutions
              using AI, modern technologies and innovative thinking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link href="/contact">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium">
                  Get Free Consultation
                  <ArrowRight size={18} />
                </button>
              </Link>

              <Link href="/services">
                <button className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition-all duration-300">
                  View Our Services
                </button>
              </Link>
            </motion.div>

            {/* Trusted Users */}
            {/* <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-[#030712]" />
                <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-[#030712]" />
                <div className="w-10 h-10 rounded-full bg-cyan-500 border-2 border-[#030712]" />
                <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-[#030712]" />
              </div>

              <p className="text-gray-400 text-sm">
                Trusted by businesses worldwide
              </p>
            </div> */}
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden lg:flex items-center justify-center h-[700px]">

            {/* Outer Orbit */}
            <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/20" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-purple-500/20" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-500/20" />

            {/* Center Logo */}
            <div className="relative z-20">
              <Image
                src="/m.png"
                alt="Mobcodu Technologies"
                width={280}
                height={280}
                priority
                className="drop-shadow-[0_0_60px_rgba(59,130,246,0.8)]"
              />
            </div>

            {/* Connecting Lines */}
            <div className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-blue-500/10 animate-spin [animation-duration:30s]" />

            {/* Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-[120px]" />
            <div className="absolute w-64 h-64 rounded-full bg-purple-500/20 blur-[100px]" />


            {/* Bottom Platform */}
            <div className="absolute bottom-28">
              <div className="w-60 h-16 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl" />
              <div className="absolute inset-0 border border-blue-500/20 rounded-full" />
            </div>



            {/* AI CARD */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-56 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all">
              <Brain className="text-cyan-400" size={30} />
              <h3 className="mt-3 font-semibold text-white">
                AI Development
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Smart AI Solutions
              </p>
            </div>

            {/* WEB CARD */}
            <div className="absolute top-40 left-0 w-56 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all">
              <Globe className="text-cyan-400" size={30} />
              <h3 className="mt-3 font-semibold text-white">
                Web Development
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Modern Websites
              </p>
            </div>

            {/* MOBILE CARD */}
            <div className="absolute top-40 right-0 w-56 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all">
              <Smartphone className="text-cyan-400" size={30} />
              <h3 className="mt-3 font-semibold text-white">
                Mobile Apps
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Android & iOS Apps
              </p>
            </div>

            {/* CLOUD CARD */}
            <div className="absolute bottom-24 left-10 w-56 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all">
              <Cloud className="text-cyan-400" size={30} />
              <h3 className="mt-3 font-semibold text-white">
                Cloud Solutions
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Scalable Infrastructure
              </p>
            </div>

            {/* AUTOMATION CARD */}
            <div className="absolute bottom-24 right-10 w-56 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all">
              <Settings className="text-cyan-400" size={30} />
              <h3 className="mt-3 font-semibold text-white">
                Automation
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Business Automation
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}