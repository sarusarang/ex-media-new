// ─── Deliverables Data ────────────────────────────────────────────────────────
// To add a new category: push a new object to `deliverableCategories`.
// To add a new item:     push a new object into the `items` array of its category.
// ──────────────────────────────────────────────────────────────────────────────

export interface DeliverableItem {
  title: string;
  description: string;
  keyDeliverables: string[];
}

export interface DeliverableCategory {
  id: string;
  slug: string;         // used for filter tabs
  label: string;        // short pill label
  accentColor: string;  // hex – used for icon tint & borders
  icon: string;         // lucide icon name (used by the component map)
  items: DeliverableItem[];
}

// ─── BRANDING ─────────────────────────────────────────────────────────────────
const brandingCategory: DeliverableCategory = {
  id: "branding",
  slug: "branding",
  label: "Branding",
  accentColor: "#D32F2F",
  icon: "Palette",
  items: [
    {
      title: "Brand Strategy & Positioning Document",
      description:
        "Comprehensive strategic document defining brand vision, mission, values, positioning, target audience, competitive advantage, and long-term growth direction.",
      keyDeliverables: [
        "Brand Vision & Mission",
        "Core Values",
        "Market Positioning",
        "Growth Direction",
      ],
    },
    {
      title: "Brand Identity Design System",
      description:
        "A unified visual framework with logos, colors, typography, and design elements ensuring consistent brand recognition across every touchpoint.",
      keyDeliverables: [
        "Logo & Brand Elements",
        "Visual Language",
        "Identity Framework",
      ],
    },
    {
      title: "Logo Design & Brand Mark Development",
      description:
        "Distinctive logos and brand marks that represent business identity, enhance recognition, communicate values, and establish a memorable market presence.",
      keyDeliverables: [
        "Primary Logo",
        "Logo Variations",
        "Usage Concepts",
        "Brand Symbols",
      ],
    },
    {
      title: "Brand Guidelines / Style Guide",
      description:
        "Defines visual standards, logo usage, colors, typography, and communication rules to maintain consistent brand identity across all platforms.",
      keyDeliverables: [
        "Logo Usage Rules",
        "Color Standards",
        "Typography",
        "Imagery & Communication Style",
      ],
    },
    {
      title: "Visual Identity & Creative Assets",
      description:
        "Impactful visual identity assets including colors, typography, icons, graphics, and design elements that strengthen brand consistency and recognition.",
      keyDeliverables: [
        "Brand Colors",
        "Fonts & Icons",
        "Patterns",
        "Supporting Graphic Elements",
      ],
    },
    {
      title: "Corporate Branding Materials",
      description:
        "Professional corporate branding materials including stationery, presentations, templates, and business assets that enhance credibility and maintain brand consistency.",
      keyDeliverables: [
        "Business Cards",
        "Letterheads & Envelopes",
        "Presentations",
        "Corporate Templates",
      ],
    },
    {
      title: "Marketing & Promotional Design Assets",
      description:
        "Impactful marketing assets including brochures, flyers, advertisements, and promotional creatives that enhance brand visibility and customer communication.",
      keyDeliverables: [
        "Brochures & Flyers",
        "Posters",
        "Advertisements",
        "Campaign Creatives",
      ],
    },
    {
      title: "Digital Branding Package",
      description:
        "Cohesive online brand assets, enhancing digital presence through visuals, templates, content styles, and platform-specific branding solutions.",
      keyDeliverables: [
        "Website Visuals",
        "Social Media Templates",
        "Digital Banners",
        "Online Brand Assets",
      ],
    },
    {
      title: "Social Media Branding Kit",
      description:
        "Consistent digital identities with templates, visuals, guidelines, and assets for impactful online brand communication.",
      keyDeliverables: [
        "Profile Designs",
        "Cover Images",
        "Post Templates",
        "Reels Style & Content Guidelines",
      ],
    },
    {
      title: "Packaging & Product Branding Design",
      description:
        "Attractive packaging solutions that enhance product appeal, communicate brand value, and improve customer recognition across markets.",
      keyDeliverables: [
        "Product Packaging",
        "Labels",
        "Retail Visuals",
        "Brand Presentation Systems",
      ],
    },
    {
      title: "Brand Communication Framework",
      description:
        "Defines messaging, tone, storytelling, and communication strategies to ensure consistent, meaningful brand interactions across all customer touchpoints.",
      keyDeliverables: [
        "Brand Messaging",
        "Taglines",
        "Tone Of Voice",
        "Customer Communication Strategy",
      ],
    },
    {
      title: "Brand Growth & Implementation Roadmap",
      description:
        "Strategic direction, execution plans, marketing initiatives, and measurable steps to build sustainable brand growth and market success.",
      keyDeliverables: [
        "Brand Launch Plan",
        "Marketing Direction",
        "Long-Term Brand Development Strategy",
      ],
    },
  ],
};

