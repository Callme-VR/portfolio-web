import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page | Resume",
  description: "this is an home pages of my portfolio websites",
};

export const DATA = {
  name: "Vishal Rajput",
  initials: "VSR",
  url: "https://vishal-lime.vercel.app",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/Noida",
  description:
    "AI Engineer and Designer passionate about building intelligent systems and scalable applications. Currently focused on developing production-ready AI solutions and contributing to open-source projects.",
  summary:
    "AI Engineer and Designer with expertise in building end-to-end ML pipelines, developing intelligent applications, and optimizing model performance. Skilled in full-stack development with a focus on creating impactful AI solutions for businesses.",
  avatarUrl: "/vishal.jpeg",

  skills: {
    "Programming Languages": ["TypeScript", "JavaScript", "Python", "C++"],
    Frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Fast Api",
      "Prisma",
      "GraphQL",
      "REST APIs",
    ],
    Databases: ["PostgreSQL", "MongoDB", "SQLITE", "SQL"],
    DevOps: ["Docker", "Kubernetes", "AWS", "Git", "Linux", "CI/CD"],
    "AI/ML": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    Design: ["Figma", "UI/UX", "Framer"],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vr347147@gmail.com",
    tel: "+91 9557712902",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Callme-VR",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vishal-rajput-488113248",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/CodeAi_Vishal",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:vr347147@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Tanstack",
      href: "https://tanstack.com",
      badges: [],
      location: "United States, America",
      title: "Software Engineer",
      logoUrl: "/Tanstack.png",
      start: "January 2025",
      end: "March 2025",
      description:
        "Working as a open source contributor and a Software Engineer at Tanstack. Building the next generation of web development tools.",
    },
    {
      company: "HuggingFace",
      href: "https://huggingface.co",
      badges: [],
      location: "Remote",
      title: "AI/ML Engineer Intern",
      logoUrl: "/hugging_face1.png",
      start: "October 2025",
      end: "December 2025",
      description:
        "Collaborated with the team to enhance large language models through advanced optimization techniques and performance tuning. Implemented fine-tuning pipelines and Retrieval-Augmented Generation (RAG) systems to improve model accuracy and contextual understanding. Developed and optimized ML pipelines, improved model inference speed, and enhanced contextual retrieval mechanisms for production-ready applications.",
    },
  ],
  education: [
    {
      school: "Graphic Era Deemed to be University",
      href: "https://geu.ac.in",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/gehu.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "DocterlogyAI",
      href: "https://docterlogy.vercel.app",
      dates: "November 2024 - Present",
      active: true,
      description:
        "DocterlogyAI is a platform that allows users to find the best doctors in their area and provide consultation with them using AI. It is a great way to find the best doctors in your area.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
        "Vapi AI",
        "Vercel AI SDK",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://docterlogy.vercel.app",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/Callme-VR/Docterlogy",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ReviewerAi",
      href: "https://riviewer.vercel.app",
      dates: "November 2024 - Present",
      active: true,
      description:
        "ReviewerAi is a platform that allows users to review GitHub errors and issues and provide solutions for better improvement of a codebase. It uses the Vercel AI SDK to generate solutions for codebase improvement.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "vapi ai",
        "vercel i SDK",
        "docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://riviewer.vercel.app",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/Callme-VR/riviewer",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "PORTUI",
      href: "https://portui.vercel.app",
      dates: "August 2024 - Present",
      active: true,
      description:
        "PortUI is a platform that allows users to create and manage their portfolio website. It is a great way to create and manage your portfolio website and it has various types of components for making beautiful websites.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "MDX",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://portui.vercel.app",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/Callme-VR/PORTUI",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Clyndra",
      href: "https://cy-lndra.vercel.app",
      dates: "Month Year - Present",
      active: true,
      description:
        "A brief description of your project. Explain what it does, who it's for, and what makes it special.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "dirzzle",
        "prisma",
        "VERCEL",
        "Docker",
        "POSTGRESQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://cy-lndra.vercel.app/",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/Callme-VR/CyLndra",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/home.png",
      video: "",
    },
  ],
} as const;
