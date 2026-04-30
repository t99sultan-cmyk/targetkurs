"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useIntensiveOpen } from "@/hooks/useIntensiveOpen";

const events = [
  { name: "Алия", city: "Алматы", action: "записалась на интенсив" },
  { name: "Ислам", city: "Астана", action: "оплатил доступ" },
  { name: "Дильназ", city: "Шымкент", action: "забрала место" },
  { name: "Айдар", city: "Караганда", action: "записался на интенсив" },
  { name: "Мадина", city: "Атырау", action: "забрала место" },
  { name: "Тимур", city: "Алматы", action: "записался на интенсив" },
  { name: "Камила", city: "Уральск", action: "оплатила доступ" },
  { name: "Бекзат", city: "Актобе", action: "записался на интенсив" },
];

export function LiveIndicator() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [minutesAgo, setMinutesAgo] = useState(2);
  const intensiveOpen = useIntensiveOpen();

  useEffect(() => {
    if (!intensiveOpen) return;
    setMinutesAgo(1 + Math.floor(Math.random() * 14));
    const show = setTimeout(() => setVisible(true), 1200);
    const hide = setTimeout(() => setVisible(false), 75_000);
    let i = 0;
    const cycle = setInterval(() => {
      i = (i + 1) % events.length;
      setIdx(i);
      setMinutesAgo(1 + Math.floor(Math.random() * 14));
    }, 12_000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
      clearInterval(cycle);
    };
  }, [intensiveOpen]);

  if (!intensiveOpen || !visible) return null;
  const e = events[idx];

  return (
    <div className="fixed bottom-24 left-3 z-[90] sm:left-6 sm:bottom-28 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 bg-white/95 backdrop-blur-sm border border-zinc-200 rounded-2xl px-4 py-3 shadow-[0_18px_36px_rgba(0,0,0,0.08)] max-w-[260px]"
        >
          <span className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </span>
          <div className="text-xs leading-tight">
            <p className="font-bold text-zinc-900">
              {e.name} из г. {e.city}
            </p>
            <p className="text-zinc-500 mt-0.5">
              {e.action} · {minutesAgo} мин назад
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
