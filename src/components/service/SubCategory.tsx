"use client";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle2, Layers, Zap, Target, BarChart3, ArrowRight, Sparkles, ChevronDown, HelpCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import EnquiryForm from "../common/EnquiryForm";
import { BorderBeam } from "../ui/border-beam";




function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(from, to, {
                duration: duration,
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(value).toString();
                    }
                },
            });
            return () => controls.stop();
        }
    }, [from, to, duration, inView]);

    return <span ref={nodeRef}>{from}</span>;
}




const FaqItem = ({ question, answer }: { question: string, answer: string }) => {


    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className={`border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] scale-[1.01]' : 'bg-[#f8f9fa] border-gray-100/50 hover:border-gray-200 hover:bg-[#f1f3f5]'}`}>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-5 py-4 md:px-8 md:py-6 flex items-start md:items-center justify-between focus:outline-hidden transition-colors cursor-pointer group"
            >
                <div className="flex items-center gap-4 pr-4">
                    <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#D32F2F]/10 text-[#D32F2F]' : 'bg-white text-gray-400 group-hover:text-gray-600 shadow-xs'}`}>
                        <span className="font-serif text-sm md:text-base font-bold">Q.</span>
                    </div>
                    <span className={`font-serif text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-black' : 'text-gray-800'}`}>
                        {question}
                    </span>
                </div>
                <div className={`shrink-0 mt-1 md:mt-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#D32F2F] text-white rotate-180' : 'bg-white text-gray-400 group-hover:text-gray-600 shadow-xs'}`}>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                </div>
            </button>

            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <div className="px-5 pb-5 pt-0 md:px-8 md:pb-8 flex gap-4">
                    <div className="shrink-0 w-8 md:w-10 hidden md:block" />
                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                        {answer}
                    </p>
                </div>
            </motion.div>

        </div>

    );

};





