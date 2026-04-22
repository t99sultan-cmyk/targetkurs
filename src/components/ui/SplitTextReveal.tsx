"use client";

import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

export function SplitTextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.025,
  type = "chars",
}: {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  type?: "chars" | "words" | "lines";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const split = new SplitType(node, { types: type, tagName: "span" });
    const targets =
      type === "chars" ? split.chars : type === "words" ? split.words : split.lines;
    if (!targets) return;

    targets.forEach((el, i) => {
      const span = el as HTMLElement;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(0.4em) rotateX(-45deg)";
      span.style.transition =
        "opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.2)";
      span.style.transitionDelay = `${delay + i * stagger}s`;
      span.style.willChange = "opacity, transform";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      split.revert();
    };
  }, [children, delay, stagger, type]);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const targets = ref.current.querySelectorAll(".char, .word, .line");
    targets.forEach((el) => {
      const span = el as HTMLElement;
      span.style.opacity = "1";
      span.style.transform = "translateY(0) rotateX(0)";
    });
  }, [visible]);

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
}
