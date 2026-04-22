"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

type Variant = "gold" | "emerald";

export function ParticlesBackground({
  variant = "emerald",
  className = "",
  density = 80,
}: {
  variant?: Variant;
  className?: string;
  density?: number;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const color = variant === "gold" ? ["#d4af37", "#f5cf7b", "#ffd700"] : ["#10b981", "#34d399", "#6ee7b7"];
    return {
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" },
          resize: { enable: true },
        },
        modes: {
          bubble: {
            distance: 150,
            size: 5,
            duration: 2,
            opacity: 0.9,
          },
        },
      },
      particles: {
        number: {
          value: density,
          density: { enable: true, width: 1200, height: 900 },
        },
        color: { value: color },
        opacity: {
          value: { min: 0.15, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3.5 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: { min: 0.3, max: 0.9 },
          direction: "none",
          outModes: { default: "out" },
          random: true,
          straight: false,
        },
        shape: { type: "circle" },
        shadow: {
          enable: true,
          color: variant === "gold" ? "#d4af37" : "#10b981",
          blur: 6,
        },
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
