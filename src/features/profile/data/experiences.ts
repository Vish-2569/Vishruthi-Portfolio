import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  // Internship Experience - ESG Sentinel
  {
    id: "esg-sentinel",
    companyName: "ESG Sentinel Private Limited",
    // companyLogo: "/images/companies/esg-sentinel-logo.webp", // Optional: add a 200x200 logo and uncomment
    positions: [
      {
        id: "full-stack-intern",
        title: "Full Stack Developer Intern",
        employmentPeriod: {
          start: "07.2026",
          end: "07.2026",
        },
        employmentType: "Internship · On-site",
        icon: "code",
        description: `
**ESGNyan (Enterprise ESG Analytics Platform)**
- Developed and maintained scalable backend services for ESGNyan using Node.js, TypeScript, PostgreSQL, and Prisma ORM.
- Designed and implemented RESTful APIs for data management, analytics workflows, and seamless communication between frontend and backend systems.
- Optimized database queries, data processing workflows, and application performance while ensuring secure and reliable data access across multiple modules.
- Collaborated with cross-functional teams to develop, test, and deploy new features, improving application functionality and user experience.`,
        skills: [
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "REST APIs",
          "Git",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
];
