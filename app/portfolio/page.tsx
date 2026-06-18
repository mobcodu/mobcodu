import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
    return (
        <>
            <Navbar />

            <section className="py-32 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <span className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-widest text-xs">
                        Our Portfolio
                    </span>

                    <h1 className="text-5xl lg:text-7xl font-bold mt-6">
                        Featured
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                            Digital Products
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
                        Explore some of our latest AI, Web, Mobile and Cloud projects.
                    </p>

                </div>

            </section>

            <div className="flex flex-wrap justify-center gap-4 mb-12">

                <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                    All
                </button>

                <button className="px-5 py-2 rounded-full border border-white/10 hover:border-blue-500">
                    AI
                </button>

                <button className="px-5 py-2 rounded-full border border-white/10 hover:border-blue-500">
                    Mobile Apps
                </button>

                <button className="px-5 py-2 rounded-full border border-white/10 hover:border-blue-500">
                    Web Apps
                </button>

                <button className="px-5 py-2 rounded-full border border-white/10 hover:border-blue-500">
                    Healthcare
                </button>

                <button className="px-5 py-2 rounded-full border border-white/10 hover:border-blue-500">
                    FinTech
                </button>

            </div>

            {/* Portfolio Projects */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold">
                            Featured Projects
                        </h2>

                        <p className="text-gray-400 mt-4">
                            Explore our latest AI, Mobile, Web and Enterprise solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            {
                                title: "AI Chatbot Platform",
                                image: "/portfolio/port1.png",
                                tech: "OpenAI • Next.js",
                            },
                            {
                                title: "Healthcare App",
                                image: "/portfolio/port2.png",
                                tech: "Flutter • Firebase",
                            },
                            {
                                title: "E-Commerce Platform",
                                image: "/portfolio/port3.png",
                                tech: "Next.js • MongoDB",
                            },
                            {
                                title: "FinTech Dashboard",
                                image: "/portfolio/port4.png",
                                tech: "React • Node.js",
                            },
                            {
                                title: "Food Delivery App",
                                image: "/portfolio/port5.png",
                                tech: "Flutter • AWS",
                            },
                            {
                                title: "CRM Software",
                                image: "/portfolio/port6.png",
                                tech: "React • PostgreSQL",
                            },
                            {
                                title: "Real Estate Portal",
                                image: "/portfolio/port1.png",
                                tech: "Next.js • MongoDB",
                            },
                            {
                                title: "Travel Booking App",
                                image: "/portfolio/port2.png",
                                tech: "Flutter • Firebase",
                            },
                            {
                                title: "Learning Platform",
                                image: "/portfolio/port3.png",
                                tech: "React • Node.js",
                            },
                            {
                                title: "Fitness Tracking App",
                                image: "/portfolio/port4.png",
                                tech: "Flutter • Supabase",
                            },
                            {
                                title: "AI Image Generator",
                                image: "/portfolio/port5.png",
                                tech: "OpenAI • Next.js",
                            },
                            {
                                title: "Enterprise ERP",
                                image: "/portfolio/port6.png",
                                tech: "React • AWS",
                            },
                        ].map((project) => (
                            <div
                                key={project.title}
                                className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                                />

                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mt-2">
                                        {project.tech}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                        <div>
                            <h3 className="text-5xl font-bold text-blue-500">
                                50+
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Projects Delivered
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-blue-500">
                                25+
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Happy Clients
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-blue-500">
                                10+
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Industries Served
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-blue-500">
                                100%
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Client Satisfaction
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <section className="py-24">
                <div className="max-w-5xl mx-auto px-6">

                    <div className="rounded-[40px] p-16 text-center border border-white/10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20">

                        <h2 className="text-5xl font-bold">
                            Have a Project Idea?
                        </h2>

                        <p className="text-gray-300 mt-6 text-lg">
                            Let's build your next AI, Web or Mobile solution together.
                        </p>

                        <div className="mt-8">
                            <a
                                href="/contact"
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 inline-block"
                            >
                                Get Free Quote
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}