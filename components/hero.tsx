"use client";

import { useEffect, useState, useCallback } from "react";

interface HeroProps {
  name: string;
  subtitle: string;
  roles: string[];
}

export function Hero({ name, subtitle, roles }: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2000;

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex] || "";

    if (!isDeleting) {
      setDisplayText(currentRole.slice(0, displayText.length + 1));
      if (displayText.length + 1 === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentRole.slice(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [displayText, isDeleting, roleIndex, roles]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-coral/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Overline */}
        <p className="text-text-secondary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          Portfolio 2025
        </p>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="text-text-primary">{name.split(" ")[0]}</span>
          <br />
          <span className="text-coral">{name.split(" ").slice(1).join(" ")}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-text-secondary text-lg sm:text-xl mb-8 max-w-xl mx-auto">
          {subtitle}
        </p>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-10">
          <span className="text-xl sm:text-2xl font-semibold text-mint" style={{ fontFamily: "var(--font-syne)" }}>
            {displayText}
          </span>
          <span className="typewriter-cursor" />
        </div>

        {/* CTA */}
        <a href="#about" className="cta-button">
          See My Work
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-text-muted flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-coral rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
