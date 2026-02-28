import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";





// Interactive Service Categories Sub-component
export default function ServiceCategories() {



    return (


        <section className="py-10 md:py-16 bg-white text-black relative overflow-hidden">


            <div className="container mx-auto px-4 md:px-12">


                {/* Section Intro */}
                <div className="mb-10 md:mb-16 flex flex-col items-center text-center">


                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full backdrop-blur-md bg-black/5 border border-black/10"
                    >
                        <Sparkles className="w-4 h-4 text-[#D32F2F]" />
                        <span className="text-sm font-bold tracking-widest uppercase text-black">Disciplines</span>
                    </motion.div>


                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8"
                    >
                        Our Service <span className="text-gray-900 italic">Ecosystem</span>
                    </motion.h2>


                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl"
                    >
                        Hover over our core disciplines to explore the specific capabilities and solutions we deploy for our partners.
                    </motion.p>


                </div>



                {/* Categories Layout */}
                <div className="flex flex-col">


                    {/* Experience Design Category */}
                    <CategoryRow
                        title="Experience Design"
                        video="https://admin.wac.co/uploads/expirence_10_1d7ae97828.mp4"
                        items={["UI/UX Design", "Website Design", "Mobile Experience", "Commerce Experience", "Human Machine Interface", "Applications and Dashboards"]}
                        link="/service/experience-design"
                    />


                    <SectionSeparator />


                    {/* Branding Category */}
                    <CategoryRow
                        title="Branding & Identity"
                        video="https://admin.wac.co/uploads/expirence_10_1d7ae97828.mp4"
                        items={["Brand Strategy", "Visual Identity", "Naming & Messaging", "Brand Guidelines", "Corporate Rebranding", "Packaging Design"]}
                        link="/service/branding"
                        reverse={true}
                    />


                    <SectionSeparator />


                    {/* Technology Category */}
                    <CategoryRow
                        title="Advanced Technology"
                        video="https://admin.wac.co/uploads/expirence_10_1d7ae97828.mp4"
                        items={["Custom Software Development", "AI & Machine Learning", "Cloud Architecture", "E-Commerce Platforms", "API Integrations", "DevOps & Maintenance"]}
                        link="/service/technology"
                    />


                </div>

            </div>

        </section>

    );

}




// Modern Geometric Separator
function SectionSeparator() {
    return (
        <div className="w-full flex items-center justify-center py-10 md:py-24 relative">
            <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="absolute w-4 h-4 rotate-45 border border-gray-300 bg-white shadow-xs"></div>
        </div>
    );
}




// Reusable Row Component for Categories
function CategoryRow({ title, video, items, link, reverse = false }: { title: string, video: string, items: string[], link: string, reverse?: boolean }) {


    return (


        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 relative group/row`}>


            {/* Left Content: Title & List */}
            <div className="w-full lg:w-1/2">

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-serif mb-5"
                >
                    {title}
                </motion.h3>


                <div className="flex flex-col w-full">

                    {items.map((item, idx) => (

                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="group/item border-b border-gray-200 py-6 pr-6 relative overflow-hidden flex items-center justify-between cursor-pointer"
                        >

                            {/* Hover accent background slide */}
                            <div className="absolute inset-0 bg-gray-50 -translate-x-full group-hover/item:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

                            <span className="text-xl md:text-2xl font-medium relative z-10 group-hover/item:text-[#D32F2F] transition-colors duration-300">
                                {item}
                            </span>

                            <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover/item:text-[#D32F2F] group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all duration-300 relative z-10" />

                        </motion.div>

                    ))}

                </div>


                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-10"
                >
                    <Link href={link} className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black hover:text-[#D32F2F] transition-colors group/link pb-2 border-b-2 border-black hover:border-[#D32F2F]">
                        Explore Full Service
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </Link>
                </motion.div>


            </div>



            {/* Right Content: Stunning Video Presenter */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                className="w-full lg:w-1/2 md:aspect-4/4 lg:aspect-4/4 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden"
            >


                {/* Dynamic Video */}
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover/row:scale-105 transition-transform duration-1000 ease-in-out"
                />

            </motion.div>


        </div>

    );

}