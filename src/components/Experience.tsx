import React from "react";
import BlurFade from "./ui/blur-fade";
import { ResumeCard } from "./ui/resume-card";

export default function Experience() {
  const BLUR_FADE_DELAY = 0.04;
  const work = [
    {
      company: "Flow Robotics",
      href: "https://flowrobotics.com",
      badges: [],
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQFKgzjITdRKVA/company-logo_100_100/company-logo_100_100/0/1709952884447/flow_robo_logo?e=1732752000&v=beta&t=9Y-M5Do4LMhmXdbEcAPzeMa_RAFC3hOswrruq2dtMNs",
      start: "May 2024",
      end: "Present",
      description:
        "Developed a landing page for a medical device with TypeScript utilizing Next.js, shadcn/ui, and TailwindCSS. Integrated Vercel Analytics, and utilized React Testing Library to achieve 100% test coverage.",
    },
    {
      company: "Stealth Startup",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "",
      start: "September 2023",
      end: "December 2023",
      description:
        "Engineered a Retrieval Augmented Generation (RAG) component pipeline with Python and TypeScript, utilizing Langchain and Next.js to process user documents for 600+ monthly active users. Implemented a vector-search query using Supabase and SQL, and used React to draft a clean User Interface.",
    },
    {
      company: "University of Toronto Scarborough",
      href: "https://www.utsc.utoronto.ca",
      badges: [],
      location: "Toronto, ON",
      title: "Web Developer",
      logoUrl: "https://www.cdnlogo.com/logos/u/73/university-of-toronto.svg",
      start: "June 2022",
      end: "May 2023",
      description:
        "Developed a web application using JavaScript and Next.js for 2000+ University of Toronto students. Integrated Stripe payment checkout, and a custom CMS with Firebase for fast event management. Achieved <300 ms first paint load time, and optimized asset storage to reduce bandwidth use by 300%. Led cross-functional collaboration with 2 other team departments, ensuring effective communication.",
    },
    {
      company: "Omdena",
      href: "https://omdena.com",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer Intern",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjKeYvKflG6PYi-HIMcSgvk4Vk_BrZzlE7Q&s",
      start: "August 2020",
      end: "December 2020",
      description:
        "Processed 10,000+ data points with Python via scikit-learn and pandas for optimal visualization and cleaning. Employed PCA for a 70% reduction in dimensions, keeping 95% of variance for improved model efficiency. Led two sprints with 5 engineers, serving as scrum master and utilizing Jira for agile project management.",
    },
  ];
  

  return (
    <section id="work" className="max-w-2xl mx-auto grid pt-10">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {work.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
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
  );
}
