import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: RiLinkedinBoxLine,
    title: "LinkedIn",
    description: "vishruthikv",
    href: "https://www.linkedin.com/in/vishruthikv/",
  },
  {
    icon: RiGithubLine,
    title: "GitHub",
    description: "KVVISHRUTHI",
    href: "https://github.com/KVVISHRUTHI",
  },
  {
    icon: RiMailLine,
    title: "Email",
    description: "vishruthi.2569@gmail.com",
    href: "mailto:vishruthi.2569@gmail.com",
  },
];
