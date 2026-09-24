"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  metric: string;
  desc: string;
  tags: string[];
  image: string;
}

const AGENCY_SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    category: "Web Engineering",
    title: "Website Development",
    metric: "99+ Lighthouse",
    desc: "Bespoke Next.js platforms, interactive WebGL experiences, and high-converting landing pages.",
    tags: ["Next.js & React", "Headless Shopify", "Figma to Code", "Fast WebGL"],
    image: "/services/web-showcase.jpg",
  },
  {
    id: "app-dev",
    category: "Mobile Systems",
    title: "Mobile App Development",
    metric: "iOS & Android",
    desc: "Cross-platform React Native and native mobile applications with smooth 60fps animations.",
    tags: ["React Native", "iOS & Android", "App Store Scale", "Offline First"],
    image: "/services/app-showcase.jpg",
  },
  {
    id: "marketing",
    category: "Digital Marketing",
    title: "Digital Marketing",
    metric: "+340% Pipeline",
    desc: "High-ROAS paid media across Meta & Google Search/PMax, viral SEO, and automated funnels.",
    tags: ["Meta Ads", "Google Ads", "Viral SEO", "Email Automation"],
    image: "/services/marketing-showcase.jpg",
  },
  {
    id: "branding",
    category: "Creative Identity",
    title: "Branding & Identity",
    metric: "Award-Winning",
    desc: "Comprehensive brand strategy, iconic visual design, typographic systems, and high-impact content creation.",
    tags: ["Visual Identity", "Content Creation", "Brand Guidelines", "Design Tokens"],
    image: "/services/branding-showcase.jpg",
  },
  {
    id: "digital-growth",
    category: "Full Scale",
    title: "Complete Digital Growth",
    metric: "4.8x Avg ROAS",
    desc: "End-to-end acquisition, full-funnel CRO testing, customer retention loops, and revenue scaling.",
    tags: ["Full-Funnel CRO", "A/B Testing", "Retention Loops", "KOL Outreach"],
    image: "/services/marketing-showcase.jpg",
  },
  {
    id: "software-dev",
    category: "Cloud Engineering",
    title: "Software Development",
    metric: "Enterprise Grade",
    desc: "Scalable cloud infrastructures, custom SaaS architectures, secure database backends, and APIs.",
    tags: ["Custom SaaS", "Cloud Backends", "API Systems", "High Security"],
    image: "/services/web-showcase.jpg",
  },
];

const CASE_STUDIES = [
  {
    client: "Hyperion Audio",
    category: "ads",
    service: "Paid Ads Scaling",
    result: "+410% Sales Surge",
    tag: "Meta & TikTok",
    image: "/services/marketing-showcase.jpg",
  },
  {
    client: "Nova Cloud SaaS",
    category: "web",
    service: "Web Platform & UI",
    result: "3.8x Conversion",
    tag: "Next.js App",
    image: "/services/web-showcase.jpg",
  },
  {
    client: "Veloce Luxury",
    category: "brand",
    service: "Brand Identity",
    result: "Global Rollout",
    tag: "Full Rebrand",
    image: "/services/branding-showcase.jpg",
  },
  {
    client: "Aura Health",
    category: "app",
    service: "Mobile iOS / Android",
    result: "180k+ Downloads",
    tag: "React Native",
    image: "/services/app-showcase.jpg",
  },
];

interface PredefinedQA {
  id: string;
  category: string;
  question: string;
  agentReply: string;
  metricBadge: string;
  actionText: string;
}

const PREDEFINED_QUESTIONS: PredefinedQA[] = [
  {
    id: "roas-scaling",
    category: "Paid Media",
    question: "What ROAS can we realistically expect?",
    agentReply:
      "Our performance team typically achieves 4.5x–7.2x ROAS within the first 60 days. We deploy dynamic creative testing, hyper-targeted custom audiences, and algorithmic bid caps across Meta and Google.",
    metricBadge: "4.8x Avg ROAS",
    actionText: "Request Free Ad Audit",
  },
  {
    id: "nextjs-web",
    category: "Engineering",
    question: "How fast can you build a Next.js web platform?",
    agentReply:
      "Full custom builds launch in 3–5 weeks. You get 99+ Lighthouse performance, interactive WebGL animations, headless CMS, and conversion-optimized architecture.",
    metricBadge: "99+ Lighthouse",
    actionText: "Explore Tech Stack",
  },
  {
    id: "growth-package",
    category: "Full Scale",
    question: "What does Complete Digital Growth include?",
    agentReply:
      "It is our flagship 360° growth engine: Paid media scaling across Meta & Google, conversion rate optimization (CRO) A/B testing, viral SEO funnels, and automated retention loops.",
    metricBadge: "+340% Pipeline",
    actionText: "Book Growth Call",
  },
  {
    id: "brand-revamp",
    category: "Branding",
    question: "Can you do a complete rebrand & design system?",
    agentReply:
      "Absolutely. We create complete typographic hierarchies, 3D motion assets, luxury color palettes, and extensive design tokens prepared for digital and physical rollouts.",
    metricBadge: "Award Winning",
    actionText: "View Brand Book",
  },
  {
    id: "timeline-start",
    category: "Kickoff",
    question: "How soon can our project start?",
    agentReply:
      "We can initiate onboarding within 24 hours of our discovery briefing. Your dedicated strategist and design lead will present your sprint plan in 48 hours.",
    metricBadge: "24h Kickoff",
    actionText: "Reserve Slot Now",
  },
];

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  metricBadge?: string;
  actionText?: string;
}

