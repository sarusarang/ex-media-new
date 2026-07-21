"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Send,
    CheckCircle2,
    User,
    Mail,
    Phone,
    Briefcase,
    Link as LinkIcon,
    FileText,
    Sparkles,
    ChevronDown,
    Check,
} from "lucide-react";

// Zod Validation Schema
const applicationSchema = z.object({
    name: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number is too long"),
    position: z.string().min(1, "Please select or enter a position"),
    portfolioUrl: z
        .string()
        .url("Must be a valid URL (e.g. https://...)")
        .or(z.literal(""))
        .optional(),
    resumeLink: z
        .string()
        .min(5, "Please provide a valid link to your Resume / CV (Drive, Dropbox, Notion, etc.)"),
    coverLetter: z
        .string()
        .min(20, "Please write a brief intro or why you'd like to join (min 20 characters)"),
});

export type ApplicationFormInputs = z.infer<typeof applicationSchema>;

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultPosition?: string;
    availablePositions?: string[];
    onSubmitSuccess?: (data: ApplicationFormInputs) => Promise<void> | void;
}

export default function ApplicationModal({
    isOpen,
    onClose,
    defaultPosition = "",
    availablePositions = [
        "Graphic Designer",
        "Video Editor / Cinematographer",
        "Digital Marketing Executive",
        "Social Media Strategist",
        "Client Servicing Executive",
        "General / Other Role",
    ],
    onSubmitSuccess,
}: ApplicationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<ApplicationFormInputs>({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            position: defaultPosition,
            portfolioUrl: "",
            resumeLink: "",
            coverLetter: "",
        },
    });

    const selectedPosition = watch("position");

    // Close custom dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Update position if defaultPosition changes
    useEffect(() => {
        if (defaultPosition) {
            setValue("position", defaultPosition);
        }
    }, [defaultPosition, setValue]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleFormSubmit = async (data: ApplicationFormInputs) => {
        setIsSubmitting(true);
        try {
            if (onSubmitSuccess) {
                await onSubmitSuccess(data);
            } else {
                // Simulate backend submission delay
                await new Promise((resolve) => setTimeout(resolve, 1200));
            }
            setIsSubmitted(true);
        } catch (err) {
            console.error("Submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
        reset();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    data-lenis-prevent
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/85 backdrop-blur-lg"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-4xl bg-[#0b0b0b] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-auto max-h-[88vh] flex flex-col justify-between overflow-hidden"
                    >
                        {/* Glow accent */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#D32F2F]/20 rounded-full blur-3xl pointer-events-none" />

                        {/* Fixed Header */}
                        <div className="flex items-start justify-between mb-6 pb-4 border-b border-white/10 relative z-10 shrink-0">
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D32F2F]/40 bg-[#D32F2F]/10 text-[11px] font-mono font-bold tracking-widest text-[#ff5555] uppercase mb-2">
                                    <Sparkles className="w-3 h-3" /> Join Our Studio
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                                    {isSubmitted ? "Application Received!" : "Apply for Position"}
                                </h3>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Form Content */}
                        <div
                            data-lenis-prevent
                            className="overflow-y-auto pr-1 flex-1 relative z-10 space-y-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="py-12 text-center flex flex-col items-center justify-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-[#2E7D32]/20 border border-[#2E7D32]/40 flex items-center justify-center text-[#4CAF50] mb-6">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-serif text-white font-bold mb-3">
                                        Thank You for Applying!
                                    </h4>
                                    <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
                                        We have received your details. Our recruitment team will review your portfolio and get back to you shortly.
                                    </p>
                                    <button
                                        onClick={handleReset}
                                        className="px-8 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                                    >
                                        Close Window
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                                    {/* Custom Position Dropdown */}
                                    <div ref={dropdownRef} className="relative z-30">
                                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                                            <Briefcase className="w-3.5 h-3.5 text-[#D32F2F]" /> Desired Position
                                        </label>

                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className={`w-full bg-white/[0.04] border ${
                                                errors.position
                                                    ? "border-red-500"
                                                    : isDropdownOpen
                                                    ? "border-[#D32F2F]/70 shadow-[0_0_20px_rgba(211,47,47,0.2)]"
                                                    : "border-white/10 hover:border-white/20"
                                            } rounded-xl px-4 py-3.5 text-sm text-left flex items-center justify-between text-white transition-all duration-200 cursor-pointer`}
                                        >
                                            <span className={selectedPosition ? "text-white font-medium" : "text-gray-500"}>
                                                {selectedPosition || "Select a role..."}
                                            </span>
                                            <ChevronDown
                                                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                                                    isDropdownOpen ? "rotate-180 text-[#ff5555]" : ""
                                                }`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="absolute left-0 right-0 top-full mt-2 bg-[#121212] border border-white/15 rounded-xl shadow-2xl p-1.5 backdrop-blur-2xl z-50 max-h-60 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                                                >
                                                    {availablePositions.map((pos) => {
                                                        const isSelected = selectedPosition === pos;
                                                        return (
                                                            <div
                                                                key={pos}
                                                                onClick={() => {
                                                                    setValue("position", pos, { shouldValidate: true });
                                                                    setIsDropdownOpen(false);
                                                                }}
                                                                className={`px-4 py-3 rounded-lg text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${
                                                                    isSelected
                                                                        ? "bg-[#D32F2F]/20 text-white font-semibold"
                                                                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                                                                }`}
                                                            >
                                                                <span>{pos}</span>
                                                                {isSelected && <Check className="w-4 h-4 text-[#ff5555]" />}
                                                            </div>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {errors.position && (
                                            <p className="text-red-400 text-xs mt-1 font-mono">{errors.position.message}</p>
                                        )}
                                    </div>

                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                                        <div>
                                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                                                <User className="w-3.5 h-3.5 text-[#D32F2F]" /> Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                {...register("name")}
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                            {errors.name && (
                                                <p className="text-red-400 text-xs mt-1 font-mono">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                                                <Mail className="w-3.5 h-3.5 text-[#D32F2F]" /> Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                {...register("email")}
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                            {errors.email && (
                                                <p className="text-red-400 text-xs mt-1 font-mono">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone & Portfolio Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                                        <div>
                                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                                                <Phone className="w-3.5 h-3.5 text-[#D32F2F]" /> Phone / WhatsApp *
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+91 9876543210"
                                                {...register("phone")}
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-400 text-xs mt-1 font-mono">{errors.phone.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                                                <LinkIcon className="w-3.5 h-3.5 text-[#D32F2F]" /> Portfolio / Social Link
                                            </label>
                                            <input
                                                type="url"
                                                placeholder="https://behance.net/username"
                                                {...register("portfolioUrl")}
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                            {errors.portfolioUrl && (
                                                <p className="text-red-400 text-xs mt-1 font-mono">{errors.portfolioUrl.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Resume Link */}
                                    <div className="relative z-10">
                                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5">
                                            <FileText className="w-3.5 h-3.5 text-[#D32F2F]" /> Resume / CV Drive Link *
                                        </label>
                                        <input
                                            type="url"
                                            placeholder="https://drive.google.com/file/d/..."
                                            {...register("resumeLink")}
                                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                                        />
                                        {errors.resumeLink && (
                                            <p className="text-red-400 text-xs mt-1 font-mono">{errors.resumeLink.message}</p>
                                        )}
                                        <p className="text-[11px] text-gray-500 mt-1">Provide a shareable Google Drive, Notion, or Dropbox link to your CV.</p>
                                    </div>

                                    {/* Cover Letter / Intro */}
                                    <div className="relative z-10">
                                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-300 mb-2">
                                            Why exmedia? / Brief Intro *
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us about yourself, your creative style, and why you'd like to work with exmedia..."
                                            {...register("coverLetter")}
                                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                        />
                                        {errors.coverLetter && (
                                            <p className="text-red-400 text-xs mt-1 font-mono">{errors.coverLetter.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2 relative z-10">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full inline-flex items-center justify-center gap-2 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-all cursor-pointer shadow-lg disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span className="inline-flex items-center gap-2">
                                                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                                    Submitting Application...
                                                </span>
                                            ) : (
                                                <>
                                                    Submit Application <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
