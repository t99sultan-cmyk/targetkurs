"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export function CountUp({
  to,
  from = 0,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
  format = "ru-RU",
  decimals = 0,
}: {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  format?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 0.8, 0.3, 1],
      onUpdate(v) {
        setDisplay(v);
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  const formatted = display.toLocaleString(format, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
