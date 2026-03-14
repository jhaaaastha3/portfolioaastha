import { ScrollFade } from "./scroll-fade";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

interface AboutProps {
  bio: string;
  email: string;
  phone: string;
  location: string;
  languages: string[];
}

export function About({ bio, email, phone, location, languages }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <p className="text-coral text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Who am I?
          </p>
          <h2 className="section-heading">
            About Me<span className="text-coral">.</span>
          </h2>
        </ScrollFade>

        <div className="grid md:grid-cols-5 gap-6 mt-10">
          {/* Bio card — spans 3 cols */}
          <ScrollFade className="md:col-span-3">
            <div className="glass-card p-8 h-full">
              <p className="text-lg leading-relaxed text-text-secondary">
                {bio}
              </p>
            </div>
          </ScrollFade>

          {/* Contact card — spans 2 cols */}
          <ScrollFade className="md:col-span-2">
            <div className="glass-card p-8 h-full flex flex-col gap-5">
              <h3
                className="text-lg font-bold text-text-primary"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Get in Touch
              </h3>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-coral transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors">
                  <Mail size={18} className="text-coral" />
                </div>
                <span className="text-sm">{email}</span>
              </a>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-text-secondary hover:text-mint transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-mint/10 flex items-center justify-center group-hover:bg-mint/20 transition-colors">
                  <Phone size={18} className="text-mint" />
                </div>
                <span className="text-sm">{phone}</span>
              </a>

              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center">
                  <MapPin size={18} className="text-purple" />
                </div>
                <span className="text-sm">{location}</span>
              </div>

              {/* Languages */}
              <div className="flex items-center gap-3 text-text-secondary mt-2">
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                  <Globe size={18} className="text-coral" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-text-muted border border-white/[0.05]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}
