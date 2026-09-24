"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const servicesList = [
  "Web & Mobile Development",
  "Digital Marketing & Ads",
  "Branding & Content Creation",
  "Software & Digital Growth",
  "Creative Strategy & Production",
  "Others",
];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleDropdown = () => {
    if (!isDropdownOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      // If less than 280px below, open upwards
      setOpenUpwards(spaceBelow < 280);
    }
    setIsDropdownOpen((prev) => !prev);
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = "";
    if (selectedService && selectedService !== "Others") {
      message = `Hello Trend Ads! 👋\n\nI would like to start a project with you regarding: *${selectedService}*.`;
    } else if (selectedService === "Others") {
      message = `Hello Trend Ads! 👋\n\nI would like to start a project with you and discuss our custom requirements.`;
    } else {
      message = `Hello Trend Ads! 👋\n\nI would like to start a project and enquire about your services.`;
    }

    const whatsappUrl = `https://wa.me/918139860663?text=${encodeURIComponent(message)}`;
    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section"
      aria-label="Hero section"
    >
      {/* ── Background gradient ── */}
      <div className="hero-bg" aria-hidden="true" />

      {/* ── Subtle grid overlay ── */}
      <div className="hero-grid" aria-hidden="true" />

      {/* ── Social proof badge ── */}
      <div className="hero-social-proof" aria-label="Social proof">
        <div className="hero-avatars" aria-hidden="true">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`hero-avatar hero-avatar-${i}`}>
              <Image
                src={`/avatars/avatar-${i}.jpg`}
                alt={`Client profile ${i}`}
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
        <p className="hero-social-text">
          <strong>100+</strong> Projects Delivered Worldwide
        </p>
      </div>

      {/* ── Slide counter ── */}
      <div className="hero-slide-counter" aria-label="Slide 1 of 10">
        1/10
      </div>

      {/* ── Big typographic brand name (background text) ── */}
      <div className="hero-brand-bg" aria-hidden="true">
        TREND ADS
      </div>

      {/* ── Centre model image ── */}
      <div
        className="hero-model-wrap"
        style={{ transform: `translate(-50%, ${scrollY * 0.08}px)` }}
      >
        <Image
          src="/heros/hero-p-1.png"
          alt="Futuristic model representing bold digital creativity"
          fill
          priority
          className="hero-model-img select-none pointer-events-none"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>

      {/* ── Bottom-left copy ── */}
      <div className="hero-copy">
        <p className="hero-eyebrow">DESIGNED FOR IMPACT</p>
        <h1 className="hero-headline">
          Building
          <br />
          Bold Digital
          <br />
          Experiences
        </h1>
        <p className="hero-subline">
          A creative studio crafting digital
          <br />
          products, brand systems, and
          <br />
          experiences that drive real growth.
        </p>
      </div>

      {/* ── Bottom-right "Start Your Project" card (Hidden on mobile) ── */}
      <div className="hero-cta-card hidden md:block" id="hero-project-card">
        <p className="hero-cta-title">Start Your Project</p>
        <p className="hero-cta-sub">
          Choose a service and chat directly with our team on WhatsApp.
        </p>
        <form className="hero-cta-form" onSubmit={handleHeroSubmit}>
          <div className="relative flex-1 min-w-0" ref={dropdownRef}>
            <button
              type="button"
              id="hero-services-trigger"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
              className="hero-cta-input flex items-center justify-between cursor-pointer select-none text-left"
            >
              <span
                className={
                  selectedService
                    ? "font-semibold text-white truncate"
                    : "font-normal text-white/50 truncate"
                }
              >
                {selectedService || "Select a service..."}
              </span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ml-1 text-white/70 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Custom Dropdown Menu Panel (Full View without Scrolling) */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: openUpwards ? 6 : -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: openUpwards ? 6 : -6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className={`absolute left-0 right-[-42px] ${
                    openUpwards ? "bottom-full mb-2" : "top-full mt-2"
                  } z-50 bg-[#18181b] text-white rounded-2xl p-2 shadow-[0_24px_54px_rgba(0,0,0,0.7)] border border-white/20`}
                >
                  <div className="space-y-1">
                    {servicesList.map((srv) => {
                      const isSelected = selectedService === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => {
                            setSelectedService(srv);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-[#92EEFF] text-[#04242d] font-bold shadow-xs"
                              : "text-white/85 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="truncate pr-2">{srv}</span>
                          {isSelected && (
                            <span className="w-3.5 h-3.5 rounded-full bg-[#04242d] text-[#92EEFF] flex items-center justify-center text-[9px] font-black shrink-0">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            id="hero-submit-btn"
            type="submit"
            className="hero-cta-btn"
            aria-label="Contact on WhatsApp"
            title="Chat on WhatsApp"
          >
            →
          </button>
        </form>
      </div>

      {/* ── Right side descriptor ── */}
      <div className="hero-right-desc" aria-hidden="true">
        <p className="hero-right-label">DESIGNED FOR</p>
        <p className="hero-right-text">
          We turn ambitious
          <br />
          digital products<br />
          built to impress.
        </p>
      </div>
    </section>
  );
}
