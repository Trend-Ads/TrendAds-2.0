"use client";

import Image from "next/image";
import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface BoardMember {
  id: string;
  num: string;
  name: string;
  firstName: string;
  role: string;
  department: string;
  image: string;
  description: string;
  linkedIn?: string;
  instagram?: string;
}

// ── 11 BOARD MEMBERS ──
const BOARD_MEMBERS: BoardMember[] = [
  {
    id: "neeraj",
    num: "01",
    name: "Neeraj Sudheer",
    firstName: "Neeraj",
    role: "Founder & CEO",
    department: "Executive Leadership",
    image: "/board-members/neeraj.png",
    linkedIn: "https://www.linkedin.com/in/neeraj-sudheer-4b8528360",
    instagram: "https://www.instagram.com/neeraj_nrj.in",
    description:
      "Spearheading strategic initiatives, enterprise scale, and long-term vision, guiding Trend Ads toward international category leadership as Founder & CEO.",
  },
  {
    id: "nishad",
    num: "02",
    name: "Nishad. S",
    firstName: "Nishad",
    role: "Chief Operating Officer",
    department: "Strategic Direction",
    image: "/board-members/nishad.png",
    linkedIn:
      "https://www.linkedin.com/in/nishad-mathur-palakkode-15a28b186?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/nishad_coo?stkn=N2IzMmh5ZzYxemtw",
    description:
      "Directing operational workflows, scalable business delivery, and high-impact agency operations as Chief Operating Officer.",
  },
  {
    id: "nithin",
    num: "03",
    name: "Nithinkumar ks",
    firstName: "Nithin",
    role: "Creative Director",
    department: "Creative & Brand Vision",
    image: "/board-members/nithin.png",
    linkedIn: "https://www.linkedin.com/in/nithinkumar-ks-482659381",
    instagram: "https://www.instagram.com/nitin_graphics_designerr",
    description:
      "Overseeing design direction, artistic excellence, and high-standard creative execution across all agency deliverables as Creative Director.",
  },
  {
    id: "vismay",
    num: "04",
    name: "Vismay V J",
    firstName: "Vismay",
    role: "Chief Marketing Officer",
    department: "Marketing & Growth",
    image: "/board-members/vismay.png",
    linkedIn: "https://www.linkedin.com/in/vismayvj/",
    instagram: "https://www.instagram.com/v_i_s_m__a_y",
    description:
      "Driving global marketing growth, client acquisition campaigns, and full-funnel brand visibility as Chief Marketing Officer.",
  },
  {
    id: "sreerag",
    num: "05",
    name: "Sreerag P.P",
    firstName: "Sreerag",
    role: "Creative Head",
    department: "Creative Strategy",
    image: "/board-members/sreerag.png",
    linkedIn:
      "https://www.linkedin.com/in/sreeragh-p-p-a4b786434?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/sreeragh.official",
    description:
      "Championing bold visual identities, innovative design strategies, and breakthrough creative concepts as Creative Head.",
  },
  {
    id: "shamveel",
    num: "06",
    name: "Shamveel P",
    firstName: "Shamveel",
    role: "Head of Web Development",
    department: "Web Engineering & Tech",
    image: "/board-members/shamveel.png",
    linkedIn: "https://www.linkedin.com/in/shamveel-p/",
    instagram: "https://www.instagram.com/_shamveel._/",
    description:
      "Architecting modern web platforms, interactive web experiences, and scalable front-end systems as Head of Web Development.",
  },
  {
    id: "parveen",
    num: "07",
    name: "Parveen Musthafa",
    firstName: "Parveen",
    role: "Marketing Head",
    department: "Campaigns & Outreach",
    image: "/board-members/parveen.png",
    linkedIn: "https://in.linkedin.com/in/parveen-n-542694435",
    description:
      "Leading client engagement campaigns, brand outreach strategies, and high-impact marketing initiatives as Marketing Head.",
  },
  {
    id: "alka",
    num: "08",
    name: "Alka Manoj",
    firstName: "Alka",
    role: "Head of Content & Creative",
    department: "Content & Storytelling",
    image: "/board-members/alka.png",
    instagram: "https://www.instagram.com/aerin_nnnn13?igsi=M2NuaDE1NXVkNnNy",
    description:
      "Curating compelling digital content, multi-platform brand storytelling, and campaign messaging as Head of Content & Creative.",
  },
  {
    id: "anumol",
    num: "09",
    name: "Anumole A",
    firstName: "Anumol",
    role: "Mentor & Strategic Advisor",
    department: "Strategic Advisory",
    image: "/board-members/anumol.png",
    description:
      "Providing executive mentorship, leadership guidance, and enterprise strategic counsel as Mentor & Strategic Advisor.",
  },
  {
    id: "beena",
    num: "10",
    name: "Beena Mohammed Ali",
    firstName: "Beena",
    role: "Customer Support",
    department: "Customer Support",
    image: "/board-members/beena.png",
    description:
      "Providing proactive customer care, smooth client onboarding, and dedicated client service delivery as Customer Support.",
  },
  {
    id: "nejumath",
    num: "11",
    name: "Nejumath Zeyana",
    firstName: "Nejumath",
    role: "Customer Support",
    department: "Customer Support",
    image: "/board-members/nejumath.png",
    description:
      "Delivering dedicated client assistance, seamless communication, and responsive customer care as Customer Support.",
  },
];

