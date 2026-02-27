"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceOverviewPage() {
    return (
        <main className="min-h-screen bg-white text-black">

            {/* Minimal & Elegant Hero */}
            <section className="pt-32 pb-24 md:pt-48 md:pb-32 container mx-auto px-4 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
                {/* Subtle Graphic Element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="inline-flex items-center gap-3 mb-6 bg-gray-50 border border-gray-100 px-6 py-2 rounded-full">
                    <Sparkles className="w-4 h-4 text-[#D32F2F]" />
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Our Capabilities</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-8">
                    Elevating <span className="italic text-gray-400">Brands.</span><br />
                    Scaling <span className="italic text-[#D32F2F]">Growth.</span>
                </h1>

                <p className="text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
                    A multi-disciplinary approach combining striking design, cutting-edge technology, and data-driven marketing to power the leading brands of tomorrow.
                </p>
            </section>

            {/* 2. Our Methodology Section */}
            <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-12 relative z-10 text-white">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Our <span className="text-gray-500 italic">Methodology</span></h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">A proven, systematic framework designed to eliminate guesswork and guarantee exceptional, repeatable results for every client.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Deep-dive analysis into your goals, audience, and competitive landscape.", active: true },
                            { step: "02", title: "Strategy", desc: "Architecting a comprehensive blueprint tailored for dominance.", active: false },
                            { step: "03", title: "Execution", desc: "Flawless implementation by our elite team of specialists.", active: false },
                            { step: "04", title: "Evolution", desc: "Continuous optimization and scaling based on real-time data.", active: false }
                        ].map((method, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="relative p-8 rounded-3xl border border-white/10 bg-black/50 hover:bg-white/5 transition-colors group"
                            >
                                <div className="text-5xl font-serif text-white/10 font-bold mb-6 group-hover:text-white/20 transition-colors">{method.step}</div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    {method.title}
                                    {method.active && <div className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse"></div>}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">{method.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Huge Image Separator */}
            <div className="w-full h-[50vh] md:h-[70vh] relative">
                <img
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2000&auto=format&fit=crop"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Large Service Grid */}
            <section className="py-24 md:py-32 container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Branding */}
                    <Link href="/service/branding" className="group rounded-[3rem] bg-[#050505] text-white p-12 md:p-16 h-[500px] flex flex-col justify-between overflow-hidden relative">
                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative z-10 flex justify-between items-start">
                            <h2 className="text-4xl md:text-5xl font-serif">Branding</h2>
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                        <p className="relative z-10 text-xl text-gray-400 max-w-sm">Crafting enduring identities and compelling narratives.</p>
                    </Link>

                    {/* Technology */}
                    <Link href="/service/technology" className="group rounded-[3rem] bg-gray-100 text-black p-12 md:p-16 h-[500px] flex flex-col justify-between overflow-hidden relative">
                        <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <h2 className="text-4xl md:text-5xl font-serif">Technology</h2>
                            <div className="w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                        <p className="relative z-10 text-xl text-gray-600 max-w-sm">Engineering robust digital platforms and AI solutions to dominate the modern web.</p>
                    </Link>

                    {/* Experience Design */}
                    <Link href="/service/experience-design" className="group rounded-[3rem] bg-blue-600 text-white p-12 md:p-16 h-[500px] flex flex-col justify-between overflow-hidden relative">
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <h2 className="text-4xl md:text-5xl font-serif">Experience <br /> Design</h2>
                            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                        <p className="relative z-10 text-xl text-white/80 max-w-sm">Frictionless, human-centric interfaces tailored to absolute pixel perfection.</p>
                    </Link>

                    {/* Digital Marketing */}
                    <Link href="/service/digital-marketing" className="group rounded-[3rem] bg-[#D32F2F] text-white p-12 md:p-16 h-[500px] flex flex-col justify-between overflow-hidden relative">
                        <div className="absolute inset-0 bg-linear-to-br from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <h2 className="text-4xl md:text-5xl font-serif">Digital <br /> Marketing</h2>
                            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#D32F2F] transition-colors duration-300">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                        <p className="relative z-10 text-xl text-white/90 max-w-sm">Unlocking hyper-growth through relentless data optimization and strategy.</p>
                    </Link>

                </div>
            </section>

        </main >
    );
}