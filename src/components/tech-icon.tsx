import React from "react";
import { cn } from "@/lib/utils";
import {
  siTypescript,
  siJavascript,
  siPython,
  siCplusplus,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siFastapi,
  siPrisma,
  siGraphql,
  siPydantic,
  siPostgresql,
  siMongodb,
  siSqlite,
  siRedis,
  siDocker,
  siKubernetes,
  siGit,
  siLinux,
  siNumpy,
  siPandas,
  siLangchain,
  siLanggraph,
  siFigma,
  siTailwindcss,
  siVercel,
  siStripe,
  siShadcnui,
  siMdx,
  siDrizzle,
} from "simple-icons";

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

// Map normalized skill/tech string to SimpleIcon object
const simpleIconsMap: Record<string, typeof siTypescript> = {
  typescript: siTypescript,
  ts: siTypescript,
  javascript: siJavascript,
  js: siJavascript,
  python: siPython,
  "c++": siCplusplus,
  cpp: siCplusplus,
  react: siReact,
  "next.js": siNextdotjs,
  nextjs: siNextdotjs,
  next: siNextdotjs,
  "node.js": siNodedotjs,
  nodejs: siNodedotjs,
  node: siNodedotjs,
  fastapi: siFastapi,
  "fast api": siFastapi,
  prisma: siPrisma,
  graphql: siGraphql,
  pydantic: siPydantic,
  postgresql: siPostgresql,
  postgres: siPostgresql,
  mongodb: siMongodb,
  mongo: siMongodb,
  sqlite: siSqlite,
  redis: siRedis,
  docker: siDocker,
  kubernetes: siKubernetes,
  k8s: siKubernetes,
  git: siGit,
  linux: siLinux,
  numpy: siNumpy,
  pandas: siPandas,
  langchain: siLangchain,
  langgraph: siLanggraph,
  figma: siFigma,
  tailwindcss: siTailwindcss,
  tailwind: siTailwindcss,
  vercel: siVercel,
  stripe: siStripe,
  "shadcn ui": siShadcnui,
  shadcn: siShadcnui,
  mdx: siMdx,
  drizzle: siDrizzle,
};

export function TechIcon({ name, className, ...props }: TechIconProps) {
  const norm = name.toLowerCase().trim();

  // Check simple-icons lookup first
  const simpleIcon = simpleIconsMap[norm];
  if (simpleIcon) {
    const isMonochrome =
      simpleIcon.hex === "000000" ||
      simpleIcon.hex === "18181B" ||
      simpleIcon.hex === "1B1F23";

    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill={isMonochrome ? "currentColor" : `#${simpleIcon.hex}`}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d={simpleIcon.path} />
      </svg>
    );
  }

  // Custom high-quality brand icons for techs not in simple-icons

  // AWS
  if (norm.includes("aws") || norm.includes("amazon")) {
    return (
      <svg
        viewBox="0 0 100 60"
        className={cn("size-4 shrink-0", className)}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <text
          x="50"
          y="32"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="33"
          letterSpacing="-1.5"
          className="fill-black dark:fill-white"
        >
          aws
        </text>
        <path
          d="M 12 41 C 32 55, 68 55, 85 41"
          stroke="#FF9900"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 81 37 L 91 41 L 84 48 Z"
          fill="#FF9900"
        />
      </svg>
    );
  }

  // Pinecone
  if (norm.includes("pinecone")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="#059669"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8L18 8v8l-6 3.7L6 16V8l6-3.2zM12 9l-4 2.5v4.5l4 2.5 4-2.5V11.5L12 9z" />
      </svg>
    );
  }

  // SQL (Database stack icon)
  if (norm === "sql") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="#F59E0B"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 3c-4.97 0-9 1.57-9 3.5S7.03 10 12 10s9-1.57 9-3.5S16.97 3 12 3zm0 5c-3.87 0-7-1.12-7-2s3.13-2 7-2 7 1.12 7 2-3.13 2-7 2z" />
        <path d="M3 8.5v3c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-3c0 1.93-4.03 3.5-9 3.5s-9-1.57-9-3.5z" />
        <path d="M3 14v3c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-3c0 1.93-4.03 3.5-9 3.5s-9-1.57-9-3.5z" />
      </svg>
    );
  }

  // REST APIs
  if (norm.includes("rest") || norm.includes("api")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="none"
        stroke="#0284C7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" fill="#0284C7" />
      </svg>
    );
  }

  // CI/CD
  if (norm.includes("ci/cd") || norm.includes("cicd")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="none"
        stroke="#2088FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    );
  }

  // LangSmith
  if (norm.includes("langsmith")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="#8B5CF6"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    );
  }

  // Magic UI
  if (norm.includes("magic")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="none"
        stroke="#A855F7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m15 4 5 2-5 2-2 5-2-5-5-2 5-2 2-5 2 5z" />
        <path d="M4 20l9-9" />
      </svg>
    );
  }

  // Vapi AI
  if (norm.includes("vapi")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="#EF4444"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V22h2v-1.06A9 9 0 0 0 21 12v-2h-2z" />
      </svg>
    );
  }

  // Vercel AI SDK
  if (norm.includes("vercel ai") || norm.includes("ai sdk")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="#0070F3"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 2L1 21h22L12 2zm0 5.5l6.5 11.5h-13L12 7.5z" />
      </svg>
    );
  }

  // WebSockets
  if (norm.includes("websocket")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="#EAB308"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }

  // Groq
  if (norm.includes("groq")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="#F97316"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    );
  }

  // Tavily
  if (norm.includes("tavily")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="none"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  }

  // AviationStack
  if (norm.includes("aviation")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill="#3B82F6"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    );
  }

  // Default clean Spark Icon
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-4 shrink-0 text-primary", className)}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
}