// ─── EXPERIENCE DESIGN ────────────────────────────────────────────────────────
const experienceCategory: DeliverableCategory = {
  id: "experience",
  slug: "experience",
  label: "Experience Design",
  accentColor: "#7B1FA2",
  icon: "Layers",
  items: [
    {
      title: "Customer Journey Mapping",
      description:
        "Maps every customer interaction, identifying touchpoints, behaviors, and opportunities to optimize experiences, improve satisfaction, and increase conversions.",
      keyDeliverables: [
        "Visual Touchpoint Mapping",
        "Behavioral Analysis",
        "Experience Improvement Opportunities",
      ],
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Interactive wireframes and prototypes to visualize user journeys, validate concepts, improve usability, and streamline efficient digital product development.",
      keyDeliverables: [
        "Interactive Wireframes",
        "Concept Validation Prototypes",
      ],
    },
    {
      title: "Digital Product Design System",
      description:
        "Scalable digital design systems with reusable components, typography, colors, and UI standards, ensuring consistency across digital products.",
      keyDeliverables: [
        "Reusable UI Components",
        "Design Standards",
        "Icons & Typography",
        "Interface Guidelines",
      ],
    },
    {
      title: "E-Commerce Experience Design",
      description:
        "Conversion-focused e-commerce experiences with intuitive navigation, seamless shopping journeys, optimized checkout processes, and user-centered interfaces that increase sales.",
      keyDeliverables: [
        "User-Centric Shopping Journey",
        "Conversion-Focused Interface",
        "Optimized Checkout Experience",
        "Mobile-Responsive Design",
      ],
    },
    {
      title: "Interactive Brand Experience Design",
      description:
        "Immersive interactive brand experiences that engage audiences, strengthen emotional connections, enhance customer journeys, and increase lasting brand loyalty.",
      keyDeliverables: [
        "Interactive Brand Storytelling",
        "Immersive User Engagement",
        "Cross-Platform Brand Experiences",
        "Customer Engagement Optimization",
      ],
    },
    {
      title: "Landing Page & Conversion Design",
      description:
        "High-converting landing pages with compelling visuals, clear messaging, optimized layouts, and strategic calls-to-action that maximize conversions.",
      keyDeliverables: [
        "High-Converting Landing Pages",
        "Strategic CTA Placement",
        "Lead Capture & Form Optimization",
        "A/B Testing Ready Designs",
      ],
    },
    {
      title: "Content Experience Design",
      description:
        "Engaging content experiences through strategic layouts, visual storytelling, intuitive structure, and user-focused presentation that improve readability and engagement.",
      keyDeliverables: [
        "User-Focused Content Layouts",
        "Visual Content Storytelling",
        "Information Architecture Optimization",
        "Readability & Accessibility Enhancement",
      ],
    },
    {
      title: "Motion & Interactive Design",
      description:
        "Engaging motion and interactive designs with animations, transitions, micro-interactions, and dynamic visuals that enhance user engagement and experiences.",
      keyDeliverables: [
        "Motion Graphics & UI Animations",
        "Interactive UI Elements",
        "Micro-Interactions & Visual Feedback",
        "Animated Brand & Digital Experiences",
      ],
    },
  ],
};

