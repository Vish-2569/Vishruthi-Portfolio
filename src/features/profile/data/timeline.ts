import type { TimelineEvent } from "../types/timeline";

// Hackathon journey.
// - Photos live in /public/images/timeline/<event>/ (16:9, 1280x720 works best).
//   Add or remove paths in `images` to change how many photos an event shows.
// - `sortDate` controls the order (most recent first); `date` is what's shown.
export const TIMELINE: TimelineEvent[] = [
  {
    id: "techno-a-thon",
    title: "Techno-A-Thon 2025",
    subtitle: "24-Hour IoT Hackathon | St. Joseph College",
    date: "Sep 18-19, 2025",
    sortDate: "2025-09-18",
    description:
      "Built an IoT prototype in **24 hours** at **Techno-A-Thon 2025**, a national-level hackathon at St. Joseph College, and ranked among the **Top 50 teams**. Wired up the hardware with an Arduino Uno and Nano, an ultrasonic sensor, a DHT11 temperature and humidity sensor, and a relay module.",
    images: [
      "/images/timeline/techno-a-thon/1.webp",
      "/images/timeline/techno-a-thon/2.webp",
      "/images/timeline/techno-a-thon/3.webp",
    ],
  },
  {
    id: "trigenix",
    title: "Trigenix 2026",
    subtitle: "National Level Hackathon | Dhanalakshmi Srinivasan College",
    date: "Mar 26-27, 2026",
    sortDate: "2026-03-26",
    description:
      "Competed in **TRIGENIX-26**, a national-level **24-hour non-stop hackathon** organised by the School of Electrical Sciences at Dhanalakshmi Srinivasan College of Engineering and Technology, Mamallapuram. Built an **AI Crowd Intelligence System** that detects and tracks every person in a video with a unique ID, shows the direction of crowd flow, and predicts upcoming crowd levels in real time. This prototype grew into my project [CrowdFlow](/projects/crowd-flow).",
    images: [
      "/images/timeline/trigenix/1.webp",
      "/images/timeline/trigenix/2.webp",
      "/images/timeline/trigenix/3.webp",
      "/images/timeline/trigenix/4.webp",
    ],
  },
  {
    id: "code-o-clock",
    title: "Code O Clock 2026",
    subtitle: "3rd Prize Winner Among 140+ Teams | CIT, Coimbatore",
    date: "Aug 21-22, 2026",
    sortDate: "2026-08-21",
    description:
      "Won **3rd Prize (Platinum)** among **140+ teams** at **Code O' Clock 2K26**, a hackathon organised by the Department of Artificial Intelligence and Data Science at **Coimbatore Institute of Technology**, competing as team **NIVORIX** and taking home a cash prize of **₹10,000**.",
    images: [
      "/images/timeline/code-o-clock/1.webp",
      "/images/timeline/code-o-clock/2.webp",
      "/images/timeline/code-o-clock/3.webp",
    ],
  },
  {
    id: "kernel-prime-26",
    title: "Kernel Prime '26",
    subtitle: "Top 40 Among 100+ Teams | S.A. Engineering College, Chennai",
    date: "Oct 8-9, 2026",
    sortDate: "2026-10-08",
    description:
      "Ranked in the **Top 40 among 100+ teams** at **KernelPrime'26**, a national-level **24-hour hackathon** organised by the Department of ECE & VLSI at S.A. Engineering College, Chennai. Built and pitched **Nirecta, a Talent Decision Intelligence OS**, based on the idea that most companies don't have a hiring problem, they have a memory problem, so our system remembers every hiring decision.",
    images: [
      "/images/timeline/kernel-prime-26/1.webp",
      "/images/timeline/kernel-prime-26/2.webp",
      "/images/timeline/kernel-prime-26/3.webp",
      "/images/timeline/kernel-prime-26/4.webp",
    ],
  },
  {
    id: "quant-a-maze",
    title: "Quant-A-Maze 3.0",
    subtitle: "Top 35 Among 375+ Teams | NMIT, Bengaluru",
    date: "Oct 28-30, 2026",
    sortDate: "2026-10-28",
    description:
      "Ranked in the **Top 35 among 375+ teams** at **Quant-A-Maze 3.0**, a national-level **36-hour hackathon** organised by Q-BITS, the Quantum Technology Club of Nitte Meenakshi Institute of Technology (NMIT), Bengaluru, competing as team **HackNova**.",
    images: [
      "/images/timeline/quant-a-maze/1.webp",
      "/images/timeline/quant-a-maze/2.webp",
      "/images/timeline/quant-a-maze/3.webp",
    ],
  },
  {
    id: "airo-5",
    title: "AIRO 5.0 Symposium 2025",
    subtitle: "Runner-Up, Chatbot Challenge | Sairam SEC",
    date: "Sep 12, 2025",
    sortDate: "2025-09-12",
    description:
      "Secured **Runner-Up** in the **Chatbot Challenge** at **AIRO 5.0**, a national-level technical symposium organised by the Department of Artificial Intelligence and Data Science at **Sri Sairam Engineering College**, Chennai. Designed and demoed a working chatbot with my team and received a Certificate of Appreciation.",
    images: [
      "/images/timeline/airo-5/1.webp",
      "/images/timeline/airo-5/2.webp",
      "/images/timeline/airo-5/3.webp",
      "/images/timeline/airo-5/4.webp",
    ],
  },
];
