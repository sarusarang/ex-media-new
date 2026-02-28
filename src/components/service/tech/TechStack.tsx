"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import { Code2, Database, Layers, Monitor, Smartphone, Sparkles, Terminal } from "lucide-react";




export default function TechStack() {


    return (



        <section className="bg-black text-white py-24 mx-2 md:mx-6 mb-12 md:mb-16 rounded-[4rem] md:rounded-[6rem] shadow-2xl overflow-hidden relative border border-white/10">


            {/* Animated Cybernetic Background */}
            <div className="absolute inset-0 z-0">


                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>


                {/* Glowing Orbs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"
                ></motion.div>

                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-[100px]"
                ></motion.div>

            </div>



            <div className="container mx-auto px-4 md:px-12 relative z-10">


                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                    >

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <Code2 className="w-4 h-4 text-blue-400" />

                        </motion.div>

                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-100">Tech Architecture</span>

                    </motion.div>


                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-8xl font-serif mb-6 leading-tight whitespace-pre-wrap"
                    >
                        Engineering <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 italic">Ecosystem</span>
                    </motion.h2>


                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl font-light"
                    >
                        We don't just write code; we architect resilient, massively scalable systems utilizing the bleeding edge of modern development frameworks.
                    </motion.p>


                </div>



                {/* Staggered Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">

                    {[
                        { name: "Frontend / UI", tag: "React, Next.js, Vue", desc: "Pixel-perfect, ultra-performant interfaces that dominate Core Web Vitals and engage users instantly.", icon: <Monitor className="w-8 h-8" />, gradient: "from-cyan-500 to-blue-600", glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]" },
                        { name: "Backend Core", tag: "Node.js, Python, Go", desc: "Robust microservices and APIs engineered to handle millions of requests with sub-millisecond latency.", icon: <Terminal className="w-8 h-8" />, gradient: "from-emerald-400 to-teal-600", glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]" },
                        { name: "Cloud Native", tag: "AWS, Vercel, Docker", desc: "Infinite horizontal scalability with containerized deployments and edge-computing infrastructure.", icon: <Database className="w-8 h-8" />, gradient: "from-orange-400 to-red-600", glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]" },
                        { name: "Mobile Ecosystem", tag: "React Native, Swift", desc: "Native iOS and Android experiences that leverage device hardware for buttery-smooth performance.", icon: <Smartphone className="w-8 h-8" />, gradient: "from-violet-500 to-purple-700", glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]" },
                        { name: "AI & Machine Learning", tag: "OpenAI, PyTorch", desc: "Proprietary algorithmic integrations that bring generative intelligence and automation to your product.", icon: <Sparkles className="w-8 h-8" />, gradient: "from-pink-500 to-rose-600", glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]" },
                        { name: "Blockchain & Web3", tag: "Solidity, Rust", desc: "Secure smart contract development and decentralized application (dApp) architecture.", icon: <Layers className="w-8 h-8" />, gradient: "from-yellow-400 to-amber-600", glow: "group-hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]" }

                    ].map((tech, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: i * 0.1, type: "spring", stiffness: 80 }}
                            className={`group relative bg-white/3 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/30 hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col ${tech.glow}`}
                        >

                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-linear-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>


                            {/* Icon Box */}
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative z-10 bg-linear-to-br ${tech.gradient} text-white shadow-lg shadow-black/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                {tech.icon}
                            </div>


                            <span className="text-xs font-bold tracking-widest text-gray-500 mb-3 uppercase">{tech.tag}</span>
                            <h3 className="text-3xl font-bold mb-4 relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">{tech.name}</h3>


                            <p className="text-gray-400 leading-relaxed font-light text-base relative z-10 mt-auto">
                                {tech.desc}
                            </p>


                        </motion.div>

                    ))}

                </div>

            </div>


            <BorderBeam
                duration={6}
                size={900}
                className="from-transparent via-blue-500 to-transparent"
            />

            <BorderBeam
                duration={6}
                delay={3}
                size={900}
                borderWidth={2}
                className="from-transparent via-indigo-500 to-transparent"
            />


        </section>


    )



} 