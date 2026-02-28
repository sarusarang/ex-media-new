"use client";
import { useState } from 'react';
import { motion, Variants } from "framer-motion";
import { Linkedin, Send, ChevronDown, User, Briefcase, Mail, Phone } from "lucide-react";




export default function EnquiryForm() {



    const [messageLength, setMessageLength] = useState(0);



    // framer motion variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };


    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 15 }
        }
    };




    return (


        <section className="py-10 md:py-16 bg-[#050505] relative overflow-hidden text-white font-sans w-full border-t border-white/5">


            {/* Abstract Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#D32F2F]/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />

                {/* Minimal Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MCAwaC0xdjQwaDFWMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8cGF0aCBkPSJNMCA0MHYtMWg0MHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDEpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] opacity-50 z-0"></div>

            </div>


            <div className="container mx-auto px-4 md:px-24 lg:px-24 relative z-10">


                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">


                    {/* Left Column: Content & Profile */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="w-full lg:w-5/12 xl:w-1/2 flex flex-col space-y-12"
                    >


                        <motion.div variants={itemVariants} className="space-y-6">

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-tight">
                                We Are Happy to <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D32F2F] to-red-400 italic">Help You</span>
                            </h2>

                            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                                With touchpoints across numerous verticals and a passionate team at the helm, we have what it takes to give your brand the digital evolution.
                            </p>

                        </motion.div>



                        <motion.div variants={itemVariants}>

                            <div className="relative p-px rounded-3xl bg-linear-to-br from-white/10 to-transparent max-w-sm inline-block w-full sm:w-auto overflow-hidden group">

                                <div className="bg-[#0a0a0a]/90 backdrop-blur-xl p-6 rounded-3xl flex items-center gap-6 relative z-10">

                                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10 relative">

                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />

                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                                            alt="Anoop K Joseph"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />

                                    </div>

                                    <div className="flex flex-col">

                                        <h4 className="text-xl font-bold text-white mb-1">Anoop K Joseph</h4>
                                        <p className="text-sm font-medium text-[#D32F2F] mb-3">Global Sales Head</p>
                                        <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors duration-300">
                                            <Linkedin className="w-4 h-4 text-gray-300" />
                                        </a>

                                    </div>

                                </div>

                                {/* Shimmer animation effect */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shimmer" />

                            </div>

                        </motion.div>

                    </motion.div>



                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-7/12 xl:w-1/2"
                    >

                        <div className="bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">


                            {/* Form Header Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-linear-to-r from-transparent via-[#D32F2F]/50 to-transparent" />


                            <form className="space-y-8 relative z-10">


                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">


                                    <div className="space-y-3 group">


                                        <label className="text-sm font-medium text-gray-400 group-focus-within:text-[#D32F2F] transition-colors flex items-center gap-2">
                                            <User className="w-4 h-4" /> First Name*
                                        </label>


                                        <input
                                            type="text"
                                            placeholder="Enter first name"
                                            className="w-full bg-[#151515] border-transparent rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D32F2F] focus:bg-[#111] transition-all duration-300 shadow-inner shadow-black/20"
                                            required
                                        />


                                    </div>



                                    <div className="space-y-3 group">

                                        <label className="text-sm font-medium text-gray-400 group-focus-within:text-white transition-colors flex items-center gap-2">
                                            <User className="w-4 h-4 opacity-50" /> Last Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter last name"
                                            className="w-full bg-[#151515] border-transparent rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-[#111] transition-all duration-300 shadow-inner shadow-black/20"
                                        />

                                    </div>

                                </div>


                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                                    <div className="space-y-3 group">
                                        <label className="text-sm font-medium text-gray-400 group-focus-within:text-[#D32F2F] transition-colors flex items-center gap-2">
                                            <Mail className="w-4 h-4" /> Email*
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter email"
                                            className="w-full bg-[#151515] border-transparent rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D32F2F] focus:bg-[#111] transition-all duration-300 shadow-inner shadow-black/20"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-3 group">
                                        <label className="text-sm font-medium text-gray-400 group-focus-within:text-[#D32F2F] transition-colors flex items-center gap-2">
                                            <Phone className="w-4 h-4" /> Phone Number*
                                        </label>
                                        <div className="flex bg-[#151515] rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-[#D32F2F] focus-within:bg-[#111] transition-all duration-300 shadow-inner shadow-black/20">
                                            <div className="flex items-center gap-2 px-4 py-4 bg-[#1a1a1a] border-r border-white/5 cursor-pointer hover:bg-[#222] transition-colors">
                                                <img src="https://flagcdn.com/w20/in.png" alt="India Flag" className="w-5 h-auto rounded-sm" />
                                                <ChevronDown className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-300 text-sm ml-1">+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                placeholder="Phone number"
                                                className="w-full bg-transparent border-none px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                              
                                </div>


                                <div className="space-y-3 group">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-medium text-gray-400 group-focus-within:text-white transition-colors flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" /> Tell Us More
                                        </label>
                                        <span className="text-xs text-gray-600">{messageLength}/1000</span>
                                    </div>
                                    <textarea
                                        rows={4}
                                        placeholder="Brief about your project"
                                        onChange={(e) => setMessageLength(e.target.value.length)}
                                        maxLength={1000}
                                        className="w-full bg-[#151515] border-transparent rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-[#111] transition-all duration-300 shadow-inner shadow-black/20 resize-none"
                                    ></textarea>
                                </div>


                                <div className="pt-4">

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-5 px-8 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 group relative overflow-hidden"
                                        type="button"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Send Enquiry
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </span>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#D32F2F]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                    </motion.button>

                                </div>

                            </form>


                        </div>

                    </motion.div>

                </div>


            </div>


        </section>


);


}
