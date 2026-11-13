import type { Project } from "../../types/projects";

// Featured Project 3: Civic-Fix
export const civicFix: Project = {
  id: "civic-fix",
  slug: "civic-fix",
  image: "/images/projects/civic-fix.webp",
  title: "Civic-Fix - Civic Issue Reporting Platform",
  period: {
    start: "03.2026", // TODO: confirm project dates
  },
  link: "https://github.com/KVVISHRUTHI/Civic-Fix", // TODO: confirm repo URL
  skills: ["Spring Boot", "Java", "JWT", "React", "MySQL", "REST APIs"],
  summary: "Report and track civic issues with user and admin workflows",
  description: `Platform for reporting and tracking civic issues, with structured workflows for both citizens and administrators.

**Key Features:**
- Citizens report civic issues and follow their status from submission to resolution
- Structured admin workflows for reviewing, assigning, and updating issues
- REST APIs built with Spring Boot
- JWT-based authentication with role-based access control for secure operations
- React frontend integrated with backend services for seamless end-to-end functionality
- MySQL for persistent issue, user, and status data

**Impact:**
- Secure, role-aware access for users and admins via JWT and RBAC
- A single place to raise and track civic problems end to end`,
  isExpanded: false,
  intro:
    "Civic-Fix is a platform for reporting and tracking civic issues. Citizens raise problems and follow their progress, while admins manage them through structured workflows, all secured with JWT authentication and role-based access control.",
  uniqueFeatures: [
    "Issue reporting and status tracking for citizens",
    "Structured admin workflows for reviewing and resolving issues",
    "JWT-based authentication with role-based access control (RBAC)",
    "Secure REST APIs built with Spring Boot",
    "React frontend integrated end to end with the backend services",
  ],
  techStackDetail: [
    { label: "Backend", items: "Java, Spring Boot, REST APIs" },
    { label: "Security", items: "JWT, role-based access control" },
    { label: "Frontend", items: "React, integrated with the REST APIs" },
    { label: "Database", items: "MySQL relational database" },
  ],
};
