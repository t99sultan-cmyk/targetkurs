"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, AlertTriangle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

import { Countdown } from "@/components/ui/Countdown";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
const DriftingWidget = ({ children, className, delay, duration }: { children: React.ReactNode, className: string, delay: number, duration: number }) => (
  <div
    className={`flex flex-col bg-white/80 md:bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-[2.5rem] p-5 overflow-hidden origin-center ${className}`}
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  </div>
);

export function HeroSection() {
  const { scrollY } = useScroll();
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.1]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0.1]);

  return (
    <section className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] pt-24 pb-16 font-sans">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,#f0fdf4,transparent_70%)] opacity-80" />
      
      {/* Dynamic Dopamine Colors */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: "2s", animationDuration: '5s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: "1s", animationDuration: '6s' }} />
      
      {/* Light Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

      {/* 3D Abstract Loop Orb */}
      <motion.div 
        animate={{ rotateZ: 360, rotateY: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] origin-center pointer-events-none opacity-40 md:opacity-100 right-[-10%] md:right-[10%] w-[300px] h-[300px] rounded-full border border-emerald-400/30 shadow-[inset_0_0_80px_rgba(16,185,129,0.2)] bg-gradient-to-tr from-emerald-100 to-transparent"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="w-full h-full rounded-full border-y-[1px] border-emerald-400/50 absolute top-0 left-0 scale-95" />
        <div className="w-full h-full rounded-full border-x-[1px] border-indigo-400/50 absolute top-0 left-0 scale-90" />
      </motion.div>

      <div className="container px-4 md:px-6 relative z-30 flex flex-col items-center text-center">

        <div className="w-full flex justify-center mb-8 sm:hidden">
          <DriftingWidget delay={0.3} duration={6} className="relative z-10 w-full max-w-[320px] scale-95 rotate-[-2deg]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center shrink-0 shadow-lg p-2">
                <img src="/Logo_of_Kaspi_bank.png" alt="Kaspi" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col w-full text-left">
                <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest">Пополнение Kaspi</span>
                <div className="relative h-8 overflow-hidden w-full mt-1">
                  <span className="font-black text-2xl text-emerald-600 absolute left-0">+ 450 000 ₸</span>
                </div>
              </div>
            </div>
          </DriftingWidget>
        </div>

        <div className="max-w-4xl space-y-7 flex flex-col items-center pt-2 md:pt-0">
          <motion.div
            style={{ scale: scaleText, opacity: opacityText }}
            className="space-y-7 flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-zinc-200/50 text-zinc-900 text-sm font-bold tracking-wide">
              <Zap className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              Самый быстрый социальный лифт 2026 года
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-zinc-950 px-2 sm:px-4">
              <SplitTextReveal type="words" stagger={0.04}>
                Ты уже кликнул, и вроде готов вступить в команду.
              </SplitTextReveal>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500">
                <SplitTextReveal type="chars" stagger={0.04} delay={0.8}>
                  Или нет?
                </SplitTextReveal>
              </span>
            </h1>
            
            <div className="space-y-4 max-w-2xl mx-auto px-4">
              <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
                Ты уже сделал первый шаг. Ты понимаешь, что на таргете реально можно делать <strong className="text-zinc-950 bg-emerald-100 px-1 rounded">1 000 000 ₸+</strong>.
              </p>
            </div>

            <div className="pt-2">
              <Countdown />
            </div>
          </motion.div>

          {/* Special block for the brutal truth (Dark distinct style) */}
          {/* This block stays visible even on scroll to avoid becoming purely 'gray' or invisible */}
          <div className="mt-8 relative w-full sm:w-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileInView={{ scale: [1, 1.02, 1] }}
              viewport={{ once: false }}
              className="p-6 md:p-8 rounded-[2rem] bg-zinc-950 shadow-2xl overflow-hidden relative max-w-xl mx-auto border border-zinc-800"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b98122,transparent_60%)] pointer-events-none" />
              <div className="flex flex-col gap-4 relative z-10 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-white font-bold text-xl leading-tight">
                    Но вопрос в другом...
                  </h3>
                </div>
                <p className="text-zinc-300 text-lg font-medium">
                  Ты реально <strong className="text-emerald-400">готов?</strong> Или просто хочешь <span className="underline decoration-red-500/50 outline-none">«попробовать»</span>, как и тысячи других, которые слились?
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
