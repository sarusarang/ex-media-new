"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";



//  section data
const sections = [
    {
        title: "Design",
        videoUrl: "https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4",
        desc1: "Intelligent design is the essence of nature;",
        desc2: "crafting tomorrow's tech realm"
    },
    {
        title: "Technology",
        videoUrl: "https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4",
        desc1: "Engineering seamless architectures;",
        desc2: "scalable solutions for global impact"
    },
    {
        title: "Marketing",
        videoUrl: "https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4",
        desc1: "Data-driven performance strategies;",
        desc2: "maximizing your digital presence"
    },
    {
        title: "Branding",
        videoUrl: "https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4",
        desc1: "Crafting compelling narratives;",
        desc2: "identities that resonate worldwide"
    },
    {
        title: "Strategy",
        videoUrl: "https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4",
        desc1: "Data-backed business intelligence;",
        desc2: "positioning brands for market leadership"
    },
    {
        title: "Production",
        videoUrl: "https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4",
        desc1: "High-end visual storytelling;",
        desc2: "cinematic experiences that captivate audiences"
    }
];




export default function ParallaxPinnedScroll() {


    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });


    return (


        <section ref={containerRef} className="w-full bg-[#050505] relative h-[500vh]">


            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                <IntroText scrollYProgress={scrollYProgress} />

                {sections.map((section, idx) => (
                    <ParallaxSection
                        key={idx}
                        section={section}
                        index={idx}
                        totalSections={sections.length}
                        scrollYProgress={scrollYProgress}
                    />
                ))}

                <ZoomOutro scrollYProgress={scrollYProgress} />

            </div>

        </section>

    );

}




// intro text
const IntroText = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {


    const text = "We believe in a world where technology fosters your everyday experiences. And our mission is to make it happen!";
    const words = text.split(" ");
    const totalChars = text.replace(/\s+/g, "").length;
    let charIndex = 0;


    // Timeline 0.0 to 0.10
    const textOpacity = useTransform(scrollYProgress, [0.08, 0.10], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0.08, 0.10], [1, 0.95]);
    const textPointerEvents = useTransform(scrollYProgress, (p) => p > 0.10 ? "none" : "auto");


    return (


        <motion.div
            style={{ opacity: textOpacity, scale: textScale, pointerEvents: textPointerEvents as any }}
            className="absolute max-w-[1200px] mx-auto px-4 md:px-12 w-full z-10"
        >


            <div className="flex flex-wrap text-[32px] md:text-[56px] lg:text-[62px] font-sans font-light tracking-tight text-gray-500 leading-tight">


                {words.map((word, i) => {

                    return (

                        <span key={i} className="mr-3 md:mr-4 lg:mr-5 mb-2 md:mb-4 relative inline-flex">

                            {word.split("").map((char, j) => {

                                const start = (charIndex / totalChars) * 0.08;

                                const end = start + (0.08 / totalChars);
                                charIndex++;

                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const charOp = useTransform(scrollYProgress, [start, end], [0, 1]);

                                return (

                                    <span key={j} className="relative inline-block">

                                        <span className="opacity-100">{char}</span>

                                        <motion.span style={{ opacity: charOp }} className="text-white absolute left-0 top-0">
                                            {char}
                                        </motion.span>

                                    </span>
                                );
                            })}

                        </span>

                    );

                })}

            </div>

        </motion.div>

    );

};