// ─── PHOTOGRAPHY & VIDEOGRAPHY ────────────────────────────────────────────────
const photographyCategory: DeliverableCategory = {
  id: "photography",
  slug: "photography",
  label: "Photography & Video",
  accentColor: "#1565C0",
  icon: "Camera",
  items: [
    {
      title: "Product Photography",
      description:
        "Premium product photography that highlights quality, features, and craftsmanship, enhancing brand appeal, customer confidence, and purchase decisions.",
      keyDeliverables: [
        "High-Resolution Product Photography",
        "White Background Product Images",
        "Creative Product Showcase Photography",
        "E-Commerce Ready Images",
        "Detail & Close-Up Shots",
        "Professionally Edited Image Library",
      ],
    },
    {
      title: "Commercial Brand Photography",
      description:
        "Professional commercial brand photography showcasing products, people, workplaces, and brand identity to strengthen credibility and marketing impact.",
      keyDeliverables: [
        "Corporate Brand Photography",
        "Team & Executive Portraits",
        "Workplace & Infrastructure Photography",
        "Brand Campaign Photography",
        "Marketing & Advertising Visuals",
        "Professionally Retouched Image Library",
      ],
    },
    {
      title: "E-Commerce & Catalog Photography",
      description:
        "High-quality e-commerce and catalog photography that enhances product presentation, improves online visibility, and increases customer purchase confidence.",
      keyDeliverables: [
        "E-Commerce Product Photography",
        "White Background Product Images",
        "Catalog & Brochure Photography",
        "Marketplace-Optimized Images",
        "Image Retouching & Enhancement",
        "High-Resolution Image Library",
      ],
    },
    {
      title: "Lifestyle & Contextual Photography",
      description:
        "Lifestyle and contextual photography showcasing products in authentic environments, creating emotional connections and enhancing brand storytelling.",
      keyDeliverables: [
        "Lifestyle Product Photography",
        "Contextual Brand Visuals",
        "Creative Concept-Based Shoots",
        "Environmental Product Photography",
        "Social Media Lifestyle Content",
        "Professionally Edited Lifestyle Collection",
      ],
    },
    {
      title: "Corporate & Industrial Videography",
      description:
        "Professional corporate and industrial videos that showcase business operations, manufacturing excellence, infrastructure, and brand credibility through compelling visual storytelling.",
      keyDeliverables: [
        "Corporate Profile Videos",
        "Industrial & Manufacturing Films",
        "Factory & Facility Showcase Videos",
        "Executive & Team Interview Videos",
        "Corporate Event Coverage",
        "Professionally Edited Brand Films",
      ],
    },
    {
      title: "Product Promotional Videos",
      description:
        "Compelling product promotional videos highlighting features, benefits, and real-world applications to increase engagement, trust, and customer conversions.",
      keyDeliverables: [
        "Product Launch Videos",
        "Product Demonstration Videos",
        "Commercial Advertisement Videos",
        "Feature & Benefit Showcase Videos",
        "E-Commerce Product Videos",
        "Professionally Edited Promotional Video Assets",
      ],
    },
    {
      title: "Short-Form Videos & Social Reels",
      description:
        "Engaging short-form videos and social reels that maximize audience reach, increase engagement, and strengthen brand visibility across platforms.",
      keyDeliverables: [
        "Instagram Reels Production",
        "YouTube Shorts & Facebook Reels",
        "Product Showcase Reels",
        "Promotional & Campaign Videos",
        "Trend-Based Creative Video Content",
        "Optimized Vertical Video Assets",
      ],
    },
  ],
};

