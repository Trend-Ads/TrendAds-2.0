"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState<string>("Paid Ads");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const services = [
    "Paid Ads",
    "Web Engineering",
    "Brand & Design",
    "Growth Strategy",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@trendads.agency");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#EDF1D6] py-20 sm:py-28 text-[#212121] border-t border-[#d8deb8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ── Left Column: Direct Info & Editorial Intro ── */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#0D7377] tracking-wider uppercase block mb-3">
                Contact
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#212121] leading-tight mb-4">
                Let&apos;s start a conversation.
              </h2>
              <p className="text-[#323232] text-sm sm:text-base leading-relaxed mb-8">
                Whether you need a full ad audit, brand architecture, or custom web engineering, we&apos;re here to help your team scale.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#d8deb8]">
              <div>
                <span className="text-xs text-slate-600 font-mono uppercase block mb-1">
                  Email
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:hello@trendads.agency"
                    className="text-base sm:text-lg font-semibold text-[#212121] hover:text-[#0D7377] transition-colors"
                  >
                    hello@trendads.agency
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#dde3c2] text-[#212121] hover:bg-[#0D7377] hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedEmail ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-600 font-mono uppercase block mb-1">
                  Phone
                </span>
                <a
                  href="tel:+18008736323"
                  className="text-base sm:text-lg font-semibold text-[#212121] hover:text-[#0D7377] transition-colors"
                >
                  +1 (800) 873-6323
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-600 font-mono uppercase block mb-1">
                  Location
                </span>
                <p className="text-sm font-medium text-[#323232]">
                  New York · London · Remote Worldwide
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-600 font-mono uppercase block mb-1">
                  Response Time
                </span>
                <p className="text-sm font-medium text-[#323232]">
                  Usually within 24 hours on business days
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Column: Clean Simple Form ── */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 border border-[#d8deb8] rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="py-12 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0D7377]/15 text-[#0D7377] flex items-center justify-center text-xl mx-auto mb-4 font-bold">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-[#212121] mb-2">Message received.</h3>
                    <p className="text-sm text-[#323232] max-w-sm mx-auto mb-6">
                      Thank you for reaching out, {formData.name}. Our team will review your project details and get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", company: "", message: "" });
                      }}
                      className="text-xs font-mono font-bold text-[#0D7377] hover:underline"
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Interest / Service Pills */}
                    <div>
                      <label className="block text-xs font-semibold text-[#212121] mb-2">
                        I am interested in
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((serv) => {
                          const isSelected = selectedService === serv;
                          return (
                            <button
                              key={serv}
                              type="button"
                              onClick={() => setSelectedService(serv)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                                isSelected
                                  ? "bg-[#0D7377] text-white border-[#0D7377]"
                                  : "bg-[#EDF1D6]/70 text-[#323232] border-[#d8deb8] hover:border-[#0D7377]"
                              }`}
                            >
                              {serv}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#212121] mb-1.5">
                          Name <span className="text-[#0D7377]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#cdd5aa] text-[#212121] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0D7377] focus:ring-1 focus:ring-[#0D7377] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#212121] mb-1.5">
                          Email <span className="text-[#0D7377]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#cdd5aa] text-[#212121] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0D7377] focus:ring-1 focus:ring-[#0D7377] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company / Website */}
                    <div>
                      <label className="block text-xs font-semibold text-[#212121] mb-1.5">
                        Company / Website
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="company.com (optional)"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#cdd5aa] text-[#212121] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0D7377] focus:ring-1 focus:ring-[#0D7377] transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#212121] mb-1.5">
                        How can we help?
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us a bit about your goals, current challenges, or timeline..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#cdd5aa] text-[#212121] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0D7377] focus:ring-1 focus:ring-[#0D7377] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-lg bg-[#212121] hover:bg-[#0D7377] text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
