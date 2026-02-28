import FloatingLines from "@/components/FloatingLines";
import Ballpit from "@/components/Ballpit";
import Threads from "@/components/Threads";
import ColorBends from "@/components/ColorBends";
import ServiceCategoryHub from "@/components/service/ServiceCategoryHub";
import { Metadata } from "next";
import SubCategory from "@/components/service/SubCategory";



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

        <main className="min-h-screen bg-black text-white selection:bg-[#D32F2F] selection:text-white">

            <SubCategory subServiceName={subServiceName} />

        </main>

    );


}
