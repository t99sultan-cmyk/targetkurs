"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export function CoinRain({
  count = 14,
  variant = "gold",
}: {
  count?: number;
  variant?: "gold" | "emerald";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggered(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!triggered || !node) return;

    const width = node.clientWidth;
    const height = node.clientHeight;
    if (width === 0 || height === 0) return;

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1, scale: 0.0013 },
      enableSleeping: true,
    });

    const render = Matter.Render.create({
      element: node,
      engine,
      options: {
        width,
        height,
        pixelRatio: 1,
        wireframes: false,
        background: "transparent",
      },
    });

    const thickness = 80;
    const floor = Matter.Bodies.rectangle(width / 2, height + thickness / 2 - 8, width, thickness, {
      isStatic: true,
      render: { visible: false },
    });
    const leftWall = Matter.Bodies.rectangle(-thickness / 2, height / 2, thickness, height * 2, {
      isStatic: true,
      render: { visible: false },
    });
    const rightWall = Matter.Bodies.rectangle(width + thickness / 2, height / 2, thickness, height * 2, {
      isStatic: true,
      render: { visible: false },
    });
    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);

    const fill = variant === "gold" ? "#d4af37" : "#10b981";
    const stroke = variant === "gold" ? "#8b6914" : "#047857";

    const spawnTimeouts: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < count; i++) {
      spawnTimeouts.push(
        setTimeout(() => {
          const radius = 9 + Math.random() * 5;
          const coin = Matter.Bodies.circle(
            radius + Math.random() * (width - radius * 2),
            -radius - Math.random() * 20,
            radius,
            {
              restitution: 0.5,
              friction: 0.1,
              frictionAir: 0.012,
              density: 0.002,
              sleepThreshold: 40,
              angle: Math.random() * Math.PI * 2,
              render: {
                fillStyle: fill,
                strokeStyle: stroke,
                lineWidth: 2,
              },
            },
          );
          Matter.Body.setAngularVelocity(coin, (Math.random() - 0.5) * 0.1);
          Matter.Composite.add(engine.world, coin);
        }, i * 120),
      );
    }

    const runner = Matter.Runner.create();
    Matter.Render.run(render);
    Matter.Runner.run(runner, engine);

    const stopTimeout = setTimeout(() => {
      Matter.Runner.stop(runner);
      Matter.Render.stop(render);
    }, 6_000);

    return () => {
      spawnTimeouts.forEach(clearTimeout);
      clearTimeout(stopTimeout);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world, false, true);
      Matter.Engine.clear(engine);
      if (render.canvas && render.canvas.parentNode === node) {
        node.removeChild(render.canvas);
      }
    };
  }, [triggered, count, variant]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    />
  );
}
