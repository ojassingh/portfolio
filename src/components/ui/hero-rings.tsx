"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HeroRing(className?: any) {
  return (
    <div
      className={cn(
        "absolute inset-0 border-2 border-emerald-300/5 rounded-full shadow-[0_0_80px_inset] shadow-emerald-300/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        ` ${className}`
      )}
    >
      <div className=""></div>
    </div>
  );
}
