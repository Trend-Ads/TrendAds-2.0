"use client";

import Link from "next/link";
import Image from "next/image";
import { DocumentItem } from "@/data/documents";

interface DocumentCardProps {
  document: DocumentItem;
  onOpenDownload: (doc: DocumentItem) => void;
}

export default function DocumentCard({ document, onOpenDownload }: DocumentCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(27,44,193,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Top Accent Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1B2CC1] via-[#0D7377] to-[#14FFEC] opacity-80 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Badges Bar: Instagram Badge + Category */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/70 text-[11px] font-bold text-pink-700 tracking-wide">
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={14}
              height={14}
              className="w-3.5 h-3.5 rounded-full object-cover"
            />
            <span>{document.badge}</span>
          </span>

          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {document.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-black text-[#010736] group-hover:text-[#1B2CC1] transition-colors leading-tight mb-2.5">
          <Link href={`/documents/${document.slug}`}>
            {document.title}
          </Link>
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {document.tagline}
        </p>

        {/* Meta Specs (Pages, Size, Format) */}
        <div className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 mb-5">
          <div className="flex items-center gap-1.5 font-medium">
            <svg className="w-3.5 h-3.5 text-[#1B2CC1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>{document.format}</span>
          </div>
          <span>•</span>
          <span>{document.pages} Pages</span>
          <span>•</span>
          <span className="text-slate-400 font-mono text-[11px]">{document.fileSize}</span>
        </div>

        {/* Highlights List */}
        <div className="space-y-1.5 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
            What is Inside:
          </span>
          {document.highlights.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
              <span className="text-[#0D7377] font-black mt-0.5">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-slate-100 mt-2">
        {/* Rating and Downloads Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3.5">
          <div className="flex items-center gap-1">
            <span className="text-amber-500 font-black">★</span>
            <span className="font-bold text-slate-700">{document.rating}</span>
            <span className="text-slate-400 text-[11px]">({document.ratingCount} reviews)</span>
          </div>
          <span className="text-[11px] font-medium text-slate-500">
            {document.downloadsCount.toLocaleString()}+ downloads
          </span>
        </div>

        {/* Buttons Row */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* View Details Link */}
          <Link
            href={`/documents/${document.slug}`}
            className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-[#1B2CC1] text-slate-700 hover:text-[#1B2CC1] font-bold text-xs uppercase tracking-wider text-center transition-all bg-white hover:bg-blue-50/30 flex items-center justify-center gap-1.5"
          >
            <span>View Details</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Download PDF Button (triggers Modal) */}
          <button
            type="button"
            onClick={() => onOpenDownload(document)}
            className="py-2.5 px-3 rounded-xl bg-[#010736] hover:bg-[#1B2CC1] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
          >
            <svg className="w-3.5 h-3.5 text-[#14FFEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Get PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
