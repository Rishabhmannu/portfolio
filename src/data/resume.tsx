import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { PyTorch } from "@/components/ui/svgs/pytorch";
import { TensorFlow } from "@/components/ui/svgs/tensorflow";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { HuggingFace } from "@/components/ui/svgs/huggingface";
import { AWS } from "@/components/ui/svgs/aws";

export const DATA = {
  name: "Rishabh Kumar",
  initials: "RK",
  url: "https://portfolio-hazel-sigma-51.vercel.app",
  location: "Lucknow, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Lucknow",
  description:
    "AI Full-Stack Engineer · Final-year B.Tech (IT) @ IIIT Allahabad. Applied AI systems engineering — from model design through agent orchestration to user-facing apps.",
  summary:
    "Final-year B.Tech (IT) at **IIIT Allahabad**, working at the intersection of applied AI and shipped product. Most recently completed a Technology Internship with [ICICI Bank's Monitoring & Observability team](/#work), contributing to a banking-grade AIOps platform with ML-based anomaly detection. Currently focused on **AI/ML research at IIIT Allahabad** — including a [5-tier edge-deployed CBC analysis pipeline on Jetson](/#projects) — alongside applied LLM systems being prepared for release.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "PyTorch", icon: PyTorch },
    { name: "TensorFlow", icon: TensorFlow },
    { name: "FastAPI", icon: FastAPI },
    { name: "Hugging Face", icon: HuggingFace },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: AWS },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rishabhkumards07@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rishabhmannu",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishabh-kumar-815601230/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:rishabhkumards07@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ICICI Bank",
      href: "https://www.icicibank.com",
      badges: [],
      location: "Mumbai, India (Onsite)",
      title: "Technology Intern — Monitoring & Observability",
      logoUrl: "/icici.svg",
      start: "May 2025",
      end: "July 2025",
      description:
        "Contributed to a banking-grade AIOps platform for 37+ microservices in a Docker/Kubernetes environment. Built ML-based DDoS detection (Isolation Forest, LSTM, One-Class SVM), 14+ Grafana dashboards across DBs, queues, cache, and containers, and automated anomaly-detection workflows. Extended observability and distributed-tracing support to Windows IIS-based services.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Information Technology, Allahabad",
      href: "https://www.iiita.ac.in",
      degree: "B.Tech in Information Technology · CGPA 8.89/10",
      logoUrl: "/iiita.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Jawahar Vidya Mandir, Shyamali",
      href: "#",
      degree: "AISSCE (Class XII, CBSE) · 96.6%",
      logoUrl: "/jvm-shyamali-ranchi.jpeg",
      start: "2019",
      end: "2021",
    },
    {
      school: "St. Xavier's School, Doranda",
      href: "#",
      degree: "ICSE (Class X, CISCE) · 96.7%",
      logoUrl: "/st-xaviers-school-logo.jpg",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "edge-cbc-analyzer",
      href: "https://github.com/Rishabhmannu/edge-cbc-analyzer",
      dates: "2026 · 8th-semester research project",
      active: true,
      description:
        "5-tier Complete Blood Count analysis pipeline (segmentation → WBC differential → anemia screen → RBC morphology → 15-target CBC regression) on Jetson Orin Nano Super + TX2. YOLOv8n-seg matches published SOTA at mAP50 = 0.988 with 2.7–3.3× fewer parameters; end-to-end 171 ms / 5.85 FPS; 30-min stress run with no thermal throttling or memory leak.",
      technologies: [
        "PyTorch",
        "TensorRT FP16",
        "YOLOv8",
        "EfficientNet-B0",
        "Jetson",
        "Gradio",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rishabhmannu/edge-cbc-analyzer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "zen-daily-wisdom",
      href: "https://github.com/Rishabhmannu/zen-daily-wisdom",
      dates: "2026",
      active: true,
      description:
        "Personalized RAG service over 4,606 wisdom passages, with bandit-based mood personalization (regret 47.1 vs 124.8 baseline) and RAG recall@5 = 0.767. Multi-channel delivery via email/Telegram, deployed end-to-end on Vercel + Northflank.",
      technologies: [
        "Next.js",
        "FastAPI",
        "Supabase pgvector",
        "Gemini",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://zen-daily-wisdom-frontend.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rishabhmannu/zen-daily-wisdom",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "banking-observability-platform",
      href: "https://github.com/Rishabhmannu/banking-observability-platform",
      dates: "2025 · built during ICICI internship",
      active: true,
      description:
        "Open-source AIOps stack for 37+ banking microservices with ML-based DDoS detection (Isolation Forest, LSTM, One-Class SVM), a chaos-engineering injector, and a Mermaid-mapped architecture across 25+ containers.",
      technologies: [
        "Python",
        "Docker",
        "Kubernetes",
        "TensorFlow",
        "Prometheus",
        "Grafana",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rishabhmannu/banking-observability-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "skywings-airways",
      href: "https://github.com/Rishabhmannu/skywings-airways",
      dates: "2026",
      active: true,
      description:
        "Full-stack airline ticket booking with real-time Google Flights data, OTP-secured mock payments, and PDF/QR e-tickets. Deployed on Vercel + Oracle Cloud with 55 passing unit and integration tests.",
      technologies: [
        "Spring Boot 3",
        "React 18",
        "PostgreSQL",
        "Redis",
        "Java 21",
      ],
      links: [
        {
          type: "Website",
          href: "https://skywings-airways.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rishabhmannu/skywings-airways",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "amazon-greencart-hackathon",
      href: "https://github.com/Rishabhmannu/amazon-greencart-hackathon",
      dates: "2025 · Amazon HackOn Season 5",
      active: true,
      description:
        "Sustainable e-commerce platform with an XGBoost-based EarthScore (0–100), DBSCAN-driven group-buying clusters, and a multi-agent LangGraph shopping assistant. Open-sourced and reached Semi-Finals as Team Dragonz; 58 ⭐ on GitHub.",
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "LangGraph",
        "Redis",
        "Gemini",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rishabhmannu/amazon-greencart-hackathon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Amazon HackOn — Season 5",
      dates: "2025",
      location: "Online · India",
      description:
        "Built GreenCart — a sustainable e-commerce platform with an XGBoost-based EarthScore, DBSCAN-driven group buying, and a multi-agent LangGraph shopping assistant. Open-sourced — 58⭐ on GitHub. Reached Semi-Finals as Team Dragonz.",
      image: "",
      win: "Semi-Finalist · Team Dragonz",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Rishabhmannu/amazon-greencart-hackathon",
        },
      ],
    },
    {
      title: "Walmart Sparkathon — Converge",
      dates: "2025",
      location: "Online · India",
      description:
        "Walmart Global Tech's open innovation challenge. Submitted GreenCart as a sustainability-focused commerce concept; recognised with a Certificate of Appreciation from Walmart Global Tech.",
      image: "",
      links: [],
    },
  ],
} as const;
