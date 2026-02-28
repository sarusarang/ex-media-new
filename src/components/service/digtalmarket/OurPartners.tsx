"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";




export default function OurPartners() {


    return (


        <section className="bg-white text-black py-16 mx-2 md:mx-6 mb-12 md:mb-16 rounded-[3rem] md:rounded-[5rem] shadow-2xl overflow-hidden relative border border-gray-100">


            {/* Background subtle noise and glow */}
            <div className="absolute inset-0 z-0 bg-white" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-linear-to-bl from-blue-50/50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-rose-50/50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>


            <div className="container mx-auto px-4 md:px-12 relative z-10">


                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-16">


                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-xl bg-black/5 border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] relative overflow-hidden group/badge"
                    >
                        <Sparkles className="w-4 h-4 text-[#D32F2F] relative z-10" />
                        <span className="text-sm font-bold tracking-widest uppercase text-black relative z-10">Industry Leaders</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 leading-tight text-black"
                    >
                        Our <span className="italic text-gray-500">Ecosystem</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl font-light"
                    >
                        We partner with the world's leading technology platforms to deliver uncompromising performance and absolute dominance in your market sector.
                    </motion.p>

                </div>



                {/* Partner Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">


                    {/* Google Partner Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
                        className="group relative bg-white p-8 rounded-[2rem] border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] overflow-hidden flex flex-col items-start"
                    >


                        <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>


                        <div className="h-16 mb-8 flex items-center relative z-10 mt-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-10 bg-blue-600 rounded-sm"></div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-xl font-bold tracking-tight text-gray-800">
                                        <span className="text-blue-500">G</span>
                                        <span className="text-red-500">o</span>
                                        <span className="text-yellow-500">o</span>
                                        <span className="text-blue-500">g</span>
                                        <span className="text-green-500">l</span>
                                        <span className="text-red-500">e</span>
                                    </span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest -mt-1">Partner</span>
                                </div>
                            </div>
                        </div>


                        <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-900 group-hover:text-blue-600 transition-colors">Google</h3>


                        <p className="text-gray-500 leading-relaxed font-light text-sm relative z-10 group-hover:text-gray-700 transition-colors">
                            As a certified Google Partner, we excel in leveraging Google's expansive ecosystem to drive laser-targeted traffic and maximize your search visibility.
                        </p>


                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors relative z-10 mt-auto pt-6">
                            Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>


                    </motion.div>



                    {/* Meta Partner Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                        className="group relative bg-white p-8 rounded-[2rem] border border-indigo-200 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] overflow-hidden flex flex-col items-start"
                    >


                        <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>


                        <div className="h-16 mb-8 flex items-center relative z-10 mt-2">

                            <div className="flex items-center gap-3">

                                <div className="text-indigo-600 w-10">
                                    <svg viewBox="0 0 36 20" fill="currentColor" className="w-full h-auto drop-shadow-sm">
                                        <path d="M28,0 C23.5,0 19.5,3.5 18,8 C16.5,3.5 12.5,0 8,0 C3.5,0 0,3.5 0,8 C0,12.5 3.5,16 8,16 C12.5,16 16.5,12.5 18,8 C19.5,12.5 23.5,16 28,16 C32.5,16 36,12.5 36,8 C36,3.5 32.5,0 28,0 Z M8,12 C5.8,12 4,10.2 4,8 C4,5.8 5.8,4 8,4 C10.2,4 12,5.8 12,8 C12,10.2 10.2,12 8,12 Z M28,12 C25.8,12 24,10.2 24,8 C24,5.8 25.8,4 28,4 C30.2,4 32,5.8 32,8 C32,10.2 30.2,12 28,12 Z" />
                                    </svg>
                                </div>

                                <div className="flex flex-col justify-center translate-y-0.5">
                                    <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">Meta</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Business Partner</span>
                                </div>

                            </div>

                        </div>

                        <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-900 group-hover:text-indigo-600 transition-colors">Meta</h3>

                        <p className="text-gray-500 leading-relaxed font-light text-sm relative z-10 group-hover:text-gray-700 transition-colors">
                            We've teamed up with Meta to offer seamless ad management services tailored for Meta platforms, ensuring unrivaled audience engagement.
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-indigo-600 transition-colors relative z-10 mt-auto pt-6">
                            Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>

                    </motion.div>



                    {/* Shopify Plus Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
                        className="group relative bg-white p-8 rounded-[2rem] border border-green-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(149,191,71,0.2)] overflow-hidden flex flex-col items-start"
                    >

                        <div className="absolute inset-0 bg-linear-to-br from-[#95BF47]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>


                        <div className="h-16 mb-8 flex items-center relative z-10 mt-2">

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-xl bg-[#95BF47] text-white flex items-center justify-center font-serif font-bold text-2xl shadow-sm">
                                    s
                                </div>

                                <div className="flex flex-col justify-center">
                                    <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">Shopify</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Plus Partner</span>
                                </div>

                            </div>

                        </div>

                        <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-900 group-hover:text-[#95BF47] transition-colors">Shopify Plus</h3>

                        <p className="text-gray-500 leading-relaxed font-light text-sm relative z-10 group-hover:text-gray-700 transition-colors">
                            Elite Shopify Plus partnership enabling us to engineer high-converting, scalable enterprise e-commerce experiences.
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#95BF47] transition-colors relative z-10 mt-auto pt-6">
                            Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>

                    </motion.div>



                    {/* HubSpot Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
                        className="group relative bg-white p-8 rounded-[2rem] border border-orange-200 hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,122,89,0.2)] overflow-hidden flex flex-col items-start"
                    >


                        <div className="absolute inset-0 bg-linear-to-br from-[#FF7A59]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>


                        <div className="h-16 mb-8 flex items-center relative z-10 mt-2">

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-xl bg-[#FF7A59] flex items-center justify-center shadow-sm">

                                    {/* Minimalist HubSpot icon representation */}
                                    <div className="grid grid-cols-2 gap-1 w-5 h-5 opacity-90">
                                        <div className="border-2 border-white rounded-full"></div>
                                        <div className="border-2 border-white rounded-full"></div>
                                        <div className="border-2 border-white rounded-full translate-x-1"></div>
                                    </div>

                                </div>

                                <div className="flex flex-col justify-center">
                                    <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">HubSpot</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Solutions Partner</span>
                                </div>

                            </div>

                        </div>


                        <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-900 group-hover:text-[#FF7A59] transition-colors">HubSpot</h3>


                        <p className="text-gray-500 leading-relaxed font-light text-sm relative z-10 group-hover:text-gray-700 transition-colors">
                            As a certified solutions partner, we leverage HubSpot's robust CRM to unify your marketing, sales, and service data.
                        </p>


                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#FF7A59] transition-colors relative z-10 mt-auto pt-6">
                            Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>

                    </motion.div>

                </div>

            </div>

        </section>


    );


}