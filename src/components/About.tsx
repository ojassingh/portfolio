import React from "react";
import BlurFade from "./ui/blur-fade";

export default function About() {
  return (
    <BlurFade inView>
      <div id="about" className="max-w-2xl mx-auto grid gap-1 sm:pt-20 -mt-20 px-6">
        <h1 className="text-xl dark:text-white text-black font-semibold">About</h1>
        <p className="text-base dark:text-slate-400 text-slate-500">
          I am a 4th-year undergraduate at the <span className="dark:text-white text-black underline">University of Toronto</span>, completing the Computer Science, Mathematics, and Statistics program. I taught
          myself full-stack development in 2021, and found a deep passion
          for building cool apps. I specialize in web-dev with <span className="dark:text-white text-black underline">Next.js</span>, and also
          have a keen interest in <span className="dark:text-white text-black underline">deep learning and AI</span>. Currently messing
          around with generative AI projects; learning more transformers and
          attention. I was also in <span className="dark:text-white text-black underline">buildspace</span>'s nights & weekends season 5.
        </p>
      </div>
    </BlurFade>
  );
}