const emptySubscribe = () => () => {};

export default function BoardMembersSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Modal backdrop lock & escape key
  useEffect(() => {
    if (!selectedId) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedId]);

  const selectedMember = BOARD_MEMBERS.find((m) => m.id === selectedId);

  return (
    <section
      id="board-members"
      className="bg-[#07080b] pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 relative overflow-hidden text-white select-none"
    >
      {/* ── Ambient Studio Atmosphere ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] pointer-events-none opacity-30 blur-[160px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #091540 0%, #050b24 55%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-1/3 w-[550px] h-[400px] pointer-events-none opacity-20 blur-[140px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #1B2CC1 0%, #091540 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* ── Section Title (Matching Reference: "Board Of Directors") ── */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Board Members
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 font-normal max-w-lg mx-auto">
            The executive leaders and multidisciplinary directors driving exponential client growth.
          </p>
        </div>

        {/* ── CARD GRID (5 Columns x 2 Rows) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-7 max-w-6xl mx-auto">
          {BOARD_MEMBERS.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedId(member.id)}
              className={`group cursor-pointer flex flex-col relative transition-all duration-300 hover:-translate-y-2.5 select-none ${
                member.id === "nejumath"
                  ? "col-span-2 max-w-[calc(50%-0.5rem)] sm:max-w-none sm:col-span-1 mx-auto w-full lg:col-start-3"
                  : ""
              }`}
            >
              {/* 
                ── THE DUAL-COLORED CARD (#091540 DARK BLUE + WHITE) ──
                • Left side (~58%): #091540 with rounded-tl-[44px] and "Directors" vertical outline
                • Right side: Pure White
                • Bottom band: #091540 with blackish shadow gradient behind text
                • Cutout Portrait: Enlarged with 3D pop-out over the top
                • Socials: LinkedIn & Instagram buttons in bottom bar
              */}
              <div className="relative w-full aspect-[1/1.44] rounded-2xl rounded-tl-[42px] sm:rounded-tl-[52px] overflow-hidden bg-white shadow-[0_14px_36px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_45px_rgba(9,21,64,0.6)] transition-all duration-300 border border-slate-200/20">
                {/* 1. Left Side: #091540 Dark Blue Pillar with Rounded Top-Left */}
                <div className="absolute left-0 top-0 bottom-0 w-[58%] bg-[#091540] rounded-tl-[42px] sm:rounded-tl-[52px] pointer-events-none">
                  {/* Vertical Outline Watermark with Member's First Name */}
                  <div className="absolute left-2 sm:left-3 top-8 sm:top-12 bottom-20 flex items-center pointer-events-none z-0">
                    <span
                      className="[writing-mode:vertical-rl] rotate-180 text-lg sm:text-2xl font-black uppercase tracking-widest text-transparent opacity-35 select-none"
                      style={{
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.7)",
                        fontFamily: "var(--font-display, sans-serif)",
                      }}
                    >
                      {member.firstName}
                    </span>
                  </div>
                </div>

                {/* 2. Right Side: Pure White (card container bg-white) */}

                {/* 3. Enlarged Cutout Portrait (Centered, head pops out over the top) */}
                <div className="absolute inset-x-0 bottom-16 sm:bottom-20 top-0 flex items-end justify-center pointer-events-none z-15 overflow-visible">
                  <div
                    className={`relative w-full h-[126%] flex items-end justify-center transition-transform duration-300 ${
                      member.id === "beena"
                        ? "scale-[0.94] sm:scale-[0.98] translate-y-12 sm:translate-y-14 group-hover:scale-[1.02]"
                        : "scale-[1.16] sm:scale-[1.22] group-hover:scale-[1.24]"
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                      className="object-contain object-bottom filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.38)]"
                      priority={member.id === "neeraj"}
                    />
                  </div>
                </div>

                {/* 4. Full-Width Bottom Bar in #091540 with Blackish Gradient Shadow */}
                <div className="absolute inset-x-0 bottom-0 min-h-[64px] sm:min-h-[72px] bg-[#091540] z-20 flex items-center justify-between px-3 sm:px-4 text-left border-t border-white/10 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
                  {/* Blackish Gradient Shadow behind text to strongly highlight text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />

                  {/* Name & Role Text Block */}
                  <div className="relative z-10 min-w-0 flex-1 pr-1.5">
                    <h3 className="text-xs sm:text-[13.5px] font-bold text-white tracking-tight leading-snug truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-[10.5px] text-[#14FFEC] font-semibold tracking-wide truncate mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Media Connect Icons directly on card */}
                  {(member.linkedIn || member.instagram) && (
                    <div className="relative z-10 flex items-center gap-1.5 shrink-0 ml-1">
                      {member.linkedIn && (
                        <a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-6 h-6 rounded-full bg-white/15 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs cursor-pointer border border-white/20"
                          aria-label={`${member.name} on LinkedIn`}
                          title="LinkedIn"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
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
                          className="w-6 h-6 rounded-full bg-white/15 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs cursor-pointer border border-white/20"
                          aria-label={`${member.name} on Instagram`}
                          title="Instagram"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {/* ── EXECUTIVE DOSSIER MODAL (Full Details on Member Tap) ── */}
      {isClient &&
        createPortal(
          <AnimatePresence>
            {selectedMember && (
              <div
                className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                onClick={() => setSelectedId(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ type: "spring", damping: 26, stiffness: 320 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#090c19] border border-[#2196F3]/50 rounded-3xl p-6 sm:p-7 text-white shadow-[0_25px_80px_rgba(0,0,0,0.95)] space-y-5"
                >
                  {/* Header Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2196F3]/20 border border-[#2196F3]/50 text-[#64B5F6] text-[10px] font-bold tracking-wider uppercase">
                      <span>LEADERSHIP DOSSIER · {selectedMember.num}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedId(null)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-sm"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Cutout Portrait in Modal */}
                  <div className="relative w-full h-56 sm:h-64 flex items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#2196F3] to-[#1565C0] border border-white/10">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={320}
                      height={380}
                      className="relative z-10 max-h-full w-auto object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                      style={{ width: "auto", height: "auto" }}
                      priority
                    />
                  </div>

                  {/* Member Details */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                        {selectedMember.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#64B5F6]">
                        {selectedMember.department}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-[#90CAF9]">
                      {selectedMember.role}
                    </p>

                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal pt-2">
                      {selectedMember.description}
                    </p>
                  </div>

                  {/* Social Media Links */}
                  {(selectedMember.linkedIn || selectedMember.instagram) && (
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                      <span className="text-xs font-semibold text-slate-400">
                        Connect:
                      </span>
                      <div className="flex items-center gap-2">
                        {selectedMember.linkedIn && (
                          <a
                            href={selectedMember.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#0077b5] text-white text-xs font-semibold transition-all hover:scale-105 shadow-xs"
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
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
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span>Instagram</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
