"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";




export default function WhatsApp() {


    return (

        <section className="bg-black text-white py-24 mx-2 md:mx-6 mb-12 md:mb-16 rounded-[4rem] md:rounded-[6rem] shadow-2xl overflow-hidden relative border border-white/10">


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

    )


}