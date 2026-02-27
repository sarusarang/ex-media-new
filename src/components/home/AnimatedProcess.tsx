"use client";

import { useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";




// process steps
const processSteps = [
    {
        title: "Discovery & Strategy",
        description: "We don't just build; we strategize. Our process begins with a deep dive into your brand's core values, market positioning, and target demographics to ensure every pixel serves a purpose.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Design Prototyping",
        description: "Turning abstract concepts into tangible experiences. We craft high-fidelity prototypes that allow you to interact with your future digital product before a single line of code is written.",
        image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Full-Stack Engineering",
        description: "Our engineering team brings designs to life using modern frameworks and robust architectures, ensuring your platform is scalable, secure, and lightning-fast across all devices.",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Launch & Growth",
        description: "Deployment is just the beginning. We actively monitor, optimize, and iterate on your product post-launch, leveraging analytics to drive continuous engagement and growth.",
        image: "https://images.pexels.com/photos/7325603/pexels-photo-7325603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
];





export default function AnimatedProcess() {


    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });


    // Calculate the active step based on scroll progress through the pinned section
    scrollYProgress.on("change", (latest) => {
        const step = Math.min(Math.floor(latest * processSteps.length), processSteps.length - 1);
        if (step !== activeStep && step >= 0) {
            setActiveStep(step);
        }
    });



    return (


        <section ref={containerRef} className="w-full bg-[#f8f9fa] relative h-[400vh]">


            <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 overflow-hidden">


                <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center h-full py-20">


                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center relative z-20 h-full max-h-[70vh]">


                        <motion.div
                            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-8"
                        >

                            <span className="inline-flex items-center gap-3 mb-4">
                                <span className="w-8 h-px bg-[#D32F2F]"></span>
                                <span className="text-sm font-bold tracking-widest uppercase text-[#D32F2F]">Our Methodology</span>
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tight text-black leading-tight">
                                Process <span className="text-gray-400 font-light">perfected.</span>
                            </h2>

                        </motion.div>


                        <div className="relative grow flex flex-col justify-center min-h-[300px]">


                            <AnimatePresence mode="wait">


                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 flex flex-col justify-center"
                                >

                                    <div className="flex items-center gap-6 mb-6">

                                        <span className="text-6xl md:text-8xl font-sans font-black text-gray-200/60 leading-none tracking-tighter">
                                            0{activeStep + 1}
                                        </span>

                                        <h3 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                                            {processSteps[activeStep].title}
                                        </h3>

                                    </div>


                                    <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl text-justify">
                                        {processSteps[activeStep].description}
                                    </p>

                                </motion.div>

                            </AnimatePresence>

                        </div>



                        {/* Progress Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex items-center gap-3 mt-12 pb-8"
                        >

                            {processSteps.map((_, idx) => (

                                <div key={idx} className="h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden relative">

                                    {idx === activeStep && (

                                        <motion.div
                                            layoutId="activeProgress"
                                            className="absolute inset-0 bg-black rounded-full"
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />

                                    )}

                                    {idx < activeStep && (

                                        <div className="absolute inset-0 bg-black/80 rounded-full" />

                                    )}

                                </div>

                            ))}

                        </motion.div>

                    </div>



                    {/* Right Column: Dynamic Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", x: 40 }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="hidden lg:flex flex-col justify-center items-center h-full relative z-10 w-full"
                    >

                        <div className="w-full aspect-4/5 max-h-[80vh] rounded-[2rem] overflow-hidden relative shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5">

                            <AnimatePresence mode="wait">

                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >

                                    {/* Using standard img to avoid Next.js Image component domain config issues for dummy data */}
                                    <motion.img
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 6, ease: "easeOut" }}
                                        src={processSteps[activeStep].image}
                                        alt={processSteps[activeStep].title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-black/0 z-10 mix-blend-overlay"></div>

                                </motion.div>

                            </AnimatePresence>

                        </div>

                    </motion.div>


                </div>

            </div>

        </section>

    );

}
