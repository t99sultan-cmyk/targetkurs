"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function FloatingBadge({ children, className, delay = 0, yOffset = 15 }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={cn("absolute z-20", className)}
    >
      <motion.div
        animate={{ y: [0, -yOffset, 0] }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-soft"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
