import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Portfolio Configuration
export const CONFIG = {
  // Personal Information
  personal: {
    name: "Sandeep Kumar Midde",
    title: "React & React Native Developer",
    avatar: "/sandeepPhoto.jpg",
    email: "sandeepkumarmidde@gmail.com",
    phone: "+91 6304465511",
    location: "Hyderabad, India",
    birthday: "June 9, 2004",

    // Social Links
    social: {
      github: "https://github.com/mskumar010",
      linkedin: "https://linkedin.com/in/sandeepkumarm01",
      twitter: "#", // Not provided
    },

    // Bio
    bio: [
      "I am a results-driven React & React Native Developer with a proven track record in high-stakes environments. My experience includes scaling a Quick Commerce Super App at Dodash (handling real-time logistics) and architecting a Healthcare Verification Platform at Hiscope Enterprises (serving 1,200+ doctors).",
      "I specialize in solving complex engineering challenges—from optimizing sub-200ms text sync latency to eliminating critical camera crashes on specific Android devices. I don't just write code; I build robust, scalable systems that drive business growth and user satisfaction.",
    ],

    // Resume PDF (place your PDF in public folder)
    resumePDF: "/sandeepkumar_RN_Resume_16122025.pdf",
  },

  // EmailJS Configuration (Get these from https://emailjs.com)
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },

  quickConnectMessage:
    "Hi Sandeep, I recently reviewed your portfolio and was impressed by your technical expertise. We are currently looking for talented engineers and I believe your background would be a great fit. I'd love to connect and discuss potential opportunities.",

  // Primary Theme Color (change this to your preferred color)
  primaryColor: "#0ea5e9",

  // What I Do / Services Section
  services: [
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Building scalable cross-platform mobile applications using React Native and Redux Toolkit.",
    },
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Creating responsive and dynamic web interfaces with React.js, TypeScript, and Tailwind CSS.",
    },
    {
      icon: "🚀",
      title: "Backend Systems",
      description:
        "Developing robust REST APIs and real-time services using Node.js, Express.js, and WebSockets.",
    },
    {
      icon: "🗺️",
      title: "Location Services",
      description:
        "Implementing real-time geospatial tracking and mapping features using Google Maps SDK.",
    },
  ],

  // Skills Section
  skills: [
    { name: "React / React Native", level: 95 },
    { name: "TypeScript / JavaScript", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Redux Toolkit", level: 88 },
    { name: "MongoDB / PostgreSQL", level: 80 },
    { name: "Tailwind CSS", level: 92 },
  ],

  techStack: {
    frontend: [
      { name: "React", icon: <SiReact size={18} color="#61DAFB" /> },
      { name: "React Native", icon: <SiReact size={18} color="#61DAFB" /> },
      { name: "TypeScript", icon: <SiTypescript size={18} color="#3178C6" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={18} color="#06B6D4" /> },
      { name: "Redux", icon: <SiRedux size={18} color="#764ABC" /> },
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs size={18} color="#339933" /> },
      {
        name: "Express",
        icon: <SiExpress size={18} className="text-black dark:text-white" />,
      },
      { name: "PostgreSQL", icon: <SiPostgresql size={18} color="#4169E1" /> },
      { name: "MongoDB", icon: <SiMongodb size={18} color="#47A248" /> },
      { name: "Firebase", icon: <SiFirebase size={18} color="#FFCA28" /> },
    ],
    tools: [
      { name: "Git", icon: <SiGit size={18} color="#F05032" /> },
      { name: "Docker", icon: <SiDocker size={18} color="#2496ED" /> },
      { name: "Figma", icon: <SiFigma size={18} color="#F24E1E" /> },
      { name: "VS Code", icon: <VscVscode size={18} color="#007ACC" /> },
    ],
  },
  // Education
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Bharat Institute of Engineering and Technology",
      period: "2021 - 2025",
      description:
        "Focused on software engineering principles, algorithms, and full-stack development.",
    },
  ],

  // Experience
  experience: [
    {
      position: "React Native Developer (Intern)",
      organization: "Dodash",
      period: "Oct 2025 – Dec 2025",
      description:
        "Developed features for a quick commerce super app. Engineered real-time driver tracking with Google Maps & WebSockets. Optimized camera performance and fixed critical SDK integration issues.",
    },
    {
      position: "Software Developer (Intern)",
      organization: "Hiscope Enterprises",
      period: "Sept 2024 – Oct 2025",
      description:
        "Built a healthcare verification platform for 1,200+ doctors. Architected a multi-filter search system (<500ms latency) and developed 40+ reusable UI components.",
    },
  ],

  // Projects/Portfolio
  projects: [
    {
      title: "TEJAS - AI Job Tracker",
      category: "Full Stack",
      image: "/tejas_mockup.png",
      description:
        "Intelligent job application tracker parsing emails via Gmail API & NLP with 89% accuracy.",
      longDescription:
        "Built intelligent job application tracker that auto-parses 200+ emails using Gmail API and NLP algorithms, achieving 89% classification accuracy and eliminating 10+ hours weekly of manual data entry. Engineered OAuth 2.0 authentication flow with automated cron job system and interactive visual dashboard for real-time application status monitoring.",
      tech: [
        "React 19",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Gmail API",
        "NLP",
      ],
      features: [
        "Auto-parses 200+ emails using Gmail API",
        "NLP algorithms with 89% accuracy",
        "OAuth 2.0 authentication",
        "Automated cron jobs",
        "Interactive analytics dashboard",
      ],
      github: "https://github.com/mskumar010/tejas",
      demo: "https://tejasx.vercel.app/",
    },
    {
      title: "Connexta",
      category: "Mobile / Real-time",
      image: "/connexta_mockup.png",
      description:
        "Real-time messaging platform with geospatial friend tracking using WebSockets and Google Maps.",
      longDescription:
        "Developed cross-platform messaging application with one-on-one chat, group threads, and real-time location tracking capabilities. Implemented WebSocket-based architecture for instant message delivery and location updates, achieving 95% code reusability between mobile and web platforms.",
      tech: [
        "React Native",
        "React.js",
        "WebSockets",
        "Express.js",
        "Google Maps SDK",
      ],
      features: [
        "Real-time geospatial tracking",
        "One-on-one and Group Chat",
        "WebSocket-based instant delivery",
        "95% Code Reusability (Web/Mobile)",
      ],
      github: "https://github.com/mskumar010/connexta",
      demo: "https://connextra.vercel.app/",
    },
    {
      title: "Quick Text",
      category: "Web Tool",
      image: "/quicktext_mockup.png",
      description:
        "Instant cross-device text sync tool with QR-based linking and sub-200ms latency.",
      longDescription:
        "Created text-sharing tool with Express.js backend enabling multi-device synchronization with sub-200ms cross-device access latency. Built QR-based secure device linking system supporting 5+ simultaneous active connections per session.",
      tech: ["React.js", "TypeScript", "Express.js", "REST APIs", "Vite"],
      features: [
        "Sub-200ms sync latency",
        "QR-based device linking",
        "Support for 5+ active connections",
        "Secure session management",
      ],
      github: "https://github.com/mskumar010/quick-text",
      demo: "https://quick-txt.vercel.app/",
    },
  ],

  // Achievements
  achievements: [
    {
      title: "Performance Optimization",
      organization: "Dodash",
      date: "2025",
      description:
        "Eliminated 100% of camera crashes on specific devices by diagnosing RAM exhaustion and migrating camera libraries.",
    },
    {
      title: "System Architecture",
      organization: "Hiscope Enterprises",
      date: "2024 - 2025",
      description:
        "Architected multi-filter doctor search maintaining sub-500ms query response times on 10,000+ records.",
    },
    {
      title: "Critical Bug Fix",
      organization: "Dodash",
      date: "2025",
      description:
        "Resolved critical month-long Freshchat SDK integration failure by fixing handshake authentication issues.",
    },
  ],

  // Certifications
  certifications: [
    {
      name: "Java Foundations",
      issuer: "Oracle Certified",
      date: "Sept 2023",
      credential: "Exam 1Z0-811",
    },
    {
      name: "Supervised Machine Learning",
      issuer: "Coursera (Stanford)",
      date: "2024",
      credential: "Certification",
    },
  ],

  academicProjects: [],
};
