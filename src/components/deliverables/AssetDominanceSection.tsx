"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Palette,
    Layers,
    Camera,
    TrendingUp,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { deliverableCategories, type DeliverableCategory } from "@/data/deliverables";

// ─── Icon Map ─────────────────────────────────────────────────────────────────
// Add entries here when you add new icon names to the data file.
const ICON_MAP: Record<string, React.ElementType> = {
    Palette,
    Layers,
    Camera,
    TrendingUp,
};

// ─── Single Card ──────────────────────────────────────────────────────────────
function DeliverableCard({
    item,
    accentColor,
    Icon,
    onEnquire,
}: {
    item: { title: string; description: string; keyDeliverables: string[] };
    accentColor: string;
    Icon: React.ElementType;
    onEnquire: () => void;
}) {
    const [expanded, setExpanded] = useState(false);
    const visibleItems = expanded ? item.keyDeliverables : item.keyDeliverables.slice(0, 3);
    const hasMore = item.keyDeliverables.length > 3;

    return (
        <div
            className="group flex flex-col h-full rounded-2xl border transition-all duration-300 overflow-hidden"
            style={{
                background: "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 100%)",
                borderColor: "rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = `${accentColor}33`)
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
            }
        >
            {/* Top accent stripe */}
            <div
                className="h-[3px] w-full flex-shrink-0"
                style={{
                    background: `linear-gradient(90deg, ${accentColor}cc, transparent)`,
                }}
            />

            <div className="flex flex-col flex-1 p-6 sm:p-7 gap-5">
                {/* Header */}
                <div className="flex items-start gap-4">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                            background: `${accentColor}18`,
                            border: `1px solid ${accentColor}40`,
                        }}
                    >
                        <Icon className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <h3 className="text-[0.95rem] sm:text-base font-bold text-white leading-snug group-hover:text-white/90 transition-colors">
                        {item.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {item.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-3 border-t border-white/[0.05]">
                    <span
                        className="text-[9px] font-mono tracking-[.2em] uppercase font-bold"
                        style={{ color: accentColor }}
                    >
                        Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                        {visibleItems.map((kd, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <CheckCircle2
                                    className="w-3.5 h-3.5 shrink-0 mt-[1px]"
                                    style={{ color: accentColor }}
                                />
                                <span className="text-[11px] font-mono text-gray-400">
                                    {kd}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {hasMore && (
                        <button
                            onClick={() => setExpanded((p) => !p)}
                            className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-widest uppercase mt-1 cursor-pointer transition-colors"
                            style={{ color: accentColor }}
                        >
                            {expanded ? (
                                <>
                                    Show Less <ChevronUp className="w-3 h-3" />
                                </>
                            ) : (
                                <>
                                    +{item.keyDeliverables.length - 3} More{" "}
                                    <ChevronDown className="w-3 h-3" />
                                </>
                            )}
                        </button>
                    )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* CTA */}
                <button
                    onClick={onEnquire}
                    className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors group/btn cursor-pointer pt-3 border-t border-white/[0.05]"
                >
                    Enquire For This
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}

// ─── Category Section ─────────────────────────────────────────────────────────
function CategorySection({
    category,
    onEnquire,
}: {
    category: DeliverableCategory;
    onEnquire: () => void;
}) {
    const Icon = ICON_MAP[category.icon] ?? Palette;
    const [showAll, setShowAll] = useState(false);
    const INITIAL_COUNT = 6;
    const visible = showAll ? category.items : category.items.slice(0, INITIAL_COUNT);
    const remaining = category.items.length - INITIAL_COUNT;

    return (
        <div className="space-y-8">
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                        background: `${category.accentColor}18`,
                        border: `1px solid ${category.accentColor}40`,
                    }}
                >
                    <Icon className="w-5 h-5" style={{ color: category.accentColor }} />
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {category.label}
                    </h3>
                    <p className="text-[11px] font-mono text-gray-600 mt-0.5">
                        {category.items.length} deliverable{category.items.length !== 1 ? "s" : ""}
                    </p>
                </div>
                {/* Divider line */}
                <div
                    className="hidden sm:block flex-1 h-px opacity-20"
                    style={{ background: `linear-gradient(90deg, ${category.accentColor}, transparent)` }}
                />
            </div>

            {/* Cards grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
                <AnimatePresence mode="popLayout">
                    {visible.map((item, i) => (
                        <motion.div
                            key={item.title}
                            layout
                            initial={{ opacity: 0, y: 20, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.97 }}
                            transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                            className="h-full"
                        >
                            <DeliverableCard
                                item={item}
                                accentColor={category.accentColor}
                                Icon={Icon}
                                onEnquire={onEnquire}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Show more / less */}
            {category.items.length > INITIAL_COUNT && (
                <div className="flex justify-center pt-2">
                    <button
                        onClick={() => setShowAll((p) => !p)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                        style={{
                            borderColor: `${category.accentColor}44`,
                            color: category.accentColor,
                            background: `${category.accentColor}08`,
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = `${category.accentColor}18`;
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = `${category.accentColor}08`;
                        }}
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="w-3.5 h-3.5" />
                            </>
                        ) : (
                            <>
                                +{remaining} More Deliverables <ChevronDown className="w-3.5 h-3.5" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function AssetDominanceSection() {
    const [activeFilter, setActiveFilter] = useState("all");

    const tabs = useMemo(
        () => [
            { slug: "all", label: "All Deliverables", color: "#ffffff" },
            ...deliverableCategories.map((c) => ({
                slug: c.slug,
                label: c.label,
                color: c.accentColor,
            })),
        ],
        []
    );

    const visibleCategories = useMemo(
        () =>
            activeFilter === "all"
                ? deliverableCategories
                : deliverableCategories.filter((c) => c.slug === activeFilter),
        [activeFilter]
    );

    const scrollToEnquiry = () => {
        document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
    };

    const totalCount = useMemo(
        () => deliverableCategories.reduce((acc, c) => acc + c.items.length, 0),
        []
    );

    return (
        <section className="relative">
            {/* Faint grid texture */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-10 py-20 md:py-24">
                {/* ── Section Header ── */}
                <div className="text-center mb-12 md:mb-16">
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

                    <h2 className="text-[2.4rem] sm:text-5xl lg:text-6xl xl:text-[5rem] font-serif leading-[1.04] tracking-tight text-white mb-4">
                        Asset{" "}
                        <span className="italic text-gray-600">Dominance</span>
                    </h2>

                    <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Browse our full catalog of{" "}
                        <span className="text-white font-semibold">{totalCount} deliverables</span>{" "}
                        across {deliverableCategories.length} service categories. Filter to find exactly what your brand needs.
                    </p>
                </div>

                {/* ── Filter Tabs ── */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14 px-2">
                    {tabs.map((tab) => {
                        const active = tab.slug === activeFilter;
                        return (
                            <button
                                key={tab.slug}
                                onClick={() => setActiveFilter(tab.slug)}
                                className="px-4 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-all duration-300 border cursor-pointer"
                                style={
                                    active
                                        ? {
                                            background: tab.slug === "all" ? "#ffffff" : tab.color,
                                            color: "#000000",
                                            borderColor: tab.slug === "all" ? "#ffffff" : tab.color,
                                        }
                                        : {
                                            background: "rgba(255,255,255,0.03)",
                                            color: "#9ca3af",
                                            borderColor: "rgba(255,255,255,0.06)",
                                        }
                                }
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* ── Category Sections ── */}
                <div className="space-y-16 md:space-y-20">
                    <AnimatePresence mode="wait">
                        {visibleCategories.map((cat) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                            >
                                <CategorySection
                                    category={cat}
                                    onEnquire={scrollToEnquiry}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
