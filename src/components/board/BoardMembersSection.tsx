"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BoardMember {
  id: string;
  num: string;
  name: string;
  role: string;
  department: string;
  image: string;
  description: string;
  // Exact coordinates on main-bg.png (1145 x 1374)
  xPct: number; // Center X %
  yPct: number; // Center Y %
  radiusPct: number; // Hit zone radius %
  // Negative space editorial label position
  labelSide: "left" | "right";
  labelTopPct: number;
}

// ── 10 BOARD MEMBERS MAPPED TO THE MASTER GROUP PORTRAIT (main-bg.png) ──
// Strict hierarchical order:
// 1. Neeraj (Top center apex)
// 2. Nishad (Upper row, left)
// 3. Nithin (Upper row, right)
// 4. Vismay (Mid row, right)
// 5. Sreerag (Mid row, center)
// 6. Shamveel (Mid row, left)
// 7. Parveen (Front row, far-left)
// 8. Alka (Front row, center-left)
// 9. Anumol (Front row, center-right)
// 10. Beena (Front row, far-right)
const BOARD_MEMBERS: BoardMember[] = [
  {
    id: "neeraj",
    num: "01",
    name: "Neeraj",
    role: "Board Member",
    department: "Executive Leadership",
    image: "/board-members/neeraj.png",
    description:
      "Spearheading strategic initiatives, enterprise scale, and long-term vision, guiding Trend Ads toward international category leadership.",
    xPct: 49.3,
    yPct: 18.0,
    radiusPct: 11.5,
    labelSide: "left",
    labelTopPct: 12,
  },
  {
    id: "nishad",
    num: "02",
    name: "Nishad",
    role: "Board Member",
    department: "Strategic Direction",
    image: "/board-members/nishad.png",
    description:
      "Driving brand vision and corporate strategy, aligning long-term market opportunities with high-impact creative execution.",
    xPct: 29.2,
    yPct: 28.0,
    radiusPct: 11.0,
    labelSide: "left",
    labelTopPct: 26,
  },
  {
    id: "nithin",
    num: "03",
    name: "Nithin",
    role: "Board Member",
    department: "Technology & Systems",
    image: "/board-members/nithin.png",
    description:
      "Overseeing technological infrastructure and modern digital platforms that power high-velocity client growth and digital dominance.",
    xPct: 69.7,
    yPct: 29.5,
    radiusPct: 11.0,
    labelSide: "right",
    labelTopPct: 26,
  },
  {
    id: "vismay",
    num: "04",
    name: "Vismay",
    role: "Board Member",
    department: "Operations & Growth",
    image: "/board-members/vismay.png",
    description:
      "Directing operational excellence and scalable client delivery frameworks across global digital marketing channels.",
    xPct: 77.0,
    yPct: 44.0,
    radiusPct: 11.2,
    labelSide: "right",
    labelTopPct: 56,
  },
  {
    id: "sreerag",
    num: "05",
    name: "Sreerag",
    role: "Board Member",
    department: "Creative Strategy",
    image: "/board-members/sreerag.png",
    description:
      "Championing bold creative direction, innovative 3D visual languages, and award-winning campaign architecture.",
    xPct: 49.7,
    yPct: 42.0,
    radiusPct: 10.8,
    labelSide: "right",
    labelTopPct: 42,
  },
  {
    id: "shamveel",
    num: "06",
    name: "Shamveel",
    role: "Board Member",
    department: "Media & Acquisition",
    image: "/board-members/shamveel.png",
    description:
      "Architecting algorithmic media buying, paid scaling frameworks, and performance-driven revenue compounding.",
    xPct: 19.5,
    yPct: 44.0,
    radiusPct: 11.0,
    labelSide: "left",
    labelTopPct: 42,
  },
  {
    id: "parveen",
    num: "07",
    name: "Parveen",
    role: "Board Member",
    department: "Brand Governance",
    image: "/board-members/parveen.png",
    description:
      "Guiding brand integrity, client partnership standards, and sustainable cross-market enterprise governance.",
    xPct: 16.5,
    yPct: 65.0,
    radiusPct: 12.0,
    labelSide: "left",
    labelTopPct: 60,
  },
  {
    id: "alka",
    num: "08",
    name: "Alka",
    role: "Board Member",
    department: "People & Organization",
    image: "/board-members/alka.png",
    description:
      "Cultivating high-performance agency culture, organizational leadership, and executive talent acceleration.",
    xPct: 41.5,
    yPct: 66.0,
    radiusPct: 12.0,
    labelSide: "left",
    labelTopPct: 76,
  },
  {
    id: "anumol",
    num: "09",
    name: "Anumol",
    role: "Board Member",
    department: "Finance & Advisory",
    image: "/board-members/anumol.png",
    description:
      "Steering financial governance, fiscal discipline, and venture resource allocation for scalable expansion.",
    xPct: 63.5,
    yPct: 66.0,
    radiusPct: 12.0,
    labelSide: "right",
    labelTopPct: 70,
  },
  {
    id: "beena",
    num: "10",
    name: "Beena",
    role: "Board Member",
    department: "Corporate Governance",
    image: "/board-members/beena.png",
    description:
      "Ensuring regulatory excellence, corporate compliance, and long-term shareholder trust across all operations.",
    xPct: 84.5,
    yPct: 67.0,
    radiusPct: 12.0,
    labelSide: "right",
    labelTopPct: 84,
  },
];

