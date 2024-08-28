"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Projects() {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <div ref={ref} className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible && { opacity: 1, y: 0, transition: {delay: 1, ease:"easeIn"}}}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl text-white py-40">Projects</h1>
      </motion.div>
    </div>
  );
}
