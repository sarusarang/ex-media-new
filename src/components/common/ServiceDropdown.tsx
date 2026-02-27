"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const serviceCategories = [
    {
        title: "Branding",
        slug: "branding",
        items: [
            { name: "Brand Consulting", href: "/service/brand-consulting" },
            { name: "Logo Design", href: "/service/logo-design" },
            { name: "Industrial / Product Design", href: "/service/product-design" },
            { name: "Graphic Design", href: "/service/graphic-design" },
            { name: "2D / 3D Visualisation", href: "/service/visualisation" },
        ]
    },
    {
        title: "Experience Design",
        slug: "experience-design",
        items: [
            { name: "UI/UX Design", href: "/service/ui-ux-design" },
            { name: "Website Design", href: "/service/website-design" },
            { name: "Mobile Experience", href: "/service/mobile-experience" },
            { name: "Commerce Experience", href: "/service/commerce-experience" },
            { name: "Human Machine Interface", href: "/service/hmi" },
        ]
    },
    {
        title: "Technology",
        slug: "technology",
        items: [
            { name: "AI & Machine Learning", href: "/service/ai-ml" },
            { name: "DevOps Consulting", href: "/service/devops" },
            { name: "Data & Analytics", href: "/service/data-analytics" },
            { name: "Web Development", href: "/service/web-development" },
            { name: "Mobile App Development", href: "/service/mobile-app" },
            { name: "E-commerce", href: "/service/ecommerce" },
            { name: "Quality Assurance & Testing", href: "/service/qa-testing" },
            { name: "Cloud Services", href: "/service/cloud-services" },
            { name: "Cyber Security", href: "/service/cyber-security" },
        ]
    },
    {
        title: "Digital Marketing",
        slug: "digital-marketing",
        items: [
            { name: "Search Engine Optimisation", href: "/service/seo" },
            { name: "Social Media Management", href: "/service/social-media" },
            { name: "Performance Marketing", href: "/service/performance-marketing" },
            { name: "Content Marketing", href: "/service/content-marketing" },
            { name: "Marketing Automation", href: "/service/marketing-automation" },
            { name: "Analytics", href: "/service/analytics" },
        ]
    }
];

export const DesktopServiceDropdown = ({ isOpen, onMouseEnter, onMouseLeave, onItemClick }: { isOpen: boolean; onMouseEnter: () => void; onMouseLeave: () => void; onItemClick: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className="absolute left-0 top-full w-full bg-[#0a0a0a] text-white overflow-hidden shadow-2xl border-t border-gray-800"
                    style={{ minHeight: '400px' }}
                >
                    {/* Butter smooth animated blue glow on the right */}
                    <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full origin-top bg-linear-to-l from-blue-600/20 via-blue-900/10 to-transparent pointer-events-none"
                    />

                    <div className="container mx-auto px-4 lg:px-12 py-12 relative z-10 flex flex-col lg:flex-row gap-12">
                        {/* Left Side: Capabilities Header */}
                        <div className="w-full lg:w-1/4 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6 font-medium text-gray-100">
                                    Building Strong<br />
                                    Capabilities to<br />
                                    Empower Your<br />
                                    Brand
                                </h2>
                            </div>
                            <div className="mt-8 lg:mt-0">
                                <Link onClick={onItemClick} href="/service" className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase hover:text-[#D32F2F] transition-colors">
                                    Go to overview
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Columns */}
                        <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {serviceCategories.map((category, idx) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    className="flex flex-col"
                                >
                                    <Link onClick={onItemClick} href={`/service/${category.slug}`}>
                                        <h3 className="text-sm font-bold tracking-wider uppercase mb-6 flex items-center gap-2 text-white group cursor-pointer hover:text-[#D32F2F] transition-colors">
                                            {category.title}
                                            <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </h3>
                                    </Link>
                                    <ul className="space-y-4">
                                        {category.items.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    onClick={onItemClick}
                                                    href={item.href}
                                                    className="text-gray-400 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileServiceDropdown = ({ isOpen, onItemClick }: { isOpen: boolean; onItemClick: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-gray-50 border-t border-gray-100"
                >
                    <div className="px-4 py-4 space-y-6 shadow-inner">
                        <Link onClick={onItemClick} href="/service" className="flex items-center justify-between text-sm font-bold uppercase text-[#D32F2F] pb-2 border-b border-gray-200">
                            Service Overview
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        {serviceCategories.map((category) => (
                            <div key={category.title} className="mb-4 last:mb-0">
                                <Link onClick={onItemClick} href={`/service/${category.slug}`}>
                                    <h3 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                                        {category.title}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </h3>
                                </Link>
                                <div className="pl-2 border-l border-gray-200 space-y-3">
                                    {category.items.map((item) => (
                                        <Link
                                            onClick={onItemClick}
                                            key={item.name}
                                            href={item.href}
                                            className="block text-gray-600 text-sm hover:text-black transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
