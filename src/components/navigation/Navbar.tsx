"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about-us" },
  { label: "Services", href: "#services" },
  { label: "Board Members", href: "#board-members" },
  { label: "Process Steps", href: "#process-steps" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling while full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const listContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 30, x: -12 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      y: 15,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <nav
        className={`hero-nav ${isScrolled ? "is-scrolled" : ""}`}
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <Link href="/" className="hero-logo shrink-0" aria-label="Trend Ads home">
          <Image
            src="/logos/logo.png"
            alt="Trend Ads Logo"
            width={130}
            height={38}
            className="object-contain w-auto h-7 sm:h-9"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hero-nav-links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hero-nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action / Contact CTA Button */}
        <div className="hero-nav-actions shrink-0">
          <a href="#contact" id="hero-contact-cta" className="hero-nav-cta hidden sm:inline-flex">
            Contact
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="hero-mobile-toggle shrink-0 group focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <div className="w-[20px] h-[14px] flex flex-col justify-between items-end relative pointer-events-none">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-[2px] bg-[#18181b] group-hover:bg-[#1B2CC1] rounded-full origin-center transition-colors"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                className="w-[13px] group-hover:w-full h-[2px] bg-[#1B2CC1] rounded-full transition-all duration-200 origin-right"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-[2px] bg-[#18181b] group-hover:bg-[#1B2CC1] rounded-full origin-center transition-colors"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Fullscreen Mobile Navigation Menu with Framer Motion (Solid White matching Navbar) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99999] bg-white text-[#212121] flex flex-col justify-between p-6 sm:p-10 select-none overflow-y-auto shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar inside Fullscreen Drawer */}
            <div className="flex items-center justify-between w-full pb-5 border-b border-slate-100 shrink-0">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Trend Ads Home"
              >
                <Image
                  src="/logos/logo.png"
                  alt="Trend Ads Logo"
                  width={130}
                  height={38}
                  className="object-contain w-auto h-7 sm:h-8"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-[#212121] hover:text-[#0D7377] transition-all cursor-pointer shadow-sm"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Middle: Staggered Animated Links */}
            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col gap-6 sm:gap-8 my-auto py-8"
              role="list"
            >
              {NAV_ITEMS.map((item, idx) => (
                <motion.li key={item.label} variants={listItemVariants}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between text-2xl sm:text-3xl font-black uppercase text-[#212121] hover:text-[#0D7377] transition-colors tracking-tight"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono font-bold text-[#0D7377] transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="transition-transform group-hover:translate-x-1 duration-200">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xl text-slate-400 group-hover:text-[#0D7377] group-hover:translate-x-1.5 transition-all">
                      →
                    </span>
                  </a>
                </motion.li>
              ))}

              {/* Extra Contact Direct Link */}
              <motion.li variants={listItemVariants}>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between text-2xl sm:text-3xl font-black uppercase text-[#212121] hover:text-[#0D7377] transition-colors tracking-tight"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono font-bold text-[#0D7377] transition-colors">
                      0{NAV_ITEMS.length + 1}
                    </span>
                    <span className="transition-transform group-hover:translate-x-1 duration-200">
                      Contact
                    </span>
                  </div>
                  <span className="text-xl text-slate-400 group-hover:text-[#0D7377] group-hover:translate-x-1.5 transition-all">
                    →
                  </span>
                </a>
              </motion.li>
            </motion.ul>

            {/* Bottom Bar: Action CTA and Agency Meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="pt-6 border-t border-slate-100 flex flex-col gap-4 shrink-0"
            >
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 px-6 rounded-xl bg-[#212121] text-white font-black text-sm uppercase tracking-wider text-center hover:bg-[#0D7377] transition-all shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              >
                Start Your Project
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
                <a href="mailto:trendads.in@gmail.com" className="hover:text-[#1B2CC1] transition-colors">
                  trendads.in@gmail.com
                </a>
                <span>© 2026 Trend Ads</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
