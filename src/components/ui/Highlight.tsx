"use client";
import { motion } from "framer-motion";
import React from "react";

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[linear-gradient(to_right,#a7f3d0,#6ee7b7)] bg-no-repeat bg-[length:0%_100%] rounded-xl px-2 mx-1 inline-block leading-tight text-zinc-950"
    >
      {children}
    </motion.span>
  );
}
