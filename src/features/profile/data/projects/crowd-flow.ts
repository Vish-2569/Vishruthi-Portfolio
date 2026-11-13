import type { Project } from "../../types/projects";

// Featured Project 1: CrowdFlow (Expanded)
export const crowdFlow: Project = {
  id: "crowdflow",
  slug: "crowd-flow",
  image: "/images/projects/crowd-flow.webp",
  title: "CrowdFlow - Real-Time AI Crowd Monitoring",
  period: {
    start: "09.2026", // TODO: confirm project dates
  },
  link: "https://github.com/KVVISHRUTHI/CrowdFlow", // TODO: confirm repo URL
  skills: [
    "YOLOv8",
    "ByteTrack",
    "OpenCV",
    "Python",
    "FastAPI",
    "React",
    "Docker",
  ],
  summary: "Real-time AI crowd monitoring from CCTV feeds for public safety",
  description: `Real-time, AI-powered crowd monitoring system that turns live CCTV feeds into detection, tracking, and movement analytics for public safety applications.

**Key Features:**
- Real-time person detection on CCTV streams using YOLOv8 with OpenCV-based frame processing
- Persistent ID tracking pipeline built on ByteTrack to eliminate duplicate counting and keep temporal consistency across frames
- Flow-based predictive analytics that estimate crowd congestion trends from real-time movement rates
- Live geospatial dashboard for monitoring hotspots and raising alerts
- FastAPI backend serving analytics to a React frontend, containerised with Docker

**Impact:**
- Accurate, de-duplicated crowd counts through persistent multi-object tracking
- Early congestion warnings from movement-rate trends instead of static head counts`,
  isExpanded: true,
  intro:
    "CrowdFlow is a real-time, AI-powered crowd monitoring system built on live CCTV feeds. It detects and tracks people across frames, analyses how crowds move, and predicts congestion trends on a live geospatial dashboard built for public safety teams.",
  uniqueFeatures: [
    "Real-time person detection on CCTV feeds using YOLOv8",
    "Persistent ID tracking with ByteTrack that eliminates duplicate counting across video frames",
    "Temporal consistency so the same person keeps the same ID as they move through the scene",
    "Flow-based predictive analytics that estimate congestion trends from real-time movement rates",
    "Live geospatial dashboard with monitoring and alerting",
    "Containerised FastAPI + React stack with Docker for easy deployment",
  ],
  techStackDetail: [
    { label: "Computer Vision", items: "YOLOv8, ByteTrack, OpenCV" },
    { label: "Backend", items: "Python, FastAPI" },
    { label: "Frontend", items: "React, live geospatial dashboard" },
    { label: "DevOps", items: "Docker containers for deployment" },
  ],
};
