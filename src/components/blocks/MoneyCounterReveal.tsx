"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Briefcase, Plane } from "lucide-react";

const TARGET = 1_000_000;
const DURATION_MS = 1800;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function MoneyCounterReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      setValue(Math.floor(easeOutCubic(t) * TARGET));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const stats = [
    { icon: <TrendingUp className="w-5 h-5" />, label: "+500 000 ₸ за 3 месяца", hint: "Рост чека после первой системы" },
    { icon: <Briefcase className="w-5 h-5" />, label: "4 проекта в работе", hint: "Без выгорания и переработок" },
    { icon: <Plane className="w-5 h-5" />, label: "Из любой точки мира", hint: "Ноутбук + интернет" },
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-24 overflow-hidden bg-zinc-950 text-white">
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-emerald-500/10 pointer-events-none"
        style={{ filter: "blur(80px)" }}
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" aria-hidden />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Реальный потолок таргетолога в 2026
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-balance text-2xl md:text-3xl font-semibold text-zinc-300 mb-4 leading-tight"
          >
            Это сумма, которую <span className="text-white">реально</span>{" "}
            делают сотни таргетологов ежемесячно:
          </motion.h2>

          <div className="relative inline-block py-6">
            <span
              className="absolute inset-0 rounded-3xl bg-emerald-500/20"
              style={{ filter: "blur(50px)" }}
              aria-hidden
            />
            <span className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter tabular-nums text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-emerald-400 to-teal-300 drop-shadow-[0_4px_24px_rgba(16,185,129,0.35)]">
              {value.toLocaleString("ru-RU")} ₸
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-balance text-base md:text-lg text-zinc-400 max-w-xl mx-auto mt-4"
          >
            Это не «потолок избранных». Это рабочая планка, к которой можно дойти за пару месяцев — если знаешь, как устроен путь.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-3 mt-12 max-w-3xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  {s.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-sm leading-tight">{s.label}</p>
                  <p className="text-zinc-500 text-xs mt-0.5 leading-tight">{s.hint}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
