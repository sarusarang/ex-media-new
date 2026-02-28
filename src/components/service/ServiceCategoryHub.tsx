"use client";

import GlobalReach from "./branding/GlobalReach";
import TechStack from "./tech/TechStack";
import WhatsApp from "./tech/WhatsApp";
import EcoSystem from "./design/EcoSystem";
import OurPartners from "./digtalmarket/OurPartners";
import WeOffer from "./common/WeOffer";
import HeroBanner from "./common/HeroBanner";
import Process from "./common/Process";
import Faq from "./common/Faq";
import RelatedService from "./common/RelatedService";
import EnquiryForm from "../common/EnquiryForm";





export default function ServiceCategoryHub({ category }: { category: any }) {



    return (



        <main className="min-h-screen bg-[#050505] text-white">


            {/* Stunning Premium Hero */}
            <HeroBanner title={category.title} desc={category.desc} heroComponent={category.heroComponent} />



            {/* 1. {title} Services We Offer Section */}
            <WeOffer category={category} />



            {/* 2. Our Process Section */}
            <Process category={category} />



            {/* Conditional 'Global Reach' Section ONLY for Branding */}
            {category.slug === 'branding' && (

                <GlobalReach />

            )}



            {/* Conditional 'Design Ecosystem' Section ONLY for Experience Design */}
            {category.slug === 'experience-design' && (

                <EcoSystem />

            )}



            {/* Conditional 'Tech Stack' Section ONLY for Technology */}
            {category.slug === 'technology' && (

                <TechStack />

            )}



            {/* WhatsApp Chatbot Manager: ONLY for Technology */}
            {category.slug === 'technology' && (

                <WhatsApp />

            )}



            {/* Conditional 'Our Partners' Section ONLY for Digital Marketing */}
            {category.slug === 'digital-marketing' && (

                <OurPartners />

            )}



            {/* Premium FAQ Section (White Theme) */}
            <Faq title={category.title} />



            {/* Related Services Segment (Dark Theme) */}
            <RelatedService category={category} />



            {/* Enquiry Form */}
            <EnquiryForm />


        </main>


    );


}
