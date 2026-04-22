"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress({
  color = "emerald",
}: {
  color?: "emerald" | "gold";
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const bg =
    color === "gold"
      ? "linear-gradient(90deg, #d4af37, #f5cf7b, #ffd700)"
      : "linear-gradient(90deg, #10b981, #34d399, #6ee7b7)";

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[200]"
      style={{
        scaleX,
        background: bg,
        boxShadow: `0 0 10px ${color === "gold" ? "#d4af37" : "#10b981"}`,
      }}
    />
  );
}
