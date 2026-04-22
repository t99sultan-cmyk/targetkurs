"use client";

import { motion } from "framer-motion";
import React from "react";

export function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = false,
  className = "",
  gap = "3rem",
}: {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  gap?: string;
}) {
  const items = (
    <div className="flex shrink-0 items-center" style={{ gap }}>
      {children}
    </div>
  );

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max"
        style={{ gap }}
      >
        <motion.div
          className="flex shrink-0 items-center"
          style={{ gap }}
          animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items}
          {items}
        </motion.div>
      </div>
    </div>
  );
}
