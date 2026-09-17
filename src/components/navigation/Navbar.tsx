"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Services", href: "#services" },
  { label: "Board Members", href: "#board-members" },
  { label: "How It Works", href: "#how-it-works" },
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
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`hero-nav ${isScrolled ? "is-scrolled" : ""}`}
      aria-label="Main navigation"
    >
      {/* Brand Logo */}
      <Link href="/" className="hero-logo" aria-label="Trend Ads home">
        <Image 
          src="/logos/logo.png"
          alt="Trend Ads Logo"
          width={140}
          height={40}
          className="object-contain"
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
      <div className="hero-nav-actions">
        <a href="#contact" id="hero-contact-cta" className="hero-nav-cta">
          Contact
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="hero-mobile-toggle"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className={`hero-hamburger-line ${mobileMenuOpen ? "open" : ""}`} />
          <span className={`hero-hamburger-line ${mobileMenuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="hero-mobile-drawer" role="dialog" aria-modal="true">
          <ul className="hero-mobile-links" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hero-mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="hero-mobile-link hero-mobile-link-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
