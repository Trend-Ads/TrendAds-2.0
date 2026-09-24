"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StepItem {
  id: string;
  num: string;
  title: string;
  label: string;
  description: string;
  metric: string;
  icon: React.ReactNode;
}

const STEPS_DATA: StepItem[] = [
  {
    id: "step-1",
    num: "01",
    title: "DISCOVERY & AUDIT",
    label: "DISCOVERY & AUDIT",
    description:
      "Data-backed funnel audit, audience mapping, and competitor benchmarks.",
    metric: "100+ Data Signals",
    icon: (
      // Document with text lines icon
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#14FFEC]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 3.5L18.5 8H14V3.5zM8 11h8v1.8H8V11zm0 3.5h8v1.8H8v-1.8zm0 3.5h5v1.8H8V18z" />
      </svg>
    ),
  },
  {
    id: "step-2",
    num: "02",
    title: "STRATEGY & ARCHITECTURE",
    label: "STRATEGY & ROADMAP",
    description:
      "Omni-channel funnel blueprints, milestones, and high-ROAS media models.",
    metric: "3.4x Target ROI",
    icon: (
      // Clock / Stopwatch icon
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#14FFEC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 6 12 12 16 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "step-3",
    num: "03",
    title: "CAMPAIGN EXECUTION",
    label: "CREATIVE & LAUNCH",
    description:
      "Deploying high-converting ad creatives and rapid multi-platform tests.",
    metric: "40+ Custom Creatives",
    icon: (
      // Rising Bar Chart with Growth Arrow icon
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#14FFEC]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 19h16v2H2V3h2v16zM7 11h2.5v6H7v-6zm4-4h2.5v10H11V7zm4-3h2.5v13H15V4z" />
        <path d="M7 6l4-3 5 3 4-4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "step-4",
    num: "04",
    title: "MARKET DOMINANCE",
    label: "SCALE & RETENTION",
    description:
      "Long-term customer retention, automated funnels, and enterprise growth.",
    metric: "Top 1% Category Lead",
    icon: (
      // Target / Bullseye with Arrow icon
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#14FFEC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <path d="M19 5l-5 5m5-5h-3.5M19 5v3.5" strokeLinecap="round" strokeLinejoin="round" />
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
      className="relative w-full bg-[#212121] py-20 sm:py-28 overflow-hidden text-white select-none border-t border-slate-800"
      style={{
        backgroundImage: "radial-gradient(ellipse at 50% 30%, #292929 0%, #212121 100%)",
      }}
    >
      {/* ── World Map Silhouette Background Texture ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] flex items-center justify-center overflow-hidden">
        <svg
          className="w-[1200px] h-[650px] max-w-none text-[#0D7377]"
          viewBox="0 0 1000 500"
          fill="currentColor"
        >
          {/* North America */}
          <path d="M150 120 C 180 90, 260 70, 320 110 C 350 140, 310 210, 260 220 C 230 230, 200 280, 180 250 C 150 200, 120 150, 150 120 Z" />
          {/* South America */}
          <path d="M280 260 C 320 280, 350 330, 320 410 C 290 460, 260 440, 250 380 C 240 320, 260 280, 280 260 Z" />
          {/* Europe */}
          <path d="M480 110 C 530 80, 580 90, 570 140 C 540 170, 500 160, 480 140 C 470 120, 470 115, 480 110 Z" />
          {/* Africa */}
          <path d="M480 170 C 540 170, 590 220, 570 310 C 550 380, 510 390, 480 340 C 450 280, 440 210, 480 170 Z" />
          {/* Asia */}
          <path d="M580 90 C 670 70, 800 90, 830 180 C 810 240, 720 250, 680 210 C 630 200, 590 140, 580 90 Z" />
          {/* Australia */}
          <path d="M780 300 C 840 290, 870 330, 860 380 C 820 410, 770 380, 760 340 C 750 310, 760 300, 780 300 Z" />
        </svg>
      </div>

      {/* ── Ambient Halos ── */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none blur-[150px] opacity-25 rounded-full"
        style={{
          background: "radial-gradient(circle, #0D7377 0%, rgba(20,255,236,0.2) 50%, transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* ════════════════════════════════════════════════════════════
            DESKTOP LAYOUT (lg: and above)
            Exact 2-column composition matching reference image:
            Left: Tall arch pillar with 3D disc & QR code
            Right: 4 horizontal step capsules stacked vertically
        ════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:flex items-center justify-between gap-12 xl:gap-16">
          {/* ── LEFT COLUMN: Pillar Arch with 3D Circular Disc & QR Code ── */}
          <div className="w-[360px] xl:w-[390px] shrink-0">
            {/* The Tall Arch Pillar */}
            <div className="relative rounded-t-[195px] rounded-b-[44px] bg-gradient-to-b from-[#14FFEC] via-[#0D7377] to-[#124245] p-6 pb-12 flex flex-col items-center justify-between shadow-[0_30px_70px_rgba(0,0,0,0.85)] min-h-[580px] border border-[#14FFEC]/30">
              {/* Top 3D Circular Disc ("Business Steps INFOGRAPHIC") */}
              <div className="relative w-72 h-72 rounded-full p-3.5 bg-gradient-to-br from-[#14FFEC] via-[#0D7377] to-[#323232] shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex items-center justify-center -mt-2">
                {/* Inner Dark Charcoal Core */}
                <div className="w-full h-full rounded-full bg-[#212121] border-4 border-[#323232] shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#14FFEC] mb-0.5">
                    Business
                  </span>

                  <h3 className="text-5xl xl:text-6xl font-black uppercase text-white tracking-tight leading-none my-1">
                    Steps
                  </h3>

                  {/* Center Divider Bar */}
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#14FFEC] to-transparent my-2" />

                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-200">
                    INFOGRAPHIC
                  </span>

                  <span className="text-[8px] font-mono text-slate-400 mt-1 uppercase tracking-widest">
                    PRESENTATION
                  </span>
                </div>
              </div>

              {/* Lower Section on Pillar: QR Code Box */}
              <div className="mt-12 flex flex-col items-center">
                <div className="w-20 h-20 bg-[#323232] text-white p-2.5 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col items-center justify-between border border-[#14FFEC]/30">
                  <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                    <div className="border-2 border-[#14FFEC] rounded-[2px]" />
                    <div className="bg-[#14FFEC] rounded-[1px]" />
                    <div className="border-2 border-[#14FFEC] rounded-[2px]" />
                    <div className="bg-[#14FFEC] rounded-[1px]" />
                    <div className="border border-[#14FFEC]" />
                    <div className="bg-[#14FFEC] rounded-[1px]" />
                    <div className="border-2 border-[#14FFEC] rounded-[2px]" />
                    <div className="bg-[#14FFEC] rounded-[1px]" />
                    <div className="border-2 border-[#14FFEC] rounded-[2px]" />
                  </div>
                  <span className="text-[7.5px] font-black tracking-widest uppercase mt-0.5 leading-none text-[#14FFEC]">
                    QR CODE
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase mt-3">
                  Scan for live roadmap
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: 4 Horizontal Step Capsules ── */}
          <div className="flex-1 flex flex-col gap-6 xl:gap-7">
            {STEPS_DATA.map((step) => {
              const isActive = activeStepId === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`group relative flex items-center cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-[1.02]" : "hover:scale-[1.01]"
                  }`}
                >
                  {/* Left Overlapping Circular 3D Button */}
                  <div
                    className={`w-20 h-20 xl:w-22 xl:h-22 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center justify-center shrink-0 z-20 transition-all duration-300 ${
                      isActive
                        ? "bg-[#323232] ring-4 ring-[#14FFEC] shadow-[0_0_25px_rgba(20,255,236,0.6)]"
                        : "bg-[#2a2a2a] border border-[#0D7377]/40 group-hover:ring-2 group-hover:ring-[#14FFEC]/60"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Right Capsule Banner */}
                  <div
                    className={`flex-1 -ml-8 pl-12 pr-8 py-4 xl:py-5 rounded-r-full rounded-l-3xl shadow-[0_15px_35px_rgba(0,0,0,0.45)] flex items-center justify-between transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#0D7377] via-[#0b6569] to-[#323232] ring-2 ring-[#14FFEC]"
                        : "bg-[#323232] border border-slate-700/60 group-hover:border-[#0D7377] group-hover:bg-[#383838]"
                    }`}
                  >
                    {/* Big Bold Number */}
                    <span className="text-4xl xl:text-5xl font-black text-[#14FFEC] leading-none shrink-0 mr-5 tracking-tighter">
                      {step.num}
                    </span>

                    {/* Step Title & Copy */}
                    <div className="flex-1 text-left min-w-0 pr-2">
                      <span className="block text-xs xl:text-sm font-black text-white uppercase tracking-wider leading-tight">
                        {step.label}
                      </span>
                      <p className="text-[11px] xl:text-xs text-slate-300 font-medium leading-snug mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            MOBILE SCREEN (< lg):
            "and in mobile screen only the steps in single row"
        ════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Compact Mobile Central Header */}
          <div className="w-48 h-48 rounded-full p-2.5 bg-gradient-to-br from-[#14FFEC] via-[#0D7377] to-[#323232] shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex items-center justify-center mb-6">
            <div className="w-full h-full rounded-full bg-[#212121] border-3 border-[#323232] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#14FFEC]">
                Business
              </span>
              <h3 className="text-3xl font-black uppercase text-white tracking-tight leading-none my-1">
                Steps
              </h3>
              <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#14FFEC] to-transparent my-1" />
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-200">
                INFOGRAPHIC
              </span>
            </div>
          </div>

          {/* ── Mobile: ONLY THE STEPS IN A SINGLE ROW ── */}
          <div className="w-full flex flex-row items-center justify-center gap-2 sm:gap-4 py-2">
            {STEPS_DATA.map((step) => {
              const isActive = activeStepId === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepId(step.id)}
                  className={`flex-1 max-w-[82px] sm:max-w-[100px] flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-b from-[#0D7377] to-[#323232] text-white shadow-lg scale-105 ring-2 ring-[#14FFEC]"
                      : "bg-[#323232] text-slate-300 border border-slate-700 hover:border-[#0D7377]"
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      isActive ? "bg-[#212121] text-[#14FFEC] border border-[#14FFEC]/40" : "bg-[#282828] text-slate-300"
                    }`}
                  >
                    <div className="scale-75 sm:scale-90">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className={`text-xs sm:text-sm font-black tracking-tight leading-none ${
                    isActive ? "text-[#14FFEC]" : "text-white"
                  }`}>
                    {step.num}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details for Mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="w-full mt-5 p-4 rounded-2xl bg-[#323232] border border-[#0D7377]/60 shadow-lg text-left"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono font-bold text-[#14FFEC]">
                  STAGE // {activeStep.num}
                </span>
                <span className="text-[10px] font-bold text-[#14FFEC] bg-[#0D7377]/30 px-2 py-0.5 rounded-full border border-[#0D7377]">
                  {activeStep.metric}
                </span>
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                {activeStep.title}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {activeStep.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Active Step Deliverable Banner (Desktop) ── */}
        <div className="hidden lg:block mt-12 pt-6 border-t border-slate-700/60">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>TREND ADS // 4-STAGE ACCELERATION ENGINE</span>
            <span className="text-[#14FFEC] font-bold">
              ACTIVE STAGE // {activeStep.num}: {activeStep.title}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
