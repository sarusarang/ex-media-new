"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JobPosition } from "@/types/careers";
import { initialJobs } from "@/data/jobsData";
import {
    Briefcase,
    MapPin,
    Clock,
    ChevronDown,
    ChevronUp,
    ArrowUpRight,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

interface JobListProps {
    jobs?: JobPosition[];
    onApply: (jobTitle: string) => void;
}

export default function JobList({ jobs = initialJobs, onApply }: JobListProps) {
    const [selectedDept, setSelectedDept] = useState<string>("All");
    const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

    // Filter departments
    const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];

    const filteredJobs =
        selectedDept === "All" ? jobs : jobs.filter((j) => j.department === selectedDept);

    const toggleExpand = (id: string) => {
        setExpandedJobId(expandedJobId === id ? null : id);
    };

    return (
        <div className="w-full">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                {departments.map((dept) => {
                    const isActive = selectedDept === dept;
                    return (
                        <button
                            key={dept}
                            onClick={() => setSelectedDept(dept)}
                            className={`px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                                isActive
                                    ? "bg-white text-black border-white shadow-lg scale-105"
                                    : "bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                            }`}
                        >
                            {dept} {dept !== "All" && `(${jobs.filter((j) => j.department === dept).length})`}
                        </button>
                    );
                })}
            </div>

            {/* Jobs Cards Container */}
            <div className="space-y-4 max-w-4xl mx-auto">
                <AnimatePresence mode="popLayout">
                    {filteredJobs.map((job) => {
                        const isExpanded = expandedJobId === job.id;
                        return (
                            <motion.div
                                key={job.id}
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                className={`group bg-[#0b0b0b] border transition-all duration-300 rounded-3xl overflow-hidden ${
                                    isExpanded
                                        ? "border-white/30 shadow-2xl bg-[#0e0e0e]"
                                        : "border-white/10 hover:border-white/20 hover:bg-[#0e0e0e]/80"
                                }`}
                            >
                                {/* Header / Card Summary */}
                                <div
                                    onClick={() => toggleExpand(job.id)}
                                    className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                                >
                                    <div className="space-y-3 flex-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-300">
                                                {job.department}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                                                <Clock className="w-3.5 h-3.5 text-[#D32F2F]" />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                                                <MapPin className="w-3.5 h-3.5 text-[#D32F2F]" />
                                                {job.location}
                                            </span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#ff5555] transition-colors">
                                            {job.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                                            {job.description}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onApply(job.title);
                                            }}
                                            className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-md hover:scale-105"
                                        >
                                            Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleExpand(job.id);
                                            }}
                                            aria-label="Expand Details"
                                            className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            {isExpanded ? (
                                                <ChevronUp className="w-5 h-5" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-white/10 bg-black/40 px-6 sm:px-8 py-6 sm:py-8 space-y-6"
                                        >
                                            {/* Responsibilities */}
                                            <div>
                                                <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <Sparkles className="w-4 h-4 text-[#D32F2F]" /> Key Responsibilities
                                                </h4>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                    {job.responsibilities.map((resp, idx) => (
                                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
                                                            <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Requirements */}
                                            <div>
                                                <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-[#D32F2F]" /> Qualifications &amp; Skills
                                                </h4>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                    {job.requirements.map((req, idx) => (
                                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
                                                            <CheckCircle2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                                                            <span>{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Benefits */}
                                            {job.benefits && (
                                                <div>
                                                    <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest mb-2">
                                                        Perks &amp; Benefits
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {job.benefits.map((b, i) => (
                                                            <span key={i} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-gray-300">
                                                                {b}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Bottom Apply CTA */}
                                            <div className="pt-2 flex justify-end">
                                                <button
                                                    onClick={() => onApply(job.title)}
                                                    className="px-8 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-all cursor-pointer inline-flex items-center gap-2 shadow-lg"
                                                >
                                                    Apply for {job.title} <ArrowUpRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
