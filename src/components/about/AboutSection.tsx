"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="bg-[#faf8f5] py-28 relative overflow-hidden text-slate-900"
    >
      {/* Subtle decorative dot pattern behind the center phone */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#f1a380 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 20%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 40%, black 20%, transparent 85%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ── Main Orange Card ── */}
        <div className="bg-gradient-to-br from-[#ff5419] to-[#f44306] rounded-[44px] px-8 sm:px-12 lg:px-16 py-14 lg:py-20 flex flex-col lg:flex-row items-center justify-between relative mt-16 lg:mt-24 shadow-[0_24px_60px_-12px_rgba(244,67,6,0.38)] min-h-[460px]">
          {/* Left Column: About Us */}
          <div className="w-full lg:w-[32%] text-white z-10 mb-14 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-white">
              About us
            </h2>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base font-normal mb-8 max-w-md">
              We connect with reliable and skilled professionals offering
              on-demand services right in your local area. Wakka makes it easy to
              find and book trusted experts who can get the job done quickly and
              efficiently.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-slate-900 font-bold text-sm px-7 py-3.5 rounded-xl shadow-md hover:bg-slate-50 hover:shadow-lg transition-all duration-200"
            >
              Contact us
            </a>
          </div>

          {/* Center Column: High-Fidelity Phone Mockup (overlapping) */}
          <div className="w-full lg:w-[36%] flex justify-center z-20 my-8 lg:my-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
            <div className="w-[316px] h-[648px] bg-[#1a1c20] rounded-[50px] p-[9px] shadow-[0_32px_80px_rgba(0,0,0,0.45)] relative border-[3px] border-[#2e323b] flex flex-col transform hover:-translate-y-2 transition-transform duration-300 select-none">
              {/* Phone Screen Container */}
              <div className="w-full h-full bg-[#f8f9fb] rounded-[42px] overflow-hidden flex flex-col relative text-slate-800">
                {/* Status Bar */}
                <div className="pt-2.5 px-6 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-900 z-30">
                  <span>9:41</span>
                  {/* Dynamic Island / Notch */}
                  <div className="w-24 h-[18px] bg-black rounded-full flex items-center justify-end px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111625] border border-slate-700/50" />
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

                {/* User Header */}
                <div className="px-5 pt-2 pb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-amber-200 border-2 border-white shadow-sm flex items-center justify-center font-bold text-[11px] text-white">
                      JD
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 leading-tight">Hi John Doe</p>
                      <p className="text-xs font-bold text-slate-800 flex items-center gap-0.5">
                        <span className="text-[#ff5419]">📍</span> N.Y Bronx
                        <span className="text-[9px] text-slate-400">▼</span>
                      </p>
                    </div>
                  </div>
                  <button className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center text-slate-600 relative">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5419] absolute top-1.5 right-1.5" />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="px-5 pb-3">
                  <p className="text-sm font-bold text-slate-800 mb-1.5">
                    What service do you want?
                  </p>
                  <div className="bg-slate-100/90 rounded-xl h-8 px-3 flex items-center gap-2 text-slate-400 text-xs border border-slate-200/50">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-[11px] text-slate-400">Search for services</span>
                  </div>
                </div>

                {/* Service Categories */}
                <div className="px-5 pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-bold text-slate-800">Service Categories</h3>
                    <span className="text-[10px] font-semibold text-[#ff5419]">View all</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { icon: "🖌️", name: "Painter" },
                      { icon: "🚰", name: "Borehole" },
                      { icon: "📐", name: "Architect" },
                      { icon: "🪚", name: "Carpenter" },
                    ].map((cat) => (
                      <div
                        key={cat.name}
                        className="bg-white rounded-xl p-1.5 flex flex-col items-center justify-center border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                      >
                        <span className="text-base mb-0.5">{cat.icon}</span>
                        <span className="text-[9px] font-semibold text-slate-700">
                          {cat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promo Card */}
                <div className="px-5 pb-3">
                  <div className="bg-[#ffcb74] rounded-2xl p-3 flex items-center justify-between relative overflow-hidden shadow-xs">
                    <div className="z-10 max-w-[140px]">
                      <span className="text-[8px] font-extrabold text-orange-900/80 uppercase tracking-wider block mb-0.5">
                        #PromoToday
                      </span>
                      <p className="text-[11px] font-bold text-slate-900 leading-tight mb-2">
                        Work with our best service provider
                      </p>
                      <button className="bg-slate-900 text-white text-[9px] font-bold px-3 py-1 rounded-md shadow-xs">
                        Book
                      </button>
                    </div>
                    {/* Worker illustration badge */}
                    <div className="w-14 h-14 rounded-full bg-orange-400/30 border-2 border-white/60 flex items-center justify-center text-2xl shadow-inner relative z-10">
                      👨‍🔧
                    </div>
                    {/* Background decorative blob */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-400/40 rounded-full" />
                  </div>
                </div>

                {/* Popular Services Section */}
                <div className="px-5 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-bold text-slate-800">Popular services</h3>
                    <span className="text-[10px] font-semibold text-[#ff5419]">View all</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "John Mason", role: "Electrician", rating: "4.9", emoji: "👷" },
                      { name: "Alex Rover", role: "Plumber", rating: "4.8", emoji: "🧑‍🏭" },
                    ].map((serv) => (
                      <div
                        key={serv.name}
                        className="bg-white rounded-xl p-2 border border-slate-100 shadow-xs flex items-center gap-2"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-base">
                          {serv.emoji}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-bold text-slate-800 truncate leading-tight">
                            {serv.name}
                          </p>
                          <p className="text-[8px] text-slate-400 truncate">{serv.role}</p>
                          <span className="text-[8px] font-bold text-amber-500">★ {serv.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-auto bg-white border-t border-slate-100 px-4 py-2 flex items-center justify-between text-slate-400 rounded-b-[42px]">
                  <div className="flex flex-col items-center text-[#ff5419]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="text-[8px] font-bold mt-0.5">Home</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[8px] font-medium mt-0.5">Jobs</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-[8px] font-medium mt-0.5">Workers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="text-[8px] font-medium mt-0.5">Services</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className="text-[8px] font-medium mt-0.5">Message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Benefits / Features */}
          <div className="w-full lg:w-[32%] text-white z-10 flex flex-col gap-8 lg:gap-10 lg:pl-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl leading-snug text-white">
                On-demand <br className="hidden sm:inline" />
                handyman services
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl leading-snug text-white">
                Service tracking <br className="hidden sm:inline" />
                and history
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg sm:text-xl leading-snug text-white">
                Task scheduling and <br className="hidden sm:inline" />
                reminders
              </h3>
            </div>
          </div>
        </div>

        {/* ── Partner / Client Brand Logos ── */}
        <div className="mt-28 lg:mt-36 flex flex-wrap justify-between items-center gap-8 px-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Logo 1: Crystal */}
          <div className="flex items-center gap-2.5">
            <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 2 8.5 5.5 22 18.5 22 22 8.5 12 2" opacity="0.85" />
            </svg>
            <div>
              <span className="font-black tracking-wider text-slate-800 text-sm sm:text-base block uppercase leading-none">
                CRYSTAL
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase block mt-0.5">
                creative gems
              </span>
            </div>
          </div>

          {/* Logo 2: Supreme */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-slate-800 rounded-md flex items-center justify-center text-white font-black text-sm italic">
              S
            </div>
            <div>
              <span className="font-black tracking-wider text-slate-800 text-sm sm:text-base block uppercase leading-none">
                SUPREME
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase block mt-0.5">
                creative letters
              </span>
            </div>
          </div>

          {/* Logo 3: Business */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full border-2 border-slate-700 flex items-center justify-center">
              <div className="w-3 h-3 bg-slate-700 rounded-xs transform rotate-45" />
            </div>
            <div>
              <span className="font-black tracking-wider text-slate-800 text-sm sm:text-base block uppercase leading-none">
                BUSINESS
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase block mt-0.5">
                commercial property
              </span>
            </div>
          </div>

          {/* Logo 4: Greenlab */}
          <div className="flex items-center gap-2.5">
            <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a1 1 0 0 1 1 1v3.1a8 8 0 1 1-2 0V3a1 1 0 0 1 1-1z" opacity="0.75" />
            </svg>
            <div>
              <span className="font-black tracking-wider text-slate-800 text-sm sm:text-base block leading-none">
                greenlab
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase block mt-0.5">
                biotechnology
              </span>
            </div>
          </div>

          {/* Logo 5: Butterfly */}
          <div className="flex items-center gap-2.5">
            <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4c-1.5-2-4-2.5-6-1-2.5 2-2 5.5 0 8 1 1.5 3 2.5 6 3 3-.5 5-1.5 6-3 2-2.5 2.5-6 0-8-2-1.5-4.5-1-6 1z" opacity="0.8" />
            </svg>
            <div>
              <span className="font-black tracking-wider text-slate-800 text-sm sm:text-base block leading-none">
                butterfly
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase block mt-0.5">
                creative beauty
              </span>
            </div>
          </div>

          {/* Logo 6: Birdwings */}
          <div className="flex items-center gap-2.5">
            <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 5c-5 0-9 4-11 8-1.5-3-4-5-8-6 2 4 4 7 8 9 4-1 8-5 11-11z" />
            </svg>
            <div>
              <span className="font-black tracking-wider text-slate-800 text-sm sm:text-base block leading-none">
                birdwings
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase block mt-0.5">
                creative design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
