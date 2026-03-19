"use client";
import { motion } from "framer-motion";

export function MouseGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-multiply opacity-70">
      <motion.div
        animate={{ 
          x: [0, 80, -80, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-emerald-400/40 blur-[70px]"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 80, 0],
          y: [0, 100, -50, 0],
          scale: [0.9, 1.1, 1, 0.9]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] right-[10%] w-[250px] h-[250px] rounded-full bg-sky-400/30 blur-[70px]"
      />
      <motion.div
        animate={{ 
          x: [-50, 50, -50],
          y: [50, -50, 50],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] left-[30%] w-[200px] h-[200px] rounded-full bg-indigo-400/20 blur-[60px]"
      />
    </div>
  );
}
