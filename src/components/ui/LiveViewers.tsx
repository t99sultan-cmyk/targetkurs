"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PULSE_KEY = "lv-seed";

function pickBaseViewers() {
  if (typeof window !== "undefined") {
    const stored = window.sessionStorage.getItem(PULSE_KEY);
    if (stored) return parseInt(stored, 10);
  }
  const hour = new Date().getHours();
  const base = hour >= 10 && hour <= 23 ? 14 : 6;
  const n = base + Math.floor(Math.random() * 6);
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(PULSE_KEY, String(n));
  }
  return n;
}

export function LiveViewers() {
  const [viewers, setViewers] = useState<number | null>(null);

  useEffect(() => {
    setViewers(pickBaseViewers());
    const tick = () => {
      setViewers((v) => {
        if (v == null) return v;
        const delta = Math.random() < 0.5 ? -1 : 1;
        const next = Math.max(4, Math.min(22, v + delta));
        return next;
      });
    };
    const id = setInterval(tick, 7000 + Math.random() * 6000);
    return () => clearInterval(id);
  }, []);

  if (viewers == null) return null;

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs sm:text-sm font-bold text-emerald-400 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>
        Сейчас смотрят:{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={viewers}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="inline-block font-black text-white"
          >
            {viewers}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
