"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

interface ServiceItem {
  iconId: string;
  title: string;
  tag: string;
}

interface ServiceCard {
  id: string;
  num: number;
  badge: string;
  title: string;
  stat: string;
  headline: string;
  categoryEn: string;
  bgColor: string;
  numColor: string;
  services: ServiceItem[];
  tags: string[];
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "web-mobile",
    num: 1,
    badge: "01 · ENGINEERING",
    title: "WEB & MOBILE",
    stat: "99+ LIGHTHOUSE SPEED",
    headline: "High-performance web and mobile products built to scale.",
    categoryEn: "WEB & MOBILE",
    bgColor: "bg-[#010736]",
    numColor: "text-[#101e6b]",
    services: [
      {
        iconId: "web",
        title: "Web Platforms",
        tag: "Next.js & Shopify",
      },
      {
        iconId: "mobile",
        title: "Mobile Apps",
        tag: "iOS & Android",
      },
    ],
    tags: ["Next.js", "React Native", "WebGL"],
  },
  {
    id: "marketing",
    num: 2,
    badge: "02 · ACQUISITION",
    title: "GROWTH & ADS",
    stat: "4.8X VERIFIED ROAS",
    headline: "High-yield paid media and viral search that drive revenue.",
    categoryEn: "PAID MEDIA & SEO",
    bgColor: "bg-[#040e48]",
    numColor: "text-[#182d8c]",
    services: [
      {
        iconId: "ads",
        title: "Paid Media",
        tag: "Meta & Google Ads",
      },
      {
        iconId: "seo",
        title: "Viral Search",
        tag: "SEO & Retention",
      },
    ],
    tags: ["Meta Ads", "Google PMax", "Viral SEO"],
  },
  {
    id: "brand",
    num: 3,
    badge: "03 · CREATIVE",
    title: "BRAND & CONTENT",
    stat: "AWARD-WINNING CREATIVE",
    headline: "Iconic visual identities, storytelling, and high-impact content creation.",
    categoryEn: "BRANDING & CONTENT",
    bgColor: "bg-[#091759]",
    numColor: "text-[#223fa8]",
    services: [
      {
        iconId: "brand",
        title: "Brand Systems",
        tag: "Identity & Visual DNA",
      },
      {
        iconId: "content",
        title: "Content Creation",
        tag: "Reels, Video & Creative Copy",
      },
    ],
    tags: ["Brand Identity", "Content Creation", "Storytelling"],
  },
  {
    id: "software-growth",
    num: 4,
    badge: "04 · SYSTEMS",
    title: "SOFTWARE & SCALE",
    stat: "+42% CONVERSION UPLIFT",
    headline: "Enterprise cloud software and rapid conversion rate growth.",
    categoryEn: "CLOUD & CRO",
    bgColor: "bg-[#0f226b]",
    numColor: "text-[#3055cb]",
    services: [
      {
        iconId: "cloud",
        title: "Cloud Software",
        tag: "APIs & Custom SaaS",
      },
      {
        iconId: "growth",
        title: "Digital Growth",
        tag: "Full-Funnel CRO",
      },
    ],
    tags: ["Custom SaaS", "Cloud APIs", "CRO Labs"],
  },
];

