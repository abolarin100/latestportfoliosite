export const profile = {
  name: "Jeremiah Atoyebi",
  role: "Software engineer",
  location: "Lagos, Nigeria",
  email: "abolarin100@gmail.com",
  github: "https://github.com/abolarin100",
  linkedin: "https://www.linkedin.com/in/atoyebi-jeremiah",
  site: "https://jeremiah-atoyebi.vercel.app",
  resumeUrl: "/projects/resume.pdf",
  thesis:
    "I build systems that turn solid infrastructure into effortless user experience.",
  summary:
    "Software Engineer with years of experience delivering production grade web and mobile systems across fintech and marketplace domains. Skilled in Java/Spring Boot, Python, React, React Native, and Next.js, with hands-on experience in cloud infrastructure (AWS), RESTful API design, microservice architecture, Docker, and secure payment system implementation — including tokenization, webhook verification, and escrow logic. Experience building AI-powered systems using Python and FastAPI with async endpoints, external API integrations, and responsive handling under concurrent load. Skilled at automating manual engineering workflows with AI tooling and driving team-wide adoption, having increased AI tool usage by 83% through targeted training initiatives. Comfortable working extensively with SQL and Postgres, writing and optimizing complex queries for transaction and audit data. Strong ownership mindset, proactively identifying improvements and leaving codebases in better shape. Passionate about building inclusive, impactful technology that serves underserved communities and drives measurable outcomes.",
};

export const stats = [
  { label: "AI adoption driven, twice", value: "83%" },
  { label: "Fewer regressions after test coverage", value: "30%+" },
  { label: "Years shipping systems", value: "5+" },
  { label: "Production systems shipped", value: "10+" },
];

export type LedgerStatus = "LIVE" | "SHIPPED" | "CLOSED";

export interface Project {
  status: LedgerStatus;
  title: string;
  meta: string;
  description: string;
  links: { label: string; href: string }[];

  image: string;

  frame: "web" | "mobile";

  storeLinks?: { ios: string; android: string };
}

export const projects: Project[] = [
  {
    status: "LIVE",
    title: "FlowAid",
    meta: "Java Spring Boot · React TypeScript · PostgreSQL",
    description:
      "Humanitarian cash-transfer platform: campaign management, recipient enrollment, bulk disbursement, and audit-trailed payment tracking with a cache-aware dashboard.",
    image: "/projects/flowaid.png",
    frame: "web",
    links: [
      { label: "Live demo", href: "https://flow-aid-lac.vercel.app/dashboard" },
      { label: "Source", href: "https://github.com/abolarin100/FlowAid" },
    ],
  },
  {
    status: "LIVE",
    title: "Verve World",
    meta: "React Native · Java Spring Boot · Payments · biometric auth ",
    description:
      "Cross-platform mobile app connecting users to Verve's payment ecosystem across Africa — secure payments APIs, multi-platform card services, real-time transaction flows, hardware-backed biometric authentication, push notifications, and offline transaction support.",
    image: "/projects/verveworld.jpg",
    frame: "mobile",
    links: [],
    storeLinks: {
      ios: " https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/ng/app/verve-world/id1003182034&ved=2ahUKEwjDjKfqse6VAxUWdUEAHbdtCb0QFnoECBcQAQ&usg=AOvVaw1Hf-nAIK4x9gOtPWrhIPlX",

      android:
        "https://play.google.com/store/apps/details?id=com.interswitchng.verve&pcampaignid=web_share",
    },
  },
  {
    status: "LIVE",
    title: "Get Your Work Done Effortlessly (GYWDE) web",
    meta: "React · Redux· Node.js · React Query · webhooks",
    description:
      "End-to-end payment flow for a digital platform that connects individuals with physical and online service providers, skilled professionals and local vendors.",
    image: "/projects/gywdew.png",
    frame: "web",
    links: [{ label: "Website", href: "https://www.gywde.com" }],
  },
  {
    status: "LIVE",
    title: "Get Your Work Done Effortlessly (GYWDE) mobile",
    meta: "ReactNative · Redux · Node.js · webhooks",
    description:
      "End-to-end payment flow for a digital platform that connects individuals with physical and online service providers, skilled professionals and local vendors.",
    image: "/projects/gywde.jpg",
    frame: "mobile",
    links: [],
    storeLinks: {
      ios: "https://apps.apple.com/gb/app/gywde/id6602887701",
      android:
        "https://play.google.com/store/apps/details?id=com.gywd.animation&pcampaignid=web_share",
    },
  },
  {
    status: "LIVE",
    title: "Smart Approaches",
    meta: "React · React Query · webhooks · LMS · payments",
    description:
      "Learning management system for a Tech courses: course creation, enrollment, progress tracking, and secure payment flow with webhook verification.",
    image: "/projects/sawl.png",
    frame: "web",
    links: [{ label: "Website", href: "https://smartapproaches.org" }],
  },
  {
    status: "SHIPPED",
    title: "Multi-bag deliveries",
    meta: "React · Tailwind CSS",
    description:
      "Delivery platform covering user registration, booking management, address handling, package classification, and secure checkout.",
    image: "/projects/mbg.png",
    frame: "web",
    links: [
      { label: "Website", href: "https://multibag-deliveries.vercel.app/" },
    ],
  },
];