const PARTNER_LOGOS = [
  {
    id: "crystal",
    name: "CRYSTAL",
    sub: "creative gems",
    isLower: false,
    icon: (
      <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 2 8.5 5.5 22 18.5 22 22 8.5 12 2" opacity="0.85" />
      </svg>
    ),
  },
  {
    id: "supreme",
    name: "SUPREME",
    sub: "creative letters",
    isLower: false,
    icon: (
      <div className="w-7 h-7 bg-slate-800 rounded-md flex items-center justify-center text-white font-black text-sm italic">
        S
      </div>
    ),
  },
  {
    id: "business",
    name: "BUSINESS",
    sub: "commercial property",
    isLower: false,
    icon: (
      <div className="w-7 h-7 rounded-full border-2 border-slate-700 flex items-center justify-center">
        <div className="w-3 h-3 bg-slate-700 rounded-xs transform rotate-45" />
      </div>
    ),
  },
  {
    id: "greenlab",
    name: "greenlab",
    sub: "biotechnology",
    isLower: true,
    icon: (
      <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a1 1 0 0 1 1 1v3.1a8 8 0 1 1-2 0V3a1 1 0 0 1 1-1z" opacity="0.75" />
      </svg>
    ),
  },
  {
    id: "butterfly",
    name: "butterfly",
    sub: "creative beauty",
    isLower: true,
    icon: (
      <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4c-1.5-2-4-2.5-6-1-2.5 2-2 5.5 0 8 1 1.5 3 2.5 6 3 3-.5 5-1.5 6-3 2-2.5 2.5-6 0-8-2-1.5-4.5-1-6 1z" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: "birdwings",
    name: "birdwings",
    sub: "creative design",
    isLower: true,
    icon: (
      <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 5c-5 0-9 4-11 8-1.5-3-4-5-8-6 2 4 4 7 8 9 4-1 8-5 11-11z" />
      </svg>
    ),
  },
];

// Quality SVG Icons for Services (replacing emojis)
function ServiceIcon({ id, className = "w-4 h-4" }: { id: string; className?: string }) {
  switch (id) {
    case "web-dev":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "app-dev":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "marketing":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "branding":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case "digital-growth":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "software-dev":
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
  }
}

// Quality SVG Icons for Case Studies (replacing emojis)
function CaseStudyIcon({ category, className = "w-3.5 h-3.5" }: { category: string; className?: string }) {
  switch (category) {
    case "ads":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      );
    case "web":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "brand":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case "app":
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
  }
}

