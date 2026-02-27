import HeroSlider from "@/components/home/HeroSlider";
import ParallaxPinnedScroll from "@/components/home/ParallaxPinnedScroll";
import AnimatedServices from "@/components/home/AnimatedServices";
import AnimatedProcess from "@/components/home/AnimatedProcess";
import AnimatedClients from "@/components/home/AnimatedClients";
import AnimatedCareers from "@/components/home/AnimatedCareers";
import AiOrb from "@/components/home/AiOrb";
import Footer from "@/components/common/Footer";
import { Metadata } from "next";



// Site URL for seo
const siteUrl = "https://mister-chair.vercel.app";


// Social image (1200×630) px
const socialImage = "https://mister-chair.vercel.app/logo.png";



// Metadata for about page
export const metadata: Metadata = {

  metadataBase: new URL(siteUrl),

  title: "Exmedia | Branding, Web Development, Digital Marketing & AI",

  description: "Exmedia is a digital marketing agency that provides branding, web design, digital marketing, and AI services.",


  applicationName: "Exmedia",


  keywords: [
    "branding",
    "web design",
    "digital marketing",
    "AI services",
  ],


  authors: [{ name: "Exmedia" }],
  creator: "Exmedia",
  publisher: "Exmedia",


  openGraph: {
    title: "Exmedia | Branding, Web Design, Digital Marketing & AI",
    description: "Exmedia is a digital marketing agency that provides branding, web design, digital marketing, and AI services.",
    url: `${siteUrl}`,
    siteName: "Exmedia",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Exmedia | Branding, Web Design, Digital Marketing & AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Exmedia | Branding, Web Design, Digital Marketing & AI",
    description: "Exmedia is a digital marketing agency that provides branding, web design, digital marketing, and AI services.",
    images: [socialImage],
  },


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },


  alternates: {
    canonical: `${siteUrl}`,
  },

  category: "Media",

};



export default function Home() {


  return (


    <main>


      {/* Hero Slider */}
      <HeroSlider />


      {/* Pinned Sequence: Text Reveal -> Design Overlay */}
      <ParallaxPinnedScroll />


      {/* New Animated White Sections */}
      <AnimatedServices />

      {/* Animated Careers Section */}
      <AnimatedCareers />

      {/* Animated Clients Section */}
      <AnimatedClients />

      {/* AI Orb */}
      <AiOrb />

    </main>

  );

}
