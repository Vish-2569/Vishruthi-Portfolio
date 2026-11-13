import type { Project } from "../../types/projects";
import { civicFix } from "./civic-fix";
import { compensationIntelligence } from "./compensation-intelligence";
import { crowdFlow } from "./crowd-flow";

/** Every project, in the order the site lists them. */
export const PROJECTS: Project[] = [
  crowdFlow,
  compensationIntelligence,
  civicFix,
];

/** Look up a project by its URL slug. */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
