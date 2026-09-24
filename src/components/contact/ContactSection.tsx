"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    service: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!isDropdownOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setOpenUpwards(spaceBelow < 230);
    }
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const servicesList = [
    "Web & Mobile Development",
    "Digital Marketing & Ads",
    "Branding & Content Creation",
    "Software & Digital Growth",
    "Creative Strategy & Production",
    "Others",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const contact = formData.emailOrPhone.trim();
    const service = formData.service.trim();

    let message = "";
    if (!name && !contact && !service) {
      message = "Hello Trend Ads! 👋\n\nI would like to enquire about your services and discuss a project with Trend Ads.";
    } else {
      message =
        "Hello Trend Ads! 👋\n\nI would like to start a project with you:\n\n" +
        `• Name: ${name || "(Not specified)"}\n` +
        `• Phone / Email: ${contact || "(Not specified)"}\n` +
        `• Interested Service: ${service || "General Enquiry"}`;
    }

    const whatsappUrl = `https://wa.me/918139860663?text=${encodeURIComponent(message)}`;

    setIsSubmitted(true);

    // Direct redirection to WhatsApp
    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = whatsappUrl;
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", emailOrPhone: "", service: "" });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative z-30 w-full bg-[#f3f5f8] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Main Outer White Floating Card ── */}
        <div className="relative bg-white rounded-[32px] sm:rounded-[40px] lg:rounded-[44px] shadow-[0_20px_60px_rgba(0,0,0,0.07)] border border-slate-100 p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* ── Left Column: Editorial Content & Contact Badges ── */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Top Capsule Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-300/80 bg-amber-50/70 mb-6 shadow-xs">
                  <span className="w-5 h-5 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0">
                    {/* Minimal pencil/sparkle icon */}
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs font-bold text-amber-900 tracking-wide">
                    Start A Project
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#18181b] tracking-tight leading-[1.08] mb-5">
                  Let&apos;s Build Your
                  <br />
                  Digital Future
                </h2>

                {/* Paragraph Description */}
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-md font-medium">
                  Ready to launch your next project? Fill out the form below or reach out directly to start a conversation about your business needs and how we can help you grow.
                </p>
              </div>

              {/* Contact Info Pills */}
              <div className="space-y-4 pt-2">
                {/* Phone & WhatsApp Row */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  {/* Phone */}
                  <a
                    href="tel:+919746730297"
                    className="flex items-center gap-3 group transition-opacity hover:opacity-85"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#18181b]">
                      +91 97467 30297
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918139860663"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group transition-opacity hover:opacity-85"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.562 3.813 1.562 5.375L2 22l4.75-1.531c1.5 1 3.313 1.562 5.281 1.562 5.531 0 10.031-4.5 10.031-10.031C22.062 6.5 17.562 2 12.031 2zm0 18.25c-1.781 0-3.406-.531-4.781-1.469l-.344-.219-3.031.969.969-2.969-.219-.344C3.656 14.813 3.125 13.438 3.125 12c0-4.906 4-8.875 8.906-8.875 4.906 0 8.906 3.969 8.906 8.875 0 4.906-4 8.25-8.906 8.25zm4.875-6.625c-.281-.125-1.625-.781-1.875-.875-.25-.094-.438-.125-.625.125-.188.281-.719.875-.875 1.062-.156.188-.313.219-.594.094-.281-.125-1.188-.438-2.281-1.406-.844-.75-1.438-1.688-1.594-1.969-.156-.281-.031-.438.125-.562.125-.125.281-.313.438-.469.125-.156.188-.25.281-.438.094-.188.031-.344-.031-.469-.063-.125-.625-1.5-.844-2.062-.219-.531-.438-.469-.625-.469h-.531c-.188 0-.5.063-.781.344-.281.281-1.062 1.031-1.062 2.531 0 1.5 1.094 2.938 1.25 3.156.156.219 2.156 3.313 5.219 4.656.719.313 1.281.5 1.719.625.719.219 1.375.188 1.906.125.594-.094 1.813-.75 2.062-1.469.281-.719.281-1.344.188-1.469-.063-.125-.25-.188-.531-.313z"/>
                      </svg>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#18181b]">
                      +91 81398 60663
                    </span>
                  </a>
                </div>

                {/* Email & Location Row */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  {/* Email */}
                  <a
                    href="mailto:trendads.in@gmail.com"
                    className="flex items-center gap-3 group transition-opacity hover:opacity-85"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#18181b]">
                      trendads.in@gmail.com
                    </span>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#18181b]">
                      Thrissur, Kerala, India
                    </span>
                  </div>
                </div>

                {/* ── Social Media Channels (LinkedIn, Instagram, Facebook - Round & Compact) ── */}
                <div className="pt-2 sm:pt-3">
                  <div className="flex items-center gap-2.5">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/trend-ads-agency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                      className="w-8 h-8 rounded-full overflow-hidden shadow-xs hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer block shrink-0 bg-white"
                    >
                      <Image
                        src="/icons/linkedin.png"
                        alt="LinkedIn"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com/trend_ads.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      title="Instagram"
                      className="w-8 h-8 rounded-full overflow-hidden shadow-xs hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer block shrink-0 bg-white"
                    >
                      <Image
                        src="/icons/instagram.png"
                        alt="Instagram"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/share/19LfTQbxNp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      title="Facebook"
                      className="w-8 h-8 rounded-full overflow-hidden shadow-xs hover:scale-110 hover:shadow-md transition-all duration-200 cursor-pointer block shrink-0 bg-white"
                    >
                      <Image
                        src="/icons/facebook.png"
                        alt="Facebook"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Vivid Ice-Cyan #92EEFF Enquiry Box ── */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#92EEFF] rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 shadow-[0_16px_36px_rgba(146,238,255,0.35)] border border-[#7ae8fb]">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-14 text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-white text-[#04242d] flex items-center justify-center mx-auto mb-4 shadow-md font-black text-xl">
                        ✓
                      </div>
                      <h3 className="text-xl font-black text-[#04242d] mb-1">
                        Opening WhatsApp...
                      </h3>
                      <p className="text-xs font-medium text-cyan-950/80 max-w-[240px] mx-auto">
                        Redirecting your enquiry directly to WhatsApp.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Field 1: Your name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-[#032b35] mb-1.5"
                        >
                          Your name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          placeholder="Name"
                          className="w-full bg-white/85 focus:bg-white border border-[#5de3fa]/60 focus:border-[#032b35] rounded-xl px-4 py-3 text-sm text-[#04242d] placeholder-[#4f7d88] font-medium focus:outline-none focus:ring-2 focus:ring-[#032b35] transition-all shadow-xs"
                        />
                      </div>

                      {/* Field 2: Your Phone / Email */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-[#032b35] mb-1.5"
                        >
                          Your Phone
                        </label>
                        <input
                          id="contact-phone"
                          type="text"
                          value={formData.emailOrPhone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              emailOrPhone: e.target.value,
                            }))
                          }
                          placeholder="Email"
                          className="w-full bg-white/85 focus:bg-white border border-[#5de3fa]/60 focus:border-[#032b35] rounded-xl px-4 py-3 text-sm text-[#04242d] placeholder-[#4f7d88] font-medium focus:outline-none focus:ring-2 focus:ring-[#032b35] transition-all shadow-xs"
                        />
                      </div>

                      {/* Field 3: Services (Custom Elegant Dropdown UI) */}
                      <div>
                        <label
                          htmlFor="contact-services-trigger"
                          className="block text-xs font-semibold text-[#032b35] mb-1.5"
                        >
                          Services
                        </label>
                        <div className="relative z-40" ref={dropdownRef}>
                          <button
                            type="button"
                            id="contact-services-trigger"
                            aria-haspopup="listbox"
                            aria-expanded={isDropdownOpen}
                            onClick={toggleDropdown}
                            className="w-full bg-white/85 hover:bg-white border border-[#5de3fa]/60 hover:border-[#032b35]/40 rounded-xl px-4 py-3 text-sm flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#032b35] transition-all cursor-pointer select-none shadow-xs"
                          >
                            <span
                              className={
                                formData.service
                                  ? "font-semibold text-[#04242d]"
                                  : "font-medium text-[#4f7d88]"
                              }
                            >
                              {formData.service || "Select a service"}
                            </span>
                            {/* Animated Chevron Down Arrow */}
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                                isDropdownOpen
                                  ? "rotate-180 text-[#032b35]"
                                  : "text-[#1d5c6b]"
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
                                className={`absolute left-0 right-0 ${
                                  openUpwards ? "bottom-full mb-1.5" : "top-full mt-1.5"
                                } z-50 bg-[#18181b] text-white rounded-2xl p-2 shadow-[0_24px_54px_rgba(0,0,0,0.65)] border border-white/20`}
                              >
                                <div className="space-y-1">
                                  {servicesList.map((srv) => {
                                    const isSelected = formData.service === srv;
                                    return (
                                      <button
                                        key={srv}
                                        type="button"
                                        onClick={() => {
                                          setFormData((prev) => ({
                                            ...prev,
                                            service: srv,
                                          }));
                                          setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                          isSelected
                                            ? "bg-[#92EEFF] text-[#04242d] font-bold shadow-xs"
                                            : "text-white/85 hover:bg-white/10 hover:text-white"
                                        }`}
                                      >
                                        <span>{srv}</span>
                                        {isSelected && (
                                          <span className="w-4 h-4 rounded-full bg-[#04242d] text-[#92EEFF] flex items-center justify-center text-[10px] font-black">
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
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-[#18181b] text-xs sm:text-sm font-bold pl-1.5 pr-5 py-1.5 rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition-all cursor-pointer group active:scale-95"
                        >
                          {/* Black round icon with white paper plane */}
                          <span className="w-8 h-8 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:translate-x-0.5">
                            <svg
                              className="w-3.5 h-3.5 -rotate-45 translate-x-0.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                          </span>
                          <span>Submit</span>
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
