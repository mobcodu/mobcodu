import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-5 gap-10">

          {/* Company Info */}
          <div>
            <img
              src="/mobLogo1.png"
              alt="Mobcodu Logo"
              className="h-auto w-auto mb-4"
            />

            <div className="inline-block">
              <h1 className="text-3xl font-bold leading-none">
                Get In Touch
              </h1>

              <div className="w-1/2 h-1 bg-red-500 rounded-full mt-0.5"></div>
            </div>

            <ul className="mt-4 space-y-3 text-gray-400">
              <li>📧 sales@mobcodu.in</li>
            </ul>

            <div className="flex gap-1 mt-4 md:mt-3">
              <a
                href="https://www.linkedin.com/company/mobcodu-technologie/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
              >
                <FaLinkedinIn size={12} />
              </a>

              <a
                href="https://www.instagram.com/mobcodu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-600 transition"
              >
                <FaInstagram size={12} />
              </a>

              <a
                href="https://www.facebook.com/mobcodu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition"
              >
                <FaFacebookF size={12} />
              </a>

              <a
                href="https://www.facebook.com/mobcodu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition"
              >
                <FaTwitter size={12} />
              </a>
            </div>

            <p className="text-white leading-relaxed mt-4">
              AI, Web, Mobile & Digital Solutions.
              Helping businesses build scalable and innovative digital products.
            </p>

          </div>

          {/* Services */}
          <div className="flex">
            <div className="h-full w-px bg-white mr-4"></div>

            <div>
              <h3 className="text-white font-bold mb-4">
                Services
                <div className="w-1/7 h-0.5 bg-red-500 rounded-full mt-0.5"></div>
              </h3>

              <ul className="space-y-2 text-white">
                <li>
                  <Link href="/services/product-design" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Product Design (UX/UI)
                  </Link>
                </li>

                <li>  
                  <Link href="/services/web-development" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Web Development
                  </Link>
                </li>

                <li>
                  <Link href="/services/mobile-app-development" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Mobile App Development
                  </Link>
                </li>

                <li>
                  <Link href="/services/cloud-solutions" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Cloud Solutions
                  </Link>
                </li>

                <li>
                  <Link href="/services/software-development" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Software Development
                  </Link>
                </li>

                <li>
                  <Link href="/services/cross-platform-development" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Cross-Platform Development
                  </Link>
                </li>

                <li>
                  <Link href="/services/application-support-maintenance" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Application Support & Maintenance
                  </Link>
                </li>

                <li>
                  <Link href="/services/business-analytics" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Business Analytics
                  </Link>
                </li>

                <li>
                  <Link href="/services/ai-ml-development" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    AI | ML Development
                  </Link>
                </li>

                <li>
                  <Link href="/services/consulting-services" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Consulting Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Technologies
              <div className="w-1/5 h-0.5 bg-red-500 rounded-full mt-0.5"></div>
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/technologies/data-analytics" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Data Analytics
                </a>
              </li>

              <li>
                <a href="/technologies/power-bi" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Power BI Solutions
                </a>
              </li>

              <li>
                <a href="/technologies/artificial-intelligence" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Artificial Intelligence
                </a>
              </li>

              <li>
                <a href="/technologies/iot" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Internet of Things (IoT)
                </a>
              </li>

              <li>
                <a href="/technologies/erp-migration" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  ERP Migration
                </a>
              </li>

              <li>
                <a href="/technologies/saas-development" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  SaaS Development
                </a>
              </li>

              <li>
                <a href="/technologies/devops" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  DevOps Automation
                </a>
              </li>

              <li>
                <a href="/technologies/cloud-computing" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Cloud Computing
                </a>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-white font-bold mb-3">
              Developers
              <div className="w-1/5 h-0.5 bg-red-500 rounded-full mt-0.5"></div>
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/developers/ai-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  AI Developers
                </a>
              </li>

              <li>
                <a href="/developers/ml-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  ML Developers
                </a>
              </li>

              <li>
                <a href="/developers/chatbot-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Chatbot Developers
                </a>
              </li>

              <li>
                <a href="/developers/ios-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  iOS Developers
                </a>
              </li>

              <li>
                <a href="/developers/android-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Android Developers
                </a>
              </li>

              <li>
                <a href="/developers/flutter-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Flutter Developers
                </a>
              </li>

              <li>
                <a href="/developers/react-native-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  React Native Developers
                </a>
              </li>

              <li>
                <a href="/developers/kotlin-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Kotlin Developers
                </a>
              </li>

              <li>
                <a href="/developers/javascript-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  JavaScript Developers
                </a>
              </li>

              <li>
                <a href="/developers/nodejs-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Node JS Developers
                </a>
              </li>

              <li>
                <a href="/developers/java-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Java Developers
                </a>
              </li>

              <li>
                <a href="/developers/php-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  PHP Developers
                </a>
              </li>

              <li>
                <a href="/developers/python-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Python Developers
                </a>
              </li>

              <li>
                <a href="/developers/full-stack-developers" className="relative inline-block text-white hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                  Full Stack Developers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white font-bold mb-4">
              Contact
              <div className="w-1/8 h-0.5 bg-red-500 rounded-full mt-0.5"></div>
            </h3>

            <ul className="space-y-6 text-gray-400">

              {/* India */}
              <li className="space-y-2">
                <p className="text-white font-medium">🇮🇳 India</p>

                <p>
                  📞{" "}
                  <a
                    href="tel:+91987654321"
                    className="hover:text-white transition"
                  >
                    +91 9876543210
                  </a>
                </p>

                <p>
                  📧{" "}
                  <a
                    href="mailto:sales@mobcodu.in"
                    className="hover:text-white transition"
                  >
                    sales@mobcodu.in
                  </a>
                </p>

                <p>📍 Noida, Uttar Pradesh, India</p>
              </li>

              {/* USA */}
              <li className="space-y-2">
                <p className="text-white font-medium">🇺🇸 USA</p>

                <p>
                  📞{" "}
                  <a
                    href="tel:+19252048535"
                    className="hover:text-white transition"
                  >
                    +1 (925) 123-2345
                  </a>
                </p>

                <p>
                  📧{" "}
                  <a
                    href="mailto:sales@mobcodu.in"
                    className="hover:text-white transition"
                  >
                    sales@mobcodu.in
                  </a>
                </p>

                <p>📍 California, USA</p>
              </li>

              {/* Canada */}
              <li className="space-y-2">
                <p className="text-white font-medium">🇨🇦 Canada</p>

                <p>
                  📞{" "}
                  <a
                    href="tel:+19252048535"
                    className="hover:text-white transition"
                  >
                    +1 (925) 123-1234
                  </a>
                </p>

                <p>
                  📧{" "}
                  <a
                    href="mailto:sales@mobcodu.in"
                    className="hover:text-white transition"
                  >
                    sales@mobcodu.in
                  </a>
                </p>

                <p>📍 Mississauga, Ontario, Canada</p>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-white text-sm mx-auto">
            © 2026 Mobcodu Technologies. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}