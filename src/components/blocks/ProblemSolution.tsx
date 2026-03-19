"use client";

import { motion } from "framer-motion";
import { Puzzle, XCircle, CheckCircle2, TrendingUp, Zap } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-[#fafafa] relative overflow-hidden text-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f0fdf4,transparent_40%)] pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16 text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/10 text-red-500 rounded-full font-black text-sm mb-6 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
            >
              <Puzzle className="w-5 h-5 text-red-500" />
              ЭЛЕМЕНТ №1
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
            >
              «Твой навык – это <span className="relative inline-block"><span className="relative z-10 text-red-600">мусор</span><span className="absolute bottom-1 auto left-0 w-full h-3 bg-red-200/50 -z-10 rotate-2 rounded-sm"></span></span>, если ты не умеешь делать одно…»
            </motion.h2>
            <div className="mt-8 space-y-4 text-left p-6 bg-white rounded-2xl shadow-sm border border-zinc-200/50">
               <p className="text-lg text-zinc-700 font-medium">Многие думают, что таргет – это просто «настроить рекламу». <strong className="text-zinc-950">Но если бы всё было так просто, каждый второй зарабатывал бы миллионы.</strong></p>
               <ul className="space-y-2 mt-4">
                 <li className="flex gap-2 items-start"><span className="text-emerald-500">👉</span> <strong>Настроить рекламу может каждый.</strong> Достаточно посмотреть пару уроков на YouTube.</li>
                 <li className="flex gap-2 items-start"><span className="text-emerald-500">👉</span> <strong>Но делать так, чтобы клиент реально зарабатывал больше, чем вкладывает – могут единицы.</strong></li>
               </ul>
               <div className="mt-6 space-y-3">
                 <p className="flex gap-3 items-center"><XCircle className="w-5 h-5 text-red-500" /> <span className="text-zinc-600"><strong className="text-zinc-950">Новички</strong> просто нажимают кнопки в фейсбуке и ждут чудес.</span></p>
                 <p className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> <span className="text-zinc-600"><strong className="text-zinc-950">Профессионалы</strong> понимают, <strong>как сделать так, чтобы каждая вложенная 1 000₸ приносила 3 000₸, 5 000₸ или 10 000₸.</strong></span></p>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-zinc-200/50 sticky top-24 group hover:shadow-[0_40px_60px_rgba(0,0,0,0.15)] transition-shadow duration-500"
            >
              <img src="/amir.png" alt="Амир" className="w-full h-full object-cover object-center bg-zinc-200 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20">
                <p className="text-white font-black text-2xl">Амир</p>
                <p className="text-emerald-400 font-bold text-sm">Вышел на 1 500 000₸ в месяц</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 p-8 md:p-10 bg-white rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-zinc-100 relative flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[100px] rounded-tr-[2.5rem]" />
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 tracking-tight">
                <span className="w-10 h-10 bg-zinc-950 text-white rounded-xl flex items-center justify-center shrink-0">🚀</span>
                Амир: Как он 2 года топтался на месте, пока не понял главного
              </h3>
              
              <div className="space-y-6 text-base md:text-lg text-zinc-600 font-medium">
                <p>Амир работал таргетологом 2 года. Проходил курсы, тестировал ниши, изучал креативы. Но деньги всегда были копейки.</p>
                
                <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 space-y-4 text-base">
                  <p className="font-bold text-red-900 flex items-center gap-2">🔴 Что происходило?</p>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <p>Брал проекты по 50 000₸ → клиенты выносили мозг и сливались.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <p>Постоянно слышал: «Ты такой же, как остальные, за что платить больше?»</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <p>Работал сутками, но не мог выйти даже на 200 000₸.</p>
                  </div>
                  
                  <div className="border-t border-red-200/50 pt-4 mt-4">
                    <p className="font-bold text-zinc-900 mb-2">📌 Самый жестокий момент?</p>
                    <p className="text-lg bg-red-100 text-red-900 px-3 py-2 rounded-lg inline-block font-black mb-3">
                      👉 Клиент заработал 2 500 000₸, а Амир получил 70 000₸.
                    </p>
                    <div className="space-y-1 text-zinc-500 text-sm italic">
                       <p>💭 «Но ведь я сделал всю работу!»</p>
                       <p>💭 «Почему бизнес получил миллионы, а я — копейки?»</p>
                       <p>💭 «Где справедливость?!»</p>
                    </div>
                  </div>
                </div>

                <div className="my-6 space-y-2">
                   <p className="text-zinc-900 font-bold flex items-center gap-2"><Zap className="w-5 h-5 text-amber-500 fill-amber-500"/> Тогда он понял, что не умеет продавать себя.</p>
                   <p className="text-red-600 font-bold flex items-center gap-2">🔴 Амир был в шаге от того, чтобы бросить таргет.</p>
                </div>

                <div className="bg-zinc-900 text-white p-6 rounded-2xl">
                   <p className="text-zinc-400 mb-2">Тогда я задал ему один вопрос:</p>
                   <p className="text-xl font-black text-emerald-400">👉 «Как ты приносишь клиенту деньги?»</p>
                   <p className="mt-4 opacity-80">Он задумался. И не смог ответить.</p>
                </div>

                <div className="space-y-4 pt-4">
                   <p className="font-black text-xl text-zinc-900">🔥 Что он делал не так?</p>
                   <ul className="space-y-2">
                     <li className="flex gap-2 items-start"><span className="text-red-500">📌</span> Не понимал, какие цифры реально важны бизнесу.</li>
                     <li className="flex gap-2 items-start"><span className="text-red-500">📌</span> Думал, что таргет – это просто запустить рекламу, а не решать бизнес-задачи.</li>
                     <li className="flex gap-2 items-start"><span className="text-red-500">📌</span> Не умел анализировать, почему реклама «не работает».</li>
                   </ul>
                </div>

                <div className="space-y-4 pt-4">
                   <p className="font-black text-xl text-emerald-600">✅ Как он изменил подход?</p>
                   <ul className="space-y-2">
                     <li className="flex gap-2 items-start"><span className="text-amber-500">⚡</span> Научился считать юнит-экономику и предлагать стратегии, а не просто рекламу.</li>
                     <li className="flex gap-2 items-start"><span className="text-amber-500">⚡</span> Перестал быть «исполнителем», начал решать проблемы бизнеса.</li>
                     <li className="flex gap-2 items-start"><span className="text-amber-500">⚡</span> Строил воронки, которые реально давали прибыль, а не просто трафик.</li>
                   </ul>
                </div>

                <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-4 text-base mt-6">
                   <p className="font-bold text-emerald-900">📌 Что это ему дало?</p>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold mt-0.5">💰</span>
                    <p>Через 3 месяца его чек вырос до <strong className="text-zinc-900">400 000₸</strong> за один проект.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">🔥</span>
                    <p>Через полгода он вышел на <strong className="text-emerald-600 font-black">1 500 000₸ в месяц</strong>, работая всего с 4 клиентами.</p>
                  </div>
                  <div className="flex items-start gap-3 border-t border-emerald-100 pt-3">
                    <span className="text-amber-500 font-bold mt-0.5">🚀</span>
                    <p className="font-bold text-zinc-900">Теперь его клиенты знают: «Этот парень не просто настраивает рекламу – он приносит деньги.»</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 text-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-emerald-500/20 relative overflow-hidden text-left max-w-3xl mx-auto group hover:border-emerald-500/40 transition-colors"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#10b98133,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <h4 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3 text-emerald-400">
               <span className="text-white text-4xl shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-500/20 p-3 rounded-2xl">💡</span> Вывод:
            </h4>
            <ul className="space-y-4 relative z-10 text-lg md:text-xl font-medium text-zinc-300">
               <li className="flex gap-3">
                 <span className="text-white">👉</span> 
                 <span>Если ты просто жмёшь кнопки в Ads Manager – <strong className="text-white">ты никому не нужен.</strong></span>
               </li>
               <li className="flex gap-3">
                 <span className="text-white">👉</span> 
                 <span>Если ты понимаешь, как реально приносить бизнесу деньги, – <strong className="text-emerald-400">тебе готовы платить в 10 раз больше.</strong></span>
               </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
