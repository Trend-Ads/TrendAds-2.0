"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface BoardMember {
  id: string;
  num: string;
  name: string;
  role: string;
  department: string;
  image: string;
  description: string;
  linkedIn?: string;
  instagram?: string;
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
    name: "Neeraj Sudheer",
    role: "Founder & CEO",
    department: "Executive Leadership",
    image: "/board-members/neeraj.png",
    linkedIn: "https://www.linkedin.com/in/neeraj-sudheer-4b8528360",
    instagram: "https://www.instagram.com/neeraj_nrj.in",
    description:
      "Spearheading strategic initiatives, enterprise scale, and long-term vision, guiding Trend Ads toward international category leadership as Founder & CEO.",
    xPct: 49.3,
    yPct: 18.0,
    radiusPct: 11.5,
    labelSide: "left",
    labelTopPct: 12,
  },
  {
    id: "nishad",
    num: "02",
    name: "Nishad. S",
    role: "COO - Chief Operating Officer",
    department: "Strategic Direction",
    image: "/board-members/nishad.png",
    linkedIn: "https://www.linkedin.com/in/nishad-mathur-palakkode-15a28b186?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/nishad_coo?stkn=N2IzMmh5ZzYxemtw",
    description:
      "Directing operational workflows, scalable business delivery, and high-impact agency operations as Chief Operating Officer.",
    xPct: 29.2,
    yPct: 28.0,
    radiusPct: 11.0,
    labelSide: "left",
    labelTopPct: 26,
  },
  {
    id: "nithin",
    num: "03",
    name: "Nithinkumar ks",
    role: "Creative Director",
    department: "Creative & Brand Vision",
    image: "/board-members/nithin.png",
    linkedIn: "https://www.linkedin.com/in/nithinkumar-ks-482659381",
    instagram: "https://www.instagram.com/nitin_graphics_designerr",
    description:
      "Overseeing design direction, artistic excellence, and high-standard creative execution across all agency deliverables as Creative Director.",
    xPct: 69.7,
    yPct: 29.5,
    radiusPct: 11.0,
    labelSide: "right",
    labelTopPct: 26,
  },
  {
    id: "vismay",
    num: "04",
    name: "Vismay V J",
    role: "CMO - Chief Marketing Officer",
    department: "Marketing & Growth",
    image: "/board-members/vismay.png",
    linkedIn: "https://www.linkedin.com/in/vismayvj/",
    instagram: "https://www.instagram.com/v_i_s_m__a_y",
    description:
      "Driving global marketing growth, client acquisition campaigns, and full-funnel brand visibility as Chief Marketing Officer.",
    xPct: 77.0,
    yPct: 44.0,
    radiusPct: 11.2,
    labelSide: "right",
    labelTopPct: 56,
  },
  {
    id: "sreerag",
    num: "05",
    name: "Sreerag P.P",
    role: "Creative Head",
    department: "Creative Strategy",
    image: "/board-members/sreerag.png",
    linkedIn: "https://www.linkedin.com/in/sreeragh-p-p-a4b786434?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/sreeragh.official",
    description:
      "Championing bold visual identities, innovative design strategies, and breakthrough creative concepts as Creative Head.",
    xPct: 49.7,
    yPct: 42.0,
    radiusPct: 10.8,
    labelSide: "right",
    labelTopPct: 42,
  },
  {
    id: "shamveel",
    num: "06",
    name: "Shamveel P",
    role: "HWD - Head of Web Development",
    department: "Web Engineering & Tech",
    image: "/board-members/shamveel.png",
    linkedIn: "https://www.linkedin.com/in/shamveel-p/",
    instagram: "https://www.instagram.com/_shamveel._/",
    description:
      "Architecting modern web platforms, interactive web experiences, and scalable front-end systems as Head of Web Development.",
    xPct: 19.5,
    yPct: 44.0,
    radiusPct: 11.0,
    labelSide: "left",
    labelTopPct: 42,
  },
  {
    id: "parveen",
    num: "07",
    name: "Parveen Musthafa",
    role: "Marketing Head",
    department: "Campaigns & Outreach",
    image: "/board-members/parveen.png",
    linkedIn: "https://in.linkedin.com/in/parveen-n-542694435",
    description:
      "Leading client engagement campaigns, brand outreach strategies, and high-impact marketing initiatives as Marketing Head.",
    xPct: 16.5,
    yPct: 65.0,
    radiusPct: 12.0,
    labelSide: "left",
    labelTopPct: 60,
  },
  {
    id: "alka",
    num: "08",
    name: "Alka Manoj",
    role: "Head of Content & Creative",
    department: "Content & Storytelling",
    image: "/board-members/alka.png",
    instagram: "https://www.instagram.com/aerin_nnnn13?igsi=M2NuaDE1NXVkNnNy",
    description:
      "Curating compelling digital content, multi-platform brand storytelling, and campaign messaging as Head of Content & Creative.",
    xPct: 41.5,
    yPct: 66.0,
    radiusPct: 12.0,
    labelSide: "left",
    labelTopPct: 76,
  },
  {
    id: "anumol",
    num: "09",
    name: "Anumole A",
    role: "Mentor & Strategic Advisor",
    department: "Strategic Advisory",
    image: "/board-members/anumol.png",
    description:
      "Providing executive mentorship, leadership guidance, and enterprise strategic counsel as Mentor & Strategic Advisor.",
    xPct: 63.5,
    yPct: 66.0,
    radiusPct: 12.0,
    labelSide: "right",
    labelTopPct: 70,
  },
  {
    id: "beena",
    num: "10",
    name: "Beena Mohammed Ali",
    role: "Creative Head",
    department: "Creative Direction",
    image: "/board-members/beena.png",
    description:
      "Guiding creative standards, brand aesthetic excellence, and quality execution across agency projects as Creative Head.",
    xPct: 84.5,
    yPct: 67.0,
    radiusPct: 12.0,
    labelSide: "right",
    labelTopPct: 84,
  },
];

