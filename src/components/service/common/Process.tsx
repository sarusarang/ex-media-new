"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";




export default function Process({ category }: { category: any }) {



    return (


        <section className="bg-white text-black py-10 md:py-14 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 mb-12 md:mb-16 relative overflow-hidden">


            {/* Subtle light mesh background */}
            <div className="absolute inset-0 opacity-40 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>


            <div className="container mx-auto px-4 md:px-12 relative z-10">


                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                        <span className="text-[#D32F2F] font-bold tracking-widest uppercase text-sm mb-2 block">How We Work </span>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-2 leading-tight">
                            Our <span className="italic text-gray-900">Process</span>
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            A meticulously designed workflow that transforms your vision into a scalable, high-performance reality with absolute precision.
                        </p>

                    </motion.div>

                </div>


                <div className="space-y-12 md:space-y-24">

                    {/* 3 Step Zig-Zag */}
                    {[
                        {
                            step: "01",
                            title: "Discovery & Strategy",
                            desc: `We begin by reverse-engineering your goals. Immersing ourselves in your industry, audience, and ${category.title.toLowerCase()} objectives allows us to craft a blueprint optimized for dominance.`,
                            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                        },
                        {
                            step: "02",
                            title: "Design & Architecture",
                            desc: "Moving from concept to architecture, our elite designers and engineers build robust, scalable frameworks. Every pixel and line of code is scrutinized to ensure it aligns perfectly with the strategic vision.",
                            img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
                        },
                        {
                            step: "03",
                            title: "Execution & Evolution",
                            desc: "Launch is only the beginning. We deploy with precision and continuously monitor data to refine, optimize, and scale the results exponentially.",
                            img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
                        }

                    ].map((process, idx) => (


                        <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>


                            {/* Image Half */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full lg:w-1/2"
                            >

                                <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group">

                                    <div className="absolute inset-0 bg-black/10 z-10 transition-colors group-hover:bg-transparent duration-700"></div>

                                    <img src={process.img} alt={process.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />

                                    <div className="absolute bottom-6 left-6 z-20 backdrop-blur-md bg-white/40 border border-white/50 text-black px-6 py-3 rounded-full font-serif text-2xl font-bold shadow-lg">
                                        {process.step}
                                    </div>

                                </div>

                            </motion.div>



                            {/* Text Half */}
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="w-full lg:w-1/2"
                            >
                                <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{process.title}</h3>

                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">{process.desc}</p>

                                <div className="mt-10 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black hover:text-[#D32F2F] transition-colors cursor-pointer group/btn">

                                    Learn More

                                    <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover/btn:border-[#D32F2F] group-hover/btn:bg-[#D32F2F] group-hover/btn:text-white transition-all duration-300">

                                        <ArrowUpRight className="w-4 h-4" />

                                    </div>

                                </div>

                            </motion.div>


                        </div>

                    ))}

                </div>

            </div>

        </section>


    )



}