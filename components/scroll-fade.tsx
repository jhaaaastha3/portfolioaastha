"use client";

import { useEffect, useRef } from "react";

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export function ScrollFade({ children, className = "", stagger = false }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Also reveal children if stagger mode
            if (stagger) {
              entry.target.querySelectorAll(".fade-up").forEach((child) => {
                child.classList.add("visible");
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
      // Observe individual fade-up children too
      el.querySelectorAll(".fade-up").forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div
      ref={ref}
      className={`fade-up ${stagger ? "stagger-children" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
