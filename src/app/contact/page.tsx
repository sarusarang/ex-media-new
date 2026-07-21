"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    Mail, Phone, MapPin, Send, CheckCircle2,
    ArrowUpRight, Sparkles, MessageSquare,
    Clock, Globe, Instagram, Youtube,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Plasma loaded client-side only (WebGL)
const Plasma = dynamic(() => import("@/components/Plasma"), { ssr: false });

/* ─────────────────── Zod Schema ─────────────────── */
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(7, "Please enter a valid phone number").optional().or(z.literal("")),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    service: z.string().min(1, "Please select a service"),
    budget: z.string().optional(),
    message: z.string().min(20, "Message must be at least 20 characters"),
});
type ContactFormInputs = z.infer<typeof contactSchema>;

/* ─────────────────── Static Data ─────────────────── */
const contactInfo = [
    {
        icon: Mail,
        label: "Email Us",
        value: "info@exmedia.in",
        href: "mailto:info@exmedia.in",
        desc: "We reply within 24 hours",
    },
    {
        icon: Phone,
        label: "Call / WhatsApp",
        value: "+91 9526123466",
        href: "tel:+919526123466",
        desc: "Mon – Sat, 9 AM – 7 PM IST",
    },
    {
        icon: MapPin,
        label: "Locations",
        value: "Kerala, India · UAE",
        href: null,
        desc: "Serving clients worldwide",
    },
];

const services = [
    "Branding & Identity",
    "Experience Design",
    "Photography & Videography",
    "Digital Marketing",
    "Social Media Management",
    "Other / General Enquiry",
];

const budgets = [
    "Under ₹50K",
    "₹50K – ₹1L",
    "₹1L – ₹5L",
    "₹5L+",
    "Let's discuss",
];

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/exmedia._/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UC4tqUCDI3l10SZMwNlR1l9w", label: "YouTube" },
    { icon: Globe, href: "https://www.exmedia.in", label: "Website" },
];

const faqs = [
    { q: "How quickly can you start on a project?", a: "We typically onboard new projects within 3–5 business days after an initial brief. Rush timelines can be arranged." },
    { q: "Do you work with international clients?", a: "Yes! We actively serve clients across the UAE, GCC, Europe, and beyond. All communication and delivery happens remotely." },
    { q: "What information should I include in my message?", a: "Share your project goals, target audience, timeline, and any references or inspiration. The more context, the better we can tailor our response." },
    { q: "Can I book a free consultation call?", a: "Absolutely. Mention it in your message and we'll set up a no-obligation 30-minute discovery call at your convenience." },
];

