import { ScrollFade } from "./scroll-fade";
import type { Skill } from "@/lib/data";
import {
  Film,
  Camera,
  Palette,
  Play,
  Crown,
  Search,
  Users,
  Clock,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  film: Film,
  camera: Camera,
  palette: Palette,
  play: Play,
  crown: Crown,
  search: Search,
  users: Users,
  clock: Clock,
};

const COLOR_MAP: Record<string, { icon: string; border: string; bg: string; glow: string }> = {
  coral: {
    icon: "text-coral",
    border: "border-coral/20",
    bg: "bg-coral/10",
    glow: "hover:shadow-[0_0_24px_rgba(232,93,48,0.15)]",
  },
  mint: {
    icon: "text-mint",
    border: "border-mint/20",
    bg: "bg-mint/10",
    glow: "hover:shadow-[0_0_24px_rgba(74,234,188,0.15)]",
  },
  purple: {
    icon: "text-purple",
    border: "border-purple/20",
    bg: "bg-purple/10",
    glow: "hover:shadow-[0_0_24px_rgba(167,139,250,0.15)]",
  },
};

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <p className="text-coral text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What I do
          </p>
          <h2 className="section-heading">
            Skills<span className="text-coral">.</span>
          </h2>
        </ScrollFade>

        <div className="bento-grid-skills mt-10">
          {skills.map((skill, i) => {
            const IconComponent = ICON_MAP[skill.icon] || Play;
            const colors = COLOR_MAP[skill.color] || COLOR_MAP.coral;

            return (
              <ScrollFade key={skill.name}>
                <div
                  className={`glass-card p-6 group cursor-default ${colors.glow}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent size={22} className={colors.icon} />
                  </div>
                  <h3
                    className="text-base font-bold text-text-primary mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {skill.name}
                  </h3>
                  <p className="text-sm text-text-muted">{skill.tool}</p>
                </div>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
