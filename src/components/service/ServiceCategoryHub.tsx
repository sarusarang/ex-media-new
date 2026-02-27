"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ChevronDown, MessageCircle, Code2, Database, Terminal, Smartphone, Monitor, Palette, PenTool, Layout, Layers } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { BorderBeam } from "../ui/border-beam";




export default function ServiceCategoryHub({ category }: { category: any }) {


    const [activeFaq, setActiveFaq] = useState<number | null>(null);


    // Dummy FAQ Data (this would ideally come from the CMS/category prop)
    const faqs = [
        {
            q: `What makes your ${category.title.toLowerCase()} approach different?`,
            a: `We combine data-driven insights with elite aesthetic execution. Unlike traditional agencies that just make things look good, our ${category.title.toLowerCase()} solutions are engineered to generate measurable growth and dominate your specific market sector.`
        },
        {
            q: "How long does a typical engagement last?",
            a: "Timelines vary based on complexity, but most initial foundational phases take 4-8 weeks. However, we view our client relationships as long-term partnerships, continuously optimizing and scaling your assets post-launch."
        },
        {
            q: "Do you work with startups or established enterprise brands?",
            a: "Both. We thrive on taking ambitious startups from zero to one, and we equally excel at modernizing and scaling legacy enterprise brands to maintain their competitive edge."
        },
        {
            q: "What is the expected ROI for this service?",
            a: "While exact figures depend on your baseline, our clients typically see a 2x to 5x return on investment within the first year of deploying our strategic frameworks, thanks to increased conversion rates and premium brand positioning."
        }
    ];



    // Variants for the title and description
    const wordVariants: Variants = {
        hidden: { opacity: 0, x: -30, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: { duration: 0.9, ease: "easeOut" }
        }
    };



    return (



        <main className="min-h-screen bg-[#050505] text-white">


            {/* Stunning Premium Hero */}
            <section className="relative w-full h-[60vh] md:h-screen flex items-center overflow-hidden border-b border-white/10 shadow-2xl">


                {/* React Bits Animated Background */}
                <div className="absolute inset-0 z-0">
                    {category.heroComponent}
                </div>


                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-[#050505] z-10"></div>


                <div className="container relative z-20 mx-auto px-4 md:px-12 pt-24 text-center">

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6 text-white drop-shadow-xl"
                    >
                        {category.title.split(" ").map((word: string, i: number, arr: string[]) => (
                            <span key={i} className="inline-block whitespace-nowrap">
                                <motion.span variants={wordVariants} className="inline-block">
                                    {word}
                                </motion.span>
                                {i !== arr.length - 1 && "\u00A0"}
                            </span>
                        ))}
                    </motion.h1>


                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } }
                        }}
                        className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        {category.desc.split(" ").map((word: string, i: number, arr: string[]) => (
                            <span key={i} className="inline-block whitespace-nowrap">
                                <motion.span variants={wordVariants} className="inline-block">
                                    {word}
                                </motion.span>
                                {i !== arr.length - 1 && "\u00A0"}
                            </span>
                        ))}
                    </motion.p>


                </div>

            </section>





            {/* 1. {title} Services We Offer Section */}
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



            {/* 2. Our Process Section */}
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



            {/* Conditional 'Our Partners' Section ONLY for Digital Marketing */}
            {category.slug === 'digital-marketing' && (


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

            )}




            {/* Conditional 'Tech Stack' Section ONLY for Technology */}
            {category.slug === 'technology' && (


                <section className="bg-black text-white py-24 mx-2 md:mx-6 mb-12 md:mb-16 rounded-[4rem] md:rounded-[6rem] shadow-2xl overflow-hidden relative border border-white/10">


                    {/* Animated Cybernetic Background */}
                    <div className="absolute inset-0 z-0">


                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>


                        {/* Glowing Orbs */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"
                        ></motion.div>

                        <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-[100px]"
                        ></motion.div>

                    </div>



                    <div className="container mx-auto px-4 md:px-12 relative z-10">


                        {/* Section Header */}
                        <div className="flex flex-col items-center text-center mb-20">

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                            >

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    <Code2 className="w-4 h-4 text-blue-400" />
                                </motion.div>

                                <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-100">Tech Architecture</span>

                            </motion.div>


                            <motion.h2
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="text-5xl md:text-6xl lg:text-8xl font-serif mb-6 leading-tight whitespace-pre-wrap"
                            >
                                Engineering <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 italic">Ecosystem</span>
                            </motion.h2>


                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl font-light"
                            >
                                We don't just write code; we architect resilient, massively scalable systems utilizing the bleeding edge of modern development frameworks.
                            </motion.p>


                        </div>



                        {/* Staggered Tech Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">

                            {[
                                { name: "Frontend / UI", tag: "React, Next.js, Vue", desc: "Pixel-perfect, ultra-performant interfaces that dominate Core Web Vitals and engage users instantly.", icon: <Monitor className="w-8 h-8" />, gradient: "from-cyan-500 to-blue-600", glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]" },
                                { name: "Backend Core", tag: "Node.js, Python, Go", desc: "Robust microservices and APIs engineered to handle millions of requests with sub-millisecond latency.", icon: <Terminal className="w-8 h-8" />, gradient: "from-emerald-400 to-teal-600", glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]" },
                                { name: "Cloud Native", tag: "AWS, Vercel, Docker", desc: "Infinite horizontal scalability with containerized deployments and edge-computing infrastructure.", icon: <Database className="w-8 h-8" />, gradient: "from-orange-400 to-red-600", glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]" },
                                { name: "Mobile Ecosystem", tag: "React Native, Swift", desc: "Native iOS and Android experiences that leverage device hardware for buttery-smooth performance.", icon: <Smartphone className="w-8 h-8" />, gradient: "from-violet-500 to-purple-700", glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]" },
                                { name: "AI & Machine Learning", tag: "OpenAI, PyTorch", desc: "Proprietary algorithmic integrations that bring generative intelligence and automation to your product.", icon: <Sparkles className="w-8 h-8" />, gradient: "from-pink-500 to-rose-600", glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]" },
                                { name: "Blockchain & Web3", tag: "Solidity, Rust", desc: "Secure smart contract development and decentralized application (dApp) architecture.", icon: <Layers className="w-8 h-8" />, gradient: "from-yellow-400 to-amber-600", glow: "group-hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]" }

                            ].map((tech, i) => (

                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.7, delay: i * 0.1, type: "spring", stiffness: 80 }}
                                    className={`group relative bg-white/3 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/30 hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col ${tech.glow}`}
                                >

                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>


                                    {/* Icon Box */}
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative z-10 bg-linear-to-br ${tech.gradient} text-white shadow-lg shadow-black/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        {tech.icon}
                                    </div>


                                    <span className="text-xs font-bold tracking-widest text-gray-500 mb-3 uppercase">{tech.tag}</span>
                                    <h3 className="text-3xl font-bold mb-4 relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">{tech.name}</h3>


                                    <p className="text-gray-400 leading-relaxed font-light text-base relative z-10 mt-auto">
                                        {tech.desc}
                                    </p>


                                </motion.div>
                            ))}

                        </div>

                    </div>


                    <BorderBeam
                        duration={6}
                        size={900}
                        className="from-transparent via-blue-500 to-transparent"
                    />

                    <BorderBeam
                        duration={6}
                        delay={3}
                        size={900}
                        borderWidth={2}
                        className="from-transparent via-indigo-500 to-transparent"
                    />


                </section>

            )}




            {/* Conditional 'Design Ecosystem' Section ONLY for Experience Design */}
            {category.slug === 'experience-design' && (


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

            )}



            {/* Conditional 'Global Reach' Section ONLY for Branding */}
            {category.slug === 'branding' && (


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

            )}





            {/* WhatsApp Chatbot Manager: ONLY for Technology */}
            {category.slug === 'technology' && (


                <section className="bg-black text-white py-24 mx-2 md:mx-6 mb-12 md:mb-16 rounded-[4rem] md:rounded-[6rem] shadow-2xl overflow-hidden relative border border-white/10">


                    {/* Dark Modern Abstract Background */}
                    {/* <div className="absolute inset-0 bg-linear-to-br from-neutral-900 to-black"></div> */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "48px 48px" }}></div>


                    {/* Large Glowing Ambient Lights */}
                    <motion.div
                        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-[150px]"
                    ></motion.div>


                    <motion.div
                        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]"
                    ></motion.div>


                    <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">


                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full lg:w-1/2"
                        >

                            <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <MessageCircle className="w-4 h-4 text-emerald-400 relative z-10" />
                                <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-100 relative z-10">AI Automation Edge</span>
                            </div>


                            <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif mb-8 leading-tight">
                                Autonomous <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-400 italic">WhatsApp AI</span>
                            </h2>


                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-10">
                                Engineer seamless conversational flows. Our proprietary tech stack empowers AI to qualify leads, process transactions, and schedule meetings 24/7 directly on WhatsApp.
                            </p>


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">

                                {[
                                    { title: "Natural Language Processing", desc: "Human-like conversational understanding." },
                                    { title: "CRM Zero-Sync", desc: "Instant bi-directional data flow." },
                                    { title: "Multi-Agent Handoff", desc: "Seamless transfer to human reps." },
                                    { title: "Analytics Engine", desc: "Real-time conversation insights." }

                                ].map((feature, i) => (

                                    <div key={i} className="flex gap-4 items-start">

                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">{feature.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>

                                    </div>

                                ))}

                            </div>


                            <button className="flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group">
                                View Technical Docs
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>


                        </motion.div>



                        {/* Ultra-Premium Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 60 }}
                            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end perspective-distant"
                        >

                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-[340px] md:w-[380px] h-[700px] bg-neutral-900 rounded-[3.5rem] p-4 shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-neutral-700/50 transform rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out z-20"
                            >

                                {/* Inner Screen */}
                                <div className="w-full h-full bg-[#0b141a] rounded-[2.5rem] overflow-hidden flex flex-col relative border border-white/5">


                                    {/* Glass reflection */}
                                    <div className="absolute top-0 right-0 w-[150%] h-[30%] bg-linear-to-b from-white/10 to-transparent -rotate-45 transform origin-top-right pointer-events-none z-50 rounded-tr-[2.5rem]"></div>


                                    {/* Dynamic Island */}
                                    <div className="absolute top-4 inset-x-0 flex justify-center z-50">
                                        <div className="w-32 h-8 bg-black rounded-full flex items-center justify-between px-3">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                                        </div>
                                    </div>


                                    {/* Chat Header (Dark Mode) */}
                                    <div className="bg-[#202c33] pt-16 pb-4 px-6 text-white flex items-center gap-4 shadow-md z-10 shrink-0 border-b border-white/5">

                                        <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center relative shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                                            <Sparkles className="w-6 h-6 text-white" />
                                            {/* Online Dot */}
                                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#202c33] rounded-full"></div>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-xl leading-none mb-1">Nexus AI</h4>
                                            <p className="text-sm text-gray-400">typing...</p>
                                        </div>

                                    </div>



                                    {/* Chat Body Pattern Background */}
                                    <div className="flex-1 relative overflow-hidden flex flex-col gap-5 p-5 pt-8 z-0">


                                        {/* WhatsApp Dark Pattern Overlay */}
                                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')", backgroundSize: "cover" }}></div>


                                        {/* Chat Bubbles */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.5 }}
                                            className="bg-[#202c33] text-gray-200 p-4 rounded-3xl rounded-tl-sm shadow-md max-w-[85%] self-start text-base border border-white/5 relative z-10"
                                        >
                                            System initialized. The new tech stack has been deployed. How should I route the incoming enterprise leads? ⚡️
                                        </motion.div>


                                        <motion.div
                                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 1.5 }}
                                            className="bg-[#005c4b] text-emerald-50 p-4 rounded-3xl rounded-tr-sm shadow-md max-w-[85%] self-end text-base mt-2 relative z-10"
                                        >
                                            Qualify budgets &gt; $50k and auto-book them on Calendly.
                                        </motion.div>


                                        <motion.div
                                            initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 2.5 }}
                                            className="bg-[#202c33] text-gray-200 p-4 rounded-3xl rounded-tl-sm shadow-md max-w-[85%] self-start text-base mt-2 relative z-10"
                                        >
                                            Understood. Logic gate updated. I'll execute the script via the CRM API now.
                                        </motion.div>


                                        {/* Modern Chat Input Area */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 3 }}
                                            className="mt-auto pt-4 relative z-10"
                                        >
                                            <div className="bg-[#202c33] rounded-full p-2 pl-6 flex items-center justify-between border border-white/5 shadow-lg">
                                                <span className="text-gray-500 text-sm">Type a command...</span>
                                                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white translate-x-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                                </div>
                                            </div>
                                        </motion.div>


                                    </div>

                                </div>

                            </motion.div>



                            {/* Floating code snippet to sell the "tech" vibe */}
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-20 -left-20 bg-black/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl z-30 hidden md:block"
                            >

                                <div className="flex gap-2 mb-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>

                                <pre className="text-xs font-mono text-emerald-400">
                                    <code>{`const bot = new AIAgent();\nawait bot.listen('whatsapp');\nreturn status.code(200);`}</code>
                                </pre>

                            </motion.div>

                        </motion.div>

                    </div>


                    <BorderBeam
                        duration={6}
                        size={900}
                        className="from-transparent via-green-500 to-transparent"
                    />

                    <BorderBeam
                        duration={6}
                        delay={3}
                        size={900}
                        borderWidth={2}
                        className="from-transparent via-emerald-500 to-transparent"
                    />


                </section>

            )}





            {/* Premium FAQ Section (White Theme) */}
            <section className="bg-white text-black py-10 md:py-14 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 mb-12 md:mb-16 shadow-2xl relative overflow-hidden">


                <div className="container mx-auto px-4 md:px-12 relative z-10">


                    <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >

                            <span className="text-[#D32F2F] font-bold tracking-widest uppercase text-sm mb-4 block">Clarity & Confidence</span>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 leading-tight">
                                Frequently Asked <span className="italic text-gray-500">Questions</span>
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                Everything you need to know about partnering with us for {category.title.toLowerCase()} execution.
                            </p>

                        </motion.div>

                    </div>



                    <div className="max-w-5xl mx-auto space-y-4">

                        {faqs.map((faq, idx) => (

                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group"
                            >

                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className={`w-full text-left px-6 py-6 md:px-10 md:py-8 bg-gray-50 hover:bg-gray-100 rounded-2xl flex items-center justify-between border transition-all duration-300 ${activeFaq === idx ? 'border-gray-300 shadow-md' : 'border-gray-100'}`}
                                >

                                    <span className="text-lg md:text-2xl font-serif font-medium">{faq.q}</span>

                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 ${activeFaq === idx ? 'bg-black text-white rotate-180' : 'bg-white text-black border border-gray-200 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-[#D32F2F]'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>

                                </button>


                                <AnimatePresence>

                                    {activeFaq === idx && (

                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >

                                            <div className="p-6 md:p-10 text-gray-600 font-light leading-relaxed text-lg md:text-xl border-x border-b border-gray-100 rounded-b-2xl -mt-6 pt-10 bg-white">
                                                {faq.a}
                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>




            {/* Related Services Segment (Dark Theme) */}
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

        </main>


    );


}
