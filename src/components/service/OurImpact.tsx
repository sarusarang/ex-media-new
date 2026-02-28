"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { TrendingUp, Users, Globe, Award } from "lucide-react";





// CountUp Custom Component
const CountUp = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {

    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useSpring(count, { damping: 50, stiffness: 100, mass: 1 });


    useEffect(() => {
        if (inView) {
            count.set(value);
        }
    }, [inView, count, value]);


    useEffect(() => {
        return rounded.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = prefix + Math.floor(latest) + suffix;
            }
        });
    }, [rounded, prefix, suffix]);


    return <span ref={ref}>{prefix}0{suffix}</span>;

}




export default function OurImpact() {



    // Stats Array
    const stats = [
        {
            icon: Globe,
            value: 15,
            prefix: "",
            suffix: "+",
            label: "Countries Reached",
            desc: "Global campaigns executed across continents.",
            color: "text-blue-600",
            bgGlow: "from-blue-200 to-transparent",
        },
        {
            icon: Users,
            value: 10,
            prefix: "",
            suffix: "M+",
            label: "Active Users Served",
            desc: "Frictionless digital experiences delivered daily.",
            color: "text-purple-600",
            bgGlow: "from-purple-200 to-transparent",
        },
        {
            icon: TrendingUp,
            value: 500,
            prefix: "$",
            suffix: "M+",
            label: "Revenue Generated",
            desc: "Measurable ROI driven by data and design.",
            color: "text-emerald-600",
            bgGlow: "from-emerald-200 to-transparent",
        },
        {
            icon: Award,
            value: 99,
            prefix: "",
            suffix: "%",
            label: "Client Retention",
            desc: "Building enduring partnerships based on trust and results.",
            color: "text-[#D32F2F]",
            bgGlow: "from-red-200 to-transparent",
        }
    ];



    return (


        <section className="py-10 md:py-16 bg-white text-black relative overflow-hidden border-t-2 border-gray-200 border-dashed">

            <div className="container mx-auto px-4 md:px-12 relative z-10">


                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">


                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-2 px-5 py-2.5 rounded-full backdrop-blur-xl bg-black/5 border border-black/10 shadow-sm"
                    >
                        <TrendingUp className="w-4 h-4 text-[#D32F2F]" />
                        <span className="text-sm font-bold tracking-widest uppercase text-black">The Results</span>

                    </motion.div>


                    <motion.h2
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-4"
                    >
                        Our <span className="text-gray-900 italic">Impact</span>
                    </motion.h2>


                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
                    >
                        We measure our success by the absolute scale of our partners' growth. These are the numbers that define our legacy.
                    </motion.p>


                </div>



                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">


                    {stats.map((stat, idx) => (

                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 60 }}
                            className="group flex flex-col items-start p-8 md:p-10 bg-gray-50 rounded-3xl transition-all duration-500 hover:bg-white border border-gray-200 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1"
                        >

                            {/* Icon Container */}
                            <div className="mb-10 w-14 h-14 rounded-full flex items-center justify-center bg-white border border-gray-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                                <stat.icon className={`w-6 h-6 text-gray-400 group-hover:${stat.color} transition-colors duration-500`} />
                            </div>

                            {/* Value text string (CountUp Animation) */}
                            <div className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
                                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>

                            {/* Label */}
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {stat.label}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 leading-relaxed">
                                {stat.desc}
                            </p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
