"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface WebsiteLoadingScreenProps {
  /** Optional callback fired when the loading screen completes its exit animation */
  onComplete?: () => void;
}

const SOCIAL_ICONS = [
  { name: "Facebook", src: "/icons/facebook.png", alt: "Facebook" },
  { name: "Instagram", src: "/icons/instagram.png", alt: "Instagram" },
  { name: "LinkedIn", src: "/icons/linkedin.png", alt: "LinkedIn" },
  { name: "WhatsApp", src: "/icons/whatsapp.png", alt: "WhatsApp" },
];

export default function WebsiteLoadingScreen({
  onComplete,
}: WebsiteLoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [statusText, setStatusText] = useState("INITIALIZING DIGITAL CANVAS");

  // Prevent background scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Handle counter and status progression
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Smooth non-linear acceleration
      const increment = current < 35 ? 2 : current < 70 ? 4 : current < 90 ? 3 : 2;
      current += increment;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        setStatusText("EXPERIENCES READY");
        clearInterval(interval);

        // Brief hold at 100% before the curtain glides open
        setTimeout(() => {
          setIsLoading(false);
          if (onComplete) onComplete();
        }, 340);
      } else {
        setProgress(current);

        if (current < 30) {
          setStatusText("INITIALIZING DIGITAL CANVAS");
        } else if (current < 60) {
          setStatusText("LOADING 3D ASSETS & BRAND MEDIA");
        } else if (current < 85) {
          setStatusText("CALIBRATING CREATIVE ENGINE");
        } else {
          setStatusText("WELCOME TO TREND ADS");
        }
      }
    }, 26);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden select-none pointer-events-auto"
          aria-live="polite"
          aria-busy="true"
        >
          {/* ── Layer 1: Sky-blue accent backdrop (Matches Hero color) ── */}
          <motion.div
            className="absolute inset-0 bg-[#8ACFF8] z-10"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.08,
            }}
          />

          {/* ── Layer 2: Soft White & Light Sky Canvas ── */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f4faff] to-[#e6f4fe] z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-14"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.95,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* ── Subtle Geometric Grid & Soft Glow ── */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                backgroundImage: `
                  radial-gradient(ellipse 70% 60% at 50% 35%, rgba(138, 207, 248, 0.35) 0%, transparent 75%),
                  linear-gradient(rgba(13, 115, 119, 0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(13, 115, 119, 0.04) 1px, transparent 1px)
                `,
                backgroundSize: "100% 100%, 50px 50px, 50px 50px",
              }}
            />

            {/* ── Top Header Row (Minimal & Light) ── */}
            <div className="relative z-30 flex items-center justify-between text-xs tracking-widest text-slate-500">
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2.5"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#0D7377] animate-pulse" />
                <span className="font-bold text-slate-900 tracking-[0.2em]">TREND ADS</span>
                <span className="hidden sm:inline text-slate-400 font-medium">/ CREATIVE STUDIO</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-2 text-slate-500 text-[11px] font-medium"
              >
                <span>EST. 2024</span>
                <span className="text-[#0D7377] font-semibold">• WORLDWIDE</span>
              </motion.div>
            </div>

            {/* ── Center Stage: Clean, Impactful & Aesthetic ── */}
            <div className="relative z-30 my-auto flex flex-col items-center justify-center text-center px-4">
              {/* Brand Logo with gentle luminous shadow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-5"
              >
                <div className="absolute inset-0 bg-[#8ACFF8] blur-2xl opacity-50 rounded-full scale-125" />
                <div className="relative w-44 sm:w-60 h-14 sm:h-16 flex items-center justify-center">
                  <Image
                    src="/logos/logo.png"
                    alt="Trend Ads - Creative Advertising & Digital Growth Agency"
                    width={240}
                    height={64}
                    priority
                    className="object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </motion.div>

              {/* Large Heroic Numeric Counter */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-baseline justify-center"
              >
                <span
                  className="text-8xl sm:text-[135px] font-black tracking-tight text-slate-950 leading-none select-none"
                  style={{ fontFamily: "var(--font-display, sans-serif)" }}
                >
                  {progress.toString().padStart(2, "0")}
                </span>
                <span
                  className="text-3xl sm:text-5xl font-black text-[#0D7377] ml-1.5 select-none"
                  style={{ fontFamily: "var(--font-display, sans-serif)" }}
                >
                  %
                </span>
              </motion.div>

              {/* Micro Status Badge */}
              <motion.div
                key={statusText}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D7377] animate-ping" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 tracking-wider">
                  {statusText}
                </span>
              </motion.div>

              {/* ── Social Icons Dock (Facebook, Instagram, LinkedIn, WhatsApp) ── */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 flex items-center gap-3 sm:gap-3.5"
              >
                {SOCIAL_ICONS.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 + index * 0.06 }}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 cursor-pointer transition-all hover:border-[#0D7377]/40 hover:shadow-[0_4px_12px_rgba(13,115,119,0.18)]"
                    title={social.name}
                  >
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width={22}
                      height={22}
                      className="object-contain w-auto h-auto max-w-[20px] max-h-[20px]"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── Bottom Section: Sleek Hairline Progress Bar & Meta ── */}
            <div className="relative z-30 flex flex-col gap-3.5">
              {/* Refined Glowing Progress Track */}
              <div className="relative w-full h-[4px] bg-slate-200/70 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#0D7377] via-[#54afde] to-[#8ACFF8] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
                {/* Subtle leading bead */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#0D7377] rounded-full shadow-[0_0_8px_rgba(13,115,119,0.6)] transition-all"
                  style={{ left: `calc(${progress}% - 7px)` }}
                />
              </div>

              {/* Minimalist Footnote */}
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 tracking-widest uppercase">
                <span className="font-semibold text-slate-600">[ DIGITAL EXPERIENCES ]</span>
                <span className="text-[#0D7377] font-bold">
                  {progress < 100 ? "LOADING" : "READY"}
                </span>
                <span className="hidden sm:inline">TREND ADS © 2024</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
