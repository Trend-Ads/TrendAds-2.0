"use client";

import React, { useState } from "react";

interface ServiceItem {
  id: string;
  category: string;
  icon: string;
  title: string;
  metric: string;
  desc: string;
  tags: string[];
}

const AGENCY_SERVICES: ServiceItem[] = [
  {
    id: "marketing",
    category: "Digital Marketing",
    icon: "📈",
    title: "Omnichannel Growth & SEO",
    metric: "+320% Traffic",
    desc: "Data-driven SEO strategies, viral distribution, email automation, and conversion funnels that drive sustainable pipeline.",
    tags: ["SEO & Content", "Email Automation", "KOL Outreach", "CRO Testing"],
  },
  {
    id: "web-dev",
    category: "Web Development",
    icon: "💻",
    title: "Next-Gen Web & Apps",
    metric: "99+ Lighthouse",
    desc: "Bespoke Next.js platforms, interactive WebGL experiences, headless e-commerce, and high-converting landing pages.",
    tags: ["Next.js & React", "Headless Shopify", "SaaS Platforms", "Figma to Code"],
  },
  {
    id: "ads",
    category: "Paid Ads",
    icon: "🎯",
    title: "High-ROAS Ad Scaling",
    metric: "4.8x Avg ROAS",
    desc: "High-volume creative iteration and algorithmic media buying across Meta, Google Search/PMax, TikTok, and YouTube.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "UGC Creative"],
  },
  {
    id: "branding",
    category: "Branding & Identity",
    icon: "✨",
    title: "Brand Systems & 3D",
    metric: "Award-Winning",
    desc: "Comprehensive brand strategy, iconic visual design, typographic systems, 3D motion assets, and digital brand guidelines.",
    tags: ["Brand Guidelines", "Visual Identity", "3D Motion", "Packaging"],
  },
];

const CASE_STUDIES = [
  {
    client: "Hyperion Audio",
    service: "Paid Ads Scaling",
    result: "+410% Sales Surge",
    tag: "Meta & TikTok",
    emoji: "🎧",
  },
  {
    client: "Nova Cloud SaaS",
    service: "Web Platform & UI",
    result: "3.8x Conversion",
    tag: "Next.js App",
    emoji: "⚡",
  },
  {
    client: "Veloce Luxury",
    service: "Brand Identity",
    result: "Global Rollout",
    tag: "Full Rebrand",
    emoji: "💎",
  },
];

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

