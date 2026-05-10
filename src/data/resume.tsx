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

  work: [],
  education: [],
  projects: [],
  hackathons: [],
} as const;
