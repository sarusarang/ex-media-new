"use client";

import { motion } from "framer-motion";

export default function Process({ category }: { category: any }) {
    // If no custom process defined, fall back to default process structure
    const processSteps = category.process || [
        {
            step: "01",
            title: "Discovery & Strategy",
            desc: `We begin by reverse-engineering your goals. Immersing ourselves in your industry, audience, and ${category.title.toLowerCase()} objectives allows us to craft a blueprint optimized for dominance.`,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
        },
        {
            step: "02",
            title: "Design & Architecture",
            desc: "Moving from concept to architecture, our elite designers and engineers build robust, scalable frameworks. Every pixel and line of code is scrutinized to ensure it aligns perfectly with the strategic vision.",
            image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
        },
        {
            step: "03",
            title: "Execution & Evolution",
            desc: "Launch is only the beginning. We deploy with precision and continuously monitor data to refine, optimize, and scale the results exponentially.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <section className="bg-white text-black py-16 md:py-24 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 mb-12 md:mb-16 relative overflow-hidden">
            
            {/* Subtle light mesh background */}
            <div 
                className="absolute inset-0 opacity-40 z-0" 
                style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', 
                    backgroundSize: '40px 40px' 
                }} 
            />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-[#D32F2F] font-bold tracking-widest uppercase text-sm mb-4 block">
                            How We Work
                        </span>
                        
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
                            Our <span className="italic text-gray-900">Process</span>
                        </h2>
                        
                        <p className="text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
                            A meticulously designed workflow that transforms your vision into a scalable, high-performance reality with absolute precision.
                        </p>
                    </motion.div>
                </div>

                {/* Steps List */}
                <div className="space-y-20 md:space-y-32">
                    {processSteps.map((stepItem: any, idx: number) => (
                        
                        <div 
                            key={idx} 
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                            }`}
                        >
                            
                            {/* Image Part */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full lg:w-1/2"
                            >
                                <div className="relative aspect-4/3 md:aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                    <div className="absolute inset-0 bg-black/10 z-10 transition-colors group-hover:bg-transparent duration-700" />
                                    <img 
                                        src={stepItem.image} 
                                        alt={stepItem.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
                                    />
                                    <div className="absolute bottom-6 left-6 z-20 backdrop-blur-md bg-white/70 border border-white/50 text-black px-6 py-3 rounded-full font-serif text-2xl font-bold shadow-lg">
                                        {stepItem.step}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Part */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className="w-full lg:w-1/2 space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-6 bg-[#D32F2F]" />
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#D32F2F] uppercase">
                                        Stage {stepItem.step}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-serif text-black leading-tight">
                                    {stepItem.title}
                                </h3>
                                
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                                    {stepItem.desc}
                                </p>

                                {/* Process details tags */}
                                {stepItem.details && (
                                    <div className="pt-2 flex flex-wrap gap-2">
                                        {stepItem.details.split(" | ").map((detail: string, dIdx: number) => (
                                            <span 
                                                key={dIdx} 
                                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-[11px] font-mono text-gray-300 font-semibold border border-gray-200 tracking-wide"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-[#D32F2F] shrink-0" />
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}