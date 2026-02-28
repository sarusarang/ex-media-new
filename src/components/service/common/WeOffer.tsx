"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";




export default function WeOffer({ category }: { category: any }) {





    return (


        <section className="py-10 md:py-16 container mx-auto px-4 md:px-12">


            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">

                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.05)] relative overflow-hidden group/badge">
                    {/* Interactive Shine Effect */}
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-50"></div>
                    <Sparkles className="w-4 h-4 text-[#D32F2F] relative z-10" />
                    <span className="text-sm font-bold tracking-widest uppercase text-white relative z-10 drop-shadow-md">Premium Capabilities</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                    {category.title} Services <span className="text-gray-500 italic">We Offer</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
                    We pride ourselves on delivering end-to-end {category.title.toLowerCase()} solutions that not only meet industry standards but completely redefine them.
                </p>

            </div>



            {/* Sub-Services Grid as Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">


                {category.subServices.map((sub: any, idx: number) => (


                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >


                        <Link href={`/service/${sub.slug}`} className="group block relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">


                            {/* Dummy Image Detail */}
                            <div className="aspect-video overflow-hidden relative">


                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                                <img
                                    src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop&sig=${idx}`}
                                    alt={sub.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />

                                {/* Floating Arrow */}
                                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 border border-white/10">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>

                            </div>


                            {/* Content */}
                            <div className="p-8">

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{sub.name}</h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Comprehensive and strategically engineered {sub.name.toLowerCase()} solutions tailored precisely to elevate your operations to the next frontier of growth.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors flex items-center gap-2">
                                    Explore Service <span className="w-4 h-px bg-gray-600 group-hover:bg-white transition-colors"></span>
                                </span>

                            </div>

                        </Link>

                    </motion.div>

                ))}

            </div>


        </section>

    );

}

