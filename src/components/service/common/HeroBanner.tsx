"use client";

import { Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function HeroBanner({ title, desc, heroComponent }: { title: string, desc: string, heroComponent: React.ReactNode }) {

    const ref = useRef(null);
    // Add margin to keep it mounted just slightly before/after it enters the viewport to prevent flickering
    const inView = useInView(ref, { margin: "200px 0px 200px 0px" });

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

        <section ref={ref} className="relative w-full h-[60vh] md:h-screen flex items-center overflow-hidden border-b border-white/10 shadow-2xl">


            {/* React Bits Animated Background */}
            <div className="absolute inset-0 z-0">

                {inView && heroComponent}
                
            </div>


            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-[#050505] z-10 pointer-events-none"></div>


            <div className="container relative z-20 mx-auto px-4 md:px-12 pt-24 text-center">


                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6 text-white drop-shadow-xl"
                >

                    {title.split(" ").map((word: string, i: number, arr: string[]) => (

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

                    {desc.split(" ").map((word: string, i: number, arr: string[]) => (

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


    )



}