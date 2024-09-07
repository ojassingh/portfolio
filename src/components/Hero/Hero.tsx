"use client";
import React from "react";
import grain from "@/../public/grain.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import face from "@/../public/face6.jpeg";
import BlurFade from "../ui/blur-fade";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div
      id="home"
      className="grid place-content-center items-center h-screen gap-4 relative px-4"
    >
      <div className="hidden sm:block absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grain.src})`,
          }}
        ></div>
        <motion.div
          className="hero-ring w-[620px] h-[620px] z-[3] mx-auto my-auto inset-0"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="hero-ring w-[820px] h-[820px] z-[2] mx-auto my-auto inset-0"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="hero-ring w-[1020px] h-[1020px] z-[1] mx-auto my-auto inset-0"
          initial={{ opacity: 0, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        ></motion.div>
        <motion.div
          className="hero-ring w-[1220px] h-[1220px] z-[0] mx-auto my-auto inset-0"
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        ></motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-lg flex gap-2 items-center mx-auto px-4 py-2 outline outline-1 outline-white/10 shadow-blue-600 -mt-14 mb-2"
      >
        <div className="">
          <span className="relative flex size-3 items-center place-content-center">
            <span className="animate-ping absolute inline-flex size-[10px] rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
          </span>
        </div>
        <p>Open to work</p>
      </motion.div>
      <div className="flex flex-wrap-reverse items-center gap-10 place-content-center">
        <div className="grid gap-2">
          <BlurFade delay={0.2} inView>
            <motion.h1
              // initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-7xl tracking-tight z-10 font-semibold bg-clip-text text-center sm:text-left text-black dark:text-white"
            >
              Hi, I'm Ojas
              <motion.span
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.7 }}
                className="ml-4 text-5xl sm:text-6xl duration-300"
              >
                👋
              </motion.span>
            </motion.h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <motion.h3
              // initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.7, delay: 0.35 }}
              className="sm:text-xl text-base text-center sm:text-left max-w-md mx-auto tracking-tight dark:text-slate-400 text-slate-700  z-10"
            >
              Student and software engineer in Toronto 📍 <br /> I love working
              on scaleable and impactful projects. Hit me up to collaborate!
            </motion.h3>
          </BlurFade>
        </div>
        <BlurFade delay={0.2} inView>
          <motion.div
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.7, delay: 0.2 }}
            className="z-[5] relative"
          >
            <Image
              alt="ojas singh"
              className="size-56 rounded-3xl inline-flex z-[5] object-cover"
              src={face}
            />
          </motion.div>
        </BlurFade>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex place-items-center gap-4 mx-auto mt-4 z-10"
      >
        <Link href="/#about">
          <button className="rounded-lg flex gap-2 items-center mx-auto  px-4 py-2 outline outline-1 outline-white/10 shadow-blue-600">
            <div></div>
            <span className="flex items-center gap-1">
              More about me <ChevronDown className="size-4" />
            </span>
          </button>
        </Link>
        <Link href="">
          <button className="rounded-lg flex gap-2 items-center mx-auto  px-4 py-2 outline outline-1 outline-white/10 shadow-blue-600">
            Get in touch
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

{
  /* <motion.h3 className="text-4xl">
Hi I'm Ojas, a student and software engineer based in Toronto. I love
working on new projects, and am experimenting with generative-AI
websites.
</motion.h3> */
}
