import Hero from "../components/home/Hero";
import TrustedCompanies from "../components/home/TrustedCompanies";
import Stats from "../components/home/Stats";
import Process from "../components/home/Process";
import Technologies from "../components/home/Technologies";
import Footer from "@/components/Footer";
import Portfolio from "../components/home/Portfolio";
import Services from "../components/home/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "../components/home/CTA";
import Testimonials from "../components/home/Testimonials";
import GlobalPresence from "../components/home/GlobalPresence";
import ClientLogos from "../components/home/ClientLogos";

export default function Home() {
    return (
        <>
            <Hero />

            <ClientLogos />

            <TrustedCompanies />

            <Stats />

            <Services />

            <Portfolio />

            <Process />

            <Technologies />

            <WhyChooseUs />

            <Testimonials />

            <GlobalPresence />

            <CTA />

            <Footer />
        </>
    );
}