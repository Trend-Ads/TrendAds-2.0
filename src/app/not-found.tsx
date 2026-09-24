"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-gradient-to-b from-[#BEE5FE] via-[#A8DAFB] to-[#93CEF8] text-slate-900 select-none">
      {/* ── Persistent Trend Ads Navigation ── */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* ── Ambient Background Glows & Floating Clouds ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-white/45 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white/40 via-white/10 to-transparent" />
      </div>

      {/* ── Main 404 Center Composition ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-8 sm:pt-28 sm:pb-12 max-w-6xl mx-auto w-full my-auto">
        <div className="relative w-full flex items-center justify-center">
          {/* Giant Background "4 0 4" Typography */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden="true"
          >
            <div className="w-full max-w-5xl px-2 sm:px-6 flex items-center justify-between text-[160px] sm:text-[260px] md:text-[360px] lg:text-[440px] xl:text-[500px] font-black text-white leading-none tracking-tight drop-shadow-[0_15px_60px_rgba(255,255,255,0.6)]">
              <span>4</span>
              <span className="opacity-95">0</span>
              <span>4</span>
            </div>
          </div>

          {/* 3D Fluffy Lost Monster Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-20 flex flex-col items-center"
          >
            {/* Soft Ambient Ground Contact Shadow */}
            <div className="absolute bottom-3 w-36 sm:w-52 md:w-60 h-6 bg-slate-900/18 rounded-full blur-md" />

            {/* Micro-floating Monster Image with smooth edge blend */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                maskImage:
                  "radial-gradient(ellipse at 50% 50%, black 54%, rgba(0,0,0,0.85) 64%, transparent 74%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 50% 50%, black 54%, rgba(0,0,0,0.85) 64%, transparent 74%)",
              }}
              className="relative w-60 h-60 sm:w-76 sm:h-76 md:w-88 md:h-88"
            >
              <Image
                src="/not-found-monster.png"
                alt="Cute friendly lost blue monster illustration"
                fill
                priority
                className="object-contain filter drop-shadow-[0_15px_30px_rgba(20,50,90,0.15)]"
                sizes="(max-width: 768px) 240px, 350px"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ── Copy & Action Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="text-center mt-2 sm:mt-4 max-w-md mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#111827] tracking-tight leading-tight">
            Oops! I think we’re lost
          </h1>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-700/85 font-medium leading-relaxed">
            Let’s get you back to somewhere familiar
          </p>

          {/* CTA Pill Button matching reference */}
          <div className="mt-5 sm:mt-6 flex justify-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-1.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-[#7698E4] hover:bg-[#6387DD] active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_8px_20px_rgba(118,152,228,0.4)] hover:shadow-[0_12px_26px_rgba(99,135,221,0.52)] transition-all duration-200 cursor-pointer"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to home</span>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* ── Subtle Bottom Micro-Label ── */}
      <footer className="relative z-10 py-3 text-center text-[11px] font-medium text-slate-600/75">
        404 • Page Not Found • Trend Ads
      </footer>
    </div>
  );
}