// ─── DIGITAL MARKETING ────────────────────────────────────────────────────────
const digitalMarketingCategory: DeliverableCategory = {
  id: "digital-marketing",
  slug: "digital-marketing",
  label: "Digital Marketing",
  accentColor: "#2E7D32",
  icon: "TrendingUp",
  items: [
    {
      title: "Digital Marketing Strategy & Planning",
      description:
        "Data-driven digital marketing strategies that accelerate growth, engagement, visibility, and measurable business success.",
      keyDeliverables: [
        "Comprehensive Digital Marketing Strategy",
        "Target Audience & Market Analysis",
        "Multi-Channel Campaign Planning",
        "Marketing Budget & Media Allocation",
        "KPI & Performance Measurement Framework",
        "Digital Growth Roadmap",
      ],
    },
    {
      title: "Social Media Management",
      description:
        "Strategic social media campaigns driving engagement, brand growth, audience loyalty, and measurable business results.",
      keyDeliverables: [
        "Social Media Strategy & Content Plan",
        "Monthly Content Calendar",
        "Creative Posts, Reels & Stories",
        "Community Engagement & Response Management",
        "Platform Performance Analytics Report",
        "Social Media Growth & Optimization Strategy",
      ],
    },
    {
      title: "Social Media Content Creation",
      description:
        "Engaging social content that strengthens brand visibility, audience engagement, and consistent digital communication.",
      keyDeliverables: [
        "Monthly Social Media Content Calendar",
        "Creative Post & Carousel Designs",
        "Reels, Shorts & Motion Graphics",
        "Platform-Specific Copywriting & Captions",
        "Branded Visual Templates & Creatives",
        "Content Performance Review & Optimization",
      ],
    },
    {
      title: "Performance Marketing Campaigns",
      description:
        "Performance-driven advertising campaigns that maximize leads, conversions, return on investment, and measurable business growth.",
      keyDeliverables: [
        "Google Ads Campaign Management",
        "Meta (Facebook & Instagram) Advertising",
        "Lead Generation Campaigns",
        "Conversion Tracking & Optimization",
        "Audience Targeting & Retargeting",
        "Campaign Performance & ROI Reports",
      ],
    },
    {
      title: "Search Engine Optimisation (SEO)",
      description:
        "Improves online visibility through strategic SEO practices, increasing organic rankings, website traffic, leads, and long-term growth.",
      keyDeliverables: [
        "Comprehensive SEO Audit Report",
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Improvements",
        "Content Optimization & Link Building",
        "SEO Performance & Ranking Reports",
      ],
    },
    {
      title: "Search Engine Marketing (SEM)",
      description:
        "Targeted search advertising campaigns that drive qualified traffic, increase visibility, generate leads, and maximize conversions.",
      keyDeliverables: [
        "Google Search Ads Campaign Setup",
        "Keyword Research & Bid Strategy",
        "Search Ad Copy Creation",
        "Audience Targeting & Optimization",
        "Conversion Tracking & Performance Monitoring",
        "Campaign Analytics & ROI Reports",
      ],
    },
    {
      title: "Content Marketing",
      description:
        "Strategic content that attracts audiences, builds trust, strengthens brands, and drives meaningful customer engagement.",
      keyDeliverables: [
        "Content Marketing Strategy",
        "Blog & Article Creation",
        "Website Content Development",
        "Social Media Content Planning",
        "SEO-Optimized Content Assets",
        "Content Performance Analysis & Reports",
      ],
    },
    {
      title: "Marketing Automation & CRM Integration",
      description:
        "Automates marketing workflows and CRM processes to nurture leads, improve engagement, and accelerate business growth.",
      keyDeliverables: [
        "Marketing Automation Strategy",
        "CRM Setup & Integration",
        "Lead Nurturing Workflows",
        "Email & WhatsApp Automation",
        "Customer Journey Automation",
        "Performance Tracking & Analytics Reports",
      ],
    },
    {
      title: "Email & WhatsApp Marketing",
      description:
        "Targeted email and WhatsApp campaigns that enhance customer engagement, retention, communication, and conversions.",
      keyDeliverables: [
        "Email Marketing Campaign Strategy",
        "WhatsApp Business Campaign Setup",
        "Customer Segmentation & Targeting",
        "Promotional Message Templates",
        "Automated Follow-Up Campaigns",
        "Campaign Performance Analytics & Reports",
      ],
    },
    {
      title: "Influencer & Online Campaign Management",
      description:
        "Manages influencer partnerships and digital campaigns to expand brand reach, engagement, credibility, and online visibility.",
      keyDeliverables: [
        "Influencer Identification & Collaboration",
        "Campaign Strategy & Planning",
        "Influencer Content Coordination",
        "Social Media Campaign Execution",
        "Performance Tracking & Engagement Analysis",
        "Campaign Impact & ROI Reports",
      ],
    },
    {
      title: "Digital Analytics & Performance Reporting",
      description:
        "Transforms digital data into actionable insights through analytics, tracking performance, optimizing campaigns, and improving business outcomes.",
      keyDeliverables: [
        "Digital Performance Dashboard",
        "Website & Campaign Analytics",
        "Audience Behavior Insights",
        "Conversion & ROI Tracking",
        "Monthly Performance Reports",
        "Optimization Recommendations & Growth Strategy",
      ],
    },
    {
      title: "Online Reputation & Brand Growth Management",
      description:
        "Strengthens digital reputation through monitoring, engagement strategies, and growth solutions that build trust and brand value.",
      keyDeliverables: [
        "Online Reputation Audit",
        "Brand Sentiment Monitoring",
        "Customer Review Management",
        "Digital Presence Optimization",
        "Reputation Management Strategy",
        "Brand Growth Performance Reports",
      ],
    },
  ],
};

// ─── MASTER EXPORT ────────────────────────────────────────────────────────────
export const deliverableCategories: DeliverableCategory[] = [
  brandingCategory,
  experienceCategory,
  photographyCategory,
  digitalMarketingCategory,
];
