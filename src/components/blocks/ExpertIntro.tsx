"use client";

import { motion } from "framer-motion";
import { Puzzle, XCircle, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

export function ExpertIntro() {
  return (
    <section className="py-24 bg-white text-zinc-950 relative overflow-hidden" id="expert-intro">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16 text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500/10 text-indigo-400 rounded-full font-black text-sm mb-6 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            >
              <Puzzle className="w-5 h-5 text-indigo-400" />
              ЭЛЕМЕНТ №2
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
            >
              «Почему ты либо работаешь за копейки, либо <span className="relative inline-block"><span className="relative z-10 text-indigo-600">клиенты бегают за тобой</span><span className="absolute bottom-1 left-0 w-full h-3 bg-indigo-200/50 -z-10 -rotate-1 rounded-sm"></span></span>. Решать тебе.»
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-[#fafafa] rounded-[2.5rem] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),_0_20px_40px_rgba(0,0,0,0.03)] mb-12 relative overflow-hidden group hover:shadow-[0_40px_60px_rgba(0,0,0,0.05)] transition-all duration-700"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            
            <h3 className="text-3xl font-black mb-6 flex items-center gap-4 relative z-10 w-full text-left">
              <span className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(79,70,229,0.4)] rotate-3 group-hover:-rotate-3 transition-transform">2</span>
              История Анель: 8 месяцев в ноль
            </h3>
            
            <div className="space-y-6 text-base md:text-lg text-zinc-700 font-medium relative z-10">
              <p>Анель 8 месяцев пыталась зарабатывать на таргете:</p>
              <ul className="space-y-2 mb-4">
                 <li className="flex gap-2 items-center"><span className="text-emerald-500 font-bold">✅</span> Проходила курсы.</li>
                 <li className="flex gap-2 items-center"><span className="text-emerald-500 font-bold">✅</span> Делала портфолио.</li>
                 <li className="flex gap-2 items-center"><span className="text-emerald-500 font-bold">✅</span> Писала клиентам в директ.</li>
              </ul>
              
              <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 space-y-4 text-base">
                <p className="font-bold text-red-900 mb-2">Но каждый раз одно и то же:</p>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🔴</span>
                  <p>Клиенты требовали кейсы, а у неё их почти не было.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🔴</span>
                  <p>«Давай бесплатно на тест» – а потом просто пропадали.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">🔴</span>
                  <p>«150 000₸ за рекламу? Давай за 30 000₸!»</p>
                </div>
              </div>

              <div className="space-y-2 mt-4 text-zinc-600">
                <p className="font-bold text-zinc-900">Она каждый день видела, как другие зарабатывают, но у неё – ноль.</p>
                <div className="space-y-1 text-sm italic pl-4 border-l border-zinc-300 py-2">
                  <p>💭 «Почему у них получается, а у меня нет?»</p>
                  <p>💭 «Может, я плохой специалист?»</p>
                  <p>💭 «Может, рынок перегрет?»</p>
                  <p>💭 «Может, это вообще не моё?»</p>
                </div>
                <p className="font-bold text-red-600 mt-2">Она была в шаге от того, чтобы слиться.</p>
              </div>

              <div className="my-8 space-y-4">
                 <p className="text-xl font-black text-red-700 flex items-center gap-2"><span className="text-2xl">🤬</span> Но потом её ПРОРВАЛО.</p>
                 <p className="text-zinc-900 font-medium">Однажды она увидела сторис своей одногруппницы с курса:</p>
                 <p className="bg-white px-4 py-3 rounded-xl border border-zinc-200 shadow-sm inline-block italic font-bold">📌 «Закрыла клиента на 300 000₸. Двигаюсь дальше!»</p>
                 <p className="text-amber-500 font-bold">⚡ В тот момент у Анель что-то щёлкнуло.</p>
                 <p className="text-lg bg-zinc-900 text-white p-4 rounded-xl font-black">🤯 «ЧТООО?! Мы учились на одном курсе! Мы знаем одно и то же! Почему у неё 300 000₸, а у меня 30 000₸?!»</p>
              </div>

              <div className="space-y-4 pt-4">
                 <p className="font-black text-xl text-zinc-900">🔥 Что она делала не так?</p>
                 <ul className="space-y-2">
                   <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">❌</span> Просто писала клиентам и просила работу.</li>
                   <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">❌</span> Продавала «настройку таргета», а не рост прибыли.</li>
                   <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">❌</span> Играла в догонялки – искала клиентов, вместо того чтобы клиенты искали её.</li>
                 </ul>
              </div>

              <div className="space-y-4 pt-4">
                 <p className="font-black text-xl text-emerald-600">✅ Что она изменила?</p>
                 <ul className="space-y-2">
                   <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">🔹</span> Перестала унижаться в директе.</li>
                   <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">🔹</span> Поменяла концепцию: не просто настраивала рекламу, а разбирала бизнес клиента.</li>
                   <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">🔹</span> Стала давать на встречах мощную стратегию по увеличению продаж – так клиенты сразу видели её экспертность.</li>
                 </ul>
              </div>

              <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-4 text-base mt-6">
                 <p className="font-bold text-indigo-900">📌 Что это ей дало?</p>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">💰</span>
                  <p>Через 2 месяца её минимальный чек – <strong className="text-zinc-900">250 000₸</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">🔥</span>
                  <p>Теперь клиенты сами пишут ей в директ: <strong className="text-indigo-800 italic">«Вы ещё берёте проекты?»</strong></p>
                </div>
                <div className="flex items-start gap-3 border-t border-indigo-100 pt-3">
                  <span className="text-amber-500 font-bold mt-0.5">🚀</span>
                  <p className="font-bold text-zinc-900">Она больше не бегает за клиентами – клиенты бегают за ней.</p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 text-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#6366f133,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <h4 className="text-3xl md:text-5xl font-black mb-12 relative z-10 tracking-tight flex items-center gap-3">
              <span className="text-indigo-400">🔧</span> Что делать тебе? Готовая стратегия:
            </h4>
            
            <div className="grid gap-6 text-left relative z-10 text-zinc-300 text-sm md:text-base mb-12">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="bg-zinc-900/50 p-6 md:p-8 rounded-[2rem] border border-zinc-800 hover:border-indigo-500/50 transition-colors relative overflow-hidden"
                >
                  <span className="absolute -right-4 -top-8 text-[150px] font-black text-indigo-500/5 leading-none select-none z-0">1</span>
                  <div className="relative z-10">
                    <p className="font-black text-white text-2xl mb-4 text-balance">Перестань продавать таргет – продавай <span className="text-emerald-400">рост прибыли</span>.</p>
                    <ul className="space-y-3 pl-2 text-zinc-400 text-lg">
                      <li className="flex gap-3 items-start"><span className="text-indigo-400 shrink-0 mt-1">👉</span> <span className="leading-snug">Клиенты не хотят таргет, они хотят зарабатывать больше.</span></li>
                      <li className="flex gap-3 items-start"><span className="text-indigo-400 shrink-0 mt-1">👉</span> <span className="leading-snug">Разбирайся в их бизнесе, предлагай решения, показывай, как реклама принесёт им деньги.</span></li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="bg-zinc-900/50 p-6 md:p-8 rounded-[2rem] border border-zinc-800 hover:border-indigo-500/50 transition-colors relative overflow-hidden"
                >
                  <span className="absolute -left-6 -bottom-12 text-[150px] font-black text-indigo-500/5 leading-none select-none z-0">2</span>
                  <div className="relative z-10">
                    <p className="font-black text-white text-2xl mb-4 text-balance">Показывай свою <span className="text-indigo-400">экспертность</span>.</p>
                    <ul className="space-y-3 pl-2 text-zinc-400 text-lg">
                      <li className="flex gap-3 items-start"><span className="text-indigo-400 shrink-0 mt-1">👉</span> <span className="leading-snug">Веди телеграм-канал, блог, выкладывай кейсы и разбирай ошибки клиентов.</span></li>
                      <li className="flex gap-3 items-start"><span className="text-indigo-400 shrink-0 mt-1">👉</span> <span className="leading-snug">Пусть клиенты видят, что ты понимаешь в продажах, а не просто нажимаешь кнопки.</span></li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="bg-zinc-900/50 p-6 md:p-8 rounded-[2rem] border border-zinc-800 hover:border-indigo-500/50 transition-colors relative overflow-hidden"
                >
                  <span className="absolute -right-4 -bottom-10 text-[150px] font-black text-indigo-500/5 leading-none select-none z-0">3</span>
                  <div className="relative z-10">
                    <p className="font-black text-white text-2xl mb-4 text-balance">Строй воронку, чтобы клиенты <span className="text-amber-400">сами писали тебе</span>.</p>
                    <ul className="space-y-3 pl-2 text-zinc-400 text-lg">
                      <li className="flex gap-3 items-start"><span className="text-indigo-400 shrink-0 mt-1">👉</span> <span className="leading-snug">Создай анкету или сайт, куда клиенты оставляют заявки.</span></li>
                      <li className="flex gap-3 items-start"><span className="text-indigo-400 shrink-0 mt-1">👉</span> <span className="leading-snug">Выкладывай истории успеха, давай полезные советы – пусть тебя видят как эксперта.</span></li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                  className="bg-zinc-900/50 p-6 md:p-8 rounded-[2rem] border border-zinc-800 hover:border-indigo-500/50 transition-colors relative overflow-hidden"
                >
                  <span className="absolute -left-4 -top-8 text-[150px] font-black text-indigo-500/5 leading-none select-none z-0">4</span>
                  <div className="relative z-10">
                    <p className="font-black text-white text-2xl mb-4 text-balance">Используй <span className="text-rose-400">скрипты переговоров</span>.</p>
                    <ul className="space-y-3 pl-2 text-zinc-400 text-lg">
                      <li className="flex gap-3 items-start"><span className="text-indigo-400 shrink-0 mt-1">👉</span> <span className="leading-snug">Пропиши, как ты будешь объяснять клиентам свою ценность.</span></li>
                      <li className="flex gap-3 items-start"><span className="text-indigo-400 shrink-0 mt-1">👉</span> <span className="leading-snug">Говори языком выгоды: не «Я настраиваю рекламу», а «Я помогу вам вырасти в 2-3 раза».</span></li>
                    </ul>
                  </div>
                </motion.div>
            </div>

            <div className="border-t border-zinc-800 pt-8 space-y-4">
               <p className="flex items-center gap-3 text-lg"><XCircle className="w-6 h-6 text-red-500" /> <span className="font-medium">Если ты работаешь <strong className="text-red-400">по старой модели</strong> – ты будешь работать за копейки.</span></p>
               <p className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-emerald-500" /> <span className="font-bold text-white">Если ты внедришь эти шаги – <span className="text-emerald-400">клиенты будут готовы платить тебе дорого.</span></span></p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
