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
            { name: "Brand Strategy & Positioning", href: "/service/branding#brand-strategy-positioning" },
            { name: "Visual Identity & Creative Design", href: "/service/branding#visual-identity-creative-design" },
            { name: "Digital Branding & Online Presence", href: "/service/branding#digital-branding-online-presence" },
            { name: "Advertising & Media Communication", href: "/service/branding#advertising-media-communication" },
            { name: "Public Relations & Reputation Management", href: "/service/branding#public-relations-reputation-management" },
        ]
    },
    {
        title: "Experience Design",
        slug: "experience-design",
        items: [
            { name: "Identity & Branding Design", href: "/service/experience-design#identity-branding-design" },
            { name: "Marketing & Promotional Design", href: "/service/experience-design#marketing-promotional-design" },
            { name: "UI/UX & Digital Asset Design", href: "/service/experience-design#ui-ux-digital-asset-design" },
            { name: "Packaging & Environmental Design", href: "/service/experience-design#packaging-environmental-design" },
            { name: "Motion Graphics & Video Design", href: "/service/experience-design#motion-graphics-video-design" },
            { name: "Publication & Editorial Design", href: "/service/experience-design#publication-editorial-design" },
        ]
    },
    {
        title: "Technology",
        slug: "technology",
        items: [
            { name: "AI & Machine Learning", href: "/service/technology#ai-ml" },
            { name: "DevOps Consulting", href: "/service/technology#devops" },
            { name: "Data & Analytics", href: "/service/technology#data-analytics" },
            { name: "Web Development", href: "/service/technology#web-development" },
            { name: "Mobile App Development", href: "/service/technology#mobile-app" },
            { name: "E-commerce", href: "/service/technology#ecommerce" },
            { name: "Quality Assurance & Testing", href: "/service/technology#qa-testing" },
            { name: "Cloud Services", href: "/service/technology#cloud-services" },
            { name: "Cyber Security", href: "/service/technology#cyber-security" },
        ]
    },
    {
        title: "Digital Marketing",
        slug: "digital-marketing",
        items: [
            { name: "Search Engine Optimisation", href: "/service/digital-marketing#seo" },
            { name: "Social Media Management", href: "/service/digital-marketing#social-media" },
            { name: "Performance Marketing", href: "/service/digital-marketing#performance-marketing" },
            { name: "Content Marketing", href: "/service/digital-marketing#content-marketing" },
            { name: "Marketing Automation", href: "/service/digital-marketing#marketing-automation" },
            { name: "Analytics", href: "/service/digital-marketing#analytics" },
        ]
    },
    {
        title: "Photography & Videography",
        slug: "content-production",
        items: [
            { name: "Product Photography & Videography", href: "/service/content-production#product-photography-videography" },
            { name: "E-Commerce & Catalog Photography", href: "/service/content-production#ecommerce-catalog-photography" },
            { name: "Lifestyle & Contextual Imagery", href: "/service/content-production#lifestyle-contextual-imagery" },
            { name: "Short-Form Video & Social Reels", href: "/service/content-production#short-form-video-social-reels" },
            { name: "360° Product Spins & Stop-Motion", href: "/service/content-production#360-product-spins-stop-motion" },
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

                    <div className="container mx-auto px-4 lg:px-12 py-14 relative z-10 flex flex-col lg:flex-row gap-10">
                        {/* Left Side: Capabilities Header */}
                        <div className="w-full lg:w-[220px] shrink-0 flex flex-col justify-between pr-8 lg:border-r lg:border-white/10">
                            <div>
                                <h2 className="text-2xl font-serif leading-tight mb-6 font-medium text-gray-100">
                                    Building Strong
                                    Capabilities to
                                    Empower Your
                                    Brand
                                </h2>
                            </div>
                            <div className="mt-8 lg:mt-0">
                                <Link onClick={onItemClick} href="/service" className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase hover:text-[#D32F2F] transition-colors">
                                    Go to overview
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Side: Columns */}
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10 pl-2">
                            {serviceCategories.map((category, idx) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    className="flex flex-col"
                                >
                                    <Link onClick={onItemClick} href={`/service/${category.slug}`}>
                                        <h3 className="text-[11px] font-bold tracking-wider uppercase mb-4 flex items-center gap-1.5 text-white group cursor-pointer hover:text-[#D32F2F] transition-colors">
                                            {category.title}
                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-all" />
                                        </h3>
                                    </Link>
                                    <ul className="space-y-3">
                                        {category.items.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    onClick={onItemClick}
                                                    href={item.href}
                                                    className="text-gray-400 text-[13px] leading-snug hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
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
