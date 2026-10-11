import type { Localized } from "./schema";

export interface SkillGroup {
  key: "frontend" | "languages" | "backend" | "tooling";
  label: Localized;
  items: string[];
}

// Draft list per docs/CONTENT.md section 5 ("Rachmad to confirm"), with the
// Mobile group folded into Frontend per docs/DESIGN.md section 6 ("the
// export has no separate Mobile group"). The export's own chip set differs
// from this list (see docs/DECISIONS.md #10) and is still an open question.
export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    label: { en: "Frontend", id: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
  },
  {
    key: "languages",
    label: { en: "Languages", id: "Bahasa Pemrograman" },
    items: ["TypeScript", "JavaScript", "Go", "Dart", "PHP"],
  },
  {
    key: "backend",
    label: { en: "Backend and Data", id: "Backend dan Data" },
    items: ["Node.js", "Go", "Laravel", "PostgreSQL", "MongoDB"],
  },
  {
    key: "tooling",
    label: { en: "Tooling", id: "Perkakas" },
    items: ["Git", "Docker", "GitHub Actions", "AWS"],
  },
];