// parallax section
const ParallaxSection = ({ section, index, totalSections, scrollYProgress }: { section: any, index: number, totalSections: number, scrollYProgress: MotionValue<number> }) => {


    // 0.10 to 0.85 is the section range (0.75 duration)
    const start = 0.10 + (index * (0.75 / totalSections));
    const end = start + (0.75 / totalSections);


    const inStart = start;
    const inEnd = start + 0.03;
    const outStart = end - 0.03;
    const outEnd = end;


    const pointerEvents = useTransform(scrollYProgress, (p) => (p >= inStart && p <= outEnd) ? "auto" : "none");


    const titleChars = section.title.split("");


    const videoOpacity = useTransform(scrollYProgress, [inStart + 0.01, inEnd + 0.01, outStart, outEnd], [0, 0.9, 0.9, 0]);
    const videoScale = useTransform(scrollYProgress, [inStart, inEnd, outEnd], [0.8, 1, 1.1]);


    const descOpacity = useTransform(scrollYProgress, [inStart + 0.03, inEnd + 0.03, outStart, outEnd], [0, 1, 1, 0]);
    const descY = useTransform(scrollYProgress, [inStart + 0.03, inEnd + 0.03], [50, 0]);


    const videoLeft = index % 2 === 0 ? "left-[30%] md:left-[55%]" : "left-[-10%] md:left-[10%]";



    return (


        <motion.div style={{ pointerEvents }} className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4">


            <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center">


                {/* Large Text */}
                <div className="relative z-10 text-center w-full flex justify-center">


                    <h2 className="text-[70px] md:text-[100px] lg:text-[130px] font-sans font-thin text-white leading-none tracking-tighter flex">


                        {titleChars.map((char: string, i: number) => {


                            const charInStart = inStart + (i / titleChars.length) * 0.02;
                            const charInEnd = charInStart + (0.02 / titleChars.length);


                            const charOp = useTransform(scrollYProgress, [charInStart, charInEnd, outStart, outEnd], [0, 1, 1, 0]);

                            const charX = useTransform(scrollYProgress, [charInStart, charInEnd, outStart, outEnd], [-20, 0, 0, 20]);

                            const charBlur = useTransform(scrollYProgress, [charInStart, charInEnd, outStart, outEnd], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);

                            return (

                                <motion.span key={i} style={{ opacity: charOp, x: charX, filter: charBlur }} className="inline-block">

                                    {char === " " ? "\u00A0" : char}

                                </motion.span>

                            );

                        })}

                    </h2>

                </div>



                {/* Video Overlays */}
                <motion.div
                    style={{ opacity: videoOpacity, scale: videoScale }}
                    className={`absolute top-[-20%] md:top-[-25%] ${videoLeft} w-[300px] md:w-[500px] lg:w-[600px] z-20 pointer-events-none mix-blend-screen rounded-full overflow-hidden flex items-center justify-center`}
                >

                    <video src={section.videoUrl} autoPlay loop muted playsInline className="w-full h-auto object-cover scale-[1.3] drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />

                </motion.div>



                {/* Description */}
                <motion.div style={{ opacity: descOpacity, y: descY }} className="mt-2 md:mt-5 text-center z-30 relative pointer-events-auto">

                    <p className="text-gray-400 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
                        {section.desc1}<br className="hidden md:block" />
                        <span className="text-white font-normal">{section.desc2}</span>
                    </p>

                    <Link href="/service" className="group inline-flex items-center gap-2 text-white text-sm md:text-base font-semibold uppercase tracking-widest hover:text-[#D32F2F] transition-colors">
                        Learn more
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>

                </motion.div>


            </div>


        </motion.div>

    );


};




// Zoom Outro
const ZoomOutro = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {


    const inStart = 0.85;
    const inEnd = 0.90;

    const zoomStart = 0.90;
    const zoomEnd = 1.00;


    const opacity = useTransform(scrollYProgress, [inStart, inEnd], [0, 1]);


    // Adjusted the scale mapping to start slower
    const scale = useTransform(scrollYProgress, [zoomStart, zoomEnd], [1, 200]);


    const pointerEvents = useTransform(scrollYProgress, p => p >= inStart ? "auto" : "none");


    return (


        <motion.div style={{ opacity, pointerEvents, zIndex: 40 }} className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black">


            {/* Multiply mask layer. White text becomes the window to see StaticNextSectionPreview underneath. Black stays black. */}
            <motion.div style={{ scale, transformOrigin: "center center" }} className="absolute inset-0 flex items-center justify-center bg-black text-white mix-blend-multiply pointer-events-none">
                <h1 className="text-[18vw] md:text-[20vw] font-black tracking-tighter whitespace-nowrap leading-none mix-blend-normal">
                    EXMEDIA
                </h1>
            </motion.div>


            {/* Solid thick white outline so the text is incredibly visible over the dark component */}
            <motion.div style={{ scale, transformOrigin: "center center" }} className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen">

                <h1
                    className="text-[18vw] md:text-[20vw] font-black tracking-tighter whitespace-nowrap leading-none text-transparent"
                    style={{ WebkitTextStroke: "6px rgba(255,255,255,0.9)" }}
                >
                    EXMEDIA
                </h1>

            </motion.div>


        </motion.div>

    );

};
