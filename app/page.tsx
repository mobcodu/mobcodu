import Navbar from "@/components/Navbar";
import Hero from "@/src/components/home/Hero";
import Services from "@/src/components/home/Services";
import Portfolio from "@/src/components/home/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import Process from "@/src/components/home/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import TrustedCompanies from "@/src/components/home/TrustedCompanies";
import Stats from "@/src/components/home/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Stats />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <TechStack />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}