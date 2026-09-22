"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

interface Subsection {
  icon: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

interface ServiceCard {
  id: string;
  num: number;
  badge: string;
  title: string;
  categoryEn: string;
  bgColor: string;
  numColor: string;
  sections: Subsection[];
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "brand",
    num: 1,
    badge: "01 · CORE STRATEGY",
    title: "BRAND IDENTITY",
    categoryEn: "STRATEGY & 3D SYSTEMS",
    bgColor: "bg-[#234f21]",
    numColor: "text-[#438339]",
    sections: [
      {
        icon: "💻",
        title: "Brand Positioning",
        subtitle: "Market Archetype & Identity",
        bullets: [
          "Define global visual DNA and high-impact differentiation barriers.",
          "Full-funnel technical edge: from strategy audit to 3D motion guidelines.",
          "Complete deliverables: cross-channel design tokens and VI standards.",
        ],
      },
      {
        icon: "✨",
        title: "3D Differentiation",
        subtitle: "High-Impact Visual Systems",
        bullets: [
          "Eliminate visual fatigue: craft bespoke luxury digital design systems.",
          "Immersive presentation: photorealistic 3D CGI rendering & packaging.",
          "Proven impact: scaled 40+ international brands to category dominance.",
        ],
      },
    ],
  },
  {
    id: "ads",
    num: 2,
    badge: "02 · ACQUISITION",
    title: "PERFORMANCE ADS",
    categoryEn: "ALGORITHMIC ROAS SCALING",
    bgColor: "bg-[#2d5f27]",
    numColor: "text-[#509644]",
    sections: [
      {
        icon: "🎯",
        title: "Omni-Channel Scale",
        subtitle: "Algorithmic Media Buying",
        bullets: [
          "Cross-channel scale across Meta (IG/FB), Google PMax & TikTok Ads.",
          "Algorithmic bidding: dynamic real-time pacing & budget guardrails.",
          "Server-side Conversions API (CAPI) and multi-touch attribution setup.",
        ],
      },
      {
        icon: "📈",
        title: "Creative Scaling Engine",
        subtitle: "High-Velocity Testing Loops",
        bullets: [
          "High-frequency testing: 20+ fresh hook angles and creatives weekly.",
          "Profitable scale: protect positive cash flow while scaling ad volume.",
          "Proven impact: $50M+ managed ad spend with 4.8x average ROAS.",
        ],
      },
    ],
  },
  {
    id: "content",
    num: 3,
    badge: "03 · VIRAL PRODUCTION",
    title: "COMMERCIAL FILMS",
    categoryEn: "CINEMATIC CONTENT & UGC",
    bgColor: "bg-[#3a7632]",
    numColor: "text-[#63ad4d]",
    sections: [
      {
        icon: "🎥",
        title: "Studio Production",
        subtitle: "High-Retention Commercials",
        bullets: [
          "Hollywood studio standard: visionary scripting, casting & 4K cinema grade.",
          "High-retention editing tailored to algorithmic social hooks.",
          "Dynamic 3D VFX motion graphics that maximize viewer dwell time.",
        ],
      },
      {
        icon: "👥",
        title: "Creator Network",
        subtitle: "Authentic UGC Amplification",
        bullets: [
          "Global creator pool: 1,200+ vetted, high-converting UGC ambassadors.",
          "Native brand trust: authentic storytelling amplified via Spark Ads.",
          "Global reach: generated 250M+ organic and commercial video views.",
        ],
      },
    ],
  },
  {
    id: "digital",
    num: 4,
    badge: "04 · DIGITAL SYSTEMS",
    title: "DIGITAL PLATFORMS",
    categoryEn: "NEXT-GEN WEB & FUNNELS",
    bgColor: "bg-[#4f933f]",
    numColor: "text-[#79c759]",
    sections: [
      {
        icon: "📢",
        title: "Web Architecture",
        subtitle: "Next-Gen Headless Platforms",
        bullets: [
          "Modern tech stack: Next.js App Router & React 19 sub-second speed.",
          "Headless commerce: custom Shopify storefronts with global edge CDN.",
        ],
      },
      {
        icon: "⚡",
        title: "Funnel Optimization",
        subtitle: "Conversion Rate & CRO",
        bullets: [
          "Checkout flow optimization: multivariate testing & friction removal.",
          "Lifecycle retention: automated Klaviyo email & SMS flows boosting LTV.",
        ],
      },
      {
        icon: "🚀",
        title: "Growth Guarantee",
        subtitle: "Enterprise Speed & Reliability",
        bullets: [
          "Performance guarantee: 99+ Google Lighthouse score & +42% CVR uplift.",
        ],
      },
    ],
  },
];

