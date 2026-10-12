// TODO: Indonesian translation pending. `role.id` currently mirrors `role.en`
// (company names, titles and dates don't need translation; kept Localized
// for consistency with the rest of the content layer).
import type { CompanyId, Localized } from "./schema";

export interface Company {
  id: CompanyId;
  initials: string;
  name: string;
  role: Localized;
  start: string;
  end: string;
  remote?: boolean;
  projectCountStub: number;
}

// Source: docs/rachmad-id-copy-en-v1.md section 4. projectCountStub is a
// manual count of src/content/projects/*.ts entries per companyId (see
// docs/ARCHITECTURE.md for why this isn't computed automatically yet).
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
    projectCountStub: 5,
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
    name: "AccelByte",
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
    projectCountStub: 1,
  },
  {
    id: "maybank",
    initials: "MB",
    name: "Maybank Indonesia",
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
    projectCountStub: 4,
  },
];
