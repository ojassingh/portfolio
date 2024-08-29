"use client";
import React from "react";
import { DockDemo } from "./Dock";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed mx-auto inset-x-0 -top-2 z-[900]"
    >
      <div className="absolute inset-x-0 mx-auto z-[901] h-14 dark:bg-black/75 bg-white/75 [mask-image:linear-gradient(to_bottom,black,black_40%,transparent)]"></div>
      <div className="z-[902]">
        <DockDemo />
      </div>
    </motion.nav>
  );
}