export default function ServicesHorizontalSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [progressVal, setProgressVal] = useState(0);

  // Framer Motion native scroll progress across the container (synced with Lenis)
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
  // Card 1 is ALREADY in picture halfway (35vw) as soon as you reach the section!
  // It glides from 35vw into 0vw between 0.00 and 0.16.
  // Card 2 glides in from 100vw to 0vw and overlays Card 1 between 0.20 and 0.42.
  // Card 3 glides in from 100vw to 0vw and overlays Card 2 between 0.45 and 0.67.
  // Card 4 glides in from 100vw to 0vw and overlays Card 3 between 0.70 and 0.92.

  // Card 1: Starts in picture halfway on reach, settles into base
  const card1X = useTransform(scrollYProgress, [0.00, 0.16], ["35vw", "0vw"]);
  const card1Rotate = useTransform(scrollYProgress, [0.00, 0.16], [2.5, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.00, 0.16], [0.96, 1]);

  // Card 2: Enters and overlays on Card 1
  const card2X = useTransform(scrollYProgress, [0.20, 0.42], ["100vw", "0vw"]);
  const card2Rotate = useTransform(scrollYProgress, [0.20, 0.42], [3.5, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.20, 0.42], [0.94, 1]);

  // Card 3: Enters and overlays on Card 2
  const card3X = useTransform(scrollYProgress, [0.45, 0.67], ["100vw", "0vw"]);
  const card3Rotate = useTransform(scrollYProgress, [0.45, 0.67], [3.5, 0]);
  const card3Scale = useTransform(scrollYProgress, [0.45, 0.67], [0.94, 1]);

  // Card 4: Enters and overlays on Card 3
  const card4X = useTransform(scrollYProgress, [0.70, 0.92], ["100vw", "0vw"]);
  const card4Rotate = useTransform(scrollYProgress, [0.70, 0.92], [3.5, 0]);
  const card4Scale = useTransform(scrollYProgress, [0.70, 0.92], [0.94, 1]);

  // Jump to specific card by smoothly scrolling the page vertically
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
      // Pinned track height for smooth, rhythmic card overlay progression
      className="relative h-[380vh] bg-[#faf8f5] text-slate-900 border-t border-slate-200/80"
    >
      {/* Sticky viewport pinned while user scrolls vertically */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 md:py-8 select-none">
        
        {/* Subtle ambient background dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(#234f21 0.75px, transparent 0.75px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* ── TOP HEADER / CONTROLS ── */}
        <div className="relative z-50 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#234f21]/10 border border-[#234f21]/20 text-[#234f21] text-xs font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#234f21] animate-pulse" />
              CAPABILITIES & SERVICES
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#142e12]">
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
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 border flex items-center gap-1.5 cursor-pointer ${
                    isCurrent
                      ? "bg-[#234f21] text-white border-[#234f21] shadow-[0_4px_16px_rgba(35,79,33,0.35)] scale-105"
                      : "bg-white text-slate-700 border-slate-300 shadow-sm hover:border-[#234f21]/50 hover:text-[#234f21]"
                  }`}
                >
                  <span>{c.num}.</span>
                  <span className="hidden sm:inline">
                    {c.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MAIN HORIZONTAL OVERLAY STAGE ── */}
        {/* On mobile: 95% overlay (16px offset), active card has full width and 100% visibility */}
        {/* On desktop: fanned 260px offset with full visibility */}
        <div className="relative z-30 flex-1 flex items-center justify-center w-full max-w-[1400px] mx-auto px-3 sm:px-6 overflow-hidden">
          {/* Centered stage holding the overlapping cards */}
          <div className="relative w-full max-w-[340px] sm:max-w-[620px] md:max-w-[880px] lg:max-w-[1140px] h-[520px] sm:h-[550px] lg:h-[580px] max-h-[76vh] flex items-center mx-auto">
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

              // Responsive positioning:
              // Mobile: offset by only 16px per card (95% overlap, active card gets full width)
              // Tablet/Desktop: offset by 180px -> 260px per card
              const leftOffsetClasses =
                idx === 0
                  ? "left-0"
                  : idx === 1
                  ? "left-[16px] sm:left-[180px] md:left-[220px] lg:left-[260px]"
                  : idx === 2
                  ? "left-[32px] sm:left-[360px] md:left-[440px] lg:left-[520px]"
                  : "left-[48px] sm:left-[540px] md:left-[660px] lg:left-[780px]";

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
                    
                    {/* ── Top Label Above Card (100% English) ── */}
                    <div className="mb-2 px-3">
                      <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#265321] mb-0.5">
                        {card.badge}
                      </p>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#142e12] leading-tight">
                        {card.title}
                      </h3>
                    </div>

                    {/* ── 100% Solid Card Container with Deep Background Shadows (No Transparency) ── */}
                    <div
                      className={`relative flex-1 rounded-[28px] ${card.bgColor} p-4 sm:p-5 flex flex-col justify-between text-white transition-all duration-300 ${
                        idx > 0
                          ? "shadow-[-35px_0_55px_rgba(0,0,0,0.55),_-15px_0_20px_rgba(0,0,0,0.35)] border-l-2 border-white/40"
                          : "shadow-[0_22px_50px_rgba(0,0,0,0.35),_0_8px_18px_rgba(0,0,0,0.2)] border border-white/25"
                      }`}
                    >
                      {/* ── Giant Number Connected on Left Side (High Visibility Outlined & Shadowed) ── */}
                      <div
                        className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 pointer-events-none select-none z-30"
                        aria-hidden="true"
                      >
                        <span
                          className={`text-8xl sm:text-9xl lg:text-[145px] font-black leading-none tracking-tighter ${card.numColor} drop-shadow-[0_16px_30px_rgba(0,0,0,0.7)]`}
                          style={{
                            WebkitTextStroke: "3px rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          {card.num}
                        </span>
                      </div>

                      {/* ── Subsections with Solid White Circular Badges & Dividers (Full Visibility) ── */}
                      <div className="relative z-10 pl-5 sm:pl-6 space-y-3 flex-1 flex flex-col justify-center">
                        {card.sections.map((sec, sIdx) => (
                          <div key={sIdx} className="space-y-1.5">
                            {/* Header row with SOLID WHITE circular badge */}
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-slate-900 shadow-md flex items-center justify-center text-xs shrink-0 font-bold">
                                {sec.icon}
                              </span>
                              <div className="min-w-0">
                                <h4 className="text-xs sm:text-[13px] font-black uppercase text-white tracking-wide truncate drop-shadow-sm">
                                  {sec.title}
                                </h4>
                                <p className="text-[9.5px] sm:text-[10px] text-white/90 font-mono leading-none truncate font-medium">
                                  {sec.subtitle}
                                </p>
                              </div>
                            </div>

                            {/* Crisp Solid White Divider Line with Node */}
                            <div className="flex items-center gap-2 py-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-sm" />
                              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-white via-white/90 to-transparent" />
                            </div>

                            {/* Bullet items with solid white dot & 100% solid white typography */}
                            <ul className="space-y-1">
                              {sec.bullets.map((b, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-start gap-1.5 text-[10.5px] sm:text-[11.5px] text-white leading-snug font-medium"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5 shadow-sm" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* ── Card Footer with CTA ── */}
                      <div className="mt-2 pt-2.5 border-t border-white/25 flex items-center justify-between pl-5 sm:pl-6">
                        <span className="text-[9.5px] font-mono uppercase text-white tracking-wider font-bold">
                          TREND ADS · {card.categoryEn}
                        </span>
                        <a
                          href="#contact"
                          className="text-[10.5px] font-bold text-white hover:text-white/90 flex items-center gap-1 transition-opacity underline underline-offset-2"
                        >
                          <span>Deploy</span>
                          <span>→</span>
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
          <div className="flex items-center gap-3 text-xs font-mono text-slate-700">
            <span className="text-[#142e12] font-black">PILLAR {activeStep} OF 4</span>
            <span>//</span>
            <span
              className={`font-semibold ${
                progressVal >= 0.94
                  ? "text-[#234f21] font-bold"
                  : "text-[#265321] animate-pulse"
              }`}
            >
              {progressVal >= 0.94
                ? "ALL 4 PILLARS STACKED — CONTINUE SCROLLING ↓"
                : "SCROLL TO OVERLAY NEXT PILLAR ↔"}
            </span>
          </div>

          {/* Clean Progress Bar matching green theme */}
          <div className="w-full sm:w-80 h-2 bg-[#234f21]/15 rounded-full overflow-hidden relative border border-[#234f21]/20">
            <motion.div
              className="h-full bg-gradient-to-r from-[#234f21] via-[#3a7632] to-[#4f933f] origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </div>

          {/* Number indicator pills */}
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                type="button"
                onClick={() => jumpToCard(step)}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-all cursor-pointer ${
                  activeStep >= step
                    ? "bg-[#234f21] text-white shadow-[0_2px_8px_rgba(35,79,33,0.3)]"
                    : "bg-white text-slate-700 shadow-sm hover:bg-slate-100"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
