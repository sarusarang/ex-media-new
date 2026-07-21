import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms and Conditions | Exmedia",
    description:
        "Read the Terms and Conditions governing your use of Exmedia's services. Understand your rights and obligations when accessing www.exmedia.in.",
    keywords: [
        "Exmedia terms and conditions",
        "Exmedia terms of service",
        "Exmedia legal",
        "www.exmedia.in terms",
        "Exmedia user agreement",
    ],
    alternates: {
        canonical: "https://www.exmedia.in/terms",
    },
    openGraph: {
        title: "Terms and Conditions | Exmedia",
        description:
            "Read the Terms and Conditions governing your use of Exmedia's services.",
        url: "https://www.exmedia.in/terms",
        siteName: "Exmedia",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Terms and Conditions | Exmedia",
        description:
            "Read the Terms and Conditions governing your use of Exmedia's services.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: "interpretation-definitions", label: "Interpretation and Definitions" },
    { id: "acknowledgment", label: "Acknowledgment" },
    { id: "links-to-other-websites", label: "Links to Other Websites" },
    { id: "termination", label: "Termination" },
    { id: "limitation-of-liability", label: "Limitation of Liability" },
    { id: "as-is-disclaimer", label: '"AS IS" and "AS AVAILABLE" Disclaimer' },
    { id: "governing-law", label: "Governing Law" },
    { id: "disputes-resolution", label: "Disputes Resolution" },
    { id: "eu-users", label: "For EU Users" },
    { id: "us-legal-compliance", label: "United States Legal Compliance" },
    { id: "severability-waiver", label: "Severability and Waiver" },
    { id: "translation-interpretation", label: "Translation Interpretation" },
    { id: "changes-to-terms", label: "Changes to These Terms" },
    { id: "contact-us", label: "Contact Us" },
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-gray-300">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Terms and Conditions",
                        url: "https://www.exmedia.in/terms",
                        description:
                            "Terms and Conditions governing the use of Exmedia services.",
                        publisher: {
                            "@type": "Organization",
                            name: "Exmedia",
                            url: "https://www.exmedia.in",
                        },
                        dateModified: "2024-08-16",
                    }),
                }}
            />

            {/* Hero */}
            <div className="relative overflow-hidden border-b border-gray-900">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl -translate-y-1/2" />
                    <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl translate-y-1/2" />
                </div>
                <div className="container mx-auto px-4 lg:px-12 py-24 relative z-10 text-center">
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-5">
                        Legal
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-serif">
                        Terms &amp; Conditions
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Please read these terms carefully before using our services. Last
                        updated:{" "}
                        <time dateTime="2024-08-16" className="text-gray-300">
                            August 16, 2024
                        </time>
                        .
                    </p>
                </div>
            </div>

            {/* Body */}
            <div className="container mx-auto px-4 lg:px-12 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr] gap-12 items-start">

                    {/* Sidebar TOC */}
                    <aside className="hidden lg:block sticky top-24">
                        <div className="bg-[#0e0e0e] border border-gray-800/60 rounded-2xl p-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">
                                On this page
                            </p>
                            <nav aria-label="Table of contents">
                                <ul className="space-y-1">
                                    {tocItems.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1.5 border-l-2 border-transparent hover:border-gray-400 pl-3 leading-snug"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="min-w-0 text-[15px] leading-relaxed text-gray-400">

                        {/* Section 01 */}
                        <section id="interpretation-definitions" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">01</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Interpretation and Definitions</h2>
                            </div>
                            <div className="pl-12 space-y-6">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-3 font-serif">Interpretation</h3>
                                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-4 font-serif">Definitions</h3>
                                    <p className="mb-4">For the purposes of these Terms and Conditions:</p>
                                    <ul className="space-y-3">
                                        {[
                                            { term: "Affiliate", def: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
                                            { term: "Country", def: "refers to: Kerala, India" },
                                            { term: "Company", def: '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to www.exmedia.in.' },
                                            { term: "Device", def: "means any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                                            { term: "Service", def: "refers to the Website." },
                                            { term: "Terms and Conditions", def: '(also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.' },
                                            { term: "Third-party Social Media Service", def: "means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service." },
                                            { term: "Website", def: "refers to www.exmedia.in, accessible from https://www.exmedia.in/" },
                                            { term: "You", def: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." },
                                        ].map(({ term, def }) => (
                                            <li key={term} className="flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0" />
                                                <span><strong className="text-white font-semibold">{term}</strong> {def}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 02 */}
                        <section id="acknowledgment" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">02</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Acknowledgment</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                                <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                                <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                                <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                                <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our <Link href="/privacy" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors">Privacy Policy</Link> carefully before using Our Service.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 03 */}
                        <section id="links-to-other-websites" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">03</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Links to Other Websites</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                                <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                                <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 04 */}
                        <section id="termination" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">04</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Termination</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                                <p>Upon termination, Your right to use the Service will cease immediately.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 05 */}
                        <section id="limitation-of-liability" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">05</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Limitation of Liability</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.</p>
                                <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                                <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&apos;s liability will be limited to the greatest extent permitted by law.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 06 */}
                        <section id="as-is-disclaimer" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">06</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">&ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; Disclaimer</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>The Service is provided to You &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
                                <p>Without limiting the foregoing, neither the Company nor any of the company&apos;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                                <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 07 */}
                        <section id="governing-law" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">07</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Governing Law</h2>
                            </div>
                            <div className="pl-12">
                                <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 08 */}
                        <section id="disputes-resolution" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">08</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Disputes Resolution</h2>
                            </div>
                            <div className="pl-12">
                                <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 09 */}
                        <section id="eu-users" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">09</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">For European Union (EU) Users</h2>
                            </div>
                            <div className="pl-12">
                                <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 10 */}
                        <section id="us-legal-compliance" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">10</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">United States Legal Compliance</h2>
                            </div>
                            <div className="pl-12">
                                <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &ldquo;terrorist supporting&rdquo; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 11 */}
                        <section id="severability-waiver" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">11</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Severability and Waiver</h2>
                            </div>
                            <div className="pl-12 space-y-6">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-3 font-serif">Severability</h3>
                                    <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-3 font-serif">Waiver</h3>
                                    <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party&apos;s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
                                </div>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 12 */}
                        <section id="translation-interpretation" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">12</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Translation Interpretation</h2>
                            </div>
                            <div className="pl-12">
                                <p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 13 */}
                        <section id="changes-to-terms" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">13</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Changes to These Terms and Conditions</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                                <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 14 */}
                        <section id="contact-us" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">14</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Contact Us</h2>
                            </div>
                            <div className="pl-12">
                                <p className="mb-5">If you have any questions about these Terms and Conditions, You can contact us:</p>
                                <a
                                    href="mailto:info@exmedia.in"
                                    className="inline-flex items-center gap-2 text-white border border-gray-700 rounded-full px-5 py-2.5 text-sm hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    info@exmedia.in
                                </a>
                            </div>
                        </section>

                        {/* Bottom CTA */}
                        <div className="mt-4 p-8 bg-[#0e0e0e] border border-gray-800/60 rounded-2xl text-center">
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                Also review our{" "}
                                <Link href="/privacy" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors">
                                    Privacy Policy
                                </Link>{" "}
                                to understand how we handle your data.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm rounded-full px-6 py-3 hover:bg-gray-100 transition-colors duration-300"
                            >
                                Back to Home
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>
                        </div>

                    </article>
                </div>
            </div>
        </div>
    );
}
