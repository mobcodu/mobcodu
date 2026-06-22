"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white/10 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">

        {/* Left Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/mobLogo1.png"
              alt="Mobcodu Technologies"
              width={200}
              height={10}
              priority
            />
          </Link>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex justify-center">
          <ul className="flex items-center text-black text-lg">
            <li>
              <Link href="/" className="px-5 hover:text-blue-600 transition">
                Home
              </Link>
            </li>

            <li className="h-5 w-px bg-black"></li>

            <li>
              <Link href="/about" className="px-5 hover:text-blue-600 transition">
                About
              </Link>
            </li>

            <li className="h-5 w-px bg-black"></li>

            <li>
              <Link href="/services" className="px-5 hover:text-blue-600 transition">
                Services
              </Link>
            </li>

            <li className="h-5 w-px bg-black"></li>

            <li>
              <Link href="/portfolio" className="px-5 hover:text-blue-600 transition">
                Portfolio
              </Link>
            </li>

            <li className="h-5 w-px bg-black"></li>

            <li>
              <Link href="/contact" className="px-5 hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Button */}
        <div className="flex justify-end items-center gap-4">
          <button className="hidden md:block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition">
            Get Quote
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col p-4 gap-4 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>

          <button className="mt-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
}