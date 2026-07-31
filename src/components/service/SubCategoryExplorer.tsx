"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Package, LayoutList } from "lucide-react";
import { CategoryData } from "@/lib/servicesData";

interface SubCategoryExplorerProps {
    category: CategoryData;
}

export default function SubCategoryExplorer({ category }: SubCategoryExplorerProps) {
    const [activeTab, setActiveTab] = useState<string>(
        category.subServices[0]?.slug || ""
    );
    const sectionRef = useRef<HTMLElement>(null);
    const mobileScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sync = () => {
            if (typeof window === "undefined") return;
            const hash = window.location.hash.replace("#", "");
            const match = category.subServices.find((s) => s.slug === hash);
            if (match) {
                setActiveTab(hash);
                setTimeout(() => {
                    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 150);
            }
        };
        sync();

        window.addEventListener("hashchange", sync);
        window.addEventListener("popstate", sync);

        const handleDocClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (link && link.hash) {
                setTimeout(sync, 100);
            }
        };
        document.addEventListener("click", handleDocClick);

        return () => {
            window.removeEventListener("hashchange", sync);
            window.removeEventListener("popstate", sync);
            document.removeEventListener("click", handleDocClick);
        };
    }, [category]);

    const activeSub = category.subServices.find((s) => s.slug === activeTab) ?? category.subServices[0];
    const activeIndex = category.subServices.findIndex((s) => s.slug === activeTab);

    const select = (slug: string, idx: number) => {
        setActiveTab(slug);
        window.history.pushState(null, "", `#${slug}`);
        // Auto-scroll mobile strip to keep active tab centred
        const strip = mobileScrollRef.current;
        if (strip) {
            const btn = strip.children[idx] as HTMLElement;
            btn?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    };

    const scrollToEnquiry = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
    };

    /* ── animation ─────────────────────────────────────────────────── */
    const panelVariants = {
        enter:  { opacity: 0, y: 18 },
        center: { opacity: 1, y: 0,  transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
        exit:   { opacity: 0, y: -14, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
    };

    const childStagger = {
        center: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
    };

    const child = {
        enter:  { opacity: 0, y: 12 },
        center: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
    };

    return (
        <section
            ref={sectionRef}
            id="subcategory-explorer"
            className="relative bg-[#060606] border-t border-white/[0.05] text-white overflow-hidden"
        >
            {/* ── faint grid texture ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }}
            />

            <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-0 py-20 md:py-20">

                {/* ── section header ─────────────────────────────────── */}
                <div className="text-center mb-14 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400"
                    >
                        <Sparkles className="w-3 h-3 text-[#D32F2F]" />
                        Detailed Capabilities
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.05 }}
                        className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[5rem] font-serif leading-[1.04] tracking-tight text-white mb-4"
                    >
                        Explore Our{" "}
                        <span className="italic text-gray-600">Specialisations</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
                        className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
                    >
                        Select a specialisation to explore our approach, strategic focus, and deliverables.
                    </motion.p>
                </div>

                {/* ── mobile: sticky pill strip ──────────────────────── */}
                <div className="lg:hidden sticky top-[60px] z-30 -mx-4 sm:-mx-8 mb-8">
                    <div className="bg-[#060606]/95 backdrop-blur-xl border-b border-white/[0.05] px-4 sm:px-8 py-3">
                        <div ref={mobileScrollRef} className="flex gap-2.5 overflow-x-auto scrollbar-none snap-x">
                            {category.subServices.map((sub, idx) => {
                                const active = sub.slug === activeTab;
                                return (
                                    <button
                                        key={sub.slug}
                                        onClick={() => select(sub.slug, idx)}
                                        className={`snap-center shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                                            active
                                                ? "bg-white text-black"
                                                : "bg-white/[0.05] text-gray-400 hover:bg-white/10 hover:text-white border border-white/[0.06]"
                                        }`}
                                    >
                                        <span className={`font-mono text-[9px] ${active ? "text-[#D32F2F]" : "text-gray-600"}`}>
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        {sub.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ── main layout ────────────────────────────────────── */}
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">

                    {/* ── SIDEBAR ──────────────────────────────────────── */}
                    <aside className="hidden lg:block w-[280px] xl:w-[300px] shrink-0 sticky top-[100px] self-start bg-[#0f0f0f] border border-white/[0.07] rounded-2xl overflow-hidden">
                        <p className="text-[9px] font-mono tracking-[.22em] uppercase text-gray-600 mb-0 px-5 pt-5 pb-3 border-b border-white/[0.05]">
                            {category.title} — Specialisations
                        </p>

                        <ul className="space-y-0 py-2">
                            {category.subServices.map((sub, idx) => {
                                const active = sub.slug === activeTab;
                                return (
                                    <li key={sub.slug}>
                                        <button
                                            onClick={() => select(sub.slug, idx)}
                                            className={`relative w-full text-left flex items-center gap-4 px-5 py-4 transition-all duration-300 group ${
                                                active
                                                    ? "text-white bg-white/[0.05]"
                                                    : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]"
                                            }`}
                                        >
                                            {/* sliding background */}
                                            {active && (
                                                <motion.span
                                                    layoutId="sidebar-bg"
                                                    className="absolute inset-0 bg-white/[0.06]"
                                                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                                                />
                                            )}

                                            {/* large display number */}
                                            <span
                                                className={`relative z-10 font-serif italic text-2xl xl:text-3xl leading-none w-10 shrink-0 select-none transition-colors duration-300 ${
                                                    active ? "text-[#D32F2F]" : "text-gray-800 group-hover:text-gray-600"
                                                }`}
                                                style={{ fontVariantNumeric: "oldstyle-nums" }}
                                            >
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>

                                            {/* name */}
                                            <span className="relative z-10 text-[13px] font-medium leading-snug flex-1">
                                                {sub.name}
                                            </span>

                                            {/* red accent line */}
                                            {active && (
                                                <motion.span
                                                    layoutId="sidebar-line"
                                                    className="absolute left-0 top-3 bottom-3 w-[2px] bg-[#D32F2F] rounded-full"
                                                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                                                />
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </aside>

                    {/* ── CONTENT PANEL ────────────────────────────────── */}
                    <div className="flex-1 min-w-0 bg-[#0f0f0f] border border-white/[0.07] rounded-2xl overflow-hidden">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={activeSub.slug}
                                variants={panelVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="p-0"
                            >
                                {/* image hero */}
                                <div className="relative w-full h-52 sm:h-64 md:h-90 overflow-hidden">
                                    <img
                                        src={activeSub.image}
                                        alt={activeSub.name}
                                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* overlay text */}
                                    <div className="absolute bottom-5 left-6">
                                        <span className="text-[9px] font-mono tracking-[.2em] uppercase text-[#D32F2F] block mb-1.5">
                                            Specialisation Focus
                                        </span>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white leading-tight">
                                            {activeSub.name}
                                        </h3>
                                    </div>

                                    {/* index badge top-right */}
                                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10">
                                        <span className="font-serif italic text-[#D32F2F] text-sm leading-none">
                                            {String(activeIndex + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400">
                                            of {category.subServices.length}
                                        </span>
                                    </div>
                                </div>

                                {/* body grid */}
                                <motion.div
                                    variants={childStagger}
                                    initial="enter"
                                    animate="center"
                                    className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10"
                                >
                                    {/* description col */}
                                    <motion.div variants={child} className="md:col-span-12 space-y-2">
                                        <p className="text-gray-300 text-sm sm:text-[15px] leading-[1.75] font-light max-w-3xl">
                                            {activeSub.desc}
                                        </p>
                                    </motion.div>

                                    {/* divider */}
                                    <div className="md:col-span-12 h-px bg-white/[0.05]" />

                                    {/* focus areas */}
                                    <motion.div variants={child} className="md:col-span-7 space-y-4">
                                        <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[.18em] text-gray-500">
                                            <LayoutList className="w-3.5 h-3.5 text-[#D32F2F]" />
                                            Core Strategic Focus
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            {activeSub.chooseUs.map((pt, i) => (
                                                <li key={i} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-[2px]" />
                                                    <span className="text-[13px] text-gray-300 leading-snug">{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* deliverables */}
                                    <motion.div variants={child} className="md:col-span-5 space-y-4">
                                        <h4 className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[.18em] text-gray-500">
                                            <Package className="w-3.5 h-3.5 text-[#D32F2F]" />
                                            Key Deliverables
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeSub.deliverables.map((d, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-gray-400 hover:border-white/[0.14] transition-colors"
                                                >
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* divider */}
                                    <div className="md:col-span-12 h-px bg-white/[0.05]" />

                                    {/* CTA row */}
                                    <motion.div variants={child} className="md:col-span-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <p className="text-[11px] text-gray-600 font-mono tracking-wide">
                                            Ready to get started? Let&apos;s talk.
                                        </p>
                                        <a
                                            href="#enquiry-form"
                                            onClick={scrollToEnquiry}
                                            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-[11px] font-bold font-mono tracking-[.15em] uppercase hover:bg-[#D32F2F] hover:text-white transition-all duration-300"
                                        >
                                            Enquire Now
                                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
