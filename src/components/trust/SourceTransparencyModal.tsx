"use client";

import { useState } from "react";
import { SOURCE_REGISTRY } from "@/data/sourceRegistry";

interface SourceTransparencyModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  triggerLabel?: string;
  className?: string;
  showTrigger?: boolean;
}

export default function SourceTransparencyModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  triggerLabel = "Source Credibility & Verifications",
  className = "",
  showTrigger = true,
}: SourceTransparencyModalProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isVisible = isControlled ? controlledIsOpen : internalIsOpen;

  const handleOpen = () => {
    if (!isControlled) setInternalIsOpen(true);
  };

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const sources = Object.values(SOURCE_REGISTRY);

  return (
    <>
      {/* Optional Trigger Button */}
      {showTrigger && (
        <button
          type="button"
          onClick={handleOpen}
          className={`inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#14FFEC] transition-colors cursor-pointer ${className}`}
          aria-label="View Trend Ads Source Credibility & Verification Transparency Registry"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{triggerLabel}</span>
        </button>
      )}

      {/* Modal Overlay */}
      {isVisible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="transparency-modal-title"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl bg-[#090d22] border border-[#1B2CC1]/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold tracking-wider uppercase mb-2">
                  <span>✓ Trend Ads Credibility Standard</span>
                </div>
                <h3
                  id="transparency-modal-title"
                  className="text-xl sm:text-2xl font-black text-white tracking-tight"
                >
                  Source Verification & Credibility Registry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  We believe in zero vanity metrics. Every statistic, ROAS metric, and project claim is backed by audited primary sources.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 text-sm"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Source Classification Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] bg-white/[0.03] p-3.5 rounded-xl border border-white/10">
              <div>
                <span className="font-bold text-emerald-400 block mb-0.5">
                  ✓ Preferred Source
                </span>
                <span className="text-slate-400 text-[10px]">
                  Direct first-party data from advertising APIs, platform logs, and official merchant engines.
                </span>
              </div>
              <div>
                <span className="font-bold text-cyan-400 block mb-0.5">
                  ✓ Regulatory & Legal
                </span>
                <span className="text-slate-400 text-[10px]">
                  Verified records from statutory government registrars and licensing authorities.
                </span>
              </div>
              <div>
                <span className="font-bold text-indigo-400 block mb-0.5">
                  ✓ Certified Credential
                </span>
                <span className="text-slate-400 text-[10px]">
                  Proctored technical credentials issued by Google, Meta, and Next.js / Vercel.
                </span>
              </div>
            </div>

            {/* List of Verified Claims */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Audited Factual Claims & Telemetry Records:
              </h4>

              <div className="space-y-2.5">
                {sources.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-white/[0.04] border border-slate-800 hover:border-[#1B2CC1]/40 transition-colors space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-white">
                        {item.claim}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
                        ✓ {item.preferredBadgeLabel}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <span className="text-slate-500 text-[10px] block">
                          Primary Source
                        </span>
                        <span className="font-medium">{item.sourceName}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px] block">
                          Source Classification
                        </span>
                        <span className="font-medium text-cyan-300">
                          {item.sourceTypeLabel}
                        </span>
                      </div>
                    </div>

                    <p className="text-[10.5px] text-slate-400 leading-relaxed bg-black/30 p-2.5 rounded-lg border border-white/5">
                      <strong className="text-slate-300">Methodology:</strong>{" "}
                      {item.preferredReason}
                    </p>

                    <div className="flex flex-wrap items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span>
                        <strong className="text-slate-300">Last Verified:</strong>{" "}
                        {item.lastVerifiedDate}
                      </span>
                      {item.sourceUrl && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#14FFEC] hover:underline font-semibold"
                        >
                          View Official Source →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Notice on Independent System */}
            <div className="text-[10px] text-slate-400 leading-normal border-t border-slate-800 pt-3">
              <p>
                <strong>Independent Trust Disclosure:</strong> The Preferred Source and Primary Source badges displayed across trend-ads.com are part of Trend Ads' internal source transparency framework. They denote verified primary documentation and do not represent a certification or endorsement issued by search engines or commercial platforms.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
