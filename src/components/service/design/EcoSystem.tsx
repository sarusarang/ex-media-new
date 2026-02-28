"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import { Layers, Layout, Monitor, Palette, PenTool } from "lucide-react";



export default function EcoSystem() {



    return (


        <section className="bg-black text-white py-24 mx-2 md:mx-6 mb-12 md:mb-16 rounded-[4rem] md:rounded-[6rem] shadow-2xl overflow-hidden relative border border-white/10">


            {/* Animated Cinematic Background */}
            <div className="absolute inset-0 z-0 text-black">


                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-violet-900/30 via-black to-black"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>


                {/* Fluid Blur Elements */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] -left-[10%] w-[800px] h-[800px] bg-fuchsia-600/20 rounded-full blur-[150px]"
                ></motion.div>


                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.5, 0.2],
                        x: [0, 100, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]"
                ></motion.div>


            </div>



            <div className="container mx-auto px-4 md:px-12 relative z-10">


                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-24">


                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(139,92,246,0.2)]"
                    >
                        <div className="p-1 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500">
                            <Palette className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-violet-100">Creative Arsenal</span>
                    </motion.div>


                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight"
                    >
                        Design <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-pink-400 italic font-light">Apparatus</span>
                    </motion.h2>


                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl font-light"
                    >
                        We synthesize aesthetics and psychology. Utilizing industry-dominating software to construct breathtaking, human-centric interfaces optimized for absolute engagement.
                    </motion.p>


                </div>



                {/* Premium Tool Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">

                    {[
                        { name: "Figma", type: "Interface Design", desc: "Collaborative interface and prototyping dominance for scalable, enterprise-grade design systems.", icon: <Layout className="w-8 h-8" />, gradient: "from-pink-500 to-rose-500", shadow: "group-hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]" },
                        { name: "Adobe Creative Cloud", type: "Asset Generation", desc: "Unmatched creative power for intricate vector illustrations, image manipulation, and brand assets.", icon: <PenTool className="w-8 h-8" />, gradient: "from-red-500 to-orange-500", shadow: "group-hover:shadow-[0_0_50px_rgba(239,68,68,0.3)]" },
                        { name: "Framer", type: "Motion Architecture", desc: "Interactive, high-fidelity motion design and spring physics that bridges code and pure creativity.", icon: <Layers className="w-8 h-8" />, gradient: "from-blue-500 to-cyan-500", shadow: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]" },
                        { name: "Webflow", type: "Visual Development", desc: "Semantic visual development ensuring a pixel-perfect, performant transition from canvas to browser.", icon: <Monitor className="w-8 h-8" />, gradient: "from-indigo-500 to-violet-500", shadow: "group-hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]" },

                    ].map((design, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: i * 0.1, type: "spring", stiffness: 80 }}
                            className={`group relative bg-white/2 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col items-start ${design.shadow}`}
                        >


                            {/* Liquid Background Hover Effect */}
                            <div className={`absolute inset-0 bg-linear-to-br ${design.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700`}></div>


                            {/* Icon Container with Glassmorphism */}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 bg-white/5 border border-white/10 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${design.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                                <div className="text-gray-300 group-hover:text-white transition-colors duration-500">
                                    {design.icon}
                                </div>
                            </div>


                            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 mb-3 uppercase group-hover:text-gray-300 transition-colors">{design.type}</span>


                            <h3 className="text-2xl font-bold mb-4 relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{design.name}</h3>


                            <p className="text-gray-400 leading-relaxed font-light text-sm relative z-10 mt-auto group-hover:text-gray-300 transition-colors">
                                {design.desc}
                            </p>


                        </motion.div>
                    ))}

                </div>

            </div>


            <BorderBeam
                duration={6}
                size={900}
                className="from-transparent via-violet-500 to-transparent"
            />

            <BorderBeam
                duration={6}
                delay={3}
                size={900}
                borderWidth={2}
                className="from-transparent via-fuchsia-500 to-transparent"
            />

        </section>

    );



}