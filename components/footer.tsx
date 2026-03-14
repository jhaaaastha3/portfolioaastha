import { Mail, Youtube, Linkedin } from "lucide-react";
import type { Social } from "@/lib/data";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Email: Mail,
  YouTube: Youtube,
  LinkedIn: Linkedin,
};

interface FooterProps {
  tagline: string;
  year: number;
  socials: Social[];
}

export function Footer({ tagline, year, socials }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
        {/* Tagline */}
        <div className="text-center">
          <p
            className="text-text-primary font-bold text-xl mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {tagline}
          </p>
          <p className="text-text-muted text-sm mt-1">
            built by aasthajha with love and coffee
          </p>
          <p className="text-text-muted text-xs mt-1">
            &copy; {year} copyright with aastha. All rights reserved.
          </p>
        </div>

        {/* Social links - hidden for now as requested
        <div className="flex items-center gap-3">
          ...
        </div>
        */}
      </div>
    </footer>
  );
}
