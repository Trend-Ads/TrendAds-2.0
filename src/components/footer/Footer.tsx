"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SourceBadge from "../trust/SourceBadge";
import SourceTransparencyModal from "../trust/SourceTransparencyModal";

export default function Footer() {
  const [showSourceModal, setShowSourceModal] = useState(false);
  return (
    <div className="w-full bg-[#f3f5f8]">
      <footer
        id="footer"
        className="relative w-full bg-[#18181b] text-white pt-16 sm:pt-20 pb-12 overflow-hidden rounded-t-[44px] sm:rounded-t-[60px] lg:rounded-t-[72px] border-t border-slate-700/60 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] select-none"
      >
        {/* ── Background Giant Watermark ── */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] lg:text-[280px] font-black tracking-tighter text-white/[0.015] pointer-events-none select-none uppercase whitespace-nowrap leading-none z-0"
          style={{ fontFamily: "var(--font-display, sans-serif)" }}
        >
          TREND ADS
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {/* ── Main Navigation Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
            {/* Column 1: Brand Info & Direct Contacts */}
            <div className="lg:col-span-5 space-y-4">
              {/* Logo in Cream Button-like Capsule */}
              <Link
                href="/"
                aria-label="Trend Ads Home"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-[#FFFDF8] hover:bg-white border border-amber-200/50 shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <Image
                  src="/logos/logo.png"
                  alt="Trend Ads - Creative Advertising & Digital Growth Agency"
                  width={150}
                  height={44}
                  className="object-contain w-auto h-8 sm:h-9 transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              A high-impact creative engineering studio. We craft bold digital products, conversion-driven paid ad systems, and category-dominating brand identities.
            </p>

            {/* Direct Contact & Location Info */}
            <div className="space-y-1.5 pt-1 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#14FFEC]">📍</span>
                <span>Thrissur, Kerala, India</span>
                <SourceBadge
                  sourceId="business-entity"
                  size="sm"
                  className="bg-slate-800/80 hover:bg-slate-700/80 text-slate-300"
                />
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a href="tel:+919746730297" className="hover:text-[#14FFEC] transition-colors">
                  📞 +91 97467 30297
                </a>
                <span className="text-slate-600">/</span>
                <a
                  href="https://wa.me/918139860663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#14FFEC] transition-colors"
                >
                  💬 +91 81398 60663
                </a>
              </div>
              <div>
                <a href="mailto:trendads.in@gmail.com" className="hover:text-[#14FFEC] transition-colors">
                  ✉️ trendads.in@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons (Round & Compact) */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/trend-ads-agency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-8 h-8 rounded-full overflow-hidden shadow-xs hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer block shrink-0 bg-white"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="Trend Ads on LinkedIn"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/trend_ads.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-8 h-8 rounded-full overflow-hidden shadow-xs hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer block shrink-0 bg-white"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Trend Ads on Instagram"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19LfTQbxNp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-8 h-8 rounded-full overflow-hidden shadow-xs hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer block shrink-0 bg-white"
              >
                <Image
                  src="/icons/facebook.png"
                  alt="Trend Ads on Facebook"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Core Disciplines (Hidden on Mobile, Visible on Tablet & Desktop) */}
          <div className="hidden md:block lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Paid Ads & Viral Scaling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Next.js Web Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Content Creation & Media
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Brand Identity & Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Performance Creative & Video
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Full-Funnel CRO & Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation, Blogs & Careers */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-[#14FFEC] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-[#14FFEC] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#board-members" className="hover:text-[#14FFEC] transition-colors">
                  Board & Leadership
                </a>
              </li>
              <li>
                <a href="#process-steps" className="hover:text-[#14FFEC] transition-colors">
                  Workflow Roadmap
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Case Studies & Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#14FFEC] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setShowSourceModal(true)}
                  className="hover:text-[#14FFEC] transition-colors text-left inline-flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14FFEC] animate-pulse" />
                  Source Trust Registry
                </button>
              </li>
              <li className="pt-0.5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#14FFEC] font-semibold transition-colors"
                >
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-[#14FFEC]/15 border border-[#14FFEC]/40 text-[#14FFEC] text-[9px] uppercase font-bold tracking-wider">
                    Hiring
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Copyright Bar ── */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 Trend Ads Agency Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <button
              type="button"
              onClick={() => setShowSourceModal(true)}
              className="text-slate-400 hover:text-[#14FFEC] underline underline-offset-2 transition-colors cursor-pointer text-[11px]"
            >
              Source Credibility & Verification Standards
            </button>
          </div>

          <div className="flex items-center gap-3 text-slate-500 text-[11px]">
            <span>Crafted for Exponential Brand Growth</span>
            <span>•</span>
            <span className="text-[#14FFEC]">Kerala, India</span>
          </div>
        </div>
      </div>

      {/* ── Source Credibility & Transparency Registry Modal ── */}
      <SourceTransparencyModal
        isOpen={showSourceModal}
        onClose={() => setShowSourceModal(false)}
        showTrigger={false}
      />
    </footer>
    </div>
  );
}
