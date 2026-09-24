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
    title: "DISCOVER",
    label: "DISCOVERY & AUDIT",
    description:
      "Data-backed funnel audit, audience mapping, and competitor benchmarks.",
    metric: "100+ Data Signals",
    icon: (
      // Document with text lines icon
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#ABD2FA]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 3.5L18.5 8H14V3.5zM8 11h8v1.8H8V11zm0 3.5h8v1.8H8v-1.8zm0 3.5h5v1.8H8V18z" />
      </svg>
    ),
  },
  {
    id: "step-2",
    num: "02",
    title: "PLAN",
    label: "STRATEGY & ROADMAP",
    description:
      "Omni-channel funnel blueprints, milestones, and high-ROAS media models.",
    metric: "3.4x Target ROI",
    icon: (
      // Clock / Stopwatch icon
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#ABD2FA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 6 12 12 16 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "step-3",
    num: "03",
    title: "EXECUTE",
    label: "CAMPAIGN EXECUTION",
    description:
      "Deploying high-converting ad creatives and rapid multi-platform tests.",
    metric: "40+ Custom Creatives",
    icon: (
      // Rising Bar Chart with Growth Arrow icon
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#ABD2FA]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 19h16v2H2V3h2v16zM7 11h2.5v6H7v-6zm4-4h2.5v10H11V7zm4-3h2.5v13H15V4z" />
        <path d="M7 6l4-3 5 3 4-4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "step-4",
    num: "04",
    title: "GROW",
    label: "SCALE & RETENTION",
    description:
      "Long-term customer retention, automated funnels, and enterprise growth.",
    metric: "Top 1% Category Lead",
    icon: (
      // Target / Bullseye with Arrow icon
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#ABD2FA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
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
      className="relative w-full bg-[#f8fbfe] py-20 sm:py-28 overflow-hidden select-none border-t border-slate-200"
      style={{
        backgroundImage: "radial-gradient(ellipse at 50% 30%, #ffffff 0%, #f3f7fd 60%, #e2ecf9 100%)",
      }}
    >
      {/* ── Ambient Darkish Depth Shadows ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] pointer-events-none blur-[140px] opacity-[0.14] rounded-full"
        style={{
          background: "radial-gradient(ellipse, #010736 0%, #1B2CC1 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-10 left-10 w-96 h-96 pointer-events-none blur-[110px] opacity-[0.12] rounded-full bg-[#010736]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 pointer-events-none blur-[110px] opacity-[0.12] rounded-full bg-[#010736]"
        aria-hidden="true"
      />

      {/* ── Sleek Gradient Lines & Architectural Track Grid ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Fine Ambient Grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(27,44,193,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,44,193,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Gradient Accent Track Line 1 */}
        <div
          className="absolute top-[20%] left-0 right-0 h-[1.5px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(27,44,193,0.05) 15%, rgba(27,44,193,0.22) 50%, rgba(171,210,250,0.45) 75%, transparent 100%)",
          }}
        />
        {/* Gradient Accent Track Line 2 */}
        <div
          className="absolute top-[54%] left-0 right-0 h-[1.5px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(171,210,250,0.35) 20%, rgba(27,44,193,0.2) 55%, rgba(1,7,54,0.15) 85%, transparent 100%)",
          }}
        />
        {/* Gradient Accent Track Line 3 */}
        <div
          className="absolute top-[86%] left-0 right-0 h-[1.5px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(1,7,54,0.12) 30%, rgba(27,44,193,0.18) 65%, transparent 100%)",
          }}
        />
        {/* Vertical Gradient Guide Lines */}
        <div
          className="absolute top-0 bottom-0 left-[16%] w-[1px]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(27,44,193,0.1) 25%, rgba(171,210,250,0.25) 55%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-[16%] w-[1px]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(171,210,250,0.25) 45%, rgba(27,44,193,0.1) 75%, transparent 100%)",
          }}
        />
        {/* Diagonal Accent Flow Lines */}
        <div
          className="absolute -top-32 left-1/4 w-[900px] h-[1px] -rotate-[15deg]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(27,44,193,0.18) 50%, rgba(171,210,250,0.3) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* ── World Map Silhouette Background Texture in #1B2CC1 ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] flex items-center justify-center overflow-hidden">
        <svg
          className="w-[1200px] h-[650px] max-w-none text-[#1B2CC1]"
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

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* ════════════════════════════════════════════════════════════
            DESKTOP LAYOUT (lg: and above)
            2-column composition:
            Left: Tall arch pillar with 3D disc & QR code
            Right: 4 horizontal step capsules stacked vertically
        ════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:flex items-center justify-between gap-12 xl:gap-16">
          {/* ── LEFT COLUMN: Pillar Arch with 3D Circular Disc & QR Code ── */}
          <div className="w-[360px] xl:w-[390px] shrink-0">
            {/* The Tall Arch Pillar */}
            <div className="relative rounded-t-[195px] rounded-b-[44px] bg-gradient-to-b from-[#ABD2FA] via-[#1B2CC1] to-[#0b1033] p-6 pb-12 flex flex-col items-center justify-between shadow-[0_30px_70px_rgba(0,0,0,0.85)] min-h-[580px] border border-[#ABD2FA]/30">
              {/* Top 3D Circular Disc ("Business Steps INFOGRAPHIC") */}
              <div className="relative w-72 h-72 rounded-full p-3.5 bg-gradient-to-br from-[#ABD2FA] via-[#1B2CC1] to-[#0c1236] shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex items-center justify-center -mt-2">
                {/* Inner Dark Charcoal Core */}
                <div className="w-full h-full rounded-full bg-[#080d26] border-4 border-[#162054] shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ABD2FA] mb-0.5">
                    Business
                  </span>

                  <h3 className="text-5xl xl:text-6xl font-black uppercase text-white tracking-tight leading-none my-1">
                    Steps
                  </h3>

                  {/* Center Divider Bar */}
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#ABD2FA] to-transparent my-2" />

                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ABD2FA]">
                    INFOGRAPHIC
                  </span>

                  <span className="text-[8px] font-semibold text-slate-300 mt-1 uppercase tracking-widest">
                    PRESENTATION
                  </span>
                </div>
              </div>

              {/* Lower Section on Pillar: QR Code Box */}
              <div className="mt-12 flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0a0f2e] text-white p-2.5 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col items-center justify-between border border-[#ABD2FA]/40">
                  <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                    <div className="border-2 border-[#ABD2FA] rounded-[2px]" />
                    <div className="bg-[#1B2CC1] rounded-[1px]" />
                    <div className="border-2 border-[#ABD2FA] rounded-[2px]" />
                    <div className="bg-[#1B2CC1] rounded-[1px]" />
                    <div className="border border-[#ABD2FA]" />
                    <div className="bg-[#ABD2FA] rounded-[1px]" />
                    <div className="border-2 border-[#ABD2FA] rounded-[2px]" />
                    <div className="bg-[#1B2CC1] rounded-[1px]" />
                    <div className="border-2 border-[#ABD2FA] rounded-[2px]" />
                  </div>
                  <span className="text-[7.5px] font-black tracking-widest uppercase mt-0.5 leading-none text-[#ABD2FA]">
                    QR CODE
                  </span>
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-white uppercase mt-3">
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
                  {/* Left Overlapping Circular 3D Button (Seamless overlap with no cutting) */}
                  <div
                    className={`w-22 h-22 xl:w-24 xl:h-24 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center justify-center shrink-0 z-20 transition-all duration-300 ${
                      isActive
                        ? "bg-[#0b1030] ring-4 ring-[#ABD2FA] shadow-[0_0_28px_rgba(171,210,250,0.55)]"
                        : "bg-[#0e1438] ring-2 ring-[#1B2CC1]/50 border border-[#ABD2FA]/25 group-hover:ring-4 group-hover:ring-[#ABD2FA]/60 shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Right Capsule Banner (Fully rounded-full, deeply nested to eliminate sharp cuts) */}
                  <div
                    className={`flex-1 -ml-11 xl:-ml-12 pl-14 xl:pl-16 pr-8 py-4 xl:py-5 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.45)] flex items-center justify-between transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#1B2CC1] via-[#15239e] to-[#0a0f2b] ring-2 ring-[#ABD2FA]"
                        : "bg-[#0e1438] border border-[#1B2CC1]/30 group-hover:border-[#ABD2FA]/50 group-hover:bg-[#121a47]"
                    }`}
                  >
                    {/* Big Bold Number */}
                    <span className="text-4xl xl:text-5xl font-black text-[#ABD2FA] leading-none shrink-0 mr-5 tracking-tighter">
                      {step.num}
                    </span>

                    {/* Step Title & Copy */}
                    <div className="flex-1 text-left min-w-0 pr-2">
                      <span className="block text-xs xl:text-sm font-black text-white uppercase tracking-wider leading-tight">
                        {step.label}
                      </span>
                      <p className="text-[11px] xl:text-xs text-slate-200 font-medium leading-snug mt-0.5">
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
            Only the steps in a single row + details card
        ════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Compact Mobile Central Header */}
          <div className="w-48 h-48 rounded-full p-2.5 bg-gradient-to-br from-[#ABD2FA] via-[#1B2CC1] to-[#0b1033] shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex items-center justify-center mb-6">
            <div className="w-full h-full rounded-full bg-[#080d26] border-3 border-[#162054] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#ABD2FA]">
                Business
              </span>
              <h3 className="text-3xl font-black uppercase text-white tracking-tight leading-none my-1">
                Steps
              </h3>
              <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#ABD2FA] to-transparent my-1" />
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#ABD2FA]">
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
                      ? "bg-gradient-to-b from-[#1B2CC1] to-[#0b1030] text-white shadow-lg scale-105 ring-2 ring-[#ABD2FA]"
                      : "bg-[#0e1438] text-slate-300 border border-[#1B2CC1]/40 hover:border-[#ABD2FA]"
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      isActive ? "bg-[#070b22] text-[#ABD2FA] border border-[#ABD2FA]/50" : "bg-[#0e1438] text-slate-300"
                    }`}
                  >
                    <div className="scale-75 sm:scale-90">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className={`text-xs sm:text-sm font-black tracking-tight leading-none ${
                    isActive ? "text-[#ABD2FA]" : "text-white"
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
              className="w-full mt-5 p-4 rounded-2xl bg-[#0e1438] border border-[#ABD2FA]/50 shadow-lg text-left"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-[#ABD2FA]">
                  STAGE · {activeStep.num}
                </span>
                <span className="text-[10px] font-bold text-[#ABD2FA] bg-[#1B2CC1]/40 px-2 py-0.5 rounded-full border border-[#1B2CC1]">
                  {activeStep.metric}
                </span>
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-wide">
                {activeStep.title} · {activeStep.label}
              </h4>
              <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                {activeStep.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
}
