import type { CompanyId, Localized } from "./schema";

export interface Company {
  id: CompanyId;
  initials: string;
  name: string;
  role: Localized;
  start: string;
  end: string;
  remote?: boolean;
  // TODO Phase 4: replace with a count derived from src/content/projects/*.ts
  // once that content exists, per docs/ARCHITECTURE.md ("project counts
  // computed from project data"). docs/ROADMAP.md Phase 3 explicitly calls
  // for stubbing this until then.
  projectCountStub: number;
}

export const companies: Company[] = [
  {
    id: "quickbill",
    initials: "QB",
    name: "Quickbill",
    role: {
      en: "Senior Software Engineer, Full Stack",
      id: "Senior Software Engineer, Full Stack",
    },
    start: "2025-01",
    end: "2026-07",
    projectCountStub: 4,
  },
  {
    id: "1engage",
    initials: "1E",
    name: "1Engage (Sinarmas Group)",
    role: {
      en: "Software Engineer, Full Stack",
      id: "Software Engineer, Full Stack",
    },
    start: "2024-04",
    end: "2024-12",
    projectCountStub: 1,
  },
  {
    id: "accelbyte",
    initials: "AB",
    name: "Accelbyte",
    role: {
      en: "Software Engineer II, Frontend",
      id: "Software Engineer II, Frontend",
    },
    start: "2023-01",
    end: "2024-04",
    remote: true,
    projectCountStub: 2,
  },
  {
    id: "moladin",
    initials: "MO",
    name: "Moladin",
    role: {
      en: "Software Engineer II, Frontend",
      id: "Software Engineer II, Frontend",
    },
    start: "2022-02",
    end: "2023-01",
    projectCountStub: 0,
  },
  {
    id: "maybank",
    initials: "MB",
    name: "Maybank",
    role: {
      en: "Frontend Developer",
      id: "Frontend Developer",
    },
    start: "2021-03",
    end: "2022-02",
    projectCountStub: 1,
  },
  {
    id: "voffice",
    initials: "VO",
    name: "vOffice Indonesia",
    role: {
      en: "Web Developer",
      id: "Web Developer",
    },
    start: "2019-03",
    end: "2021-03",
    // CONTENT.md marks this "2 (to confirm)" — izin.co.id's vOffice
    // attribution is unresolved, see docs/DECISIONS.md.
    projectCountStub: 2,
  },
];
