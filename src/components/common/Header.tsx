"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { DesktopServiceDropdown, MobileServiceDropdown } from "./ServiceDropdown";





export default function Header() {


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const serviceDropdownTimeout = useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    const handleMouseEnterService = () => {
        if (serviceDropdownTimeout.current) clearTimeout(serviceDropdownTimeout.current);
        setIsServiceDropdownOpen(true);
    };

    const handleMouseLeaveService = () => {
        serviceDropdownTimeout.current = setTimeout(() => {
            setIsServiceDropdownOpen(false);
        }, 150);
    };


    const isHome = pathname === "/" || pathname?.startsWith("/service");


    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);



    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobileMenuOpen(false);
    }, [pathname]);


    // Header should be transparent and white text ONLY if on Home page AND not scrolled
    const isTransparent = isHome && !isScrolled;


    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Service", href: "/service" },
        { name: "Deliverables", href: "/deliverables" },
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
    ];



    return (


        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isTransparent
                ? "bg-transparent text-white"
                : "bg-white text-black shadow-sm"
                }`}
        >


            <div className="container mx-auto px-4 lg:px-12">


                <div className="flex justify-between items-center h-16">


                    {/* Logo */}
                    <Link href="/" className="z-50 relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center"
                        >
                            <img
                                src="/LOGO-trans.png"
                                alt="Exmedia"
                                loading="lazy"
                                className="h-10 md:h-16 w-auto object-contain"
                            />
                        </motion.div>
                    </Link>


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">

                        {navLinks.map((link, index) => (

                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => link.name === "Service" && handleMouseEnterService()}
                                onMouseLeave={() => link.name === "Service" && handleMouseLeaveService()}
                                className="relative"
                            >

                                <Link
                                    href={link.href}
                                    className={`relative py-1 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 font-serif flex items-center gap-1 ${isTransparent ? "hover:text-gray-300" : "hover:text-gray-600"
                                        } ${(pathname === link.href && !isHome) || (isHome && pathname === link.href) || (link.name === "Service" && isServiceDropdownOpen)
                                            ? "opacity-100"
                                            : "opacity-80"
                                        }`}
                                >

                                    {link.name}
                                    {link.name === "Service" && (
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServiceDropdownOpen ? "rotate-180" : ""}`} />
                                    )}

                                    {pathname === link.href && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isTransparent ? 'bg-white' : 'bg-black'}`}
                                        />
                                    )}

                                </Link>

                            </motion.div>

                        ))}

                    </nav>



                    {/* Contact Button & Mobile Toggle */}
                    <div className="flex items-center space-x-4 z-50 relative">


                        <Link href="/contact" className="hidden md:block">

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide uppercase transition-all font-serif italic hover:cursor-pointer ${isTransparent
                                    ? "bg-white text-black hover:bg-gray-100 hover:shadow-lg"
                                    : "bg-black text-white hover:bg-gray-800 hover:shadow-lg"
                                    }`}
                            >
                                Let&apos;s Talk
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </motion.button>

                        </Link>



                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 -mr-2 focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >

                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}

                        </button>

                    </div>

                </div>

            </div>




            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>

                {isMobileMenuOpen && (

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white text-black border-b overflow-hidden shadow-lg absolute top-20 left-0 right-0"
                    >

                        <div className="px-4 py-6 flex flex-col space-y-4 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.05)]">

                            {navLinks.map((link, index) => (

                                <motion.div
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >

                                    <div className="flex flex-col">
                                        <div className="flex items-center justify-between border-b border-gray-100">
                                            <Link
                                                href={link.href}
                                                className="block text-lg font-medium py-3 grow"
                                                onClick={() => link.name !== "Service" && setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                            {link.name === "Service" && (
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setIsServiceDropdownOpen(!isServiceDropdownOpen);
                                                    }}
                                                    className="p-3"
                                                >
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServiceDropdownOpen ? "rotate-180" : ""}`} />
                                                </button>
                                            )}
                                        </div>
                                        {link.name === "Service" && (
                                            <MobileServiceDropdown
                                                isOpen={isServiceDropdownOpen}
                                                onItemClick={() => {
                                                    setIsServiceDropdownOpen(false);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            />
                                        )}
                                    </div>

                                </motion.div>

                            ))}


                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="pt-4"
                            >

                                <Link href="/contact">
                                    <button className="group flex items-center justify-center gap-2 w-full bg-black text-white px-6 py-3 rounded-xl text-center font-bold tracking-wide uppercase shadow-md hover:bg-gray-800 transition-all hover:cursor-pointer font-serif italic">
                                        Let&apos;s Talk
                                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </Link>

                            </motion.div>


                        </div>


                    </motion.div>


                )}


            </AnimatePresence>

            {/* Desktop Service Dropdown */}
            <div className="hidden md:block">
                <DesktopServiceDropdown
                    isOpen={isServiceDropdownOpen}
                    onMouseEnter={handleMouseEnterService}
                    onMouseLeave={handleMouseLeaveService}
                    onItemClick={() => setIsServiceDropdownOpen(false)}
                />
            </div>


        </motion.header>


    );


}