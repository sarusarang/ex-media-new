"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";





export default function Faq({title}: {title: string}) {



    const faqs = [
        {
            q: "How long does it take to see results from a paid ad campaign?",
            a: "Results vary depending on the platform and goals. Typically, you'll see initial traction within 48-72 hours, but significant ROI often takes 2-4 weeks as the algorithm learns and optimizes."
        },
        {
            q: "Can I pause or adjust my campaign anytime?",
            a: "Yes, absolutely. You have full control over your campaigns. You can pause, adjust budgets, or modify targeting at any time through your dashboard."
        },
        {
            q: "Do you provide detailed performance reports?",
            a: "Yes, we provide comprehensive weekly and monthly reports detailing reach, engagement, conversions, and ROI, along with strategic insights."
        },
        {
            q: "What happens if my ads aren't performing well?",
            a: "We continuously monitor performance and conduct A/B testing to optimize your campaigns. If something isn't working, we'll pivot strategies to ensure you get the best possible results."
        },
        {
            q: "Do I need a large budget to start with paid ads?",
            a: "Not at all. We work with budgets of all sizes, starting from as low as ₹5,000/month. We'll help you maximize your return regardless of your budget."
        }
    ];

    const [activeFaq, setActiveFaq] = useState<number | null>(null);


    return (



        <section className="bg-white text-black py-10 md:py-14 rounded-[3rem] md:rounded-[5rem] mx-2 md:mx-6 mb-12 md:mb-16 shadow-2xl relative overflow-hidden">


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
                            Everything you need to know about partnering with us for {title.toLowerCase()} execution.
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


    )



}