"use client";

import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

type SplitType = "chars" | "words";

const container: Variants = {
  hidden: {},
  show: ({ stagger, delay }: { stagger: number; delay: number }) => ({
    transition: { staggerChildren: stagger, delayChildren: delay },
  }),
};

const child: Variants = {
  hidden: { y: "0.6em", opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 110,
      mass: 0.5,
    },
  },
};

export function SplitTextReveal({
  children,
  className = "",
  stagger = 0.04,
  delay = 0,
  type = "words",
  once = true,
  amount = 0.3,
}: {
  children: string;
  className?: string;
  stagger?: number;
  delay?: number;
  type?: SplitType;
  once?: boolean;
  amount?: number;
}) {
  const parts = useMemo(() => {
    if (type === "chars") return children.split("");
    return children.split(/(\s+)/);
  }, [children, type]);

  return (
    <motion.span
      className={className}
      variants={container}
      custom={{ stagger, delay }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      style={{ display: "inline-block", perspective: 400 }}
    >
      {parts.map((part, i) => {
        if (/^\s+$/.test(part)) return <span key={i}>{part}</span>;
        return (
          <motion.span
            key={i}
            variants={child}
            style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
          >
            {part}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
