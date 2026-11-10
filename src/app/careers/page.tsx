"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Aurora from "@/components/Aurora";
import JobList from "@/components/careers/JobList";
import ApplicationModal from "@/components/careers/ApplicationModal";
import {
    Briefcase,
    ArrowRight,
    ArrowUpRight,
    Sparkles,
    Users,
    Mail,
    Zap,
    BookOpen,
    Smile,
    Compass,
    TrendingUp,
} from "lucide-react";

// Staggered variants for animations
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: custom * 0.1,
            ease: "easeOut" as const,
        },
    }),
};

export default function CareersPage() {
    const heroRef = useRef(null);
    const heroView = useInView(heroRef, { margin: "200px 0px 200px 0px" });

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState("");

    const handleOpenModal = (position: string = "") => {
        setSelectedPosition(position);
        setIsModalOpen(true);
    };

    const scrollToOpenings = () => {
        const el = document.getElementById("openings");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Careers at Exmedia | Join Our Team",
                        url: "https://www.exmedia.in/careers",
                        description:
                            "Build your career and shape bold brands with Exmedia. Explore current job openings in design, video editing, digital marketing, and strategy.",
                        publisher: {
                            "@type": "Organization",
                            name: "Exmedia",
                            url: "https://www.exmedia.in",
                            foundingDate: "2006",
                        },
                    }),
                }}
            />

            {/* Application Modal */}
            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultPosition={selectedPosition}
            />

            {/* ══════════════════════════════════
                HERO SECTION (with Aurora effect)
            ══════════════════════════════════ */}
            <section
                ref={heroRef}
                className="relative w-full min-h-[78vh] sm:min-h-[82vh] flex flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16"
            >
                {/* Canvas Background */}
                <div className="absolute inset-0 z-0 opacity-70">
                    {heroView && (
                        <Aurora
                            colorStops={["#D32F2F", "#581c87", "#050505"]}
                            speed={0.8}
                            amplitude={1.2}
                            blend={0.5}
                        />
                    )}
                </div>

                {/* Vignette Overlay */}
                <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />

                {/* Hero Content */}
                <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-10 text-center flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.05] text-[10px] font-mono font-bold tracking-[.25em] uppercase text-gray-300 mb-5 sm:mb-6 backdrop-blur-sm"
                    >
                        <Briefcase className="w-3.5 h-3.5 text-[#D32F2F]" /> CAREERS AT EXMEDIA
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
                        className="text-[clamp(2.5rem,7vw,6.5rem)] font-serif font-medium tracking-tight text-white leading-[1.05] mb-4 sm:mb-5"
                    >
                        Build Your Career. <br />
                        <em className="text-gray-400 not-italic italic">Shape Brands.</em>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.22 }}
                        className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 sm:mb-10"
                    >
                        Join a team that&apos;s been crafting bold brands and cutting-edge creatives since 2006. At exmedia, your ideas don&apos;t just get heard — they get built.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.36 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <button
                            onClick={scrollToOpenings}
                            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm tracking-wider uppercase rounded-2xl hover:bg-gray-100 transition-all cursor-pointer shadow-xl hover:scale-105"
                        >
                            View Open Roles <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                        <button
                            onClick={() => handleOpenModal("General / Resume Submission")}
                            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/[0.2] bg-white/[0.05] text-white font-bold text-sm tracking-wider uppercase rounded-2xl hover:bg-white/[0.1] transition-all cursor-pointer backdrop-blur-sm hover:scale-105"
                        >
                            Send Us Your Resume <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 01 — WHY EXMEDIA
            ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#050505] border-t border-white/[0.05]">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Heading Side */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeInUp}
                            custom={0}
                            className="lg:col-span-6 space-y-6"
                        >
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono font-bold tracking-widest text-[#ff5555] uppercase">
                                <TrendingUp className="w-3.5 h-3.5 text-[#D32F2F]" /> Why exmedia / Section 01
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight">
                                A team driven by creativity, <br />
                                <span className="italic text-gray-400">not conformity.</span>
                            </h2>
                        </motion.div>

                        {/* Description & Features Side */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeInUp}
                            custom={1}
                            className="lg:col-span-6 space-y-8"
                        >
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                                For nearly two decades, Exmedia has grown by hiring people who think differently. We&apos;re a branding and advertising studio that blends human creativity with AI-powered tools — and we&apos;re looking for people who want to grow at the intersection of both.
                            </p>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                                Here, you won&apos;t be another cog in a content mill. You&apos;ll work directly on real client brands, real campaigns, and real strategy — with the freedom to bring your own voice to the work.
                            </p>

                            {/* Key Highlights Grid */}
                            <div className="grid grid-cols-2 gap-3 pt-4">
                                {[
                                    { icon: Sparkles, label: "Creative Freedom" },
                                    { icon: Users, label: "Real Client Impact" },
                                    { icon: Zap, label: "AI-Forward Workflow" },
                                    { icon: BookOpen, label: "Continuous Learning" },
                                ].map((pill, i) => (
                                    <motion.div
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInUp}
                                        custom={i * 0.8}
                                        className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300"
                                    >
                                        <pill.icon className="w-4 h-4 text-[#D32F2F] shrink-0" />
                                        <span className="text-xs sm:text-sm font-semibold text-gray-200">{pill.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 02 — LIFE AT EXMEDIA
            ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#0b0b0b] border-t border-b border-white/[0.05]">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={fadeInUp}
                        custom={0}
                        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                            <Compass className="w-3.5 h-3.5 text-[#D32F2F]" /> Culture / Section 02
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold tracking-tight">
                            Life at Exmedia
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            The core principles that power our work culture every day.
                        </p>
                    </motion.div>

                    {/* Culture Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "Collaborative by Design",
                                desc: "Designers, strategists, and marketers work side-by-side on every project, not in silos.",
                                icon: Users,
                            },
                            {
                                num: "02",
                                title: "Always Learning",
                                desc: "We invest in the latest AI tools and creative tech so our team never falls behind the curve.",
                                icon: BookOpen,
                            },
                            {
                                num: "03",
                                title: "Balanced Growth",
                                desc: "We believe great work comes from people who also have a life outside of work.",
                                icon: Smile,
                            },
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.12 }}
                                className="group p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-xs font-mono font-bold text-gray-500 tracking-wider">
                                            {card.num}
                                        </span>
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D32F2F] group-hover:scale-110 transition-transform">
                                            <card.icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#ff5555] transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 03 — OPEN POSITIONS
            ══════════════════════════════════ */}
            <section id="openings" className="py-20 lg:py-28 bg-[#050505]">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={fadeInUp}
                        custom={0}
                        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    >
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono font-bold tracking-widest text-[#ff5555] uppercase">
                            <Briefcase className="w-3.5 h-3.5 text-[#D32F2F]" /> Open Positions / Section 03
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold tracking-tight">
                            Current Openings
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Explore available roles or submit your application to join our growing studio.
                        </p>
                    </motion.div>

                    {/* Reusable Job Listing Component */}
                    <JobList onApply={handleOpenModal} />
                </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 05 — CTA
            ══════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-[#090909] border-t border-white/[0.05] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D32F2F]/10 rounded-full blur-3xl pointer-events-none" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeInUp}
                    custom={0}
                    className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8"
                >
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                        <Sparkles className="w-3.5 h-3.5 text-[#D32F2F]" /> CTA / Section 05
                    </span>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Ready to build brands with us?
                    </h2>

                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        We&apos;re always looking for people who care about great work as much as we do. If that&apos;s you, let&apos;s talk.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button
                            onClick={() => handleOpenModal("General Application")}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-2xl hover:bg-gray-100 transition-all cursor-pointer shadow-xl flex items-center justify-center gap-2 hover:scale-105"
                        >
                            Apply Now <ArrowUpRight className="w-4 h-4" />
                        </button>
                        <a
                            href="mailto:careers@exmedia.in"
                            className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-white/[0.04] text-white font-bold text-sm uppercase tracking-wider rounded-2xl hover:bg-white/[0.1] transition-all cursor-pointer backdrop-blur-sm flex items-center justify-center gap-2 hover:scale-105"
                        >
                            <Mail className="w-4 h-4 text-[#D32F2F]" /> Email Us: careers@exmedia.in
                        </a>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
