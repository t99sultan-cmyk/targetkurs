"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, Target, Users, TrendingUp } from "lucide-react";
import { CoinRain } from "@/components/ui/CoinRain";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";

export function IncomeCalculator() {
  const [targetIncome, setTargetIncome] = useState(500000);

  const formatMoney = (val: number) => {
    return val.toLocaleString("ru-RU") + " ₸";
  };

  const highTicketClients = Math.ceil(targetIncome / 200000);
  const mediumTicketClients = Math.ceil(targetIncome / 100000);
  const lowTicketClients = Math.ceil(targetIncome / 40000);

  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10b98122,transparent_50%)]" />
      <CoinRain count={22} variant="emerald" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full font-bold text-sm mb-6 border border-emerald-500/20">
              <Calculator className="w-4 h-4" />
              Декомпозиция цели
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              <SplitTextReveal type="words" stagger={0.05}>
                Как сделать твои первые
              </SplitTextReveal>
              <br />
              <motion.span
                key={targetIncome}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="text-emerald-400 inline-block"
              >
                {formatMoney(targetIncome)}
              </motion.span>
            </h2>
            <p className="text-lg text-zinc-400 font-medium">
              Перетяните ползунок, чтобы выбрать желаемый доход в месяц, и посмотрите, сколько клиентов для этого нужно.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl mb-12 w-full max-w-full overflow-hidden box-border"
          >
            <div className="mb-10">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-6 gap-2 sm:gap-0 mt-4 sm:mt-0 text-center sm:text-left w-full max-w-full">
                <span className="text-zinc-400 font-medium whitespace-normal">Твоя цель на месяц:</span>
                <span className="text-4xl md:text-5xl font-black text-white break-words">{formatMoney(targetIncome)}</span>
              </div>
              
              <input 
                type="range" 
                min={200000} 
                max={2000000} 
                step={100000}
                value={targetIncome}
                onChange={(e) => setTargetIncome(Number(e.target.value))}
                className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
              />
              <div className="flex justify-between text-xs font-bold text-zinc-500 mt-4">
                <span>200 000 ₸</span>
                <span>2 000 000 ₸</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Funnel Step 1: Meetings */}
              <div className="bg-zinc-800/50 border border-zinc-800/50 rounded-2xl p-6 relative overflow-hidden">
                <h4 className="font-bold text-zinc-400 mb-2 uppercase tracking-wide text-sm">Шаг 1: Встречи</h4>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black text-zinc-300">
                    {Math.ceil((targetIncome / 200000) * 5)} 
                  </span>
                  <span className="text-zinc-500 font-medium">встреч</span>
                </div>
                <p className="text-sm text-zinc-500 font-medium">
                  Провести встреч-аудитов с потенциальными клиентами.
                </p>
              </div>

              {/* Funnel Step 2: Test Periods */}
              <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 relative overflow-hidden">
                <h4 className="font-bold text-zinc-300 mb-2 uppercase tracking-wide text-sm">Шаг 2: Тесты</h4>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black text-white">
                    {Math.ceil((targetIncome / 200000) * 2)}
                  </span>
                  <span className="text-zinc-500 font-medium">клиентов</span>
                </div>
                <p className="text-sm text-zinc-400 font-medium">
                  Закрыть на платный <strong className="text-white">тестовый период</strong>.
                </p>
              </div>

              {/* Funnel Step 3: Closed Deals */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden group hover:bg-emerald-500/20 transition-all">
                <div className="absolute -right-4 -top-4 text-emerald-500/20 group-hover:text-emerald-500/30 transition-colors">
                  <TrendingUp className="w-24 h-24" />
                </div>
                <h4 className="font-bold text-emerald-400 mb-2 relative z-10 uppercase tracking-wide text-sm">Шаг 3: Ведение</h4>
                <div className="flex items-baseline gap-2 mb-4 relative z-10">
                  <span className="text-4xl font-black text-white">
                    {Math.ceil(targetIncome / 200000)}
                  </span>
                  <span className="text-emerald-100/70 font-medium">клиентов</span>
                </div>
                <p className="text-sm text-zinc-300 font-medium relative z-10">
                  Полноценное ведение проекта за <strong className="text-white">200 000 ₸</strong>.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-start gap-4">
              <Target className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <p className="text-zinc-300 font-medium text-sm md:text-base">
                Видишь? Чтобы заработать <strong className="text-emerald-400">{formatMoney(targetIncome)}</strong>, нужно закрыть всего <strong>{Math.ceil(targetIncome / 200000)}</strong> клиентов на основной чек. А для этого — провести {Math.ceil((targetIncome / 200000) * 5)} встреч. Это простая математика, а не чудо.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