export default function SubCategory({ subServiceName }: { subServiceName: string }) {


    return (


        <div className="bg-black text-white w-full">


            {/* 1. Stunning Dark Hero Section (Matches Screenshot Vibe) */}
            <section className="relative w-full h-[70vh] flex items-center overflow-hidden border-b border-white/5 bg-black">


                {/* Abstract Background Element on the right */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.1, x: 50 }}
                        animate={{ opacity: 0.65, scale: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FBrand_Consulting_c4486416a2.png&w=4500&q=90"
                        alt="Background Abstract"
                        className="absolute inset-0 z-0 w-full h-full object-cover"
                    />
                </div>


                <div className="container mx-auto px-4 md:px-12 relative z-20">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >


                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-4 capitalize leading-none font-medium text-white">
                            {subServiceName}
                        </h1>


                        <p className="text-xl md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
                            We deliver world-class <span className="text-white font-medium">{subServiceName}</span> tailored precisely to elevate your brand&apos;s digital presence and drive measurable outcomes on a global scale.
                        </p>

                    </motion.div>

                </div>


            </section>




            {/* 2. Value Proposition / Overview */}
            <section className="py-10 md:py-16 bg-white relative">


                <div className="container mx-auto px-4 md:px-12">


                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">


                        <div className="w-full lg:w-1/2">


                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                                className="relative rounded-[2.5rem] overflow-hidden aspect-square border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2000&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale-30"
                                    alt="Strategic Advantage"
                                />
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 text-black">
                                    Why Choose Us <br />For <span className="text-[#D32F2F] italic">{subServiceName}</span>?
                                </h2>

                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light mb-12">
                                    <p>
                                        In a hyper-competitive landscape, mediocrity goes unnoticed. Our approach to {subServiceName.toLowerCase()} is aggressive, deliberate, and entirely focused on measurable outcomes.
                                    </p>
                                    <p>
                                        We pair deep industry expertise with bleeding-edge methodologies to architect solutions that not only solve immediate challenges but build long-term structural advantages for your brand.
                                    </p>
                                </div>


                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                    {['Precision Engineered', 'KPI Driven', 'Scalable Architecture', 'Flawless Execution'].map((item, idx) => (

                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * idx, duration: 0.5 }}
                                            className="flex items-center gap-3"
                                        >

                                            <CheckCircle2 className="w-6 h-6 text-[#D32F2F]" />

                                            <span className="font-bold text-gray-900">{item}</span>

                                        </motion.div>

                                    ))}

                                </div>

                            </motion.div>

                        </div>

                    </div>

                </div>

            </section>





            {/* 3. Dynamic Service Offerings - Visual & Content Rich */}
            <section className="py-10 md:py-16 bg-[#050505] relative overflow-hidden">


                <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">


                    <div className="text-center mb-20 md:mb-16">


                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D32F2F] font-mono text-sm tracking-widest uppercase mb-6"
                        >
                            <Sparkles className="w-4 h-4" /> The Arsenal
                        </motion.div>


                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-3 leading-tight"
                        >
                            What We <span className="italic text-gray-500">Deliver</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
                        >
                            A comprehensive suite of scalable, high-impact strategies designed to elevate your brand from industry participant to market leader.
                        </motion.p>

                    </div>


                    <div className="space-y-32 md:space-y-28">


                        {/* Offering 1: Video/Image Left, Text Right */}
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">


                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, type: "spring" }}
                                className="w-full lg:w-3/5 relative rounded-[2rem] overflow-hidden aspect-4/3 md:aspect-video group"
                            >

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />

                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                                >
                                    <source src="https://admin.wac.co/uploads/Digital_marketing_9mb_0a2455445a.mp4" type="video/mp4" />
                                </video>

                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full lg:w-2/5 space-y-6"
                            >

                                <h3 className="text-3xl md:text-5xl font-serif text-white leading-snug">
                                    Immersive <br /><span className="text-[#D32F2F] italic">Experiences</span>
                                </h3>

                                <p className="text-gray-400 text-lg font-light leading-relaxed">
                                    We build digital ecosystems that don&apos;t just exist but breathe. By integrating state-of-the-art interactive elements and motion design, we guarantee maximum user engagement and retention.
                                </p>

                                <ul className="space-y-3 pt-4">
                                    {['Interactive Prototypes', 'Motion Graphics', '3D Visualizations'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>


                            </motion.div>


                        </div>


                        {/* Decorative Separator */}
                        <div className="relative flex justify-center">
                            <div className="w-[80%] md:w-[60%] h-px bg-linear-to-r from-transparent via-[#D32F2F]/30 to-transparent" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D32F2F]/50 blur-[2px]" />
                        </div>


                        {/* Offering 2: Text Left, Image Right (Responsive Reversal) */}
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full lg:w-2/5 space-y-6"
                            >

                                <h3 className="text-3xl md:text-5xl font-serif text-white leading-snug">
                                    Algorithmic <br /><span className="text-[#D32F2F] italic">Growth</span>
                                </h3>

                                <p className="text-gray-400 text-lg font-light leading-relaxed">
                                    Every interaction is tracked, measured, and optimized. We deploy advanced analytics and machine learning models to continuously refine strategies and maximize your return on investment.
                                </p>

                                <ul className="space-y-3 pt-4">
                                    {['Predictive Modeling', 'Conversion Rate Optimization', 'A/B Testing'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, type: "spring" }}
                                className="w-full lg:w-3/5 relative rounded-[2rem] overflow-hidden aspect-4/3 md:aspect-video group"
                            >

                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />

                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                                >
                                    <source src="https://admin.wac.co/uploads/Digital_marketing_9mb_0a2455445a.mp4" type="video/mp4" />
                                </video>

                            </motion.div>


                        </div>



                    </div>


                </div>


            </section>




            {/* 4. Immersive Parallax Stats/Impact Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">


                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')`,
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                />


                {/* Deep dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-b from-[#050505] via-black/70 to-[#050505]" />


                <div className="container mx-auto px-4 relative z-10">


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto text-center divide-y md:divide-y-0 md:divide-x divide-white/10">


                        {/* Stat 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center justify-center py-6 md:py-0"
                        >
                            <h4 className="text-5xl md:text-7xl font-serif text-white font-bold mb-4">
                                <span className="text-[#D32F2F]"><Counter to={300} /></span>+
                            </h4>
                            <p className="text-gray-400 uppercase tracking-widest font-mono text-sm">Projects Delivered</p>
                        </motion.div>


                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col items-center justify-center py-6 md:py-0"
                        >
                            <h4 className="text-5xl md:text-7xl font-serif text-white font-bold mb-4">
                                <span className="text-[#D32F2F]"><Counter to={98} /></span>%
                            </h4>
                            <p className="text-gray-400 uppercase tracking-widest font-mono text-sm">Client Retention</p>
                        </motion.div>


                        {/* Stat 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col items-center justify-center py-6 md:py-0"
                        >
                            <h4 className="text-5xl md:text-7xl font-serif text-white font-bold mb-4">
                                <span className="text-[#D32F2F]"><Counter to={10} /></span>x
                            </h4>
                            <p className="text-gray-400 uppercase tracking-widest font-mono text-sm">Average ROI</p>
                        </motion.div>


                    </div>


                </div>


            </section>



            {/* 5. Case Studies Section */}
            <section className="bg-black text-white py-16 mx-2 md:mx-6 mt-12 mb-12 md:mb-16 rounded-[4rem] md:rounded-[6rem] shadow-2xl overflow-hidden relative border border-white/10">


                <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">


                    <div className="text-center mb-16 max-w-3xl mx-auto">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D32F2F] font-mono text-sm tracking-widest uppercase mb-6"
                        >
                            <BarChart3 className="w-4 h-4" /> Proven Impact
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-4"
                        >
                            Case <span className="italic text-gray-500">Studies</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-gray-400 text-lg md:text-xl font-light"
                        >
                            Real-world examples of how our tailored strategies have transformed businesses and delivered measurable, sustainable growth.
                        </motion.p>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                        {/* Case Study 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group relative rounded-[2rem] overflow-hidden aspect-video xl:aspect-4/3 cursor-pointer"
                        >

                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" alt="Tech Startup Growth" />

                            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">

                                <div>

                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">FinTech Innovator Scaling</h3>
                                    <p className="text-gray-300 mb-6 max-w-md line-clamp-2 md:line-clamp-none">How we achieved a massive user influx through targeted omnichannel campaigns and optimized onboarding flows.</p>

                                    <div className="flex flex-wrap items-center gap-6 md:gap-10 opacity-100 transition-opacity duration-500">

                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-[#D32F2F] font-serif">250%</div>
                                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1">User Growth</div>
                                        </div>

                                        <div className="w-px h-10 bg-white/20" />

                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-white font-serif">40%</div>
                                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1">CAC Reduction</div>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </motion.div>



                        {/* Case Study 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group relative rounded-[2rem] overflow-hidden aspect-video xl:aspect-4/3 cursor-pointer"
                        >
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" alt="E-Commerce Transformation" />
                            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Global E-Commerce Rebrand</h3>
                                    <p className="text-gray-300 mb-6 max-w-md line-clamp-2 md:line-clamp-none">Revitalizing a legacy retail brand for the digital age, resulting in unprecedented online conversions.</p>

                                    <div className="flex flex-wrap items-center gap-6 md:gap-10 opacity-100 transition-opacity duration-500">
                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-[#D32F2F] font-serif">3x</div>
                                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1">Online Revenue</div>
                                        </div>
                                        <div className="w-px h-10 bg-white/20" />
                                        <div>
                                            <div className="text-3xl md:text-4xl font-bold text-white font-serif">120K</div>
                                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1">New Leads</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>


                <BorderBeam
                    duration={6}
                    size={900}
                    className="from-transparent via-red-500 to-transparent"
                />

                <BorderBeam
                    duration={6}
                    delay={3}
                    size={900}
                    borderWidth={2}
                    className="from-transparent via-red-500 to-transparent"
                />


            </section>




            {/* 6. FAQ Section - Light Theme */}
            <section className="py-4 md:py-10 bg-white relative">


                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-40" />


                <div className="container mx-auto px-4 max-w-5xl relative z-10">


                    <div className="text-center mb-12 md:mb-14">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-[#D32F2F] font-mono text-sm tracking-widest uppercase mb-3"
                        >
                            <HelpCircle className="w-4 h-4" /> Clarity
                        </motion.div>


                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-4 md:mb-6 leading-tight"
                        >
                            Common <span className="italic text-gray-900">Inquiries</span>
                        </motion.h2>


                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto"
                        >
                            Everything you need to know about our approach, methodology, and how we deliver exceptional results.
                        </motion.p>


                    </div>



                    <div className="space-y-4 md:space-y-6">
                        {[
                            {
                                q: "How do you measure success for these campaigns?",
                                a: "We establish clear, quantifiable KPIs at the onset of every project, tracking everything from raw traffic and interaction metrics to bottom-line ROI and customer lifetime value using advanced analytics dashboards."
                            },
                            {
                                q: "What is the typical timeline for seeing results?",
                                a: "While rapid growth hacks can show spikes within weeks, foundational, sustainable algorithmic growth typically requires 3-6 months to mature and yield consistent compounding returns."
                            },
                            {
                                q: "Do you integrate with our existing technology stack?",
                                a: "Absolutely. We pride ourselves on creating bespoke ecosystems that seamlessly plug into your existing CRMs, ERPs, and internal tools, ensuring zero operational friction."
                            },
                            {
                                q: "Are your strategies adaptable to market shifts?",
                                a: "Adaptability is our core philosophy. We deploy agile methodologies that allow us to pivot campaigns, adjust targeting, and refine creative assets in real-time based on live data feedback."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <FaqItem question={faq.q} answer={faq.a} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Enquiry Form */}
            <EnquiryForm />



        </div>
    );
}