export default function AboutSection() {
  // Phone Navigation & State
  const [activeTab, setActiveTab] = useState<"home" | "services" | "campaigns" | "analytics" | "chat">("home");
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);

  // Auto-working display state for services
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Tab 3: Case Studies Filter
  const [workFilter, setWorkFilter] = useState<"all" | "ads" | "web" | "brand">("all");

  // Tab 4: Interactive ROAS Simulator State
  const [selectedBudget, setSelectedBudget] = useState(5000);

  // Tab 5: Real Agent Chat State
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [chatInputText, setChatInputText] = useState("");
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "init-1",
      sender: "bot",
      text: "Hello! I'm Sarah Jenkins, Senior Growth Lead at Trend Ads. How can we accelerate your pipeline today?",
      time: "9:41 AM",
    },
  ]);

  // Crisp Web Audio API synthesizer for message tick/pop sound
  const playAudioTick = (type: "send" | "receive") => {
    if (!soundEnabled) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "send") {
        // Subtle crisp popping tick (outgoing send pop)
        osc.type = "sine";
        osc.frequency.setValueAtTime(820, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1350, ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.04);
      } else {
        // Modern dual-tone incoming message chime (incoming message tick)
        osc.type = "triangle";
        osc.frequency.setValueAtTime(659.25, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.09, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.11);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.11);
      }
    } catch {
      // AudioContext unavailable or blocked on current device
    }
  };

  // Scroll chat into view on message change
  useEffect(() => {
    if (activeTab === "chat") {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isTyping, activeTab]);

  // Auto-cycle through services every 3.2 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveServiceIdx((prev) => (prev + 1) % AGENCY_SERVICES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Handle Asking Predefined Questions
  const handleAskPredefinedQuestion = (qa: PredefinedQA) => {
    playAudioTick("send");
    const now = new Date();
    const timeStr = `${now.getHours() % 12 || 12}:${now.getMinutes().toString().padStart(2, "0")} ${
      now.getHours() >= 12 ? "PM" : "AM"
    }`;

    // Add user message
    setChatMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: "user",
        text: qa.question,
        time: timeStr,
      },
    ]);

    setIsTyping(true);

    // Simulate real agent reply with realistic delay
    setTimeout(() => {
      setIsTyping(false);
      playAudioTick("receive");
      setChatMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: qa.agentReply,
          metricBadge: qa.metricBadge,
          actionText: qa.actionText,
          time: timeStr,
        },
      ]);
    }, 750);
  };

  // Handle Custom Typed Chat Input
  const handleSendCustomChat = (text: string) => {
    if (!text.trim()) return;
    playAudioTick("send");
    const now = new Date();
    const timeStr = `${now.getHours() % 12 || 12}:${now.getMinutes().toString().padStart(2, "0")} ${
      now.getHours() >= 12 ? "PM" : "AM"
    }`;

    setChatMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: "user",
        text,
        time: timeStr,
      },
    ]);
    setChatInputText("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      playAudioTick("receive");
      let reply =
        "Thank you! Our growth strategists have received your inquiry and will analyze your project requirements.";
      let badge = "Verified Team";
      let action = "Schedule Call";

      const lower = text.toLowerCase();
      if (lower.includes("ad") || lower.includes("roas") || lower.includes("meta")) {
        reply =
          "We specialize in scaling Meta and Google campaigns with verified 4.8x average ROAS. We can audit your current ad account immediately.";
        badge = "4.8x ROAS Avg";
        action = "Audit Ad Account";
      } else if (lower.includes("web") || lower.includes("next")) {
        reply =
          "Our engineering team builds Next.js applications with 99+ Lighthouse speed, custom motion design, and high-converting checkout flows.";
        badge = "99+ Lighthouse";
        action = "Explore Web Tech";
      } else if (lower.includes("brand") || lower.includes("logo")) {
        reply =
          "We develop iconic visual identities, bespoke typographic hierarchies, and 3D motion systems that make your brand unmistakable.";
        badge = "Award Winning";
        action = "View Brand Portfolio";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: reply,
          metricBadge: badge,
          actionText: action,
          time: timeStr,
        },
      ]);
    }, 750);
  };

  const filteredCaseStudies =
    workFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === workFilter);

  return (
    <section
      id="about-us"
      className="bg-[#faf8f5] py-28 relative overflow-hidden text-slate-900"
    >
      {/* Subtle decorative dot pattern behind the center phone */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(35, 115, 244, 0.25) 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 20%, transparent 85%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* ── Main #2373F4 Card ── */}
        <div className="bg-gradient-to-br from-[#2373F4] to-[#185ed1] rounded-[36px] sm:rounded-[44px] px-5 sm:px-10 lg:px-16 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between relative mt-16 lg:mt-24 shadow-[0_24px_60px_-12px_rgba(35,115,244,0.4)] min-h-[460px]">
          {/* Left Column: About Us */}
          <div className="w-full lg:w-[32%] text-white z-10 mb-10 lg:mb-0">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 sm:mb-5 text-white">
              About us
            </h2>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base font-normal mb-7 max-w-md">
              At Trend Ads, we empower forward-thinking brands with high-impact digital marketing,
              cutting-edge web development, high-converting paid ad campaigns, and distinct brand identity systems
              that drive exponential business growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-[#2373F4] font-bold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-md hover:bg-slate-50 hover:shadow-lg transition-all duration-200"
            >
              Contact us
            </a>
          </div>

          {/* Center Column: Rigid, Responsive Phone Mockup (Locked 100% against mobile tab resize jumps) */}
          <div className="w-full lg:w-[36%] flex justify-center z-20 my-4 lg:my-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 shrink-0">
            <div className="w-[304px] xs:w-[316px] sm:w-[320px] h-[636px] min-h-[636px] max-h-[636px] shrink-0 bg-[#14161a] rounded-[48px] p-[8px] shadow-[0_32px_80px_rgba(0,0,0,0.5)] relative border-[3px] border-[#2e323b] flex flex-col select-none overflow-hidden mx-auto">
              {/* Phone Screen Container: Exact height bounded */}
              <div className="w-full h-full min-h-[614px] max-h-[614px] bg-[#f8f9fb] rounded-[40px] overflow-hidden flex flex-col relative text-slate-800">
                {/* ── Status Bar & Interactive Dynamic Island ── */}
                <div className="h-8 pt-2 px-6 pb-0 flex items-center justify-between text-[11px] font-semibold text-slate-900 z-30 bg-[#f8f9fb] shrink-0">
                  <span>9:41</span>

                  {/* Clickable Dynamic Island with smooth animation */}
                  <div
                    onClick={() => setIslandExpanded((prev) => !prev)}
                    className={`cursor-pointer bg-black text-white rounded-full flex items-center justify-between px-2.5 transition-all duration-300 shadow-md ${
                      islandExpanded ? "w-48 h-7 ring-2 ring-[#2373F4]/50" : "w-24 h-[18px]"
                    }`}
                  >
                    {islandExpanded ? (
                      <div className="flex items-center justify-between w-full text-[9px] font-bold">
                        <span className="text-sky-300">⚡ ROAS: 4.8x Live</span>
                        <span className="text-[8px] bg-white/20 px-1 rounded">Trend Ads</span>
                      </div>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-[#111625] border border-slate-700/50" />
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px]">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
                    </svg>
                    <svg className="w-3.5 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                    </svg>
                  </div>
                </div>

                {/* ── User Header ── */}
                <div className="h-11 px-4 py-1 flex items-center justify-between bg-[#f8f9fb] border-b border-slate-200/50 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2373F4] to-cyan-400 border-2 border-white shadow-xs flex items-center justify-center font-bold text-[10px] text-white shrink-0">
                      TA
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 leading-tight">Trend Ads Agency</p>
                      <p className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Global Studio
                        <span className="text-[8px] text-slate-400">▼</span>
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIslandExpanded((prev) => !prev)}
                    className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center text-slate-600 relative hover:bg-blue-50 transition-colors"
                    title="Toggle Dynamic Island"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2373F4] absolute top-1.5 right-1.5" />
                  </button>
                </div>

                {/* ── Screen Area with locked pixel height (prevents any tab switching jump) ── */}
                <div
                  className={`flex-1 h-[482px] min-h-[482px] max-h-[482px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overscroll-contain ${
                    activeTab === "chat"
                      ? "overflow-hidden px-3 pt-1 pb-14 flex flex-col"
                      : "overflow-y-auto px-3 pb-16 pt-2"
                  }`}
                >
                  <AnimatePresence>
                    {/* TAB 1: AUTO-WORKING SERVICES DISPLAY WITH QUALITY SVG ICONS */}
                    {activeTab === "home" && (
                      <motion.div
                        key="tab-home"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-3"
                      >
                        {/* ── Auto-Working Display Spotlight Banner ── */}
                        <div className="bg-white rounded-2xl p-2.5 border border-slate-200/80 shadow-xs relative overflow-hidden">
                          {/* Auto-play status bar */}
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-[9px] font-semibold tracking-wider text-slate-700 uppercase">
                                Auto Display {isAutoPlaying ? "Active" : "Paused"}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-semibold text-slate-400">
                                0{activeServiceIdx + 1} / 0{AGENCY_SERVICES.length}
                              </span>
                              <button
                                type="button"
                                onClick={() => setIsAutoPlaying((prev) => !prev)}
                                className="w-5 h-5 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                                title={isAutoPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
                              >
                                {isAutoPlaying ? (
                                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                  </svg>
                                ) : (
                                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Featured Service Card (Auto-switching with Image) */}
                          {(() => {
                            const current = AGENCY_SERVICES[activeServiceIdx];
                            return (
                              <div className="space-y-2">
                                {/* Visual Mockup Banner Image */}
                                <div className="relative w-full h-24 rounded-xl overflow-hidden border border-slate-100 shadow-2xs group">
                                  <Image
                                    src={current.image}
                                    alt={current.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="300px"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-black/20 to-transparent flex items-end p-2">
                                    <span className="text-[8px] font-semibold tracking-widest text-white uppercase bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
                                      {current.category}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-start justify-between gap-1.5">
                                  <div className="flex items-center gap-1.5">
                                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2373F4] shrink-0">
                                      <ServiceIcon id={current.id} className="w-4 h-4 text-[#2373F4]" />
                                    </div>
                                    <h4 className="text-[11.5px] font-extrabold text-slate-900 leading-tight">
                                      {current.title}
                                    </h4>
                                  </div>
                                  <span className="text-[7.5px] font-black text-[#2373F4] bg-blue-50 border border-blue-200/60 px-1.5 py-0.5 rounded-full shrink-0">
                                    {current.metric}
                                  </span>
                                </div>

                                <p className="text-[9px] text-slate-600 leading-relaxed line-clamp-2">
                                  {current.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1">
                                  {current.tags.slice(0, 3).map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-[7.5px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                {/* Progress bar countdown */}
                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-1">
                                  <div
                                    key={activeServiceIdx}
                                    className="h-full bg-gradient-to-r from-[#2373F4] to-cyan-400 rounded-full"
                                    style={{
                                      width: "100%",
                                      transition: isAutoPlaying ? "width 3.2s linear" : "none",
                                    }}
                                  />
                                </div>

                                {/* Quick Action row */}
                                <div className="flex items-center justify-between pt-1">
                                  <button
                                    type="button"
                                    onClick={() => setShowBookModal(true)}
                                    className="bg-[#2373F4] text-white text-[9px] font-bold px-2.5 py-1.5 rounded-lg shadow-xs hover:bg-blue-600 transition-colors cursor-pointer"
                                  >
                                    Inquire Service →
                                  </button>
                                  <div className="flex items-center gap-1">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setActiveServiceIdx((prev) =>
                                          prev === 0 ? AGENCY_SERVICES.length - 1 : prev - 1
                                        );
                                      }}
                                      className="w-5 h-5 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                                    >
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                                      </svg>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setActiveServiceIdx((prev) =>
                                          (prev + 1) % AGENCY_SERVICES.length
                                        );
                                      }}
                                      className="w-5 h-5 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                                    >
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })()}
                        </div>

                        {/* ── Capabilities Feed with Quality Icons ── */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5 px-0.5">
                            <h3 className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                              Capabilities Feed
                            </h3>
                            <span className="text-[8px] font-medium text-slate-400">
                              6 Core Offerings
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {AGENCY_SERVICES.map((serv, idx) => {
                              const isActive = idx === activeServiceIdx;
                              return (
                                <div
                                  key={serv.id}
                                  onClick={() => {
                                    setActiveServiceIdx(idx);
                                    setIsAutoPlaying(false);
                                  }}
                                  className={`p-2 rounded-xl transition-all cursor-pointer border flex items-center justify-between gap-2 ${
                                    isActive
                                      ? "bg-blue-50/80 border-[#2373F4] shadow-xs ring-1 ring-[#2373F4]/20"
                                      : "bg-white border-slate-100 hover:border-blue-200 shadow-2xs"
                                  }`}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <div
                                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                        isActive ? "bg-[#2373F4] text-white" : "bg-slate-100 text-[#2373F4]"
                                      }`}
                                    >
                                      <ServiceIcon id={serv.id} className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="min-w-0">
                                      <h4 className={`text-[10px] font-bold truncate leading-tight ${
                                        isActive ? "text-[#2373F4]" : "text-slate-800"
                                      }`}>
                                        {serv.title}
                                      </h4>
                                      <p className="text-[8px] text-slate-400 truncate">
                                        {serv.category}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-1.5 shrink-0">
                                    <span className={`text-[7.5px] font-bold px-1.5 py-0.5 rounded ${
                                      isActive
                                        ? "bg-[#2373F4] text-white"
                                        : "bg-slate-100 text-slate-600"
                                    }`}>
                                      {serv.metric}
                                    </span>
                                    {isActive && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#2373F4] animate-ping" />
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 2: SERVICES DIRECTORY WITH QUALITY SVG ICONS */}
                    {activeTab === "services" && (
                      <motion.div
                        key="tab-services"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-2 pt-0.5"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-[11px] font-extrabold text-slate-900 uppercase">
                            Agency Stack
                          </h3>
                          <span className="text-[8.5px] bg-blue-100 text-[#2373F4] font-bold px-1.5 py-0.5 rounded-full">
                            6 Disciplines
                          </span>
                        </div>
                        {AGENCY_SERVICES.map((serv) => (
                          <div
                            key={serv.id}
                            className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-2xs space-y-2 hover:border-blue-200 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-md bg-blue-50 text-[#2373F4] flex items-center justify-center">
                                  <ServiceIcon id={serv.id} className="w-3.5 h-3.5" />
                                </div>
                                <h4 className="text-[10.5px] font-bold text-slate-900">{serv.title}</h4>
                              </div>
                              <span className="text-[7.5px] font-black text-[#2373F4] bg-blue-50 px-1.5 py-0.5 rounded-full">
                                {serv.metric}
                              </span>
                            </div>

                            {/* Service Image Banner */}
                            <div className="relative w-full h-16 rounded-lg overflow-hidden border border-slate-100">
                              <Image
                                src={serv.image}
                                alt={serv.title}
                                fill
                                className="object-cover"
                                sizes="280px"
                              />
                            </div>

                            <p className="text-[8.5px] text-slate-600 leading-snug">{serv.desc}</p>
                            <div className="flex flex-wrap gap-1">
                              {serv.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[7px] bg-slate-50 text-slate-700 px-1.5 py-0.5 rounded border border-slate-100 font-medium"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* TAB 3: WORK / CASE STUDIES (FILTERABLE WITH QUALITY SVG ICONS) */}
                    {activeTab === "campaigns" && (
                      <motion.div
                        key="tab-campaigns"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-2.5 pt-0.5"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-[11px] font-extrabold text-slate-900 uppercase">
                            Case Studies
                          </h3>
                          <span className="text-[8.5px] text-emerald-600 font-bold">Verified Data</span>
                        </div>

                        {/* Minimalist Interactive Category Filter */}
                        <div className="flex gap-1 overflow-x-auto pb-0.5 [&::-webkit-scrollbar]:hidden">
                          {(["all", "ads", "web", "brand"] as const).map((filter) => (
                            <button
                              key={filter}
                              type="button"
                              onClick={() => setWorkFilter(filter)}
                              className={`text-[8px] font-bold px-2 py-0.5 rounded-full transition-colors shrink-0 uppercase tracking-wider cursor-pointer ${
                                workFilter === filter
                                  ? "bg-[#2373F4] text-white shadow-2xs"
                                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                              }`}
                            >
                              {filter}
                            </button>
                          ))}
                        </div>

                        {filteredCaseStudies.map((cs) => (
                          <div
                            key={cs.client}
                            className="bg-white rounded-xl p-2.5 border border-slate-100 shadow-2xs space-y-2 overflow-hidden hover:border-blue-200 transition-colors"
                          >
                            {/* Project Thumbnail Image */}
                            <div className="relative w-full h-20 rounded-lg overflow-hidden border border-slate-100">
                              <Image
                                src={cs.image}
                                alt={cs.client}
                                fill
                                className="object-cover"
                                sizes="280px"
                              />
                              <div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-md text-white text-[7.5px] font-bold px-1.5 py-0.5 rounded">
                                {cs.tag}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <div className="w-5 h-5 rounded-md bg-blue-50 text-[#2373F4] flex items-center justify-center">
                                  <CaseStudyIcon category={cs.category} className="w-3 h-3 text-[#2373F4]" />
                                </div>
                                <div>
                                  <h4 className="text-[10.5px] font-bold text-slate-900">{cs.client}</h4>
                                  <p className="text-[8px] text-slate-400">{cs.service}</p>
                                </div>
                              </div>
                              <span className="text-[8px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                                {cs.result}
                              </span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#2373F4] to-emerald-500 w-[88%]" />
                            </div>
                            <div className="flex justify-between text-[7.5px] text-slate-500 font-medium">
                              <span>Channel: {cs.tag}</span>
                              <span className="text-[#2373F4] font-bold">Goal Exceeded</span>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* TAB 4: INTERACTIVE ROAS SIMULATOR & ANALYTICS */}
                    {activeTab === "analytics" && (
                      <motion.div
                        key="tab-analytics"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-2.5 pt-0.5"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-[11px] font-extrabold text-slate-900 uppercase">
                            ROAS Simulator
                          </h3>
                          <span className="text-[8px] font-bold text-[#2373F4] bg-blue-50 px-1.5 py-0.5 rounded-full">
                            4.8x Multiplier
                          </span>
                        </div>

                        {/* Interactive Budget Selector */}
                        <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs space-y-2">
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                            Select Monthly Ad Spend:
                          </span>
                          <div className="grid grid-cols-4 gap-1">
                            {[2000, 5000, 10000, 25000].map((amount) => (
                              <button
                                key={amount}
                                type="button"
                                onClick={() => setSelectedBudget(amount)}
                                className={`text-[8px] font-bold py-1 rounded-lg border transition-all cursor-pointer ${
                                  selectedBudget === amount
                                    ? "bg-[#2373F4] text-white border-[#2373F4] shadow-xs"
                                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                                }`}
                              >
                                ${amount >= 1000 ? `${amount / 1000}k` : amount}
                              </button>
                            ))}
                          </div>

                          {/* Calculated Output Card */}
                          <div className="p-2 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-lg border border-blue-100 flex items-center justify-between">
                            <div>
                              <span className="text-[7.5px] text-slate-500 uppercase font-semibold block">
                                Projected Sales
                              </span>
                              <span className="text-sm font-black text-[#2373F4]">
                                ${(selectedBudget * 4.8).toLocaleString()}
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-[7.5px] text-emerald-600 uppercase font-bold block">
                                Net Gain
                              </span>
                              <span className="text-[11px] font-bold text-emerald-600">
                                +${(selectedBudget * 3.8).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Dashboard Image Banner */}
                        <div className="relative w-full h-20 rounded-xl overflow-hidden border border-slate-100 shadow-2xs">
                          <Image
                            src="/services/marketing-showcase.jpg"
                            alt="Ad Performance Analytics"
                            fill
                            className="object-cover"
                            sizes="280px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-2 justify-between">
                            <span className="text-[8px] text-white font-semibold">
                              4.8x Avg Verified ROAS
                            </span>
                            <span className="text-[7.5px] bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded">
                              Live
                            </span>
                          </div>
                        </div>

                        {/* Metric Highlights */}
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-2xs">
                            <span className="text-[8px] font-semibold text-slate-400 block">Avg ROAS</span>
                            <span className="text-base font-black text-slate-900 block">4.8x</span>
                            <span className="text-[7.5px] font-bold text-emerald-600 flex items-center gap-0.5">
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                              +14% vs industry
                            </span>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-2xs">
                            <span className="text-[8px] font-semibold text-slate-400 block">Revenue Steered</span>
                            <span className="text-base font-black text-slate-900 block">$18.4M</span>
                            <span className="text-[7.5px] font-bold text-emerald-600 flex items-center gap-0.5">
                              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                              Verified 2025
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 5: REAL AGENT INTERACTIVE MOTION CHAT (ORGANIZED & PINNED DOCK) */}
                    {activeTab === "chat" && (
                      <motion.div
                        key="tab-chat"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className="flex flex-col h-full min-h-0 justify-between select-text"
                      >
                        {/* Real Agent Profile Header */}
                        <div className="shrink-0 flex items-center justify-between border-b border-slate-200/80 pb-2 mb-1 px-0.5">
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2373F4] to-cyan-400 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-xs">
                                SJ
                              </div>
                              <span className="w-2 h-2 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <h4 className="text-[10.5px] font-extrabold text-slate-900 leading-tight">
                                  Sarah Jenkins
                                </h4>
                                <span className="text-[#2373F4]" title="Verified Growth Lead">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                </span>
                              </div>
                              <p className="text-[7.5px] text-slate-400 leading-none">Senior Growth Lead • Online</p>
                            </div>
                          </div>

                          {/* Header Action Controls */}
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => setShowBookModal(true)}
                              className="text-[7.5px] font-bold text-[#2373F4] bg-blue-50 hover:bg-blue-100 border border-blue-200/80 px-2 py-0.5 rounded-lg transition-colors cursor-pointer"
                            >
                              Book Call
                            </button>
                            <button
                              type="button"
                              onClick={() => setSoundEnabled((prev) => !prev)}
                              className={`p-1 rounded-lg border transition-colors cursor-pointer ${
                                soundEnabled
                                  ? "bg-blue-50 text-[#2373F4] border-blue-200"
                                  : "bg-slate-100 text-slate-400 border-slate-200"
                              }`}
                              title={soundEnabled ? "Message Sound: On" : "Message Sound: Muted"}
                            >
                              {soundEnabled ? (
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                              ) : (
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Dedicated Message Timeline (Smooth single scroll stream) */}
                        <div className="flex-1 min-h-0 overflow-y-auto space-y-2 py-1.5 px-0.5 [&::-webkit-scrollbar]:hidden overscroll-contain">
                          <div className="text-center my-0.5">
                            <span className="text-[7px] bg-slate-200/60 text-slate-500 font-semibold px-2 py-0.5 rounded-full inline-block">
                              Today
                            </span>
                          </div>

                          {chatMessages.map((msg) => (
                            <motion.div
                              key={msg.id}
                              initial={{ opacity: 0, y: 8, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                            >
                              <div
                                className={`max-w-[86%] text-[9px] p-2.5 rounded-2xl leading-relaxed shadow-2xs space-y-1.5 ${
                                  msg.sender === "user"
                                    ? "bg-[#2373F4] text-white rounded-br-xs"
                                    : "bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs"
                                }`}
                              >
                                <p>{msg.text}</p>

                                {/* Actionable Inset Card inside Agent Response */}
                                {msg.sender === "bot" && (msg.metricBadge || msg.actionText) && (
                                  <div className="pt-1 mt-1 border-t border-slate-100 flex items-center justify-between gap-1.5">
                                    {msg.metricBadge && (
                                      <span className="text-[7.5px] font-bold bg-blue-50 text-[#2373F4] border border-blue-200/70 px-1.5 py-0.5 rounded">
                                        {msg.metricBadge}
                                      </span>
                                    )}
                                    {msg.actionText && (
                                      <button
                                        type="button"
                                        onClick={() => setShowBookModal(true)}
                                        className="text-[7.5px] font-bold text-white bg-[#2373F4] hover:bg-blue-600 px-2 py-0.5 rounded shadow-2xs transition-colors cursor-pointer"
                                      >
                                        {msg.actionText} →
                                      </button>
                                    )}
                                  </div>
                                )}
                              </div>

                              {/* Time & Delivery Checkmarks */}
                              <div className="flex items-center gap-1 mt-0.5 px-1">
                                <span className="text-[7px] text-slate-400 font-medium">{msg.time}</span>
                                {msg.sender === "user" && (
                                  <span className="text-[#2373F4] text-[9px] font-bold leading-none">
                                    ✓✓
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          ))}

                          {/* Dynamic Agent Typing Wave */}
                          {isTyping && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-1.5 px-1 pt-0.5"
                            >
                              <div className="bg-white border border-slate-200/80 px-2.5 py-1.5 rounded-xl rounded-tl-xs shadow-2xs flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-[#2373F4] rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-[#2373F4] rounded-full animate-bounce [animation-delay:0.15s]" />
                                <span className="w-1.5 h-1.5 bg-[#2373F4] rounded-full animate-bounce [animation-delay:0.3s]" />
                              </div>
                              <span className="text-[7.5px] text-slate-400 italic">Sarah is typing...</span>
                            </motion.div>
                          )}
                          <div ref={chatBottomRef} />
                        </div>

                        {/* Anchored Bottom Dock: Floating Prompt Pills + Capsule Input */}
                        <div className="shrink-0 pt-1.5 border-t border-slate-200/70 space-y-1.5">
                          {/* Clean Single-Row Prompt Pills */}
                          <div className="flex gap-1 overflow-x-auto pb-0.5 [&::-webkit-scrollbar]:hidden">
                            {PREDEFINED_QUESTIONS.map((qa) => (
                              <button
                                key={qa.id}
                                type="button"
                                onClick={() => handleAskPredefinedQuestion(qa)}
                                className="text-[7.5px] font-semibold bg-white hover:bg-blue-50 text-slate-700 hover:text-[#2373F4] border border-slate-200/90 hover:border-[#2373F4]/50 px-2.5 py-1 rounded-full whitespace-nowrap transition-all shadow-2xs shrink-0 cursor-pointer flex items-center gap-1"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#2373F4]" />
                                {qa.question}
                              </button>
                            ))}
                          </div>

                          {/* Capsule Input Bar */}
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              handleSendCustomChat(chatInputText);
                            }}
                            className="flex items-center bg-white border border-slate-200 rounded-full pl-3 pr-1 py-1 shadow-2xs focus-within:border-[#2373F4] focus-within:ring-1 focus-within:ring-[#2373F4]/30 transition-all"
                          >
                            <input
                              type="text"
                              value={chatInputText}
                              onChange={(e) => setChatInputText(e.target.value)}
                              placeholder="Ask a question..."
                              className="flex-1 bg-transparent text-[9px] text-slate-800 placeholder-slate-400 focus:outline-none"
                            />
                            <button
                              type="submit"
                              disabled={!chatInputText.trim()}
                              className="w-6 h-6 bg-[#2373F4] disabled:opacity-35 text-white rounded-full flex items-center justify-center shadow-xs hover:bg-blue-600 transition-colors cursor-pointer shrink-0"
                              title="Send"
                            >
                              <svg className="w-3 h-3 translate-x-[0.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                            </button>
                          </form>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ── Booking Confirmation Modal inside Phone ── */}
                {showBookModal && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-4 text-center shadow-xl space-y-2 w-full max-w-[240px]">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg mx-auto">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">Strategy Call Reserved!</h4>
                      <p className="text-[9.5px] text-slate-500 leading-snug">
                        A Trend Ads growth strategist will contact you within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowBookModal(false)}
                        className="w-full bg-[#2373F4] text-white font-bold text-[10px] py-1.5 rounded-lg shadow-xs cursor-pointer"
                      >
                        Back to App
                      </button>
                    </div>
                  </div>
                )}

                {/* ── Bottom Interactive 5-Tab Navigation (Permanently locked height and position) ── */}
                <div className="absolute bottom-0 left-0 right-0 h-13 bg-white/95 backdrop-blur-md border-t border-slate-200/60 px-3 flex items-center justify-between text-slate-400 rounded-b-[40px] z-30">
                  {/* Tab 1: Home */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("home")}
                    className={`flex flex-col items-center transition-colors cursor-pointer ${
                      activeTab === "home" ? "text-[#2373F4]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="text-[8px] font-bold mt-0.5">Home</span>
                  </button>

                  {/* Tab 2: Services */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("services")}
                    className={`flex flex-col items-center transition-colors cursor-pointer ${
                      activeTab === "services" ? "text-[#2373F4]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="text-[8px] font-medium mt-0.5">Services</span>
                  </button>

                  {/* Tab 3: Campaigns */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("campaigns")}
                    className={`flex flex-col items-center transition-colors cursor-pointer ${
                      activeTab === "campaigns" ? "text-[#2373F4]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-[8px] font-medium mt-0.5">Work</span>
                  </button>

                  {/* Tab 4: Analytics */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("analytics")}
                    className={`flex flex-col items-center transition-colors cursor-pointer ${
                      activeTab === "analytics" ? "text-[#2373F4]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-[8px] font-medium mt-0.5">ROAS</span>
                  </button>

                  {/* Tab 5: Chat */}
                  <button
                    type="button"
                    onClick={() => setActiveTab("chat")}
                    className={`flex flex-col items-center transition-colors relative cursor-pointer ${
                      activeTab === "chat" ? "text-[#2373F4]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className="text-[8px] font-medium mt-0.5">Chat</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2373F4] absolute -top-0.5 right-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Benefits / Agency Offerings (Single horizontal row on mobile without text labels) */}
          <div className="w-full lg:w-[32%] text-white z-10 flex flex-row justify-center lg:flex-col items-center lg:items-start gap-6 sm:gap-8 lg:gap-10 lg:pl-4 mt-8 lg:mt-0">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm hover:scale-105 transition-transform" title="Data-driven digital marketing & paid ads">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="hidden lg:block font-bold text-lg sm:text-xl leading-snug text-white">
                Data-driven digital <br className="hidden sm:inline" />
                marketing & paid ads
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm hover:scale-105 transition-transform" title="Next.js web apps & creative engineering">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="hidden lg:block font-bold text-lg sm:text-xl leading-snug text-white">
                Next.js web apps & <br className="hidden sm:inline" />
                creative engineering
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm hover:scale-105 transition-transform" title="Brand systems & memorable identity">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="hidden lg:block font-bold text-lg sm:text-xl leading-snug text-white">
                Brand systems & <br className="hidden sm:inline" />
                memorable identity
              </h3>
            </div>
          </div>
        </div>

        {/* ── Partner / Client Brand Logos (Flowing Animated Ribbon) ── */}
        <div className="mt-28 lg:mt-36 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-2">
          <div className="animate-marquee-flow flex items-center gap-14 sm:gap-20 lg:gap-28 pr-14 sm:pr-20 lg:pr-28">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex items-center gap-2.5 shrink-0 opacity-75 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                {logo.icon}
                <div>
                  <span
                    className={`font-black tracking-wider text-slate-800 text-sm sm:text-base block leading-none ${
                      logo.isLower ? "" : "uppercase"
                    }`}
                  >
                    {logo.name}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase block mt-0.5">
                    {logo.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
