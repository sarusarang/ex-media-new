"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    ArrowRight, ArrowUpRight,
    Users, Award, TrendingUp,
    Shield, Zap, Heart, CheckCircle2,
    Star, Film, Code2, Palette, Lightbulb, Target,
    HelpCircle, Camera, ChevronDown, X
} from "lucide-react";
import Link from "next/link";
import LightRays from "@/components/LightRays";




/* ─── Data ───────────────────────────────────────────────────────────── */
const team = [
    {
        name: "Marcus Elwood", role: "CEO & Founder",
        bio: "15+ years building digital agencies across London, Dubai, and Singapore. Marcus architects growth systems for enterprise brands.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
        accent: "#D32F2F",
    },
    {
        name: "Priya Nair", role: "Chief Operating Officer",
        bio: "Ex-McKinsey strategist ensuring every deliverable ships on-spec, on-time, and on-budget — every single time.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        accent: "#7B1FA2",
    },
    {
        name: "Darian Cole", role: "Creative Director",
        bio: "Award-winning designer featured in Awwwards, FWA, Cannes Lions. Leads every visual identity and UX system.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        accent: "#1565C0",
    },
    {
        name: "Sofia Marchetti", role: "Head of Technology",
        bio: "Full-stack architect specialising in Next.js, edge computing, and performance engineering at scale.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        accent: "#2E7D32",
    },
];



const values = [
    { icon: Target, color: "#D32F2F", num: "01", title: "Creativity with Purpose", desc: "Every creative asset is built to perform, not just to impress." },
    { icon: Lightbulb, color: "#7B1FA2", num: "02", title: "AI-Driven Innovation", desc: "We integrate the latest AI tools into our creative process to keep every campaign current and ahead of trends." },
    { icon: Shield, color: "#1565C0", num: "03", title: "Strategic Execution", desc: "Advanced marketing strategies designed around each client's goals and audience." },
    { icon: Heart, color: "#2E7D32", num: "04", title: "Full-Service Management", desc: "We manage your online media and promotions, so your brand stays active, visible, and consistent." },
];



const stats = [
    { endVal: 2400, suffix: "+", label: "Projects Delivered", icon: CheckCircle2 },
    { endVal: 98, suffix: "%", label: "Client Retention", icon: Star },
    { endVal: 20, suffix: "", label: "Years of Excellence", icon: Award },
];



const capabilities = [
    { icon: Palette, label: "Branding & Advertisement" },
    { icon: Code2, label: "AI-Powered Creatives" },
    { icon: Film, label: "Marketing Strategy" },
    { icon: Zap, label: "Online Media Management" },
];



const faqs = [
    { q: "What is your project turnaround time?", a: "Turnaround times vary by scope. Small deliverables and branding packages typically complete in 2-3 weeks, while enterprise Next.js codebases or custom video productions take between 6-8 weeks." },
    { q: "Do you offer full codebase ownership?", a: "Yes. Once final files are transmitted and repository access is complete, you own 100% of the code, digital assets, and designs. There are no ongoing licensing or platform lock-in fees." },
    { q: "How do you handle post-launch support?", a: "We provide dedicated post-launch support for 30 days to check responsiveness and performance metrics. Additional maintenance retainers can be arranged for ongoing platform scaling." },
    { q: "What is your design & development process?", a: "We follow a 4-stage pipeline: Strategy & Specs, Prototyping & Drafts, Refinement & Code, and QA & File Transfer. You will receive active updates via shared Figma links and dev channels." }
];



