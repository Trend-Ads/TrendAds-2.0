"use client";

import { useState, useRef, useEffect } from "react";
import { SOURCE_REGISTRY } from "@/data/sourceRegistry";
import { ClaimSource } from "@/types/source";

interface SourceBadgeProps {
  sourceId: string;
  size?: "xs" | "sm" | "md";
  className?: string;
  align?: "left" | "right" | "center";
}

export default function SourceBadge({
  sourceId,
  size = "xs",
  className = "",
  align = "left",
}: SourceBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const source: ClaimSource | undefined = SOURCE_REGISTRY[sourceId];

  // Close popover when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!source) return null;

  const sizeClasses = {
    xs: "text-[9px] px-2 py-0.5 gap-1",
    sm: "text-[10px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-1.5",
  }[size];

  const popoverAlign = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  }[align];

  return (
    <div className={`relative inline-flex items-center ${className}`} ref={popoverRef}>
      {/* Badge Button Trigger */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev)}
        }
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        title={`View source credibility details for: ${source.claim}`}
        className={`inline-flex items-center rounded-full font-semibold cursor-pointer transition-all duration-200 select-none border shadow-2xs ${sizeClasses} ${
          source.isPreferredSource
            ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/35 hover:bg-emerald-500/25 hover:border-emerald-400/50"
            : "bg-blue-500/15 text-blue-300 border-blue-400/35 hover:bg-blue-500/25 hover:border-blue-400/50"
        }`}
      >
        <span className="text-[10px] font-bold text-emerald-400">✓</span>
        <span>{source.preferredBadgeLabel}</span>
      </button>

      {/* Popover Verification Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Source Verification & Credibility Details"
          className={`absolute top-full mt-2 z-[9999] w-72 sm:w-84 p-3.5 sm:p-4 rounded-2xl bg-[#080d24] text-white border border-[#1B2CC1]/40 shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl ${popoverAlign} animate-in fade-in duration-150`}
        >
          {/* Header Row */}
          <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-slate-800">
            <div className="space-y-0.5">
              <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                ✓ {source.preferredBadgeLabel}
              </span>
              <p className="text-[11px] font-bold text-slate-200 mt-1 leading-snug">
                {source.claim}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/10 text-xs cursor-pointer transition-colors"
              aria-label="Close source info"
            >
              ✕
            </button>
          </div>

          {/* Details Body */}
          <div className="space-y-2.5 pt-2.5 text-[11px] leading-relaxed">
            {/* Source Origin */}
            <div>
              <span className="block text-[9.5px] uppercase font-semibold text-slate-400 tracking-wider">
                Source
              </span>
              <span className="font-semibold text-white">
                {source.sourceName}
              </span>
              <span className="block text-[10px] text-cyan-300/90 font-medium">
                ({source.sourceTypeLabel})
              </span>
            </div>

            {/* Why Preferred Source */}
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
              <span className="block text-[9.5px] uppercase font-semibold text-emerald-400 tracking-wider mb-0.5">
                Verification Methodology
              </span>
              <p className="text-[10.5px] text-slate-300">
                {source.preferredReason}
              </p>
            </div>

            {/* Verification Date & Auditor */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
              <span>
                <strong className="text-slate-300">Last verified:</strong>{" "}
                {source.lastVerifiedDate}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-right truncate max-w-[120px]" title={source.auditor}>
                {source.auditor}
              </span>
            </div>

            {/* External Documentation Link */}
            {source.sourceUrl && (
              <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={source.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-[#14FFEC] hover:underline"
                >
                  <span>View official documentation</span>
                  <span>→</span>
                </a>
              </div>
            )}

            {/* Independence Disclaimer */}
            <p className="text-[8.5px] text-slate-500/90 border-t border-slate-800/60 pt-2 leading-normal">
              <strong>Source Notice:</strong> Verified via Trend Ads Internal Credibility Registry. This classification represents our internal verification protocol and is not an endorsement from any search engine or platform.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
