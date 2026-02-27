"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Target, Palette, Code2 } from "lucide-react";




// Services Data
const services = [
    {
        icon: <Palette strokeWidth={1.5} />,
        title: "Brand Identity",
        description: "Crafting memorable, timeless brand identities that resonate deeply with your core audience and stand out in crowded markets.",
    },
    {
        icon: <Code2 strokeWidth={1.5} />,
        title: "Digital Ecosystems",
        description: "Engineering robust, scalable web and mobile applications focused on fluid user experiences and cutting-edge performance.",
    },
    {
        icon: <Target strokeWidth={1.5} />,
        title: "Strategic Marketing",
        description: "Data-driven campaigns designed to maximize ROI, amplify reach, and convert passive scrollers into loyal brand advocates.",
    },
    {
        icon: <Zap strokeWidth={1.5} />,
        title: "AI Integration",
        description: "Leveraging state-of-the-art artificial intelligence to automate workflows, personalize experiences, and hyper-scale operations.",
    },
];




// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};


const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
};





export default function AnimatedServices() {


    const sectionRef = useRef<HTMLDivElement>(null);



    return (


        <section ref={sectionRef} className="w-full bg-white text-black py-14 md:py-10 px-4 md:px-12 lg:px-24 overflow-hidden relative">


            <div className="w-full mx-auto">


                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16">


                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-2xl"
                    >

                        <div className="inline-flex items-center gap-3 mb-6">

                            <span className="w-12 h-px bg-black/30"></span>

                            <span className="text-sm font-semibold tracking-widest uppercase text-gray-600">Our Expertise</span>

                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1]">

                            Shaping the <br className="hidden md:block" />

                            <span className="italic text-gray-500">digital frontier.</span>

                        </h2>

                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-10 md:mt-0"
                    >

                        <p className="text-lg md:text-xl text-gray-600 max-w-sm leading-relaxed">
                            We merge strategic thinking with world-class execution to deliver solutions that drive immediate impact and long-term growth.
                        </p>

                    </motion.div>


                </div>



                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
                >


                    {services.map((service, idx) => (


                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                            className="group relative bg-white border border-gray-400 hover:border-black/5 p-8 md:p-10 rounded-[2rem] transition-all duration-500 flex flex-col h-full shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden hover:cursor-pointer"
                        >

                            {/* Subtle modern background gradient element on hover */}
                            <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                            <div className="relative z-10 bg-gray-50 group-hover:bg-black transition-colors duration-500 w-16 h-16 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-8 shadow-sm border border-gray-100">
                                <span className="text-black group-hover:text-white transition-colors duration-500 flex items-center justify-center w-full h-full [&>svg]:w-6 [&>svg]:h-6 [&>svg]:md:w-6 [&>svg]:md:h-6 [&>svg]:mb-0">
                                    {service.icon}
                                </span>
                            </div>


                            <h3 className="relative z-10 text-2xl md:text-3xl font-semibold mb-4 tracking-tight text-gray-900">{service.title}</h3>


                            <p className="relative z-10 text-gray-500 group-hover:text-gray-700 transition-colors duration-300 text-base md:text-lg leading-relaxed grow">
                                {service.description}
                            </p>


                            <div className="relative z-10 mt-8 pt-6 border-t border-gray-100 flex items-center justify-between group-hover:border-gray-200 transition-colors">

                                <span className="text-sm font-semibold uppercase tracking-wider text-gray-400 group-hover:text-black transition-colors">Explore</span>

                                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transform -rotate-45 group-hover:rotate-0 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-md">

                                    <ArrowUpRight className="w-5 h-5" />

                                </div>
                            </div>


                        </motion.div>


                    ))}


                </motion.div>


            </div>


        </section>


    );


}
