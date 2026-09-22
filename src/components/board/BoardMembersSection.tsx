"use client";

import Image from "next/image";
import React, { useState } from "react";

interface BoardMember {
  name: string;
  role: string;
  committee: string;
  bio: string;
  image: string;
  linkedIn: string;
  twitter: string;
  credentials: string[];
}

const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Marcus Sterling",
    role: "Chairman & Co-Founder",
    committee: "Executive Committee",
    bio: "Former VP of Growth at Global Media Holdings. Over 18 years steering high-growth digital agencies, media networks, and global venture funds.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
    linkedIn: "#",
    twitter: "#",
    credentials: ["Ex-Global Media VP", "Harvard Business School", "Techstars Mentor"],
  },
  {
    name: "Elena Rostova",
    role: "Independent Director",
    committee: "Audit & Risk Governance",
    bio: "Pioneer in artificial intelligence and corporate governance. Previously Senior Partner at Apex Advisory, leading international digital transformation audits.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85",
    linkedIn: "#",
    twitter: "#",
    credentials: ["Former Apex Partner", "Stanford AI Ethics Fellow", "FINRA Certified"],
  },
  {
    name: "David Chen",
    role: "Director of Technology",
    committee: "Technology & Product Oversight",
    bio: "Architect of distributed ad-tech systems handling 2B+ daily queries. Ex-Principal Architect at Silicon Systems and angel investor in 20+ frontier tech startups.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85",
    linkedIn: "#",
    twitter: "#",
    credentials: ["Ex-Silicon Systems Lead", "MIT Alum", "Patents Holder (7x)"],
  },
  {
    name: "Amara Okafor",
    role: "Non-Executive Director",
    committee: "Nomination & Brand Strategy",
    bio: "Internationally acclaimed brand strategist and Cannes Lions juror. Directed brand architecture for Fortune 100 consumer and tech enterprises globally.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85",
    linkedIn: "#",
    twitter: "#",
    credentials: ["Cannes Lions Juror", "D&AD President Fellow", "Global Brand Fellow"],
  },
];

export default function BoardMembersSection() {
  const [activeMember, setActiveMember] = useState<number | null>(null);

  return (
    <section
      id="board-members"
      className="bg-[#0b0c0e] py-24 sm:py-32 lg:py-36 relative overflow-hidden text-white"
    >
      {/* Background ambient fiery radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20 blur-[130px] rounded-full"
        style={{
          background: "radial-gradient(circle, #ff5419 0%, #c0200a 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Board of Directors <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white/70">
              & Strategic Advisors
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
            Seasoned industry pioneers, technology visionaries, and governance authorities
            guiding Trend Ads toward transformational global impact and long-term enterprise value.
          </p>

          {/* Quick Metrics Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] max-w-2xl mx-auto">
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-black text-white block">45+</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Years Combined Exp.
              </span>
            </div>
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-black text-white block">30+</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Global Markets
              </span>
            </div>
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-black text-white block">$500M+</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Value Steered
              </span>
            </div>
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-black text-[#ff6b35] block">100%</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Fiduciary Focus
              </span>
            </div>
          </div>
        </div>

        {/* ── Board Members Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BOARD_MEMBERS.map((member, idx) => (
            <div
              key={member.name}
              onMouseEnter={() => setActiveMember(idx)}
              onMouseLeave={() => setActiveMember(null)}
              className="bg-[#121419]/90 border border-white/[0.08] hover:border-[#ff5419]/50 rounded-[28px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(244,67,6,0.18)] hover:-translate-y-1.5"
            >
              {/* Member Portrait */}
              <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-slate-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />

                {/* Subtle gradient scrim at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121419] via-transparent to-black/20" />

                {/* Committee Tag Badge */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white/90 border border-white/10 px-2.5 py-1 rounded-full">
                    {member.committee}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff7a45] transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#ff6b35] tracking-wide mt-0.5 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                {/* Credentials Tags & Socials */}
                <div className="mt-5 pt-4 border-t border-white/[0.07] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {member.credentials.slice(0, 2).map((cred) => (
                      <span
                        key={cred}
                        className="text-[9px] font-medium bg-white/[0.05] text-slate-300 px-2 py-0.5 rounded-md border border-white/[0.04]"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <a
                      href={member.linkedIn}
                      aria-label={`${member.name} LinkedIn`}
                      className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-[#ff5419] text-white/70 hover:text-white flex items-center justify-center transition-colors duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z" />
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      aria-label={`${member.name} Twitter`}
                      className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-[#ff5419] text-white/70 hover:text-white flex items-center justify-center transition-colors duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
