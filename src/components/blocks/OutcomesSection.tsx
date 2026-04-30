"use client";

import { motion, type Variants } from "framer-motion";
import {
  Target,
  Users,
  Zap,
  Briefcase,
  TrendingUp,
  Presentation,
  Video,
} from "lucide-react";

const cardsParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardsChild: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function OutcomesSection() {
  const outcomes = [
    { title: "Как находить клиентов", desc: "Которые сами пишут тебе и просят взять их в работу — без бега за заказами и унижений в директе.", icon: <Users className="w-6 h-6" /> },
    { title: "Как запускать рекламу", desc: "Которая реально даёт прибыль бизнесу — клиент платит за результат, а не жалуется на лиды.", icon: <Target className="w-6 h-6" /> },
    { title: "Как продавать себя дорого", desc: "Уверенно называть чек 300 000 ₸+ — клиенты не торгуются и не сливаются на переговорах.", icon: <Briefcase className="w-6 h-6" /> },
    { title: "Как выстроить систему", desc: "Регулярного поиска клиентов — никакой зависимости от случайных заказов и алгоритмов.", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Как создать личный бренд", desc: "Стать заметным игроком — клиенты сами пишут «Вы ещё берёте проекты?».", icon: <Presentation className="w-6 h-6" /> },
    { title: "Как не сливать деньги", desc: "Сразу идти к 1 000 000 ₸ — без потерянных лет на пробивание стены лбом.", icon: <Zap className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-[#fafafa] relative overflow-hidden text-zinc-950">
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] bg-emerald-500/10 rounded-full pointer-events-none"
        style={{ filter: "blur(60px)" }}
      />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="text-balance text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight"
            >
              Что ты <span className="text-emerald-500 border-b-4 border-emerald-500 pb-1">реально получишь</span> на интенсиве?
            </motion.h2>
            <p className="text-balance text-lg text-zinc-600 font-medium max-w-2xl mx-auto">
              Ты не послушаешь очередной «вебинар». Ты заберёшь систему, которая уже работает у сотен учеников.
            </p>
          </div>

          <motion.div
            variants={cardsParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {outcomes.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardsChild}
                className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group transition-colors hover:border-emerald-200"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-950 text-white relative overflow-hidden"
          >
            <div
              className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/20 rounded-full pointer-events-none"
              style={{ filter: "blur(60px)" }}
            />
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                <Video className="w-10 h-10 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-2 flex items-center gap-2">
                  + Личный Zoom-созвон со мной
                </h4>
                <p className="text-emerald-100/70 text-lg mb-4">
                  Где я дам пошаговый план выхода на 1 000 000 ₸+.
                </p>
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  Интенсив даёт шанс попасть в команду на 8+ проектов.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
