import type { Certification } from "../types/certifications";

// Each certificate shows the image at `certificateImageURL`.
// The files below are empty placeholders: replace them with your certificate
// images (same file names, 4:3 ratio works best) and they will appear automatically.
export const CERTIFICATIONS: Certification[] = [
  {
    title: "Oracle Certified Professional: Java SE 21 Developer",
    issuer: "Oracle",
    certificateImageURL: "/images/certifications/oracle-java-se-21.webp",
    issueDate: "2026-01-01", // TODO: set the actual issue date
    credentialID: "",
    credentialURL: "#", // TODO: paste your Oracle credential / Credly link
  },
  {
    title: "AWS Educate: Machine Learning Foundations",
    issuer: "AWS",
    certificateImageURL:
      "/images/certifications/aws-educate-ml-foundations.webp",
    issueDate: "2025-01-01", // TODO: set the actual issue date
    credentialID: "",
    credentialURL: "#", // TODO: paste your AWS Educate / Credly badge link
  },
];
