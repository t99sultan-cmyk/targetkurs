"use client";

import { motion } from "framer-motion";
import { Zap, ChevronRight, XCircle } from "lucide-react";
import { Countdown } from "@/components/ui/Countdown";
import { useWhatsAppClick } from "@/hooks/useWhatsAppClick";

export function FinalCTA() {
  const { handleWhatsAppClick } = useWhatsAppClick();
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden" id="final-cta">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#10b98133,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 font-black text-sm uppercase tracking-widest animate-pulse">
              <Zap className="w-4 h-4" />
              Осталось всего 7 мест из 50
            </div>

            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] px-4">
              Это твой <span className="text-emerald-400">последний шанс</span> изменить 2026 год.
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Через 48 часов доступ к интенсиву будет закрыт навсегда. <br className="hidden md:block" />
              У тебя есть два пути:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12 px-4 max-w-3xl mx-auto">
              {/* Path 1: Join */}
              <a href="https://wa.me/77064089933?text=Здравствуйте,%20хочу%20пройти%20интенсив" onClick={handleWhatsAppClick} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative p-8 rounded-[2.5rem] bg-emerald-500 text-zinc-950 text-left overflow-hidden shadow-[0_20px_40px_rgba(16,185,129,0.3)] h-full"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                    <ChevronRight className="w-12 h-12" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest mb-2">Путь №1</p>
                  <h3 className="text-2xl font-black mb-4">Вступить в команду</h3>
                  <p className="text-sm font-bold opacity-80 leading-relaxed">Получить готовую систему, AI-инструменты и выйти на 1 000 000₸+ под моим наставничеством.</p>
                </motion.div>
              </a>

              {/* Path 2: Close */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 text-zinc-400 text-left overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <XCircle className="w-12 h-12" />
                </div>
                <p className="text-xs font-black uppercase tracking-widest mb-2">Путь №2</p>
                <h3 className="text-2xl font-black mb-4 text-white">Закрыть страницу</h3>
                <p className="text-sm font-medium leading-relaxed italic">Оставить всё как есть, продолжить искать клиентов за копейки и смотреть, как растут другие.</p>
              </motion.button>
            </div>

            <div className="pt-16 max-w-2xl mx-auto">
              <div className="p-8 rounded-[3rem] bg-zinc-950 border border-white/5 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <p className="text-lg text-zinc-400 font-medium relative z-10 text-center">
                    <span className="text-white font-black italic">Я даю тебе инструмент.</span> <br />
                    Дальше выбор за тобой. Либо ты делаешь этот шаг сейчас, либо ты жалеешь об этом через месяц.
                 </p>
              </div>
              <div className="mt-8 scale-90 opacity-90">
                 <Countdown />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
