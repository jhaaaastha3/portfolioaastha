import { ScrollFade } from "./scroll-fade";
import type { Leadership as LeadershipType } from "@/lib/data";
import { Shield } from "lucide-react";

interface LeadershipProps {
  leadership: LeadershipType[];
}

export function Leadership({ leadership }: LeadershipProps) {
  return (
    <section id="leadership" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <p className="text-coral text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Leading the way
          </p>
          <h2 className="section-heading">
            Leadership<span className="text-coral">.</span>
          </h2>
        </ScrollFade>

        <div className="bento-grid mt-10">
          {leadership.map((item, i) => {
            const colors = [
              { accent: "border-l-coral", icon: "text-coral", bg: "bg-coral/10" },
              { accent: "border-l-mint", icon: "text-mint", bg: "bg-mint/10" },
              { accent: "border-l-purple", icon: "text-purple", bg: "bg-purple/10" },
            ];
            const color = colors[i % 3];

            return (
              <ScrollFade key={i}>
                <div
                  className={`glass-card p-6 border-l-[3px] ${color.accent} group`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${color.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Shield size={18} className={color.icon} />
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold text-text-primary mb-1"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {item.role}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {item.organization}
                      </p>
                      {item.period && (
                        <p className="text-xs text-text-muted mt-1">
                          {item.period}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
