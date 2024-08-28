"use client";
import React from "react";
import grain from "@/../public/grain.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import face from "@/../public/face.jpeg";

export default function Hero() {
  return (
    <div
      id="home"
      className="grid place-content-center items-center h-screen gap-4 relative"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
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
      <div className="flex items-start gap-10 place-content-center">
        <div className="grid gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-7xl h-20 tracking-tight z-10 font-semibold bg-clip-text text-left text-black dark:text-white"
          >
            Hi, I'm Ojas
            <span className="text-yellow-500 ml-4 text-6xl">👋</span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xl text-left max-w-md mx-auto tracking-tight dark:text-slate-400 text-slate-700  z-10"
          >
            Student and software engineer based in Toronto. I love working on
            scaleable and impactful projects. Hit me up to collaborate!
          </motion.h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="z-[5]"
        >
          <Image
            alt="ojas singh"
            className="size-40 rounded-full inline-flex z-[5] object-cover"
            src={face}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex place-items-center gap-4 mx-auto mt-4 z-10"
      >
        <Link href="">
          <button className="rounded-lg flex gap-2 items-center mx-auto  px-4 py-2 outline outline-1 outline-white/10 shadow-blue-600">
            <div></div>
            <span>Explore work</span>
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
