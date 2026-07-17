"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Palette, Layers, Code, Camera, CheckCircle2, ShieldCheck, Zap, Monitor, Cpu, FileText, Download } from "lucide-react";
import HeroBanner from "@/components/service/common/HeroBanner";
import Lightfall from "@/components/Lightfall";
import EnquiryForm from "@/components/common/EnquiryForm";

// 6 Premium Symmetrical Deliverables Data
const deliverablesData = [
    {
        id: "brand-portal",
        category: "branding",
        title: "Bespoke Brand Guideline Portal",
        desc: "A custom digital brand manual documenting visual rules, typography scales, hierarchy, color formulas (CMYK, RGB, Pantone), and voice guidelines to ensure global consistency.",
        specs: ["Formats: Vector PDF, Web Portal", "Includes: Interactive Grid Guides", "Delivery: 2-3 Weeks"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
        icon: Palette
    },
    {
        id: "identity-kit",
        category: "branding",
        title: "Visual System Design Kit",
        desc: "Complete logo ecosystem featuring responsive lockups (primary, secondary, submarks, and favicon assets) engineered for high legibility across digital screens and print materials.",
        specs: ["Formats: SVG, EPS, PNG, AI", "Includes: Dark & Light Variations", "Delivery: 1-2 Weeks"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        icon: Palette
    },
    {
        id: "figma-prototypes",
        category: "design",
        title: "High-Fidelity Figma UX Prototype",
        desc: "Frictionless, fully-linked screen-by-screen UX flows with micro-interactions, responsive grids, and design system components mapping out precise user journeys.",
        specs: ["Platform: Figma Workspace Link", "Includes: UI Kit, Style Guide", "Delivery: 3-4 Weeks"],
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
        icon: Layers
    },
    {
        id: "ui-tokens",
        category: "design",
        title: "Bespoke UI Kit & Design Tokens",
        desc: "Handcrafted UI components, color variables, layouts, and custom vector sets organized dynamically into standard dev-friendly design tokens and libraries.",
        specs: ["Formats: Figma library, CSS tokens", "Includes: Custom Interface Icons", "Delivery: 1-2 Weeks"],
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
        icon: Layers
    },
    {
        id: "nextjs-codebase",
        category: "technology",
        title: "Enterprise Next.js Web Codebase",
        desc: "Clean, componentized React application directory. Features static page pre-rendering, Tailwind/Vanilla CSS styling tokens, and modular directory structures optimized for SEO.",
        specs: ["Framework: Next.js (App Router)", "Includes: Git Repository Transfer", "Delivery: 5-8 Weeks"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        icon: Code
    },
    {
        id: "campaign-reels",
        category: "photography",
        title: "4K Cinematic Campaign Reels",
        desc: "High-impact social media reels in vertical 9:16 and horizontal 16:9 layouts. Color-graded RAW files synced with licensing-clear audio tracks, text overlays, and hooks.",
        specs: ["Resolution: 4K UHD ProRes", "Includes: Master & Social Edits", "Delivery: 2-3 Weeks"],
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
        icon: Camera
    }
];

const categories = [
    { slug: "all", name: "All Deliverables" },
    { slug: "branding", name: "Branding Assets" },
    { slug: "design", name: "Experience Design" },
    { slug: "technology", name: "Technology Assets" },
    { slug: "photography", name: "Photography & Videography" }
];

export default function DeliverablesPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredDeliverables = activeFilter === "all"
        ? deliverablesData
        : deliverablesData.filter(d => d.category === activeFilter);

    const handleEnquiryClick = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
            {/* Stunning Premium Hero with Lightfall */}
            <HeroBanner
                title="Our Deliverables"
                desc="Bespoke digital, visual, and strategic assets engineered to elevate operations, dominate markets, and drive scalable growth."
                heroComponent={
                    <div className="absolute inset-0 bg-black opacity-85">
                        <Lightfall
                            colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
                            backgroundColor="#0A29FF"
                            speed={0.5}
                            streakCount={2}
                            streakWidth={1}
                            streakLength={1}
                            glow={1}
                            density={0.6}
                            twinkle={1}
                            zoom={3}
                            backgroundGlow={0.5}
                            opacity={1}
                            mouseInteraction
                            mouseStrength={0.5}
                            mouseRadius={1}
                        />
                    </div>
                }
            />

            {/* Faint Grid Texture */}
            <div className="relative">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                        backgroundSize: "48px 48px"
                    }}
                />

                <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-8 py-20 md:py-20">
                    {/* Section Header */}
                    <div className="text-center mb-14 md:mb-14">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400"
                        >
                            <Sparkles className="w-3 h-3 text-[#D32F2F]" />
                            Catalog Index
                        </motion.span>

                        <h2 className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[5rem] font-serif leading-[1.04] tracking-tight text-white mb-4">
                            Asset <span className="italic text-gray-600">Dominance</span>
                        </h2>

                        <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                            Filter through our 6 master deliverables below to see formats, specs, and timeline expectations.
                        </p>
                    </div>

                    {/* Filter Pill Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 px-4">
                        {categories.map((cat) => {
                            const active = cat.slug === activeFilter;
                            return (
                                <button
                                    key={cat.slug}
                                    onClick={() => setActiveFilter(cat.slug)}
                                    className={`px-5 py-3 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 border hover:cursor-pointer ${active
                                        ? "bg-white text-black border-white"
                                        : "bg-white/[0.03] text-gray-400 border-white/[0.06] hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Deliverables Staggered Card Grid (Shows exactly 6 premium items) */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredDeliverables.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="h-full"
                                    >
                                        <div className="group flex flex-col h-full bg-[#0f0f0f] border border-white/[0.07] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 relative">
                                            {/* Image hero banner */}
                                            <div className="aspect-video relative overflow-hidden">
                                                <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-black/20 duration-500" />
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                />
                                                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-[#D32F2F]" />
                                                </div>
                                            </div>

                                            {/* Body info */}
                                            <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                                                <div className="space-y-3">
                                                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#D32F2F]">
                                                        {item.category.replace("-", " ")}
                                                    </span>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-[#D32F2F] transition-colors leading-tight">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                                                        {item.desc}
                                                    </p>
                                                </div>

                                                {/* Specs checklist */}
                                                <div className="space-y-2 pt-2 border-t border-white/[0.05]">
                                                    {item.specs.map((spec, i) => (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                                                            <span className="text-[11px] font-mono text-gray-300">{spec}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Action link */}
                                                <div className="pt-2">
                                                    <a
                                                        href="#enquiry-form"
                                                        onClick={handleEnquiryClick}
                                                        className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-[#D32F2F] transition-colors group/btn"
                                                    >
                                                        Enquire For Setup
                                                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {/* ── Engineering Pipeline ── */}
                    <div className="mt-20 md:mt-22">
                        {/* Header */}
                        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                            <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400">
                                <Zap className="w-3 h-3 text-[#D32F2F]" />
                                Visual Timeline
                            </span>
                            <h3 className="text-4xl md:text-[3.5rem] leading-tight font-serif text-white">
                                Our Engineering <span className="italic text-gray-500">Pipeline</span>
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mt-4 leading-relaxed font-light">
                                From concept briefing to final file transmission — a rigorous 4-stage packaging protocol.
                            </p>
                        </div>

                        {/* Timeline grid */}
                        <div className="relative">
                            {/* Connector line – desktop only */}
                            <div className="hidden md:block absolute top-[3.75rem] left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    {
                                        stage: "01",
                                        title: "Strategy & Specs",
                                        color: "#D32F2F",
                                        desc: "We map raw business goals to file formats, vector sizes, responsive framework selections, and resolution matrices.",
                                        tag: "Discovery"
                                    },
                                    {
                                        stage: "02",
                                        title: "Prototyping & Drafts",
                                        color: "#9C27B0",
                                        desc: "Production begins. Our design, media, and development teams output visual mockups, Figma frames, and raw scripts.",
                                        tag: "Creation"
                                    },
                                    {
                                        stage: "03",
                                        title: "Refinement & Code",
                                        color: "#1565C0",
                                        desc: "Assets undergo intense polish. Vectors are path-optimized, codebases get clean refactoring, and video gets graded.",
                                        tag: "Polish"
                                    },
                                    {
                                        stage: "04",
                                        title: "Fidelity & Transfer",
                                        color: "#2E7D32",
                                        desc: "Strict QA parameters are run. Workspace links are packaged, git repos are transferred, and portals are deployed.",
                                        tag: "Delivery"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group relative flex flex-col bg-[#0b0b0b] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-all duration-300"
                                    >
                                        {/* Top accent bar */}
                                        <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${item.color}99, transparent)` }} />

                                        <div className="p-10 flex flex-col gap-7 flex-1">
                                            {/* Stage circle + tag */}
                                            <div className="flex items-center justify-between">
                                                <div
                                                    className="w-14 h-14 rounded-full flex items-center justify-center text-base font-mono font-bold text-white shrink-0"
                                                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}40` }}
                                                >
                                                    {item.stage}
                                                </div>
                                                <span className="text-[9px] font-mono font-bold tracking-[.18em] uppercase px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-gray-500">
                                                    {item.tag}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h4 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-white transition-colors">
                                                {item.title}
                                            </h4>

                                            {/* Divider */}
                                            <div className="h-px w-full bg-white/[0.05]" />

                                            {/* Description */}
                                            <p className="text-gray-500 text-sm md:text-[0.9rem] leading-relaxed font-light flex-1">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Quality Standards ── */}
                    <div className="mt-20 md:mt-22">
                        {/* Header */}
                        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                            <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400">
                                <ShieldCheck className="w-3 h-3 text-[#D32F2F]" />
                                Metrics &amp; Auditing
                            </span>
                            <h3 className="text-4xl md:text-[3.5rem] leading-tight font-serif text-white">
                                Our Quality <span className="italic text-gray-500">Standards</span>
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mt-4 leading-relaxed font-light">
                                Every deliverable exits our studio only after passing a strict, measurable quality gate.
                            </p>
                        </div>

                        {/* Dashboard-style cards — 2-col on tablet, 4-col on desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Zap,
                                    label: "95+ PageSpeed",
                                    sub: "Performance Score",
                                    value: 95,
                                    unit: "/100",
                                    barColor: "#D32F2F",
                                    desc: "All Next.js assets are minified, image-optimized, and statically rendered to score 95+ out of the box."
                                },
                                {
                                    icon: Monitor,
                                    label: "4K UHD Raw",
                                    sub: "Video Resolution",
                                    value: 100,
                                    unit: "% ProRes",
                                    barColor: "#7B1FA2",
                                    desc: "Commercial videography is rendered in native 4K ProRes RAW codec, maintaining perfect color profile mapping."
                                },
                                {
                                    icon: Cpu,
                                    label: "Fully Responsive",
                                    sub: "Grid Coverage",
                                    value: 100,
                                    unit: "% Screens",
                                    barColor: "#1565C0",
                                    desc: "All design assets, interfaces, and code templates are checked across every standard device resolution."
                                },
                                {
                                    icon: ShieldCheck,
                                    label: "Security-First",
                                    sub: "API Compliance",
                                    value: 100,
                                    unit: "% Compliant",
                                    barColor: "#2E7D32",
                                    desc: "Backend APIs feature token-based auth, rate limiting, input sanitization, and full audit trail logging."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative bg-[#0b0b0b] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-all duration-300 p-10 flex flex-col gap-8"
                                >
                                    {/* Icon + metric */}
                                    <div className="flex items-start justify-between">
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: `${item.barColor}18`, border: `1px solid ${item.barColor}40` }}
                                        >
                                            <item.icon className="w-7 h-7" style={{ color: item.barColor }} />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-4xl font-bold font-mono text-white leading-none">{item.value}<span className="text-sm text-gray-500 ml-1">{item.unit}</span></div>
                                            <div className="text-[11px] font-mono text-gray-600 mt-1 tracking-wide">{item.sub}</div>
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                                        <div
                                            className="h-full rounded-full"
                                            style={{ width: `${item.value}%`, background: `linear-gradient(90deg, ${item.barColor}cc, ${item.barColor}44)` }}
                                        />
                                    </div>

                                    {/* Title + desc */}
                                    <div className="space-y-3">
                                        <h4 className="text-xl md:text-2xl font-bold text-white">{item.label}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* How We Deliver Section */}
                    <div className="mt-28 md:mt-28 bg-[#0c0c0c] border border-white/[0.06] rounded-3xl p-8 md:p-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D32F2F]" />
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#D32F2F] uppercase">
                                        Standards
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif text-white font-medium">
                                    File Delivery & Workspace Portals
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed font-light">
                                    We maintain standard organization directories, package workspaces cleanly, and provide full transfer of codebases, repositories, vector blueprints, and design portals so your team can deploy immediately.
                                </p>
                            </div>

                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: FileText, title: "Structured Hand-Off Portals", desc: "Interactive documentation portals describing colors, grid structures, fonts, and brand assets." },
                                    { icon: Code, title: "Git Repositories Transfer", desc: "Production-ready, components-oriented Next.js repositories transferred directly to your organization GitHub." },
                                    { icon: Layers, title: "Connected Figma Workspaces", desc: "Linked UX components, high-fidelity user journeys, responsive screen styles, and icons libraries." },
                                    { icon: Download, title: "Optimized File Formats", desc: "4K RAW cinema clips, lightweight WebPs, SVGs, responsive layout guidelines, and TIFF catalog sheets." }
                                ].map((item, index) => (
                                    <div key={index} className="p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl space-y-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-[#D32F2F]" />
                                        </div>
                                        <h4 className="text-base font-bold text-white">{item.title}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form for conversion */}
            <EnquiryForm />
        </main>
    );
}