// Quality SVG Icons
function SubsectionIcon({ id, className = "w-4 h-4" }: { id: string; className?: string }) {
  switch (id) {
    case "web":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "mobile":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "ads":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "seo":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "brand":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case "3d":
    case "content":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "growth":
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}

export default function ServicesHorizontalSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [progressVal, setProgressVal] = useState(0);

  // Framer Motion scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track active step based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgressVal(latest);
    if (latest < 0.22) {
      setActiveStep(1);
    } else if (latest < 0.46) {
      setActiveStep(2);
    } else if (latest < 0.70) {
      setActiveStep(3);
    } else {
      setActiveStep(4);
    }
  });

  // ── DYNAMIC ENTRANCES ──
  const card1X = useTransform(scrollYProgress, [0.00, 0.16], ["35vw", "0vw"]);
  const card1Rotate = useTransform(scrollYProgress, [0.00, 0.16], [2.5, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.00, 0.16], [0.96, 1]);

  const card2X = useTransform(scrollYProgress, [0.20, 0.42], ["100vw", "0vw"]);
  const card2Rotate = useTransform(scrollYProgress, [0.20, 0.42], [3.5, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.20, 0.42], [0.94, 1]);

  const card3X = useTransform(scrollYProgress, [0.45, 0.67], ["100vw", "0vw"]);
  const card3Rotate = useTransform(scrollYProgress, [0.45, 0.67], [3.5, 0]);
  const card3Scale = useTransform(scrollYProgress, [0.45, 0.67], [0.94, 1]);

  const card4X = useTransform(scrollYProgress, [0.70, 0.92], ["100vw", "0vw"]);
  const card4Rotate = useTransform(scrollYProgress, [0.70, 0.92], [3.5, 0]);
  const card4Scale = useTransform(scrollYProgress, [0.70, 0.92], [0.94, 1]);

  // ── MOBILE HEADER OPACITY (Hides covered card titles on mobile/smaller screens with zero height changes) ──
  const title1MobileOpacity = useTransform(scrollYProgress, [0, 0.20, 0.28, 1], [1, 1, 0, 0]);
  const title1MobileVisibility = useTransform(title1MobileOpacity, (v) => (v <= 0.01 ? "hidden" : "visible"));

  const title2MobileOpacity = useTransform(scrollYProgress, [0, 0.45, 0.53, 1], [1, 1, 0, 0]);
  const title2MobileVisibility = useTransform(title2MobileOpacity, (v) => (v <= 0.01 ? "hidden" : "visible"));

  const title3MobileOpacity = useTransform(scrollYProgress, [0, 0.70, 0.78, 1], [1, 1, 0, 0]);
  const title3MobileVisibility = useTransform(title3MobileOpacity, (v) => (v <= 0.01 ? "hidden" : "visible"));

  // Smooth jump to card
  const jumpToCard = (num: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = scrollTop + rect.top;
    const totalScroll = container.offsetHeight - window.innerHeight;

    const targets = [0.10, 0.35, 0.60, 0.92];
    const targetProgress = targets[num - 1] ?? 0;

    window.scrollTo({
      top: containerTop + targetProgress * totalScroll,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative h-[380vh] bg-[#faf8f5] text-slate-900 border-t border-slate-200/80"
    >
      {/* Sticky pinned viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 md:py-8 select-none">
        {/* Subtle background dot pattern using #010736 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(#010736 0.75px, transparent 0.75px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* ── TOP HEADER / CONTROLS ── */}
        <div className="relative z-50 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#010736]/10 border border-[#010736]/20 text-[#010736] text-xs font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#010736] animate-pulse" />
              CAPABILITIES & SERVICES
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#010736]">
              WHAT WE PROVIDE
            </h2>
          </div>

          {/* Quick jump step buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {SERVICE_CARDS.map((c) => {
              const isCurrent = activeStep === c.num;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => jumpToCard(c.num)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border flex items-center gap-1.5 cursor-pointer ${
                    isCurrent
                      ? "bg-[#010736] text-white border-[#010736] shadow-[0_4px_16px_rgba(1,7,54,0.35)] scale-105"
                      : "bg-white text-slate-700 border-slate-300 shadow-sm hover:border-[#010736]/50 hover:text-[#010736]"
                  }`}
                >
                  <span>{c.num}.</span>
                  <span className="hidden sm:inline">
                    {c.num === 1
                      ? "Web & Mobile"
                      : c.num === 2
                      ? "Growth & Ads"
                      : c.num === 3
                      ? "Brand & Content"
                      : "Software"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MAIN HORIZONTAL OVERLAY STAGE ── */}
        <div className="relative z-30 flex-1 flex items-center justify-center w-full max-w-[1400px] mx-auto px-3 sm:px-6 overflow-hidden">
          {/* Centered stage holding the overlapping cards */}
          <div className="relative w-full max-w-[340px] sm:max-w-[620px] md:max-w-[880px] lg:max-w-[1140px] h-[510px] sm:h-[540px] lg:h-[560px] max-h-[76vh] flex items-center mx-auto">
            {SERVICE_CARDS.map((card, idx) => {
              const motionX =
                idx === 0
                  ? card1X
                  : idx === 1
                  ? card2X
                  : idx === 2
                  ? card3X
                  : card4X;

              const motionRotate =
                idx === 0
                  ? card1Rotate
                  : idx === 1
                  ? card2Rotate
                  : idx === 2
                  ? card3Rotate
                  : card4Rotate;

              const motionScale =
                idx === 0
                  ? card1Scale
                  : idx === 1
                  ? card2Scale
                  : idx === 2
                  ? card3Scale
                  : card4Scale;

              const leftOffsetClasses =
                idx === 0
                  ? "left-0"
                  : idx === 1
                  ? "left-[16px] sm:left-[180px] md:left-[220px] lg:left-[260px]"
                  : idx === 2
                  ? "left-[32px] sm:left-[360px] md:left-[440px] lg:left-[520px]"
                  : "left-[48px] sm:left-[540px] md:left-[660px] lg:left-[780px]";

              const mobileTitleOpacity =
                idx === 0
                  ? title1MobileOpacity
                  : idx === 1
                  ? title2MobileOpacity
                  : idx === 2
                  ? title3MobileOpacity
                  : undefined;

              const mobileTitleVisibility =
                idx === 0
                  ? title1MobileVisibility
                  : idx === 1
                  ? title2MobileVisibility
                  : idx === 2
                  ? title3MobileVisibility
                  : undefined;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute top-0 bottom-0 will-change-transform ${leftOffsetClasses}`}
                  style={{
                    x: motionX,
                    rotate: motionRotate,
                    scale: motionScale,
                    zIndex: 10 * (idx + 1),
                  }}
                >
                  <div className="flex flex-col h-full w-[84vw] max-w-[325px] sm:w-[350px] lg:w-[380px] shrink-0">
                    {/* ── Top Label Above Card (Fixed height guarantees zero card jumping) ── */}
                    <div className="mb-2 px-3 h-[52px] flex flex-col justify-end">
                      {/* Mobile / Smaller screens (< lg): hides covered card titles, reveals when scrolling up */}
                      <motion.div
                        style={{
                          opacity: mobileTitleOpacity ?? 1,
                          visibility: mobileTitleVisibility ?? "visible",
                        }}
                        className="lg:hidden"
                      >
                        <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#010736]/70 mb-0.5">
                          {card.badge}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#010736] leading-tight">
                          {card.title}
                        </h3>
                      </motion.div>

                      {/* Desktop screens (lg+): all titles remain visible above their respective fanned columns */}
                      <div className="hidden lg:block">
                        <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#010736]/70 mb-0.5">
                          {card.badge}
                        </p>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#010736] leading-tight">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    {/* ── 100% Solid Card Container (Minimal, Uncongested & Impactful) ── */}
                    <div
                      className={`relative flex-1 rounded-[28px] ${card.bgColor} p-6 sm:p-7 flex flex-col justify-between text-white transition-all duration-300 ${
                        idx > 0
                          ? "shadow-[-35px_0_55px_rgba(1,7,54,0.65),_-15px_0_20px_rgba(1,7,54,0.45)] border-l-2 border-white/40"
                          : "shadow-[0_22px_50px_rgba(1,7,54,0.4),_0_8px_18px_rgba(1,7,54,0.25)] border border-white/25"
                      }`}
                    >
                      {/* ── Giant Number Connected on Left Side ── */}
                      <div
                        className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 pointer-events-none select-none z-30"
                        aria-hidden="true"
                      >
                        <span
                          className={`text-8xl sm:text-9xl lg:text-[145px] font-black leading-none tracking-tighter ${card.numColor} drop-shadow-[0_16px_30px_rgba(1,7,54,0.8)]`}
                          style={{
                            WebkitTextStroke: "3px rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          {card.num}
                        </span>
                      </div>

                      {/* ── Card Content: Clean, Punchy & Airy (Zero Congestion) ── */}
                      <div className="relative z-10 pl-5 sm:pl-7 space-y-6 flex-1 flex flex-col justify-center">
                        {/* Stat Pill */}
                        <div className="inline-flex items-center gap-1.5 self-start bg-white/10 backdrop-blur-xs border border-white/20 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                          {card.stat}
                        </div>

                        {/* Bold Punchy Statement */}
                        <h4 className="text-base sm:text-lg text-white font-black leading-snug tracking-tight">
                          {card.headline}
                        </h4>

                        {/* 2 Core Capabilities (2 Lines, Fully Visible On Any Screen) */}
                        <div className="space-y-2.5">
                          {card.services.map((serv, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex items-start gap-3 bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 rounded-xl px-3.5 py-2.5 transition-colors"
                            >
                              <span className="w-7 h-7 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <SubsectionIcon id={serv.iconId} className="w-3.5 h-3.5" />
                              </span>
                              <div className="flex-1 min-w-0">
                                <span className="block text-xs sm:text-[13px] font-bold text-white tracking-wide leading-snug">
                                  {serv.title}
                                </span>
                                <span className="block text-[10.5px] text-cyan-200/90 font-medium leading-tight mt-0.5">
                                  {serv.tag}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Clean Minimalist Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9.5px] bg-white/10 text-white/85 border border-white/15 px-2.5 py-0.5 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ── Card Footer with CTA ── */}
                      <div className="pt-3 border-t border-white/15 flex items-center justify-between pl-5 sm:pl-7">
                        <span className="text-[10px] uppercase text-white/70 tracking-wider font-semibold">
                          {card.categoryEn}
                        </span>
                        <a
                          href="#contact"
                          className="text-xs font-bold text-white hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer group"
                        >
                          <span>Deploy</span>
                          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── BOTTOM CONTROLS & PROGRESS BAR ── */}
        <div className="relative z-50 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-3 text-xs text-slate-700">
            <span className="text-[#010736] font-black">PILLAR {activeStep} OF 4</span>
            <span className="text-slate-400">·</span>
            <span className="font-semibold text-[#010736]">
              {SERVICE_CARDS[activeStep - 1]?.title}
            </span>
          </div>

          {/* Progress track */}
          <div className="flex items-center gap-3 w-full sm:w-64">
            <div className="flex-1 h-2 bg-slate-200/90 rounded-full overflow-hidden p-0.5 border border-slate-300">
              <div
                className="h-full bg-gradient-to-r from-[#010736] via-[#091759] to-[#2373F4] rounded-full transition-all duration-150"
                style={{
                  width: `${Math.min(100, Math.max(8, progressVal * 100))}%`,
                }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-500 w-10 text-right">
              {Math.round(progressVal * 100)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
