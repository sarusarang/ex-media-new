"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";




export default function AnimatedCareers() {


    const sectionRef = useRef<HTMLElement>(null);


    return (


        <section ref={sectionRef} className="w-full bg-[#050505] text-white py-14 md:py-20 px-4 md:px-12 lg:px-16 overflow-hidden relative">


            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>


            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">


                {/* Left Side: Stunning Image Reveal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-1/2 relative group"
                >

                    <div className="w-full aspect-square md:aspect-4/3 lg:aspect-square rounded-[2rem] overflow-hidden relative border border-white/10 shadow-[0_0_50px_-15px_rgba(255,255,255,0.05)]">

                        {/* Sample high quality image for careers vibe */}
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                            alt="Team Collaboration"
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />

                        {/* Elegant Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-tr from-[#050505]/80 via-transparent to-transparent z-10"></div>

                    </div>


                    {/* Floating Accent Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="absolute bottom-10 -left-6 md:-left-12 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl hidden md:block"
                    >


                        <div className="flex items-center gap-4">


                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>


                            <div>
                                <h4 className="font-bold text-lg text-white">Join the best.</h4>
                                <p className="text-gray-400 text-sm">We&apos;re actively hiring.</p>
                            </div>


                        </div>


                    </motion.div>


                </motion.div>



                {/* Right Side: Engaging Copy */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">


                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-8"
                    >

                        <span className="inline-flex items-center gap-3 mb-6">
                            <span className="w-8 h-px bg-white/30"></span>
                            <span className="text-sm font-semibold tracking-widest uppercase text-gray-400">Careers</span>
                        </span>


                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-8 leading-[1.1] text-white">
                            Build the <span className="italic text-gray-400">future</span> <br />
                            with us.
                        </h2>

                    </motion.div>


                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl"
                    >

                        We are a collective of visionaries, engineers, and creatives pushing the boundaries of what&apos;s possible. If you&apos;re passionate about crafting extraordinary digital experiences, your best work is waiting for you here.

                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row gap-5"
                    >

                        <button className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">

                            <span className="relative z-10">View Open Positions</span>

                            <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />

                            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>

                        </button>


                        <button className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 hover:bg-white/10 hover:border-white/20">
                            Our Culture
                        </button>

                    </motion.div>


                </div>


            </div>


        </section>


    );


}
