import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Exmedia",
    description:
        "Get in touch with Exmedia — Kerala's leading branding and digital marketing studio. Send us a message, call, or WhatsApp us. We reply within 24 hours.",
    keywords: ["contact exmedia", "exmedia enquiry", "branding agency Kerala contact", "digital marketing agency contact India"],
    openGraph: {
        title: "Contact Exmedia",
        description: "Have a project in mind? Let's build something great together.",
        url: "https://www.exmedia.in/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
