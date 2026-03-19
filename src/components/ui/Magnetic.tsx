"use client";
import React, { useRef, useState, ReactElement, HTMLAttributes } from "react";
import { motion, useAnimation } from "framer-motion";

interface MagneticProps {
  children: ReactElement;
  intensity?: number;
  className?: string;
}

export function Magnetic({ children, intensity = 0.2, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * intensity;
    const y = (clientY - (top + height / 2)) * intensity;
    controls.start({ x, y, transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 } });
  };

  const reset = () => {
    controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 } });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={controls}
      className={className}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