export default function BoardMembersSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const activeId = hoveredId || selectedId;
  const activeMember = BOARD_MEMBERS.find((m) => m.id === activeId);

  // Subtle interactive 3D perspective tilt on pointer movement
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: x * 4, y: -y * 4 });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHoveredId(null);
  }, []);

  // Dismiss selection on Escape or clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setSelectedId(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null);
        setHoveredId(null);
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMemberSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      ref={containerRef}
      id="board-members"
      className="bg-[#07080b] py-20 sm:py-28 lg:py-32 relative overflow-hidden text-white select-none"
    >
      {/* ── Cinematic Studio Ambient Atmosphere ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] pointer-events-none opacity-25 blur-[160px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #ff5419 0%, #c0200a 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-1/3 w-[550px] h-[400px] pointer-events-none opacity-15 blur-[140px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #f97316 0%, #ff5419 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle architectural tech grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5419]/10 border border-[#ff5419]/25 text-[#ff7a45] text-xs font-bold tracking-wider uppercase mb-4 shadow-[0_0_20px_rgba(255,84,25,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#ff5419] animate-pulse" />
            EXECUTIVE COUNCIL
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Board of Directors <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white/70">
              & Executive Council
            </span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
            10 visionary leaders united in one cohesive leadership ensemble.
            Hover or tap any member to spotlight their strategic profile.
          </p>
        </div>

        {/* ── UNIFIED MASTER GROUP PORTRAIT STAGE ── */}
        <div className="relative max-w-[1040px] mx-auto">
          
          {/* ── EDITORIAL SIDE LABELS: LEFT COLUMN (Desktop only) ── */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[190px] z-30 pointer-events-none">
            {BOARD_MEMBERS.filter((m) => m.labelSide === "left").map((member) => {
              const isSelected = activeId === member.id;
              const isOther = Boolean(activeId) && !isSelected;

              return (
                <div
                  key={`left-${member.id}`}
                  style={{ top: `${member.labelTopPct}%` }}
                  className="absolute left-0 w-full pointer-events-auto transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => handleMemberSelect(member.id)}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`flex flex-col items-start text-left cursor-pointer group transition-all duration-300 ${
                      isSelected
                        ? "scale-105 opacity-100 translate-x-2"
                        : isOther
                        ? "opacity-30 blur-[0.5px]"
                        : "opacity-80 hover:opacity-100 hover:translate-x-1"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono tracking-widest font-bold mb-0.5 transition-colors ${
                        isSelected ? "text-[#ff7a45]" : "text-slate-400 group-hover:text-[#ff7a45]"
                      }`}
                    >
                      // {member.num}
                    </span>
                    <h3
                      className={`text-sm lg:text-base font-black uppercase tracking-tight leading-tight transition-colors ${
                        isSelected ? "text-[#ff7a45]" : "text-white group-hover:text-[#ff7a45]"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium leading-tight">
                      {member.department}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── EDITORIAL SIDE LABELS: RIGHT COLUMN (Desktop only) ── */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[190px] z-30 pointer-events-none">
            {BOARD_MEMBERS.filter((m) => m.labelSide === "right").map((member) => {
              const isSelected = activeId === member.id;
              const isOther = Boolean(activeId) && !isSelected;

              return (
                <div
                  key={`right-${member.id}`}
                  style={{ top: `${member.labelTopPct}%` }}
                  className="absolute right-0 w-full pointer-events-auto transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => handleMemberSelect(member.id)}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`flex flex-col items-end text-right cursor-pointer group transition-all duration-300 ml-auto ${
                      isSelected
                        ? "scale-105 opacity-100 -translate-x-2"
                        : isOther
                        ? "opacity-30 blur-[0.5px]"
                        : "opacity-80 hover:opacity-100 hover:-translate-x-1"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono tracking-widest font-bold mb-0.5 transition-colors ${
                        isSelected ? "text-[#ff7a45]" : "text-slate-400 group-hover:text-[#ff7a45]"
                      }`}
                    >
                      {member.num} //
                    </span>
                    <h3
                      className={`text-sm lg:text-base font-black uppercase tracking-tight leading-tight transition-colors ${
                        isSelected ? "text-[#ff7a45]" : "text-white group-hover:text-[#ff7a45]"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium leading-tight">
                      {member.department}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── MASTER GROUP PHOTO CANVAS (Single Authentic Composite) ── */}
          <div
            ref={stageRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative w-full max-w-[660px] sm:max-w-[700px] lg:max-w-[740px] mx-auto aspect-[1145/1374] overflow-visible mb-6"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: "transform 0.15s cubic-bezier(0.2, 0, 0.3, 1)",
            }}
          >
            {/* Backlight halo behind the leadership pyramid */}
            <div
              className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none -z-10 opacity-35 blur-[90px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,84,25,0.4) 0%, rgba(192,32,10,0.18) 50%, transparent 75%)",
              }}
            />

            {/* ── THE MASTER COMPOSITE GROUP IMAGE ── */}
            <div
              className="relative w-full h-full select-none"
              style={{
                // Seamless photographic bottom fade that dissolves suits cleanly into the dark background
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.3) 93%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.3) 93%, transparent 100%)",
              }}
            >
              <Image
                src="/board-members/main-bg.png"
                alt="Trend Ads Board of Directors & Executive Council"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 740px"
                className="object-contain object-top select-none pointer-events-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] contrast-[1.04] brightness-[0.98]"
              />
            </div>

            {/* Clean bottom atmospheric dissolve overlay (hides any brush cut edges with pure studio luxury) */}
            <div
              className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to top, #07080b 10%, rgba(7,8,11,0.88) 45%, rgba(7,8,11,0.4) 75%, transparent 100%)",
              }}
            />

            {/* ── INTERACTIVE DYNAMIC SPOTLIGHT OVERLAY ── */}
            {activeMember && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 pointer-events-none z-15"
                style={{
                  background: `radial-gradient(circle at ${activeMember.xPct}% ${activeMember.yPct}%, rgba(255,84,25,0.38) 0%, rgba(255,84,25,0.12) 28%, transparent 55%)`,
                }}
              />
            )}

            {/* ── 10 SURGICALLY ACCURATE INTERACTIVE HOTSPOTS ── */}
            {BOARD_MEMBERS.map((member) => {
              const isSelected = activeId === member.id;

              return (
                <div
                  key={`hotspot-${member.id}`}
                  style={{
                    left: `${member.xPct}%`,
                    top: `${member.yPct}%`,
                    width: `${member.radiusPct * 2}%`,
                    height: `${member.radiusPct * 2}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-25 group"
                >
                  {/* Contoured Touch & Hover Button */}
                  <button
                    type="button"
                    onClick={() => handleMemberSelect(member.id)}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(member.id)}
                    onBlur={() => setHoveredId(null)}
                    aria-label={`Select ${member.name}, ${member.role}`}
                    className="w-full h-full rounded-full cursor-pointer focus:outline-none touch-manipulation relative transition-all duration-300"
                    style={{
                      background: isSelected
                        ? "radial-gradient(circle, rgba(255,84,25,0.2) 0%, transparent 70%)"
                        : "transparent",
                    }}
                  >
                    {/* Targeting reticle aura when active */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="absolute inset-0 rounded-full border border-[#ff5419]/70 shadow-[0_0_25px_rgba(255,84,25,0.5)] pointer-events-none"
                        />
                      )}
                    </AnimatePresence>
                  </button>

                  {/* Floating Head Tag Badge */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-7 left-1/2 -translate-x-1/2 z-40 px-2.5 py-0.5 rounded-full bg-[#ff5419] text-white text-[9.5px] font-mono font-bold tracking-wider uppercase shadow-[0_0_18px_rgba(255,84,25,0.7)] whitespace-nowrap pointer-events-none"
                      >
                        {member.num} // {member.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>
        </div>

        {/* ── EXECUTIVE MEMBER PROFILE MODAL (Mobile & All Screens) ── */}
        <AnimatePresence>
          {selectedId && (() => {
            const selectedMember = BOARD_MEMBERS.find((m) => m.id === selectedId);
            if (!selectedMember) return null;

            return (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop Blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedId(null)}
                  className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
                />

                {/* Modal Dialog Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ type: "spring", damping: 26, stiffness: 320 }}
                  className="relative w-full max-w-md bg-[#0d0f15] border border-[#ff5419]/35 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 flex flex-col text-white"
                >
                  {/* Header Bar */}
                  <div className="flex items-center justify-between px-5 pt-4 pb-1 z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5419]/15 border border-[#ff5419]/30 text-[#ff7a45] text-[10px] font-mono font-bold tracking-wider uppercase">
                      <span>LEADERSHIP // {selectedMember.num}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedId(null)}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-sm"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Individual Member Cutout Portrait */}
                  <div className="relative w-full h-64 sm:h-72 flex items-end justify-center overflow-hidden">
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 pointer-events-none opacity-30 blur-3xl rounded-full"
                      style={{
                        background: "radial-gradient(circle, #ff5419 0%, transparent 70%)",
                      }}
                    />
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={340}
                      height={400}
                      priority
                      className="relative z-10 max-h-full w-auto object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0d0f15] to-transparent z-10" />
                  </div>

                  {/* Member Details */}
                  <div className="p-5 sm:p-6 pt-2 text-left">
                    <div className="flex items-baseline justify-between mb-0.5">
                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                        {selectedMember.name}
                      </h3>
                      <span className="text-[11px] font-mono font-semibold text-[#ff7a45]">
                        {selectedMember.department}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-[#ff5419] mb-2.5">
                      {selectedMember.role}
                    </p>

                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                      {selectedMember.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
