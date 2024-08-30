import React from "react";
import BlurFade from "@/components/ui/blur-fade";
import { Badge } from "./ui/badge";

export default function Skills() {
  const data = {
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "REST",
      "Docker",
      "Kubernetes",
    ],
  };
  const BLUR_FADE_DELAY = 0.04;
  return (
    <section id="skills" className="max-w-2xl grid mx-auto pt-10 px-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {data.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill} className="" variant="secondary">{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
