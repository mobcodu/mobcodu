import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function BlockchainPage() {
  const services = [
    "Smart Contract Development",
    "NFT Marketplace Development",
    "Crypto Wallet Development",
    "DeFi Solutions",
    "Token Development",
    "Blockchain Consulting",
  ];

  const technologies = [
    "Ethereum",
    "Solidity",
    "Polygon",
    "Binance Smart Chain",
    "Web3.js",
    "Hardhat",
    "MetaMask",
    "IPFS",
  ];

  const benefits = [
    "Enhanced Security",
    "Transparent Transactions",
    "Decentralized Systems",
    "Reduced Costs",
    "Faster Transactions",
    "Improved Trust",
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

          <span className="text-blue-400 uppercase tracking-widest text-sm">
            Blockchain Development
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6">
            Secure &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Decentralized Solutions
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Build next-generation blockchain applications, smart contracts,
            NFT platforms and decentralized solutions for your business.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Blockchain Services
            </h2>

            <p className="text-gray-400 mt-4">
              End-to-end blockchain development solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
              >
                {service}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Benefits of Blockchain
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                {benefit}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Blockchain Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                {tech}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Why Choose Mobcodu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Secure Development
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Experienced Team
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Scalable Architecture
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              Ongoing Support
            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}