import { ScrollFade } from "./scroll-fade";
import type { Education as EducationType } from "@/lib/data";
import { GraduationCap } from "lucide-react";

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <p className="text-coral text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Learning path
          </p>
          <h2 className="section-heading">
            Education<span className="text-coral">.</span>
          </h2>
        </ScrollFade>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative pl-12">
            {/* Timeline line */}
            <div className="timeline-line" />

            {education.map((edu, i) => (
              <ScrollFade key={i}>
                <div className="relative mb-10 last:mb-0">
                  {/* Dot */}
                  <div className={`timeline-dot ${i === 0 ? "active" : ""}`} style={{ top: "1.5rem" }} />

                  {/* Card */}
                  <div className="glass-card p-6 ml-4">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap size={18} className="text-coral" />
                          <h3
                            className="text-lg font-bold text-text-primary"
                            style={{ fontFamily: "var(--font-syne)" }}
                          >
                            {edu.degree}
                          </h3>
                        </div>
                        <p className="text-text-secondary text-sm">
                          {edu.institution}
                        </p>
                        {edu.affiliation && (
                          <p className="text-text-muted text-xs mt-1">
                            {edu.affiliation}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        {edu.status === "Ongoing" ? (
                          <span className="text-xs px-3 py-1 rounded-full bg-coral/10 text-coral font-medium border border-coral/20">
                            Ongoing
                          </span>
                        ) : (
                          edu.year && (
                            <span className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-text-muted border border-white/[0.05]">
                              {edu.year}
                            </span>
                          )
                        )}
                        {edu.gpa && (
                          <span className="text-xs text-mint font-semibold">
                            GPA: {edu.gpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