const emptySubscribe = () => () => {};

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

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Stop background scroll and pause Lenis when modal is open
  useEffect(() => {
    if (!selectedId) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Pause Lenis smooth scroll if active
    const win = window as unknown as { lenis?: { stop: () => void; start: () => void } };
    win.lenis?.stop();

    // Prevent wheel & touch on background outside the modal card
    const handleWheelOrTouch = (e: TouchEvent | WheelEvent) => {
      const modalEl = document.getElementById("board-member-modal-card");
      if (modalEl && modalEl.contains(e.target as Node)) {
        return;
      }
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheelOrTouch, { passive: false });
    window.addEventListener("touchmove", handleWheelOrTouch, { passive: false });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      win.lenis?.start();
      window.removeEventListener("wheel", handleWheelOrTouch);
      window.removeEventListener("touchmove", handleWheelOrTouch);
    };
  }, [selectedId]);

  // Dismiss selection on Escape or clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectedId) return;
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
  }, [selectedId]);

  const handleMemberSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      ref={containerRef}
      id="board-members"
      className="bg-[#07080b] pt-16 sm:pt-28 lg:pt-32 pb-2 sm:pb-4 lg:pb-6 relative overflow-hidden text-white select-none"
    >
      {/* ── Cinematic Studio Ambient Atmosphere ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] pointer-events-none opacity-30 blur-[160px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #1B2CC1 0%, #0c1566 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-1/3 w-[550px] h-[400px] pointer-events-none opacity-20 blur-[140px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #3B82F6 0%, #1B2CC1 60%, transparent 80%)",
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
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Board Members <br className="hidden sm:inline" />
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
            The visionary leaders shaping the future of Trend Ads.
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
                        isSelected ? "text-[#5B7BFF]" : "text-slate-400 group-hover:text-[#5B7BFF]"
                      }`}
                    >
                      {member.num}
                    </span>
                    <h3
                      className={`text-sm lg:text-base font-black uppercase tracking-tight leading-tight transition-colors ${
                        isSelected ? "text-[#5B7BFF]" : "text-white group-hover:text-[#5B7BFF]"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-medium leading-tight">
                      {member.role}
                    </p>
                    {(member.linkedIn || member.instagram) && (
                      <div className="flex items-center gap-1.5 mt-1.5">
                        {member.linkedIn && (
                          <a
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-5 h-5 rounded-full bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                            aria-label={`${member.name} on LinkedIn`}
                            title="LinkedIn"
                          >
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                          </a>
                        )}
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-5 h-5 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                            aria-label={`${member.name} on Instagram`}
                            title="Instagram"
                          >
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── EDITORIAL SIDE LABELS: RIGHT COLUMN (Desktop only) ── */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[200px] z-30 pointer-events-none">
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
                        isSelected ? "text-[#5B7BFF]" : "text-slate-400 group-hover:text-[#5B7BFF]"
                      }`}
                    >
                      {member.num}
                    </span>
                    <h3
                      className={`text-sm lg:text-base font-black uppercase tracking-tight leading-tight transition-colors ${
                        isSelected ? "text-[#5B7BFF]" : "text-white group-hover:text-[#5B7BFF]"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-medium leading-tight">
                      {member.role}
                    </p>
                    {(member.linkedIn || member.instagram) && (
                      <div className="flex items-center justify-end gap-1.5 mt-1.5 ml-auto">
                        {member.linkedIn && (
                          <a
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-5 h-5 rounded-full bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                            aria-label={`${member.name} on LinkedIn`}
                            title="LinkedIn"
                          >
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                          </a>
                        )}
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-5 h-5 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                            aria-label={`${member.name} on Instagram`}
                            title="Instagram"
                          >
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
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
            className="relative w-[calc(100%+1.25rem)] -mx-2.5 sm:w-full sm:mx-auto max-w-[660px] sm:max-w-[700px] lg:max-w-[740px] aspect-[1145/1374] overflow-visible mb-0"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: "transform 0.15s cubic-bezier(0.2, 0, 0.3, 1)",
            }}
          >
            {/* Backlight halo behind the leadership pyramid */}
            <div
              className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none -z-10 opacity-40 blur-[90px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(27,44,193,0.5) 0%, rgba(12,21,102,0.2) 50%, transparent 75%)",
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
                  background: `radial-gradient(circle at ${activeMember.xPct}% ${activeMember.yPct}%, rgba(27,44,193,0.42) 0%, rgba(27,44,193,0.15) 28%, transparent 55%)`,
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
                        ? "radial-gradient(circle, rgba(27,44,193,0.3) 0%, transparent 70%)"
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
                          className="absolute inset-0 rounded-full border border-[#1B2CC1]/80 shadow-[0_0_25px_rgba(27,44,193,0.7)] pointer-events-none"
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
                        className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 z-40 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#1B2CC1] text-white text-[9px] sm:text-[9.5px] font-mono font-bold tracking-wider uppercase shadow-[0_0_18px_rgba(27,44,193,0.85)] border border-[#ABD2FA]/40 whitespace-nowrap pointer-events-none"
                      >
                        {member.num} · {member.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>
        </div>

        {/* ── EXECUTIVE MEMBER PROFILE MODAL (Portaled to body, above Navbar with backdrop blur) ── */}
        {isClient &&
          createPortal(
            <AnimatePresence>
              {selectedId && (() => {
                const selectedMember = BOARD_MEMBERS.find((m) => m.id === selectedId);
                if (!selectedMember) return null;

                return (
                  <div
                    data-lenis-prevent="true"
                    className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 select-none"
                  >
                    {/* Backdrop Blur that covers everything including Navbar */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSelectedId(null)}
                      className="fixed inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
                    />

                    {/* Modal Dialog Card */}
                    <motion.div
                      id="board-member-modal-card"
                      initial={{ opacity: 0, scale: 0.9, y: 25 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: 15 }}
                      transition={{ type: "spring", damping: 26, stiffness: 320 }}
                      className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#090c19] border border-[#1B2CC1]/40 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 flex flex-col text-white"
                    >
                      {/* Header Bar */}
                      <div className="flex items-center justify-between px-5 pt-4 pb-1 z-20">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B2CC1]/20 border border-[#1B2CC1]/50 text-[#ABD2FA] text-[10px] font-mono font-bold tracking-wider uppercase">
                          <span>LEADERSHIP · {selectedMember.num}</span>
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
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 pointer-events-none opacity-35 blur-3xl rounded-full"
                          style={{
                            background: "radial-gradient(circle, #1B2CC1 0%, transparent 70%)",
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
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#090c19] to-transparent z-10" />
                      </div>

                      {/* Member Details */}
                      <div className="p-5 sm:p-6 pt-2 text-left">
                        <div className="flex items-baseline justify-between mb-0.5">
                          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                            {selectedMember.name}
                          </h3>
                          <span className="text-[11px] font-mono font-semibold text-[#ABD2FA]">
                            {selectedMember.department}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm font-semibold text-[#5B7BFF] mb-2.5">
                          {selectedMember.role}
                        </p>

                        <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal mb-4">
                          {selectedMember.description}
                        </p>

                        {/* Social Media Links */}
                        {(selectedMember.linkedIn || selectedMember.instagram) && (
                          <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                            <span className="text-xs font-semibold text-slate-400">Connect:</span>
                            <div className="flex items-center gap-2">
                              {selectedMember.linkedIn && (
                                <a
                                  href={selectedMember.linkedIn}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#0077b5] text-white text-xs font-semibold transition-all hover:scale-105 shadow-xs"
                                  aria-label={`${selectedMember.name} on LinkedIn`}
                                >
                                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                  </svg>
                                  <span>LinkedIn</span>
                                </a>
                              )}
                              {selectedMember.instagram && (
                                <a
                                  href={selectedMember.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white text-xs font-semibold transition-all hover:scale-105 shadow-xs"
                                  aria-label={`${selectedMember.name} on Instagram`}
                                >
                                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                  </svg>
                                  <span>Instagram</span>
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                );
              })()}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </section>
  );
}
