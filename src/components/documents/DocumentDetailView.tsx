"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DocumentItem, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/data/documents";
import InstagramDownloadModal from "./InstagramDownloadModal";

interface DocumentDetailViewProps {
  document: DocumentItem;
}

export default function DocumentDetailView({ document }: DocumentDetailViewProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="w-full">
      {/* Top Breadcrumb & Metadata Header */}
      <section className="relative pt-36 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-[#010736] via-[#081559] to-[#010736] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1B2CC1]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#0D7377]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/documents" className="hover:text-white transition-colors">
              Documents
            </Link>
            <span>/</span>
            <span className="text-[#14FFEC] font-semibold truncate max-w-xs sm:max-w-none">
              {document.title}
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/40 text-xs font-bold text-pink-300 tracking-wide backdrop-blur-xs">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={14}
                height={14}
                className="w-3.5 h-3.5 rounded-full object-cover bg-white p-0.5"
              />
              <span>{document.badge}</span>
            </span>

            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/90 backdrop-blur-xs">
              {document.category}
            </span>

            <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-bold text-emerald-300">
              Free Download
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08] max-w-4xl">
            {document.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            {document.tagline}
          </p>

          {/* Key Metrics Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-white/15 text-xs sm:text-sm text-white/80">
            <div>
              <span className="block text-white/50 text-[11px] uppercase tracking-wider font-semibold">Format</span>
              <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                <svg className="w-4 h-4 text-[#14FFEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {document.format}
              </span>
            </div>

            <div>
              <span className="block text-white/50 text-[11px] uppercase tracking-wider font-semibold">Document Length</span>
              <span className="font-bold text-white mt-0.5 block">{document.pages} Pages ({document.fileSize})</span>
            </div>

            <div>
              <span className="block text-white/50 text-[11px] uppercase tracking-wider font-semibold">Rating</span>
              <span className="font-bold text-amber-400 flex items-center gap-1 mt-0.5">
                <span>★</span>
                <span>{document.rating} / 5.0</span>
                <span className="text-white/50 text-xs">({document.ratingCount} reviews)</span>
              </span>
            </div>

            <div>
              <span className="block text-white/50 text-[11px] uppercase tracking-wider font-semibold">Community Downloads</span>
              <span className="font-bold text-white mt-0.5 block">{document.downloadsCount.toLocaleString()}+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Full Content & Breakdown */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview / Introduction */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-black text-[#010736] mb-4">
                About This Document
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {document.longDescription}
              </p>

              {/* Instagram Post Callout */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border border-pink-200/60 flex items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <span className="text-xs font-bold text-pink-700 uppercase tracking-wider block">
                      Instagram Reel Reference
                    </span>
                    <p className="text-xs text-slate-700 mt-0.5">
                      Promoted by @{INSTAGRAM_HANDLE}. Follow our channel to unlock the full PDF.
                    </p>
                  </div>
                </div>

                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors shrink-0"
                >
                  Visit IG
                </a>
              </div>
            </div>

            {/* Table of Contents & Structure */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-black text-[#010736] mb-6 flex items-center justify-between">
                <span>Table of Contents & Curriculum</span>
                <span className="text-xs font-semibold text-slate-400">
                  {document.tableOfContents.length} Sections
                </span>
              </h2>

              <div className="space-y-4">
                {document.tableOfContents.map((section, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#1B2CC1]/40 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#1B2CC1] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {section.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {section.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaways & Highlights */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-black text-[#010736] mb-6">
                What You Will Achieve With This Guide
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {document.keyTakeaways.map((takeaway, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <span className="text-emerald-600 font-black text-base shrink-0 mt-0.5">✓</span>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                      {takeaway}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is this for? */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-black text-[#010736] mb-4">
                Who Should Use This Document?
              </h2>

              <ul className="space-y-3">
                {document.targetAudience.map((audience, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#1B2CC1] shrink-0" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky Document CTA Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-[0_20px_50px_-20px_rgba(1,7,54,0.15)] overflow-hidden relative">
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1B2CC1] via-[#0D7377] to-[#14FFEC]" />

              {/* Document Mockup Preview Container */}
              <div className="relative mb-6 rounded-2xl bg-gradient-to-br from-[#010736] to-[#0d1e80] p-6 text-white text-center shadow-inner overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#14FFEC]/10 rounded-full blur-xl pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <svg className="w-6 h-6 text-[#14FFEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-[#14FFEC] block mb-1">
                  OFFICIAL TREND ADS PLAYBOOK
                </span>
                <h3 className="text-base font-black text-white leading-tight">
                  {document.title}
                </h3>
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-white/15 text-[11px] font-bold text-white/90">
                  {document.pages} Pages • Ready to Download
                </span>
              </div>

              {/* Specs List */}
              <div className="space-y-3 py-3 border-y border-slate-100 text-xs text-slate-600 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">File Type</span>
                  <span className="font-bold text-slate-800">Adobe PDF (.pdf)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">File Size</span>
                  <span className="font-bold text-slate-800 font-mono">{document.fileSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Price</span>
                  <span className="font-bold text-emerald-600 uppercase tracking-wider">100% Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Unlock Method</span>
                  <span className="font-bold text-[#1B2CC1]">Follow on Instagram</span>
                </div>
              </div>

              {/* PRIMARY DOWNLOAD CTA BUTTON */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full py-4 px-6 rounded-2xl bg-[#010736] hover:bg-[#1B2CC1] text-white font-black text-sm uppercase tracking-wider text-center transition-all shadow-[0_10px_25px_-5px_rgba(1,7,54,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(27,44,193,0.45)] flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <svg className="w-5 h-5 text-[#14FFEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Free PDF</span>
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-3">
                Instant download unlocked by confirming your follow on Instagram.
              </p>

              {/* Share & Instagram links */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>{copiedLink ? "Link Copied!" : "Share Link"}</span>
                </button>

                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 rounded-full object-cover"
                  />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Need Professional Help Card */}
            <div className="rounded-3xl bg-slate-900 p-6 text-white text-center">
              <h4 className="text-base font-bold text-white mb-1.5">
                Need Help Executing This?
              </h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Our agency builds high-performance web applications and manages multi-million dollar ad campaigns.
              </p>
              <a
                href="#contact"
                className="w-full inline-block py-3 px-4 rounded-xl bg-[#1B2CC1] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Download Unlock Modal */}
      <InstagramDownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        documentItem={document}
      />
    </div>
  );
}
