import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at Exmedia | Join Our Creative Studio",
    description:
        "Build your career and shape bold brands with Exmedia. Explore current job openings in design, video editing, digital marketing, social media strategy, and client servicing.",
    keywords: [
        "Exmedia careers",
        "Exmedia jobs",
        "graphic designer jobs Kerala",
        "video editor jobs Kerala",
        "digital marketing executive jobs",
        "social media strategist jobs",
        "advertising agency jobs Kerala",
    ],
    alternates: {
        canonical: "https://www.exmedia.in/careers",
    },
    openGraph: {
        title: "Careers at Exmedia | Join Our Creative Studio",
        description:
            "Build your career and shape bold brands with Exmedia. Explore current job openings.",
        url: "https://www.exmedia.in/careers",
        siteName: "Exmedia",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at Exmedia | Join Our Creative Studio",
        description:
            "Build your career and shape bold brands with Exmedia. Explore current job openings.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
