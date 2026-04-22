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
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`marquee-track marquee-track--${direction} flex w-max items-center`}
        style={{ gap, animationDuration: `${speed}s` }}
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
