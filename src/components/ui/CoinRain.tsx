"use client";

import { useEffect, useRef, useState, useMemo } from "react";

type Coin = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
};

export function CoinRain({
  count = 16,
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
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const coins: Coin[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 16 + Math.random() * 14,
      duration: 2.2 + Math.random() * 1.6,
      delay: Math.random() * 1.2,
      drift: (Math.random() - 0.5) * 40,
      rotation: (Math.random() - 0.5) * 540,
    }));
  }, [count]);

  const fill = variant === "gold" ? "#d4af37" : "#10b981";
  const stroke = variant === "gold" ? "#8b6914" : "#047857";
  const highlight = variant === "gold" ? "#ffd700" : "#6ee7b7";

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {triggered &&
        coins.map((c) => (
          <span
            key={c.id}
            className="coin-rain-piece"
            style={{
              left: `${c.left}%`,
              width: c.size,
              height: c.size,
              background: `radial-gradient(circle at 30% 30%, ${highlight}, ${fill} 55%, ${stroke})`,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              ["--drift" as string]: `${c.drift}px`,
              ["--rot" as string]: `${c.rotation}deg`,
            }}
          />
        ))}
    </div>
  );
}