export default function AboutSection() {
  // Phone State
  const [activeTab, setActiveTab] = useState<"home" | "services" | "campaigns" | "analytics" | "chat">("home");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    { sender: "bot", text: "Hey! Welcome to Trend Ads. What service are you looking to scale?" },
  ]);

  // Filter services by category and search
  const filteredServices = AGENCY_SERVICES.filter((serv) => {
    const matchesCat = activeCategory === "all" || serv.id === activeCategory;
    const matchesSearch =
      serv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      serv.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      serv.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleSendChat = (text: string) => {
    setChatMessages((prev) => [...prev, { sender: "user", text }]);
    setTimeout(() => {
      let reply = "Awesome! Our strategy team will analyze your project and prepare a tailored growth roadmap.";
      if (text.toLowerCase().includes("ads")) {
        reply = "Our performance team typically achieves 4x–7x ROAS within the first 60 days. Let's audit your ad account!";
      } else if (text.toLowerCase().includes("web")) {
        reply = "We craft blazingly fast Next.js sites with 99+ Lighthouse scores and bespoke animations!";
      } else if (text.toLowerCase().includes("brand")) {
        reply = "We develop complete visual identities, 3D asset libraries, and brand guidelines that stand out.";
      }
      setChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ── Main #2373F4 Card ── */}
        <div className="bg-gradient-to-br from-[#2373F4] to-[#185ed1] rounded-[44px] px-8 sm:px-12 lg:px-16 py-14 lg:py-20 flex flex-col lg:flex-row items-center justify-between relative mt-16 lg:mt-24 shadow-[0_24px_60px_-12px_rgba(35,115,244,0.4)] min-h-[460px]">
          {/* Left Column: About Us */}
          <div className="w-full lg:w-[32%] text-white z-10 mb-14 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-white">
              About us
            </h2>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base font-normal mb-8 max-w-md">
              At Trend Ads, we empower forward-thinking brands with high-impact digital marketing,
              cutting-edge web development, high-converting paid ad campaigns, and distinct brand identity systems
              that drive exponential business growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-[#2373F4] font-bold text-sm px-7 py-3.5 rounded-xl shadow-md hover:bg-slate-50 hover:shadow-lg transition-all duration-200"
            >
              Contact us
            </a>
          </div>

          {/* Center Column: Interactive Fully Working Phone Mockup (overlapping) */}
          <div className="w-full lg:w-[36%] flex justify-center z-20 my-8 lg:my-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
            <div className="w-[316px] h-[648px] bg-[#14161a] rounded-[50px] p-[9px] shadow-[0_32px_80px_rgba(0,0,0,0.5)] relative border-[3px] border-[#2e323b] flex flex-col select-none">
              {/* Phone Screen Container */}
              <div className="w-full h-full bg-[#f8f9fb] rounded-[42px] overflow-hidden flex flex-col relative text-slate-800">
                {/* ── Status Bar & Interactive Dynamic Island ── */}
                <div className="pt-2.5 px-6 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-900 z-30 bg-[#f8f9fb]">
                  <span>9:41</span>

                  {/* Clickable Dynamic Island */}
                  <div
                    onClick={() => setIslandExpanded((prev) => !prev)}
                    className={`cursor-pointer bg-black text-white rounded-full flex items-center justify-between px-2.5 transition-all duration-300 ${
                      islandExpanded ? "w-48 h-7 shadow-lg" : "w-24 h-[18px]"
                    }`}
                  >
                    {islandExpanded ? (
                      <div className="flex items-center justify-between w-full text-[9px] font-bold">
                        <span className="text-sky-300">⚡ ROAS Live: 4.8x</span>
                        <span className="text-[8px] bg-white/20 px-1 rounded">Active</span>
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
                <div className="px-5 pt-1.5 pb-2 flex items-center justify-between bg-[#f8f9fb]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2373F4] to-cyan-400 border-2 border-white shadow-sm flex items-center justify-center font-bold text-[11px] text-white">
                      TA
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 leading-tight">Trend Ads Agency</p>
                      <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Global Studio
                        <span className="text-[9px] text-slate-400">▼</span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIslandExpanded((prev) => !prev)}
                    className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center text-slate-600 relative hover:bg-blue-50 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2373F4] absolute top-1.5 right-1.5" />
                  </button>
                </div>

                {/* ── Scrollable Screen Area ── */}
                <div className="flex-1 overflow-y-auto px-4 pb-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* TAB 1: HOME SCREEN */}
                  {activeTab === "home" && (
                    <div className="space-y-3 pt-1">
                      {/* Interactive Search Bar */}
                      <div>
                        <p className="text-[13px] font-bold text-slate-800 mb-1.5">
                          What service do you need?
                        </p>
                        <div className="bg-white rounded-xl h-8 px-2.5 flex items-center gap-2 text-slate-400 text-xs border border-slate-200/70 shadow-2xs">
                          <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Try 'Ads', 'Web', 'SEO', 'Brand'..."
                            className="bg-transparent text-[11px] text-slate-800 placeholder-slate-400 outline-none w-full"
                          />
                          {searchQuery && (
                            <button onClick={() => setSearchQuery("")} className="text-slate-400 hover:text-slate-600 text-xs">
                              ✕
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Interactive Category Buttons */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                            Core Pillars
                          </h3>
                          <button
                            onClick={() => {
                              setActiveCategory("all");
                              setSearchQuery("");
                            }}
                            className={`text-[10px] font-bold ${
                              activeCategory === "all" ? "text-[#2373F4]" : "text-slate-400"
                            }`}
                          >
                            All
                          </button>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {[
                            { id: "marketing", label: "Marketing", icon: "📈" },
                            { id: "web-dev", label: "Web Dev", icon: "💻" },
                            { id: "ads", label: "Paid Ads", icon: "🎯" },
                            { id: "branding", label: "Branding", icon: "✨" },
                          ].map((cat) => {
                            const isSelected = activeCategory === cat.id;
                            return (
                              <button
                                key={cat.id}
                                onClick={() => setActiveCategory(isSelected ? "all" : cat.id)}
                                className={`rounded-xl p-1.5 flex flex-col items-center justify-center transition-all duration-200 border ${
                                  isSelected
                                    ? "bg-[#2373F4] text-white border-[#2373F4] shadow-sm scale-[1.02]"
                                    : "bg-white text-slate-700 border-slate-100 hover:border-blue-200 shadow-2xs"
                                }`}
                              >
                                <span className="text-base mb-0.5">{cat.icon}</span>
                                <span className={`text-[8.5px] font-bold truncate leading-tight ${isSelected ? "text-white" : "text-slate-700"}`}>
                                  {cat.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Interactive Promo / Strategy Card */}
                      <div className="bg-gradient-to-br from-[#ffcb74] to-[#f9a825] rounded-2xl p-3 text-slate-900 shadow-2xs relative overflow-hidden">
                        <div className="relative z-10">
                          <span className="text-[8px] font-black uppercase tracking-wider bg-black/10 px-1.5 py-0.5 rounded text-amber-950 inline-block mb-1">
                            #ScaleToday
                          </span>
                          <h4 className="text-[12px] font-extrabold leading-tight mb-2">
                            Ready to 3x your pipeline with high-ROAS ads?
                          </h4>
                          <button
                            onClick={() => setShowBookModal(true)}
                            className="bg-black text-white text-[9px] font-bold px-3 py-1 rounded-lg hover:bg-slate-900 transition-transform active:scale-95 shadow-xs"
                          >
                            Book Strategy Call
                          </button>
                        </div>
                        <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-white/20 rounded-full blur-xs pointer-events-none" />
                      </div>

                      {/* Featured Agency Services List */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                            Active Deliverables
                          </h3>
                          <span className="text-[9px] text-slate-400 font-medium">
                            {filteredServices.length} offerings
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          {filteredServices.map((service) => (
                            <div
                              key={service.id}
                              onClick={() => setActiveTab("services")}
                              className="bg-white p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 transition-all cursor-pointer shadow-2xs group flex items-start justify-between gap-2"
                            >
                              <div className="flex items-start gap-2 min-w-0">
                                <span className="text-xl bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                                  {service.icon}
                                </span>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <h4 className="text-[11px] font-bold text-slate-800 truncate group-hover:text-[#2373F4] transition-colors">
                                      {service.title}
                                    </h4>
                                  </div>
                                  <p className="text-[9px] text-slate-500 line-clamp-1 mt-0.5">
                                    {service.desc}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[8.5px] font-extrabold text-[#2373F4] bg-blue-50 px-1.5 py-0.5 rounded shrink-0">
                                {service.metric}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Real Case Studies Preview */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                            Proven Results
                          </h3>
                          <button
                            onClick={() => setActiveTab("campaigns")}
                            className="text-[10px] font-semibold text-[#2373F4]"
                          >
                            View all
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {CASE_STUDIES.slice(0, 2).map((cs) => (
                            <div
                              key={cs.client}
                              onClick={() => setActiveTab("campaigns")}
                              className="bg-white p-2 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 cursor-pointer"
                            >
                              <div className="flex items-center gap-1 mb-1">
                                <span className="text-sm">{cs.emoji}</span>
                                <span className="text-[10px] font-bold text-slate-800 truncate">
                                  {cs.client}
                                </span>
                              </div>
                              <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded block text-center">
                                {cs.result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: SERVICES DIRECTORY */}
                  {activeTab === "services" && (
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-extrabold text-slate-900 uppercase">
                          Our Agency Stack
                        </h3>
                        <span className="text-[9px] bg-blue-100 text-[#2373F4] font-bold px-1.5 py-0.5 rounded-full">
                          4 Core Disciplines
                        </span>
                      </div>
                      {AGENCY_SERVICES.map((serv) => (
                        <div
                          key={serv.id}
                          className="bg-white rounded-xl p-3 border border-slate-100 shadow-2xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xl">{serv.icon}</span>
                            <span className="text-[9px] font-black text-[#2373F4] bg-blue-50 px-2 py-0.5 rounded-full">
                              {serv.metric}
                            </span>
                          </div>
                          <h4 className="text-[11px] font-bold text-slate-900">{serv.title}</h4>
                          <p className="text-[9.5px] text-slate-600 leading-snug">{serv.desc}</p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {serv.tags.map((t) => (
                              <span
                                key={t}
                                className="text-[8px] bg-slate-50 text-slate-700 px-1.5 py-0.5 rounded border border-slate-100 font-medium"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 3: CAMPAIGNS & CASE STUDIES */}
                  {activeTab === "campaigns" && (
                    <div className="space-y-2.5 pt-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-extrabold text-slate-900 uppercase">
                          Live Case Studies
                        </h3>
                        <span className="text-[9px] text-emerald-600 font-bold">Verified Metrics</span>
                      </div>
                      {CASE_STUDIES.map((cs) => (
                        <div
                          key={cs.client}
                          className="bg-white rounded-xl p-3 border border-slate-100 shadow-2xs space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-base">{cs.emoji}</span>
                              <div>
                                <h4 className="text-[11px] font-bold text-slate-900">{cs.client}</h4>
                                <p className="text-[8.5px] text-slate-400">{cs.service}</p>
                              </div>
                            </div>
                            <span className="text-[9px] font-black text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
                              {cs.result}
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#2373F4] to-emerald-500 w-[85%]" />
                          </div>
                          <div className="flex justify-between text-[8px] text-slate-500 font-medium">
                            <span>Channel: {cs.tag}</span>
                            <span className="text-[#2373F4] font-bold">Target Exceeded</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 4: LIVE ANALYTICS */}
                  {activeTab === "analytics" && (
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-extrabold text-slate-900 uppercase">
                          Agency Benchmarks
                        </h3>
                        <span className="text-[9px] font-bold text-[#2373F4]">Live Dashboard</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                          <span className="text-[8.5px] font-semibold text-slate-400 uppercase block">
                            Average ROAS
                          </span>
                          <span className="text-lg font-black text-slate-900 block mt-0.5">4.8x</span>
                          <span className="text-[8px] font-bold text-emerald-600">▲ +14% vs avg</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                          <span className="text-[8.5px] font-semibold text-slate-400 uppercase block">
                            Revenue Steered
                          </span>
                          <span className="text-lg font-black text-slate-900 block mt-0.5">$18.4M</span>
                          <span className="text-[8px] font-bold text-emerald-600">▲ Verified 2025</span>
                        </div>
                      </div>

                      {/* Mini Performance Graph */}
                      <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-slate-800">
                            Ad Spend Efficiency
                          </span>
                          <span className="text-[9px] font-bold text-[#2373F4]">Q1–Q4 Growth</span>
                        </div>
                        <div className="h-16 flex items-end gap-2 justify-between pt-2 px-1">
                          {[35, 55, 70, 92, 115].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                style={{ height: `${(h / 115) * 44}px` }}
                                className="w-full rounded-t-sm bg-gradient-to-t from-blue-400 to-[#2373F4]"
                              />
                              <span className="text-[7.5px] text-slate-400">M{i + 1}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: INTERACTIVE STRATEGY CHAT */}
                  {activeTab === "chat" && (
                    <div className="space-y-2 pt-1 flex flex-col h-full">
                      <div className="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] font-bold text-slate-900">
                            Strategy Director
                          </span>
                        </div>
                        <span className="text-[8.5px] text-slate-400">Online now</span>
                      </div>

                      <div className="space-y-2 py-1 min-h-[220px]">
                        {chatMessages.map((msg, i) => (
                          <div
                            key={i}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[85%] text-[9.5px] p-2 rounded-xl leading-relaxed ${
                                msg.sender === "user"
                                  ? "bg-[#2373F4] text-white rounded-br-xs"
                                  : "bg-white text-slate-800 border border-slate-100 rounded-bl-xs shadow-2xs"
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Chat Suggestion Pills */}
                      <div className="pt-2 border-t border-slate-200/50">
                        <p className="text-[8px] font-semibold text-slate-400 mb-1">Quick Inquire:</p>
                        <div className="flex flex-wrap gap-1">
                          {["Scale Paid Ads", "Build Next.js Web", "Full Brand Identity"].map((prompt) => (
                            <button
                              key={prompt}
                              onClick={() => handleSendChat(prompt)}
                              className="text-[8px] bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded-full font-bold hover:bg-blue-50 hover:text-[#2373F4] hover:border-blue-200 transition-colors"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Booking Confirmation Modal inside Phone ── */}
                {showBookModal && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-4 text-center shadow-xl space-y-2 w-full max-w-[240px]">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg mx-auto">
                        ✓
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">Strategy Call Reserved!</h4>
                      <p className="text-[9.5px] text-slate-500 leading-snug">
                        A Trend Ads growth strategist will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setShowBookModal(false)}
                        className="w-full bg-[#2373F4] text-white font-bold text-[10px] py-1.5 rounded-lg shadow-xs"
                      >
                        Back to App
                      </button>
                    </div>
                  </div>
                )}

                {/* ── Bottom Interactive 5-Tab Navigation ── */}
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur-md border-t border-slate-200/60 px-3 flex items-center justify-between text-slate-400 rounded-b-[42px] z-30">
                  {/* Tab 1: Home */}
                  <button
                    onClick={() => setActiveTab("home")}
                    className={`flex flex-col items-center transition-colors ${
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
                    onClick={() => setActiveTab("services")}
                    className={`flex flex-col items-center transition-colors ${
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
                    onClick={() => setActiveTab("campaigns")}
                    className={`flex flex-col items-center transition-colors ${
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
                    onClick={() => setActiveTab("analytics")}
                    className={`flex flex-col items-center transition-colors ${
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
                    onClick={() => setActiveTab("chat")}
                    className={`flex flex-col items-center transition-colors relative ${
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

          {/* Right Column: Key Benefits / Agency Offerings */}
          <div className="w-full lg:w-[32%] text-white z-10 flex flex-col gap-8 lg:gap-10 lg:pl-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl leading-snug text-white">
                Data-driven digital <br className="hidden sm:inline" />
                marketing & paid ads
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl leading-snug text-white">
                Next.js web apps & <br className="hidden sm:inline" />
                creative engineering
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl leading-snug text-white">
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
