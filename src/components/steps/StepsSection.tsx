"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StepItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  metric: string;
  side: "left" | "right";
  icon: React.ReactNode;
}

const STEPS_DATA: StepItem[] = [
  {
    id: "step-1",
    num: "01",
    title: "DISCOVERY & AUDIT",
    tagline: "Market Intelligence",
    description: "Deep audit of funnel bottlenecks, audience psychology, and category whitespace.",
    metric: "100+ Data Signals Analyzed",
    side: "left",
    icon: (
      // Brain / Neural Network Icon
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3.5C7.5 3.5 6 5.5 6 7.5c0 1.2.6 2.3 1.5 3-.9.7-1.5 1.8-1.5 3 0 1.8 1.3 3.3 3 3.5v1.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5c1.7-.2 3-1.7 3-3.5 0-1.2-.6-2.3-1.5-3 .9-.7 1.5-1.8 1.5-3 0-2-1.5-4-3.5-4h-2.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5v15M8.5 7.5h7M8 12h8M8.5 16.5h7" />
      </svg>
    ),
  },
  {
    id: "step-2",
    num: "02",
    title: "STRATEGY & ARCHITECTURE",
    tagline: "Growth Blueprint",
    description: "Architecting omni-channel acquisition funnels, offer positioning, and media plans.",
    metric: "3.4x Target ROI Blueprint",
    side: "left",
    icon: (
      // Document with Magnifying Glass Icon
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h4m5-11H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7l-4-4z" />
        <circle cx="16.5" cy="16.5" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 19l2.5 2.5" />
      </svg>
    ),
  },
  {
    id: "step-3",
    num: "03",
    title: "CREATIVE & PRODUCTION",
    tagline: "High-Impact Assets",
    description: "Crafting scroll-stopping 3D visual systems, high-converting copy, and ad variants.",
    metric: "40+ Custom Ad Variants",
    side: "left",
    icon: (
      // Interlocking Precision Gears Icon
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "step-4",
    num: "04",
    title: "CAMPAIGN LAUNCH",
    tagline: "Multi-Platform Rollout",
    description: "Precision launch across Meta, TikTok, YouTube & Google with strict conversion tracking.",
    metric: "Instant Market Presence",
    side: "right",
    icon: (
      // Rising Bar Chart with Growth Trend Icon
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16v-4m5 4V9m5 7V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 11l5-5 4 4 5-6" />
      </svg>
    ),
  },
  {
    id: "step-5",
    num: "05",
    title: "SCALE & OPTIMIZE",
    tagline: "ROAS Amplification",
    description: "Algorithmic bid adjustments, dynamic audience refresh, and compounding returns.",
    metric: "4.8x – 7.2x Compounded ROAS",
    side: "right",
    icon: (
      // Currency / Exchange arrows Icon ($)
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 8v2" />
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.5l2 2-2 2M8 20.5l-2-2 2-2" />
      </svg>
    ),
  },
  {
    id: "step-6",
    num: "06",
    title: "MARKET DOMINANCE",
    tagline: "Category Moat",
    description: "Securing defensible brand authority, loyal customer lifetime value, and enterprise scale.",
    metric: "Top 1% Category Leader",
    side: "right",
    icon: (
      // Target / Bullseye with Arrow Icon
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 5l-5 5m5-5h-3.5M19 5v3.5" />
      </svg>
    ),
  },
];

export default function StepsSection() {
  const [activeStepId, setActiveStepId] = useState<string>("step-1");
  const activeStep = STEPS_DATA.find((s) => s.id === activeStepId) || STEPS_DATA[0];

  return (
    <section
      id="process-steps"
      className="relative w-full bg-[#0a0b0e] py-24 sm:py-32 overflow-hidden text-white select-none"
    >
      {/* ── Carbon Fiber / Diagonal Micro-Stripes Texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1.5px, transparent 1.5px, transparent 6px)",
        }}
      />

      {/* ── Radial Backlight Halo Behind Central Hub ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none blur-[140px] opacity-25 rounded-full"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, #ff5419 40%, transparent 75%)",
        }}
      />

      {/* ── Corner Metallic Bevel Accents (as seen in reference image) ── */}
      {/* Top-Right Metallic Cutout Stripe */}
      <div className="absolute -top-16 -right-16 w-44 h-44 border-[14px] border-slate-700/30 transform rotate-45 pointer-events-none shadow-[0_10px_40px_rgba(0,0,0,0.9)]" />
      {/* Bottom-Left Metallic Cutout Stripe */}
      <div className="absolute -bottom-16 -left-16 w-44 h-44 border-[14px] border-slate-700/30 transform rotate-45 pointer-events-none shadow-[0_10px_40px_rgba(0,0,0,0.9)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ── Top Header Section (Replicating "headline annual report" from image) ── */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16 lg:mb-20">
          {/* Left Title with QR Code Badge */}
          <div className="flex items-start gap-4">
            {/* Tech QR Code Box */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white text-black p-2 flex flex-col items-center justify-between shrink-0 shadow-lg border border-white/20">
              <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                <div className="border-2 border-black rounded-[2px]" />
                <div className="bg-black rounded-[1px]" />
                <div className="border-2 border-black rounded-[2px]" />
                <div className="bg-black rounded-[1px]" />
                <div className="border border-black" />
                <div className="bg-black rounded-[1px]" />
                <div className="border-2 border-black rounded-[2px]" />
                <div className="bg-black rounded-[1px]" />
                <div className="border-2 border-black rounded-[2px]" />
              </div>
              <span className="text-[7px] font-black tracking-widest uppercase mt-0.5 leading-none">
                QR CODE
              </span>
            </div>

            {/* Headline and Subtitle */}
            <div>
              <div className="flex items-baseline gap-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-none">
                  headline
                </h2>
                <span className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-300 uppercase tracking-tight">
                  annual report
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 leading-relaxed">
                A battle-tested 6-stage engineering and growth framework that transforms vision into profitable, market-dominating campaigns.
              </p>
            </div>
          </div>

          {/* Right Editorial Note / Badge */}
          <div className="hidden lg:flex flex-col items-end text-right max-w-xs">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#f59e0b] uppercase">
              // TREND ADS FRAMEWORK
            </span>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              Every step is linked in an active continuous feedback loop, ensuring maximum conversion and scale velocity.
            </p>
          </div>
        </div>

        {/* ── MAIN INFOGRAPHIC COMPOSITION ── */}
        {/* Desktop Layout (1024px+): Exact 3-Left / Center Hub / 3-Right Infographic Composition */}
        <div className="hidden lg:block relative min-h-[580px] w-full">
          {/* Connecting Orbit Ring (Loops behind node circles) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/25 pointer-events-none -z-0" />

          {/* ════════ CENTER HUB ("Business Steps INFOGRAPHIC") ════════ */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Outer Golden-Yellow Ring with 3D drop shadow */}
            <div className="relative w-72 h-72 rounded-full p-3.5 bg-gradient-to-br from-[#fcd34d] via-[#f59e0b] to-[#b45309] shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(245,158,11,0.3)] flex items-center justify-center">
              {/* Inner Dark Glossy Core */}
              <div className="w-full h-full rounded-full bg-[#12141a] border-4 border-[#1f232d] shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                {/* Subtle Radial Glow inside Core */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    background: "radial-gradient(circle at 50% 35%, #f59e0b 0%, transparent 65%)",
                  }}
                />

                <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-[#f59e0b] mb-0.5">
                  Business
                </span>

                <h3 className="relative z-10 text-5xl font-black uppercase text-white tracking-tight leading-none my-1">
                  Steps
                </h3>

                {/* Center Divider Bar */}
                <div className="relative z-10 w-24 h-0.5 bg-white/40 my-2" />

                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.25em] text-slate-300">
                  INFOGRAPHIC
                </span>

                <span className="relative z-10 text-[8px] font-mono text-slate-400 mt-1 uppercase tracking-widest">
                  PRESENTATION
                </span>
              </div>
            </div>
          </div>

          {/* ════════ LEFT COLUMN: STEPS 01, 02, 03 ════════ */}
          <div className="absolute left-0 top-0 bottom-0 w-[42%] flex flex-col justify-between py-2 z-10">
            {STEPS_DATA.filter((s) => s.side === "left").map((step) => {
              const isActive = activeStepId === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`group relative flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-[1.02]" : "hover:scale-[1.01]"
                  }`}
                >
                  {/* Left Pill Capsule (Golden-Yellow) */}
                  <div
                    className={`flex-1 flex items-center justify-between pl-7 pr-10 py-3.5 rounded-l-full rounded-r-3xl transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.4)] ${
                      isActive
                        ? "bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] ring-2 ring-white/40"
                        : "bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] group-hover:brightness-105"
                    }`}
                  >
                    {/* Big Bold Number */}
                    <span className="text-4xl font-black text-black leading-none shrink-0 mr-4 tracking-tighter">
                      {step.num}
                    </span>

                    {/* Step Title & Copy */}
                    <div className="flex-1 text-left">
                      <span className="block text-xs font-black text-black uppercase tracking-wider leading-tight">
                        {step.title}
                      </span>
                      <p className="text-[10px] text-black/85 font-medium leading-snug line-clamp-2 mt-0.5 max-w-[210px]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Overlapping Dark Circular Node Button */}
                  <div
                    className={`relative -ml-6 w-16 h-16 rounded-full bg-[#12141a] border-2 transition-all duration-300 flex items-center justify-center shrink-0 z-20 shadow-[0_10px_25px_rgba(0,0,0,0.85)] ${
                      isActive
                        ? "border-[#f59e0b] ring-4 ring-[#f59e0b]/30 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                        : "border-[#2b303d] group-hover:border-[#f59e0b]"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ════════ RIGHT COLUMN: STEPS 04, 05, 06 ════════ */}
          <div className="absolute right-0 top-0 bottom-0 w-[42%] flex flex-col justify-between py-2 z-10">
            {STEPS_DATA.filter((s) => s.side === "right").map((step) => {
              const isActive = activeStepId === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`group relative flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-[1.02]" : "hover:scale-[1.01]"
                  }`}
                >
                  {/* Overlapping Dark Circular Node Button (Mirrored on Left of Pill) */}
                  <div
                    className={`relative -mr-6 w-16 h-16 rounded-full bg-[#12141a] border-2 transition-all duration-300 flex items-center justify-center shrink-0 z-20 shadow-[0_10px_25px_rgba(0,0,0,0.85)] ${
                      isActive
                        ? "border-[#f59e0b] ring-4 ring-[#f59e0b]/30 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                        : "border-[#2b303d] group-hover:border-[#f59e0b]"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Right Pill Capsule (Golden-Yellow) */}
                  <div
                    className={`flex-1 flex items-center justify-between pl-10 pr-7 py-3.5 rounded-r-full rounded-l-3xl transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.4)] ${
                      isActive
                        ? "bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#fbbf24] ring-2 ring-white/40"
                        : "bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] group-hover:brightness-105"
                    }`}
                  >
                    {/* Big Bold Number */}
                    <span className="text-4xl font-black text-black leading-none shrink-0 mr-4 tracking-tighter">
                      {step.num}
                    </span>

                    {/* Step Title & Copy */}
                    <div className="flex-1 text-left">
                      <span className="block text-xs font-black text-black uppercase tracking-wider leading-tight">
                        {step.title}
                      </span>
                      <p className="text-[10px] text-black/85 font-medium leading-snug line-clamp-2 mt-0.5 max-w-[210px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile & Tablet Layout (< 1024px): Responsive Stack ── */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* Central Hub Header on Mobile */}
          <div className="w-56 h-56 mx-auto rounded-full p-2.5 bg-gradient-to-br from-[#fcd34d] via-[#f59e0b] to-[#b45309] shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex items-center justify-center mb-4">
            <div className="w-full h-full rounded-full bg-[#12141a] border-3 border-[#1f232d] flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
                Business
              </span>
              <h3 className="text-4xl font-black uppercase text-white tracking-tight leading-none my-1">
                Steps
              </h3>
              <div className="w-16 h-0.5 bg-white/40 my-1.5" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">
                INFOGRAPHIC
              </span>
            </div>
          </div>

          {/* 6 Step Cards for Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STEPS_DATA.map((step) => {
              const isActive = activeStepId === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] shadow-md cursor-pointer transition-all duration-200 ${
                    isActive ? "ring-2 ring-white" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#12141a] border border-[#2b303d] flex items-center justify-center shrink-0 shadow-inner">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-black">{step.num}</span>
                      <span className="text-xs font-black text-black uppercase">{step.title}</span>
                    </div>
                    <p className="text-[10.5px] text-black/85 leading-snug mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Active Step Deliverable Banner ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-14 lg:mt-16 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#f59e0b] flex items-center justify-center font-mono font-bold text-sm">
                {activeStep.num}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-[#f59e0b] uppercase">
                    STAGE // {activeStep.tagline}
                  </span>
                  <span className="text-slate-500">·</span>
                  <span className="text-xs text-white font-bold">{activeStep.title}</span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">{activeStep.description}</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 text-[#f59e0b] text-xs font-mono font-bold shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
              <span>Deliverable: {activeStep.metric}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom Editorial Footnote (Replicating small copy in image) ── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <span>TREND ADS // ENTERPRISE GROWTH FRAMEWORK 2026</span>
          <p className="max-w-md text-right text-slate-400 font-normal leading-relaxed hidden sm:block">
            Continuous iterative testing and conversion modeling ensure every ad dollar achieves peak return and sustained category authority.
          </p>
        </div>
      </div>
    </section>
  );
}
