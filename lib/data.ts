import fs from "fs";
import path from "path";

// ── Types ──────────────────────────────────────────
export interface Skill {
  name: string;
  tool: string;
  icon: string;
  color: "coral" | "purple" | "mint";
}

export interface Education {
  degree: string;
  institution: string;
  affiliation: string;
  status: string;
  year: string;
  gpa: string;
}

export interface Leadership {
  role: string;
  organization: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  tag: string;
}

export interface Social {
  name: string;
  url: string;
}

export interface PortfolioData {
  name: string;
  subtitle: string;
  roles: string[];
  about: {
    bio: string;
    email: string;
    phone: string;
    location: string;
    languages: string[];
  };
  skills: Skill[];
  education: Education[];
  leadership: Leadership[];
  projects: Project[];
  experience: string[];
  certificates: string[];
  footer: {
    tagline: string;
    year: number;
    socials: Social[];
  };
}

// ── Main loader — reads JSON embedded in data.md ───
export function getPortfolioData(): PortfolioData {
  const filePath = path.join(process.cwd(), "data.md");
  const raw = fs.readFileSync(filePath, "utf-8");

  // Extract JSON block from markdown (```json ... ```)
  const jsonMatch = raw.match(/```json\s*\n([\s\S]*?)\n```/);
  if (!jsonMatch) {
    throw new Error(
      "No JSON block found in data.md. Wrap your portfolio data in ```json ... ```"
    );
  }

  const parsed = JSON.parse(jsonMatch[1]) as PortfolioData;
  return parsed;
}
