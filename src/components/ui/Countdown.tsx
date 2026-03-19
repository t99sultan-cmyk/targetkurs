"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextMidnightUTC = new Date();
      // Astana is UTC+5. So midnight there is 19:00 UTC
      nextMidnightUTC.setUTCHours(19, 0, 0, 0);
      
      if (nextMidnightUTC.getTime() <= now.getTime()) {
        nextMidnightUTC.setUTCDate(nextMidnightUTC.getUTCDate() + 1);
      }
      
      return Math.floor((nextMidnightUTC.getTime() - now.getTime()) / 1000);
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center gap-2 mt-4 relative z-40 bg-zinc-900 px-6 py-4 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-zinc-700 w-full max-w-sm mx-auto">
      <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-2 flex items-center justify-center gap-2 text-center">
        <Clock className="w-3.5 h-3.5" /> Вход в команду закроется через:
      </div>
      <div className="flex gap-4 text-center justify-center">
        {[
          { value: hours, label: "ЧАС" },
          { value: minutes, label: "МИН" },
          { value: seconds, label: "СЕК" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700 shadow-inner">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] mt-2 text-zinc-500 font-bold uppercase">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
