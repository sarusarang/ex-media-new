import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Exmedia",
    description:
        "Read the Privacy Policy of Exmedia. Learn how we collect, use, and protect your personal data when you use www.exmedia.in.",
    keywords: [
        "Exmedia privacy policy",
        "Exmedia data protection",
        "Exmedia personal data",
        "www.exmedia.in privacy",
        "Exmedia cookies policy",
    ],
    alternates: {
        canonical: "https://www.exmedia.in/privacy",
    },
    openGraph: {
        title: "Privacy Policy | Exmedia",
        description:
            "Read the Privacy Policy of Exmedia. Learn how we collect, use, and protect your personal data.",
        url: "https://www.exmedia.in/privacy",
        siteName: "Exmedia",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Privacy Policy | Exmedia",
        description:
            "Read the Privacy Policy of Exmedia. Learn how we collect, use, and protect your personal data.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems = [
    { id: "interpretation-definitions", label: "Interpretation and Definitions" },
    { id: "collecting-using-data", label: "Collecting and Using Your Data" },
    { id: "tracking-cookies", label: "Tracking Technologies and Cookies" },
    { id: "use-of-personal-data", label: "Use of Your Personal Data" },
    { id: "retention-of-data", label: "Retention of Your Personal Data" },
    { id: "transfer-of-data", label: "Transfer of Your Personal Data" },
    { id: "delete-personal-data", label: "Delete Your Personal Data" },
    { id: "disclosure-of-data", label: "Disclosure of Your Personal Data" },
    { id: "security-of-data", label: "Security of Your Personal Data" },
    { id: "childrens-privacy", label: "Children's Privacy" },
    { id: "links-to-other-websites", label: "Links to Other Websites" },
    { id: "changes-to-privacy-policy", label: "Changes to This Privacy Policy" },
    { id: "contact-us", label: "Contact Us" },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-gray-300">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Privacy Policy",
                        url: "https://www.exmedia.in/privacy",
                        description: "Privacy Policy of Exmedia — how we collect, use, and protect your personal data.",
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
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        This Privacy Policy describes how we collect, use and disclose your
                        information. Last updated:{" "}
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

                        {/* Intro */}
                        <div className="mb-12 p-6 bg-[#0e0e0e] border border-gray-800/60 rounded-2xl text-sm leading-relaxed">
                            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                        </div>

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
                                    <p className="mb-4">For the purposes of this Privacy Policy:</p>
                                    <ul className="space-y-3">
                                        {[
                                            { term: "Account", def: "means a unique account created for You to access our Service or parts of our Service." },
                                            { term: "Affiliate", def: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
                                            { term: "Company", def: '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to www.exmedia.in.' },
                                            { term: "Cookies", def: "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses." },
                                            { term: "Country", def: "refers to: Kerala, India" },
                                            { term: "Device", def: "means any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                                            { term: "Personal Data", def: "is any information that relates to an identified or identifiable individual." },
                                            { term: "Service", def: "refers to the Website." },
                                            { term: "Service Provider", def: "means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used." },
                                            { term: "Third-party Social Media Service", def: "refers to any website or any social network website through which a User can log in or create an account to use the Service." },
                                            { term: "Usage Data", def: "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." },
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
                        <section id="collecting-using-data" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">02</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Collecting and Using Your Personal Data</h2>
                            </div>
                            <div className="pl-12 space-y-8">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-4 font-serif">Types of Data Collected — Personal Data</h3>
                                    <p className="mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                                    <ul className="space-y-2">
                                        {["Email address", "First name and last name", "Phone number", "Address, State, Province, ZIP/Postal code, City", "Usage Data"].map((item) => (
                                            <li key={item} className="flex gap-3 items-center">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-4 font-serif">Usage Data</h3>
                                    <div className="space-y-4">
                                        <p>Usage Data is collected automatically when using the Service.</p>
                                        <p>Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                        <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                                        <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-4 font-serif">Information from Third-Party Social Media Services</h3>
                                    <p className="mb-4">The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
                                    <ul className="space-y-2 mb-4">
                                        {["Google", "Facebook", "Instagram", "Twitter", "LinkedIn"].map((s) => (
                                            <li key={s} className="flex gap-3 items-center">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service&apos;s account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
                                </div>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 03 */}
                        <section id="tracking-cookies" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">03</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Tracking Technologies and Cookies</h2>
                            </div>
                            <div className="pl-12 space-y-5">
                                <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0" />
                                        <span><strong className="text-white font-semibold">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0" />
                                        <span><strong className="text-white font-semibold">Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics.</span>
                                    </li>
                                </ul>
                                <p>Cookies can be &ldquo;Persistent&rdquo; or &ldquo;Session&rdquo; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
                                <p className="text-gray-300 font-semibold">We use both Session and Persistent Cookies for the following purposes:</p>
                                <div className="space-y-5 mt-2">
                                    {[
                                        {
                                            name: "Necessary / Essential Cookies",
                                            type: "Session Cookies",
                                            by: "Us",
                                            purpose: "These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.",
                                        },
                                        {
                                            name: "Cookies Policy / Notice Acceptance Cookies",
                                            type: "Persistent Cookies",
                                            by: "Us",
                                            purpose: "These Cookies identify if users have accepted the use of cookies on the Website.",
                                        },
                                        {
                                            name: "Functionality Cookies",
                                            type: "Persistent Cookies",
                                            by: "Us",
                                            purpose: "These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference.",
                                        },
                                    ].map((cookie) => (
                                        <div key={cookie.name} className="bg-[#0e0e0e] border border-gray-800/60 rounded-xl p-5">
                                            <p className="text-white font-semibold mb-2">{cookie.name}</p>
                                            <p className="text-xs text-gray-500 mb-1">Type: {cookie.type} &nbsp;·&nbsp; Administered by: {cookie.by}</p>
                                            <p className="text-sm">{cookie.purpose}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 04 */}
                        <section id="use-of-personal-data" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">04</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Use of Your Personal Data</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>The Company may use Personal Data for the following purposes:</p>
                                <ul className="space-y-3">
                                    {[
                                        "To provide and maintain our Service, including to monitor the usage of our Service.",
                                        "To manage Your Account: to manage Your registration as a user of the Service.",
                                        "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.",
                                        "To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.",
                                        "To provide You with news, special offers and general information about other goods, services and events which we offer.",
                                        "To manage Your requests: To attend and manage Your requests to Us.",
                                        "For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.",
                                        "For other purposes such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns.",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="pt-2">We may share Your personal information in the following situations:</p>
                                <ul className="space-y-3">
                                    {[
                                        { label: "With Service Providers", detail: "We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You." },
                                        { label: "For business transfers", detail: "We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company." },
                                        { label: "With Affiliates", detail: "We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy." },
                                        { label: "With business partners", detail: "We may share Your information with Our business partners to offer You certain products, services or promotions." },
                                        { label: "With other users", detail: "When You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside." },
                                        { label: "With Your consent", detail: "We may disclose Your personal information for any other purpose with Your consent." },
                                    ].map(({ label, detail }) => (
                                        <li key={label} className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0" />
                                            <span><strong className="text-white font-semibold">{label}:</strong> {detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 05 */}
                        <section id="retention-of-data" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">05</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Retention of Your Personal Data</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                                <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 06 */}
                        <section id="transfer-of-data" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">06</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Transfer of Your Personal Data</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                                <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                                <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 07 */}
                        <section id="delete-personal-data" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">07</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Delete Your Personal Data</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                                <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                                <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
                                <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 08 */}
                        <section id="disclosure-of-data" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">08</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Disclosure of Your Personal Data</h2>
                            </div>
                            <div className="pl-12 space-y-6">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-3 font-serif">Business Transactions</h3>
                                    <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-3 font-serif">Law Enforcement</h3>
                                    <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200 mb-3 font-serif">Other Legal Requirements</h3>
                                    <p className="mb-3">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                                    <ul className="space-y-2">
                                        {[
                                            "Comply with a legal obligation",
                                            "Protect and defend the rights or property of the Company",
                                            "Prevent or investigate possible wrongdoing in connection with the Service",
                                            "Protect the personal safety of Users of the Service or the public",
                                            "Protect against legal liability",
                                        ].map((item) => (
                                            <li key={item} className="flex gap-3 items-center">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 09 */}
                        <section id="security-of-data" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">09</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Security of Your Personal Data</h2>
                            </div>
                            <div className="pl-12">
                                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 10 */}
                        <section id="childrens-privacy" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">10</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Children&apos;s Privacy</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                                <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 11 */}
                        <section id="links-to-other-websites" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">11</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Links to Other Websites</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 12 */}
                        <section id="changes-to-privacy-policy" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">12</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Changes to This Privacy Policy</h2>
                            </div>
                            <div className="pl-12 space-y-4">
                                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                                <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &ldquo;Last updated&rdquo; date at the top of this Privacy Policy.</p>
                                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                            </div>
                        </section>
                        <div className="border-t border-gray-900 mb-12" />

                        {/* Section 13 */}
                        <section id="contact-us" className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="shrink-0 w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center text-xs text-gray-500 font-mono mt-0.5">13</span>
                                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug font-serif">Contact Us</h2>
                            </div>
                            <div className="pl-12">
                                <p className="mb-5">If you have any questions about this Privacy Policy, You can contact us:</p>
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
                                <Link href="/terms" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors">
                                    Terms and Conditions
                                </Link>{" "}
                                for the rules governing your use of our Service.
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
