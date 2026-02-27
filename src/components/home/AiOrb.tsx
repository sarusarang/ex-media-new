"use client";

import Orb from "../Orb";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";



export default function AiOrb() {


    return (

        <section className="w-full h-screen relative bg-[#050505] overflow-hidden flex items-center justify-center">


            {/* Orb Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Orb
                    hoverIntensity={0.15}
                    rotateOnHover
                    hue={15}
                    forceHoverState={false}
                    backgroundColor="#050505"
                />
            </div>


            {/* Seamless Vignette Overlay for better text readability */}
            <div className="absolute inset-0 pointer-events-none z-10" style={{ background: 'radial-gradient(circle at center, transparent 0%, #050505 100%)' }}></div>


            {/* Foreground Content */}
            <div className="relative z-20 flex flex-col items-center justify-center px-4 md:px-12 text-center w-full max-w-5xl mx-auto pointer-events-none pb-16 md:pb-0">


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md pointer-events-auto hover:bg-white/10 transition-colors cursor-pointer shadow-xl">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span>AI-Powered Experiences</span>
                    </div>
                </motion.div>


                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-8 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-6xl lg:text-6xl pointer-events-auto leading-tight"
                >
                    Intelligent Design <br className="hidden md:block" />
                    For The <span className="bg-linear-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Future.</span>
                </motion.h1>

              

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 sm:flex-row items-center justify-center w-full sm:w-auto pointer-events-auto"
                >
                    <button className="w-full sm:w-auto rounded-full bg-white px-8 py-2 font-semibold text-black transition-transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:cursor-pointer">
                        Get Started
                    </button>
                    
                    <button className="w-full sm:w-auto rounded-full border border-white/20 bg-black/40 px-8 py-2 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40 hover:cursor-pointer">
                        Learn More
                    </button>

                </motion.div>

            </div>


        </section>


    );


}