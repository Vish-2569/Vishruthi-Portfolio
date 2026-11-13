import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Vishruthi",
  lastName: "K V",
  displayName: "Vishruthi K V",
  username: "vishruthikv",
  gender: "female",
  pronouns: "she/her",
  bio: "Aspiring Full Stack Developer | Oracle Certified Java SE 21 Developer | ECE @ Saveetha Engineering College | Full Stack Intern @ ESG Sentinel | Java, Spring Boot, React",
  flipSentences: [
    "Aspiring Full Stack Developer",
    "Oracle Certified Java SE 21 Developer",
    "Full Stack Intern @ ESG Sentinel",
    "ECE @ Saveetha Engineering College",
    "Building with Spring Boot & React",
  ],
  address: "Chennai, Tamil Nadu, India",
  phoneNumber: "", // Optional: base64 encoded E.164 phone (e.g. btoa("+91XXXXXXXXXX")) to show "Call me" in Contact
  email: "dmlzaHJ1dGhpLjI1NjlAZ21haWwuY29t", // base64 encoded vishruthi.2569@gmail.com
  website: "https://vishruthikv.vercel.app", // Change to your own domain once deployed
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Full Stack Developer Intern",
      company: "ESG Sentinel Private Limited",
      website: "", // Add the company website if you want it linked
    },
  ],
  about: `
I don't just learn frameworks; I ship with them.

As a **Full Stack Developer Intern at ESG Sentinel**, I built and maintained scalable backend services for **ESGNyan**, an enterprise ESG analytics platform, using Node.js, TypeScript, PostgreSQL, and Prisma ORM. I designed RESTful APIs, optimized database queries, and shipped features alongside cross-functional teams.

Currently pursuing a **B.E. in Electronics and Communication Engineering at Saveetha Engineering College** (CGPA 9.4), and an **Oracle Certified Professional: Java SE 21 Developer**.

My focus: building secure, maintainable full-stack applications with **Java, Spring Boot, React, and REST APIs**, and exploring real-time computer vision with **YOLOv8 and OpenCV**.
  `,
  avatar: "/images/avatar.webp", // Replace this file with your photo (400x400px recommended)
  ogImage: "/images/og-image.webp", // Social share image (1200x630px)
  namePronunciationUrl: "", // Optional: Add if you create one
  keywords: [
    "Vishruthi K V",
    "Vishruthi KV",
    "Vishruthi",
    "vishruthikv",
    "KVVISHRUTHI",
    "Vishruthi Full Stack Developer",
    "Vishruthi Saveetha Engineering College",
    "Full Stack Developer Chennai",
    "Java Developer Chennai",
    "Spring Boot Developer",
    "React Developer",
    "Oracle Certified Java SE 21 Developer",
    "ESG Sentinel",
    "Saveetha Engineering College ECE",
  ],
  dateCreated: "2026-11-11", // Date when you started building this portfolio
};
