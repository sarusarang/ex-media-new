import FloatingLines from "@/components/FloatingLines";
import Ballpit from "@/components/Ballpit";
import Threads from "@/components/Threads";
import ColorBends from "@/components/ColorBends";
import ServiceCategoryHub from "@/components/service/ServiceCategoryHub";
import { Metadata } from "next";



// Dummy Data
const categoriesData: any = {


    "branding": {
        title: "Branding",
        desc: "We craft iconic, enduring brand identities that resonate deeply and stand the test of time.",
        heroComponent: <div className="absolute inset-0 bg-black opacity-80"><ColorBends /></div>,
        subServices: [
            { name: "Brand Consulting", slug: "brand-consulting" },
            { name: "Logo Design", slug: "logo-design" },
            { name: "Industrial / Product Design", slug: "product-design" },
        ]
    },


    "technology": {
        title: "Technology",
        desc: "Engineering robust, scalable software solutions built on the bleeding edge of modern tech.",
        heroComponent: <div className="absolute inset-0 bg-black opacity-80"><FloatingLines /></div>,
        subServices: [
            { name: "AI & Machine Learning", slug: "ai-ml" },
            { name: "Web Development", slug: "web-development" },
            { name: "Mobile App Development", slug: "mobile-app" },
        ]
    },


    "experience-design": {
        title: "Experience Design",
        desc: "Creating pixel-perfect, frictionless digital experiences that delight users across every touchpoint.",
        heroComponent: <div className="absolute inset-0 bg-black opacity-80"><Ballpit count={150} gravity={0.01} friction={0.9975} wallBounce={0.95} followCursor={false} colors={["#FF4D6D", "#8338EC", "#3A86FF"]} lightIntensity={200} ambientIntensity={1} /></div>,
        subServices: [
            { name: "UI/UX Design", slug: "ui-ux-design" },
            { name: "Website Design", slug: "website-design" },
            { name: "Mobile Experience", slug: "mobile-experience" },
        ]
    },


    "digital-marketing": {
        title: "Digital Marketing",
        desc: "Data-driven, high-performance campaigns engineered to maximize reach and drive conversions.",
        heroComponent: <div className="absolute inset-0 z-0 bg-black"><Threads /></div>,
        subServices: [
            { name: "Performance Marketing", slug: "performance-marketing" },
            { name: "Search Engine Optimisation", slug: "seo" },
            { name: "Social Media Management", slug: "social-media" },
        ]
    }

};



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    return { title: `Exmedia | ${slug.replace("-", " ").toUpperCase()}` };
}



export default async function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {


    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const category = categoriesData[slug];



    // IF CATEGORY: Render the stunning highly-animated Category Hub
    if (category) {
        return <ServiceCategoryHub category={{ ...category, slug }} />;
    }



    // IF SUB-SERVICE: Render a clean, reading-focused layout without heavy animations
    const subServiceName = slug.replace("-", " ");




    return (


        <main className="min-h-screen bg-white text-black pt-32 pb-24">


            <div className="container mx-auto px-4 md:px-12 max-w-6xl">


                {/* Clean Header */}
                <div className="mb-16 md:mb-24">

                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 block">Service Details</span>

                    <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-8 capitalize">{subServiceName}</h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                        We deliver world-class {subServiceName} tailored precisely to elevate your brand&apos;s digital presence and drive measurable outcomes.
                    </p>

                </div>


                {/* Stunning Image Feature */}
                <div className="w-full aspect-21/9 rounded-3xl overflow-hidden mb-24 relative shadow-2xl">
                    <img
                        src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop`}
                        className="w-full h-full object-cover"
                        alt={subServiceName}
                    />
                </div>


                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">


                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold mb-6">Our Approach</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our methodology is rooted in deep research, strategic planning, and flawless execution. We utilize the latest tools and frameworks to ensure superior results.
                        </p>
                    </div>


                    <div className="md:col-span-2">

                        <h3 className="text-2xl font-serif font-bold mb-6">What You Get</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-600">

                            <div>
                                <h4 className="font-bold text-black mb-2 flex items-center gap-2">01. Strategy</h4>
                                <p className="text-sm">End-to-end strategic planning aligned with your core KPIs.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-black mb-2 flex items-center gap-2">02. Design</h4>
                                <p className="text-sm">Bespoke, human-centric design leveraging modern principles.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-black mb-2 flex items-center gap-2">03. Engineering</h4>
                                <p className="text-sm">Scalable, secure, and performant technical implementation.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-black mb-2 flex items-center gap-2">04. Optimization</h4>
                                <p className="text-sm">Continuous testing and iterative improvements for ROI.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>

    );



}
