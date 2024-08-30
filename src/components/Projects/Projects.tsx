"use client";
import React from "react";
import BlurFade from "../ui/blur-fade";
import { ProjectCard } from "../ProjectCard";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  const BLUR_FADE_DELAY = 0.04;

  const projects = [
    {
      title: "SWEResume.com",
      href: "https://sweresume.com",
      dates: "July 2023 - Present",
      active: true,
      description:
        "An AI SaaS that helps people create resumes specifically for engineering or technical positions. ",
      technologies: [
        "Typescript",
        "Next.js",
        "Python",
        "Langchain",
        "Pinecone",
        "Clerk",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sweresume.com",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://utfs.io/f/626698f7-ce57-4858-9373-3d6de20e0d98-onf3pg.mov",
    },
    {
      title: "AI Finance Dashboard",
      href: "https://github.com/ojassingh/finance-dashboard",
      dates: "March 2023 - June 2023",
      active: true,
      description:
        "Engineered an AI dashboard aggregating real-time data of 5000+ stock indices.",
      technologies: [
        "Typescript",
        "React",
        "Express.js",
        "Prisma",
        "MySQL",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ojassingh/finance-dashboard",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.finance-dashboard.com/stock-aggregation.mp4",
    },
    {
      title: "Broadcast - A Social Media App",
      href: "https://github.com/ojassingh/broadcast",
      dates: "January 2023 - March 2023",
      active: true,
      description:
        "Architected a real-time chatting application in Go and Typescript, utilizing Next.js, websockets, and Gin.",
      technologies: [
        "Go",
        "Gin",
        "Typescript",
        "React",
        "MongoDB",
        "Websockets",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ojassingh/broadcast",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      // video: "https://cdn.broadcast-app.com/chat-demo.mp4",
    },
    {
      title: "Sentiment Analysis Blog",
      href: "https://github.com/ojassingh/sentiment-analysis-blog",
      dates: "October 2022 - December 2022",
      active: true,
      description:
        "An app for sentiment analysis of blog posts. Used Tensorflow.js's toxicity model to get tone probabilities.",
      technologies: ["Typescript", "Tensorflow", "React", "GraphQL", "AWS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ojassingh/sentiment-analysis-blog",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      // video: "https://cdn.sentiment-analysis.com/toxicity-check-demo.mp4",
    },
  ];

  return (
    <section id="projects" className="pt-10">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Projects
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                Some of my work
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed max-w-2xl">
                I am constantly building and trying to learn new concepts. Here are a few projects that I had fun building.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {projects.map((project, id) => (
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
                className=""
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
