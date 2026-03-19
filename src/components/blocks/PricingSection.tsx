"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Gift, XCircle, ArrowRight } from "lucide-react";
import { Countdown } from "@/components/ui/Countdown";

export function PricingSection() {
  // The bonuses array is no longer used directly for rendering in the same way,
  // but the instruction implies it might be replaced or removed.
  // The new bonus structure is directly in the JSX.
  // Keeping the original bonuses array definition here as it's not explicitly removed
  // but its usage in JSX will be replaced.
  const bonuses = [
    { title: "Личный Zoom-созвон со мной", value: "50 000₸", desc: "Приходишь на живой разбор, где я отвечаю на вопросы и даю персональные рекомендации." },
    { title: "Практики уверенности и мышления", value: "150 000₸", desc: "Избавишься от страхов общаться с клиентами и перейдёшь на новый уровень мышления." },
    { title: "Договор для работы с клиентами", value: "50 000₸", desc: "Юридически составленный договор, который защитит тебя от проблемных клиентов." },
    { title: "Официальный Сертификат", value: "Бесценный", desc: "Подтверждение твоих навыков, которое поможет легче закрывать заказы." },
    { title: "Возможность войти в команду", value: "БЕСЦЕННО", desc: "Лучшие смогут работать со мной на 8+ проектах: от 1 000 000₸ в месяц." }
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white relative" id="pricing">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10b98122,transparent_60%)] pointer-events-none" />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight flex flex-col items-center gap-4"
          >
            <span className="text-5xl">🎯</span>
            Как попасть в команду и всё это получить?
          </motion.h2>
          <div className="space-y-4 text-lg md:text-xl text-zinc-300 font-medium max-w-2xl mx-auto">
             <p>Для тех, кто дошёл до конца, я делаю закрытый оффер.</p>
             <p>Ты можешь получить доступ к моей стратегии, разборам и шаблонам не за <strong className="text-red-400 line-through">250 000₸</strong> (столько стоит моя личная консультация), а за символическую цену.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
           <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
           >
              <div className="space-y-4">
                 <h3 className="text-2xl font-black text-emerald-400 flex items-center gap-2"><span className="text-3xl">💰</span> Почему не бесплатно?</h3>
                 <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-4 text-zinc-300 font-medium">
                    <p>Я не верю в бесплатное. Люди не ценят то, что достаётся даром.</p>
                    <p>Символическая цена в 1 990₸ – это <strong className="text-white">фильтр</strong>. Фильтр от нытиков, халявщиков и тех, кто «просто смотрит, но ничего не делает».</p>
                    <p>Если для тебя 1 990₸ (цена чашки кофе) – это дорого за знания, которые приносят миллионы, <strong className="text-red-400">нам точно не по пути.</strong></p>
                 </div>
              </div>

              <div className="space-y-4">
                 <h3 className="text-2xl font-black text-white flex items-center gap-2"><span className="text-3xl">🔥</span> Что ты получаешь прямо сейчас за 1 990₸?</h3>
                 <div className="space-y-3">
                    <div className="flex gap-4 p-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl items-start">
                       <span className="text-2xl pt-1">🎁</span>
                       <div>
                          <p className="font-bold text-white text-lg">Бонус 1: Пошаговый план «Как выйти на 1 000 000₸+ за 60 дней»</p>
                          <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider mt-1">(Ценность: 50 000₸)</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl items-start">
                       <span className="text-2xl pt-1">🎁</span>
                       <div>
                          <p className="font-bold text-white text-lg">Бонус 2: Скрипты, которые закрывают 8 из 10 клиентов на высокий чек</p>
                          <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider mt-1">(Ценность: 70 000₸)</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl items-start">
                       <span className="text-2xl pt-1">🎁</span>
                       <div>
                          <p className="font-bold text-white text-lg">Бонус 3: Шаблон договора, который защитит тебя от неадекватных клиентов</p>
                          <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider mt-1">(Ценность: 30 000₸)</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl items-start">
                       <span className="text-2xl pt-1">🎁</span>
                       <div>
                          <p className="font-bold text-white text-lg">Бонус 4: Доступ к закрытой лекции «Как продавать свои услуги бизнесу с помощью нейросетей»</p>
                          <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider mt-1">(Ценность: 100 000₸)</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-5 bg-emerald-900/20 border border-emerald-500/30 rounded-2xl items-start shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                       <span className="text-3xl pt-1 animate-pulse">🔥</span>
                       <div>
                          <p className="font-black text-white text-xl">Главный Бонус: Возможность попасть ко мне в команду и получить готовые проекты</p>
                          <p className="text-amber-400 text-sm font-black uppercase tracking-widest mt-2">(БЕСЦЕННО)</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Extra button after bonuses per user request */}
              <div className="pt-8 flex justify-center w-full">
                <a href="https://wa.me/77064089933?text=Здравствуйте,%20хочу%20записаться%20на%20интенсив" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                  <Button size="lg" className="h-16 px-8 text-lg font-black bg-white hover:bg-zinc-100 text-zinc-950 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:scale-105 group relative overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                       ЗАПИСАТЬСЯ НА ИНТЕНСИВ ЗА 1 990₸
                    </span>
                    <div className="absolute inset-0 bg-emerald-500/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
                  </Button>
                </a>
              </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[3rem] bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl lg:sticky lg:top-24"
           >
              <div className="text-center mb-8">
                 <div className="flex flex-col items-center justify-center gap-2 mb-6 bg-zinc-900/80 p-8 rounded-[2rem] border border-zinc-700 shadow-inner">
                    <div className="text-zinc-400 font-bold uppercase tracking-widest text-sm mb-2">Твоя цена сейчас:</div>
                    <div className="flex flex-row items-baseline justify-center gap-2 sm:gap-4 md:gap-6 whitespace-nowrap w-full overflow-hidden shrink-0">
                      <span className="text-red-500/70 line-through text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter decoration-2 sm:decoration-4">250 000₸</span>
                      <span className="text-white text-[2.5rem] sm:text-6xl md:text-7xl font-black tracking-tighter drop-shadow-md flex items-baseline">
                        1&nbsp;990<span className="text-2xl sm:text-4xl md:text-5xl text-emerald-500">₸</span>
                      </span>
                    </div>
                 </div>
                 
                 <div className="mt-6 mb-8 p-4 bg-red-950/20 border border-red-900/30 rounded-xl space-y-2">
                    <p className="font-black text-red-500 text-xl flex items-center justify-center gap-2"><span className="text-2xl">⏳</span> Осталось всего 7 мест.</p>
                    <p className="text-zinc-300 font-medium">Когда их заберут – цена станет <strong className="text-white">25 000₸</strong>. Либо мы просто закроем набор.</p>
                 </div>
              </div>

               <a href="https://wa.me/77064089933?text=Здравствуйте,%20хочу%20записаться%20на%20интенсив" target="_blank" rel="noopener noreferrer" className="block w-full">
                 <Button size="lg" className="w-full h-[88px] text-lg sm:text-xl font-black bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-[20px] shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02] group relative overflow-hidden px-4 md:px-8">
                   <span className="relative z-10 flex items-center justify-center gap-2 text-center whitespace-normal leading-tight">
                     👉 ЗАПИСАТЬСЯ ЗА 1 990₸
                   </span>
                   <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
                 </Button>
               </a>

               <div className="mt-8 scale-90">
                 <Countdown />
               </div>
           </motion.div>
        </div>

        {/* Guarantee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-8 rounded-[2.5rem] bg-emerald-950/30 border border-emerald-900/50 text-center"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-4 text-white">А что если это не твоё?</h4>
          <p className="text-emerald-100/70 text-lg">Если тебе не зайдёт мой формат подачи, стиль или ты поймёшь, что это не твоё – я верну 100% суммы в течение 14 дней. Без вопросов. Без хитрых условий. <strong className="text-emerald-400">Ты вообще ничем не рискуешь.</strong></p>
        </motion.div>

      </div>
    </section>
  );
}
