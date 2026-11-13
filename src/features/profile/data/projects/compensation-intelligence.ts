import type { Project } from "../../types/projects";

// Featured Project 2: Compensation Intelligent System
export const compensationIntelligence: Project = {
  id: "compensation-intelligent-system",
  slug: "compensation-intelligent-system",
  image: "/images/projects/compensation-intelligent-system.webp",
  title: "Compensation-Intelligent-System - Salary Analytics Platform",
  period: {
    start: "08.2026", // TODO: confirm project dates
  },
  link: "https://github.com/KVVISHRUTHI/Compensation-Intelligent-System", // TODO: confirm repo URL
  skills: [
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Express.js",
    "Zod",
    "Vite",
  ],
  summary: "Compensation analytics for salary benchmarking and market insights",
  description: `Full-stack compensation analytics platform for salary benchmarking, role comparison, and market insights.

**Key Features:**
- Salary benchmarking and side-by-side role comparison
- Market insights driven by stored compensation records and user profiles
- Data modeling and persistence with Prisma on PostgreSQL for compensation records, comparisons, and profile-driven insights
- Schema validation and data-quality checks with Zod so every submission is clean and reliable
- Type-safe React + TypeScript frontend bundled with Vite, backed by an Express API

**Impact:**
- Reliable, validated compensation data through end-to-end schema checks
- Fast, typed full-stack workflow from database to UI`,
  isExpanded: false,
  intro:
    "Compensation-Intelligent-System is a modern full-stack web application for salary benchmarking, role comparison, and market insights. It pairs a typed React frontend with an Express and Prisma backend on PostgreSQL, with Zod validation guarding data quality.",
  uniqueFeatures: [
    "Salary benchmarking and role-to-role comparison",
    "Profile-driven market insights built on stored compensation records",
    "Relational data model with Prisma ORM on PostgreSQL",
    "Zod schema validation and data-quality checks for clean, reliable submissions",
    "End-to-end TypeScript across the React (Vite) frontend and Express backend",
  ],
  techStackDetail: [
    { label: "Frontend", items: "React, TypeScript, Vite" },
    { label: "Backend", items: "Express, Node.js, Zod" },
    { label: "Database", items: "PostgreSQL, Prisma ORM" },
  ],
};
