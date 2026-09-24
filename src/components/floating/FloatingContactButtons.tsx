"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContactButtons() {
  const [hoveredButton, setHoveredButton] = useState<"top" | "phone" | "whatsapp" | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      setShowBackToTop(rect.top <= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-3 pointer-events-none select-none"
      aria-label="Direct Quick Actions"
    >
      {/* ── Back to Top Floating Button (Above Telephone - Only when reaching footer) ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 15 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="relative flex items-center gap-2 pointer-events-auto"
          >
            {/* Tooltip Label (Desktop) */}
            <AnimatePresence>
              {hoveredButton === "top" && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-[#0a0f2d] text-white text-xs font-semibold shadow-xl border border-white/10 whitespace-nowrap tracking-wide"
                >
                  Back to Top
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to Top"
              title="Back to Top"
              onMouseEnter={() => setHoveredButton("top")}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181b] hover:bg-[#27272a] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.35)] border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
            >
              {/* Minimal Arrow Up Icon */}
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:-translate-y-0.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Telephone Direct Call Floating Button (Middle) ── */}
      <div className="relative flex items-center gap-2 pointer-events-auto">
        {/* Tooltip Label (Desktop) */}
        <AnimatePresence>
          {hoveredButton === "phone" && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-[#0a0f2d] text-white text-xs font-semibold shadow-xl border border-white/10 whitespace-nowrap tracking-wide"
            >
              Call Us: +91 97467 30297
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="tel:+919746730297"
          aria-label="Direct Phone Call"
          title="Call Us Directly"
          onMouseEnter={() => setHoveredButton("phone")}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#1B2CC1] to-[#3B82F6] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(27,44,193,0.5)] border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
        >
          {/* Ambient ping effect */}
          <span className="absolute inset-0 rounded-full bg-[#1B2CC1] animate-ping opacity-25 pointer-events-none" />

          {/* Handset Icon */}
          <svg
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 group-hover:rotate-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* ── WhatsApp Direct Enquiries Floating Button (Bottom Corner) ── */}
      <div className="relative flex items-center gap-2 pointer-events-auto">
        {/* Tooltip Label (Desktop) */}
        <AnimatePresence>
          {hoveredButton === "whatsapp" && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-[#0a0f2d] text-white text-xs font-semibold shadow-xl border border-white/10 whitespace-nowrap tracking-wide"
            >
              Direct WhatsApp Enquiry
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/918139860663"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Enquiry"
          title="Direct WhatsApp Enquiry"
          onMouseEnter={() => setHoveredButton("whatsapp")}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer bg-[#25D366] flex items-center justify-center border-2 border-white"
        >
          {/* Ambient ping effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

          {/* WhatsApp Icon */}
          <Image
            src="/icons/whatsapp.png"
            alt="Contact Trend Ads via WhatsApp"
            width={56}
            height={56}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>
      </div>
    </div>
  );
}
