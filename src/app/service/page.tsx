"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Target, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/service/common/HeroBanner";
import LightPillar from "@/components/LightPillar";
import { BorderBeam } from "@/components/ui/border-beam";
import ServiceCategories from "@/components/service/AllCategory";
import OurImpact from "@/components/service/OurImpact";
import EnquiryForm from "@/components/common/EnquiryForm";



export default function ServiceOverviewPage() {


    return (


        <main className="min-h-screen bg-black text-white">


            {/* Stunning Premium Hero */}
            <HeroBanner title="Our Services" desc="A multi-disciplinary approach combining striking design, cutting-edge technology." heroComponent={<LightPillar
                topColor="#5227FF"
                bottomColor="#FF9FFC"
                intensity={1}
                rotationSpeed={0.4}
                glowAmount={0.002}
                pillarWidth={4}
                pillarHeight={0.4}
                noiseIntensity={0.5}
                pillarRotation={25}
                interactive={false}
                mixBlendMode="hard-light"
                quality="high"
            />} />



            {/* 2. Our Methodology Section */}
            <section className="py-10 md:py-16 bg-[#050505] relative overflow-hidden">


                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>


                <div className="container mx-auto px-4 md:px-12 relative z-10 text-white">


                    {/* Section Header */}
                    <div className="flex flex-col items-center text-center mb-10 md:mb-16">


                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.05)] relative overflow-hidden group/badge"
                        >
                            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000"></div>
                            <Sparkles className="w-4 h-4 text-[#D32F2F] relative z-10" />
                            <span className="text-sm font-bold tracking-widest uppercase text-white relative z-10 drop-shadow-md">The Blueprint</span>
                        </motion.div>


                        <motion.h2
                            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight"
                        >
                            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-400 to-gray-600 italic">Methodology</span>
                        </motion.h2>


                        <motion.p
                            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl"
                        >
                            A proven, systematic framework designed to eliminate guesswork, mitigate risk, and guarantee exceptional, repeatable results.
                        </motion.p>


                    </div>



                    {/* Interactive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">


                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden lg:block absolute top-[104px] left-[12%] right-[12%] h-px bg-linear-to-r from-transparent via-white/20 to-transparent z-0"></div>

                        {[
                            { step: "01", title: "Discovery", desc: "Deep-dive analysis into your goals, audience, and competitive landscape.", active: true, icon: Target, glow: "from-blue-600/30 to-cyan-400/30", color: "text-blue-400" },
                            { step: "02", title: "Strategy", desc: "Architecting a comprehensive blueprint tailored for absolute market dominance.", active: false, icon: Lightbulb, glow: "from-blue-600/30 to-cyan-400/30", color: "text-blue-400" },
                            { step: "03", title: "Execution", desc: "Flawless implementation by our elite team of specialists and engineers.", active: false, icon: Rocket, glow: "from-blue-600/30 to-cyan-400/30", color: "text-blue-400" },
                            { step: "04", title: "Evolution", desc: "Continuous optimization and scaling based on real-time data analysis.", active: false, icon: TrendingUp, glow: "from-blue-600/30 to-cyan-400/30", color: "text-blue-400" }

                        ].map((method, idx) => (


                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", stiffness: 60, damping: 20 }}
                                className="group relative z-10 h-full"
                            >


                                {/* Card Container */}
                                <div className="h-full relative rounded-[2rem] p-px overflow-hidden backdrop-blur-3xl bg-white/5 transition-colors duration-500 hover:bg-white/10">


                                    {/* Hover gradient border line (top highlight) */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>


                                    {/* Inner content */}
                                    <div className="h-full relative p-8 md:p-10 rounded-[31px] bg-[#0a0a0a]/90 flex flex-col items-start overflow-hidden border border-white/5 group-hover:border-transparent transition-colors duration-500">


                                        {/* Card background glow on hover */}
                                        <div className={`absolute -top-32 -right-32 w-64 h-64 bg-linear-to-br ${method.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:scale-110`}></div>


                                        {/* Top section: Icon & Number */}
                                        <div className="w-full flex justify-between items-start mb-16 relative z-10">
                                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 ease-out shadow-lg overflow-hidden group/iconbox">
                                                <div className="absolute inset-0 bg-white/0 group-hover/iconbox:bg-white/10 transition-colors duration-300"></div>
                                                <method.icon className={`w-7 h-7 text-gray-500 group-hover:${method.color} transition-colors duration-500`} />
                                            </div>
                                            <div className="text-7xl font-serif text-white/5 font-bold group-hover:text-white/20 transition-all duration-500 group-hover:scale-105 tracking-tighter mix-blend-overlay">
                                                {method.step}
                                            </div>
                                        </div>


                                        {/* Bottom section: Text */}
                                        <div className="mt-auto relative z-10 w-full">
                                            <div className="w-8 h-1 bg-white/10 rounded-full mb-6 group-hover:w-full transition-all duration-700 ease-out group-hover:bg-white/20"></div>

                                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:translate-x-2 transition-transform duration-500 ease-out flex items-center gap-3">
                                                {method.title}
                                                {method.active && <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D32F2F] opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-[#D32F2F]"></span></span>}
                                            </h3>
                                            <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                                                {method.desc}
                                            </p>
                                        </div>


                                    </div>


                                    <BorderBeam
                                        duration={6}
                                        delay={3}
                                        size={400}
                                        borderWidth={2}
                                        className="from-transparent via-blue-500 to-transparent"
                                    />


                                </div>


                            </motion.div>


                        ))}


                    </div>


                </div>


            </section>


            {/* New Services & Subcategories List UI */}
            <ServiceCategories />


            {/* Our Impact Section */}
            <OurImpact />


            {/* Enquiry Form */}
            <EnquiryForm />


        </main >

    );

}



