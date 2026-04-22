"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

type Variant = "gold" | "emerald";

export function ParticlesBackground({
  variant = "emerald",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const color = variant === "gold" ? "#d4af37" : "#10b981";
    return {
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: {
          value: 40,
          density: { enable: true, width: 800, height: 800 },
        },
        color: { value: color },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 0.6,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: { min: 0.2, max: 0.6 },
          direction: "none",
          outModes: { default: "out" },
          random: true,
          straight: false,
        },
        shape: { type: "circle" },
      },
      detectRetina: true,
    };
  }, [variant]);

  if (!ready) return null;

  return (
    <Particles
      id={`particles-${variant}`}
      options={options}
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
    />
  );
}
