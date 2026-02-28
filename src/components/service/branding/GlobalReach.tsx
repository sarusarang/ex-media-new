"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";





export default function GlobalReach() {

    return (


        <section className="bg-black text-white py-24 mx-2 md:mx-6 mb-12 md:mb-16 rounded-[4rem] md:rounded-[6rem] shadow-2xl overflow-hidden relative border border-white/10">


            {/* Sophisticated Dark Background with Noise */}
            <div className="absolute inset-0 z-0">

                {/* <div className="absolute inset-0 bg-linear-to-b from-neutral-900 via-black to-[#050505]"></div> */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

                {/* Subtle Gold/Bronze Ambient Glow */}
                <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[100px]"
                ></motion.div>

            </div>


            <div className="container mx-auto px-4 md:px-12 relative z-10">


                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between mb-24 max-w-7xl mx-auto">


                    <div className="w-full lg:w-1/2">


                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, type: 'spring' }}
                            className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-xl shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                        >
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-100">Global Authority</span>
                        </motion.div>


                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight"
                        >

                            Industry <br className="hidden md:block" />

                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-amber-400 to-yellow-600 italic font-light">Recognition</span>

                        </motion.h2>

                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-1/2 lg:pt-20"
                    >

                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light lg:border-l lg:border-white/10 lg:pl-10">
                            Our brand architectures transcend aesthetics—they dominate markets, define culture, and command authoritative presence across the globe's most prestigious media venues.
                        </p>

                    </motion.div>

                </div>


                {/* Staggered Masonry-style Grid for Publications/Awards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-7xl mx-auto">

                    {[

                        { name: "VOGUE", label: "Editorial Excellence", metric: "Digital Feature", size: "lg:col-span-2 lg:row-span-2", img: "https://images.unsplash.com/photo-1579621970227-1471d2bfe36b?q=80&w=800&auto=format&fit=crop" },
                        { name: "FORBES", label: "Market Disruption", metric: "Innovation Award", size: "lg:col-span-1 lg:row-span-1", img: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=600&auto=format&fit=crop" },
                        { name: "WIRED", label: "Tech Forward Design", metric: "Annual Review", size: "lg:col-span-2 lg:row-span-2", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" },
                        { name: "TIME", label: "Tech Forward Design", metric: "Annual Review", size: "lg:col-span-1 lg:row-span-1", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" },


                    ].map((item, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 60 }}
                            className={`group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 ${item.size} h-[350px] sm:h-[400px] hover:border-amber-500/30 transition-colors duration-500`}
                        >


                            {/* Background Image with Parallax & Hover Effect */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700 z-10"></div>
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10"></div>
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out opacity-60 group-hover:opacity-80 mix-blend-luminosity" />
                            </div>


                            {/* Content Overlay */}
                            <div className="relative z-20 h-full p-8 md:p-10 flex flex-col justify-between">


                                <div className="flex justify-between items-start">

                                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl text-xs font-bold tracking-[0.2em] uppercase text-gray-300 shadow-xl">
                                        {item.metric}
                                    </span>

                                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 group-hover:bg-amber-500/20 group-hover:border-amber-500/30">
                                        <ArrowUpRight className="w-5 h-5 text-white group-hover:text-amber-400" />
                                    </div>

                                </div>


                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500/90 mb-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">{item.label}</p>
                                    <h3 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-white tracking-widest group-hover:text-amber-50 transition-colors duration-500 drop-shadow-xl" style={{ letterSpacing: "1px" }}>
                                        {item.name}
                                    </h3>
                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>


            <BorderBeam
                duration={6}
                size={900}
                className="from-transparent via-yellow-500 to-transparent"
            />

            <BorderBeam
                duration={6}
                delay={3}
                size={900}
                borderWidth={2}
                className="from-transparent via-amber-500 to-transparent"
            />


        </section>


    )


}