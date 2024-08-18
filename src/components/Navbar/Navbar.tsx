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
    className="fixed mx-auto inset-x-0 z-[900]">
      <div className="">
        <DockDemo />
      </div>
    </motion.nav>
  );
}
