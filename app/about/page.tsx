import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/src/components/home/CTA";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <section className="py-32 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                    <span className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-widest text-xs">
                        About Mobcodu
                    </span>

                    <h1 className="text-5xl lg:text-7xl font-bold mt-6">
                        We Build
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                            Future-Ready Digital Products
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
                        Mobcodu Technologies helps startups and enterprises transform
                        ideas into innovative AI solutions, web applications,
                        mobile apps and scalable digital products.
                    </p>

                </div>
            </section>

            {/* Who We Are */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Image */}
                        <div>
                            <img
                                src="/about/aboutPage.png"
                                alt="About Mobcodu"
                                className="rounded-3xl border border-white/10 w-full"
                            />
                        </div>

                        {/* Right Content */}
                        <div>

                            <span className="text-blue-400 uppercase tracking-widest text-sm">
                                Who We Are
                            </span>

                            <h2 className="text-5xl font-bold mt-4 mb-8">
                                Turning Ideas Into
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                    Digital Success
                                </span>
                            </h2>

                            <p className="text-gray-400 leading-relaxed text-lg">
                                Mobcodu Technologies is a software development company focused
                                on AI solutions, web applications, mobile apps and cloud-based
                                digital products.
                            </p>

                            <p className="text-gray-400 leading-relaxed text-lg mt-6">
                                We help startups, enterprises and growing businesses build
                                scalable technology solutions that drive innovation and growth.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold">
                            Mission & Vision
                        </h2>

                        <p className="text-gray-400 mt-4">
                            Our purpose and long-term goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            <div className="text-5xl mb-4">🚀</div>

                            <h3 className="text-3xl font-bold mb-4">
                                Our Mission
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                To empower businesses with innovative technology solutions
                                that drive growth, efficiency and digital transformation.
                            </p>
                        </div>

                        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500 transition">
                            <div className="text-5xl mb-4">🌍</div>

                            <h3 className="text-3xl font-bold mb-4">
                                Our Vision
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                To become a globally trusted technology partner delivering
                                future-ready digital products and AI-driven innovation.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Our Expertise */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold">
                            Our Expertise
                        </h2>

                        <p className="text-gray-400 mt-4">
                            Technologies and services we specialize in.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            🤖 AI Development
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            🌐 Web Development
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            📱 Mobile App Development
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            ☁️ Cloud Solutions
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            🎨 UI/UX Design
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            ⚙️ Software Development
                        </div>

                    </div>

                </div>
            </section>

            {/* Stats */}
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
                                Technologies
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold text-blue-500">
                                100%
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Support
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Why Choose Mobcodu */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold">
                            Why Choose Mobcodu
                        </h2>

                        <p className="text-gray-400 mt-4">
                            Delivering innovation, quality and long-term success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold mb-3">
                                Fast Delivery
                            </h3>
                            <p className="text-gray-400">
                                Quick development cycles with high-quality output.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            <div className="text-5xl mb-4">👨‍💻</div>
                            <h3 className="text-2xl font-bold mb-3">
                                Expert Team
                            </h3>
                            <p className="text-gray-400">
                                Skilled developers with experience across technologies.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            <div className="text-5xl mb-4">🤖</div>
                            <h3 className="text-2xl font-bold mb-3">
                                AI-Powered Solutions
                            </h3>
                            <p className="text-gray-400">
                                Leveraging AI to create smarter business solutions.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            <div className="text-5xl mb-4">🔒</div>
                            <h3 className="text-2xl font-bold mb-3">
                                Secure Development
                            </h3>
                            <p className="text-gray-400">
                                Security-first approach for all applications.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            <div className="text-5xl mb-4">📞</div>
                            <h3 className="text-2xl font-bold mb-3">
                                Dedicated Support
                            </h3>
                            <p className="text-gray-400">
                                Ongoing maintenance and support after launch.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-2xl font-bold mb-3">
                                Scalable Architecture
                            </h3>
                            <p className="text-gray-400">
                                Built to grow with your business needs.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <CTA />

            <Footer />
        </>
    );
}