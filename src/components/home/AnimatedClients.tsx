"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";


// Client Logos
const clients = [
    { name: "Client 1", logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=200&auto=format&fit=crop" },
    { name: "Client 2", logo: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=200&auto=format&fit=crop" },
    { name: "Client 3", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop" },
    { name: "Client 4", logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=200&auto=format&fit=crop" },
    { name: "Client 5", logo: "https://images.unsplash.com/photo-1614680376593-902f74a9cb0d?q=80&w=200&auto=format&fit=crop" },
    { name: "Client 6", logo: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&auto=format&fit=crop" },
    { name: "Client 7", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop&hue=90" },
    { name: "Client 8", logo: "https://images.unsplash.com/photo-1614680376739-414fae547902?q=80&w=200&auto=format&fit=crop" },
];




// Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};


const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
};





export default function AnimatedClients() {


    const sectionRef = useRef<HTMLDivElement>(null);



    return (



        <section ref={sectionRef} className="w-full bg-white text-black py-10 px-4 md:px-12 lg:px-24 overflow-hidden relative border-t-2 border-dashed border-gray-200">


            <div className="w-full mx-auto flex flex-col items-center">


                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-black/20"></span>
                        <span className="text-sm font-semibold tracking-widest uppercase text-gray-500">Trusted By</span>
                        <span className="w-8 h-px bg-black/20"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-6">
                        Industry <span className="italic text-gray-900">leaders.</span>
                    </h2>

                    <p className="text-gray-700 max-w-2xl text-lg md:text-xl leading-relaxed">
                        We collaborate with visionary brands and enterprises to build digital experiences that define tomorrow.
                    </p>

                </motion.div>



                {/* Clients Grid - Clean Boxed Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full max-w-7xl rounded-3xl overflow-hidden border border-gray-200/80 bg-white"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200/80 border-b border-gray-200/80 nth-[n+5]:border-b-0">
                        {clients.slice(0, 4).map((client, idx) => (
                            <ClientItem key={idx} client={client} variants={itemVariants} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200/80">
                        {clients.slice(4, 8).map((client, idx) => (
                            <ClientItem key={idx + 4} client={client} variants={itemVariants} />
                        ))}
                    </div>
                </motion.div>

            </div>


        </section>
    );

}


// Helper component for clean grid rendering
function ClientItem({ client, variants }: { client: { name: string, logo: string }, variants: Variants }) {

    return (

        <motion.div
            variants={variants}
            className="group relative flex items-center justify-center h-36 md:h-48 bg-white hover:bg-gray-50/80 transition-colors duration-500 overflow-hidden"
        >

            {/* Subtle hover gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>


            {/* Crisp, full-color responsive image floating directly inside the cell */}
            <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="relative z-10 w-full h-full max-h-[80px] md:max-h-[120px] lg:max-h-[140px] max-w-[200px] md:max-w-[240px] object-contain transition-all duration-500 ease-out group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg"
            />


        </motion.div>

    );

}

