"use client";

import { useState, useEffect } from "react";
import { MonitorPlay } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-[var(--font-syne)] text-xl font-bold tracking-tight text-text-primary hover:text-coral transition-colors"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <MonitorPlay className="text-coral" size={24} />
          <span>AJ<span className="text-coral">.</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-coral transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          
          {/* Get In Touch */}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 text-sm font-medium bg-coral text-white rounded-full hover:bg-coral/90 transition-all hover:scale-105"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden nav-glass mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm text-text-secondary hover:text-coral hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center px-4 py-3 text-sm font-medium bg-coral text-white rounded-xl hover:bg-coral/90 transition-all"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
