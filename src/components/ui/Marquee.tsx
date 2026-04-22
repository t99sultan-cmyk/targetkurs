"use client";

import React from "react";

export function Marquee({
  children,
  speed = 40,
  direction = "left",
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
  const animationName =
    direction === "left" ? "marquee-scroll-left" : "marquee-scroll-right";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <style jsx>{`
        @keyframes marquee-scroll-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marquee-scroll-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }
        .marquee-track {
          animation: ${animationName} ${speed}s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div
        className="marquee-track flex w-max items-center"
        style={{ gap }}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true" style={{ gap }}>
          {children}
        </div>
      </div>
    </div>
  );
}
