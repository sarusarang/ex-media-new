"use client";

import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";




export default function HeroSlider() {



    return (



        <section className="relative w-full h-screen overflow-hidden">


            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/Award Winning Production Company - Ridder Films Commercial Ad.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Dark Inset Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent z-10" />



            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center pt-24 text-white">


                <div className="max-w-3xl">


                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-4 leading-[1.05] drop-shadow-2xl font-serif italic">
                            Think Beyond <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/60 drop-shadow-none">
                                Your Ads
                            </span>
                        </h1>
                    </motion.div>


                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl lg:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl drop-shadow-md font-serif italic"
                    >
                        We are driving brand success through innovation, creativity, and strategic excellence.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >

                        <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-full hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all w-full sm:w-auto font-serif italic hover:cursor-pointer">
                            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Our Work
                        </button>

                        <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all w-full sm:w-auto font-serif italic hover:cursor-pointer">
                            Services
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                    </motion.div>


                </div>


            </div>


        </section>



    );


}
