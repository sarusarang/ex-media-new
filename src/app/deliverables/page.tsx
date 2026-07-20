"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles, ArrowRight, Palette, Layers, Camera, TrendingUp,
    CheckCircle2, ShieldCheck, Zap, Monitor, Cpu, FileText, Download, Code,
    ChevronDown, ChevronUp
} from "lucide-react";
import HeroBanner from "@/components/service/common/HeroBanner";
import Lightfall from "@/components/Lightfall";
import EnquiryForm from "@/components/common/EnquiryForm";

// ─── All Deliverables Data ────────────────────────────────────────────────────
const deliverablesData = [
    // ── BRANDING ──────────────────────────────────────────────────────────────
    {
        id: "brand-strategy",
        category: "branding",
        title: "Brand Strategy & Positioning Document",
        desc: "Comprehensive strategic document defining brand vision, mission, values, positioning, target audience, competitive advantage, and long-term growth direction.",
        specs: ["Brand Vision & Mission", "Market Positioning", "Growth Direction"],
        image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "brand-identity",
        category: "branding",
        title: "Brand Identity Design System",
        desc: "A unified visual framework with logos, colors, typography, and design elements ensuring consistent brand recognition across every touchpoint.",
        specs: ["Logo & Brand Elements", "Visual Language", "Identity Framework"],
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "logo-design",
        category: "branding",
        title: "Logo Design & Brand Mark Development",
        desc: "Distinctive logos and brand marks that represent business identity, enhance recognition, communicate values, and establish a memorable market presence.",
        specs: ["Primary Logo", "Logo Variations", "Usage Concepts", "Brand Symbols"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "brand-guidelines",
        category: "branding",
        title: "Brand Guidelines / Style Guide",
        desc: "Defines visual standards, logo usage, colors, typography, and communication rules to maintain consistent brand identity across all platforms.",
        specs: ["Logo Usage Rules", "Color Standards", "Typography", "Imagery & Communication Style"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "visual-identity",
        category: "branding",
        title: "Visual Identity & Creative Assets",
        desc: "Impactful visual identity assets including colors, typography, icons, graphics, and design elements that strengthen brand consistency and recognition.",
        specs: ["Brand Colors", "Fonts & Icons", "Patterns", "Supporting Graphic Elements"],
        image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "corporate-branding",
        category: "branding",
        title: "Corporate Branding Materials",
        desc: "Professional corporate branding materials including stationery, presentations, templates, and business assets that enhance credibility and brand consistency.",
        specs: ["Business Cards", "Letterheads & Envelopes", "Presentations", "Corporate Templates"],
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "marketing-design",
        category: "branding",
        title: "Marketing & Promotional Design Assets",
        desc: "Impactful marketing assets including brochures, flyers, advertisements, and promotional creatives that enhance brand visibility and customer communication.",
        specs: ["Brochures & Flyers", "Posters", "Advertisements", "Campaign Creatives"],
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "digital-branding",
        category: "branding",
        title: "Digital Branding Package",
        desc: "Cohesive online brand assets, enhancing digital presence through visuals, templates, content styles, and platform-specific branding solutions.",
        specs: ["Website Visuals", "Social Media Templates", "Digital Banners", "Online Brand Assets"],
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "social-branding-kit",
        category: "branding",
        title: "Social Media Branding Kit",
        desc: "Consistent digital identities with templates, visuals, guidelines, and assets for impactful online brand communication across all platforms.",
        specs: ["Profile Designs", "Cover Images", "Post Templates", "Reels Style & Content Guidelines"],
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "packaging-design",
        category: "branding",
        title: "Packaging & Product Branding Design",
        desc: "Attractive packaging solutions that enhance product appeal, communicate brand value, and improve customer recognition across markets.",
        specs: ["Product Packaging", "Labels", "Retail Visuals", "Brand Presentation Systems"],
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "brand-communication",
        category: "branding",
        title: "Brand Communication Framework",
        desc: "Defines messaging, tone, storytelling, and communication strategies to ensure consistent, meaningful brand interactions across all customer touchpoints.",
        specs: ["Brand Messaging", "Taglines", "Tone Of Voice", "Customer Communication Strategy"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },
    {
        id: "brand-roadmap",
        category: "branding",
        title: "Brand Growth & Implementation Roadmap",
        desc: "Strategic direction, execution plans, marketing initiatives, and measurable steps to build sustainable brand growth and market success.",
        specs: ["Brand Launch Plan", "Marketing Direction", "Long-Term Brand Development Strategy"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        icon: Palette,
    },

    // ── EXPERIENCE DESIGN ─────────────────────────────────────────────────────
    {
        id: "journey-mapping",
        category: "experience",
        title: "Customer Journey Mapping",
        desc: "Maps every customer interaction, identifying touchpoints, behaviors, and opportunities to optimize experiences, improve satisfaction, and increase conversions.",
        specs: ["Visual Touchpoint Mapping", "Behavioral Analysis", "Experience Improvement Opportunities"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
        icon: Layers,
    },
    {
        id: "wireframing",
        category: "experience",
        title: "Wireframing & Prototyping",
        desc: "Interactive wireframes and prototypes to visualize user journeys, validate concepts, improve usability, and streamline efficient digital product development.",
        specs: ["Interactive Wireframes", "Concept Validation Prototypes"],
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
        icon: Layers,
    },
    {
        id: "design-system",
        category: "experience",
        title: "Digital Product Design System",
        desc: "Scalable digital design systems with reusable components, typography, colors, and UI standards, ensuring consistency across digital products.",
        specs: ["Reusable UI Components", "Design Standards", "Icons & Typography", "Interface Guidelines"],
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop",
        icon: Layers,
    },
    {
        id: "ecommerce-experience",
        category: "experience",
        title: "E-Commerce Experience Design",
        desc: "Conversion-focused e-commerce experiences with intuitive navigation, seamless shopping journeys, optimized checkout processes, and user-centered interfaces.",
        specs: ["User-Centric Shopping Journey", "Conversion-Focused Interface", "Optimized Checkout Experience", "Mobile-Responsive Design"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        icon: Layers,
    },
    {
        id: "interactive-brand",
        category: "experience",
        title: "Interactive Brand Experience Design",
        desc: "Immersive interactive brand experiences that engage audiences, strengthen emotional connections, enhance customer journeys, and increase lasting brand loyalty.",
        specs: ["Interactive Brand Storytelling", "Immersive User Engagement", "Cross-Platform Brand Experiences", "Customer Engagement Optimization"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
        icon: Layers,
    },
    {
        id: "landing-page",
        category: "experience",
        title: "Landing Page & Conversion Design",
        desc: "High-converting landing pages with compelling visuals, clear messaging, optimized layouts, and strategic calls-to-action that maximize conversions.",
        specs: ["High-Converting Landing Pages", "Strategic CTA Placement", "Lead Capture & Form Optimization", "A/B Testing Ready Designs"],
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
        icon: Layers,
    },
    {
        id: "content-experience",
        category: "experience",
        title: "Content Experience Design",
        desc: "Engaging content experiences through strategic layouts, visual storytelling, intuitive structure, and user-focused presentation that improve readability and engagement.",
        specs: ["User-Focused Content Layouts", "Visual Content Storytelling", "Information Architecture Optimization", "Readability & Accessibility Enhancement"],
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
        icon: Layers,
    },
    {
        id: "motion-design",
        category: "experience",
        title: "Motion & Interactive Design",
        desc: "Engaging motion and interactive designs with animations, transitions, micro-interactions, and dynamic visuals that enhance user engagement and experiences.",
        specs: ["Motion Graphics & UI Animations", "Interactive UI Elements", "Micro-Interactions & Visual Feedback", "Animated Brand & Digital Experiences"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
        icon: Layers,
    },

    // ── PHOTOGRAPHY & VIDEOGRAPHY ─────────────────────────────────────────────
    {
        id: "product-photography",
        category: "photography",
        title: "Product Photography",
        desc: "Premium product photography that highlights quality, features, and craftsmanship, enhancing brand appeal, customer confidence, and purchase decisions.",
        specs: ["High-Resolution Product Photography", "White Background Product Images", "Creative Product Showcase Photography", "E-Commerce Ready Images"],
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
        icon: Camera,
    },
    {
        id: "commercial-photography",
        category: "photography",
        title: "Commercial Brand Photography",
        desc: "Professional commercial brand photography showcasing products, people, workplaces, and brand identity to strengthen credibility and marketing impact.",
        specs: ["Corporate Brand Photography", "Team & Executive Portraits", "Workplace & Infrastructure Photography", "Brand Campaign Photography"],
        image: "https://images.unsplash.com/photo-1504608524841-42584120d290?q=80&w=800&auto=format&fit=crop",
        icon: Camera,
    },
    {
        id: "ecommerce-photography",
        category: "photography",
        title: "E-Commerce & Catalog Photography",
        desc: "High-quality e-commerce and catalog photography that enhances product presentation, improves online visibility, and increases customer purchase confidence.",
        specs: ["E-Commerce Product Photography", "Catalog & Brochure Photography", "Marketplace-Optimized Images", "High-Resolution Image Library"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
        icon: Camera,
    },
    {
        id: "lifestyle-photography",
        category: "photography",
        title: "Lifestyle & Contextual Photography",
        desc: "Lifestyle and contextual photography showcasing products in authentic environments, creating emotional connections and enhancing brand storytelling.",
        specs: ["Lifestyle Product Photography", "Contextual Brand Visuals", "Creative Concept-Based Shoots", "Social Media Lifestyle Content"],
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
        icon: Camera,
    },
    {
        id: "corporate-video",
        category: "photography",
        title: "Corporate & Industrial Videography",
        desc: "Professional corporate and industrial videos that showcase business operations, manufacturing excellence, infrastructure, and brand credibility through compelling visual storytelling.",
        specs: ["Corporate Profile Videos", "Industrial & Manufacturing Films", "Factory & Facility Showcase Videos", "Professionally Edited Brand Films"],
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
        icon: Camera,
    },
    {
        id: "product-video",
        category: "photography",
        title: "Product Promotional Videos",
        desc: "Compelling product promotional videos highlighting features, benefits, and real-world applications to increase engagement, trust, and customer conversions.",
        specs: ["Product Launch Videos", "Product Demonstration Videos", "Commercial Advertisement Videos", "E-Commerce Product Videos"],
        image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=800&auto=format&fit=crop",
        icon: Camera,
    },
    {
        id: "social-reels",
        category: "photography",
        title: "Short-Form Videos & Social Reels",
        desc: "Engaging short-form videos and social reels that maximize audience reach, increase engagement, and strengthen brand visibility across platforms.",
        specs: ["Instagram Reels Production", "YouTube Shorts & Facebook Reels", "Product Showcase Reels", "Optimized Vertical Video Assets"],
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
        icon: Camera,
    },

    // ── DIGITAL MARKETING ─────────────────────────────────────────────────────
    {
        id: "digital-strategy",
        category: "digital-marketing",
        title: "Digital Marketing Strategy & Planning",
        desc: "Data-driven digital marketing strategies that accelerate growth, engagement, visibility, and measurable business success across all channels.",
        specs: ["Comprehensive Digital Marketing Strategy", "Target Audience & Market Analysis", "Multi-Channel Campaign Planning", "Digital Growth Roadmap"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "social-media-mgmt",
        category: "digital-marketing",
        title: "Social Media Management",
        desc: "Strategic social media campaigns driving engagement, brand growth, audience loyalty, and measurable business results across platforms.",
        specs: ["Social Media Strategy & Content Plan", "Monthly Content Calendar", "Creative Posts, Reels & Stories", "Platform Performance Analytics Report"],
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "social-content",
        category: "digital-marketing",
        title: "Social Media Content Creation",
        desc: "Engaging social content that strengthens brand visibility, audience engagement, and consistent digital communication across all platforms.",
        specs: ["Monthly Content Calendar", "Creative Post & Carousel Designs", "Reels, Shorts & Motion Graphics", "Branded Visual Templates & Creatives"],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "performance-marketing",
        category: "digital-marketing",
        title: "Performance Marketing Campaigns",
        desc: "Performance-driven advertising campaigns that maximize leads, conversions, return on investment, and measurable business growth.",
        specs: ["Google Ads Campaign Management", "Meta (Facebook & Instagram) Advertising", "Lead Generation Campaigns", "Campaign Performance & ROI Reports"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "seo",
        category: "digital-marketing",
        title: "Search Engine Optimisation (SEO)",
        desc: "Improves online visibility through strategic SEO practices, increasing organic rankings, website traffic, leads, and long-term growth.",
        specs: ["Comprehensive SEO Audit Report", "Keyword Research & Strategy", "On-Page & Technical SEO Optimization", "SEO Performance & Ranking Reports"],
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "sem",
        category: "digital-marketing",
        title: "Search Engine Marketing (SEM)",
        desc: "Targeted search advertising campaigns that drive qualified traffic, increase visibility, generate leads, and maximize conversions effectively.",
        specs: ["Google Search Ads Campaign Setup", "Keyword Research & Bid Strategy", "Search Ad Copy Creation", "Campaign Analytics & ROI Reports"],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "content-marketing",
        category: "digital-marketing",
        title: "Content Marketing",
        desc: "Strategic content that attracts audiences, builds trust, strengthens brands, and drives meaningful customer engagement and organic visibility.",
        specs: ["Content Marketing Strategy", "Blog & Article Creation", "Website Content Development", "SEO-Optimized Content Assets"],
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "marketing-automation",
        category: "digital-marketing",
        title: "Marketing Automation & CRM Integration",
        desc: "Automates marketing workflows and CRM processes to nurture leads, improve engagement, and accelerate business growth at scale.",
        specs: ["CRM Setup & Integration", "Lead Nurturing Workflows", "Email & WhatsApp Automation", "Customer Journey Automation"],
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "email-whatsapp",
        category: "digital-marketing",
        title: "Email & WhatsApp Marketing",
        desc: "Targeted email and WhatsApp campaigns that enhance customer engagement, retention, communication, and conversions across touchpoints.",
        specs: ["Email Marketing Campaign Strategy", "WhatsApp Business Campaign Setup", "Customer Segmentation & Targeting", "Automated Follow-Up Campaigns"],
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "influencer",
        category: "digital-marketing",
        title: "Influencer & Online Campaign Management",
        desc: "Manages influencer partnerships and digital campaigns to expand brand reach, engagement, credibility, and online visibility at scale.",
        specs: ["Influencer Identification & Collaboration", "Campaign Strategy & Planning", "Social Media Campaign Execution", "Campaign Impact & ROI Reports"],
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "digital-analytics",
        category: "digital-marketing",
        title: "Digital Analytics & Performance Reporting",
        desc: "Transforms digital data into actionable insights through analytics, tracking performance, optimizing campaigns, and improving business outcomes.",
        specs: ["Digital Performance Dashboard", "Website & Campaign Analytics", "Conversion & ROI Tracking", "Monthly Performance Reports"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
    {
        id: "reputation-mgmt",
        category: "digital-marketing",
        title: "Online Reputation & Brand Growth Management",
        desc: "Strengthens digital reputation through monitoring, engagement strategies, and growth solutions that build trust and brand value online.",
        specs: ["Online Reputation Audit", "Brand Sentiment Monitoring", "Customer Review Management", "Digital Presence Optimization"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop",
        icon: TrendingUp,
    },
];

const categories = [
    { slug: "all", name: "All Deliverables" },
    { slug: "branding", name: "Branding" },
    { slug: "experience", name: "Experience Design" },
    { slug: "photography", name: "Photography & Video" },
    { slug: "digital-marketing", name: "Digital Marketing" },
];

export default function DeliverablesPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const INITIAL_COUNT = 6;

    // Reset to 6 cards whenever the filter changes
    useEffect(() => {
        setShowAll(false);
    }, [activeFilter]);

    const filteredDeliverables = activeFilter === "all"
        ? deliverablesData
        : deliverablesData.filter(d => d.category === activeFilter);

    const visibleDeliverables = showAll ? filteredDeliverables : filteredDeliverables.slice(0, INITIAL_COUNT);
    const hiddenCount = filteredDeliverables.length - INITIAL_COUNT;

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
                            Browse our full catalog of <span className="text-white font-semibold">{deliverablesData.length} deliverables</span> across {categories.length - 1} service categories.
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

                    {/* Deliverables Card Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
                    >
                        <AnimatePresence mode="popLayout">
                            {visibleDeliverables.map((item) => {
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

                    {/* ── View More / View Less Button ── */}
                    {filteredDeliverables.length > INITIAL_COUNT && (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex justify-center mt-12"
                        >
                            <button
                                onClick={() => setShowAll(p => !p)}
                                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-mono font-bold tracking-widest uppercase overflow-hidden cursor-pointer transition-all duration-300 border border-white/[0.12] hover:border-white/30"
                                style={{ background: "rgba(255,255,255,0.04)" }}
                            >
                                {/* Animated background fill on hover */}
                                <span className="absolute inset-0 bg-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                                {/* Glowing ring pulse */}
                                <span
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ boxShadow: "0 0 28px 4px rgba(211,47,47,0.18)" }}
                                />

                                <AnimatePresence mode="wait">
                                    {showAll ? (
                                        <motion.span
                                            key="less"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.2 }}
                                            className="relative z-10 flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                                        >
                                            <motion.span
                                                animate={{ rotate: showAll ? 180 : 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="w-8 h-8 rounded-full bg-[#D32F2F]/10 border border-[#D32F2F]/30 flex items-center justify-center flex-shrink-0"
                                            >
                                                <ChevronUp className="w-4 h-4 text-[#D32F2F]" />
                                            </motion.span>
                                            Show Less
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="more"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.2 }}
                                            className="relative z-10 flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                                        >
                                            <span className="w-8 h-8 rounded-full bg-[#D32F2F]/10 border border-[#D32F2F]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D32F2F]/20 transition-colors">
                                                <ChevronDown className="w-4 h-4 text-[#D32F2F]" />
                                            </span>
                                            View {hiddenCount} More Deliverables
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    )}

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
                                    { stage: "01", title: "Strategy & Specs", color: "#D32F2F", desc: "We map raw business goals to file formats, vector sizes, responsive framework selections, and resolution matrices.", tag: "Discovery" },
                                    { stage: "02", title: "Prototyping & Drafts", color: "#9C27B0", desc: "Production begins. Our design, media, and development teams output visual mockups, Figma frames, and raw scripts.", tag: "Creation" },
                                    { stage: "03", title: "Refinement & Code", color: "#1565C0", desc: "Assets undergo intense polish. Vectors are path-optimized, codebases get clean refactoring, and video gets graded.", tag: "Polish" },
                                    { stage: "04", title: "Fidelity & Transfer", color: "#2E7D32", desc: "Strict QA parameters are run. Workspace links are packaged, git repos are transferred, and portals are deployed.", tag: "Delivery" }
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

                        {/* Dashboard-style cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                            {[
                                { icon: Zap, label: "95+ PageSpeed", sub: "Performance Score", value: 95, unit: "/100", barColor: "#D32F2F", desc: "All Next.js assets are minified, image-optimized, and statically rendered to score 95+ out of the box." },
                                { icon: Monitor, label: "4K UHD Raw", sub: "Video Resolution", value: 100, unit: "% ProRes", barColor: "#7B1FA2", desc: "Commercial videography is rendered in native 4K ProRes RAW codec, maintaining perfect color profile mapping." },
                                { icon: Cpu, label: "Fully Responsive", sub: "Grid Coverage", value: 100, unit: "% Screens", barColor: "#1565C0", desc: "All design assets, interfaces, and code templates are checked across every standard device resolution." },
                                { icon: ShieldCheck, label: "Security-First", sub: "API Compliance", value: 100, unit: "% Compliant", barColor: "#2E7D32", desc: "Backend APIs feature token-based auth, rate limiting, input sanitization, and full audit trail logging." }
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
