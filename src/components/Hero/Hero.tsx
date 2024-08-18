"use client";
import React from "react";
import grain from "@/../public/grain.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      id="home"
      className="grid place-content-center items-center h-screen gap-4"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grain.src})`,
          }}
        ></div>
        <motion.div
          className="hero-ring w-[620px] h-[620px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        ></motion.div>
        <motion.div
          className="hero-ring w-[820px] h-[820px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        ></motion.div>
        <motion.div
          className="hero-ring w-[1020px] h-[1020px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        ></motion.div>
        <motion.div
          className="hero-ring w-[1220px] h-[1220px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        ></motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[8rem] tracking-tight -mt-10 z-10 bg-clip-text text-center text-transparent bg-gradient-to-b from-slate-50 via-slate-100 to-slate-800"
      >
        Building everyday.
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xl text-center max-w-3xl mx-auto text-slate-400 z-10"
      >
        Hi 👋 I'm Ojas, a student and software engineer based in Toronto. I love
        working on new projects, and am experimenting with generative-AI. Hit me
        up if you want to collaborate on something cool.
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      className="flex place-items-center gap-4 mx-auto mt-8 z-10">
        <Link href="">
          <button className="shadow-[0_0_6px_inset] shadow-blue-600/40 p-2 rounded-md">
            Explore work
          </button>
        </Link>
        <Link href="">
          <button className="shadow-[0_0_6px_inset] shadow-blue-600/40 p-2 rounded-md">
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
