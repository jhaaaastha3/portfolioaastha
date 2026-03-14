import { ScrollFade } from "./scroll-fade";
import { Award } from "lucide-react";

const CERT_COLORS = [
  { bg: "bg-coral/10", text: "text-coral", border: "border-coral/20", hover: "hover:bg-coral/20" },
  { bg: "bg-mint/10", text: "text-mint", border: "border-mint/20", hover: "hover:bg-mint/20" },
  { bg: "bg-purple/10", text: "text-purple", border: "border-purple/20", hover: "hover:bg-purple/20" },
];

interface CertificatesProps {
  certificates: string[];
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <section id="certificates" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <p className="text-coral text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Verified achievements
          </p>
          <h2 className="section-heading">
            Certificates<span className="text-coral">.</span>
          </h2>
        </ScrollFade>

        <div className="flex flex-wrap gap-3 mt-10">
          {certificates.map((cert, i) => {
            const color = CERT_COLORS[i % 3];

            return (
              <ScrollFade key={cert}>
                <div
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border ${color.bg} ${color.text} ${color.border} ${color.hover} transition-all duration-300 cursor-default hover:scale-105`}
                >
                  <Award size={14} />
                  <span>{cert}</span>
                </div>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
