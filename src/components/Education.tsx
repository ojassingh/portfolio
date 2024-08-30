import React from "react";
import BlurFade from "./ui/blur-fade";
import { ResumeCard } from "./ui/resume-card";
import uoft from "@/../public/uoft.svg";
import { log } from "console";

export default function Education() {
  const 
  education = [
    {
      school: "University of Toronto",
      degree: "Honours BSc in Computer Science, Mathematics, and Statistics",
      start: "2020",
      end: "2024",
      logoUrl: "https://www.cdnlogo.com/logos/u/73/university-of-toronto.svg",
      href: "https://www.utoronto.ca/",
    },
    {
        school: "buildspace",
        degree: "nights & weekends season 5",
        start: "2024",
        end: "2024",
        logoUrl: "https://avatars.githubusercontent.com/u/65048157?s=280&v=4",
        href: "https://www.utoronto.ca/",
    },
    {
        school: "International Baccalaureate",
        degree: "IB Diploma",
        start: "2018",
        end: "2020",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/International_Baccalaureate_Logo.svg/2048px-International_Baccalaureate_Logo.svg.png",
        href: "https://www.utoronto.ca/",
    }
  ]
  const BLUR_FADE_DELAY = 0.04;
  return (
    <div className="grid max-w-2xl mx-auto pt-10 px-6">
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3 ">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              className="bg-white dark:bg-black"
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
    </div>
  );
}
