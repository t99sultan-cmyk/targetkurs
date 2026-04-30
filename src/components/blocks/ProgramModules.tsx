"use client";

import { motion } from "framer-motion";
import { Puzzle } from "lucide-react";

export function ProgramModules() {
  return (
    <section className="py-24 bg-[#0a0a0b] text-white relative overflow-hidden" id="element-3">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/15 rounded-full pointer-events-none" style={{ filter: "blur(60px)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full pointer-events-none" style={{ filter: "blur(60px)" }} />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500/10 text-sky-400 whitespace-nowrap rounded-full font-black text-sm mb-6 border border-sky-500/20 shadow-[0_0_20px_rgba(14,165,233,0.2)]"
          >
            <Puzzle className="w-5 h-5 text-sky-400" />
            ЭЛЕМЕНТ №3
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="text-balance text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-6 leading-[1.1]"
          >
            Адаптируешься к трендам — или{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-sky-400">тебя заменит ИИ</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2.5 bg-sky-500/30 -z-10 -rotate-1 rounded-sm" />
            </span>
            .
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Story Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-zinc-900/80 rounded-[2.5rem] border border-zinc-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <span className="w-12 h-12 bg-sky-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(14,165,233,0.4)] rotate-3 group-hover:-rotate-3 transition-transform">3</span>
              История Анель: проблема роста
            </h3>

            <div className="space-y-6 text-base md:text-lg text-zinc-300 font-medium relative z-10">
              <p>Анель начала зарабатывать <strong className="text-white">750 000₸+</strong> в месяц, но вскоре столкнулась с новой проблемой.</p>
              
              <div className="bg-zinc-950 p-6 rounded-2xl italic space-y-2 border border-zinc-800">
                <p>💭 «Я работаю по 10 часов в день, клиенты идут, но времени на жизнь вообще нет…»</p>
                <p>💭 «Почему другие зарабатывают больше, но работают меньше?»</p>
              </div>

              <div className="p-6 bg-red-950/20 rounded-2xl border border-red-900/30 space-y-3">
                <div className="flex items-start gap-3"><span className="text-red-500 font-bold">❌</span><p>Она вручную анализировала аудитории.</p></div>
                <div className="flex items-start gap-3"><span className="text-red-500 font-bold">❌</span><p>Долго подбирала креативы и тексты для рекламы.</p></div>
                <div className="flex items-start gap-3"><span className="text-red-500 font-bold">❌</span><p>Тратила кучу времени на рутинные задачи.</p></div>
              </div>

              <p className="font-bold text-amber-400 flex items-center gap-2"><span className="text-xl">⚡</span> А потом заметила, что другие таргетологи делают те же задачи за 10 минут!</p>

              <div className="pt-6 border-t border-zinc-800 space-y-4">
                 <p className="font-black text-xl text-white">🔥 Что она поняла?</p>
                 <ul className="space-y-2">
                   <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">❌</span> Если ты работаешь по-старому – ты не конкурентен.</li>
                   <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">❌</span> Если ты игнорируешь новые инструменты – ты теряешь деньги.</li>
                   <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">❌</span> Если ты не тестируешь тренды – ты застрянешь на месте.</li>
                 </ul>
              </div>

              <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-sky-900/20 border border-emerald-500/20">
                <p className="text-emerald-400 font-bold text-lg mb-2">👉 2025 – это не просто таргет. Это автоматизация, AI, умение адаптироваться.</p>
                <p>Бизнесу не нужны таргетологи, которые просто “настраивают рекламу”. Компании ищут тех, кто умеет выстраивать стратегию, анализировать данные и масштабировать прибыль.</p>
              </div>

              <div className="space-y-4 pt-4">
                 <p className="font-black text-xl text-emerald-400">✅ Что она изменила?</p>
                 <ul className="space-y-2">
                   <li className="flex gap-2 items-start"><span className="text-blue-400 font-bold">🔹</span> Начала использовать нейросети для работы.</li>
                   <li className="flex gap-2 items-start"><span className="text-blue-400 font-bold">🔹</span> Автоматизировала рутину и высвободила 3-4 часа в день.</li>
                   <li className="flex gap-2 items-start"><span className="text-blue-400 font-bold">🔹</span> Перестала делать всё вручную – вместо этого тестирует и анализирует.</li>
                 </ul>
              </div>

              <div className="p-6 bg-emerald-950/30 rounded-2xl border border-emerald-900/50 space-y-4 text-base mt-6">
                 <p className="font-bold text-emerald-400">📌 Что это ей дало?</p>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">💰</span>
                  <p>За те же часы работы её доход вырос в <strong className="text-white">2 раза</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🔥</span>
                  <p>Она быстрее тестирует гипотезы и находит рабочие стратегии.</p>
                </div>
                <div className="flex items-start gap-3 border-t border-emerald-900/50 pt-3">
                  <span className="text-amber-500 font-bold">🚀</span>
                  <p className="font-bold text-white">Клиенты видят, что она в тренде, и готовы платить ей больше.</p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden text-left border border-white/10 group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0ea5e922,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <h4 className="text-3xl md:text-5xl font-black mb-12 relative z-10 tracking-tight flex items-center gap-3">
              <span className="text-sky-400">🤖</span> Что делать тебе? Готовый инструментарий:
            </h4>
            
            <div className="space-y-4 relative z-10 text-zinc-300 text-sm md:text-base mb-10">
                <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: 0.1}} className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors">
                  <span className="text-sky-400 font-bold text-xl ">✅</span>
                  <p className="text-lg"><strong className="text-white">ChatGPT-4o / Claude 3.5 Sonnet</strong> – генерация текстов, аналитика аудиторий и написание прогревов.</p>
                </motion.div>
                <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: 0.2}} className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors">
                  <span className="text-sky-400 font-bold text-xl ">✅</span>
                  <p className="text-lg"><strong className="text-white">Midjourney v6.1 / Flux.1</strong> – создание крутых трендовых креативов без дизайнеров.</p>
                </motion.div>
                <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: 0.3}} className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors">
                  <span className="text-sky-400 font-bold text-xl ">✅</span>
                  <p className="text-lg"><strong className="text-white">HeyGen / Captions</strong> – создание идеальных видео-аватаров и субтитров для Reels.</p>
                </motion.div>
                <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: 0.4}} className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors">
                  <span className="text-sky-400 font-bold text-xl ">✅</span>
                  <p className="text-lg"><strong className="text-white">Perplexity Pro</strong> – глубокий ресерч ЦА, конкурентов и сбор фактов за секунды.</p>
                </motion.div>
                <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: 0.5}} className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors">
                  <span className="text-sky-400 font-bold text-xl ">✅</span>
                  <p className="text-lg"><strong className="text-white">Gamma App</strong> – создание продающих презентаций и лендингов за 1 минуту по промпту.</p>
                </motion.div>
                <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay: 0.6}} className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors">
                  <span className="text-sky-400 font-bold text-xl ">✅</span>
                  <p className="text-lg"><strong className="text-white">Make.com + OpenAI API</strong> – полная автоматизация работы: от обработки лидов до рассылок.</p>
                </motion.div>
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-8 space-y-4 font-medium text-lg text-zinc-300">
               <p className="text-amber-400 font-bold">📌 Ты можешь делать в 3 раза больше работы, если освоишь эти инструменты.</p>
               <p className="flex items-center gap-3"><span className="text-red-500 font-bold">❌</span> Если ты не учишься новому – ты будешь работать за копейки и слишься.</p>
               <p className="flex items-center gap-3"><span className="text-emerald-400 font-bold">✅</span> <strong className="text-white">Если ты адаптируешься и используешь технологии – ты выйдешь в топ.</strong></p>
            </div>
            
            <div className="mt-12 text-center text-sm md:text-base text-zinc-500 italic font-bold">
               🔥 Следующий элемент – почему без ментора ты будешь идти годами и сливать сотни тысяч, вместо того чтобы сразу делать результат.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
