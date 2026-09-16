"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = ["HOME", "ABOUT US", "SERVICES", "CONTACT"];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* ── Navigation ── */}
      <nav className="hero-nav" aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="hero-logo" aria-label="Trend Ads home">
          <span className="hero-logo-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="2" />
              <path d="M9 9L19 14L9 19V9Z" fill="white" />
            </svg>
          </span>
          <span className="hero-logo-text">TREND ADS</span>
        </a>

        {/* Links */}
        <ul className="hero-nav-links" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="hero-nav-link"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a href="#contact" id="hero-contact-cta" className="hero-nav-cta">
          Contact Us
        </a>
      </nav>

      {/* ── Social proof badge ── */}
      <div className="hero-social-proof" aria-label="Social proof">
        <div className="hero-avatars" aria-hidden="true">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`hero-avatar hero-avatar-${i}`} />
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
        TREND
      </div>

      {/* ── Centre model image ── */}
      <div
        className="hero-model-wrap"
        style={{ transform: `translate(-50%, ${scrollY * 0.08}px)` }}
      >
        <Image
          src="/heros/hero-image.png"
          alt="Futuristic model with VR headset representing bold digital creativity"
          fill
          priority
          className="hero-model-img"
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

      {/* ── Bottom-right "Start Your Project" card ── */}
      <div className="hero-cta-card" id="hero-project-card">
        <p className="hero-cta-title">Start Your Project</p>
        <p className="hero-cta-sub">
          Drop your email and we&apos;ll get in touch within 24 hours.
        </p>
        <form className="hero-cta-form" onSubmit={(e) => e.preventDefault()}>
          <input
            id="hero-email-input"
            type="email"
            placeholder="your@email.com"
            className="hero-cta-input"
            aria-label="Email address"
          />
          
          <button
            id="hero-submit-btn"
            type="submit"
            className="hero-cta-btn"
            aria-label="Submit email"
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
          digital products —<br />
          built to impress.
        </p>
      </div>
    </section>
  );
}
