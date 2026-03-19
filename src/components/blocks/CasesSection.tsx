"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { AlertTriangle, Puzzle } from "lucide-react";

export function CasesSection() {
  const mentors = [
    {
      title: "Продажи и переговоры",
      name: "Джордан Белфорт",
      subtext: "(настоящий «Волк с Уолл-стрит»)",
      image: "/jordan.png"
    },
    {
      title: "Таргет и маркетинг",
      name: "Дмитрий Портнягин",
      subtext: "Бизнес-блогер №1, предприниматель",
      image: "/portnyagin.png"
    },
    {
      title: "Бизнес и финансы",
      name: "Оскар Хартманн",
      subtext: "(капитализация компаний свыше $1 млрд)",
      image: "/oskar.png"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden" id="element-4">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 text-amber-500 rounded-full font-black text-sm mb-6 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <Puzzle className="w-5 h-5 text-amber-500" />
            ЭЛЕМЕНТ №4
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-zinc-950"
          >
            «Отсутствие ментора – это <span className="relative inline-block"><span className="relative z-10 text-amber-500">самая дорогая ошибка</span><span className="absolute bottom-1 auto left-0 w-full h-3 bg-amber-200/50 -z-10 rotate-1 rounded-sm"></span></span> в твоей жизни.»
          </motion.h2>
          <div className="mt-8 text-left max-w-2xl mx-auto space-y-4 text-lg text-zinc-600 font-medium">
             <p className="font-bold text-zinc-900">Ты можешь идти сам:</p>
             <ul className="space-y-2">
               <li className="flex gap-2 items-center"><span className="text-red-500 font-bold">❌</span> Ошибаться и сливать бюджеты.</li>
               <li className="flex gap-2 items-center"><span className="text-red-500 font-bold">❌</span> Выгорать от того, что ничего не получается.</li>
               <li className="flex gap-2 items-center"><span className="text-red-500 font-bold">❌</span> Искать клиентов месяцами.</li>
             </ul>
             <p className="mt-4 font-bold text-zinc-900 text-xl text-center">А можешь просто взять того, кто уже прошёл этот путь, и спросить: «Как?». </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center shrink-0">📌</span>
              Мой путь:
            </h3>
            <p className="text-lg text-zinc-700 font-medium p-4 bg-white/50 rounded-2xl border border-zinc-200">
              Я потерял <strong className="text-red-500">2 000 000₸</strong> на тестах, выгорал 3 раза и 6 месяцев зарабатывал 150 000₸.
            </p>
            <div className="space-y-4 text-base text-zinc-600 font-medium mt-6">
              <p className="font-bold text-zinc-900 text-lg">Но как только я взял наставника:</p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                  <span className="text-amber-500 font-bold">🚀</span> Я пробил миллион за первый месяц.
                </li>
                <li className="flex gap-3 items-center p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                  <span className="text-amber-500 font-bold">🚀</span> Ушли глупые ошибки и страх называть высокий чек.
                </li>
                <li className="flex gap-3 items-center p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                  <span className="text-amber-500 font-bold">🚀</span> Стало понятно, ЧТО и КАК нужно делать каждый день.
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-950 text-white rounded-2xl shadow-xl border border-zinc-800 italic mt-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
               <p className="relative z-10 font-medium text-lg text-zinc-300">
                Наставник – это не тот, кто работает за тебя. Это <strong className="text-amber-400">навигатор</strong>, который показывает кратчайший путь к <strong className="text-white">1 000 000₸+</strong>, чтобы ты не ходил кругами.
               </p>
            </div>
          </motion.div>

          {/* Mentors Horizontal Collage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 w-full"
          >
            <div className="text-center space-y-1 mb-2">
              <h4 className="text-xl font-bold text-zinc-800">У кого я учился?</h4>
              <p className="text-lg font-medium text-amber-600">Мои наставники:</p>
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center items-center gap-2 md:gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar max-w-full px-4 md:px-0 pt-4"
            >
              
              {/* Mentor 1 */}
              <div className="group relative w-[140px] md:w-48 xl:w-56 aspect-[3/4] shrink-0 overflow-hidden rounded-2xl shadow-lg border border-zinc-200 snap-center transition-all hover:w-[160px] md:hover:w-56 xl:hover:w-64 hover:shadow-2xl z-10">
                <img 
                  src="/jordan.png" 
                  alt="Jordan Belfort" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 bg-zinc-200" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if(target.src.includes('mentor1.jpg')) {
                       target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 p-3 md:p-4 text-white">
                    <p className="font-bold text-sm md:text-base leading-tight">Jordan Belfort</p>
                    <p className="text-[10px] md:text-xs text-amber-400 font-medium mt-1 uppercase tracking-widest hidden group-hover:block transition-all delay-100 duration-300 transform opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">The Wolf of Wall Street</p>
                  </div>
                </div>
              </div>

              {/* Mentor 2 */}
              <div className="group relative w-[160px] md:w-56 xl:w-64 aspect-[3/4] shrink-0 overflow-hidden rounded-2xl shadow-xl border border-amber-500/30 snap-center transition-all hover:scale-105 hover:shadow-2xl z-20">
                <img 
                  src="/portnyagin.png" 
                  alt="Dmitry Portnyagin" 
                  className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100 bg-zinc-200"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if(target.src.includes('mentor2.jpg')) {
                      target.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                   <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                  <div className="absolute bottom-0 left-0 p-3 md:p-5 text-white">
                    <p className="font-black text-base md:text-xl leading-tight">Дмитрий Портнягин</p>
                    <p className="text-xs md:text-sm text-amber-400 font-medium mt-1">Трансформатор</p>
                  </div>
                </div>
              </div>

              {/* Mentor 3 */}
              <div className="group relative w-[140px] md:w-48 xl:w-56 aspect-[3/4] shrink-0 overflow-hidden rounded-2xl shadow-lg border border-zinc-200 snap-center transition-all hover:w-[160px] md:hover:w-56 xl:hover:w-64 hover:shadow-2xl z-10">
                <img 
                  src="/oskar.png" 
                  alt="Oskar Hartmann" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 bg-zinc-200"
                  onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     if(target.src.includes('mentor3.jpg')){
                        target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop";
                     }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 p-3 md:p-4 text-white">
                    <p className="font-bold text-sm md:text-base leading-tight">Oskar Hartmann</p>
                    <p className="text-[10px] md:text-xs text-amber-400 font-medium mt-1 uppercase tracking-widest hidden group-hover:block transition-all delay-100 duration-300 transform opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">Предприниматель</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