export interface Role {
  status: LedgerStatus;
  title: string;
  company: string;
  dates: string;
  location: string;
  points: string[];
}

export const experience: Role[] = [
  {
    status: "LIVE",
    title: "Software engineer",
    company: "Interswitch",
    dates: "01/2025 — present",
    location: "Lagos, Nigeria",
    points: [
      "Built and maintain Verve World, a cross-platform React Native app connecting users to Verve's payment ecosystem across Africa —  APIs, multi-platform card services, real-time transaction flows.",
      "Engineer backend services in Java Spring Boot for the Loyalty Engine rewards platform, reward system, and alias service, across a microservice architecture handling high-throughput transaction processing.",
      "Implemented hardware-backed biometric authentication (fingerprint/face ID) with AES-256 encrypted credential storage, RSA key-pair management, and device-integrity checks against rooted or jailbroken devices.",
      "Introduced AI-assisted automation into engineering workflows — code review, test scaffolding, documentation — cutting time spent on repetitive development tasks team-wide.",
    ],
  },
  {
    status: "CLOSED",
    title: "Software engineer",
    company: "Smart Approaches",
    dates: "03/2023 — 12/2024",
    location: "Remote (Sunderland, UK)",
    points: [
      "Led frontend engineering for GYWDE, a multi-vendor marketplace: React and React Query with SSR, modular components, and efficient cache management.",
      "Designed a secure end-to-end payment flow with idempotent payment requests, webhook-based backend verification, and escrow payout logic.",
      "Drove AI-tool adoption across the engineering team by identifying high-friction manual workflows and rolling out training — 83% team-wide adoption increase.",
      "Built and optimized a React Native + TypeScript mobile app for a consistent cross-platform experience on Android and iOS.",
    ],
  },
  {
    status: "CLOSED",
    title: "Software engineer",
    company: "Techstudio Academy",
    dates: "10/2022 — 2023",
    location: "Remote (Lagos, Nigeria)",
    points: [
      "Architected and deployed full-stack applications integrating React.js frontends with Java Spring Boot backends.",
      "Refactored legacy codebases into reusable, accessible React components — 100% WCAG compliance via semantic HTML and ARIA roles.",
      "Engineered centralized design systems and UI libraries to maintain consistent branding across multi-product interfaces.",
    ],
  },
];

export const stack = {
  Backend: [
    "Java",
    "Spring Boot",
    "Node.js",
    "Python",
    "FastAPI",
    "Microservices",
  ],
  Frontend: [
    "React.js",
    "React Native",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Redux Toolkit",
  ],
  Data: ["PostgreSQL", "MySQL", "MongoDB"],
  Infra: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD", "Serverless"],
  Payments: [
    "Tokenization",
    "Payment gateway integration",
    "Webhooks",
    "Escrow logic",
  ],
};

export const education = [
  {
    degree: "Master of Business Administration",
    school: "Lagos Business School, Pan-Atlantic University",
    dates: "2026 — present",
  },
  {
    degree: "B.Sc. Microbiology",
    school: "Obafemi Awolowo University",
    dates: "2014 — 2020",
  },
];
