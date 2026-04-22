"use client";

import { motion } from "framer-motion";

export function AnimatedCheckmark({
  size = 24,
  color = "#10b981",
  circleColor = "#d1fae5",
  strokeWidth = 3,
  delay = 0,
  className = "",
}: {
  size?: number;
  color?: string;
  circleColor?: string;
  strokeWidth?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      <motion.circle
        cx="25"
        cy="25"
        r="22"
        fill={circleColor}
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { delay, type: "spring", stiffness: 200, damping: 15 },
          },
        }}
      />
      <motion.path
        d="M14 26 L22 34 L36 18"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0 },
          visible: {
            pathLength: 1,
            transition: { delay: delay + 0.2, duration: 0.6, ease: "easeOut" },
          },
        }}
      />
    </motion.svg>
  );
}
