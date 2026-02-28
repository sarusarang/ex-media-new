"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";





export default function RelatedService({ category }: { category: any }) {



    return (


        <section className="py-10 md:py-16 bg-[#0a0a0a] border-t border-white/5 relative z-10">


            <div className="container mx-auto px-4 md:px-12">


                {/* Centered Modern Header */}
                <div className="flex flex-col items-center text-center mb-10 md:mb-16">


                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.05)] relative overflow-hidden group/badge">
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000"></div>
                        <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-50"></div>
                        <Sparkles className="w-4 h-4 text-[#D32F2F] relative z-10" />
                        <span className="text-sm font-bold tracking-widest uppercase text-white relative z-10 drop-shadow-md">Explore More</span>
                    </div>


                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight text-white">
                        Related <span className="text-gray-500 italic">Services</span>
                    </h2>


                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
                        Discover complimentary disciplines that seamlessly integrate with your {category.title.toLowerCase()} strategy stack to multiply your ROI.
                    </p>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">


                    {[
                        { name: "Digital Ecosystems", slug: "digital-ecosystems", desc: "Holistic, interconnected digital platforms built for scale." },
                        { name: "Growth Marketing", slug: "growth-marketing", desc: "Data-driven acquisition and retention strategies." },
                        { name: "Brand Architecture", slug: "brand-architecture", desc: "Structuring complex portfolios into cohesive brand systems." }

                    ].map((related, idx) => (

                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >

                            <Link href={`/service/${related.slug}`} className="group block relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">


                                {/* Image Detail */}
                                <div className="aspect-video overflow-hidden relative">

                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                                    <img
                                        src={`https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop&sig=${idx + 100}`}
                                        alt={related.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />

                                    {/* Floating Arrow */}
                                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 border border-white/10">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>

                                </div>


                                {/* Content matching top cards */}
                                <div className="p-8">

                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{related.name}</h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {related.desc}
                                    </p>

                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors flex items-center gap-2">
                                        Explore Service <span className="w-4 h-px bg-gray-600 group-hover:bg-white transition-colors"></span>
                                    </span>

                                </div>


                            </Link>


                        </motion.div>


                    ))}

                </div>



                <div className="flex justify-center mt-12">

                    <Link href="/service" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white hover:text-[#D32F2F] transition-colors group/link">

                        View All Services

                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/link:border-[#D32F2F] group-hover/link:bg-[#D32F2F] group-hover/link:text-white transition-all duration-300">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>

                    </Link>

                </div>

            </div>

        </section>


    )


}