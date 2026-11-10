"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { servicesData } from "@/lib/servicesData";

// Derived from servicesData — single source of truth.
// Adding/editing a category or subcategory in servicesData.ts auto-updates the navbar.
const serviceCategories = Object.values(servicesData).map((category) => ({
    title: category.title,
    slug: category.slug,
    items: category.subServices.map((sub) => ({
        name: sub.name,
        href: `/service/${category.slug}#${sub.slug}`,
    })),
}));

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
                    style={{ minHeight: '440px' }}
                >
                    {/* Butter smooth animated blue glow on the right */}
                    <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full origin-top bg-linear-to-l from-blue-600/20 via-blue-900/10 to-transparent pointer-events-none"
                    />

                    <div className="container mx-auto px-4 lg:px-12 py-10 relative z-10 flex flex-col lg:flex-row gap-10">
                        {/* Left Side: Capabilities Header */}
                        <div className="w-full lg:w-[220px] shrink-0 flex flex-col justify-between pr-8 lg:border-r lg:border-white/10">
                            <div>
                                <h2 className="text-2xl leading-tight mb-6 font-medium text-gray-100">
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
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pl-2">
                            {serviceCategories.map((category, idx) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    className="flex flex-col"
                                >
                                    <Link onClick={onItemClick} href={`/service/${category.slug}`}>
                                        <h3 className="text-[11px] font-bold tracking-wider uppercase mb-3 flex items-center gap-1.5 text-white group cursor-pointer hover:text-[#D32F2F] transition-colors whitespace-nowrap">
                                            {category.title}
                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-all" />
                                        </h3>
                                    </Link>
                                    <ul className="space-y-2.5">
                                        {category.items.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    onClick={onItemClick}
                                                    href={item.href}
                                                    className="text-gray-400 text-sm leading-snug hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
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
