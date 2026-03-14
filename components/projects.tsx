import { ScrollFade } from "./scroll-fade";
import type { Project } from "@/lib/data";
import { Trophy, Code, Wrench, Youtube } from "lucide-react";

const TAG_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Competition: Trophy,
  Hackathon: Code,
  "Science Project": Wrench,
  Content: Youtube,
};

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Competition: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/20" },
  Hackathon: { bg: "bg-mint/10", text: "text-mint", border: "border-mint/20" },
  "Science Project": { bg: "bg-purple/10", text: "text-purple", border: "border-purple/20" },
  Content: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/20" },
};

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <p className="text-coral text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Things I&apos;ve built & done
          </p>
          <h2 className="section-heading">
            Projects<span className="text-coral">.</span>
          </h2>
        </ScrollFade>

        <div className="bento-grid-2 mt-10">
          {projects.map((project, i) => {
            const IconComponent = TAG_ICONS[project.tag] || Code;
            const colors = TAG_COLORS[project.tag] || TAG_COLORS.Hackathon;

            return (
              <ScrollFade key={i}>
                <div className="glass-card p-7 group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent size={20} className={colors.text} />
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border} font-medium`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-text-primary mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
