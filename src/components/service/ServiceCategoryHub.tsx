"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ChevronDown } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";




// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / (duration * 1000);

            if (progress < 1) {
                // easeOutExpo for smooth rapid start and slow finish
                const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                setCount(Math.floor(easeOut * value));
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };
        requestAnimationFrame(animate);
    }, [value, duration]);

    return <span>{count}</span>;
};





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
            <section className="bg-white text-black py-10 md:py-14 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 mb-24 md:mb-32 relative overflow-hidden">


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

                <section className="bg-white text-black py-16 md:py-16 mx-2 md:mx-6 mb-24 md:mb-32 border border-gray-100 shadow-xl overflow-hidden relative">
                
                
                    {/* Subtle dot scatter background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>


                    <div className="container mx-auto px-4 md:px-12 relative z-10">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mb-12 md:mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-serif leading-tight">Our Partners</h2>
                        </motion.div>

                        {/* Partner Cards Grid */}
                        <div className="flex flex-col md:flex-row gap-6 lg:gap-10">

                            {/* Google Partner Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex-1 bg-linear-to-br from-[#f8faff] to-white p-8 md:p-12 rounded-3xl border border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
                            >
                                <div className="h-16 mb-8 flex items-center">
                                    {/* Abstracted Google Partner Logo representation */}
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
                                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider -mt-1">Partner</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Google</h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    As a certified Google Partner, we excel in leveraging Google's expansive ecosystem to drive laser-targeted traffic and maximize your search visibility.
                                </p>
                            </motion.div>

                            {/* Meta Partner Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex-1 bg-linear-to-br from-[#f0f8ff] to-[#f8fbff] p-8 md:p-12 rounded-3xl border border-blue-50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
                            >
                                <div className="h-16 mb-8 flex items-center">
                                    {/* Abstracted Meta Business Partner Logo representation */}
                                    <div className="flex items-center gap-3">
                                        <div className="text-blue-600">
                                            {/* Stylized Infinity/Meta SVG */}
                                            <svg viewBox="0 0 36 20" fill="currentColor" className="w-12 h-auto">
                                                <path d="M28,0 C23.5,0 19.5,3.5 18,8 C16.5,3.5 12.5,0 8,0 C3.5,0 0,3.5 0,8 C0,12.5 3.5,16 8,16 C12.5,16 16.5,12.5 18,8 C19.5,12.5 23.5,16 28,16 C32.5,16 36,12.5 36,8 C36,3.5 32.5,0 28,0 Z M8,12 C5.8,12 4,10.2 4,8 C4,5.8 5.8,4 8,4 C10.2,4 12,5.8 12,8 C12,10.2 10.2,12 8,12 Z M28,12 C25.8,12 24,10.2 24,8 C24,5.8 25.8,4 28,4 C30.2,4 32,5.8 32,8 C32,10.2 30.2,12 28,12 Z" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col justify-center translate-y-1">
                                            <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">Meta</span>
                                            <span className="text-xs font-medium text-gray-600 mt-1">Business Partner</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Meta</h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    We've teamed up with Meta to offer seamless ad management services tailored for Meta platforms, ensuring unrivaled audience engagement and conversion.
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </section>
            )}


            {/* Premium FAQ Section (White Theme) */}
            <section className="bg-white text-black py-10 md:py-14 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 mb-24 md:mb-32 shadow-2xl relative overflow-hidden">


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
