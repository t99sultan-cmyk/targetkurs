"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap, Briefcase, TrendingUp, Presentation, Video } from "lucide-react";

export function DisclaimersSection() {
  const outcomes = [
    { title: "Как находить клиентов", desc: "Которые сами пишут тебе и просят взять их в работу (чтобы не бегать за заказами и не унижаться в директе)", icon: <Users className="w-6 h-6" /> },
    { title: "Как запускать рекламу", desc: "Которая реально даёт прибыль бизнесу (чтобы клиент платил за результат, а не жаловался на лиды)", icon: <Target className="w-6 h-6" /> },
    { title: "Как продавать себя дорого", desc: "Уверенно называть чек 300 000₸+ (чтобы клиенты не торговались и не сливались на переговорах)", icon: <Briefcase className="w-6 h-6" /> },
    { title: "Как выстроить систему", desc: "Регулярного поиска клиентов (чтобы никогда не зависеть от случайных заказов и алгоритмов)", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Как создать личный бренд", desc: "Стать заметным игроком (чтобы клиенты сами писали: «Вы ещё берёте проекты?»)", icon: <Presentation className="w-6 h-6" /> },
    { title: "Как не сливать деньги", desc: "Сразу идти к 1 000 000₸ (чтобы не терять годы на пробивание стены лбом)", icon: <Zap className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-[#fafafa] relative overflow-hidden text-zinc-950">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight hover:scale-[1.01] transition-transform"
            >
              Что ты <span className="text-emerald-500 border-b-4 border-emerald-500 pb-1">реально получишь</span> на интенсиве?
            </motion.h2>
            <p className="text-lg text-zinc-600 font-medium max-w-2xl mx-auto">
              Ты не просто послушаешь очередной «вебинар». Ты заберёшь систему, которая уже работает у сотен учеников.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {outcomes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group hover:border-emerald-200 transition-colors"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-950 text-white relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl mix-blend-screen" />
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                <Video className="w-10 h-10 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-2 flex items-center gap-2">
                  + Личный Zoom-созвон со мной
                </h4>
                <p className="text-emerald-100/70 text-lg mb-4">
                  Где я дам пошаговый план выхода на 1 000 000₸+.
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
