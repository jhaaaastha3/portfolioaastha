import { ScrollFade } from "./scroll-fade";
import {
  Youtube,
  Heart,
  CalendarDays,
  UserCheck,
  ShoppingBag,
  PenTool,
} from "lucide-react";

const EXPERIENCE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "YouTube Creator": Youtube,
  Volunteer: Heart,
  "Event Organizer": CalendarDays,
  "HR Manager": UserCheck,
  "Drop Shipping": ShoppingBag,
  "Poster & Flyer Design": PenTool,
};

const EXPERIENCE_COLORS = [
  "hover:border-coral/40 hover:text-coral",
  "hover:border-mint/40 hover:text-mint",
  "hover:border-purple/40 hover:text-purple",
];

interface ExperienceProps {
  experience: string[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <p className="text-coral text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What I&apos;ve done
          </p>
          <h2 className="section-heading">
            Experience<span className="text-coral">.</span>
          </h2>
        </ScrollFade>

        <div className="flex flex-wrap gap-4 mt-10">
          {experience.map((exp, i) => {
            const IconComponent = EXPERIENCE_ICONS[exp] || Heart;
            const colorClass = EXPERIENCE_COLORS[i % 3];

            return (
              <ScrollFade key={exp}>
                <div
                  className={`pill gap-2.5 cursor-default ${colorClass} text-base py-3 px-5`}
                >
                  <IconComponent size={18} />
                  <span>{exp}</span>
                </div>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
