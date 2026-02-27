"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";




// Footer Links
const footerLinks = {
    quickLinks: [
        { name: "Home", href: "/" },
        { name: "Service", href: "/service" },
        { name: "Deliverables", href: "/deliverables" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Customer Policy Choice", href: "/customer-policy" },
        { name: "Return and Refund Policy", href: "/refund-policy" },
        { name: "Hacker Policy Warning", href: "/hacker-policy" },
        { name: "Disclaimer", href: "/disclaimer" },
    ]
};




// Social Links
const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];



// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};




export default function Footer() {


    const currentYear = new Date().getFullYear();


    return (


        <footer className="bg-[#050505] text-gray-300 relative overflow-hidden border-t border-gray-900">


            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />


            <div className="container mx-auto px-4 lg:px-12 pt-16 pb-4 relative z-10">


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
                >


                    {/* Brand & Description */}
                    <motion.div variants={itemVariants} className="lg:col-span-4 lg:pr-6">


                        <Link href="/" className="inline-block mb-2">
                            <img
                                src="/LOGO-trans.png"
                                alt="Exmedia Logo"
                                loading="lazy"
                                className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>


                        <p className="text-gray-400 mb-8 leading-relaxed max-w-sm text-md text-start">
                            Elevating brands through stunning digital experiences. We craft modern, responsive, and engaging solutions for forward-thinking companies worldwide.
                        </p>


                        <div className="flex items-center space-x-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                                    >
                                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </a>
                                );
                            })}
                        </div>
                        
                    </motion.div>



                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">

                        <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm font-serif">Quick Links</h3>

                        <ul className="space-y-4">

                            {footerLinks.quickLinks.map((link) => (

                                <li key={link.name}>

                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group w-fit text-sm"
                                    >

                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </motion.div>



                    {/* Legal */}
                    <motion.div variants={itemVariants} className="lg:col-span-3">

                        <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm font-serif ml-5">Legal</h3>

                        <ul className="space-y-4">

                            {footerLinks.legal.map((link) => (

                                <li key={link.name}>

                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group w-fit text-sm"
                                    >

                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </motion.div>



                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-3">


                        <h3 className="text-white font-bold tracking-widest uppercase mb-6 text-sm font-serif">Get in Touch</h3>


                        <div className="flex flex-col space-y-6">


                            <div className="flex items-start group">


                                <a href="mailto:info@exmedia.in" className="flex items-start group flex-1">


                                    <div className="w-10 h-10 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0">
                                        <Mail className="w-4 h-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Email Us</p>
                                        <p className="text-gray-300 group-hover:text-white transition-colors text-sm">info@exmedia.in</p>
                                    </div>

                                </a>

                            </div>


                            <div className="flex items-start group">

                                <a href="tel:+919526123466" className="flex items-start group flex-1">

                                    <div className="w-10 h-10 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0">
                                        <Phone className="w-4 h-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Call Us</p>
                                        <p className="text-gray-300 group-hover:text-white transition-colors text-sm">+91 9526123466</p>
                                    </div>

                                </a>

                            </div>


                            <div className="flex items-start group">

                                <div className="w-10 h-10 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Visit Us</p>
                                    <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed text-sm">
                                        123 Innovation Drive,<br />
                                        Tech District, NY 10001
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>


                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="pt-4 border-t border-gray-900 flex justify-center items-center"
                >
                    <p className="text-gray-500 text-sm tracking-wide text-center">
                        &copy; {currentYear} Exmedia. All rights reserved.
                    </p>
                </motion.div>
                
            </div>
        </footer>
    );
}