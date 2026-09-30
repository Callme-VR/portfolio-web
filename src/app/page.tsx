import { AgeCounter } from "@/components/age-counter";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { TechIcon } from "@/components/tech-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-dvh space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className=" text-3xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none"
                yOffset={8}
                text={`hi, ${DATA.name.split(" ")[0].toLowerCase()} here`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <AgeCounter birthDate={DATA.birthDate} />
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About Me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <div className="mt-6 flex items-center gap-2 rounded-2xl border border-primary/10 bg-primary/5 p-4 transition-all duration-300 hover:bg-primary/10 hover:shadow-lg dark:bg-white/5 dark:hover:bg-white/10">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Get in touch
              </span>
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="font-sans text-sm font-semibold hover:underline sm:text-base"
              >
                {DATA.contact.email}
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col space-y-1">
              <h2 className="text-xl font-bold tracking-tight">Skills</h2>
            </div>
          </BlurFade>

          {/* Categorized Skill Badges with Colorful Icons */}
          {Object.entries(DATA.skills).map(([category, skills], categoryId) => (
            <div
              key={category}
              className="space-y-2 group rounded-xl p-2 transition-all duration-300"
            >
              <BlurFade delay={BLUR_FADE_DELAY * 10 + categoryId * 0.05}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {category}
                </h3>
              </BlurFade>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 11 + categoryId * 0.05 + id * 0.02}
                  >
                    <Badge
                      key={skill}
                      className="group/badge relative flex items-center gap-2 px-3 py-1.5 text-xs font-medium cursor-default transition-all duration-300 ease-out border border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 hover:-translate-y-1 hover:scale-105 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-neutral-200/90 dark:hover:bg-neutral-800/90 hover:shadow-md hover:shadow-primary/5"
                      variant="outline"
                    >
                      <TechIcon name={skill} className="size-4 shrink-0 transition-transform duration-300 group-hover/badge:scale-125 group-hover/badge:rotate-6" />
                      <span className="transition-colors duration-300 group-hover/badge:text-primary font-semibold">{skill}</span>
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
              </div>
            </div>
          </BlurFade>
          <Tabs
            defaultValue="web"
            className="mx-auto w-full max-w-[800px]"
          >
            <TabsList className="mx-auto grid w-full max-w-[400px] grid-cols-2">
              <TabsTrigger value="web">Web Projects</TabsTrigger>
              <TabsTrigger value="ai">AI Agents</TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="mt-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DATA.projects
                  .filter((project) => project.category === "web")
                  .map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="ai" className="mt-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DATA.projects
                  .filter((project) => project.category === "ai")
                  .map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                say hello on{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  𝕏
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
