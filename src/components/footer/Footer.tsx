"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative w-full bg-[#212121] text-white pt-20 pb-12 overflow-hidden border-t border-slate-800 select-none">
      {/* ── Background Giant Watermark ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] lg:text-[280px] font-black tracking-tighter text-white/[0.015] pointer-events-none select-none uppercase whitespace-nowrap leading-none z-0"
        style={{ fontFamily: "var(--font-display, sans-serif)" }}
      >
        TREND ADS
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ── Top Newsletter & Growth Digest Row ── */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#282828] border border-slate-700/60 backdrop-blur-md mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#14FFEC] uppercase block mb-1.5">
              // WEEKLY GROWTH INTELLIGENCE
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              Get battle-tested ad teardowns & creative drops.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              Join 15,000+ founders and marketers receiving our actionable performance frameworks every Tuesday.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="px-5 py-3 rounded-2xl bg-[#0D7377]/20 border border-[#14FFEC]/40 text-[#14FFEC] text-xs font-mono font-bold flex items-center gap-2">
                <span>✓ Welcome aboard! First intelligence drop arrives Tuesday.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="px-4 py-3 rounded-xl bg-[#323232] border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#14FFEC] transition-all w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#14FFEC] text-[#212121] hover:bg-white hover:text-[#0D7377] font-black text-xs uppercase tracking-wider transition-colors shrink-0 shadow-[0_4px_16px_rgba(20,255,236,0.25)] cursor-pointer"
                >
                  Join Drop
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Main Navigation Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand Info Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="Trend Ads Home">
              <Image
                src="/logos/logo.png"
                alt="Trend Ads Logo"
                width={130}
                height={38}
                className="object-contain w-auto h-8"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              A high-impact creative engineering studio. We craft bold digital products, conversion-driven paid ad systems, and category-dominating brand identities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { name: "X / Twitter", icon: "𝕏", href: "https://twitter.com" },
                { name: "LinkedIn", icon: "in", href: "https://linkedin.com" },
                { name: "Instagram", icon: "ig", href: "https://instagram.com" },
                { name: "GitHub", icon: "git", href: "https://github.com" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#323232] hover:bg-[#0D7377] border border-slate-700 hover:border-[#14FFEC] flex items-center justify-center text-xs font-mono font-bold text-slate-300 hover:text-[#14FFEC] transition-all hover:scale-105"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Core Disciplines */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Paid Ads & Scaling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Next.js Web Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  3D Systems & Motion CGI
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Brand Identity & Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#14FFEC] transition-colors">
                  Full-Funnel CRO
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-[#14FFEC] transition-colors">
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
                  Services Directory
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#14FFEC] transition-colors">
                  Board & Leadership
                </a>
              </li>
              <li>
                <a href="#process-steps" className="hover:text-[#14FFEC] transition-colors">
                  Growth Steps Roadmap
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#14FFEC] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Guarantees */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Assurance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5 text-[#14FFEC]">
                <span>✓</span> NDA Protected
              </li>
              <li className="flex items-center gap-1.5 text-[#14FFEC]">
                <span>✓</span> Enterprise Grade
              </li>
              <li className="flex items-center gap-1.5 text-[#14FFEC]">
                <span>✓</span> 24h Turnaround
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                <span>🛡</span> SOC2 Compliant
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Copyright & Status Bar ── */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 Trend Ads Agency Inc. All rights reserved.</span>
          </div>

          {/* Live Status indicator & Back to Top */}
          <div className="flex items-center gap-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0D7377]/20 border border-[#14FFEC]/40 text-[#14FFEC] text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14FFEC] animate-pulse" />
              <span>All Systems Operational</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-[#14FFEC] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
