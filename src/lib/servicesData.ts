export interface SubCategoryData {
    name: string;
    slug: string;
    desc: string;
    chooseUs: string[];
    deliverables: string[];
    image: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    desc: string;
    details?: string;
    image: string;
}

export interface CategoryData {
    title: string;
    slug: string;
    desc: string;
    subServices: SubCategoryData[];
    process: ProcessStep[];
}

export const servicesData: Record<string, CategoryData> = {
    "branding": {
        title: "Branding",
        slug: "branding",
        desc: "We craft iconic, enduring brand identities that resonate deeply and stand the test of time.",
        subServices: [
            {
                name: "Brand Strategy & Positioning",
                slug: "brand-strategy-positioning",
                desc: "Develops strategic brand positioning that defines your unique market identity, strengthens customer perception, builds competitive advantage, and creates consistent brand experiences that drive long-term business growth.",
                chooseUs: ["Brand Identity & Market Positioning", "Target Audience & Customer Insights", "Competitive Brand Analysis", "Brand Value Proposition Development"],
                deliverables: ["Comprehensive Brand Strategy Document", "Unique Positioning Statement", "Brand Messaging Framework", "Brand Growth & Implementation Roadmap"],
                image: "/800 X 533 brand strategy and positioning document-01.jpg.jpeg"
            },
            {
                name: "Visual Identity & Creative Design",
                slug: "visual-identity-creative-design",
                desc: "Creates impactful visual identities that reflect your brand personality, enhance recognition, ensure consistency across platforms, and deliver compelling creative designs that inspire trust, engagement, and lasting impressions.",
                chooseUs: ["Logo & Brand Identity Design", "Brand Color Palette & Typography", "Marketing & Corporate Collateral Design", "Digital & Print Creative Solutions"],
                deliverables: ["Professional Logo & Brand Identity System", "Brand Style Guidelines", "Marketing Collateral Design Package", "Social Media & Digital Creative Assets"],
                image: "/800 X 533 brand identity design system-02.jpg.jpeg"
            },
            {
                name: "Digital Branding & Online Presence",
                slug: "digital-branding-online-presence",
                desc: "Builds powerful digital brands through strategic online presence, engaging content, optimized platforms, and consistent customer experiences that increase visibility, credibility, audience engagement, and sustainable business growth.",
                chooseUs: ["Website & Digital Experience", "Social Media Branding", "Search Engine Visibility (SEO)", "Content Strategy & Online Engagement"],
                deliverables: ["Responsive Business Website", "Social Media Brand Kit", "SEO & Digital Visibility Strategy", "Content Calendar & Brand Guidelines"],
                image: "/800 X 608 Digital Branding-03.jpg.jpeg"
            },
            {
                name: "Advertising & Media Communication",
                slug: "advertising-media-communication",
                desc: "Delivers result-driven advertising and integrated media communication strategies that maximize brand visibility, engage target audiences, strengthen market presence, and generate measurable business growth across digital and traditional platforms.",
                chooseUs: ["Integrated Advertising Campaigns", "Digital & Traditional Media Planning", "Brand Communication Strategy", "Performance Marketing & Audience Engagement"],
                deliverables: ["End-to-End Advertising Campaign Plan", "Media Planning & Buying Strategy", "Creative Advertising Assets", "Campaign Performance Analytics & Optimization"],
                image: "/1200 X 797 advertisement.jpg.jpeg"
            },
            {
                name: "Public Relations & Reputation Management",
                slug: "public-relations-reputation-management",
                desc: "Builds trusted brand reputations through strategic public relations, media engagement, crisis communication, and reputation management, strengthening credibility, fostering stakeholder confidence, and ensuring long-term brand value.",
                chooseUs: ["Media Relations & Press Communication", "Corporate Reputation Management", "Crisis Communication Planning", "Stakeholder & Community Engagement"],
                deliverables: ["Public Relations Strategy", "Press Releases & Media Kits", "Crisis Communication Framework", "Reputation Monitoring & Performance Reports"],
                image: "/1200 X 797 public relation & reputation management.jpg.jpeg"
            }
        ],
        process: [
            {
                step: "01",
                title: "Discovery & Research",
                desc: "Discovery and Research is the critical foundation where Exmedia uncovers a brand’s core DNA. Through deep-dive audits, competitor benchmarking, and audience profiling, we transform raw data into actionable insights, ensuring every creative decision is strategically aligned with your business goals.",
                details: "Client Onboarding | Market & Competitor Analysis | Audience Profiling",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "02",
                title: "Brand Strategy",
                desc: "Brand Strategy is the architectural blueprint that defines your market position and purpose. At Exmedia, we translate insights into a clear roadmap, establishing your brand’s unique voice, core values, and competitive edge. This strategic \"DNA\" ensures every marketing effort resonates deeply with your audience and drives long-term growth.",
                details: "Positioning Statement | Core Values & Mission | Brand Personality",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "03",
                title: "Visual Identity Design",
                desc: "Exmedia’s Visual Identity Design transforms abstract strategy into a striking aesthetic reality. We engineer iconic logos, intentional color palettes, and cohesive typography that capture your brand’s essence. This \"visual language\" ensures an unforgettable first impression and a consistent, professional presence across all physical and digital touchpoints.",
                details: "Logo Engineering | Color Psychology | Typography & Imagery | Brand Guidelines",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
            },
            {
                step: "04",
                title: "Content & Creative Development",
                desc: "Exmedia’s Content & Creative Development breathes life into your brand through compelling storytelling and high-impact design. From persuasive copywriting to stunning multimedia production, we craft tailor-made assets that engage your audience emotionally. Our focus is on creating consistent, \"scroll-stopping\" content that effectively communicates your message across all channels.",
                details: "Messaging & Copywriting | Multimedia Production",
                image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "05",
                title: "Advertisement & Implementation",
                desc: "Exmedia’s Proposed Advertisement & Implementation delivers strategic, result-driven campaigns designed to build strong brand visibility and market impact. From research and creative development to multi-channel execution and performance monitoring, Exmedia ensures seamless implementation across digital and traditional platforms, maximizing reach, engagement, and measurable business growth nationally and internationally.",
                details: "Media Planning | Digital Marketing | Physical Branding",
                image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "06",
                title: "Monitoring & Evolution",
                desc: "exmedia’s Brand Monitoring & Evolution ensures your identity remains relevant in a shifting market. We track performance through data analytics and audience feedback, identifying opportunities for growth. By refining strategies and updating visuals, we transform your brand from a static image into a living, breathing entity that scales with success.",
                details: "Performance Tracking | Feedback Loops | Brand Refreshing",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
            }
        ]
    },
    "experience-design": {
        title: "Experience Design",
        slug: "experience-design",
        desc: "Creating pixel-perfect, frictionless digital experiences that delight users across every touchpoint.",
        subServices: [
            {
                name: "Identity & Branding Design",
                slug: "identity-branding-design",
                desc: "Designs distinctive brand identities that communicate your vision, strengthen recognition, establish credibility, and create memorable visual experiences that connect with audiences across every customer touchpoint.",
                chooseUs: ["Logo & Brand Identity Design", "Brand Naming & Visual Systems", "Typography & Color Strategy", "Corporate Stationery & Brand Collateral"],
                deliverables: ["Professional Logo Design", "Complete Brand Identity System", "Brand Style Guide", "Corporate Branding & Marketing Assets"],
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Marketing & Promotional Design",
                slug: "marketing-promotional-design",
                desc: "Creates impactful marketing and promotional designs that capture attention, communicate brand messages effectively, enhance customer engagement, and drive successful campaigns across print, digital, and outdoor media.",
                chooseUs: ["Campaign & Advertising Creatives", "Print & Digital Marketing Materials", "Promotional Branding Solutions", "Social Media Creative Design"],
                deliverables: ["Marketing Campaign Design Package", "Brochures, Flyers & Posters", "Social Media Creative Assets", "Outdoor Advertising & Promotional Graphics"],
                image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "UI/UX & Digital Asset Design",
                slug: "ui-ux-digital-asset-design",
                desc: "Our intuitive user interfaces and engaging digital assets that enhance user experiences, strengthen brand consistency, improve usability, and drive meaningful interactions across websites, mobile applications, and digital platforms.",
                chooseUs: ["UI/UX Research & Wireframing", "Website & Mobile App Interface Design", "User Experience Optimization", "Digital Asset & Icon Design"],
                deliverables: ["UI/UX Design System", "Interactive Wireframes & Prototypes", "Website & Mobile App UI Designs", "Custom Digital Assets & Icon Library"],
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Packaging & Environmental Design",
                slug: "packaging-environmental-design",
                desc: "We provide innovative packaging and environmental designs that elevate product appeal, reinforce brand identity, enhance customer experiences, and deliver memorable visual impact across retail and physical spaces.",
                chooseUs: ["Product Packaging Design", "Retail & Point-of-Sale Branding", "Exhibition & Event Space Design", "Signage & Environmental Graphics"],
                deliverables: ["Custom Packaging Design System", "Product Labels & Packaging Artwork", "Retail Display & Signage Designs", "Exhibition Booth & Environmental Graphics Package"],
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Motion Graphics & Video Design",
                slug: "motion-graphics-video-design",
                desc: "Produces engaging motion graphics and professional video content that communicate brand stories, captivate audiences, enhance digital engagement, and deliver impactful visual experiences across every marketing platform.",
                chooseUs: ["Motion Graphics & Animation", "Corporate & Promotional Videos", "Social Media Video Content", "2D/3D Visual Storytelling"],
                deliverables: ["Motion Graphics & Animated Videos", "Corporate & Brand Promotional Films", "Social Media Video Creatives", "Product Explainer & Commercial Videos"],
                image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Publication & Editorial Design",
                slug: "publication-editorial-design",
                desc: "Delivers professional publication and editorial designs that communicate information clearly, strengthen brand credibility, enhance readability, and create visually engaging print and digital publishing experiences.",
                chooseUs: ["Magazine & Book Design", "Brochure & Catalogue Layout", "Annual Report & Corporate Publications", "Digital Publications & eBooks"],
                deliverables: ["Magazine & Book Layout Design", "Brochures, Catalogues & Company Profiles", "Annual Reports & Corporate Publications", "Interactive PDF & eBook Designs"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
            }
        ],
        process: [
            {
                step: "01",
                title: "Creative Briefing & Conceptualization",
                desc: "The process begins by distilling the client’s goals into a Creative Brief. Our design team brainstorms core concepts, exploring various visual metaphors and \"big ideas.\" We define the creative direction—mood, tone, and messaging—to ensure the design aligns perfectly with the brand’s strategy.",
                details: "Creative Direction | Brainstorming & Metaphors | Mood & Tone Boards",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "02",
                title: "Wireframing & Sketching",
                desc: "Before moving to digital software, we focus on structure. For branding, this means hand-sketched logo iterations; for digital layouts, it involves low-fidelity wireframes. This stage allows us to experiment with composition, hierarchy, and balance without getting distracted by colors or textures.",
                details: "Logo Iterations | Low-fidelity Layouts | Composition & Balance",
                image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "03",
                title: "Design Development",
                desc: "Once a direction is approved, our designers bring the sketches to life using industry-leading tools. We apply Color Theory, Typography, and Grid Systems to create high-fidelity drafts. Whether it’s a 3D architectural walkthrough or a social media campaign, this is where the \"visual magic\" happens.",
                details: "Color Theory & Grids | High-fidelity Drafting | Visual Polish",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "04",
                title: "Internal Review & Client Feedback",
                desc: "No design leaves exmedia without passing a strict internal quality audit. We then present the work to the client for feedback. We utilize a collaborative revision loop, refining the details—such as font weights or image placements—to ensure the final output exceeds expectations.",
                details: "Quality Audit Check | Collaborative Revision Loop | Client Presentation",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "05",
                title: "Final Production & Asset Delivery",
                desc: "The final step is technical optimization. We prepare the designs for their specific destinations—high-resolution CMYK files for print (brochures/packaging) and optimized RGB assets for digital platforms (social media/web). We provide a complete \"Asset Pack\" ready for immediate deployment.",
                details: "Technical Optimization | CMYK Print Preparation | RGB Digital Handoff",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
            }
        ]
    },
    "content-production": {
        title: "Photography & Videography",
        slug: "content-production",
        desc: "Transforming your offerings into high-conversion visual masterpieces through 4K cinematography, precision styling, and immersive storytelling.",
        subServices: [
            {
                name: "Product Photography & Videography",
                slug: "product-photography-videography",
                desc: "Attend Premium product photography and cinematic videography that showcase quality, highlight unique features, enhance brand appeal, and increase customer engagement across e-commerce, advertising, and digital platforms.",
                chooseUs: ["Commercial Product Photography", "Product Promotional Videography", "E-commerce & Catalogue Shoots", "Lifestyle & Brand Visual Production"],
                deliverables: ["High-Resolution Product Images", "Product Promotional & Commercial Videos", "E-commerce Catalogue Visuals", "Professionally Edited Photo & Video Assets"],
                image: "https://images.unsplash.com/photo-1452697620382-f6543ead73b5?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "E-Commerce & Catalog Photography",
                slug: "ecommerce-catalog-photography",
                desc: "We delivers professional e-commerce and catalog photography that presents products with clarity, consistency, and visual appeal, enhancing customer confidence, increasing conversions, and strengthening your online brand presence",
                chooseUs: ["E-Commerce Product Photography ", "Catalog & Lookbook Photography", "White Background & Packshot Imaging", "Product Image Optimization"],
                deliverables: ["High-Resolution Product Image Library", "E-Commerce Ready Product Photos", "Catalog & Lookbook Photography Package", "Optimized Images for Online Marketplaces"],
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Lifestyle & Contextual Imagery",
                slug: "lifestyle-contextual-imagery",
                desc: "Creates compelling lifestyle and contextual imagery that showcases products in real-world environments, strengthens emotional connections, enhances brand storytelling, and inspires customer engagement across marketing channels.",
                chooseUs: ["Lifestyle Product Photography", "Brand Storytelling Visuals", "Environmental & Contextual Shoots", "Creative Concept & Art Direction"],
                deliverables: ["Lifestyle Product Image Collection", "Brand Storytelling Photography", "Contextual Marketing Visuals", "Professionally Edited Creative Image Assets"],
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Short-Form Video & Social Reels",
                slug: "short-form-video-social-reels",
                desc: "Direct & create engaging short-form videos and social reels designed to capture attention, communicate brand stories, increase audience interaction, and drive visibility across modern digital and social platforms.",
                chooseUs: ["Social Media Reel Production", "Creative Video Storytelling", "Trend-Based Content Creation", "Brand Engagement & Audience Growth"],
                deliverables: ["Short-Form Promotional Videos", "Instagram Reels & Social Media Content", "Product & Brand Story Videos", "Edited Vertical Video Assets for Digital Platforms"],
                image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop"
            }
        ],
        process: [
            {
                step: "01",
                title: "Pre-Production & Concept Styling",
                desc: "Before the first flash fires, we define the visual mood. This involves creating a \"Shot List\" and selecting props, backgrounds, and lighting styles. Whether it's a \"clean clinical\" look for e-commerce or a \"warm lifestyle\" setting for social media, we align every detail with your brand's strategic identity.",
                details: "Shot List Creation | Prop Selection | Lighting Style Definition",
                image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "02",
                title: "Set Construction & Lighting Design",
                desc: "Our studio team builds the environment. We use advanced 3-point lighting to highlight product textures, eliminate unwanted reflections, and create depth. For videography, we set up motorized sliders or gimbals to ensure smooth, cinematic movement that adds a high-end feel to the footage.",
                details: "3-Point Lighting Setup | Gimbal & Slider Rigs | Texture Highlighting",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "03",
                title: "The Production Phase",
                desc: "This is where the vision comes to life. Our photographers and cinematographers capture high-resolution 4K RAW files. We focus on multiple angles—hero shots, macro-details (close-ups), and functional use cases. For videos, we capture \"hooks\" and \"transitions\" specifically designed for fast-paced digital platforms.",
                details: "4K RAW Capture | Multi-Angle Hero Shots | Digital-Platform Hooks",
                image: "https://images.unsplash.com/photo-1452697620382-f6543ead73b5?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "04",
                title: "Post-Production & Digital Retouching",
                desc: "Raw files are transformed into polished assets. Our editors perform color grading, skin/surface retouching, and background removal. For video, we sync the visuals with trending audio or professional voiceovers, adding motion graphics and text overlays to reinforce your key selling points.",
                details: "Color Grading | Background Removal | Motion Graphics Overlays",
                image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "05",
                title: "Final Review & Format Optimization",
                desc: "We conduct a final quality check to ensure color accuracy across all screens. The assets are then rendered into optimized formats: high-res TIFFs/JPEGs for print, and lightweight MP4s/WebPs for web and social media, ensuring your brand looks perfect wherever it appears.",
                details: "Color Accuracy QC | TIFF/JPEG Print Export | MP4/WebP Digital Handoff",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop"
            }
        ]
    },
    "digital-marketing": {
        title: "Digital Marketing",
        slug: "digital-marketing",
        desc: "Data-driven, high-performance campaigns engineered to maximize reach and drive conversions.",
        subServices: [
            {
                name: "Social Media Management",
                slug: "social-media",
                desc: "Manages strategic social media presence through compelling content, audience engagement, performance optimization, and data-driven campaigns that increase brand awareness, customer loyalty, and measurable business growth.",
                chooseUs: ["Social Media Strategy & Planning", "Content Creation & Publishing", "Community Engagement & Brand Management", "Performance Analytics & Campaign Optimization"],
                deliverables: ["Monthly Content Calendar", "Creative Social Media Posts & Reels", "Community Management & Response Strategy", "Performance Reports & Growth Insights"],
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Performance Marketing",
                slug: "performance-marketing",
                desc: "Delivers data-driven performance marketing campaigns that maximize conversions, optimize advertising spend, generate qualified leads, and achieve measurable business growth through continuous analysis and strategic optimization.",
                chooseUs: ["Paid Search & Social Advertising", "Lead Generation Campaigns", "Conversion Rate Optimization (CRO)", "Campaign Performance Analytics"],
                deliverables: ["Multi-Platform Advertising Campaigns", "Lead Generation & Conversion Strategy", "Campaign Performance Dashboard", "ROI Analysis & Optimization Reports"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Content Marketing",
                slug: "content-marketing",
                desc: "Exmedia creates strategic content that educates, engages, and converts audiences through compelling storytelling, valuable insights, and consistent brand communication across digital platforms to drive sustainable business growth.",
                chooseUs: ["Content Strategy & Planning", "Copywriting & Brand Storytelling", "Blog, Article & Website Content", "Multi-Platform Content Distribution"],
                deliverables: ["Content Marketing Strategy", "SEO-Optimized Website & Blog Content", "Social Media Content Calendar", "Content Performance & Engagement Reports"],
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Marketing Automation",
                slug: "marketing-automation",
                desc: "Streamlines marketing operations through intelligent automation, personalized customer journeys, lead nurturing, and workflow optimization, improving engagement, boosting conversions, and increasing operational efficiency across digital channels.",
                chooseUs: ["Marketing Workflow Automation", "Lead Nurturing & Customer Journeys", "Email & WhatsApp Automation", "CRM Integration & Campaign Management"],
                deliverables: ["Automated Marketing Workflows", "Lead Nurturing Campaigns", "Email & WhatsApp Automation Setup", "CRM Integration & Performance Dashboard"],
                image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Search Engine Optimisation",
                slug: "seo",
                desc: "Improves your search engine visibility through strategic SEO, technical optimization, quality content, and performance analysis, driving organic traffic, qualified leads, and sustainable long-term business growth.",
                chooseUs: ["Technical SEO Optimization", "On-Page & Off-Page SEO", "Keyword Research & Content Strategy", "SEO Performance Monitoring"],
                deliverables: ["Comprehensive SEO Audit Report", "Keyword & Competitor Analysis", "On-Page & Technical SEO Implementation", "Monthly SEO Performance & Ranking Reports"],
                image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Analytics",
                slug: "analytics",
                desc: "Transforms marketing data into actionable insights through advanced analytics, performance tracking, audience behavior analysis, and campaign optimization, enabling informed decisions that maximize growth and return on investment.",
                chooseUs: ["Social Media Performance Analytics", "Marketing Campaign Measurement", "Audience & Customer Behavior Analysis", "ROI Tracking & Data Visualization"],
                deliverables: ["Social Media Analytics Dashboard", "Marketing Performance Reports", "Audience Insights & Engagement Analysis", "Campaign Optimization & ROI Recommendations"],
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
            }
        ],
        process: [
            {
                step: "01",
                title: "Discover & Strategize",
                desc: "Understand the business, analyze competitors, identify the target audience, and develop a customized digital marketing strategy with clear goals and KPIs.",
                details: "Brand & business analysis | Competitor research | Audience identification | Marketing strategy & planning",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "02",
                title: "Create & Plan",
                desc: "Develop engaging content and creative assets aligned with the brand identity and monthly campaign objectives.",
                details: "Content calendar | Graphic design & videos | Copywriting | Creative campaign planning",
                image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "03",
                title: "Execute & Promote",
                desc: "Publish content across digital platforms and launch targeted advertising campaigns to maximize reach, engagement, and lead generation.",
                details: "Social media management | Meta & Google Ads | Community engagement | Campaign execution",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "04",
                title: "Optimize & Convert",
                desc: "Enhance website visibility, improve customer journeys, and automate lead management to increase conversions.",
                details: "SEO optimization | Landing page improvements | WhatsApp & CRM automation | Lead nurturing",
                image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "05",
                title: "Measure & Scale",
                desc: "Monitor campaign performance, analyze key metrics, and continuously optimize strategies to achieve sustainable business growth.",
                details: "Performance analytics | ROI reporting | Campaign optimization | Growth scaling",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
            }
        ]
    }
};

// Direct subcategory-to-parent slug mapper for redirections
export const subToParentMap: Record<string, { parent: string; name: string }> = {};

Object.entries(servicesData).forEach(([catSlug, catData]) => {
    catData.subServices.forEach((sub) => {
        subToParentMap[sub.slug] = {
            parent: catSlug,
            name: sub.name
        };
    });
});