/* ─────────────────── Helpers ─────────────────── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}

/* ─────────────────── Page ─────────────────── */
export default function ContactPage() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { margin: "200px 0px 0px 0px" });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: "", email: "", phone: "", subject: "", service: "", budget: "", message: "" },
    });

    const onSubmit = async (data: ContactFormInputs) => {
        setSubmitting(true);
        // TODO: replace with actual backend call (e.g. fetch('/api/contact', { method:'POST', body: JSON.stringify(data) }))
        await new Promise((r) => setTimeout(r, 1400));
        console.log("Contact form data:", data);
        setSubmitting(false);
        setSubmitted(true);
    };

    /* shared input classname */
    const inputCls = (hasError: boolean) =>
        `w-full bg-white/[0.04] border ${hasError ? "border-red-500" : "border-white/10 focus:border-white/30"} rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors`;

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

            {/* ══════════════════════════════════
                §1  HERO — Plasma canvas
            ══════════════════════════════════ */}
            <section
                ref={heroRef}
                className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
            >
                {/* Plasma background */}
                <div className="absolute inset-0 z-0">
                    {heroInView && (
                        <Plasma
                            color="#D32F2F"
                            speed={0.7}
                            scale={1.2}
                            opacity={0.85}
                            mouseInteractive={true}
                            direction="forward"
                        />
                    )}
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505] z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60 z-10 pointer-events-none" />

                {/* Content */}
                <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-10 pt-36 pb-28 text-center flex flex-col items-center">

                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.05] text-[10px] font-mono font-bold tracking-[.25em] uppercase text-gray-300 mb-8 backdrop-blur-sm"
                    >
                        <MessageSquare className="w-3 h-3 text-[#D32F2F]" /> Get In Touch
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.08 }}
                        className="text-[clamp(3rem,9vw,7.5rem)] font-serif font-medium tracking-tight text-white leading-[1.04] mb-6"
                    >
                        Let&apos;s Build&nbsp;<br />
                        <em className="text-gray-400 not-italic italic">Something Great</em>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.22 }}
                        className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10"
                    >
                        Have a project in mind? We&apos;d love to hear from you. Drop us a message and our team will get back to you within 24 hours.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <a
                            href="#contact-form"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-gray-100 transition-all shadow-lg"
                        >
                            Send a Message <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <a
                            href="tel:+919526123466"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            <Phone className="w-4 h-4 text-[#D32F2F]" /> Call Us Now
                        </a>
                    </motion.div>
                </div>


            </section>


            {/* ══════════════════════════════════
                §2  CONTACT INFO CARDS
            ══════════════════════════════════ */}
            <section className="relative py-12 md:py-16 px-5 sm:px-8">
                <div className="max-w-6xl mx-auto">

                    <FadeUp className="text-center mb-14">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400 mb-4">
                            <Sparkles className="w-3 h-3 text-[#D32F2F]" /> Reach Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-white mt-3 leading-tight">
                            Multiple Ways to <em className="text-gray-500 not-italic italic">Connect</em>
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {contactInfo.map((item, idx) => {
                            const Icon = item.icon;
                            const Card = (
                                <div className="group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 p-8 flex flex-col items-start gap-5 transition-all duration-300 hover:bg-white/[0.06] h-full">
                                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D32F2F]/5 blur-3xl pointer-events-none group-hover:bg-[#D32F2F]/10 transition-all" />
                                    <div className="w-12 h-12 rounded-2xl bg-[#D32F2F]/10 border border-[#D32F2F]/20 flex items-center justify-center text-[#D32F2F] shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-gray-500 mb-1">{item.label}</p>
                                        <p className="text-white text-lg font-semibold font-serif mb-1">{item.value}</p>
                                        <p className="text-gray-500 text-sm flex items-center gap-1.5">
                                            <Clock className="w-3 h-3" /> {item.desc}
                                        </p>
                                    </div>
                                    {item.href && (
                                        <span className="mt-auto text-xs font-bold uppercase tracking-widest text-[#D32F2F] group-hover:underline">
                                            {item.icon === Mail ? "Send an email" : "Call now"}
                                        </span>
                                    )}
                                </div>
                            );
                            return (
                                <FadeUp key={item.label} delay={idx * 0.1}>
                                    {item.href ? (
                                        <a href={item.href} className="block h-full">{Card}</a>
                                    ) : (
                                        <div className="h-full">{Card}</div>
                                    )}
                                </FadeUp>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════
                §3  CONTACT FORM + SIDEBAR
            ══════════════════════════════════ */}
            <section id="contact-form" className="relative py-12 md:py-16 px-5 sm:px-8 bg-[#080808]">

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
                />

                <div className="max-w-6xl mx-auto relative z-10">

                    <FadeUp className="mb-14">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400 mb-4">
                            <Send className="w-3 h-3 text-[#D32F2F]" /> Send a Message
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-white mt-3 leading-tight max-w-xl">
                            Tell Us About <em className="text-gray-500 not-italic italic">Your Project</em>
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

                        {/* ── FORM (3 cols) ── */}
                        <FadeUp className="lg:col-span-3" delay={0.1}>
                            <div className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-10 overflow-hidden">

                                {/* glow accent */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#D32F2F]/15 rounded-full blur-3xl pointer-events-none" />

                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="py-16 flex flex-col items-center text-center gap-5"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-green-900/30 border border-green-700/40 flex items-center justify-center text-green-400">
                                                <CheckCircle2 className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-2xl font-serif font-bold text-white">Message Sent!</h3>
                                            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                                                Thanks for reaching out. Our team will review your message and get back to you within 24 hours.
                                            </p>
                                            <button
                                                onClick={() => { setSubmitted(false); reset(); }}
                                                className="mt-4 px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                                            >
                                                Send Another
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit(onSubmit)}
                                            className="space-y-6 relative z-10"
                                        >
                                            {/* Row 1: Name + Email */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name *</label>
                                                    <input
                                                        {...register("name")}
                                                        placeholder="John Doe"
                                                        className={inputCls(!!errors.name)}
                                                    />
                                                    {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name.message}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address *</label>
                                                    <input
                                                        {...register("email")}
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        className={inputCls(!!errors.email)}
                                                    />
                                                    {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email.message}</p>}
                                                </div>
                                            </div>

                                            {/* Row 2: Phone + Service */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Phone / WhatsApp</label>
                                                    <input
                                                        {...register("phone")}
                                                        type="tel"
                                                        placeholder="+91 9876 543 210"
                                                        className={inputCls(!!errors.phone)}
                                                    />
                                                    {errors.phone && <p className="text-red-400 text-xs mt-1 font-mono">{errors.phone.message}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Service Interested In *</label>
                                                    <select
                                                        {...register("service")}
                                                        className={`${inputCls(!!errors.service)} appearance-none bg-[#0d0d0d]`}
                                                    >
                                                        <option value="" className="bg-[#0d0d0d]">Select a service...</option>
                                                        {services.map((s) => (
                                                            <option key={s} value={s} className="bg-[#0d0d0d]">{s}</option>
                                                        ))}
                                                    </select>
                                                    {errors.service && <p className="text-red-400 text-xs mt-1 font-mono">{errors.service.message}</p>}
                                                </div>
                                            </div>

                                            {/* Row 3: Subject + Budget */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Subject *</label>
                                                    <input
                                                        {...register("subject")}
                                                        placeholder="e.g. Brand Identity for my startup"
                                                        className={inputCls(!!errors.subject)}
                                                    />
                                                    {errors.subject && <p className="text-red-400 text-xs mt-1 font-mono">{errors.subject.message}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Estimated Budget</label>
                                                    <select
                                                        {...register("budget")}
                                                        className={`${inputCls(false)} appearance-none bg-[#0d0d0d]`}
                                                    >
                                                        <option value="" className="bg-[#0d0d0d]">Select a range...</option>
                                                        {budgets.map((b) => (
                                                            <option key={b} value={b} className="bg-[#0d0d0d]">{b}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-2">Your Message *</label>
                                                <textarea
                                                    {...register("message")}
                                                    rows={5}
                                                    placeholder="Tell us about your project, goals, timeline, and anything else that will help us understand your needs..."
                                                    className={`${inputCls(!!errors.message)} resize-none`}
                                                />
                                                {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message.message}</p>}
                                            </div>

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-all cursor-pointer shadow-lg disabled:opacity-50"
                                            >
                                                {submitting ? (
                                                    <>
                                                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                                        Sending Message...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message <Send className="w-4 h-4" />
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-center text-xs text-gray-600">
                                                By submitting you agree to our{" "}
                                                <Link href="/privacy" className="text-gray-500 hover:text-white underline transition-colors">Privacy Policy</Link>
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeUp>

                        {/* ── SIDEBAR (2 cols) ── */}
                        <FadeUp className="lg:col-span-2 flex flex-col gap-8" delay={0.2}>

                            {/* Quick response promise */}
                            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#D32F2F]/10 border border-[#D32F2F]/20 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#D32F2F]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Quick Response</p>
                                        <p className="text-gray-500 text-xs">Always within 24 hours</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Every enquiry gets a thoughtful reply from a real team member — not a bot. We take time to understand your project before responding.
                                </p>
                            </div>

                            {/* Direct contacts */}
                            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 space-y-5">
                                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-500 mb-2">Direct Contact</p>
                                <a href="mailto:info@exmedia.in" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-[#111] border border-gray-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-600 uppercase tracking-wider font-mono mb-0.5">Email</p>
                                        <p className="text-gray-200 text-sm group-hover:text-white transition-colors">info@exmedia.in</p>
                                    </div>
                                </a>
                                <a href="tel:+919526123466" className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-[#111] border border-gray-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shrink-0">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-600 uppercase tracking-wider font-mono mb-0.5">Phone / WhatsApp</p>
                                        <p className="text-gray-200 text-sm group-hover:text-white transition-colors">+91 9526123466</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#111] border border-gray-800 flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-600 uppercase tracking-wider font-mono mb-0.5">Locations</p>
                                        <p className="text-gray-200 text-sm">Kerala, India &middot; UAE</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-500 mb-5">Follow Our Work</p>
                                <div className="flex gap-3">
                                    {socialLinks.map(({ icon: Icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="w-11 h-11 rounded-xl bg-[#111] border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════
                §4  FAQ ACCORDION
            ══════════════════════════════════ */}
            <section className="relative py-12 md:py-16 px-5 sm:px-8">
                <div className="max-w-5xl mx-auto">

                    <FadeUp className="text-center mb-14">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono font-bold tracking-[.2em] uppercase text-gray-400 mb-4">
                            <Sparkles className="w-3 h-3 text-[#D32F2F]" /> FAQs
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white mt-3 leading-tight">
                            Common <em className="text-gray-500 not-italic italic">Questions</em>
                        </h2>
                    </FadeUp>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <FadeUp key={idx} delay={idx * 0.08}>
                                <div
                                    className="rounded-2xl border border-white/10 bg-white/[0.025] overflow-hidden hover:border-white/20 transition-colors md:rounded-3xl"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                                    >
                        <span className="text-white font-semibold text-base sm:text-lg">{faq.q}</span>
                                        <motion.span
                                            animate={{ rotate: openFaq === idx ? 45 : 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-gray-400"
                                        >
                                            +
                                        </motion.span>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-7 text-gray-400 text-base leading-relaxed">{faq.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════
                §5  CTA BANNER
            ══════════════════════════════════ */}
            <section className="relative py-14 px-5 sm:px-8 bg-[#080808] border-t border-white/[0.05]">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeUp>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-white leading-tight mb-6">
                            Ready to Start Your <em className="text-gray-400 not-italic italic">Next Project?</em>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
                            From bold brand identities to high-impact campaigns — exmedia has been crafting standout creative work since 2006.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/service"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-gray-100 transition-all"
                            >
                                Explore Services <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-all"
                            >
                                Learn About Us
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>

        </main>
    );
}