"use client";

import Image from "next/image";
import React from "react";

export default function FindServicesSection() {
  return (
    <section
      id="find-services"
      className="bg-[#faf8f5] py-10 sm:py-14 lg:py-16 relative overflow-hidden flex items-center justify-center min-h-[50vh]"
    >
      {/* Background SVG decorative curved connection lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
        viewBox="0 0 1440 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Left Side Organic Doodle Line connecting avatars */}
        <path
          d="M -30 200 C 30 150, 90 120, 210 120 C 270 120, 290 170, 250 210 C 220 245, 170 230, 160 280 C 150 325, 210 335, 250 350"
          stroke="#18181b"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        {/* Left Branch to laughing avatar */}
        <path
          d="M 215 135 C 170 160, 150 200, 170 240"
          stroke="#18181b"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Right Side Organic Doodle Line connecting avatars */}
        <path
          d="M 1210 200 C 1180 230, 1165 260, 1165 300 C 1165 350, 1205 390, 1245 375 C 1290 360, 1345 395, 1470 410"
          stroke="#18181b"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        {/* Right Branch up to top shaved head avatar */}
        <path
          d="M 1165 270 C 1170 230, 1195 210, 1220 185"
          stroke="#18181b"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="relative min-h-[340px] sm:min-h-[380px] lg:min-h-[400px] flex items-center justify-center">
          {/* ════════ LEFT FLOATING AVATARS ════════ */}
          {/* Avatar 1: Top-Right (Smiling curly hair) */}
          <div className="hidden md:flex absolute left-[19%] lg:left-[18%] top-[6%] lg:top-[5%] z-10 flex-col items-center">
            <div className="w-20 h-20 lg:w-22 lg:h-22 rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Professional service worker"
                width={90}
                height={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Avatar 2: Mid-Left (Laughing man) */}
          <div className="hidden md:flex absolute left-[7%] lg:left-[9%] top-[42%] lg:top-[40%] z-10 flex-col items-center">
            <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
                alt="Satisfied client"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Avatar 3: Bottom-Center (Craftsman in apron) */}
          <div className="hidden md:flex absolute left-[16%] lg:left-[15%] bottom-[2%] lg:bottom-[4%] z-10 flex-col items-center">
            <div className="w-20 h-20 lg:w-22 lg:h-22 rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80"
                alt="Expert craftsman in apron"
                width={90}
                height={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ════════ CENTER HERO CONTENT ════════ */}
          <div className="text-center max-w-lg lg:max-w-xl mx-auto px-4 z-20 py-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Find professional <br />
              services in your area
            </h2>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-sm sm:max-w-md mx-auto">
              Pay workers securely, with confidence; Hire vetted, qualified
              workers for your projects.
            </p>


          </div>

          {/* ════════ RIGHT FLOATING AVATARS ════════ */}
          {/* Avatar 4: Top (Shaved head portrait) */}
          <div className="hidden md:flex absolute right-[17%] lg:left-auto lg:right-[16%] top-[4%] lg:top-[3%] z-10 flex-col items-center">
            <div className="w-20 h-20 lg:w-22 lg:h-22 rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                alt="Skilled professional"
                width={90}
                height={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Avatar 5: Mid-Left (Man with glasses) */}
          <div className="hidden md:flex absolute right-[23%] lg:right-[22%] top-[44%] lg:top-[42%] z-10 flex-col items-center">
            <div className="w-20 h-20 lg:w-22 lg:h-22 rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80"
                alt="Verified handyman contractor"
                width={90}
                height={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Avatar 6: Bottom-Right (Young man with orange ring/accent) */}
          <div className="hidden md:flex absolute right-[8%] lg:right-[9%] bottom-[6%] lg:bottom-[8%] z-10 flex-col items-center">
            <div className="relative">
              {/* Decorative Orange Crescent / Ring behind head */}
              <div className="absolute -top-1 -right-1 w-18 h-18 lg:w-22 lg:h-22 rounded-full border-[5px] border-[#ff5419] pointer-events-none transform rotate-45" />
              <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] relative z-10 hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
                  alt="Young verified worker"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile avatars preview row for small screens */}
        <div className="flex md:hidden justify-center items-center gap-2.5 mt-8 overflow-x-auto pb-1">
          {[
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
          ].map((src, i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0"
            >
              <Image
                src={src}
                alt="Worker avatar"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
