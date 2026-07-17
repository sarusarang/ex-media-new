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
                desc: "This is the foundation of branding. It defines the brand’s mission, vision, values, target audience, competitive positioning, and unique selling proposition (USP). A strong brand strategy ensures consistent messaging and long-term market differentiation.",
                chooseUs: ["Mission & Vision Definition", "Competitor Matrix Positioning", "Target Audience Profiling", "USP Architecture"],
                deliverables: ["Brand Core Document", "Positioning Guidelines", "Value Proposition Deck"],
                image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Visual Identity & Creative Design",
                slug: "visual-identity-creative-design",
                desc: "This includes logo design, color palette, typography, brand guidelines, packaging design, and overall visual communication. A consistent visual identity builds recognition, trust, and memorability across all platforms.",
                chooseUs: ["Logo Design Engineering", "Color Palette Psychology", "Typography Systems", "Brand Guideline Documents"],
                deliverables: ["Logo Suite (Primary/Secondary)", "Creative Guidelines Assets", "Packaging Layout Designs"],
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Digital Branding & Online Presence",
                slug: "digital-branding-online-presence",
                desc: "Focuses on website design, SEO, social media branding, content marketing, and online reputation management. In today’s digital-first world, brands must create engaging and culturally adapted digital experiences.",
                chooseUs: ["Frictionless Website Aesthetics", "Social Channel Unity", "Content Consistency Focus", "Brand Image Protection"],
                deliverables: ["Digital Brand Styleguide", "Social Media Theme Kits", "SEO Asset Architecture"],
                image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Advertising & Media Communication",
                slug: "advertising-media-communication",
                desc: "Covers campaign creation, media planning, and ad placements across TV, print, radio, digital platforms, and outdoor media. Strategic advertising increases brand awareness and strengthens market positioning.",
                chooseUs: ["Campaign Ideation Rigor", "Media Buying Analytics", "Multichannel Placement", "Visual Creative Assets"],
                deliverables: ["Campaign Creative Swipes", "Media Plan Schedules", "Outdoor & Digital Ad Formats"],
                image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Public Relations & Reputation Management",
                slug: "public-relations-reputation-management",
                desc: "Manages media relations, press releases, crisis communication, and public perception. This service helps build credibility, maintain trust, and protect the brand’s image in competitive markets.",
                chooseUs: ["Strategic Media Relations", "Crisis Playbook Drafting", "Press Release Distribution", "Sentiment Audits"],
                deliverables: ["PR Media Pitch Kits", "Crisis Response Guidelines", "Publicity Sentiment Reports"],
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
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
                desc: "Identity & Branding Design serves as the strategic heartbeat of your business. We craft iconic logos, intentional color systems, and comprehensive style guides that distill your brand’s mission into a powerful visual legacy. This foundational segment ensures a premium, cohesive identity that builds immediate trust and global recognition.",
                chooseUs: ["Iconic Logo Crafting", "Intentional Color Systems", "Cohesive Style Guides", "Visual Legacy Building"],
                deliverables: ["Custom Logo Vectors", "Brand Color Guidelines", "Corporate Style Manuals"],
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Marketing & Promotional Design",
                slug: "marketing-promotional-design",
                desc: "Our Marketing & Promotional Design is engineered to convert attention into action. We create high-impact social media assets, persuasive brochures, and dynamic ad campaigns that \"stop the scroll.\" By blending psychological triggers with striking aesthetics, we ensure your brand’s message cuts through the noise and drives measurable growth.",
                chooseUs: ["Scroll-Stopping Assets", "Persuasive Copy Layouts", "Aesthetic Ad Campaigns", "Psychological Trigger Designs"],
                deliverables: ["Social Media Asset Templates", "Promotional Brochure PDFs", "Ad Placement Graphics"],
                image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "UI/UX & Digital Asset Design",
                slug: "ui-ux-digital-asset-design",
                desc: "The UI/UX & Digital Asset Design focuses on creating seamless, high-conversion digital experiences. We blend intuitive navigation with striking aesthetics to build websites and mobile interfaces that do more than just look good—they guide users effortlessly toward action. From wireframes to final polish, we ensure your brand excels in the digital-first world.",
                chooseUs: ["Frictionless Navigation UX", "High-Conversion Interface Layouts", "High-fidelity Desktop/Mobile Wireframes", "Polished Vector Icons"],
                deliverables: ["Figma UX Wireframe Flows", "Interactive Screen Prototypes", "Developer Asset Packs"],
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Packaging & Environmental Design",
                slug: "packaging-environmental-design",
                desc: "Dedicated Packaging & Environmental Design brings your brand into the tangible world. We craft high-impact product packaging and immersive physical spaces—from retail interiors to exhibition stalls—that tell your story. By blending structural innovation with striking aesthetics, we ensure every physical touchpoint reinforces premium quality and leaves a lasting impression.",
                chooseUs: ["Structural Package Innovation", "Immersive Environmental Retail Design", "Exhibition Stall Layouts", "Premium Material Suggestions"],
                deliverables: ["Product Packaging Renders", "Environmental Interior CADs", "Exhibition Stall Mockups"],
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Motion Graphics & Video Design",
                slug: "motion-graphics-video-design",
                desc: "Dynamic Motion Graphics & Video Design breathes life into static branding through cinematic storytelling. From animated logos and 3D architectural walkthroughs to high-energy social media reels, we combine fluid movement with strategic messaging. This segment ensures your brand captures attention instantly, simplifying complex ideas into engaging, \"scroll-stopping\" visual experiences.",
                chooseUs: ["Cinematic Narrative Timelines", "Fluid Motion Graphic Renders", "3D Architecture Walkthroughs", "High-Energy Video Editing"],
                deliverables: ["Animated Logo Videos", "3D Architectural Render Flyovers", "Promo Reels & Social Clips"],
                image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Publication & Editorial Design",
                slug: "publication-editorial-design",
                desc: "Publication & Editorial Design transforms complex information into high-end visual narratives. We specialize in structuring annual reports, digital magazines, and product catalogs with a focus on readability and sophisticated layout. By balancing white space, typography, and imagery, we ensure your long-form content maintains authority and reinforces your brand’s premium status.",
                chooseUs: ["White-Space Balance Theory", "Sophisticated Typography Layouts", "High-Readability Catalogs", "Corporate Authority Focus"],
                deliverables: ["Annual Report Layout PDFs", "Digital Magazine Mockups", "Product Catalog Print Templates"],
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
    "technology": {
        title: "Technology",
        slug: "technology",
        desc: "Engineering robust, scalable software solutions built on the bleeding edge of modern tech.",
        subServices: [
            {
                name: "AI & Machine Learning",
                slug: "ai-ml",
                desc: "Integrating predictive models, generative AI APIs, and automation into your platform architecture.",
                chooseUs: ["Custom Model Fine-tuning", "Vector Database Setup", "Optimized Inference Speed", "Automated Decision Pipelines"],
                deliverables: ["Predictive Analytics APIs", "LLM Integration Middleware", "Model Training Architecture"],
                image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "DevOps Consulting",
                slug: "devops",
                desc: "Automating deployment pipelines, containerization, and monitoring networks for zero downtime.",
                chooseUs: ["Infrastructure as Code (IaC)", "Secure CI/CD Pipelines", "Container Orchestration (K8s)", "Real-time Alert Monitors"],
                deliverables: ["Terraform Setup Scripts", "CI/CD Pipeline Configurations", "Cluster Monitoring Dashboards"],
                image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Data & Analytics",
                slug: "data-analytics",
                desc: "Building scalable data pipelines and warehousing setups to extract business intelligence.",
                chooseUs: ["Real-time Stream Pipelines", "Scalable Warehouse Schema", "ETL Process Optimization", "Compliant Privacy Protocols"],
                deliverables: ["Data Warehouse Schemas", "ETL Pipeline Scripts", "BI Reporting Integration Docs"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Web Development",
                slug: "web-development",
                desc: "Developing fast, responsive web systems using Next.js, React, and modular serverless backends.",
                chooseUs: ["Server-Side Rendering (SSR)", "Lighthouse Core Web Vitals", "API-first Architecture", "State Management Rigor"],
                deliverables: ["Clean React/Next.js Codebase", "Headless CMS Integrations", "REST/GraphQL API Docs"],
                image: "https://images.unsplash.com/photo-1547658719-da2b8116c1d0?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Mobile App Development",
                slug: "mobile-app",
                desc: "Building high-performance native iOS/Android or cross-platform mobile apps.",
                chooseUs: ["Native Interface Speed", "Offline Data Sync Support", "App Store Compliance Guard", "Modular Feature Extensions"],
                deliverables: ["Native App Build Files", "App Store Submission Packages", "API Synchronization Layer"],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "E-commerce",
                slug: "ecommerce",
                desc: "Constructing scalable Shopify, WooCommerce, or bespoke headless e-commerce frameworks.",
                chooseUs: ["High-traffic Checkout Security", "Multi-payment Gateway Bind", "Inventory Sync Systems", "High Core Vitals SEO Performance"],
                deliverables: ["Digital Storefront Setup", "Custom Checkout Extension", "CMS Product Manager Suite"],
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Quality Assurance & Testing",
                slug: "qa-testing",
                desc: "Employing exhaustive automated and manual testing methodologies to protect your release.",
                chooseUs: ["High Automated Code Coverage", "Comprehensive E2E Tests", "Cross-browser Support Check", "Vulnerability Pentesting"],
                deliverables: ["Automated Test Scripts", "Detailed QA Audit Reports", "Performance Test Benchmarks"],
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Cloud Services",
                slug: "cloud-services",
                desc: "Architecting cloud migrations, auto-scaling environments, and serverless backends.",
                chooseUs: ["Multi-region Redundancy", "Optimized Billing Control", "Zero-downtime Deployments", "Auto-scaling Threshold Setup"],
                deliverables: ["Cloud Architecture Diagrams", "Provisioning Setup Scripts", "Backup/Recovery Policy Protocols"],
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Cyber Security",
                slug: "cyber-security",
                desc: "Securing network access controls, conducting code penetration, and setting up encryption layers.",
                chooseUs: ["Advanced Threat Mitigation", "Penetration Testing Rigor", "Data Encryption at Rest", "Regulatory Compliance Guard"],
                deliverables: ["Security Penetration Reports", "Access Policy Definitions", "Incident Action Plan Setup"],
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"
            }
        ],
        process: [
            {
                step: "01",
                title: "Architecture Planning",
                desc: "We analyze technical dependencies and design robust database schemas, class relationships, and network scaling rules prior to building.",
                details: "Database Schemas | Network Planning | Tech Stack Selection",
                image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "02",
                title: "Sprint Development",
                desc: "Our engineering squad develops logic blocks in modular sprints, committing code with comprehensive automated tests.",
                details: "Modular Coding | CI/CD Integration | Unit Testing",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "03",
                title: "Launch & Monitoring",
                desc: "We migrate server code to cloud environments and monitor system uptime and error logs for smooth operational scaling.",
                details: "Server Migration | Live Log Auditing | Scaling Rule Triggers",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
            }
        ]
    },
    "digital-marketing": {
        title: "Digital Marketing",
        slug: "digital-marketing",
        desc: "Data-driven, high-performance campaigns engineered to maximize reach and drive conversions.",
        subServices: [
            {
                name: "Search Engine Optimisation",
                slug: "seo",
                desc: "Improving site indexing, keywords targeting, and backlink authority to grow organic traffic.",
                chooseUs: ["Technical Page Speed Audits", "Topic Cluster Architectures", "High-authority Link Profiles", "Local Search Dominance Strategy"],
                deliverables: ["SEO Keyword Focus Matrix", "Technical Audit Checklist", "Backlink Strategy Plans"],
                image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Social Media Management",
                slug: "social-media",
                desc: "Building digital social communities, content calendars, and running organic brand engagement.",
                chooseUs: ["Custom Social Graphics", "Cohesive Content Calendaring", "Interactive Community Dialogues", "Performance Analytics Review"],
                deliverables: ["Monthly Content Calendars", "Social Media Graphics Templates", "Campaign Engagement Reports"],
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Performance Marketing",
                slug: "performance-marketing",
                desc: "Designing and scaling paid ad campaigns on Google Search, Meta Ads, and LinkedIn.",
                chooseUs: ["ROAS-focused Optimization", "Ad Copy Dynamic Variants", "Audience Retargeting Frameworks", "Conversion Tracker Integrity"],
                deliverables: ["Ad Account Architecture Setup", "Creative Ad Copy Swipes", "Live Campaign Performance Dashboards"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Content Marketing",
                slug: "content-marketing",
                desc: "Writing high-value blog posts, newsletters, and lead magnets that educate and convert readers.",
                chooseUs: ["High-intent Educational Copy", "Lead Magnet Optimization", "Consistent Brand Voice Alignment", "Repurposable Content Framework"],
                deliverables: ["Blog Articles & Newsletter Swipes", "Premium Lead Magnet PDFs", "Editorial Strategy Timelines"],
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Marketing Automation",
                slug: "marketing-automation",
                desc: "Setting up drip email automations, customer segment tracking, and lead-scoring software.",
                chooseUs: ["Automated Nurture Triggers", "Dynamic Segment Splitting", "Email Delivery Reputation Guard", "CRM Synchronization Workflows"],
                deliverables: ["Email Sequence Workflows", "CRM Lead Stage Blueprints", "Subscriber Sign-up Form Layouts"],
                image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Analytics",
                slug: "analytics",
                desc: "Setting up comprehensive web analytics dashboards to track user attribution and multi-touch conversions.",
                chooseUs: ["GA4 Custom Event Setup", "Multi-touch Attribution Models", "Data-driven Budget Reallocation", "Privacy-first Cookieless Tracking"],
                deliverables: ["Custom Google Analytics Setups", "Attribution Flow Diagrams", "Monthly ROI Tracking Systems"],
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
            }
        ],
        process: [
            {
                step: "01",
                title: "Campaign Audit",
                desc: "We analyze target conversions, audit track pixels setup, and identify past campaign leakage points to shape budgeting plans.",
                details: "Pixel Auditing | Conversion Tracking | Historical Analysis",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "02",
                title: "Placement Execution",
                desc: "Our copywriters and campaign builders design and deploy targeted media assets and bidding thresholds across network placements.",
                details: "Bidding Settings | Creative Execution | Campaign Launch",
                image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop"
            },
            {
                step: "03",
                title: "Optimization Sprints",
                desc: "We analyze ROI performance, dynamically shift ad spending, and run conversion rate testing for continuous scaling.",
                details: "ROAS Calculations | Budget Optimization | A/B Experiments",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
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
                desc: "Our professional approach can transform your offerings into visual masterpieces. Using high-end lighting, styling, and 4K cinematography, we capture every detail with precision. From \"hero shots\" for e-commerce to dynamic lifestyle videos, we create high-conversion assets that elevate your brand's perceived value.",
                chooseUs: ["High-End Studio Lighting", "4K Cinematography", "Hero Shot Composition", "High-Conversion Asset Creation"],
                deliverables: ["4K RAW Product Videos", "Hero Shot Photography", "E-Commerce Ready Visuals"],
                image: "https://images.unsplash.com/photo-1452697620382-f6543ead73b5?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "E-Commerce & Catalog Photography",
                slug: "ecommerce-catalog-photography",
                desc: "We deliver high-quality, conversion-focused visuals that elevate product presentation and strengthen brand identity. From concept development and styling to professional shooting and post-production, Exmedia ensures every image highlights product details, enhances customer trust, and drives online sales across websites, marketplaces, and social media platforms.",
                chooseUs: ["Conversion-Focused Framing", "Consistent Catalog Styling", "Marketplace-Ready Outputs", "Brand Identity Alignment"],
                deliverables: ["White-Background Product Shots", "Catalog-Ready Image Sets", "Platform-Optimised Assets"],
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Lifestyle & Contextual Imagery",
                slug: "lifestyle-contextual-imagery",
                desc: "That brings brands to life through authentic storytelling and real-world settings. We create visually compelling content that connects emotionally with audiences, enhances brand perception, and drives engagement. Our creative approach ensures every image reflects your brand identity while delivering impactful advertising results across platforms.",
                chooseUs: ["Authentic Storytelling Concepts", "Real-World Setting Curation", "Emotional Brand Connection", "Platform-Optimised Lifestyle Shots"],
                deliverables: ["Lifestyle Campaign Images", "Contextual Usage Shots", "Social-Ready Content Packs"],
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "Short-Form Video & Social Reels",
                slug: "short-form-video-social-reels",
                desc: "Perfect brand feeling Short-Form Video & Social Reels service transforms your brand into a viral-ready experience. We produce 15–30 second high-impact clips, optimized for TikTok and Instagram. By blending trending audio, cinematic transitions, and strategic hooks, we ensure your message \"stops the scroll\" and drives massive organic engagement.",
                chooseUs: ["Viral-Ready Hook Structure", "Trending Audio Integration", "Cinematic Transitions", "TikTok & Instagram Optimization"],
                deliverables: ["15–30s Social Reels", "Platform-Specific Edits", "Captioned Video Variants"],
                image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop"
            },
            {
                name: "360° Product Spins & Stop-Motion",
                slug: "360-product-spins-stop-motion",
                desc: "We delivers dynamic 360° Product Spins and engaging stop-motion visuals that elevate brand storytelling and product presentation. We create immersive, detail-focused content that captures attention, enhances customer experience, and boosts conversion rates. Our creative execution helps brands showcase products interactively, making advertising more compelling, memorable, and performance-driven across digital platforms.",
                chooseUs: ["360° Interactive Spin Rigs", "Frame-by-Frame Stop-Motion", "Detail-Focused Macro Capture", "Immersive Digital Presentation"],
                deliverables: ["360° Spin Video Files", "Stop-Motion GIFs & MP4s", "Interactive Embed-Ready Assets"],
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
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
