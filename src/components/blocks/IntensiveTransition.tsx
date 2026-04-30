"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

export function IntensiveTransition() {
  return (
    <section
      id="intensive-start"
      className="relative py-20 md:py-28 bg-zinc-950 text-white overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/10 pointer-events-none"
        style={{ filter: "blur(80px)" }}
        aria-hidden
      />
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
        aria-hidden
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-8 shadow-[0_0_40px_rgba(16,185,129,0.2)]"
          >
            <Sparkles className="w-4 h-4" />
            А теперь — самое главное
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-balance text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6"
          >
            Я открываю запись{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300">
              на интенсив
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="text-balance text-lg md:text-xl text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Где ты получишь систему, скрипты, разборы реальных кампаний и личный
            созвон со мной. Дальше расскажу, что внутри и кому подходит.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-12 h-[2px] w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent origin-center"
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: [0.4, 1, 0.4], y: [-4, 4, -4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="mt-10 inline-flex w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/5 items-center justify-center"
            aria-hidden
          >
            <ArrowDown className="w-5 h-5 text-emerald-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