const galleryItems = [
    { title: "Design Studio", category: "UX/UI Research", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop" },
    { title: "Production House", category: "4K Color Grading", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop" },
    { title: "Collaboration Lab", category: "Asset Packaging", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop" },
    { title: "Branding Deck", category: "Identity Systems", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" },
    { title: "Visual Laboratory", category: "VFX & Assets", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" },
    { title: "Deploy Center", category: "Next.js & Performance", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" }
];





/* ─── Helpers ─────────────────────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }: {
    children: React.ReactNode; delay?: number; className?: string;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}






function CountUp({ end, duration = 1500, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [inView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}





/* ─── Page ────────────────────────────────────────────────────────────── */
export default function AboutPage() {


    const heroRef = useRef(null);
    const heroView = useInView(heroRef, { margin: "200px 0px 200px 0px" });
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[number] | null>(null);


    return (


        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">


            {/* ══════════════════════════════════
                §1  HERO — transparent, full-bleed LightRays (EXCLUDED from redesign)
            ══════════════════════════════════ */}
            <section
                ref={heroRef}
                className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
            >
                {/* Canvas */}
                <div className="absolute inset-0 z-0">
                    {heroView && (
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#ff5555"
                            raysSpeed={0.45}
                            lightSpread={1.7}
                            rayLength={2.6}
                            pulsating
                            fadeDistance={1.5}
                            saturation={0.55}
                            followMouse
                            mouseInfluence={0.13}
                            noiseAmount={0.03}
                            distortion={0.05}
                            className="w-full h-full"
                        />
                    )}
                </div>

                {/* Only a soft bottom vignette — keep rays visible */}
                <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 pointer-events-none" />

                {/* Content */}
                <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-10 pt-36 pb-28 text-center flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.05] text-[10px] font-mono font-bold tracking-[.25em] uppercase text-gray-300 mb-8 backdrop-blur-sm"
                    >
                        <Users className="w-3 h-3 text-[#D32F2F]" /> Who We Are
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08 }}
                        className="text-[clamp(3rem,9vw,7.5rem)] font-serif font-medium tracking-tight text-white leading-[1.04] mb-6"
                    >
                        We Build Brands <br />
                        <em className="text-gray-400 not-italic italic">That Endure</em>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.22 }}
                        className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10"
                    >
                        A full-service branding and advertisement studio — delivering creative, strategy, and technology together to help ambitious businesses grow
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.36 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link href="/contact">
                            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm tracking-wider uppercase rounded-2xl hover:bg-gray-100 transition-all cursor-pointer shadow-xl">
                                Work With Us <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </Link>
                        <Link href="/deliverables">
                            <button className="group inline-flex items-center gap-2 px-8 py-4 border border-white/[0.2] bg-white/[0.05] text-white font-bold text-sm tracking-wider uppercase rounded-2xl hover:bg-white/[0.1] transition-all cursor-pointer backdrop-blur-sm">
                                Our Deliverables <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>




            {/* ══════════════════════════════════
                §2  OUR STORY & VISION — Warm Cream BG (BIGGER WIDTH)
            ══════════════════════════════════ */}
            <section className="bg-[#FAF9F6] text-black py-14 md:py-16 border-b border-black/[0.05]">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.04] border border-black/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-600">
                                <TrendingUp className="w-3.5 h-3.5 text-[#D32F2F]" /> Origin / Section 01
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-black leading-[1.08] tracking-tight">
                               Crafting brands with  <br />
                                <span className="italic text-gray-500">precision since 2006</span>
                            </h2>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                                Exmedia was established in 2006 to bridge the gap between creative artistry and advertising strategy. We believe branding shouldn't just look compelling — it must perform.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                                As a dedicated team of creative and strategic specialists, we deliver the latest AI-integrated creatives, execute advanced marketing strategies tailored to each client, and manage our clients' online media and promotion programs end-to-end — ensuring every brand we touch stays current, consistent, and competitive.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-3">
                                {capabilities.map((c, i) => (
                                    <span key={i} className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/[0.03] border border-black/[0.07] rounded-xl text-xs font-mono text-gray-700 font-medium">
                                        <c.icon className="w-4 h-4 text-[#D32F2F]" /> {c.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5 w-full">
                            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] w-full">
                                <div className="absolute top-0 right-0 w-[85%] h-[82%] rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Collaboration" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-[58%] h-[58%] rounded-3xl overflow-hidden shadow-2xl border border-white/50">
                                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-[45%] left-[25%] bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-2xl hidden sm:block">
                                    <p className="text-2xl font-bold font-mono text-black leading-none">Est. 2016</p>
                                    <p className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mt-1">Studio / London</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* ══════════════════════════════════
                §3  METRICS & PROOF — Sleek Dark BG (LARGER METRICS & COUNT-UP ANIMATION)
            ══════════════════════════════════ */}
            <section className="bg-[#0B0B0B] py-12 md:py-14 border-b border-white/[0.05]">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {stats.map((s, i) => (
                            <FadeUp key={i} delay={i * 0.08} className="flex flex-col items-center text-center gap-2 p-10 bg-white/[0.02] border border-white/[0.04] rounded-3xl hover:border-white/[0.08] transition-colors w-full">
                                <s.icon className="w-5 h-5 text-[#D32F2F] mb-1" />
                                <p className="text-5xl md:text-7xl font-serif font-semibold text-white tracking-tight leading-none">
                                    <CountUp end={s.endVal} suffix={s.suffix} />
                                </p>
                                <p className="text-[11px] font-mono text-gray-500 tracking-widest uppercase font-medium mt-2">{s.label}</p>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>




            {/* ══════════════════════════════════
                §4  LEADERSHIP — Soft Light Grey BG (WHITE & NICE CARDS, NO GLOW)
            ══════════════════════════════════ */}
            {/* <section className="bg-[#F5F5F7] text-black py-14 md:py-16 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.04] border border-black/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-500 mb-4">
                            <Users className="w-3.5 h-3.5 text-[#D32F2F]" /> Team / Section 03
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black leading-tight tracking-tight">
                            The Minds Behind <span className="italic text-gray-400">Our Studio</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mt-4 font-light leading-relaxed">
                            Bespoke digital assets require senior expertise. Meet the partners directing your projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {team.map((m, i) => (
                            <FadeUp key={i} delay={i * 0.08} className="h-full">
                                <div className="group flex flex-col bg-white border border-gray-200/80 rounded-3xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 h-full p-4">
                                    <div className="relative h-80 overflow-hidden bg-gray-100 rounded-2xl">
                                        <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                        <span className="absolute bottom-5 left-5 text-[10px] font-mono font-bold tracking-[.18em] uppercase px-4 py-2 rounded-full bg-white/95 text-gray-800 border border-gray-200 shadow-sm z-20 font-semibold">
                                            {m.role}
                                        </span>
                                    </div>
                                    <div className="pt-6 flex flex-col gap-3 flex-1">
                                        <h3 className="text-xl font-bold text-black leading-none">{m.name}</h3>
                                        <div className="h-[1px] bg-gray-100 w-full my-1" />
                                        <p className="text-gray-500 text-sm leading-relaxed font-light flex-1">{m.bio}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section> */}




            {/* ══════════════════════════════════
                §5  STUDIO & PROCESS GALLERY — Asymmetric 1-big + 5-small with Lightbox
            ══════════════════════════════════ */}
            <section className="bg-[#FAF9F6] text-black py-14 md:py-16 border-b border-black/[0.05]">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.04] border border-black/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-500 mb-4">
                            <Camera className="w-3.5 h-3.5 text-[#D32F2F]" /> Space / Section 04
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black leading-tight tracking-tight">
                            Inside the <span className="italic text-gray-400">EX Media Labs</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mt-4 font-light leading-relaxed">
                            A quick glimpse into where our design systems are constructed and high-fidelity video graded.
                        </p>
                    </div>

                    {/* === Asymmetric Gallery Grid === */}
                    <div className="flex flex-col gap-4">
                        {/* Row 1: big left + 2 small right */}
                        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">
                            {/* Big featured item */}
                            <FadeUp delay={0}>
                                <GalleryCard item={galleryItems[0]} onOpen={setSelectedItem} tall />
                            </FadeUp>
                            {/* Two small stacked */}
                            <div className="grid grid-rows-2 gap-4">
                                <FadeUp delay={0.1}>
                                    <GalleryCard item={galleryItems[1]} onOpen={setSelectedItem} />
                                </FadeUp>
                                <FadeUp delay={0.18}>
                                    <GalleryCard item={galleryItems[2]} onOpen={setSelectedItem} />
                                </FadeUp>
                            </div>
                            {/* One tall right */}
                            <FadeUp delay={0.14}>
                                <GalleryCard item={galleryItems[3]} onOpen={setSelectedItem} tall />
                            </FadeUp>
                        </div>
                        {/* Row 2: 2 wide side by side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FadeUp delay={0.2}>
                                <GalleryCard item={galleryItems[4]} onOpen={setSelectedItem} />
                            </FadeUp>
                            <FadeUp delay={0.26}>
                                <GalleryCard item={galleryItems[5]} onOpen={setSelectedItem} />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>




            {/* ══════════════════════════════════
                LIGHTBOX MODAL
            ══════════════════════════════════ */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        key="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setSelectedItem(null)}
                    >
                        {/* Blurred dark backdrop */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                        {/* Modal card */}
                        <motion.div
                            key="lightbox-card"
                            initial={{ opacity: 0, scale: 0.88, y: 32 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 24 }}
                            transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
                            className="relative z-10 w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl bg-[#0D0D0D] border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-video overflow-hidden">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                            </div>
                            {/* Info bar */}
                            <div className="p-6 flex justify-between items-center gap-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-mono text-[#D32F2F] tracking-widest uppercase font-bold">{selectedItem.category}</p>
                                    <h3 className="text-2xl font-serif text-white">{selectedItem.title}</h3>
                                </div>
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-white hover:text-black transition-all duration-200 shrink-0"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>





            {/* ══════════════════════════════════
                §6  VALUES — Editorial Dark BG (BIGGER CARDS)
            ══════════════════════════════════ */}
            <section className="bg-[#050505] text-white py-14 md:py-16 border-b border-white/[0.05]">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400">
                                <Heart className="w-3.5 h-3.5 text-[#D32F2F]" /> Pillars / Section 05
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight tracking-tight">
                                Core principles we<br />
                                <span className="italic text-gray-500">refuse to compromise.</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light text-justify">
                                From branding and advertisement to AI-powered creatives and full online media management — we help businesses stay relevant, visible, and ahead of the curve. Let's build something extraordinary together.
                            </p>
                        </div>

                        <div className="lg:col-span-7 flex flex-col gap-6">
                            {values.map((v, i) => (
                                <FadeUp key={i} delay={i * 0.08}>
                                    <div className="group flex gap-6 items-start p-8 bg-[#0E0E0E] border border-white/[0.06] rounded-3xl hover:border-white/[0.12] hover:bg-white/[0.01] transition-all duration-300">
                                        <div className="text-xs font-mono font-bold text-gray-600 mt-1 shrink-0">{v.num}</div>
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${v.color}12`, border: `1.5px solid ${v.color}25` }}>
                                            <v.icon className="w-5.5 h-5.5" style={{ color: v.color }} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{v.desc}</p>
                                        </div>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </div>

                </div>

            </section>




            {/* ══════════════════════════════════
                §7  FREQUENTLY ASKED QUESTIONS — Dark Charcoal BG (NEW SECTION)
            ══════════════════════════════════ */}
            <section className="bg-[#0C0C0C] text-white py-14 md:py-16 border-b border-white/[0.05]">

                <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        <div className="lg:col-span-5 space-y-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400">
                                <HelpCircle className="w-3.5 h-3.5 text-[#D32F2F]" /> FAQ / Section 06
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight tracking-tight">
                                Answers to <span className="italic text-gray-400">Key Questions</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                                Find answers to common questions about our pipeline, file delivery, code transfers, and post-launch support.
                            </p>
                        </div>

                        <div className="lg:col-span-7 space-y-4">
                            {faqs.map((faq, idx) => {
                                const isOpen = openFaq === idx;
                                return (
                                    <FadeUp key={idx} delay={idx * 0.05}>
                                        <div
                                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                                            className="cursor-pointer p-6 sm:p-8 rounded-3xl bg-[#0E0E0E] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center gap-4">
                                                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{faq.q}</h3>
                                                <div className={`p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light border-t border-white/[0.05] pt-4">
                                                            {faq.a}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </FadeUp>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}

/* ─── Gallery Card sub-component ──────────────────────────────────────── */
function GalleryCard({
    item, onOpen, tall = false
}: {
    item: { title: string; category: string; image: string };
    onOpen: (item: { title: string; category: string; image: string }) => void;
    tall?: boolean;
}) {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl cursor-pointer w-full ${tall ? "h-[520px] sm:h-[600px] md:h-[640px]" : "h-[300px] sm:h-[340px]"
                } shadow-sm border border-black/5`}
            onClick={() => onOpen(item)}
        >
            <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            {/* Category badge top-right */}
            <span className="absolute top-4 right-4 z-20 text-[9px] font-mono font-bold tracking-widest uppercase text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                {item.category}
            </span>
            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20 flex justify-between items-end">
                <div className="space-y-0.5">
                    <p className="text-[9px] font-mono text-[#D32F2F] tracking-widest uppercase font-bold">Studio</p>
                    <h3 className="text-lg sm:text-xl font-serif text-white leading-tight">{item.title}</h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}