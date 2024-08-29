import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
