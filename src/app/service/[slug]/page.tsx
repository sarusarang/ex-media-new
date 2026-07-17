import FloatingLines from "@/components/FloatingLines";
import Ballpit from "@/components/Ballpit";
import Threads from "@/components/Threads";
import ColorBends from "@/components/ColorBends";
import SideRays from "@/components/SideRays";
import SoftAurora from "@/components/SoftAurora";
import ServiceCategoryHub from "@/components/service/ServiceCategoryHub";
import { Metadata } from "next";
import { servicesData, subToParentMap } from "@/lib/servicesData";
import { redirect } from "next/navigation";

// Hero visual components mapping
const heroComponents: Record<string, React.ReactNode> = {
    "branding": (
        <div className="absolute inset-0 bg-black opacity-80">
            <ColorBends />
        </div>
    ),
    "technology": (
        <div className="absolute inset-0 bg-black opacity-80">
            <FloatingLines />
        </div>
    ),
    "experience-design": (
        <div className="absolute inset-0 bg-black opacity-80">
            <Ballpit
                count={150}
                gravity={0.01}
                friction={0.9975}
                wallBounce={0.95}
                followCursor={false}
                colors={["#FF4D6D", "#8338EC", "#3A86FF"]}
                lightIntensity={200}
                ambientIntensity={1}
            />
        </div>
    ),
    "digital-marketing": (
        <div className="absolute inset-0 z-0 bg-black">
            <Threads />
        </div>
    ),
    "content-production": (
        <div className="absolute inset-0 z-0 bg-black">
            <SoftAurora
                speed={0.8}
                scale={1.5}
                brightness={1}
                color1="#f7f7f7"
                color2="#e100ff"
                noiseFrequency={2.5}
                noiseAmplitude={1}
                bandHeight={0.5}
                bandSpread={1}
                octaveDecay={0.1}
                layerOffset={0}
                colorSpeed={1.5}
            />
        </div>
    )
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const category = servicesData[slug];
    if (category) {
        return { title: `Exmedia | ${category.title}` };
    }

    const subInfo = subToParentMap[slug];
    if (subInfo) {
        return { title: `Exmedia | ${subInfo.name}` };
    }

    return { title: `Exmedia | Service` };
}

export default async function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const category = servicesData[slug];

    // IF CATEGORY: Render the stunning highly-animated Category Hub
    if (category) {
        return (
            <ServiceCategoryHub
                category={{
                    ...category,
                    heroComponent: heroComponents[slug]
                }}
            />
        );
    }

    // IF SUB-SERVICE: Redirect to parent category with hash anchor
    const subInfo = subToParentMap[slug];
    if (subInfo) {
        redirect(`/service/${subInfo.parent}#${slug}`);
    }

    // IF NEITHER: Redirect to services overview
    redirect("/service");
}
