"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DocumentItem, INSTAGRAM_PROFILE_URL, INSTAGRAM_HANDLE } from "@/data/documents";

interface InstagramDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentItem: DocumentItem;
}

export default function InstagramDownloadModal({
  isOpen,
  onClose,
  documentItem,
}: InstagramDownloadModalProps) {
  const [hasVisitedInstagram, setHasVisitedInstagram] = useState(false);
  const [isFollowConfirmed, setIsFollowConfirmed] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Reset internal states and strictly lock background scroll (including Lenis) when opened
  useEffect(() => {
    const win =
      typeof window !== "undefined"
        ? (window as unknown as {
            lenis?: { stop: () => void; start: () => void };
          })
        : null;

    if (isOpen) {
      setDownloadStarted(false);
      setIsDownloading(false);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      win?.lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      win?.lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      win?.lenis?.start();
    };
  }, [isOpen]);

  // Window focus listener: detect when user switches back from Instagram tab
  useEffect(() => {
    if (!isOpen) return;

    const handleWindowFocus = () => {
      if (hasVisitedInstagram && !isFollowConfirmed) {
        // User returned from Instagram tab
      }
    };

    window.addEventListener("focus", handleWindowFocus);
    return () => window.removeEventListener("focus", handleWindowFocus);
  }, [isOpen, hasVisitedInstagram, isFollowConfirmed]);

  const handleOpenInstagram = () => {
    setHasVisitedInstagram(true);
    window.open(INSTAGRAM_PROFILE_URL, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    if (!isFollowConfirmed) return;

    setIsDownloading(true);

    // Create invisible anchor to trigger direct download with exact file name
    const downloadLink = document.createElement("a");
    downloadLink.href = documentItem.downloadUrl;
    downloadLink.setAttribute(
      "download",
      "Website Auditing, SEO & UX - The Practical Guide - Trend Ads.pdf"
    );
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    setTimeout(() => {
      setIsDownloading(false);
      setDownloadStarted(true);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#010736]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(1,7,54,0.4)] border border-slate-100 overflow-hidden z-10 my-8"
        >
          {/* Top Brand Banner */}
          <div className="relative bg-gradient-to-r from-[#010736] via-[#0b1b75] to-[#1B2CC1] px-6 py-6 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xs font-black tracking-wider">
                  PDF
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Instagram Resource Unlock
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-4 relative z-10">
              <h2 id="modal-title" className="text-xl sm:text-2xl font-black text-white leading-tight">
                {documentItem.title}
              </h2>
              <p className="text-xs text-white/75 mt-1 line-clamp-1">
                {documentItem.tagline}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {!downloadStarted ? (
              <>
                {/* Information Callout */}
                <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Free Community Document</span>
                  </div>
                  <div className="flex items-center gap-3 font-semibold text-slate-700">
                    <span>{documentItem.pages} Pages</span>
                    <span>•</span>
                    <span>{documentItem.fileSize}</span>
                  </div>
                </div>

                {/* Progress Steps Header */}
                <div className="space-y-4">
                  {/* Step 1: Instagram Link */}
                  <div className="border border-slate-200 rounded-2xl p-4.5 sm:p-5 bg-gradient-to-b from-white to-slate-50/50 shadow-xs">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1B2CC1] text-white text-xs font-black">
                          1
                        </span>
                        <h3 className="text-sm font-bold text-slate-900">
                          Follow our Instagram Page
                        </h3>
                      </div>
                      {hasVisitedInstagram && (
                        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          Visited ✓
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 mb-4 pl-8.5">
                      We share free weekly breakdowns, web audit checklists, and ad scaling strategies on Instagram.
                    </p>

                    <div className="pl-8.5">
                      <button
                        type="button"
                        onClick={handleOpenInstagram}
                        className="w-full group relative inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
                      >
                        <Image
                          src="/icons/instagram.png"
                          alt="Instagram"
                          width={20}
                          height={20}
                          className="w-5 h-5 rounded-full object-cover bg-white p-0.5"
                        />
                        <span>Open @{INSTAGRAM_HANDLE} on Instagram</span>
                        <svg
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Step 2: Toggle "Followed the Instagram" */}
                  <motion.div
                    animate={
                      hasVisitedInstagram
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.65, y: 0 }
                    }
                    className={`border rounded-2xl p-4.5 sm:p-5 transition-all ${
                      hasVisitedInstagram
                        ? "border-[#1B2CC1]/40 bg-blue-50/40 shadow-xs"
                        : "border-slate-200 bg-slate-50/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-black transition-colors ${
                            isFollowConfirmed
                              ? "bg-emerald-600 text-white"
                              : hasVisitedInstagram
                              ? "bg-[#1B2CC1] text-white"
                              : "bg-slate-300 text-slate-700"
                          }`}
                        >
                          2
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">
                            Confirm You Followed
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Toggle below once you followed our page
                          </p>
                        </div>
                      </div>

                      {/* Interactive Toggle Switch */}
                      <button
                        type="button"
                        role="switch"
                        aria-checked={isFollowConfirmed}
                        onClick={() => {
                          if (!hasVisitedInstagram) {
                            // If user hasn't opened Instagram yet, prompt them gently or auto-visit
                            setHasVisitedInstagram(true);
                          }
                          setIsFollowConfirmed((prev) => !prev);
                        }}
                        className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#1B2CC1] focus:ring-offset-2 ${
                          isFollowConfirmed ? "bg-emerald-500" : "bg-slate-300"
                        }`}
                      >
                        <span className="sr-only">Confirm Instagram Follow</span>
                        <motion.span
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                            isFollowConfirmed ? "translate-x-6" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      onClick={() => {
                        if (!hasVisitedInstagram) setHasVisitedInstagram(true);
                        setIsFollowConfirmed((prev) => !prev);
                      }}
                      className="mt-3.5 pl-8.5 flex items-center justify-between text-xs cursor-pointer select-none"
                    >
                      <span
                        className={`font-semibold transition-colors ${
                          isFollowConfirmed ? "text-emerald-700 font-bold" : "text-slate-600"
                        }`}
                      >
                        {isFollowConfirmed
                          ? "✓ Verified: I followed @trend_ads.in"
                          : "Toggle here: I followed @trend_ads.in"}
                      </span>
                      {isFollowConfirmed && (
                        <span className="text-emerald-600 font-bold text-[11px] uppercase tracking-wider">
                          Unlocked!
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Step 3: Download Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    disabled={!isFollowConfirmed || isDownloading}
                    onClick={handleDownload}
                    className={`w-full py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 ${
                      isFollowConfirmed
                        ? "bg-[#010736] hover:bg-[#1B2CC1] text-white shadow-[0_10px_25px_-5px_rgba(1,7,54,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(27,44,193,0.5)] active:scale-[0.99] cursor-pointer"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-200"
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Preparing Download...</span>
                      </>
                    ) : isFollowConfirmed ? (
                      <>
                        <svg className="w-5 h-5 text-[#14FFEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        <span>Download PDF ({documentItem.fileSize})</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        <span>Follow on Instagram to Unlock Download</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2.5">
                    100% Free • No email spam • Instant direct download
                  </p>
                </div>
              </>
            ) : (
              /* Success / Celebration State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Download In Progress!
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1.5 leading-relaxed">
                    Your copy of <strong className="text-slate-800">{documentItem.title}</strong> has started downloading.
                  </p>
                </div>

                {/* Direct file link fallback */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600">
                  <p className="mb-2">If your download did not start automatically:</p>
                  <a
                    href={documentItem.downloadUrl}
                    download="Website Auditing, SEO & UX - The Practical Guide - Trend Ads.pdf"
                    className="inline-flex items-center gap-1.5 text-[#1B2CC1] font-bold hover:underline"
                  >
                    <span>Click here to download directly</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white font-bold text-xs uppercase tracking-wider transition-opacity hover:opacity-95 text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Visit Instagram</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
