"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

type Variant = "gold" | "emerald";

export function ParticlesBackground({
  variant = "emerald",
  className = "",
  density = 25,
}: {
  variant?: Variant;
  className?: string;
  density?: number;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mql.matches) return;
    }
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const color = variant === "gold" ? ["#d4af37", "#f5cf7b"] : ["#10b981", "#34d399"];
    return {
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 30,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: { enable: true },
        },
      },
      particles: {
        number: {
          value: density,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: color },
        opacity: {
          value: { min: 0.2, max: 0.6 },
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          outModes: { default: "out" },
          random: true,
          straight: false,
        },
        shape: { type: "circle" },
      },
      detectRetina: true,
    };
  }, [variant, density]);

  if (!ready) return null;

  return (
    <Particles
      id={`particles-${variant}`}
      options={options}
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
    />
  );
}
