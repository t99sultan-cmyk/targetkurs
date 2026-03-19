"use client";

import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/Highlight";
import { XCircle, CheckCircle2, ChevronDown } from "lucide-react";

export function AudienceSection() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden text-white" id="audience">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#27272a,transparent_50%)]" />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Brutal Truth Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              ⚡ Я видел сотни людей, которые <Highlight>начинали с нуля</Highlight> – и сливались.
            </h2>
          </motion.div>

          {/* The brutal truth list */}
          <div className="space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Ничего не сделали.</h3>
                <p className="text-zinc-400">Они были в восторге от возможностей, но так и не перешли к действиям.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Сдались при первых трудностях.</h3>
                <p className="text-zinc-400">Они пробовали, но опустили руки, как только столкнулись с первыми препятствиями.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Выбрали уйти в шаге от прорыва.</h3>
                <p className="text-zinc-400">Они были максимально близки к результату, но предпочли бросить всё.</p>
              </div>
            </motion.div>

            <div className="py-8 space-y-4 italic text-zinc-500 text-center border-y border-white/5">
              <p>📌 А потом проходит месяц, два, полгода…</p>
              <p>👉 Они смотрят, как их одногруппники выходят на 1 000 000₸+, а они всё ещё в поисках клиентов за 30 000₸.</p>
              <p>👉 Они листают вакансии, где требуют “опыт от 1 года” – и понимают, что рынок идёт вперёд без них.</p>
              <p>👉 Они жалеют, что в тот момент выбрали сдаться.</p>
            </div>
          </div>

          {/* Warning Section */}
          <div className="space-y-8 mb-16">
             <div className="p-8 rounded-[2.5rem] bg-red-950/20 border border-red-900/30">
                <h3 className="text-xl font-black mb-6 text-red-500 uppercase tracking-widest">⚠️ Сразу предупреждаю:</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 text-zinc-300">
                    <XCircle className="w-5 h-5 text-red-500" /> Я не работаю с теми, кто сдаётся.
                  </p>
                  <p className="flex items-center gap-3 text-zinc-300">
                    <XCircle className="w-5 h-5 text-red-500" /> Если ты привык ныть и уходить при первой же трудности – тебе не место в команде.
                  </p>
                </div>
             </div>
          </div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-emerald-950/20 border border-emerald-900/50 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#10b98122,transparent_60%)] pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-black mb-6 relative z-10">
              Но если ты готов идти до конца – <br />
              я помогу тебе выйти на <span className="text-emerald-400">1 000 000₸+</span>.
            </h3>
            <p className="text-lg md:text-xl text-emerald-100/80 mb-8 font-medium relative z-10 max-w-2xl mx-auto">
              Вот почему важно дожимать. Если ты не остановишься – ты пройдёшь дальше, чем 90% новичков. Мы не бросаем своих. Мы доводим до результата.
            </p>
            
            <div className="mt-8 pt-8 border-t border-emerald-900/30 relative z-10 text-center">
              <p className="text-emerald-300 font-medium text-lg md:text-xl">🔥 Главное – слушай внимательно. Не понял – <strong className="text-white">переспроси.</strong> Мы не бросаем своих. <strong className="text-white">Мы доводим до результата.</strong></p>
            </div>
          </motion.div>

          {/* Dedicated Transition Block to 4 Puzzles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-10 md:p-16 rounded-[3rem] bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)] text-center relative overflow-hidden"
          >
            {/* Glowing accents for the bridge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent blur-sm" />
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-amber-500/10 rounded-full flex items-center justify-center mb-2 shadow-[0_0_40px_rgba(245,158,11,0.2)] border border-amber-500/20">
                <span className="text-4xl md:text-5xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🚀</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Готов? Тогда смотри:
              </h2>
              
              <p className="text-xl md:text-2xl text-zinc-300 font-medium max-w-2xl leading-relaxed">
                Вот <span className="text-amber-400 font-bold px-3 py-1 bg-amber-500/10 rounded-xl border border-amber-500/20 whitespace-nowrap">4 ключевых элемента</span>,<br className="hidden md:block" /> которые помогут тебе не слиться и дойти до <span className="text-white font-black whitespace-nowrap">1 000 000 ₸+</span>.
              </p>

              <div className="mt-12 animate-bounce bg-white/5 p-4 rounded-full border border-white/10 backdrop-blur-md">
                <ChevronDown className="w-8 h-8 text-amber-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
