import type { Person, WebSite, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { EDUCATION } from "@/features/profile/data/education";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";

/** Structured data for the site itself, rendered in the root layout. */
export function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  };
}

/** Structured data describing the site owner, rendered in the root layout. */
export function getPersonJsonLd(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: USER.displayName,
    alternateName: ["Vishruthi KV", "Vishruthi", USER.username, "KVVISHRUTHI"],
    givenName: USER.firstName,
    familyName: USER.lastName,
    jobTitle: USER.jobTitle,
    description: USER.bio,
    url: SITE_INFO.url,
    email: atob(USER.email),
    image: `${SITE_INFO.url}${USER.avatar}`,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    alumniOf: EDUCATION.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      url: edu.referenceLink,
    })),
    knowsAbout: [
      "Full Stack Development",
      "Java",
      "Spring Boot",
      "React",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "Computer Vision",
      "YOLOv8",
      "OpenCV",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    worksFor: USER.jobs.map((job) => ({
      "@type": "Organization",
      name: job.company,
      ...(job.website && { url: job.website }),
    })),
  };
}
